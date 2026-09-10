import Link from 'next/link';
import { SkillBadge } from '@/components/ui/SkillBadge';

export default function About() {
  return (
    <div className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">About Me</h1>
        
        <div className="grid gap-8 md:grid-cols-2">
          {/* Bio Section */}
          <div>
            <p className="text-gray-700 leading-relaxed mb-6">
              I'm a passionate data scientist with expertise in machine learning, statistical analysis, and data visualization. I enjoy solving complex problems and turning data into actionable insights that drive business decisions.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              With a strong foundation in mathematics and computer science, I specialize in building predictive models, conducting A/B tests, and creating data-driven strategies that optimize performance across various industries.
            </p>
            
            <div className="mt-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Skills & Expertise</h2>
              <div className="flex flex-wrap gap-3">
                <SkillBadge label="Python" />
                <SkillBadge label="R" />
                <SkillBadge label="Machine Learning" />
                <SkillBadge label="Deep Learning" />
                <SkillBadge label="Statistical Analysis" />
                <SkillBadge label="Data Visualization" />
                <SkillBadge label="SQL" />
                <SkillBadge label="NoSQL" />
                <SkillBadge label="AWS" />
                <SkillBadge label="Docker" />
                <SkillBadge label="Git" />
                <SkillBadge label="Tableau" />
                <SkillBadge label="Power BI" />
                <SkillBadge label="Excel" />
                <SkillBadge label="TensorFlow" />
                <SkillBadge label="PyTorch" />
                <SkillBadge label="Scikit-learn" />
                <SkillBadge label="Pandas" />
                <SkillBadge label="NumPy" />
                <SkillBadge label="Matplotlib" />
                <SkillBadge label="Seaborn" />
              </div>
            </div>
          </div>
          
          {/* Profile Image & Resume */}
          <div className="flex flex-col items-center">
            <div className="w-48 h-48 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-6">
              <svg className="h-24 w-24 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" fill="currentColor"/>
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Your Name</h2>
            <p className="text-gray-600 mb-4">Data Scientist & ML Engineer</p>
            
            <div className="flex space-x-4">
              <Link 
                href="https://linkedin.com/in/yourprofile" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
              >
                <svg className="h-4 w-4 text-gray-600 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.545v6.291zM5.337 7.433c-1.144 0-2.063-.927-2.063-2.065s.919-2.065 2.063-2.065 2.064 .927 2.064 2.065-.92 2.065-2.064 2.065zM2.805 20.452H2.4v-8.75h0.405v8.75z"/>
                </svg>
                LinkedIn
              </Link>
              <Link 
                href="https://github.com/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
              >
                <svg className="h-4 w-4 text-gray-600 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm0 15.75c-3.866 0-7-3.134-7-7s3.134-7 7-7 7 3.134 7 7-3.134 7-7 7zm4.75-9h-1.75v1.75h-1.75V9h1.75v1.75h1.75v-1.75h1.75c1.11 0 2 .89 2 2s-.89 2-2 2zM12 6.75c-1.898 0-3.431 1.538-3.431 3.431s1.538 3.431 3.431 3.431 3.431-1.538 3.431-3.431S13.898 6.75 12 6.75z" clipRule="evenodd" />
                </svg>
                GitHub
              </Link>
            </div>
            
            <div className="mt-6">
              <Link 
                href="/resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
              >
                Download Resume
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}