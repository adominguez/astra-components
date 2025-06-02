import type { ThemeConfig } from "./types"

export const grotesk: ThemeConfig = {
  base: "rounded-none font-bold uppercase tracking-wide",
  variants: {
    default: "bg-pink-600 text-black hover:bg-pink-500",
    secondary: "bg-yellow-300 text-black hover:bg-yellow-200",
    outline: "border-2 border-black text-black hover:bg-black hover:text-white"
  }
}
