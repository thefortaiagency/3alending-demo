import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function uploadDocument(file: File, projectName: string): Promise<string> {
  // Create a unique file name
  const timestamp = Date.now();
  const safeName = file.name.replace(/[^a-zA-Z0-9.-]/g, '_');
  const fileName = `${projectName}/${timestamp}-${safeName}`;
  
  try {
    // Try to upload to the default avatars bucket first (usually exists)
    // If you have a specific bucket, replace 'avatars' with your bucket name
    const bucketName = 'avatars'; // Most Supabase projects have this by default
    
    // Upload to Supabase Storage
    const { data, error } = await supabase.storage
      .from(bucketName)
      .upload(`documents/${fileName}`, file, {
        cacheControl: '3600',
        upsert: false
      });
      
    if (error) {
      // If the bucket doesn't exist, we'll store the file as a base64 string in the task metadata
      console.warn('Storage upload failed, falling back to base64 encoding:', error);
      
      // Convert file to base64
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          const base64String = reader.result as string;
          resolve(base64String);
        };
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });
    }
    
    // Get the public URL
    const { data: { publicUrl } } = supabase.storage
      .from(bucketName)
      .getPublicUrl(`documents/${fileName}`);
      
    return publicUrl;
  } catch (error) {
    console.error('Error uploading document:', error);
    throw error;
  }
}

export async function createTaskDirectly(projectName: string, taskData: {
  text: string;
  priority: string;
  time_estimate: number;
  documentUrls?: string[];
}) {
  try {
    // Get user ID for the command center user
    // Use the specific user ID that owns the existing 3A Lending tasks
    const userId = '9850b992-3985-48e9-9b8c-24ad1160b8b2';

    // Use the existing 3A Lending project ID
    const projectId = '62ef6003-132d-4a45-9ce6-ac0df422d1f3';

    // Create the task
    const { data: task, error: taskError } = await supabase
      .from('adhd_tasks')
      .insert({
        user_id: userId,
        project_id: projectId,
        text: taskData.text,
        priority: taskData.priority,
        time_estimate: taskData.time_estimate,
        completed: false,
        metadata: taskData.documentUrls ? { documentUrls: taskData.documentUrls } : {}
      })
      .select()
      .single();

    if (taskError) {
      throw taskError;
    }

    return task;
  } catch (error) {
    console.error('Error creating task:', error);
    throw error;
  }
}