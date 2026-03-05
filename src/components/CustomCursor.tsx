import { useEffect, useRef } from "react";
import cursorIcon from "@/assets/cursor-icon.png";

const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  const hovering = useRef(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX - 12}px, ${e.clientY - 12}px)`;
      }
    };

    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest("a, button, [role='button'], input, textarea, .cursor-pointer")) {
        hovering.current = true;
        ringRef.current?.classList.add("scale-150", "opacity-80");
        ringRef.current?.classList.remove("opacity-30");
      }
    };

    const out = () => {
      hovering.current = false;
      ringRef.current?.classList.remove("scale-150", "opacity-80");
      ringRef.current?.classList.add("opacity-30");
    };

    let raf: number;
    const animate = () => {
      ringPos.current.x += (pos.current.x - ringPos.current.x) * 0.15;
      ringPos.current.y += (pos.current.y - ringPos.current.y) * 0.15;
      if (ringRef.current) {
        const size = hovering.current ? 44 : 28;
        ringRef.current.style.transform = `translate(${ringPos.current.x - size / 2}px, ${ringPos.current.y - size / 2}px)`;
        ringRef.current.style.width = `${size}px`;
        ringRef.current.style.height = `${size}px`;
      }
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    window.addEventListener("mouseout", out);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      window.removeEventListener("mouseout", out);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <img
        ref={dotRef as any}
        src={cursorIcon}
        alt=""
        className="fixed top-0 left-0 w-6 h-6 z-[9999] pointer-events-none"
        style={{ willChange: "transform" }}
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 rounded-full border border-foreground/50 opacity-30 z-[9999] pointer-events-none transition-[width,height,opacity] duration-200"
        style={{ willChange: "transform" }}
      />
    </>
  );
};

export default CustomCursor;
