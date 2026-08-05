"use client";

import { useMagneticCursor } from "@/hooks/use-magnetic-cursor";

export function CustomCursor() {
  const cursorRef = useMagneticCursor();

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed left-1/2 top-1/2 z-[70] hidden h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-sand/85 opacity-100 shadow-[0_0_18px_rgba(231,220,200,0.24)] lg:block"
      aria-hidden="true"
    />
  );
}
