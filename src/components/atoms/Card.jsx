import { forwardRef } from "react";
import { cn } from "@/utils/cn";

const Card = forwardRef(({ 
  className, 
  variant = "default", 
  children, 
  ...props 
}, ref) => {
  const variants = {
    default: "bg-white border-gray-100",
    surface: "bg-surface border-yellow-200",
    elevated: "bg-white border-gray-100 shadow-elevated"
  };

  return (
    <div
      ref={ref}
      className={cn(
        "rounded-lg shadow-card border hover:shadow-elevated transition-all duration-200",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
});

Card.displayName = "Card";

export default Card;