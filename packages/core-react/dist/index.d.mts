import * as React from 'react';
import { InputHTMLAttributes } from 'react';
import * as react_jsx_runtime from 'react/jsx-runtime';

type ThemeConfig = {
    base: string;
    variants: {
        [variant: string]: string;
    };
};

declare const themes: {
    readonly astrahub: ThemeConfig;
    readonly grotesk: ThemeConfig;
};
type ThemeName = keyof typeof themes;

type Variant = keyof (typeof themes)[ThemeName]["variants"];
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    theme?: ThemeName;
    variant?: Variant;
    asChild?: boolean;
}
declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    variant?: 'default' | 'ghost';
}
declare function Input({ className, variant, ...props }: InputProps): react_jsx_runtime.JSX.Element;

export { Button, Input, type InputProps };
