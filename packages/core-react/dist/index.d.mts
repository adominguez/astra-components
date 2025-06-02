import * as class_variance_authority_dist_types from 'class-variance-authority/dist/types';
import * as React from 'react';
import { InputHTMLAttributes } from 'react';
import { VariantProps } from 'class-variance-authority';
import { ThemeName } from '@astrahub/themes';
import * as react_jsx_runtime from 'react/jsx-runtime';

declare const buttonVariants: (props?: ({
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | null | undefined;
    size?: "default" | "sm" | "lg" | "icon" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
interface ButtonProps extends React.ComponentProps<"button">, VariantProps<typeof buttonVariants> {
    asChild?: boolean;
    theme?: ThemeName;
}
declare const Button: React.ForwardRefExoticComponent<Omit<ButtonProps, "ref"> & React.RefAttributes<HTMLButtonElement>>;

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    variant?: 'default' | 'ghost';
}
declare function Input({ className, variant, ...props }: InputProps): react_jsx_runtime.JSX.Element;

export { Button, Input, type InputProps, buttonVariants };
