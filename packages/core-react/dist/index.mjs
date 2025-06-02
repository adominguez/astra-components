// src/components/Button.tsx
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

// src/utils/cn.ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// src/components/Button.tsx
import { themes } from "@astrahub/themes";
import { jsx } from "react/jsx-runtime";
var buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
var Button = React.forwardRef(
  ({ className, variant = "default", size = "default", asChild = false, theme, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    const themed = theme && themes[theme] ? cn(
      themes[theme].base,
      themes[theme].variants?.[variant || "default"] ?? "",
      className
    ) : cn(buttonVariants({ variant, size, className }));
    return /* @__PURE__ */ jsx(Comp, { ref, className: themed, ...props });
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

// src/components/navigation-menu.tsx
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { cva as cva2 } from "class-variance-authority";
import { ChevronDownIcon } from "lucide-react";
import { themes as themes2 } from "@astrahub/themes";
import { jsx as jsx3, jsxs } from "react/jsx-runtime";
function NavigationMenu({
  className,
  children,
  viewport = true,
  theme = "astrahub",
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    NavigationMenuPrimitive.Root,
    {
      "data-slot": "navigation-menu",
      "data-viewport": viewport,
      className: cn(
        "group/navigation-menu relative flex max-w-max flex-1 items-center justify-center",
        className
      ),
      ...props,
      children: [
        children,
        viewport && /* @__PURE__ */ jsx3(NavigationMenuViewport, { theme })
      ]
    }
  );
}
function NavigationMenuList({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx3(
    NavigationMenuPrimitive.List,
    {
      "data-slot": "navigation-menu-list",
      className: cn(
        "group flex flex-1 list-none items-center justify-center gap-1",
        className
      ),
      ...props
    }
  );
}
function NavigationMenuItem({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx3(
    NavigationMenuPrimitive.Item,
    {
      "data-slot": "navigation-menu-item",
      className: cn("relative", className),
      ...props
    }
  );
}
var navigationMenuTriggerStyle = cva2(
  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=open]:hover:bg-accent data-[state=open]:text-accent-foreground data-[state=open]:focus:bg-accent data-[state=open]:bg-accent/50 focus-visible:ring-ring/50 outline-none transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1"
);
function NavigationMenuTrigger({
  className,
  children,
  variant = "default",
  theme = "astrahub",
  ...props
}) {
  const triggerClass = themes2?.[theme]?.navigationMenu?.trigger?.[variant] ?? "";
  return /* @__PURE__ */ jsxs(
    NavigationMenuPrimitive.Trigger,
    {
      "data-slot": "navigation-menu-trigger",
      className: cn(triggerClass, "group", className),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsx3(
          ChevronDownIcon,
          {
            className: "relative top-[1px] ml-1 size-3 transition duration-300 group-data-[state=open]:rotate-180",
            "aria-hidden": "true"
          }
        )
      ]
    }
  );
}
function NavigationMenuContent({
  className,
  theme = "astrahub",
  ...props
}) {
  const contentClass = themes2?.[theme]?.navigationMenu?.content ?? "";
  return /* @__PURE__ */ jsx3(
    NavigationMenuPrimitive.Content,
    {
      "data-slot": "navigation-menu-content",
      className: cn(contentClass, className),
      ...props
    }
  );
}
function NavigationMenuViewport({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx3(
    "div",
    {
      className: cn(
        "absolute top-full left-0 isolate z-50 flex justify-center"
      ),
      children: /* @__PURE__ */ jsx3(
        NavigationMenuPrimitive.Viewport,
        {
          "data-slot": "navigation-menu-viewport",
          className: cn(
            "origin-top-center bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border shadow md:w-[var(--radix-navigation-menu-viewport-width)]",
            className
          ),
          ...props
        }
      )
    }
  );
}
function NavigationMenuLink({
  className,
  theme = "astrahub",
  variant = "default",
  ...props
}) {
  const linkClass = themes2?.[theme]?.navigationMenu?.link?.[variant] ?? "";
  return /* @__PURE__ */ jsx3(
    NavigationMenuPrimitive.Link,
    {
      "data-slot": "navigation-menu-link",
      className: cn(linkClass, className),
      ...props
    }
  );
}
function NavigationMenuIndicator({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx3(
    NavigationMenuPrimitive.Indicator,
    {
      "data-slot": "navigation-menu-indicator",
      className: cn(
        "data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsx3("div", { className: "bg-border relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm shadow-md" })
    }
  );
}
export {
  Button,
  Input,
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  buttonVariants,
  navigationMenuTriggerStyle
};
