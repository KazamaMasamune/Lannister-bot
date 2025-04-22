
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Message from "./Message";
import { Send } from "lucide-react";
import { analyzeTywinResponse } from "@/utils/tywinBrain";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { toast } from "@/components/ui/sonner";

const ChatContainer = () => {
  const [messages, setMessages] = useState<Array<{ content: string; isUser: boolean }>>([]);
  const [input, setInput] = useState("");
  const [isThinking, setIsThinking] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    // Add user message
    setMessages(prev => [...prev, { content: input, isUser: true }]);
    
    // Simulate Tywin thinking
    setIsThinking(true);
    
    try {
      // Get ML-powered response
      const tywinResponse = await analyzeTywinResponse(input);
      setMessages(prev => [...prev, { content: tywinResponse, isUser: false }]);
    } catch (error) {
      console.error('Error getting response:', error);
      // Fallback message if something goes wrong
      setMessages(prev => [...prev, { 
        content: "A Lannister does not dignify technical failures with a response.", 
        isUser: false 
      }]);
      
      toast.error("There was an error processing your request.");
    } finally {
      setIsThinking(false);
    }
    
    setInput("");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto h-[80vh] flex flex-col bg-black/40 backdrop-blur-sm rounded-lg border border-[#8B0000]/30">
      <div className="p-4 border-b border-[#8B0000]/30 flex items-center">
        <Avatar className="h-10 w-10 mr-3">
          <AvatarImage src="/lovable-uploads/c4a53100-3a57-41f2-bfad-9b2ca2262fae.png" alt="Tywin Lannister" />
          <AvatarFallback className="bg-[#8B0000] text-gold-400">TL</AvatarFallback>
        </Avatar>
        <h1 className="text-xl font-bold text-gold-400">Lord Tywin Lannister</h1>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.length === 0 && (
          <div className="text-center text-gray-400 mt-8">
            <p className="mb-2 text-gold-400">Address Lord Tywin Lannister, Head of House Lannister</p>
            <p className="text-sm">Speak wisely. Lord Tywin does not suffer fools.</p>
          </div>
        )}
        
        {messages.map((message, index) => (
          <Message key={index} {...message} />
        ))}
        
        {isThinking && (
          <div className="bg-[#8B0000] text-gold-400 max-w-[80%] rounded-lg p-4 mr-auto">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-gold-400 animate-pulse"></div>
              <div className="w-2 h-2 rounded-full bg-gold-400 animate-pulse delay-150"></div>
              <div className="w-2 h-2 rounded-full bg-gold-400 animate-pulse delay-300"></div>
            </div>
          </div>
        )}
      </div>
      
      <div className="p-4 border-t border-[#8B0000]/30">
        <div className="flex gap-2">
          <Input
            placeholder="Address Lord Tywin..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            className="bg-gray-800 text-white border-gray-700"
          />
          <Button 
            onClick={handleSend} 
            disabled={isThinking || !input.trim()}
            className="bg-[#8B0000] hover:bg-[#800000]"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatContainer;
