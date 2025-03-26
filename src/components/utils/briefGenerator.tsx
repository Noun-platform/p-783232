import { callOpenAI } from './openai';
import { toast } from 'sonner';

const SYSTEM_PROMPT = `
You are an AI assistant specialized in beauty product formulation and manufacturing. Your task is to create comprehensive product briefs for beauty brands to share with manufacturers.

Analyze the user's input about their product idea and create a structured JSON brief that includes:
1. Product name and category
2. Tagline
3. Overview of the product
4. Target market (demographics, age range, pain points)
5. Key ingredients with benefits
6. Product claims and benefits
7. Manufacturing requirements (formula type, product form, special requirements)
8. Packaging and branding suggestions
9. Price point and market positioning
10. Regulatory and compliance considerations
11. MOQ (Minimum Order Quantity)
12. Vendor location
13. Manufacturing capability

Return ONLY the JSON output without any additional text or explanations. Ensure the response is valid JSON format with the following fields:
- productName (string)
- productCategory (string)
- tagline (string)
- overview (string)
- targetMarket (object with demographics and ageRange properties)
- ingredients (array of objects each with name and benefit properties)
- benefits (array of strings)
- manufacturing (object with formulaType, productForm, specialRequirements properties)
- packaging (object with type, size, brandingSuggestions properties)
- pricing (object with targetRetailPrice, marketPositioning properties)
- regulatory (string or array of strings)
- moq (number)
- vendorLocation (string)
- capability (string)
`;

export const generateBrief = async (userInput: string) => {
  try {
    console.log('Generating brief for input:', userInput.substring(0, 50) + '...');
    console.log('API Key Status:', !!import.meta.env.VITE_OPENAI_API_KEY);
    
    const response = await callOpenAI(userInput, SYSTEM_PROMPT);
    console.log('Raw OpenAI response:', response.substring(0, 100) + '...');
    
    // Try to parse the JSON response
    try {
      const parsedResponse = JSON.parse(response);
      console.log('Successfully parsed JSON response');
      return parsedResponse;
    } catch (parseError) {
      console.error('Failed to parse OpenAI response as JSON:', parseError);
      
      // Attempt to extract JSON from the text response
      const jsonMatch = response.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        try {
          const extractedJson = jsonMatch[0];
          console.log('Extracted JSON from response:', extractedJson.substring(0, 100) + '...');
          const parsedExtracted = JSON.parse(extractedJson);
          return parsedExtracted;
        } catch (extractError) {
          console.error('Failed to extract JSON from response:', extractError);
          toast.error('The AI generated an invalid response format. Please try again with more details.');
          throw new Error('Failed to parse the AI response into a valid brief format');
        }
      } else {
        toast.error('The AI generated an invalid response format. Please try again.');
        throw new Error('Failed to parse the AI response into a valid brief format');
      }
    }
  } catch (error) {
    console.error('Error generating brief:', error);
    throw error;
  }
};