import { forwardRef } from "react";
import { cn } from "@/utils/cn";

const Button = forwardRef(({ 
  className, 
  variant = "primary", 
  size = "default", 
  children, 
  ...props 
}, ref) => {
  const baseStyles = "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-gradient-to-r from-primary to-purple-600 text-white hover:shadow-elevated hover:scale-105 focus:ring-primary",
    secondary: "bg-gradient-to-r from-secondary to-yellow-500 text-white hover:shadow-elevated hover:scale-105 focus:ring-secondary",
    accent: "bg-gradient-to-r from-accent to-emerald-600 text-white hover:shadow-elevated hover:scale-105 focus:ring-accent",
    outline: "border-2 border-primary text-primary bg-white hover:bg-primary hover:text-white hover:scale-105 focus:ring-primary",
    ghost: "text-primary hover:bg-primary/10 hover:scale-105 focus:ring-primary",
    surface: "bg-surface text-gray-800 border border-yellow-200 hover:border-yellow-300 hover:scale-105 focus:ring-secondary"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    default: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  return (
    <button
      ref={ref}
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";

export default Button;