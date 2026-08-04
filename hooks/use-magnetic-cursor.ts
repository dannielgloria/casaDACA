"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export function useMagneticCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const largeScreen = window.matchMedia("(min-width: 1024px)").matches;

    if (!cursor || !finePointer || !largeScreen) return;

    const move = (event: PointerEvent) => {
      gsap.to(cursor, {
        x: event.clientX,
        y: event.clientY,
        duration: 0.45,
        ease: "power3.out"
      });
    };

    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, []);

  return cursorRef;
}
