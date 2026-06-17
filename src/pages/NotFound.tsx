import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { usePageSeo } from "@/hooks/use-page-seo";

const NotFound = () => {
  const location = useLocation();
  usePageSeo({
    title: "Seite nicht gefunden | Zakho Bau",
    description: "Die angeforderte Seite wurde nicht gefunden.",
    path: location.pathname || "/404",
    robots: "noindex,follow",
  });

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen min-w-0 max-w-full items-center justify-center overflow-x-hidden bg-muted">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">Oops! Page not found</p>
        <a href="/" className="text-primary underline hover:text-primary/90">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;

