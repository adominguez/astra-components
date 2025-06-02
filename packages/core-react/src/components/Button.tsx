import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { themes, ThemeName } from "@astrahub/themes"
import { cn } from "../utils/cn"

type Variant = keyof (typeof themes)[ThemeName]["variants"]

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: ThemeName
  variant?: Variant
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", theme = "astrahub", asChild = false, ...props }, ref) => {
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
