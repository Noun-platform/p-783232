import { toast } from 'sonner';

// Using environment variable for the OpenAI API key
// The user will need to set this in their .env file
const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

export const hasApiKey = () => {
  const keyExists = !!OPENAI_API_KEY;
  console.log('Checking if API key exists in env:', keyExists);
  return keyExists;
};

export const getApiKey = () => {
  if (!OPENAI_API_KEY) {
    console.error('No API key found in environment variables');
    return '';
  }
  return OPENAI_API_KEY;
};

export const callOpenAI = async (prompt: string, system: string = '') => {
  if (!hasApiKey()) {
    console.error('No API key provided in environment variables');
    toast.error('Missing OpenAI API key. Please check your .env file.');
    throw new Error('No API key provided');
  }

  try {
    console.log('Calling OpenAI with:', { promptLength: prompt.length, systemLength: system.length });
    
    const requestBody = {
      model: 'gpt-4o-mini', // Using a smaller model that costs less
      messages: [
        { role: 'system', content: system },
        { role: 'user', content: prompt }
      ],
      temperature: 0.7,
      max_tokens: 2000
    };
    
    console.log('Request body:', JSON.stringify(requestBody));
    
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${getApiKey()}`
      },
      body: JSON.stringify(requestBody)
    });

    console.log('Response status:', response.status);
    
    if (!response.ok) {
      const errorData = await response.json();
      console.error('OpenAI API Error:', errorData);
      
      // Check for quota exceeded error
      if (errorData.error?.code === 'insufficient_quota') {
        toast.error('OpenAI API quota exceeded. Please check your billing details or try a different API key.');
        throw new Error('OpenAI API quota exceeded. Please check your billing details or try a different API key.');
      }
      
      // Check for invalid API key
      if (errorData.error?.code === 'invalid_api_key') {
        toast.error('Invalid OpenAI API key. Please check your .env file.');
        throw new Error('Invalid OpenAI API key. Please check your .env file.');
      }
      
      throw new Error(errorData.error?.message || 'Failed to call OpenAI API');
    }

    const data = await response.json();
    console.log('OpenAI response received:', { 
      hasChoices: !!data.choices, 
      firstChoice: !!data.choices?.[0],
      contentSample: data.choices?.[0]?.message?.content?.substring(0, 50) 
    });
    
    if (!data.choices || !data.choices[0] || !data.choices[0].message) {
      console.error('Unexpected response format:', data);
      throw new Error('Received an invalid response from OpenAI');
    }
    
    return data.choices[0].message.content;
  } catch (error) {
    console.error('Error calling OpenAI:', error);
    if (error instanceof Error) {
      // Don't show duplicate toast if we've already shown one for specific errors
      if (!error.message.includes('quota exceeded') && !error.message.includes('invalid_api_key')) {
        toast.error(error.message);
      }
    } else {
      toast.error('An unknown error occurred');
    }
    throw error;
  }
};