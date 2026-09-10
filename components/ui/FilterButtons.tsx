import { useState } from 'react';

interface FilterButtonsProps {
  tags: string[];
  onFilterChange: (selectedTag: string | null) => void;
}

export function FilterButtons({ tags, onFilterChange }: FilterButtonsProps) {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const handleTagClick = (tag: string | null) => {
    setSelectedTag(tag);
    onFilterChange(tag);
  };

  return (
    <div className="mb-8">
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => handleTagClick(null)}
          className={`px-4 py-2 border rounded-md text-sm font-medium ${
            selectedTag === null 
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          All Projects
        </button>
        
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => handleTagClick(tag)}
            className={`px-4 py-2 border rounded-md text-sm font-medium ${
              selectedTag === tag 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
}