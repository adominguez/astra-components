// src/utils/cn.ts
function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

// src/components/Button.tsx
import { jsx } from "react/jsx-runtime";
function Button({ variant = "default", className, ...props }) {
  return /* @__PURE__ */ jsx(
    "button",
    {
      className: cn(
        "px-4 py-2 rounded font-semibold",
        variant === "default" && "bg-black text-white",
        variant === "outline" && "border border-black text-black",
        className
      ),
      ...props
    }
  );
}
export {
  Button
};
