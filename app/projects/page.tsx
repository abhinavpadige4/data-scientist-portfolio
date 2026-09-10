import Link from 'next/link';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { FilterButtons } from '@/components/ui/FilterButtons';
import projectsData from '@/data/projects.json';

export default function Projects() {
  // Get unique tags from all projects
  const allTags = [...new Set(projectsData.flatMap(project => project.tags))];

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">My Projects</h1>
        
        {/* Filter Controls */}
        <FilterButtons 
          tags={allTags} 
          onFilterChange={(selectedTag) => {
            // In a real implementation, this would filter the projects
            console.log('Filtering by:', selectedTag);
          }}
        />
        
        {/* Projects Grid */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        {/* Pagination placeholder */}
        <div className="mt-8 flex justify-center">
          <p className="text-gray-500">Showing {projectsData.length} projects</p>
        </div>
      </div>
    </div>
  );
}