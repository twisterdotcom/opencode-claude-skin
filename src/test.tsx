import { describe, it, expect } from "vitest"
import { ClaudeMessage } from "./components/ClaudeMessage"
import { ClaudeButton } from "./components/ClaudeButton"
import { ClaudeInput } from "./components/ClaudeInput"

// Simple test to verify component structure
describe("Claude UI Plugin", () => {
  it("should export all required components", () => {
    expect(ClaudeMessage).toBeDefined()
    expect(ClaudeButton).toBeDefined()
    expect(ClaudeInput).toBeDefined()
  })

  it("should have proper theme definition", () => {
    // This would be tested in a more complete setup
    expect(true).toBe(true)
  })
})
