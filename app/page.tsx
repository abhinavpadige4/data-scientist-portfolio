import Link from 'next/link';
import Logo from '@/components/layout/Logo';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { BlogPostCard } from '@/components/ui/BlogPostCard';
import { FilterButtons } from '@/components/ui/FilterButtons';
import { SkillBadge } from '@/components/ui/SkillBadge';
import projectsData from '@/data/projects.json';

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Hi, I'm a Data Scientist
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Passionate about turning data into insights and building machine learning solutions that drive business value.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <SkillBadge label="Python" />
            <SkillBadge label="Machine Learning" />
            <SkillBadge label="Deep Learning" />
            <SkillBadge label="SQL" />
            <SkillBadge label="Statistics" />
            <SkillBadge label="Data Visualization" />
          </div>
          <Link href="/projects" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors">
            Explore My Projects
          </Link>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Projects</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projectsData.slice(0, 3).map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/projects" className="text-blue-600 hover:text-blue-800 font-medium">
              View All Projects →
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Latest Blog Posts</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Placeholder for blog posts - will be populated from MDX files */}
            <div className="bg-white rounded-lg shadow hover:shadow-md transition-shadow">
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">Understanding Neural Networks</h3>
                <p className="text-gray-600 mb-4">
                  A comprehensive guide to neural network architectures and their applications in deep learning.
                </p>
                <Link href="/blog/understanding-neural-networks" className="text-blue-600 hover:text-blue-800 font-medium">
                  Read more →
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow hover:shadow-md transition-shadow">
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">Feature Engineering Best Practices</h3>
                <p className="text-gray-600 mb-4">
                  Learn how to extract meaningful features from raw data to improve model performance.
                </p>
                <Link href="/blog/feature-engineering-best-practices" className="text-blue-600 hover:text-blue-800 font-medium">
                  Read more →
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow hover:shadow-md transition-shadow">
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">Model Deployment Strategies</h3>
                <p className="text-gray-600 mb-4">
                  From local testing to production deployment - best practices for ML model lifecycle management.
                </p>
                <Link href="/blog/model-deployment-strategies" className="text-blue-600 hover:text-blue-800 font-medium">
                  Read more →
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Link href="/blog" className="text-blue-600 hover:text-blue-800 font-medium">
              Read All Blog Posts →
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Let's Work Together
          </h2>
          <p className="text-gray-600 mb-8">
            I'm available for freelance data science projects, consulting, and full-time opportunities.
          </p>
          <Link href="/contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}