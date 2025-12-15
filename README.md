# Agency Website

A modern, fully functional agency website built with **Next.js 14+**, featuring a JSON-driven architecture for easy content management, stunning animations, and a complete set of features for showcasing your agency's work.

![Next.js](https://img.shields.io/badge/Next.js-14.2.35-black)
![React](https://img.shields.io/badge/React-18.3.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.4.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.0-38B2AC)
![License](https://img.shields.io/badge/license-MIT-green)

## ✨ Features

### Core Features
- 🎨 **Modern Design** - Beautiful gradient backgrounds, glass morphism effects, and smooth animations
- 📱 **Fully Responsive** - Perfect on mobile, tablet, and desktop
- 🌓 **Dark Mode** - Toggle between light and dark themes with localStorage persistence
- ⚡ **Fast Performance** - Server Components, code splitting, and optimized bundle size
- 📊 **JSON-Driven** - All content managed through JSON files for easy updates
- 🎭 **Smooth Animations** - Framer Motion for scroll animations and interactions
- 🔒 **Type Safe** - Full TypeScript support with strict mode
- 📧 **Contact Forms** - Validated forms with React Hook Form and Zod
- 🎉 **Toast Notifications** - Real-time feedback with react-hot-toast

### Sections
- **Hero Section** - Eye-catching gradient background with animated CTAs
- **Services** - 6 core services with icons and descriptions
- **Stats Counter** - Animated statistics on scroll
- **Tech Stack** - Display of technologies used
- **Projects Portfolio** - 7 projects with language composition breakdown
- **Team** - 3 team members with LinkedIn profiles
- **Testimonials** - Client reviews with 5-star ratings
- **Newsletter** - Email subscription form
- **Contact** - Full contact form with validation

## 🚀 Tech Stack

### Core
- **Next.js 14.2.35** - React framework with App Router
- **React 18.3.0** - UI library
- **TypeScript 5.4.0** - Type safety

### Styling
- **Tailwind CSS 3.4.0** - Utility-first CSS framework
- **Framer Motion 11.0.0** - Animation library

### Forms & Validation
- **React Hook Form 7.51.0** - Form handling
- **Zod 3.22.0** - Schema validation
- **@hookform/resolvers 3.3.0** - Form validation resolver

### UI & Icons
- **Lucide React 0.356.0** - Icon library
- **react-hot-toast 2.4.1** - Toast notifications

### Utilities
- **clsx 2.1.0** - Conditional classnames
- **tailwind-merge 2.2.0** - Merge Tailwind classes

## 📦 Installation

### Prerequisites
- Node.js 18+ and npm/yarn/pnpm

### Steps

1. **Clone the repository**
```bash
git clone https://github.com/preethel/agency-website.git
cd agency-website
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Run development server**
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. **Open in browser**
Navigate to [http://localhost:3000](http://localhost:3000)

## 🛠️ Development Commands

```bash
# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run ESLint
npm run lint
```

## 📝 Content Management

All content is managed through JSON files in the `/data` folder. Simply edit these files to update your website content.

### Updating Site Configuration

Edit `/data/config.json`:
```json
{
  "siteName": "Your Agency Name",
  "tagline": "Your Tagline",
  "description": "Your description",
  "email": "contact@youragency.com",
  "phone": "+1 (555) 123-4567",
  "address": "Your Address",
  "social": {
    "github": "https://github.com/yourusername",
    "linkedin": "https://linkedin.com/company/youragency",
    "twitter": "https://twitter.com/youragency"
  }
}
```

### Adding a New Team Member

Edit `/data/team.json` and add:
```json
{
  "id": "4",
  "name": "John Doe",
  "title": "Full-Stack Developer",
  "bio": "Brief bio about John...",
  "linkedin": "https://www.linkedin.com/in/johndoe",
  "skills": ["React", "Node.js", "Python"],
  "initials": "JD"
}
```

### Adding a New Project

Edit `/data/projects.json` and add:
```json
{
  "id": "7",
  "name": "Project Name",
  "description": "Brief project description",
  "repo": "username/repo-name",
  "repoUrl": "https://github.com/username/repo-name",
  "languages": [
    { "name": "JavaScript", "percentage": 60.5 },
    { "name": "TypeScript", "percentage": 30.2 },
    { "name": "CSS", "percentage": 9.3 }
  ]
}
```

### Adding a Client Review

Edit `/data/reviews.json` and add:
```json
{
  "id": "7",
  "name": "Client Name",
  "company": "Company Name",
  "position": "CEO",
  "review": "The review text...",
  "rating": 5,
  "initials": "CN"
}
```

### Adding a Service

Edit `/data/services.json` and add:
```json
{
  "id": "7",
  "icon": "Code2",
  "title": "Service Name",
  "description": "Service description..."
}
```

Available icons from `lucide-react`: `Code2`, `Brain`, `Layers`, `TrendingUp`, `Cloud`, `Smartphone`, etc.

### Updating Statistics

Edit `/data/stats.json`:
```json
{
  "id": "1",
  "label": "Projects Completed",
  "value": 100,
  "suffix": "+"
}
```

### Managing Tech Stack

Edit `/data/techstack.json`:
```json
{
  "id": "11",
  "name": "Vue.js",
  "category": "Frontend"
}
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. **Push your code to GitHub**
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. **Import to Vercel**
- Go to [vercel.com](https://vercel.com)
- Click "Import Project"
- Select your GitHub repository
- Click "Deploy"

That's it! Your site will be live in minutes.

### Deploy to Other Platforms

The site can be deployed to any platform that supports Next.js:
- **Netlify** - Follow their Next.js deployment guide
- **Railway** - Connect your repo and deploy
- **AWS Amplify** - Use their hosting service
- **Self-hosted** - Build with `npm run build` and serve with `npm start`

## 🎨 Customization

### Colors

Edit `tailwind.config.ts` to change the color scheme:
```typescript
colors: {
  primary: "#3B82F6",    // Blue
  secondary: "#8B5CF6",  // Purple
  accent: "#EC4899",     // Pink
  dark: "#0F172A",       // Dark blue
  light: "#F8FAFC",      // Light gray
}
```

### Fonts

The site uses Inter font by default. To change it, edit `app/layout.tsx`:
```typescript
import { YourFont } from "next/font/google";

const yourFont = YourFont({ subsets: ["latin"] });
```

### Animations

Adjust animation timings in `app/globals.css` or Framer Motion components.

## 📁 Project Structure

```
/
├── app/
│   ├── layout.tsx              # Root layout with metadata
│   ├── page.tsx                # Main page
│   ├── globals.css             # Global styles
│   ├── api/
│   │   ├── subscribe/
│   │   │   └── route.ts        # Newsletter API
│   │   └── contact/
│   │       └── route.ts        # Contact form API
│   └── components/
│       ├── Hero.tsx            # Hero section
│       ├── Navigation.tsx      # Header & nav
│       ├── Team.tsx            # Team section
│       ├── Projects.tsx        # Portfolio
│       ├── Reviews.tsx         # Testimonials
│       ├── Services.tsx        # Services grid
│       ├── Stats.tsx           # Statistics counter
│       ├── TechStack.tsx       # Tech stack display
│       ├── Newsletter.tsx      # Newsletter form
│       ├── Contact.tsx         # Contact form
│       ├── Footer.tsx          # Footer
│       ├── ThemeToggle.tsx     # Dark mode toggle
│       └── ScrollProgress.tsx  # Scroll indicator
├── data/
│   ├── config.json            # Site configuration
│   ├── team.json              # Team members
│   ├── projects.json          # Portfolio projects
│   ├── reviews.json           # Client testimonials
│   ├── services.json          # Services offered
│   ├── stats.json             # Statistics
│   └── techstack.json         # Technologies
├── lib/
│   ├── types.ts               # TypeScript types
│   └── utils.ts               # Utility functions
├── public/
│   └── .gitkeep               # Public assets folder
├── .env.example               # Environment variables template
├── .gitignore                 # Git ignore rules
├── tailwind.config.ts         # Tailwind configuration
├── tsconfig.json              # TypeScript configuration
├── postcss.config.js          # PostCSS configuration
├── next.config.js             # Next.js configuration
├── package.json               # Dependencies
└── README.md                  # This file
```

## 🔒 Environment Variables

Create a `.env.local` file for environment-specific variables:

```env
# Add your API keys and secrets here
EMAIL_SERVICE_API_KEY=your_key
NEWSLETTER_API_KEY=your_key
```

See `.env.example` for all available variables.

## 🧪 Testing

Currently, the project doesn't include tests. You can add:
- **Jest** for unit tests
- **React Testing Library** for component tests
- **Playwright** or **Cypress** for E2E tests

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Icons by [Lucide](https://lucide.dev/)
- Animations by [Framer Motion](https://www.framer.com/motion/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)

## 📞 Support

If you have any questions or need help, please:
- Open an issue on GitHub
- Contact us at contact@agency.com
- Check out the [Next.js documentation](https://nextjs.org/docs)

## 🎯 Roadmap

Future enhancements:
- [ ] Blog section
- [ ] Case studies with detailed project pages
- [ ] Multi-language support (i18n)
- [ ] Admin dashboard for content management
- [ ] Analytics integration
- [ ] SEO optimizations with sitemap generation
- [ ] PWA support
- [ ] Performance monitoring

---

Made with ❤️ by [Agency Team](https://github.com/preethel)
