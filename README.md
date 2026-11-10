# OpenCode Claude UI Skin Plugin

A Claude-inspired UI skin plugin for OpenCode that provides a clean, modern interface matching Claude's design language.

## Features

- Claude-like color scheme and styling
- Consistent UI components with Claude's design language
- Theme override support for existing OpenCode components
- Easy installation and configuration

## Installation

Install in any OpenCode project:

```bash
opencode plugin add https://github.com/twisterdotcom/opencode-claude-skin.git
```

## Usage

Once installed, the Claude UI skin will automatically apply to your OpenCode interface.

## Components

The plugin includes:

- `ClaudeMessage` - Styled chat bubbles matching Claude's design
- `ClaudeButton` - Clean button styling with hover effects
- `ClaudeInput` - Consistent input field styling

## Development

To develop and test this plugin:

1. Install dependencies:

```bash
bun install
```

2. Run development server (if needed):

```bash
bun run dev
```

3. Test by installing it in an OpenCode instance:

```bash
opencode plugin add file://path/to/opencode/packages/plugins/claude-skin
```

## Contributing

This is a community plugin for OpenCode. Feel free to fork and contribute improvements!

## License

MIT
