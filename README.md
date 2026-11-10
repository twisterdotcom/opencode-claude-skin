# Claude UI Skin Plugin for OpenCode

A plugin that provides a Claude-inspired user interface skin for OpenCode.

## Features

- Claude-like color scheme and styling
- Consistent UI components with Claude's design language
- Theme override support for existing OpenCode components
- Easy installation and configuration

## Installation

```bash
# Install the plugin in your OpenCode project
opencode plugin add https://github.com/anomalyco/opencode.git#packages/plugins/claude-skin
```

## Usage

Once installed, the Claude UI skin will automatically apply to your OpenCode interface.

## Customization

You can further customize the theme by modifying the `src/theme.ts` file in this plugin package.

## Development

To develop and test this plugin:

1. Install dependencies:

```bash
cd packages/plugins/claude-skin
bun install
```

2. Run development server:

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
