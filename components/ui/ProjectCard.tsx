import Link from 'next/link';

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    description: string;
    tags: string[];
    techStack: string[];
    results: string[];
    githubLink: string;
  };
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link 
      href={`/projects/${project.id}`} 
      className="group block bg-white rounded-lg shadow hover:shadow-md transition-shadow"
    >
      <div className="p-6">
        {/* Project Image Placeholder */}
        <div className="h-36 w-full bg-gradient-to-br from-blue-50 to-gray-50 rounded-lg mb-4 flex items-center justify-center">
          <svg className="h-8 w-8 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
            <path fillRule="evenodd" d="M4.47 9.35a1 1 0 00-1.42 1.42l1.59 1.59a1 1 0 001.41 0l3.76-3.76a1 1 0 00-1.41-1.42l-3.76 3.76zm10.72 0a1 1 0 001.42-1.42l-1.59-1.59a1 1 0 00-1.41 0l-3.76 3.76a1 1 0 001.41 1.42l3.76-3.76zm-6.34 5.66a1 1 0 00-1.42 1.42l1.06 1.06a1 1 0 001.42 0l1.06-1.06a1 1 0 00-1.42-1.42l-1.06-1.06zm12.68 0a1 1 0 001.42-1.42l-1.06-1.06a1 1 0 00-1.42 0l-1.06 1.06a1 1 0 001.42 1.42l1.06 1.06zM11.75 6.5a1 1 0 011.42 0l1.06 1.06a1 1 0 01-1.42 1.42l-1.06-1.06zm6.34 5.66a1 1 0 01-1.42 1.42l-1.06-1.06a1 1 0 01-1.42-1.42l1.06-1.06zM6.5 11.75a1 1 0 010-1.42l1.06-1.06a1 1 0 011.42 0l1.06 1.06a1 1 0 010 1.42l-1.06 1.06a1 1 0 01-1.42 0z" clipRule="evenodd" />
          </svg>
          <span className="ml-2 text-gray-500">Project Preview</span>
        </div>
        
        {/* Project Info */}
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{project.title}</h3>
        <p className="text-gray-600 line-clamp-2 mb-4">{project.description}</p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span key={tag} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
              {tag}
            </span>
          ))}
        </div>
        
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4 text-sm">
          {project.techStack.slice(0, 3).map((tech) => (
            <span key={tech} className="bg-gray-100 text-gray-800 px-2 py-1 rounded">
              {tech}
            </span>
          ))}
          {project.techStack.length > 3 && (
            <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded">
              +{project.techStack.length - 3} more
            </span>
          )}
        </div>
        
        {/* View Button */}
        <div className="mt-4 pt-4 border-t border-gray-200">
          <span className="text-blue-600 hover:text-blue-800 font-medium">
            View Project Details →
          </span>
        </div>
      </div>
    </Link>
  );
}