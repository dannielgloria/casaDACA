import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group inline-flex min-h-12 items-center justify-center gap-3 rounded-none border px-6 py-3 text-xs font-medium uppercase tracking-quiet transition duration-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 disabled:pointer-events-none disabled:opacity-40",
  {
    variants: {
      variant: {
        primary:
          "border-bronze/80 bg-bronze text-ink shadow-ember hover:bg-sand hover:shadow-[0_0_64px_rgba(200,174,125,0.22)] focus-visible:outline-bronze",
        ghost:
          "border-sand/20 bg-transparent text-sand hover:border-bronze hover:text-bronze focus-visible:outline-bronze"
      }
    },
    defaultVariants: {
      variant: "primary"
    }
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
