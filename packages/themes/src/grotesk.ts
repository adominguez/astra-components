export const grotesk: ThemeConfig = {
  base: "rounded-md text-black font-semibold tracking-tight transition",
  variants: {
    default: "bg-yellow-400 hover:bg-yellow-300",
    secondary: "bg-gray-200 hover:bg-gray-100",
    outline: "border border-black text-black hover:bg-black hover:text-white",
    destructive: "bg-red-600 text-white hover:bg-red-500",
    ghost: "hover:bg-gray-100",
    link: "text-yellow-600 underline-offset-4 hover:underline",
  },
  navigationMenu: {
    trigger: {
      default: "bg-yellow-400 text-black hover:bg-yellow-300",
      ghost: "bg-transparent text-yellow-600 hover:text-black",
    },
    link: {
      default: "text-sm text-yellow-800 hover:text-black",
    },
    content: "bg-white border border-gray-200 rounded-lg shadow-lg p-4",
  }
}
