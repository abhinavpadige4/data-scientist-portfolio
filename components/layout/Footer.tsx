export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-white font-semibold mb-4">About</h3>
            <p className="text-gray-400">
              Personal portfolio showcasing data science projects, blog posts, and professional experience.
            </p>
          </div>
          
          {/* Links Section */}
          <div>
            <h3 className="text-white font-semibold mb-4">Navigate</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="/projects" className="hover:text-white transition-colors">Projects</a></li>
              <li><a href="/blog" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="/about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Social/Skills Section */}
          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.545v6.291zM5.337 7.433c-1.144 0-2.063-.927-2.063-2.065s.919-2.065 2.063-2.065 2.064 .927 2.064 2.065-.92 2.065-2.064 2.065zM2.805 20.452H2.4v-8.75h0.405v8.75z"/>
                </svg>
              </a>
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm0 15.75c-3.866 0-7-3.134-7-7s3.134-7 7-7 7 3.134 7 7-3.134 7-7 7zm4.75-9h-1.75v1.75h-1.75V9h1.75v1.75h1.75v-1.75h1.75c1.11 0 2 .89 2 2s-.89 2-2 2zM12 6.75c-1.898 0-3.431 1.538-3.431 3.431s1.538 3.431 3.431 3.431 3.431-1.538 3.431-3.431S13.898 6.75 12 6.75z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8.247 20.304a7.5 7.5 0 01-4.464-.879v-.003A7.5 7.5 0 010 12.371a7.5 7.5 0 011.791-4.115c1.03-.594 2.043-.57 2.942.013a5.47 5.47 0 00-1.75-.542v-.06a2.237 2.237 0 01.59.938A5.447 5.447 0 001.107 5.052a5.447 5.447 0 015.064 3.417l-.648-.03a5.453 5.453 0 011.663-.547 5.453 5.453 0 005.037 3.63A5.447 5.447 0 0118.132 8.578a7.486 7.486 0 01-3.47 6.53A7.5 7.5 0 018.247 20.304z"/>
                </svg>
              </a>
            </div>
            <p className="mt-4 text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Data Scientist Portfolio. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}