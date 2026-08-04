"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useCountdown } from "@/hooks/use-countdown";

const labels = {
  days: "Dias",
  hours: "Horas",
  minutes: "Minutos",
  seconds: "Segundos"
} as const;

export function Countdown({ targetDate }: { targetDate: string }) {
  const values = useCountdown(targetDate);

  return (
    <div
      className="grid grid-cols-2 border-y border-sand/12 md:grid-cols-4"
      aria-label="Cuenta regresiva para el lanzamiento"
    >
      {Object.entries(labels).map(([key, label]) => {
        const value = values[key as keyof typeof labels]
          .toString()
          .padStart(2, "0");

        return (
          <div
            key={key}
            className="relative min-h-36 border-sand/12 px-4 py-8 text-center md:min-h-48 md:border-r md:px-8 md:py-10 last:md:border-r-0"
          >
            <AnimatePresence mode="popLayout">
              <motion.span
                key={value}
                initial={{ opacity: 0, rotateX: -18, y: 8 }}
                animate={{ opacity: 1, rotateX: 0, y: 0 }}
                exit={{ opacity: 0, rotateX: 18, y: -8 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="block font-serif text-6xl leading-none text-sand md:text-8xl lg:text-9xl"
              >
                {value}
              </motion.span>
            </AnimatePresence>
            <span className="mt-5 block text-[0.68rem] uppercase tracking-ritual text-bronze/75">
              {label}
            </span>
          </div>
        );
      })}
    </div>
  );
}
