import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 30, stiffness: 300, mass: 0.6 };
  const trailingX = useSpring(mouseX, springConfig);
  const trailingY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", handleMouseMove);
    document.body.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isVisible, mouseX, mouseY]);

  if (!isVisible) return null;

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @media (min-width: 768px) {
          html, body, a, button, input, select, textarea, [role="button"] {
            cursor: none !important;
          }
        }
      `,
        }}
      />

      <div className="hidden md:block">
        <motion.div
          className="fixed top-0 left-0 w-6 h-6 border border-primary pointer-events-none z-[9999] opacity-60"
          style={{
            x: trailingX,
            y: trailingY,
            translateX: "-50%",
            translateY: "-50%",
          }}
        />

        <motion.div
          className="fixed top-0 left-0 w-1.5 h-1.5 bg-primary pointer-events-none z-[9999]"
          style={{
            x: mouseX,
            y: mouseY,
            translateX: "-50%",
            translateY: "-50%",
          }}
        />
      </div>
    </>
  );
}
