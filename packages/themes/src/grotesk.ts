import type { ThemeConfig } from "./types"

export const grotesk: ThemeConfig = {
  base: "rounded-none font-bold uppercase tracking-wide",
  variants: {
    default: "bg-pink-600 text-black hover:bg-pink-500",
    secondary: "bg-yellow-300 text-black hover:bg-yellow-200",
    outline: "border-2 border-black text-black hover:bg-black hover:text-white",
    destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
    ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
    link: "text-primary underline-offset-4 hover:underline",
  }
}
