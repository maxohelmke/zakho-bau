import { Phone, MessageCircle } from "lucide-react";

const FloatingButtons = () => {
  return (
    <>
      {/* WhatsApp */}
      <a
        href="https://wa.me/4915254090013"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp Kontakt"
        className="fixed bottom-24 right-[max(1rem,env(safe-area-inset-right))] z-40 flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-transform hover:scale-110 md:bottom-6"
        style={{ backgroundColor: "#25D366" }}
      >
        <MessageCircle className="h-6 w-6" style={{ color: "#fff" }} />
      </a>

      {/* Mobile call button */}
      <a
        href="tel:+4915254090013"
        aria-label="Jetzt anrufen"
        className="fixed bottom-[max(1.5rem,env(safe-area-inset-bottom))] right-[max(1rem,env(safe-area-inset-right))] z-40 flex h-14 w-14 items-center justify-center rounded-full bg-accent shadow-lg shadow-accent/30 transition-transform hover:scale-110 md:hidden"
      >
        <Phone className="h-6 w-6 text-accent-foreground" />
      </a>
    </>
  );
};

export default FloatingButtons;
