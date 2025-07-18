import { forwardRef } from "react";
import { cn } from "@/utils/cn";

const Avatar = forwardRef(({ 
  className, 
  src, 
  alt, 
  size = "default", 
  children, 
  ...props 
}, ref) => {
  const sizes = {
    sm: "w-8 h-8",
    default: "w-12 h-12",
    lg: "w-16 h-16",
    xl: "w-24 h-24"
  };

  return (
    <div
      ref={ref}
      className={cn(
        "relative rounded-full overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center",
        sizes[size],
        className
      )}
      {...props}
    >
      {src ? (
        <img 
          src={src} 
          alt={alt} 
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="text-2xl">
          {children}
        </div>
      )}
    </div>
  );
});

Avatar.displayName = "Avatar";

export default Avatar;