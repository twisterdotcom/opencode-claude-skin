import { Component, JSX } from "solid-js"
import { clsx } from "clsx"

export interface ClaudeButtonProps {
  variant?: "primary" | "secondary" | "outline" | "ghost"
  size?: "sm" | "md" | "lg"
  disabled?: boolean
  className?: string
  children: JSX.Element
  onClick?: () => void
}

export const ClaudeButton: Component<ClaudeButtonProps> = (props) => {
  const getButtonClass = () => {
    const baseClasses =
      "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none"

    const variantClasses = {
      primary: "bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-500",
      secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300 focus-visible:ring-gray-500",
      outline: "border border-gray-300 bg-transparent text-gray-700 hover:bg-gray-50 focus-visible:ring-gray-500",
      ghost: "bg-transparent text-gray-700 hover:bg-gray-100 focus-visible:ring-gray-500",
    }

    const sizeClasses = {
      sm: "text-xs px-3 py-1.5",
      md: "text-sm px-4 py-2",
      lg: "text-base px-6 py-3",
    }

    return clsx(
      baseClasses,
      variantClasses[props.variant || "primary"],
      sizeClasses[props.size || "md"],
      props.disabled && "opacity-50 cursor-not-allowed",
      props.className,
    )
  }

  return (
    <button class={getButtonClass()} onClick={props.onClick} disabled={props.disabled}>
      {props.children}
    </button>
  )
}
