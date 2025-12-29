# Blog App

A lightweight blog application built with React and Vite. The project now includes a small Express.js backend using MongoDB and Mongoose for persistence (previously the UI used `json-server` for prototyping).

## Features

- Browse all posts on the home page with `Bloglist`.
- View a single post via `Blogdetails`, with graceful loading and error states.
- Create a new post through the `Create` form (submit, redirect, and optimistic UI feedback).
- Delete an existing post from the detail view.
- Shared `useFetch` hook for reusable data fetching logic.

Backend (new)

- Small Express.js API implemented in the `backend/` folder using `mongoose` to interact with MongoDB.
- Routes are mounted under `/api/blogs` (see [backend/routes/blogRoutes.js](backend/routes/blogRoutes.js)).

## Requirements

- Node.js ≥ 18
- npm (comes with Node)
- MongoDB (local or remote) if you use the included Express backend

## Getting Started

There are two common ways to run the app locally:

1. Quick prototype (json-server)

   If you want the old mock API, start `json-server` (no Mongo required):

   ```bash
   npm install
   npx json-server --watch data/db.json --port 8000
   npm run dev
   ```

   - Frontend fetch URL used previously: `http://localhost:8000/posts`

2. Full backend (Express + MongoDB) — recommended

   - Create a `.env` file in the project root with at least:

     ```env
     PORT=3000
     MONGO_URI=mongodb://localhost:27017/blogAppDB
     ```

   - Install and start the backend (from the `backend/` folder):

     ```powershell
     cd backend
     npm install
     npm install cors
     npm run dev   # or: node server.js
     ```

   - Start the frontend in a separate terminal (from project root):

     ```bash
     npm install
     npm run dev
     ```

   - The frontend should request the API at `http://localhost:3000/api/blogs` by default. Update `src/hook/useFetch.jsx` if you use a different port.

## Available Scripts

- `npm run dev` – start the Vite development server with hot reload.
- `npm run build` – create a production build.
- `npm run preview` – serve the production build locally.
- `npm run lint` – run ESLint across the project.

Backend scripts

- From `backend/`: `npm run dev` or `node server.js` (depends on `package.json` in `backend/`).

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
backend/
   server.js          // Express app entry
   routes/
      blogRoutes.js    // API routes mounted at /api/blogs
   controller/
      blogController.js
   data/
      db.js            // mongoose connection helper
```

## Tailwind & Styling

Tailwind CSS is configured via the Vite plugin (`@tailwindcss/vite`). Components use utility classes for layout and typography. Fonts leverage `@fontsource-variable/sora`.

## Notes

- Ensure `json-server` stays in sync with `data/db.json`. Restart it if you edit the file.
- If you use the Express backend and your frontend runs on a different origin (for example `http://localhost:5173`), enable CORS in the backend by installing `cors` and adding `app.use(cors())` in [backend/server.js](backend/server.js).
- The current backend mounts blog routes under `/api/blogs`. Example endpoints:
  - `GET http://localhost:3000/api/blogs` — list posts
  - `GET http://localhost:3000/api/blogs/:id` — get a single post
  - `POST http://localhost:3000/api/blogs` — create a post
  - `DELETE http://localhost:3000/api/blogs/:id` — delete a post
- When switching from `json-server` to the Express backend, update `src/hook/useFetch.jsx` to point to the new API base URL.

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
