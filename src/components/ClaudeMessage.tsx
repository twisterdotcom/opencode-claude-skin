import { Component, JSX } from "solid-js"
import { clsx } from "clsx"
import { MessagePart } from "@opencode/session-ui"

export interface ClaudeMessageProps {
  role: "user" | "assistant" | "system"
  content: string
  className?: string
  children?: JSX.Element
}

export const ClaudeMessage: Component<ClaudeMessageProps> = (props) => {
  const getMessageClass = () => {
    switch (props.role) {
      case "user":
        return "bg-white border border-gray-200 rounded-lg p-4 shadow-sm"
      case "assistant":
        return "bg-gray-50 border border-gray-100 rounded-lg p-4 shadow-sm"
      case "system":
        return "bg-gray-100 border border-gray-200 rounded-lg p-4 shadow-sm"
      default:
        return "bg-white border border-gray-200 rounded-lg p-4 shadow-sm"
    }
  }

  return (
    <div class={clsx(getMessageClass(), props.className)}>
      <div class="flex items-start gap-3">
        {/* Message role indicator */}
        <div
          class={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium ${
            props.role === "user"
              ? "bg-blue-500 text-white"
              : props.role === "assistant"
                ? "bg-gray-600 text-white"
                : "bg-gray-400 text-white"
          }`}
        >
          {props.role === "user" ? "U" : props.role === "assistant" ? "AI" : "S"}
        </div>

        {/* Message content */}
        <div class="flex-1">
          <MessagePart content={props.content} />
          {props.children}
        </div>
      </div>
    </div>
  )
}
