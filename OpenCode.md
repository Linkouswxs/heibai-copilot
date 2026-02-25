# OpenCode Configuration

## Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

No test framework is configured.

## Code Style

### General
- Use TypeScript with explicit type annotations
- Use `import type` for type-only imports
- Use Next.js App Router with async params (Next.js 16)
- Use file-based routing in `src/app/`

### Components
- Use PascalCase for component names
- Use arrow functions for components
- Define page components as `async function`

### Styling
- Use Tailwind CSS v4 with `@tailwindcss/postcss`
- Use dark mode with `dark:` prefix
- Use `className` for Tailwind classes

### Naming
- Use camelCase for variables and functions
- Use PascalCase for components and types
- Use descriptive Chinese variable names where appropriate
