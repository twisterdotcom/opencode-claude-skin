import { Component, JSX } from "solid-js"
import { clsx } from "clsx"

export interface ClaudeInputProps {
  placeholder?: string
  value?: string
  onChange?: (value: string) => void
  className?: string
  multiline?: boolean
  disabled?: boolean
}

export const ClaudeInput: Component<ClaudeInputProps> = (props) => {
  const inputClass = clsx(
    "w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors",
    "bg-white text-gray-900 placeholder-gray-500",
    "border-gray-300",
    props.disabled ? "bg-gray-100 opacity-75" : "",
    props.className,
  )

  if (props.multiline) {
    return (
      <textarea
        class={inputClass}
        placeholder={props.placeholder}
        value={props.value}
        onChange={(e) => props.onChange?.(e.target.value)}
        disabled={props.disabled}
        rows={4}
      />
    )
  }

  return (
    <input
      type="text"
      class={inputClass}
      placeholder={props.placeholder}
      value={props.value}
      onChange={(e) => props.onChange?.(e.target.value)}
      disabled={props.disabled}
    />
  )
}
