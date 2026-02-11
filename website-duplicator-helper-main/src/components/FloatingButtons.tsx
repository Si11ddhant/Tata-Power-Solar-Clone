import { Phone, MessageCircle, Headphones } from "lucide-react";

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <a
        href="tel:+1234567890"
        className="bg-primary text-primary-foreground p-3 rounded-full shadow-lg hover:bg-primary/90 transition-colors"
        aria-label="Call us"
      >
        <Phone className="w-6 h-6" />
      </a>
      <a
        href="mailto:support@example.com"
        className="bg-accent text-accent-foreground p-3 rounded-full shadow-lg hover:bg-accent/90 transition-colors"
        aria-label="Message us"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
      <a
        href="#support"
        className="bg-secondary text-secondary-foreground p-3 rounded-full shadow-lg hover:bg-secondary/90 transition-colors"
        aria-label="Support"
      >
        <Headphones className="w-6 h-6" />
      </a>
    </div>
  );
};

export default FloatingButtons;
