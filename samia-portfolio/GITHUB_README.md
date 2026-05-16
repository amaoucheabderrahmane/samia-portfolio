# Samia Brahimi - Professional Portfolio

A modern, responsive portfolio website showcasing professional experience, education, and skills. Built with React, Tailwind CSS, and modern web technologies.

## 🎨 Design Features

- **Dark Professional Theme**: Sleek dark background with vibrant teal accents
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Elegant transitions and hover effects throughout
- **Modern Typography**: Professional font hierarchy with Poppins and Inter fonts
- **Accessibility**: Built with accessibility best practices in mind

## 📋 Sections

- **Hero Section**: Eye-catching introduction with call-to-action buttons
- **About**: Professional background and key achievements
- **Experience**: Detailed work history with responsibilities and skills
- **Education**: Certifications and professional training
- **Contact**: Multiple ways to get in touch with social links
- **Navigation**: Smooth scrolling navigation with active state tracking

## 🛠️ Tech Stack

- **Frontend**: React 19 with TypeScript
- **Styling**: Tailwind CSS 4 with custom components
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Routing**: Wouter
- **Build Tool**: Vite
- **Package Manager**: pnpm

## 📦 Installation & Setup

### Prerequisites
- Node.js 18+ 
- pnpm (or npm/yarn)

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/samia-portfolio.git
   cd samia-portfolio
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Start development server**
   ```bash
   pnpm dev
   ```
   The site will be available at `http://localhost:3000`

4. **Build for production**
   ```bash
   pnpm build
   ```

5. **Preview production build**
   ```bash
   pnpm preview
   ```

## 🚀 Deployment Options

### Option 1: GitHub Pages (Free)

1. **Update `vite.config.ts`** to set the base path:
   ```typescript
   export default defineConfig({
     base: '/samia-portfolio/', // Replace with your repo name
     // ... rest of config
   })
   ```

2. **Create GitHub Actions workflow** (`.github/workflows/deploy.yml`):
   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches: [ main ]

   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v3
         - uses: pnpm/action-setup@v2
         - uses: actions/setup-node@v3
           with:
             node-version: '18'
             cache: 'pnpm'
         - run: pnpm install
         - run: pnpm build
         - uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./dist
   ```

3. **Enable GitHub Pages** in repository settings:
   - Go to Settings → Pages
   - Select "Deploy from a branch"
   - Choose `gh-pages` branch

### Option 2: Netlify (Recommended)

1. **Connect GitHub repository** to Netlify
2. **Build settings**:
   - Build command: `pnpm build`
   - Publish directory: `dist`
3. **Deploy** - Netlify will automatically deploy on push to main

### Option 3: Vercel

1. **Import project** from GitHub to Vercel
2. **Framework**: Select "Other"
3. **Build command**: `pnpm build`
4. **Output directory**: `dist`
5. **Deploy** - Automatic deployment on push

### Option 4: Traditional Hosting

1. **Build the project**:
   ```bash
   pnpm build
   ```

2. **Upload `dist` folder** to your hosting provider (FTP, cPanel, etc.)

3. **Configure server** to serve `dist/index.html` for all routes (for client-side routing)

## 🔗 LinkedIn Integration

To add LinkedIn link to your portfolio:

1. **Update contact section** in `client/src/pages/Home.tsx`:
   ```typescript
   <a
     href="https://linkedin.com/in/yourprofile"
     target="_blank"
     rel="noopener noreferrer"
     className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
   >
     <LinkedinIcon className="w-5 h-5" />
   </a>
   ```

2. **Add LinkedIn icon** from lucide-react:
   ```typescript
   import { Linkedin } from "lucide-react";
   ```

## 📝 Customization

### Update Personal Information

Edit `client/src/pages/Home.tsx`:
- Change name, title, and description
- Update email, phone, and location
- Modify experience and education sections
- Add/remove skills and languages

### Customize Colors

Edit `client/src/index.css`:
- Primary color (teal): `--primary: #00d9ff`
- Accent color (gold): `--accent: #f4a460`
- Background: `--background: #0a0e27`
- Modify as needed for your brand

### Add Profile Image

1. **Upload your image** to a CDN or use base64
2. **Replace placeholder** in hero section:
   ```typescript
   <img 
     src="your-image-url" 
     alt="Samia Brahimi"
     className="profile-image w-full h-full object-cover"
   />
   ```

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

All sections are fully responsive and tested across devices.

## 🎯 Performance

- **Optimized bundle size**: ~50KB gzipped
- **Fast load times**: Vite's instant HMR
- **SEO friendly**: Semantic HTML and proper meta tags
- **Accessibility**: WCAG 2.1 compliant

## 📄 File Structure

```
samia-portfolio/
├── client/
│   ├── public/
│   │   ├── favicon.ico
│   │   └── robots.txt
│   ├── src/
│   │   ├── components/
│   │   │   └── ui/          # shadcn/ui components
│   │   ├── pages/
│   │   │   ├── Home.tsx     # Main portfolio page
│   │   │   └── NotFound.tsx
│   │   ├── App.tsx          # Main app component
│   │   ├── main.tsx         # Entry point
│   │   └── index.css        # Global styles
│   └── index.html
├── package.json
├── vite.config.ts
└── tsconfig.json
```

## 🔐 Security

- No sensitive data stored in code
- Environment variables for any API keys
- Content Security Policy headers recommended
- Regular dependency updates via Dependabot

## 📞 Contact & Support

- **Email**: amaoucheabderrahmane@gmail.com
- **Phone**: +1-200-300-4000
- **Location**: Batna, Algeria

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Credits

- Built with [React](https://react.dev)
- Styled with [Tailwind CSS](https://tailwindcss.com)
- Components from [shadcn/ui](https://ui.shadcn.com)
- Icons from [Lucide React](https://lucide.dev)

---

**Last Updated**: May 2024  
**Version**: 1.0.0
