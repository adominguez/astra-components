"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.tsx
var src_exports = {};
__export(src_exports, {
  Button: () => Button,
  Input: () => Input
});
module.exports = __toCommonJS(src_exports);

// src/components/Button.tsx
var React = __toESM(require("react"));
var import_react_slot = require("@radix-ui/react-slot");
var import_themes = require("@astrahub/themes");

// src/utils/cn.ts
function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

// src/components/Button.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var Button = React.forwardRef(
  ({
    className,
    variant = "default",
    theme = "astrahub",
    asChild = false,
    ...props
  }, ref) => {
    const Comp = asChild ? import_react_slot.Slot : "button";
    const selectedTheme = import_themes.themes[theme];
    const styles = cn(
      selectedTheme.base,
      selectedTheme.variants[variant] ?? "",
      className
    );
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Comp, { ref, className: styles, ...props });
  }
);
Button.displayName = "Button";

// src/components/Input.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
function Input({ className, variant = "default", ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    "input",
    {
      className: `px-4 py-2 rounded border ${variant === "ghost" ? "border-transparent bg-transparent" : "border-gray-300"} ${className ?? ""}`,
      ...props
    }
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Button,
  Input
});
