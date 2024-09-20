import React from 'react';
import { cva } from 'class-variance-authority';

const textStyles = cva(
  "text-gray-900 dark:text-gray-100",
  {
    variants: {
      intent: {
        primary: "text-blue-600 dark:text-blue-400",
        secondary: "text-gray-600 dark:text-gray-400",
        success: "text-green-600 dark:text-green-400",
        danger: "text-red-600 dark:text-red-400",
      },
      size: {
        xs: "text-xs",
        sm: "text-sm",
        base: "text-base",
        lg: "text-lg",
        xl: "text-xl",
        "2xl": "text-2xl",
        "3xl": "text-3xl",
      },
      weight: {
        light: "font-light",
        normal: "font-normal",
        medium: "font-medium",
        semibold: "font-semibold",
        bold: "font-bold",
      },
      font: {
        sans: "font-sans",
        serif: "font-serif",
        mono: "font-mono",
      },
      align: {
        left: "text-left",
        center: "text-center",
        right: "text-right",
      },
      truncate: {
        true: "truncate",
      },
      transform: {
        uppercase: "uppercase",
        lowercase: "lowercase",
        capitalize: "capitalize",
      },
    },
    defaultVariants: {
      size: "base",
      weight: "normal",
      font: "sans",
      align: "left",
    },
  }
);

export const Text = React.forwardRef(({
  children,
  intent,
  size,
  weight,
  font,
  align,
  truncate,
  transform,
  className,
  as: Component = 'p',
  ...props
}, ref) => {
  return (
    <Component
      ref={ref}
      className={textStyles({ intent, size, weight, font, align, truncate, transform, className })}
      {...props}
    >
      {children}
    </Component>
  );
});

