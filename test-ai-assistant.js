const { default: fetch } = require('node-fetch');

async function testAIAssistant() {
  try {
    console.log('Testing AI Assistant API...');
    
    const response = await fetch('http://localhost:3000/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: 'What types of loans do you offer?',
        threadId: null
      }),
    });

    const data = await response.json();
    
    if (response.ok) {
      console.log('✅ Success!');
      console.log('Response:', data.response);
      console.log('Thread ID:', data.threadId);
    } else {
      console.log('❌ Error:');
      console.log('Status:', response.status);
      console.log('Error:', data);
    }
  } catch (error) {
    console.error('❌ Network Error:', error.message);
  }
}

testAIAssistant();