<<<<<<< HEAD
<<<<<<< HEAD
# Osto.one Cybersecurity Website

A modern, responsive website built for Osto.one - a cybersecurity startup focused on providing enterprise-grade security solutions for startups.

## 🚀 Features

- **Modern Design**: Clean, professional design with cybersecurity industry aesthetics
- **Responsive**: Mobile-first responsive design that works on all devices
- **Fast Loading**: Optimized for performance with lazy loading and code splitting
- **SEO Optimized**: Built-in SEO optimization with meta tags and structured data
- **Accessible**: WCAG 2.1 AA compliant with keyboard navigation and screen reader support
- **Interactive**: Smooth animations and micro-interactions using Framer Motion

## 🛠 Tech Stack

- **Frontend**: React 18 with functional components and hooks
- **Styling**: Tailwind CSS with custom design system
- **Routing**: React Router for multi-page navigation
- **Animations**: Framer Motion for smooth animations and transitions
- **Build Tool**: Vite for fast development and optimized builds
- **Deployment**: Configured for Render deployment

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd osto-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

## 🏗 Build for Production

```bash
npm run build
```

The built files will be in the `dist` folder, ready for deployment.

## 📁 Project Structure

```
src/
├── components/
│   ├── Layout/           # Navigation, Footer
│   ├── UI/              # Reusable UI components
│   ├── Animations/      # Animation components
│   └── SEO/             # SEO related components
├── pages/               # Page components
├── hooks/               # Custom React hooks
├── utils/               # Utility functions
└── assets/              # Images, icons, fonts
```

## 🎨 Design System

The website uses a comprehensive design system with:

- **Colors**: Primary blue/navy, secondary cyan/teal, accent electric blue
- **Typography**: Inter for body text, Poppins for headings, JetBrains Mono for code
- **Components**: Consistent button styles, cards, forms, and layouts
- **Animations**: Smooth transitions, hover effects, and scroll animations

## 📱 Pages

1. **Landing Page** (`/`) - Hero, value propositions, social proof, features preview
2. **Endpoint Security** (`/endpoint-security`) - Advanced endpoint protection features
3. **Network Security** (`/network-security`) - Zero-trust network security
4. **Cloud Security** (`/cloud-security`) - Three-layer cloud protection
5. **Compliance & VAPT** (`/compliance-vapt`) - Compliance management and penetration testing
6. **About Us** (`/about`) - Company information, team, and contact details
7. **Demo & Trial** (`/demo`) - Lead generation forms and demo scheduling

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_URL=your_api_url
VITE_ANALYTICS_ID=your_analytics_id
VITE_CALENDAR_API_KEY=your_calendar_api_key
```

### Deployment

The project is configured for deployment on Render with:
- Automatic builds from Git
- Environment variable management
- CDN integration for static assets
- SSL certificate provisioning

## 🎯 Performance Targets

- **Loading Time**: < 3 seconds
- **Lighthouse Score**: > 90 for all metrics
- **Core Web Vitals**: All metrics in 'Good' range
- **Accessibility**: WCAG 2.1 AA compliant

## 🧪 Testing

The website has been tested across:
- **Browsers**: Chrome, Firefox, Safari, Edge (latest 2 versions)
- **Devices**: Mobile (320px+), Tablet (768px+), Desktop (1024px+)
- **Performance**: Lighthouse audits and WebPageTest analysis
 