# Developer Portfolio

A modern, responsive developer portfolio website built with Next.js and Sanity CMS, featuring beautiful animations and a dark/light theme toggle.

## 🌟 Features

- **Responsive Design**: Optimized for all device sizes
- **Dark/Light Mode**: Theme switcher for user preference
- **Content Management**: Sanity CMS integration for easy content updates
- **Modern Animations**: Smooth animations using Framer Motion
- **Interactive Effects**: Particle backgrounds and typewriter effects
- **Contact Form**: Functional contact form for inquiries
- **Project Showcase**: Dynamic project gallery
- **Skills Section**: Interactive skills display
- **Resume/CV Page**: Dedicated resume section

## 🛠️ Tech Stack

### Frontend
- **Next.js 13** - React framework with SSG/SSR
- **React 18** - JavaScript library for building user interfaces
- **Tailwind CSS** - Utility-first CSS framework
- **NextUI** - Modern React UI library
- **Framer Motion** - Animation library
- **React Icons** - Icon library

### Content Management
- **Sanity CMS** - Headless CMS for content management
- **Sanity Image URL** - Image optimization and transformation

### Styling & UI
- **Tailwind CSS** - Main styling framework
- **Custom Fonts**: Azonix, Nunito, and Poppins
- **next-themes** - Theme switching functionality

### Interactive Elements
- **React Simple Typewriter** - Typewriter text effects
- **React Scroll** - Smooth scrolling navigation
- **React Tilt** - 3D tilt effects
- **Particles BG** - Particle background animations
- **React Hook Form** - Form management

## 📁 Project Structure

```
├── components/
│   ├── About.js          # About section component
│   ├── Contact.js        # Contact section component
│   ├── ContactForm.js    # Contact form component
│   ├── ContactItems.js   # Contact information display
│   ├── Hero.js           # Hero/landing section
│   ├── Project.js        # Projects showcase component
│   ├── Skill.js          # Skills display component
│   └── Layout/
│       ├── Footer.js     # Site footer
│       ├── Layout.js     # Main layout wrapper
│       ├── Navbar.js     # Navigation component
│       └── ThemeSwitcher.js # Dark/light mode toggle
├── pages/
│   ├── _app.js           # Next.js app configuration
│   ├── _document.js      # HTML document structure
│   ├── index.js          # Homepage
│   ├── projects.js       # Projects page
│   ├── resume.js         # Resume/CV page
│   └── api/
│       └── hello.js      # API endpoint example
├── config/
│   └── sanity.config.js  # Sanity CMS configuration
├── styles/
│   ├── globals.css       # Global styles
│   ├── custom.css        # Custom component styles
│   └── hero.css          # Hero section specific styles
├── assets/               # Font files and static assets
└── public/               # Static files and favicon
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn
- Sanity account and project

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd developer-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment Setup**
   Create a `.env.local` file in the root directory:
   ```env
   SANITY_PROJECT_ID=your_sanity_project_id
   SANITY_DATASET=your_sanity_dataset
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Sanity CMS Setup

1. **Create a Sanity project**
   - Go to [sanity.io](https://sanity.io)
   - Create a new project
   - Note your project ID and dataset name

2. **Configure content schemas**
   Set up the following content types in your Sanity studio:
   - `bio` - Personal information and profile image
   - `skill` - Technical skills with icons/images
   - `project` - Project details, images, and links

3. **Update environment variables**
   Add your Sanity project credentials to `.env.local`

## 📝 Content Management

The portfolio uses Sanity CMS for content management. You can update:

- **Bio/Profile**: Personal information, profile image, and introduction
- **Skills**: Technical skills with proficiency levels and icons
- **Projects**: Project details, screenshots, technologies used, and links
- **Contact Information**: Contact details and social media links

## 🎨 Customization

### Themes
The portfolio supports dark and light themes. Customize colors in:
- `tailwind.config.js` - Tailwind configuration
- `styles/globals.css` - Global theme variables

### Fonts
Custom fonts are located in the `assets/` directory:
- **Azonix** - Display font
- **Nunito** - Body text
- **Poppins** - Headings and emphasis

### Animations
Framer Motion animations can be customized in individual components for:
- Page transitions
- Element reveals
- Interactive hover effects

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically on every push

### Netlify
1. Build the project: `npm run build`
2. Deploy the `out/` folder to Netlify
3. Configure environment variables in Netlify dashboard

### Manual Deployment
```bash
npm run build
npm run start
```

## 📱 Pages

- **Home** (`/`) - Hero, About, and Contact sections
- **Projects** (`/projects`) - Detailed project showcase
- **Resume** (`/resume`) - CV/Resume page

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Klajdi Murataj**
- GitHub: [@klajdm](https://github.com/klajdm)
- LinkedIn: [[Klajdi Murataj](https://www.linkedin.com/in/klajdi-murataj-511617285/)]

---

⭐ Don't forget to star this repository if you found it helpful!