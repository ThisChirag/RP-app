import * as React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({
    className,
    variant = "default",
    size = "default",
    asChild = false,
    children,
    ...props
  }, ref) => {
    const buttonClasses = cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-semibold ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
      {
        "bg-primary text-primary-foreground shadow-[0_10px_28px_-18px_rgb(var(--shadow-color)/0.8)] hover:brightness-95":
          variant === "default",
        "border border-input bg-card/75 text-foreground hover:bg-accent hover:text-accent-foreground":
          variant === "outline",
        "text-foreground hover:bg-accent hover:text-accent-foreground":
          variant === "ghost",
        "rounded-none px-0 text-primary underline-offset-4 hover:underline":
          variant === "link",
        "h-11 px-5": size === "default",
        "h-9 px-4 text-xs": size === "sm",
        "h-12 px-8 text-base": size === "lg",
        "h-10 w-10": size === "icon",
      },
      className
    );

    if (asChild && React.isValidElement(children)) {
      const child = children as React.ReactElement<{ className?: string }>;
      return React.cloneElement(child, {
        ...props,
        className: cn(buttonClasses, child.props.className),
      });
    }

    return (
      <button ref={ref} className={buttonClasses} {...props}>
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button };
