import { useState } from 'react';
import { X, Plus, CheckCircle, AlertCircle, Upload, FileText, Trash2 } from 'lucide-react';
import { createTaskDirectly, uploadDocument } from '../lib/supabase';

interface TaskCreatorProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TaskCreator({ isOpen, onClose }: TaskCreatorProps) {
  const [task, setTask] = useState('');
  const [priority, setPriority] = useState<'critical' | 'high' | 'medium' | 'low'>('medium');
  const [page, setPage] = useState('');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [uploadProgress, setUploadProgress] = useState<{ [key: string]: number }>({});

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setSelectedFiles(prevFiles => [...prevFiles, ...files]);
  };

  const removeFile = (index: number) => {
    setSelectedFiles(prevFiles => prevFiles.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus('idle');

    try {
      // Upload documents first if any
      const documentUrls: string[] = [];
      
      if (selectedFiles.length > 0) {
        for (const file of selectedFiles) {
          try {
            setUploadProgress(prev => ({ ...prev, [file.name]: 0 }));
            const url = await uploadDocument(file, '3A Lending');
            documentUrls.push(url);
            setUploadProgress(prev => ({ ...prev, [file.name]: 100 }));
          } catch (uploadError) {
            console.error(`Failed to upload ${file.name}:`, uploadError);
            setStatus('error');
            setMessage(`Failed to upload ${file.name}`);
            return;
          }
        }
      }

      // Create task directly in Supabase
      const taskText = page ? `[${page}] ${task}` : task;
      await createTaskDirectly('3A Lending', {
        text: taskText,
        priority,
        time_estimate: 60, // Default time estimate
        documentUrls: documentUrls.length > 0 ? documentUrls : undefined,
      });

      setStatus('success');
      setMessage('Task created successfully in command center!');
      setTask('');
      setPriority('medium');
      setPage('');
      setSelectedFiles([]);
      setUploadProgress({});
      
      // Auto-close after success
      setTimeout(() => {
        onClose();
        setStatus('idle');
        setMessage('');
      }, 2000);
    } catch (error: any) {
      setStatus('error');
      setMessage(error.message || 'Failed to create task');
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75" onClick={onClose}></div>
        </div>

        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

        <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
          <div className="absolute top-0 right-0 pt-4 pr-4">
            <button
              type="button"
              className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              onClick={onClose}
            >
              <span className="sr-only">Close</span>
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="sm:flex sm:items-start">
            <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
              <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
                Create Task for 3A Lending Project
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="task" className="block text-sm font-medium text-gray-700">
                    Task Description
                  </label>
                  <textarea
                    id="task"
                    rows={3}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="e.g., Add loan application form to services page"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="priority" className="block text-sm font-medium text-gray-700">
                    Priority
                  </label>
                  <select
                    id="priority"
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                    value={priority}
                    onChange={(e) => setPriority(e.target.value as any)}
                  >
                    <option value="critical">Critical</option>
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="page" className="block text-sm font-medium text-gray-700">
                    Page/Section (optional)
                  </label>
                  <select
                    id="page"
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                    value={page}
                    onChange={(e) => setPage(e.target.value)}
                  >
                    <option value="">Select a page...</option>
                    <option value="Home">Home Page</option>
                    <option value="About">About Page</option>
                    <option value="Services">Services Page</option>
                    <option value="Contact">Contact Page</option>
                    <option value="Navigation">Navigation/Header</option>
                    <option value="Footer">Footer</option>
                    <option value="Forms">Forms/Applications</option>
                    <option value="Content">Content/Copy</option>
                    <option value="Design">Design/Styling</option>
                    <option value="SEO">SEO/Meta</option>
                    <option value="Other">Other</option>
                  </select>
                  <p className="mt-1 text-xs text-gray-500">
                    Helps direct where fixes or content should be applied
                  </p>
                </div>

                <div>
                  <label htmlFor="documents" className="block text-sm font-medium text-gray-700">
                    Attach Documents (optional)
                  </label>
                  <div className="mt-1">
                    <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500">
                      <div className="flex items-center justify-center w-full px-4 py-2 border-2 border-gray-300 border-dashed rounded-md hover:border-gray-400">
                        <Upload className="w-5 h-5 mr-2" />
                        <span>Click to upload files</span>
                      </div>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        className="sr-only"
                        multiple
                        onChange={handleFileSelect}
                      />
                    </label>
                  </div>
                  
                  {selectedFiles.length > 0 && (
                    <div className="mt-3 space-y-2">
                      {selectedFiles.map((file, index) => (
                        <div key={index} className="flex items-center justify-between bg-gray-50 px-3 py-2 rounded-md">
                          <div className="flex items-center">
                            <FileText className="w-4 h-4 text-gray-400 mr-2" />
                            <span className="text-sm text-gray-900">{file.name}</span>
                            <span className="text-xs text-gray-500 ml-2">({(file.size / 1024).toFixed(1)} KB)</span>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeFile(index)}
                            className="text-red-600 hover:text-red-800"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {Object.keys(uploadProgress).length > 0 && (
                    <div className="mt-2 space-y-1">
                      {Object.entries(uploadProgress).map(([fileName, progress]) => (
                        <div key={fileName} className="text-xs text-gray-600">
                          {fileName}: {progress}% uploaded
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {status === 'success' && (
                  <div className="rounded-md bg-green-50 p-4">
                    <div className="flex">
                      <CheckCircle className="h-5 w-5 text-green-400" />
                      <div className="ml-3">
                        <p className="text-sm font-medium text-green-800">{message}</p>
                      </div>
                    </div>
                  </div>
                )}

                {status === 'error' && (
                  <div className="rounded-md bg-red-50 p-4">
                    <div className="flex">
                      <AlertCircle className="h-5 w-5 text-red-400" />
                      <div className="ml-3">
                        <p className="text-sm font-medium text-red-800">{message}</p>
                      </div>
                    </div>
                  </div>
                )}

                <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                  <button
                    type="submit"
                    disabled={loading || !task.trim()}
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? 'Creating...' : 'Create Task'}
                  </button>
                  <button
                    type="button"
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:w-auto sm:text-sm"
                    onClick={onClose}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}