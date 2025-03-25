
import React, { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";

interface AIAssistantDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  email: string;
}

const AIAssistantDialog: React.FC<AIAssistantDialogProps> = ({
  open,
  onOpenChange,
  email,
}) => {
  const [message, setMessage] = useState("");

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    // Add logic to send message
    setMessage("");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[900px] p-0 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          <div className="border-r p-6">
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
            <form onSubmit={handleSendMessage} className="mt-auto">
              <div className="relative mt-6">
                <Input
                  placeholder="Describe your beauty product idea..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="pr-10"
                />
                <button 
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-blue-500"
                >
                  <Send size={18} />
                </button>
              </div>
              <p className="text-xs text-gray-400 mt-2">
                Press Enter to send. Shift+Enter for a new line
              </p>
            </form>
          </div>
          
          <div className="p-6 flex flex-col items-center justify-center text-center">
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
      </DialogContent>
    </Dialog>
  );
};

export default AIAssistantDialog;
