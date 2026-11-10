import { createPlugin } from "@opencode/plugin"
import { claudeTheme } from "./theme"

// Claude UI Skin Plugin for OpenCode
export default createPlugin({
  name: "claude-skin",
  version: "1.0.0",
  description: "Claude-inspired UI skin for OpenCode",

  theme: claudeTheme,

  ui: {
    components: {
      // Override message components with Claude styling
      Message: "./components/ClaudeMessage",
      Button: "./components/ClaudeButton",
      Input: "./components/ClaudeInput",
    },
  },

  // Register any plugin-specific configurations
  config: {
    ui: {
      theme: "claude",
    },
  },
})
