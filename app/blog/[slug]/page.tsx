import Link from 'next/link';
import { notFound } from 'next/navigation';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';

export default function BlogPost({ params }: { params: { slug: string } }) {
  const blogDirectory = path.join(process.cwd(), 'data', 'blog');
  const filePath = path.join(blogDirectory, `${params.slug}.mdx`);
  
  // Check if file exists
  if (!fs.existsSync(filePath)) {
    notFound();
  }
  
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);
  
  // Serialize MDX content
  const mdxSource = serialize(content, {
    // Add any MDX options here if needed
  });

  return (
    <div className="py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back to Blog Link */}
        <div className="mb-8">
          <Link href="/blog" className="text-blue-600 hover:text-blue-800 flex items-center">
            ← Back to Blog
          </Link>
        </div>
        
        {/* Post Header */}
        <article className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{data.title}</h1>
          <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-6">
            <time dateTime={data.date}>
              {new Date(data.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            <span className="mx-2">•</span>
            <span>{data.readingTime || '5 min read'}</span>
            {data.tags && data.tags.length > 0 && (
              <>
                <span className="mx-2">•</span>
                <div className="flex flex-wrap gap-2">
                  {data.tags.map((tag) => (
                    <span key={tag} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </>
            )}
          </div>
        </article>
        
        {/* Post Content */}
        <section className="prose prose-lg max-w-none">
          <MDXRemote source={mdxSource} />
        </section>
        
        {/* Related Posts placeholder */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Related Posts</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {/* In a real implementation, this would show related posts based on tags */}
            <div className="bg-white rounded-lg shadow hover:shadow-md transition-shadow p-4">
              <h3 className="font-semibold mb-2">Understanding Neural Networks</h3>
              <p className="text-gray-600 text-sm">A comprehensive guide to neural network architectures</p>
              <Link href="/blog/understanding-neural-networks" className="text-blue-600 hover:text-blue-800 font-medium">
                Read more →
              </Link>
            </div>
            <div className="bg-white rounded-lg shadow hover:shadow-md transition-shadow p-4">
              <h3 className="font-semibold mb-2">Feature Engineering Best Practices</h3>
              <p className="text-gray-600 text-sm">Learn how to extract meaningful features from raw data</p>
              <Link href="/blog/feature-engineering-best-practices" className="text-blue-600 hover:text-blue-800 font-medium">
                Read more →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}