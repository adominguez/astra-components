// src/components/Button.tsx
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";

// src/themes/astrahub.ts
var astrahub = {
  base: "rounded-2xl text-white font-medium transition",
  variants: {
    default: "bg-indigo-600 hover:bg-indigo-500",
    secondary: "bg-gray-800 hover:bg-gray-700",
    outline: "border border-white text-white hover:bg-white hover:text-black"
  }
};

// src/themes/grotesk.ts
var grotesk = {
  base: "rounded-none font-bold uppercase tracking-wide",
  variants: {
    default: "bg-pink-600 text-black hover:bg-pink-500",
    secondary: "bg-yellow-300 text-black hover:bg-yellow-200",
    outline: "border-2 border-black text-black hover:bg-black hover:text-white"
  }
};

// src/themes/index.ts
var themes = {
  astrahub,
  grotesk
};

// src/utils/cn.ts
function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

// src/components/Button.tsx
import { jsx } from "react/jsx-runtime";
var Button = React.forwardRef(
  ({ className, variant = "default", theme = "astrahub", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    const selectedTheme = themes[theme];
    const styles = cn(
      selectedTheme.base,
      selectedTheme.variants[variant] ?? "",
      className
    );
    return /* @__PURE__ */ jsx(Comp, { ref, className: styles, ...props });
  }
);
Button.displayName = "Button";

// src/components/Input.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
function Input({ className, variant = "default", ...props }) {
  return /* @__PURE__ */ jsx2(
    "input",
    {
      className: `px-4 py-2 rounded border ${variant === "ghost" ? "border-transparent bg-transparent" : "border-gray-300"} ${className ?? ""}`,
      ...props
    }
  );
}
export {
  Button,
  Input
};
