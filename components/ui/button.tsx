import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex h-11 items-center justify-center gap-2 whitespace-nowrap rounded-md px-5 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-atsuko-cyan text-slate-950 shadow-neon hover:bg-cyan-300 hover:shadow-[0_0_32px_rgba(37,207,255,.38)]",
        outline:
          "border border-atsuko-pink/50 bg-slate-950/30 text-white shadow-[0_0_16px_rgba(255,92,184,.08)] hover:bg-atsuko-pink/10 hover:text-white",
        ghost: "text-slate-300 hover:bg-white/7 hover:text-white",
      },
      size: {
        default: "h-11 px-5",
        lg: "h-12 px-6",
        icon: "size-11 p-0",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
