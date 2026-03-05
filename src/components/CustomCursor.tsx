import { useEffect, useRef } from "react";

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
        dotRef.current.style.transform = `translate(${e.clientX - 5}px, ${e.clientY - 5}px)`;
      }
    };

    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest("a, button, [role='button'], input, textarea, .cursor-pointer")) {
        hovering.current = true;
        if (dotRef.current) dotRef.current.classList.add("scale-[0.6]");
        ringRef.current?.classList.add("scale-[1.8]", "border-primary/80");
        ringRef.current?.classList.remove("border-foreground/20");
      }
    };

    const out = () => {
      hovering.current = false;
      if (dotRef.current) dotRef.current.classList.remove("scale-[0.6]");
      ringRef.current?.classList.remove("scale-[1.8]", "border-primary/80");
      ringRef.current?.classList.add("border-foreground/20");
    };

    let raf: number;
    const animate = () => {
      ringPos.current.x += (pos.current.x - ringPos.current.x) * 0.12;
      ringPos.current.y += (pos.current.y - ringPos.current.y) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringPos.current.x - 20}px, ${ringPos.current.y - 20}px)`;
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
      {/* Inner dot — gold accent */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-[10px] h-[10px] rounded-full bg-primary z-[9999] pointer-events-none transition-transform duration-200"
        style={{ willChange: "transform", boxShadow: "0 0 8px hsl(var(--primary) / 0.6)" }}
      />
      {/* Outer ring — subtle, elegant */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-10 h-10 rounded-full border border-foreground/20 z-[9999] pointer-events-none transition-all duration-300 ease-out"
        style={{ willChange: "transform" }}
      />
    </>
  );
};

export default CustomCursor;
