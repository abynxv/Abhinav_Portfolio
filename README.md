# Python Backend Developer Portfolio

A modern, terminal-inspired portfolio website showcasing Python backend development skills with dark theme and developer-focused design.

## 🎯 Features

- **Terminal-style Design**: Dark theme with monospace fonts and command-line aesthetics
- **JSON/GraphQL Inspired Layouts**: Code-block styled sections and API response formats
- **Interactive Elements**: Command palette (Ctrl+K), typing animations, and WebSocket-style updates
- **Responsive Design**: Optimized for mobile and desktop viewing
- **Modern Tech Stack**: Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
├── app/
│   ├── globals.css          # Global styles and terminal theme
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main page component
├── components/
│   ├── HeroSection.tsx      # Landing section with typing effect
│   ├── AboutSection.tsx     # About me in JSON format
│   ├── SkillsSection.tsx    # Skills in GraphQL schema style
│   ├── ProjectsSection.tsx  # Projects showcase
│   ├── BlogSection.tsx      # Blog posts listing
│   ├── ContactSection.tsx   # Contact form
│   ├── ApiDemoSection.tsx   # Interactive API demo
│   ├── Navigation.tsx       # Navigation bar
│   ├── TerminalWindow.tsx   # Terminal-style container
│   ├── TypingEffect.tsx     # Typing animation component
│   ├── JsonBlock.tsx        # JSON syntax highlighting
│   └── CommandPalette.tsx   # Command palette (Ctrl+K)
├── data/
│   └── portfolio.json       # Portfolio data source
└── README.md
```

## 🎨 Customization

### Update Content
Edit `data/portfolio.json` to customize:
- Personal information
- Skills and technologies
- Projects and descriptions
- Blog posts
- Contact information

### Modify Styling
- **Colors**: Edit CSS variables in `app/globals.css`
- **Fonts**: Update font imports and font-family declarations
- **Animations**: Customize Framer Motion animations in components

### Add New Sections
1. Create a new component in `components/`
2. Add it to the main page in `app/page.tsx`
3. Update navigation in `components/Navigation.tsx`

## 🔧 Key Features

### Terminal Theme
- Dark background with terminal green accents
- Monospace fonts (JetBrains Mono)
- Command-line inspired UI elements

### Interactive Elements
- **Command Palette**: Press `Ctrl+K` to open navigation
- **Typing Effect**: Animated text typing in hero section
- **JSON Blocks**: Syntax-highlighted JSON displays
- **API Demo**: Interactive endpoint testing

### Responsive Design
- Mobile-first approach
- Optimized layouts for all screen sizes
- Touch-friendly navigation

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically with each push

### Manual Build
```bash
npm run build
npm run start
```

## 🛠️ Tech Stack

- **Framework**: Next.js 13+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **UI Components**: Radix UI (via shadcn/ui)

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest new features
- Submit pull requests

## 📧 Contact

For questions or feedback, reach out via:
- Email: abhinav@example.com
- GitHub: @abhinav
- LinkedIn: /in/abhinav

---

Built by Abhinav - Python Backend Developer
