import type { ThemeConfig } from "./types"

export const astrahub: ThemeConfig = {
  base: "rounded-2xl text-white font-medium transition",
  variants: {
    default: "bg-indigo-600 hover:bg-indigo-500",
    secondary: "bg-gray-800 hover:bg-gray-700",
    outline: "border border-white text-white hover:bg-white hover:text-black"
  }
}
