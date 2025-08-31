# Meritifi - EdTech Landing Page

A modern, responsive landing page for Meritifi, an educational technology platform that connects students with expert tutors. Built with Next.js 15, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with responsive breakpoints
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Custom Fonts**: Uses authentic fonts from the Figma design (Balsamiq Sans, Plus Jakarta Sans, Poppins, Inter)
- **Interactive Elements**: Hover effects, animations, and smooth transitions
- **Accessibility**: Semantic HTML and proper ARIA labels
- **Performance**: Optimized with Next.js 15 and Turbopack

## 🎨 Design Sections

1. **Hero Section** - Main messaging and call-to-action buttons
2. **How It Works** - Step-by-step process for students and teachers
3. **Dashboard Section** - Showcase of student and teacher dashboards
4. **Top Tutors** - Featured teacher profiles with ratings and details
5. **Magazine Section** - Blog content and social media integration
6. **Success Stories** - Student testimonials and reviews
7. **College Search** - Interactive search functionality
8. **Footer** - Navigation links and contact information

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Balsamiq Sans, Plus Jakarta Sans, Poppins, Inter)
- **Development**: ESLint, Turbopack

## 📁 Project Structure

```
meritifi/
├── src/
│   ├── app/
│   │   ├── globals.css          # Global styles and custom fonts
│   │   ├── layout.tsx           # Root layout component
│   │   └── page.tsx             # Main landing page
│   ├── components/
│   │   └── ui/
│   │       └── button.tsx       # Reusable button component
│   └── lib/
│       └── utils.ts             # Utility functions
├── public/                       # Static assets
├── package.json                  # Dependencies
└── README.md                     # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd meritifi
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎯 Key Components

### Button Component

A flexible button component with multiple variants:

- `default` - Primary button
- `outline` - Outlined button
- `destructive` - Danger button
- `secondary` - Secondary button
- `ghost` - Ghost button
- `link` - Link-style button

### Custom Fonts

- **Balsamiq Sans**: Used for main headings and brand elements
- **Plus Jakarta Sans**: Used for section headings and important text
- **Poppins**: Used for article titles and magazine content
- **Inter**: Used for testimonials and body text
- **Lato**: Default body font

## 🎨 Design System

See `ctx/Design_System.md` for the canonical design tokens, typography scale (desktop/mobile), button sizing (ALL CAPS), and usage guidelines.

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

### Deploy to Vercel

The project is optimized for Vercel deployment with Next.js 15.

## 🔧 Customization

### Adding New Sections

1. Create a new section component in the main page
2. Follow the existing pattern with proper semantic HTML
3. Use the established color scheme and typography

### Modifying Colors

Update the color variables in `tailwind.config.js` or use the existing color classes.

### Adding New Fonts

1. Import the font in `globals.css`
2. Create a new font class
3. Apply to the desired elements

## 📝 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For support or questions, please contact:

- Email: info@meritifi.com
- Phone: +1 (999) 999-99-99

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
