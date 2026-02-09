import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef, useEffect, useState, ReactNode } from "react";

interface SmoothScrollProps {
  children: ReactNode;
}

const SmoothScroll = ({ children }: SmoothScrollProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [pageHeight, setPageHeight] = useState(0);

  const { scrollY } = useScroll();
  const smoothY = useSpring(scrollY, {
    damping: 50,
    stiffness: 400,
    mass: 0.5,
  });

  const transform = useTransform(smoothY, (value) => -value);

  useEffect(() => {
    const updateHeight = () => {
      if (containerRef.current) {
        setPageHeight(containerRef.current.scrollHeight);
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    
    // Update after images load
    const images = document.querySelectorAll("img");
    images.forEach((img) => {
      img.addEventListener("load", updateHeight);
    });

    return () => {
      window.removeEventListener("resize", updateHeight);
      images.forEach((img) => {
        img.removeEventListener("load", updateHeight);
      });
    };
  }, []);

  return (
    <>
      <div style={{ height: pageHeight }} />
      <motion.div
        ref={containerRef}
        style={{ y: transform }}
        className="fixed top-0 left-0 right-0 will-change-transform"
      >
        {children}
      </motion.div>
    </>
  );
};

export default SmoothScroll;
