import { useEffect } from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";

const BackgroundWrapper = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    document.body.classList.add("main-site-theme");

    return () => {
      document.body.classList.remove("main-site-theme");
    };
  }, []);

  return (
    <>
      {/* BACKGROUND (does NOT affect layout) */}
      <div className="fixed inset-0 bg-black -z-10 overflow-hidden">
        <BackgroundBeams />
      </div>

      {/* SITE CONTENT */}
      {children}
    </>
  );
};

export default BackgroundWrapper;
