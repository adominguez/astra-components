// src/components/Button.tsx
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { themes } from "@astrahub/themes";

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
