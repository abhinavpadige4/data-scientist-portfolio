import Link from 'next/link';
import { notFound } from 'next/navigation';
import projectsData from '@/data/projects.json';

export default function ProjectDetail({ params }: { params: { id: string } }) {
  const project = projectsData.find(p => p.id === parseInt(params.id));
  
  if (!project) {
    notFound();
  }

  return (
    <div className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back to Projects Link */}
        <div className="mb-8">
          <Link href="/projects" className="text-blue-600 hover:text-blue-800 flex items-center">
            ← Back to Projects
          </Link>
        </div>
        
        {/* Project Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">{project.title}</h1>
          <div className="flex flex-wrap gap-3 mt-4">
            {project.tags.map((tag) => (
              <span key={tag} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                {tag}
              </span>
            ))}
          </div>
        </div>
        
        {/* Project Content */}
        <div className="space-y-8">
          {/* Project Image */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img 
              src={`/images/projects/${project.id}.jpg`} 
              alt={project.title} 
              className="w-full h-48 object-cover"
            />
          </div>
          
          {/* Project Description */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Project Overview</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              {project.description}
            </p>
          </section>
          
          {/* Tech Stack */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Technologies Used</h2>
            <div className="flex flex-wrap gap-3">
              {project.techStack.map((tech) => (
                <span key={tech} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </section>
          
          {/* Results/Impact */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Results & Impact</h2>
            <div className="space-y-4">
              {project.results.map((result, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="h-5 w-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 100 2h3a1 1 0 100-2h-3zm1 4a1 1 0 100 2h1a1 1 0 100-2h-1zm-5 6a1 1 0 100 2h3a1 1 0 100-2h-3zm2-6a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-700">{result}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
          
          {/* GitHub Link */}
          <div className="mt-8 text-center">
            <a 
              href={project.githubLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-gray-800 hover:bg-gray-900 text-white font-medium py-2 px-6 rounded-lg transition-colors"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}