import React, { useState, useRef, useEffect } from 'react';
import { SendHorizontal, Loader2, Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';
import { generateBrief } from '@/components/utils/briefGenerator';
import { toast } from 'sonner';
import { hasApiKey } from '@/components/utils/openai';
import { callOpenAI } from '@/components/utils/openai';

type Message = {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
};

interface ChatInterfaceProps {
  onBriefGenerated: (brief: any) => void;
}

const ChatInterface = ({ onBriefGenerated }: ChatInterfaceProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "I'm your beauty product assistant. I can help answer questions about beauty products or create a comprehensive product brief for manufacturers. Just describe your product idea or ask me a question!",
      role: 'assistant',
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [apiKeyStatus, setApiKeyStatus] = useState(hasApiKey());

  // Check for API key on mount
  useEffect(() => {
    const keyExists = hasApiKey();
    setApiKeyStatus(keyExists);
    
    if (!keyExists) {
      const apiWarning: Message = {
        id: 'api-warning',
        content: "⚠️ No OpenAI API key detected. Please add your VITE_OPENAI_API_KEY to the .env file.",
        role: 'assistant',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, apiWarning]);
    }
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Function to determine if input is a product brief request or a general question
  const isProductBriefRequest = (text: string): boolean => {
    // Enhanced detection for product brief requests
    const productKeywords = [
      'product', 'create', 'make', 'develop', 'formulate', 'beauty product',
      'skincare', 'makeup', 'cosmetic', 'lotion', 'cream', 'serum', 'cleanser',
      'moisturizer', 'foundation', 'lipstick', 'lip', 'crayon', 'ingredient', 
      'packaging', 'formula', 'target market', 'anti-aging', 'manufacturing',
      'brief', 'formulation', 'shade', 'gloss', 'matte', 'color'
    ];
    
    const lowerText = text.toLowerCase();
    
    // Check minimum length - even a short product description should be at least 15 chars
    if (text.length < 15) return false;
    
    // Count product-related keywords
    const keywordCount = productKeywords.reduce((count, keyword) => {
      return lowerText.includes(keyword.toLowerCase()) ? count + 1 : count;
    }, 0);
    
    // If it contains a clear question marker and few product keywords, it's likely a question
    const isQuestion = lowerText.includes('?') || 
                      lowerText.startsWith('what') || 
                      lowerText.startsWith('how') || 
                      lowerText.startsWith('why') ||
                      lowerText.startsWith('can you') ||
                      lowerText.startsWith('do you') ||
                      lowerText.startsWith('could you');
    
    // Obvious product brief requests often mention specific product types
    const mentionsProductType = /lip|cream|serum|foundation|moisturizer|cleanser|mask|oil|sunscreen/i.test(lowerText);
    
    // Decision logic:
    // 1. Contains multiple product keywords AND mentions specific product type → Brief
    // 2. High keyword count but also is a question → General Question
    // 3. Mentions specific product type and has some keywords → Brief
    
    if (keywordCount >= 3 && mentionsProductType && !isQuestion) {
      return true;
    } else if (keywordCount >= 2 && mentionsProductType) {
      return true;
    } else if (isQuestion && keywordCount < 2) {
      return false;
    }
    
    // Default to treating as product brief if it has multiple keywords
    return keywordCount >= 3;
  };

  const handleGeneralQuestion = async (userMessage: Message) => {
    try {
      const systemPrompt = `
      You are an AI assistant specializing in beauty products and formulation. 
      Your role is to provide helpful, informative responses about beauty products, 
      ingredients, formulation, manufacturing, and related topics.
      
      Be concise, accurate, and helpful. If you don't know something, admit it rather than making up information.
      
      If the user seems to be describing a product they want to create but their description is very vague,
      provide a helpful response that guides them to provide more specific details about their product idea.
      
      If they ask about creating a specific product type (like "how to make lip gloss"), provide general 
      information about that product type and what's typically involved in creating it.
      `;
      
      const response = await callOpenAI(userMessage.content, systemPrompt);
      
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: response,
        role: 'assistant',
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev.filter(msg => msg.id !== 'processing'), aiMessage]);
      
    } catch (error) {
      console.error('Error handling general question:', error);
      handleResponseError(error);
    }
  };

  const handleResponseError = (error: any) => {
    // Remove the processing message
    setMessages((prev) => prev.filter(msg => msg.id !== 'processing'));
    
    let errorContent = "I'm sorry, I couldn't process your request. Please try again.";
    
    // Check for specific errors
    if (error instanceof Error) {
      if (error.message.includes('quota exceeded')) {
        errorContent = "OpenAI API quota exceeded. Please check your billing details or try a different API key in your .env file.";
      } else if (error.message.includes('invalid_api_key')) {
        errorContent = "Invalid OpenAI API key. Please check your API key in your .env file.";
      } else if (error.message.includes('No API key provided')) {
        errorContent = "Please add your VITE_OPENAI_API_KEY to the .env file.";
      }
    }
    
    const errorMessage: Message = {
      id: (Date.now() + 1).toString(),
      content: errorContent,
      role: 'assistant',
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, errorMessage]);
  };

  const handleSendMessage = async () => {
    if (!input.trim() || isProcessing) return;
    
    // Check API key before proceeding
    if (!apiKeyStatus) {
      toast.error('Missing OpenAI API key. Please add VITE_OPENAI_API_KEY to your .env file.');
      return;
    }
    
    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      role: 'user',
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsProcessing(true);
    
    // Add a processing message
    const processingMessage: Message = {
      id: 'processing',
      content: "I'm processing your message, please wait...",
      role: 'assistant',
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, processingMessage]);
    
    try {
      // Determine if this is a product brief request or general question
      if (isProductBriefRequest(userMessage.content)) {
        console.log('Generating product brief');
        const brief = await generateBrief(userMessage.content);
        
        // Remove the processing message and add the success message
        setMessages((prev) => prev.filter(msg => msg.id !== 'processing'));
        
        const aiMessage: Message = {
          id: (Date.now() + 1).toString(),
          content: "I've created your product brief based on the information provided. You can view the structured brief in the panel to the right.",
          role: 'assistant',
          timestamp: new Date(),
        };
        
        setMessages((prev) => [...prev, aiMessage]);
        onBriefGenerated(brief);
        toast.success('Product brief generated successfully!');
      } else {
        console.log('Handling general question');
        await handleGeneralQuestion(userMessage);
      }
      
    } catch (error) {
      console.error('Error processing message:', error);
      handleResponseError(error);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex flex-col h-full bg-white/50 rounded-2xl border border-[#E3E3E3] overflow-hidden shadow-sm glass-card">
      <div className="p-4 border-b border-[#E3E3E3] bg-[#F2F2F2]/50">
        <h2 className="text-sm font-medium text-[#002958]">Chat with AI Assistant</h2>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={cn(
              "flex gap-3 animate-slideUp",
              message.role === 'user' ? "flex-row-reverse" : ""
            )}
          >
            <div className={cn(
              "flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-md border text-sm",
              message.role === 'user' 
                ? "bg-[#E3E3E3] text-[#002958] border-[#E3E3E3]" 
                : "bg-[#002958] text-white border-[#002958]"
            )}>
              {message.role === 'user' ? 'You' : <Bot className="h-4 w-4" />}
            </div>
            
            <div className={cn(
              "rounded-lg px-4 py-3 max-w-[80%]",
              message.role === 'user' 
                ? "bg-[#E3E3E3] text-[#002958]" 
                : "bg-white border border-[#E3E3E3]"
            )}>
              <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      
      <div className="p-4 border-t border-[#E3E3E3] bg-white/80">
        <div className="flex items-end gap-2">
          <Textarea
            placeholder="Ask a question or describe your beauty product idea..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="min-h-24 resize-none border-[#E3E3E3] focus-visible:ring-[#3D86F7]"
            disabled={isProcessing}
          />
          <Button 
            onClick={handleSendMessage}
            size="icon"
            className="h-10 w-10 shrink-0 rounded-full bg-[#F7AB3D] hover:bg-[#F7AB3D]/90 transition-colors"
            disabled={isProcessing || !input.trim() || !apiKeyStatus}
          >
            {isProcessing ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <SendHorizontal className="h-4 w-4" />
            )}
            <span className="sr-only">Send message</span>
          </Button>
        </div>
        <p className="text-xs text-[#828282] mt-2">
          Press Enter to send, Shift+Enter for a new line
        </p>
      </div>
    </div>
  );
};

export default ChatInterface;
