import { Phone, MessageCircle, Headphones } from "lucide-react";

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col space-y-4 z-50">
      <a
        href="tel:+1234567890"
        className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg transition-colors"
        aria-label="Call us"
      >
        <Phone size={24} />
      </a>
      <a
        href="mailto:support@example.com"
        className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-colors"
        aria-label="Message us"
      >
        <MessageCircle size={24} />
      </a>
      <a
        href="#support"
        className="bg-purple-500 hover:bg-purple-600 text-white p-3 rounded-full shadow-lg transition-colors"
        aria-label="Support"
      >
        <Headphones size={24} />
      </a>
    </div>
  );
};

export default FloatingButtons;
