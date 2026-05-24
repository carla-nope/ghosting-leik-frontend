# GhostingLeik - Customer-Facing Website

A modern, responsive website for GhostingLeik.com - your destination for Japanese ghost stories (kaidan) and supernatural folklore (yōkai).

## Features

- **Home Page**: Hero section, features overview, testimonials, CTAs
- **Stories Archive**: Browse and search ghost stories with categories
- **Yōkai Encyclopedia**: Complete bestiary of supernatural creatures
- **Personality Quiz**: Interactive yōkai matching quiz
- **Story Oracle**: AI-powered story generation tool
- **Pricing**: Membership tiers with comparison table
- **About & Contact**: Company info and contact forms

## Tech Stack

- **React 18.3** + TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **React Router v6** for navigation
- **Lucide React** for icons

## Getting Started

### Prerequisites

- Node.js 18+ or 20+
- npm or pnpm

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## Project Structure

```
src/
├── components/
│   └── layout/
│       └── Layout.tsx      # Shared header/footer
├── pages/
│   ├── HomePage.tsx       # Landing page
│   ├── StoriesPage.tsx    # Story archive
│   ├── YokaiPage.tsx      # Yōkai encyclopedia
│   ├── QuizPage.tsx       # Personality quiz
│   ├── StoryOraclePage.tsx # Story generator
│   ├── PricingPage.tsx    # Membership tiers
│   ├── AboutPage.tsx      # About us
│   ├── ContactPage.tsx    # Contact form
│   ├── StoryDetailPage.tsx # Individual story
│   ├── YokaiDetailPage.tsx # Individual yōkai
│   └── SuccessPage.tsx    # Post-subscription
├── App.tsx                # Router configuration
├── main.tsx               # Entry point
└── index.css              # Global styles
```

## Deployment

This project is optimized for deployment to Vercel, Netlify, or any static hosting service.

### Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify

```bash
# Build
pnpm build

# Drag dist folder to Netlify drop
```

## Git Setup

```bash
# Initialize git
git init

# Add remote (replace with your repo)
git remote add origin https://github.com/yourusername/ghosting-leik-frontend.git

# Commit
git add .
git commit -m "Initial commit: Customer-facing website"

# Push
git push -u origin main
```

## Customization

### Colors

Edit `tailwind.config.js` to customize the color palette:

```js
colors: {
  primary: '#9333ea',  // Purple
  secondary: '#ec4899', // Pink
  accent: '#ef4444',     // Red
}
```

### Content

All page content is in `/src/pages/`. Edit directly to update text, images, and links.

## License

© 2025 GhostingLeik.com. All rights reserved.