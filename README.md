# Data Scientist Portfolio

A personal portfolio website showcasing data science projects, blog posts, and professional experience.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS 3
- **Blog**: MDX with next-mdx-remote
- **Form**: Vercel Serverless Function + EmailJS
- **Icons**: Heroicons
- **Font**: Inter via Google Fonts
- **Type Checking**: TypeScript
- **Deployment**: Vercel
- **Hosting**: GitHub

## Features

- Home page with introduction and navigation
- Projects page with filtering capabilities
- Individual project pages with detailed descriptions
- Blog system with MDX support
- Contact form with email integration
- About page with bio and skills
- Responsive design (mobile, tablet, desktop)
- SEO optimization
- Accessibility compliance (WCAG AA)
- Custom 404 page

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/abhinavpadige4/data-scientist-portfolio.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env.local` file with:
   ```
   EMAILJS_SERVICE_ID=your_service_id
   EMAILJS_TEMPLATE_ID=your_template_id
   EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) to view the site.

## Deployment

This project is configured for automatic deployment to Vercel. Simply push to the main branch and Vercel will handle the build and deployment.

## License

MIT