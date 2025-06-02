import { astrahub } from "./astrahub"
import { grotesk } from "./grotesk"

export const themes = {
  astrahub,
  grotesk,
} as const

export type ThemeName = keyof typeof themes
export type VariantName<T extends ThemeName> = keyof typeof themes[T]["variants"]
