import Link from 'next/link';

export default function SEO() {
  return (
    <>
      <title>Data Scientist Portfolio | Projects, Blog & Contact</title>
      <meta name="description" content="Personal portfolio showcasing data science projects, blog posts, and professional experience" />
      <link rel="canonical" href="https://data-scientist-portfolio.vercel.app" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://data-scientist-portfolio.vercel.app" />
      <meta property="og:title" content="Data Scientist Portfolio" />
      <meta property="og:description" content="Personal portfolio showcasing data science projects, blog posts, and professional experience" />
      <meta property="og:image" content="https://data-scientist-portfolio.vercel.app/og-image.png" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://data-scientist-portfolio.vercel.app" />
      <meta property="twitter:title" content="Data Scientist Portfolio" />
      <meta property="twitter:description" content="Personal portfolio showcasing data science projects, blog posts, and professional experience" />
      <meta property="twitter:image" content="https://data-scientist-portfolio.vercel.app/og-image.png" />
      
      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
    </>
  );
}