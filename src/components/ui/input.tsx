"use client";
import * as React from "react";
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, ...props }, ref) => {
    return (
      <>
        <div className="w-full">
          <label className="text-[#8D8D8D] text-base font-medium">
            {label}
          </label>
          <input
            className="h-full w-full border-b-2 border-gray-300 bg-transparent px-1 py-3.5 text-lg font-medium text-inputColor outline outline-0 focus:border-primary focus:outline-0 disabled:border-0 disabled:bg-inputDisabled"
            placeholder=" "
            type={type}
            ref={ref}
            {...props}
          />
        </div>
      </>
    );
  }
);

Input.displayName = "Input";

export { Input };
