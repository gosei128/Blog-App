# Blog App

A lightweight blog front end built with React and Vite. It lets you browse blog posts, view individual details, create new entries, and delete existing ones. Data is served by a simple `json-server` API so you can prototype quickly without standing up a full backend.

## Features

- Browse all posts on the home page with `Bloglist`.
- View a single post via `Blogdetails`, with graceful loading and error states.
- Create a new post through the `Create` form (submit, redirect, and optimistic UI feedback).
- Delete an existing post from the detail view.
- Shared `useFetch` hook for reusable data fetching logic.

## Requirements

- Node.js ≥ 18
- npm (comes with Node)
- `json-server` (install globally with `npm install -g json-server`, or run via `npx`)

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the local API (from the project root):
   ```bash
   npx json-server --watch data/db.json --port 8000
   ```
   The server exposes endpoints such as:
   - `GET http://localhost:8000/posts`
   - `GET http://localhost:8000/posts/:id`
   - `POST http://localhost:8000/posts`
   - `DELETE http://localhost:8000/posts/:id`
3. Run the Vite dev server in a separate terminal:
   ```bash
   npm run dev
   ```
4. Open the app in your browser (default): `http://localhost:5173/`.

## Available Scripts

- `npm run dev` – start the Vite development server with hot reload.
- `npm run build` – create a production build.
- `npm run preview` – serve the production build locally.
- `npm run lint` – run ESLint across the project.

## Project Structure

```
src/
  App.jsx            // Application shell, routes, and layout
  Home.jsx           // Home page showing the blog list
  Bloglist.jsx       // Blog cards + navigation links
  Blogdetails.jsx    // Single blog view, delete action
  Create.jsx         // Form for adding new posts
  hook/useFetch.jsx  // Shared data-fetching hook with loading & error state
  Navbar.jsx         // Top navigation bar
data/
  db.json            // json-server database
```

## Tailwind & Styling

Tailwind CSS is configured via the Vite plugin (`@tailwindcss/vite`). Components use utility classes for layout and typography. Fonts leverage `@fontsource-variable/sora`.

## Notes

- Ensure `json-server` stays in sync with `data/db.json`. Restart it if you edit the file.
- When adding new API fields, update the form in `Create.jsx` and any rendering logic accordingly.
- For production, replace `json-server` with a real backend and adjust the API base URL.

## License

This project is intended for learning and prototyping purposes. Adapt it to your needs.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
