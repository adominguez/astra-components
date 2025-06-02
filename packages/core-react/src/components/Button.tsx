import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { themes, ThemeName } from "@astrahub/themes"
import { cn } from "../utils/cn"

type ButtonProps<T extends ThemeName = "astrahub"> = {
  theme?: T
  variant?: keyof typeof themes[T]["variants"]
  asChild?: boolean
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const Button = React.forwardRef(
  <T extends ThemeName = "astrahub">(
    {
      className,
      variant = "default",
      theme = "astrahub" as T,
      asChild = false,
      ...props
    }: ButtonProps<T>,
    ref: React.Ref<HTMLButtonElement>
  ) => {
    const Comp = asChild ? Slot : "button"
    const selectedTheme = themes[theme]
    const styles = cn(
      selectedTheme.base,
      selectedTheme.variants[variant] ?? "",
      className
    )

    return <Comp ref={ref} className={styles} {...props} />
  }
)

Button.displayName = "Button"

export { Button }
