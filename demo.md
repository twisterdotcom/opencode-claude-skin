# Claude UI Skin Plugin - Demo

This plugin provides a Claude-inspired user interface for OpenCode.

## How it works

The plugin overrides the default styling of OpenCode components to match Claude's design language:

### Color Scheme

- Primary: #007AFF (Claude's signature blue)
- Secondary: #1A1A1A (Dark text)
- Background: #FFFFFF (Clean white)
- Surface: #F5F5F7 (Light gray background)

### Components Styled

1. **Messages** - User messages in white, AI responses in light gray with rounded corners
2. **Buttons** - Clean, modern styling with hover effects and proper sizing
3. **Inputs** - Consistent styling with focus states

## Integration Example

To use this plugin in your OpenCode project:

```bash
# In your OpenCode project root
opencode plugin add https://github.com/anomalyco/opencode.git#packages/plugins/claude-skin
```

After installation, the Claude UI skin will automatically apply to:

- Chat message bubbles
- Input fields
- Action buttons
- All interface elements

## Customization

You can further customize by:

1. Modifying `src/theme.ts` for color changes
2. Updating component styles in `src/components/`
3. Adding new components as needed

This plugin maintains full compatibility with OpenCode's core functionality while providing a visually distinct Claude-inspired experience.
