import React from 'react';

interface Skill {
  url: string;
  title: string;
}

interface TagProps {
  text: string;
  color: 'blue' | 'yellow';
}

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  skills: Skill[];
  link: string;
  tag?: string; // Keep for backward compatibility
  tags?: TagProps[]; // New prop for multiple tags
}

const PrjBox: React.FC<CardProps> = ({ title, description, imageUrl, skills, link, tag, tags }) => {
  // Combine single tag and multiple tags for rendering
  const allTags = tags || (tag ? [{ text: tag, color: 'blue' as const }] : []);

  const getTagColors = (color: 'blue' | 'yellow') => {
    if (color === 'yellow') {
      return {
        primary: '#eab308', // yellow-500
        secondary: '#f59e0b', // yellow-500 lighter
        dark: '#ca8a04', // yellow-600
        darker: '#a16207' // yellow-700
      };
    }
    return {
      primary: '#2563eb', // blue-600
      secondary: '#3b82f6', // blue-500
      dark: '#1d4ed8', // blue-700
      darker: '#1e40af' // blue-800
    };
  };

  return (
    <div className="relative w-full min-w-[310px] min-h-[450px] md:min-w-[350px] md:min-h-[450px] h-full overflow-hidden rounded-lg shadow-lg border border-cyan-700 bg-white dark:bg-gray-800">
      {/* Image Section */}
      <div className="relative w-full h-[200px] overflow-hidden">
        <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
      </div>

      {/* Text Section - Adjusted to fit within rounded container */}
      <div className="relative p-4 h-[300px] md:h-[280px] bg-white dark:bg-gray-800 border-t border-gray-300">
        <a href={link} target="_blank" rel="noopener noreferrer" className="block h-full flex flex-col">
          <h2 className="text-lg font-bold text-black dark:text-white mb-2">{title}</h2>
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-3 flex-grow">{description}</p>
          
          {/* Skills Section - Properly positioned within bounds */}
          <div className='flex flex-row justify-center gap-3 bg-gray-100 dark:bg-gray-700 py-3 px-3 rounded-lg hover:bg-cyan-100 dark:hover:bg-cyan-900 transition mb-2'>
            {skills.map((skill, index) => (
              <div key={index} className="flex flex-col items-center">
                <img
                  src={skill.url}
                  alt={skill.title}
                  className="w-10 h-10 object-cover hover:scale-110 cursor-pointer transition-transform"
                  title={skill.title}
                />
              </div>
            ))}
          </div>
        </a>
      </div>
    </div>
  );
};

export default PrjBox;
