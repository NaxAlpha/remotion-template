# Remotion Blank Template

A minimal template for creating videos using [Remotion](https://www.remotion.dev/) with React and TypeScript. This template includes a basic video setup with TailwindCSS integration.

## Project Structure

```
src/
├── player/         # Browser player implementation
├── remotion/       # Video components and composition
├── shared/         # Shared constants and utilities
└── assets/         # Static assets
```

## Features

- 🎥 Basic video composition setup (720p, 30fps)
- 🎨 TailwindCSS integration for styling
- ▶️ Browser-based video player
- 🛠️ TypeScript support
- 📦 Vite for fast development

## Video Configuration

The video is configured with the following default properties (customizable in `src/shared/constants.tsx`):

- Resolution: 1280x720 (720p)
- Frame rate: 30 fps
- Duration: 90 frames (3 seconds)

## Getting Started

1. Install dependencies:
```bash
pnpm install
```

2. Start the development server:
```bash
pnpm dev
```
This will start the browser player where you can preview your video in real-time.

3. Open Remotion Studio:
```bash
pnpm remotion
```
This will open Remotion Studio where you can edit and preview your video composition.

## Available Scripts

- `pnpm dev` - Start the development server
- `pnpm build` - Build the project
- `pnpm preview` - Preview the built project
- `pnpm remotion` - Open Remotion Studio
- `pnpm lint` - Run ESLint

## Project Components

### MainComp
The main video component (`src/remotion/MainComp.tsx`) that contains your video content. Currently displays a "Hello world!" message with TailwindCSS styling.

### Player
A browser-based video player (`src/player/App.tsx`) that provides controls for playing, pausing, and scrubbing through your video.

## Customization

1. Modify video properties in `src/shared/constants.tsx`
2. Edit the main composition in `src/remotion/MainComp.tsx`
3. Add new compositions in `src/remotion/Root.tsx`

## Technologies Used

- [Remotion](https://www.remotion.dev/) - React-based video creation
- [React](https://reactjs.org/) - UI Framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [TailwindCSS](https://tailwindcss.com/) - Styling
- [Vite](https://vitejs.dev/) - Build tool and development server

## License

This template is MIT licensed.
