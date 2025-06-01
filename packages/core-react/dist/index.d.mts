import * as react_jsx_runtime from 'react/jsx-runtime';
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "default" | "outline";
}
declare function Button({ variant, className, ...props }: ButtonProps): react_jsx_runtime.JSX.Element;

export { Button, type ButtonProps };
