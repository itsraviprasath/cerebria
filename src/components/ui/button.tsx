"use client";
import * as React from "react";

/**
 * @enum {string}
 */
const buttonVariants = {
  default:
    "bg-primary text-tertiary hover:bg-secondary hover:text-primary hover:border-primary",
  ghost: "bg-white text-primary hover:bg-secondary hover:text-primary",
  link: "text-primary underline-offset-4 hover:underline border-none hover:bg-secondary hover:text-primary",
};

/**
 * @enum {string}
 */
const sizeVariants = {
  default: "py-4 px-6",
  sm: "py-2 px-4",
  lg: "py-3 px-7",
  rounded: "w-16 h-16",
};

/**
 * @enum {string}
 */
const borderVariants = {
  default: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  round: "rounded-full",
};

const Button = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: keyof typeof buttonVariants;
    size?: keyof typeof sizeVariants;
    border?: keyof typeof borderVariants;
    block?: Boolean;
  }
>(
  /**
   * @param {{
   *   className: string,
   *   variant: keyof typeof buttonVariants,
   *   size: keyof typeof sizeVariants,
   *   border: keyof typeof borderVariants
   * }} props
   */ (
    {
      className,
      variant = "default",
      border = "default",
      size = "default",
      block = false,
      ...props
    },
    ref
  ) => {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      const button = e.currentTarget;

      const circle = document.createElement("span");

      button.appendChild(circle);
      setTimeout(function () {
        return circle.remove();
      }, 500);
    };

    return (
      <>
        <button
          className={`text-tertiary relative overflow-hidden inline-flex items-center justify-center 
        font-semibold text-base  transition-all hover:bg-black hover:text-primary border hover:border-black 
        ${buttonVariants[variant]} ${borderVariants[border]} 
        ${sizeVariants[size]} ${block && "w-full"} ${className}`}
          ref={ref}
          {...props}
          onClick={handleClick}
        />
      </>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
