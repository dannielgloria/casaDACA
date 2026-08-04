"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image, { type ImageProps } from "next/image";
import { useRef } from "react";
import { cn } from "@/lib/utils";

type ParallaxImageProps = Omit<ImageProps, "alt"> & {
  alt: string;
  wrapperClassName?: string;
  amount?: number;
};

export function ParallaxImage({
  wrapperClassName,
  className,
  alt,
  amount = 60,
  ...props
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [-amount, amount]);

  return (
    <div ref={ref} className={cn("overflow-hidden", wrapperClassName)}>
      <motion.div className="h-full w-full scale-110" style={{ y }}>
        <Image
          alt={alt}
          className={cn("h-full w-full object-cover", className)}
          {...props}
        />
      </motion.div>
    </div>
  );
}
