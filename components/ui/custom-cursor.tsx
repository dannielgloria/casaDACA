"use client";

import { useMagneticCursor } from "@/hooks/use-magnetic-cursor";

export function CustomCursor() {
  const cursorRef = useMagneticCursor();

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed left-0 top-0 z-[70] hidden h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-bronze/50 mix-blend-difference lg:block"
      aria-hidden="true"
    />
  );
}
