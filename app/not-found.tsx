import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 text-center">
      <div className="mb-8">
        <svg className="h-12 w-12 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 100 2h3a1 1 0 100-2h-3zm1 4a1 1 0 100 2h1a1 1 0 100-2h-1zm-5 6a1 1 0 100 2h3a1 1 0 100-2h-3zm2-6a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
        </svg>
      </div>
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Page Not Found</h1>
      <p className="text-gray-600 mb-8">
        Sorry, we couldn't find the page you're looking for.
      </p>
      <Link href="/" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors">
        Return to Homepage
      </Link>
    </div>
  );
}