import Link from 'next/link';
import Logo from '@/components/layout/Logo';

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <Logo className="h-8 w-8" />
              <span className="text-xl font-bold text-gray-900">DataSci Portfolio</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
              Home
            </Link>
            <Link href="/projects" className="text-gray-600 hover:text-gray-900 transition-colors">
              Projects
            </Link>
            <Link href="/blog" className="text-gray-600 hover:text-gray-900 transition-colors">
              Blog
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors">
              Contact
            </Link>
          </div>
          
          <div className="md:hidden">
            {/* Mobile menu button would go here */}
            <button className="p-2 rounded-md text-gray-400 hover:text-gray-500">
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" d="M3 6h18M3 12h18M3 18h18" strokeRule="evenodd" clipRule="evenodd" stroke-width="2" stroke="currentColor" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}