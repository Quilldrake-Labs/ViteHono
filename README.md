# Vite + ReactJS + HonoJS Quick Start

This project is a quick start template that combines ReactJS (with TypeScript) using Vite for the frontend, and HonoJS for a simple API backend. It provides a basic folder structure to help you get started quickly with modern web development.

## Features

- **ReactJS** with Vite for fast frontend development and HMR
- **HonoJS** API setup in the `api/` directory
- **TypeScript** support throughout
- **Organized folder structure** for scalable projects
- **Basic ESLint configuration** for code quality

## Folder Structure

```
├── api/           # HonoJS API source code
│   └── src/
├── assets/        # Static assets
├── components/    # React components
├── hooks/         # Custom React hooks
├── layouts/       # Layout components
├── pages/         # Page components (React)
├── public/        # Public static files
├── src/           # Main React app entry
├── templates/     # App templates
├── utils/         # Utility functions
├── index.html     # Main HTML file
├── package.json   # Project dependencies and scripts
├── vite.config.ts # Vite configuration
└── ...            # Other config and lock files
```

## Getting Started

1. **Install dependencies:**
  ```bash
  npm install
  # or
  bun install
  ```
2. **Run the development server:**
  ```bash
  npm run dev
  # or
  bun run dev
  ```
3. **API development:**
  - Edit your HonoJS API in `api/src/` and entry in `api/index.ts`.
4. **Frontend development:**
  - Edit your React app in `src/` and `pages/`.

## Notes

- This template is intended for rapid prototyping and as a starting point for full-stack projects.
- You can expand the ESLint configuration and add more plugins as needed.

---

Made with [Vite](https://vitejs.dev/), [React](https://react.dev/), and [HonoJS](https://honojs.dev/).
