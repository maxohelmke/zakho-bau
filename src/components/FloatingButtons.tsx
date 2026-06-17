import { MessageCircle } from "lucide-react";

const FloatingButtons = () => {
  return (
    <>
      {/* WhatsApp */}
      <a
        href="https://wa.me/4915788888852"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp Kontakt"
        className="fixed bottom-24 right-[max(1rem,env(safe-area-inset-right))] z-40 flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-transform hover:scale-110 md:bottom-6"
        style={{ backgroundColor: "#25D366" }}
      >
        <MessageCircle className="h-6 w-6" style={{ color: "#fff" }} />
      </a>
    </>
  );
};

export default FloatingButtons;

