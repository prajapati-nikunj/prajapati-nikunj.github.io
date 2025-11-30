# Nikunj Prajapati - Portfolio

A modern, responsive portfolio website showcasing my work as a Lead iOS Software Engineer.

## 🚀 Tech Stack

- **React 18** - Modern UI library
- **TypeScript** - Type-safe code
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations
- **React Icons** - Icon library

## 🎨 Features

- ✨ Modern, animated design with glassmorphism effects
- 📱 Fully responsive (mobile, tablet, desktop)
- 🎭 Smooth scroll animations
- 🎯 Filtered project and skills showcase
- ⚡ Optimized performance
- 🌐 SEO optimized

## 🛠️ Development

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The development server will start at `http://localhost:5173`

## 📦 Deployment

### GitHub Pages

This portfolio is configured for automatic deployment to GitHub Pages.

1. **Manual Deployment**:
```bash
npm run build
npm run deploy
```

2. **Automatic Deployment**:
Push to main branch - GitHub Actions will automatically build and deploy.

### 🔐 Firebase & GitHub Secrets Setup

To make the visitor counter work on the live site, you must add your Firebase keys to GitHub Secrets:

1. Go to **Settings** > **Secrets and variables** > **Actions** in your GitHub repo.
2. Add the following secrets (copy values from your local `.env`):
   - `VITE_FIREBASE_API_KEY`
   - `VITE_FIREBASE_AUTH_DOMAIN`
   - `VITE_FIREBASE_PROJECT_ID`
   - `VITE_FIREBASE_STORAGE_BUCKET`
   - `VITE_FIREBASE_MESSAGING_SENDER_ID`
   - `VITE_FIREBASE_APP_ID`
   - `VITE_GA_MEASUREMENT_ID`

**Note:** The visitor counter requires Firestore Database to be enabled in your Firebase Console with appropriate security rules.

## 📁 Project Structure

```
NP/
├── src/
│   ├── components/        # React components
│   │   ├── ui/           # Reusable UI components
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── Education.tsx
│   │   └── Contact.tsx
│   ├── data/
│   │   └── portfolio.ts  # Portfolio content data
│   ├── styles/
│   │   └── index.css     # Global styles
│   ├── App.tsx           # Main app component
│   └── main.tsx          # Entry point
├── public/               # Static assets
└── index.html           # HTML template
```

## 🎯 Customization

To customize the portfolio with your own information:

1. Edit `src/data/portfolio.ts` with your personal info, projects, experience, etc.
2. Replace images in the `public/images/` directory
3. Adjust colors in `tailwind.config.js`
4. Modify animations in component files

## 📄 License

© 2025 Nikunj Prajapati. All rights reserved.

## 📧 Contact

- Email: np9199@gmail.com
- LinkedIn: [nikunjprajapati](http://linkedin.com/in/nikunjprajapati)
- GitHub: [prajapati-nikunj](https://github.com/prajapati-nikunj)
