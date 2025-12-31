# Portfolio 2.0

A modern, responsive portfolio website showcasing software development projects, skills, and professional experience. Built with React and featuring premium UI interactions, dark/light mode theming, and smooth animations.

## Overview

This portfolio serves as a professional showcase for software development work, highlighting expertise in web development, AI/ML projects, and community building. The site features an intuitive design with interactive project cards, expandable descriptions, and a clean, scannable layout optimized for both recruiters and fellow developers.

## Tech Stack

### Frontend
- **React 18** - Component-based UI framework
- **Vite** - Fast build tool and dev server
- **Tailwind CSS 4** - Utility-first CSS framework
- **Lucide React** - Modern icon library

### Tooling
- **ESLint** - Code quality and consistency
- **PostCSS** - CSS processing and optimization

### Deployment
- Optimized for **Vercel**, **Netlify**, or any static hosting platform
- Supports custom domain configuration
- Production builds with automatic optimization

## Key Features

✨ **Interactive UI Components**
- Hover-based action reveals on project cards
- Expandable/collapsible project descriptions with "Read more" functionality
- Smooth card lift effects and subtle animations
- Premium hover interactions on About Me role cards

🎨 **Design & Theming**
- Dark/light mode toggle with persistent preference
- Starry background animations for visual depth
- Glassmorphism effects and gradient borders
- Consistent color palette with purple accent (#8B5CF6)

📱 **Responsive Layout**
- Mobile-first design approach
- Adaptive grid layouts for all screen sizes
- Touch-friendly interactions
- Optimized typography hierarchy

🚀 **Performance**
- Fast page loads with Vite optimization
- Hardware-accelerated animations
- Lazy loading and code splitting
- SEO-friendly markup

## Getting Started

### Prerequisites
- Node.js 16+ and npm/yarn installed

### Installation

1. Clone the repository:
```bash
git clone https://github.com/tobymathew123/portfolio2.0.git
cd portfolio2.0
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

Create an optimized production build:
```bash
npm run build
```

Preview the production build locally:
```bash
npm run preview
```

## Project Structure

```
portfolio2.0/
├── src/
│   ├── components/      # React components
│   │   ├── Navbar.jsx
│   │   ├── HeroSection.jsx
│   │   ├── AboutSection.jsx
│   │   ├── ProjectsSection.jsx
│   │   └── ContactSection.jsx
│   ├── pages/          # Page components
│   ├── index.css       # Global styles and utilities
│   └── main.jsx        # Application entry point
├── public/             # Static assets
└── package.json        # Dependencies and scripts
```

## Customization

### Updating Projects
Edit the `Projects` array in `src/components/ProjectsSection.jsx` to add or modify project entries.

### Changing Theme Colors
Modify CSS custom properties in `src/index.css` under the `:root` and `.dark` selectors.

### Adding Sections
Create new components in `src/components/` and import them into your main page layout.

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Import the repository in Vercel
3. Deploy with default settings (Vite preset)

### Netlify
1. Connect your GitHub repository
2. Build command: `npm run build`
3. Publish directory: `dist`

### Custom Domain
Configure your custom domain through your hosting provider's DNS settings.

## License

This project is open source and available for personal and educational use.

---

Built with ❤️ using React + Vite
