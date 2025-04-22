
import ChatContainer from "@/components/ChatContainer";

const Index = () => {
  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center p-4"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/lovable-uploads/c4a53100-3a57-41f2-bfad-9b2ca2262fae.png')`,
      }}
    >
      <ChatContainer />
    </div>
  );
};

export default Index;
