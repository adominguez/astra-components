import * as react_jsx_runtime from 'react/jsx-runtime';
import { ButtonHTMLAttributes, InputHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "default" | "outline";
}
declare function Button({ variant, className, ...props }: ButtonProps): react_jsx_runtime.JSX.Element;

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    variant?: 'default' | 'ghost';
}
declare function Input({ className, variant, ...props }: InputProps): react_jsx_runtime.JSX.Element;

export { Button, type ButtonProps, Input, type InputProps };
