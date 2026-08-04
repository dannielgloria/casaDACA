import * as React from "react";
import { cn } from "@/lib/utils";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "h-14 w-full rounded-none border border-sand/18 bg-ink/60 px-5 text-sm text-sand outline-none transition duration-500 placeholder:text-sand/35 focus:border-bronze focus:bg-charcoal/80 focus:shadow-ember",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
