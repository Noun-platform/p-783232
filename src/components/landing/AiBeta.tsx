
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const AiBeta = () => {
  const [email, setEmail] = useState("");
  const [showAssistant, setShowAssistant] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowAssistant(true);
  };

  return (
    <section className="px-[149px] py-20 max-md:px-10 max-md:py-[60px] border-t border-b border-gray-200">
      <div className="text-center mb-10">
        <h2 className="text-[40px] font-normal tracking-[1.2px] text-black mb-5">
          Be the first to try our beta AI assistant
        </h2>
        <p className="text-[25px] font-light tracking-[0.75px] text-black max-w-[614px] mx-auto my-0">
          Create detailed products briefs for manufacturers in seconds.
        </p>
      </div>

      {!showAssistant ? (
        <div className="max-w-md mx-auto">
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email Address
              </label>
              <Input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full"
              />
            </div>
            <Button 
              type="submit" 
              className="w-full bg-[#2F6DE6] text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Try AI Assistant
            </Button>
          </form>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="border rounded-xl p-6 bg-white shadow-sm">
            <div className="flex items-start mb-4">
              <div className="w-8 h-8 rounded-md bg-amber-700 flex items-center justify-center mr-3 flex-shrink-0">
                <span className="text-white text-sm">AI</span>
              </div>
              <div>
                <p className="text-sm mb-1">
                  I'm your beauty product brief assistant. Describe your product idea, 
                  including target market, key ingredients, benefits, and any specific 
                  requirements. I'll create a comprehensive brief for manufacturers.
                </p>
              </div>
            </div>
            <div className="mt-6 relative">
              <Input
                placeholder="Describe your beauty product idea..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="pr-10"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-blue-500">
                <Send size={18} />
              </button>
            </div>
            <p className="text-xs text-gray-400 mt-2">
              Press Enter to send. Shift+Enter for a new line
            </p>
          </div>
          
          <div className="border rounded-xl p-6 bg-white shadow-sm flex flex-col items-center justify-center text-center">
            <div className="w-12 h-12 rounded-full border border-amber-200 flex items-center justify-center mb-4">
              <div className="w-6 h-6 text-amber-500">⬦</div>
            </div>
            <h3 className="text-lg font-medium mb-2">No Product Brief Yet</h3>
            <p className="text-gray-500 text-sm mb-6 max-w-xs">
              Start by describing your beauty product in the chat.
              Include details about ingredients, benefits, and your
              target market.
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default AiBeta;
