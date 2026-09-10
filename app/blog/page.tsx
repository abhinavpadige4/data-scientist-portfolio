import Link from 'next/link';
import { BlogPostCard } from '@/components/ui/BlogPostCard';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export default function Blog() {
  // Get all MDX files from the blog directory
  const blogDirectory = path.join(process.cwd(), 'data', 'blog');
  const fileNames = fs.readdirSync(blogDirectory);
  
  const posts = fileNames
    .filter(fileName => fileName.endsWith('.mdx'))
    .map(fileName => {
      const slug = fileName.replace(/\.mdx$/, '');
      const fileContents = fs.readFileSync(
        path.join(blogDirectory, fileName),
        'utf8'
      );
      const { data } = matter(fileContents);
      
      return {
        slug,
        title: data.title,
        date: data.date,
        excerpt: data.excerpt,
        tags: data.tags || [],
        readingTime: data.readingTime || '5 min read',
      };
    })
    // Sort by date descending
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Blog</h1>
        
        {/* Blog Posts Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.length > 0 ? (
            posts.map((post) => (
              <BlogPostCard key={post.slug} post={post} />
            ))
          ) : (
            // Placeholder when no blog posts exist
            <div className="col-span-3 text-center py-12">
              <p className="text-gray-500">No blog posts found. Add MDX files to the data/blog directory to get started.</p>
            </div>
          )}
        </div>
        
        {/* Pagination placeholder */}
        <div className="mt-8 flex justify-center">
          <p className="text-gray-500">Showing {posts.length} blog posts</p>
        </div>
      </div>
    </div>
  );
}