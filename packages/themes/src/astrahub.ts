import type { ThemeConfig } from "./types"

export const astrahub: ThemeConfig = {
  base: "rounded-2xl text-white font-medium transition",
  variants: {
    default: "bg-indigo-600 hover:bg-indigo-500",
    secondary: "bg-gray-800 hover:bg-gray-700",
    outline: "border border-white text-white hover:bg-white hover:text-black",
    destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
    ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
    link: "text-primary underline-offset-4 hover:underline",
  },
  navigationMenu: {
    trigger: {
      default: "bg-indigo-600 text-white hover:bg-indigo-500",
      ghost: "bg-transparent text-indigo-300 hover:text-white",
    },
    link: {
      default: "text-sm text-indigo-100 hover:text-white",
    },
    content: "bg-slate-800 border border-slate-700 rounded-md shadow-lg p-4",
  }
}
