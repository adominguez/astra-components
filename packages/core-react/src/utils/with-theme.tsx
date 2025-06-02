import { themes, type ThemeName } from "@astrahub/themes"

export function withTheme<T extends string = "default">(
  theme: ThemeName,
  variant: T,
  componentPath: keyof typeof themes[ThemeName]['navigationMenu']
): string {
  const styles = themes?.[theme]?.navigationMenu?.[componentPath]
  if (typeof styles === "string") return styles
  return (styles as Record<string, string>)?.[variant] ?? ""
}