import Link from 'next/link';

interface BlogPostCardProps {
  post: {
    slug: string;
    title: string;
    date: string;
    excerpt: string;
    tags: string[];
    readingTime: string;
  };
}

export function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <Link 
      href={`/blog/${post.slug}`} 
      className="group block bg-white rounded-lg shadow hover:shadow-md transition-shadow"
    >
      <div className="p-6">
        {/* Post Image Placeholder */}
        <div className="h-36 w-full bg-gradient-to-br from-blue-50 to-gray-50 rounded-lg mb-4 flex items-center justify-center">
          <svg className="h-8 w-8 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
            <path d="M9.049 2.027c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.175-.43l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.175-.43l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.175-.43l1.519-4.674a1 1 0 00.95-.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888zM12 15.75a3.75 3.75 0 110-7.5 3.75 3.75 0 010 7.5z" fillRule="evenodd" clipRule="evenodd" />
          </svg>
          <span className="ml-2 text-gray-500">Blog Post</span>
        </div>
        
        {/* Post Info */}
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{post.title}</h3>
        <p className="text-gray-600 line-clamp-2 mb-4">{post.excerpt}</p>
        
        {/* Meta Info */}
        <div className="flex flex-wrap gap-3 text-sm text-gray-500 mb-4">
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            })}
          </time>
          <span className="mx-2">•</span>
          <span>{post.readingTime}</span>
        </div>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span key={tag} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
              {tag}
            </span>
          ))}
        </div>
        
        {/* Read More Button */}
        <div className="mt-4 pt-4 border-t border-gray-200">
          <span className="text-blue-600 hover:text-blue-800 font-medium">
            Read Post →
          </span>
        </div>
      </div>
    </Link>
  );
}