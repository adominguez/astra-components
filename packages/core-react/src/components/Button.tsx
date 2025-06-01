import { cn } from "../utils/cn";
import { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline";
}

export function Button({ variant = "default", className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "px-4 py-2 rounded font-semibold",
        variant === "default" && "bg-black text-white",
        variant === "outline" && "border border-black text-black",
        className
      )}
      {...props}
    />
  );
}
