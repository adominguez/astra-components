export const themes = {
  astrahub: {
    base: "rounded-lg px-4 py-2 font-bold text-white transition-colors",
    variants: {
      default: "bg-gradient-to-r from-indigo-500 to-purple-500 hover:brightness-110",
      ghost: "bg-transparent border border-white text-white hover:bg-white hover:text-black",
    },
  },
  grotesk: {
    base: "rounded-full px-6 py-3 font-semibold uppercase transition-all",
    variants: {
      default: "bg-black text-white hover:bg-gray-800",
      ghost: "bg-transparent border border-black text-black hover:bg-black hover:text-white",
    },
  },
} satisfies Record<string, {
  base: string;
  variants: Record<string, string>;
}>;
