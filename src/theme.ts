import { createTheme } from "@opencode/ui"

// Claude-inspired theme colors and styling
export const claudeTheme = createTheme({
  name: "claude",
  colors: {
    // Claude's signature blue color scheme
    primary: "#007AFF",
    secondary: "#1A1A1A",
    background: "#FFFFFF",
    surface: "#F5F5F7",
    text: "#1D1D1F",
    textSecondary: "#86868B",
    border: "#E0E0E0",
    accent: "#007AFF",

    // Status colors
    success: "#34C759",
    warning: "#FF9500",
    error: "#FF3B30",

    // Message bubbles
    userMessage: "#FFFFFF",
    assistantMessage: "#F2F2F7",
    systemMessage: "#E5E5EA",
  },
  spacing: {
    xs: "4px",
    sm: "8px",
    md: "12px",
    lg: "16px",
    xl: "20px",
    xxl: "24px",
  },
  borderRadius: {
    sm: "8px",
    md: "12px",
    lg: "16px",
  },
  shadows: {
    light: "0 1px 3px rgba(0,0,0,0.1)",
    medium: "0 4px 6px rgba(0,0,0,0.1)",
    heavy: "0 10px 25px rgba(0,0,0,0.15)",
  },
  typography: {
    fontFamily: '"SF Pro", "Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif',
    fontSize: {
      xs: "12px",
      sm: "14px",
      md: "16px",
      lg: "18px",
      xl: "20px",
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      bold: 700,
    },
  },
})
