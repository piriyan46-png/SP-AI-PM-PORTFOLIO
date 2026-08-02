# SP-AI-PM-PORTFOLIO

A responsive personal portfolio for Sanmuga Piriyan, built with React and Vite. It presents AI product-management experience, hands-on AI development skills, professional experience, certifications, and seven featured projects.

## Features

- Responsive light and dark themes
- Theme preference saved in `localStorage`
- Accessible desktop and mobile navigation
- Animated sections and project cards using Framer Motion
- Seven clickable project cards
- Experience timeline, skills, certifications, education, languages, and contact sections
- Reduced-motion support
- SEO and Open Graph metadata
- Responsive layouts for mobile, tablet, and desktop

## Technology

- React 19
- Vite 6
- JavaScript
- Modern CSS
- Framer Motion
- Lucide React
- ESLint

## Prerequisites

Install the following before running the project:

- [Node.js](https://nodejs.org/) 18 or newer
- npm, which is included with Node.js

Check that they are installed:

```bash
node --version
npm --version
```

## Run the project step by step

### 1. Open the project folder

In PowerShell or a terminal:

```powershell
cd "D:\sp portfolio"
```

If the project is stored somewhere else, replace the path with its actual location.

### 2. Install dependencies

```bash
npm install
```

On Windows PowerShell, if script execution prevents `npm` from running, use:

```powershell
npm.cmd install
```

### 3. Start the development server

```bash
npm run dev
```

Windows PowerShell alternative:

```powershell
npm.cmd run dev
```

Vite will print a local address, normally:

```text
http://localhost:5173
```

Open that address in a browser. Changes made to source files will refresh automatically.

### 4. Stop the development server

Return to the terminal and press:

```text
Ctrl + C
```

## Verify the project

Run the code-quality check:

```bash
npm run lint
```

Create an optimized production build:

```bash
npm run build
```

The generated production files will be placed in the `dist` directory.

Preview the production build locally:

```bash
npm run preview
```

Then open the local URL printed by Vite, normally `http://localhost:4173`.

## Available commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run lint` | Check JavaScript and JSX with ESLint |
| `npm run build` | Generate an optimized production build |
| `npm run preview` | Preview the production build locally |

## Project structure

```text
src/
├── components/
│   ├── Hero.jsx
│   ├── Navbar.jsx
│   ├── Projects.jsx
│   └── Sections.jsx
├── data/
│   └── content.js
├── styles/
│   ├── global.css
│   └── responsive.css
├── App.jsx
└── main.jsx
```

## Customize portfolio content

Most personal information and project data are centralized in:

```text
src/data/content.js
```

Update this file to change:

- Name and contact details
- GitHub and LinkedIn URLs
- Project descriptions and technologies
- Professional experience
- Skills and expertise
- Resume path

Page metadata, the canonical URL, and social-sharing descriptions are located in:

```text
index.html
```

Theme colors and layout styles are located in:

```text
src/styles/global.css
src/styles/responsive.css
```

## Add the résumé

The supplied résumé is included in the public directory with this filename:

```text
public/Sanmuga-Piriyan-Resume.docx
```

The Download Résumé button serves this document directly.

## Remaining configuration

Before deployment:

1. Replace `https://example.com/` in `index.html` with the deployed portfolio URL.
2. Replace the shared GitHub profile URL with individual repository URLs when they become available.

## Deployment

Run the production build:

```bash
npm run build
```

Deploy the generated `dist` directory to a static hosting provider such as Vercel, Netlify, Cloudflare Pages, GitHub Pages, or another static web host.

## Contact

- Email: [piriyan46@gmail.com](mailto:piriyan46@gmail.com)
- GitHub: [piriyan46-png](https://github.com/piriyan46-png)
- Location: Bengaluru, India
>>>>>>> b892e96 (Initial portfolio commit)
