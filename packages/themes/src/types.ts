export type ThemeConfig = {
  base: string
  variants: {
    [variant: string]: string
  }
  navigationMenu?: {
    trigger?: {
      [variant: string]: string
    }
    link?: {
      [variant: string]: string
    }
    content?: string
  }
}
