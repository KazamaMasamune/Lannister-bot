
import { cn } from "@/lib/utils";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface MessageProps {
  content: string;
  isUser: boolean;
}

const Message = ({ content, isUser }: MessageProps) => {
  return (
    <div className="flex items-start gap-3">
      {!isUser && (
        <Avatar className="h-8 w-8 mt-1">
          <AvatarImage src="/lovable-uploads/c4a53100-3a57-41f2-bfad-9b2ca2262fae.png" alt="Tywin Lannister" />
          <AvatarFallback className="bg-[#8B0000] text-gold-400">TL</AvatarFallback>
        </Avatar>
      )}
      
      <div
        className={cn(
          "max-w-[80%] rounded-lg p-4",
          isUser
            ? "bg-gray-700 text-white ml-auto"
            : "bg-[#8B0000] text-gold-400"
        )}
      >
        <p className="text-sm md:text-base">{content}</p>
      </div>
      
      {isUser && (
        <Avatar className="h-8 w-8 mt-1">
          <AvatarFallback className="bg-gray-600 text-white">
            YOU
          </AvatarFallback>
        </Avatar>
      )}
    </div>
  );
};

export default Message;
