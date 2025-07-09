# Personal Portfolio

A modern, responsive personal portfolio website built with React and Vite. This project showcases your skills, projects, and contact information with a clean, animated, and visually appealing design.

## Features

- ⚡ Built with [React](https://react.dev/) and [Vite](https://vitejs.dev/) for fast development and builds
- 🎨 Custom, cohesive color palette and smooth background gradients
- ✨ Animations powered by [Framer Motion](https://www.framer.com/motion/)
- 📱 Fully responsive design for all devices
- 🧩 Modular React components: Hero, About, Projects, Contact, Navbar
- 💅 Modern CSS with global and component-level styles
- 🧹 Linting with ESLint for code quality

## Project Structure

```
personal-portfolio/
├── public/
├── src/
│   ├── components/
│   │   ├── About.jsx / .css
│   │   ├── Contact.jsx / .css
│   │   ├── Hero.jsx / .css
│   │   ├── Navbar.jsx / .css
│   │   └── Projects.jsx / .css
│   ├── styles/
│   │   ├── global.css
│   │   └── GlobalAnimations.css
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── package.json
├── vite.config.js
└── README.md
```

## Getting Started

1. **Install dependencies:**
   ```sh
   npm install
   ```
2. **Start the development server:**
   ```sh
   npm run dev
   ```
3. **Build for production:**
   ```sh
   npm run build
   ```
4. **Preview the production build:**
   ```sh
   npm run preview
   ```

## Customization
- Update your information and project details in the respective components in `src/components/`.
- Adjust colors and styles in `src/styles/global.css` and component CSS files.
- Add or remove sections as needed for your personal brand.

## Dependencies
- react
- react-dom
- framer-motion
- @vitejs/plugin-react
- eslint (for development)

