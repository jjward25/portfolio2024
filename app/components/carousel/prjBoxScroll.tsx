"use client";
import React, { useState } from 'react';

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
  imageUrls: string[];
  skills: Skill[];
  link: string;
  tag?: string; // Keep for backward compatibility
  tags?: TagProps[]; // New prop for multiple tags
}

const PrjBoxScroll: React.FC<CardProps> = ({ title, description, imageUrls, skills, link, tag, tags }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? imageUrls.length - 1 : prevIndex - 1
    );
  };

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
      {/* Award Badges - positioned on the whole card */}
      {allTags.map((tagItem, index) => {
        const colors = getTagColors(tagItem.color);
        return (
          <div key={index} className="absolute top-2 right-2 z-20 hover:scale-150 transition-transform duration-300" style={{ top: `${8 + index * 36}px` }}>
            <div className="relative">            
              {/* Outer frilly circle */}
              <div className="relative w-8 h-8 rounded-full flex items-center justify-center shadow-lg"
                   style={{
                     backgroundColor: colors.primary,
                     background: `radial-gradient(circle, ${colors.primary} 60%, transparent 60%)`,
                     backgroundSize: '8px 8px',
                     backgroundPosition: '0 0, 4px 4px'
                   }}>
                {/* Frilly edge effect */}
                <div className="absolute inset-0 rounded-full"
                     style={{
                       background: `conic-gradient(
                         from 0deg,
                         ${colors.primary} 0deg 20deg,
                         ${colors.secondary} 20deg 40deg,
                         ${colors.primary} 40deg 60deg,
                         ${colors.secondary} 60deg 80deg,
                         ${colors.primary} 80deg 100deg,
                         ${colors.secondary} 100deg 120deg,
                         ${colors.primary} 120deg 140deg,
                         ${colors.secondary} 140deg 160deg,
                         ${colors.primary} 160deg 180deg,
                         ${colors.secondary} 180deg 200deg,
                         ${colors.primary} 200deg 220deg,
                         ${colors.secondary} 220deg 240deg,
                         ${colors.primary} 240deg 260deg,
                         ${colors.secondary} 260deg 280deg,
                         ${colors.primary} 280deg 300deg,
                         ${colors.secondary} 300deg 320deg,
                         ${colors.primary} 320deg 340deg,
                         ${colors.secondary} 340deg 360deg
                       )`,
                       clipPath: `polygon(
                         50% 0%, 57% 7%, 64% 0%, 71% 7%, 78% 0%, 85% 7%, 92% 0%, 99% 7%,
                         100% 14%, 93% 21%, 100% 28%, 93% 35%, 100% 42%, 93% 49%, 100% 56%,
                         93% 63%, 100% 70%, 93% 77%, 100% 84%, 93% 91%, 100% 98%, 85% 92%,
                         78% 99%, 71% 92%, 64% 99%, 57% 92%, 50% 99%, 43% 92%, 36% 99%,
                         29% 92%, 22% 99%, 15% 92%, 8% 99%, 1% 92%, 0% 84%, 7% 77%,
                         0% 70%, 7% 63%, 0% 56%, 7% 49%, 0% 42%, 7% 35%, 0% 28%,
                         7% 21%, 0% 14%, 7% 7%, 14% 0%, 21% 7%, 28% 0%, 35% 7%,
                         42% 0%, 43% 7%
                       )`
                     }}>
                </div>
                
                {/* Inner circle with text */}
                <div className="relative w-6 h-6 rounded-full flex items-center justify-center border z-10"
                     style={{
                       backgroundColor: colors.dark,
                       borderColor: colors.darker
                     }}>
                  <span className="text-white text-[6px] font-bold leading-none text-center px-1">{tagItem.text}</span>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Image Section */}
      <div className="relative w-full h-[200px] overflow-hidden">
        <img
          src={imageUrls[currentImageIndex]}
          alt={title}
          className="w-full h-full object-cover transition-opacity duration-500"
        />
        
        {/* Navigation Buttons */}
        {imageUrls.length > 1 && (
          <>
            {/** Left Scroll Button */}
            <button
              className="absolute left-1 top-1/2 transform -translate-y-1/2 bg-cyan-950 text-cyan-700 p-1 rounded-full hover:text-yellow-200 transition border border-cyan-700 z-10"
              onClick={handlePrevImage}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-chevron-left"
              >
                <polyline points="8 9 4 6 8 3" />
              </svg>
            </button>

            {/** Right Scroll Button */}
            <button
              className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-cyan-950 text-cyan-700 p-1 rounded-full hover:text-yellow-200 transition border border-cyan-700 z-10"
              onClick={handleNextImage}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-chevron-right"
              >
                <polyline points="5 9 8 6 5 3" />
              </svg>
            </button>
          </>
        )}
      </div>

      {/* Text Section - Adjusted to fit within rounded container */}
      <div className="relative p-4 h-[300px] md:h-[280px] bg-white dark:bg-gray-800 border-t border-gray-300 ">
        <a href={link} target="_blank" rel="noopener noreferrer" className="block h-full flex flex-col">
          <h2 className="text-lg font-bold text-black dark:text-white mb-2">{title}</h2>
          <p className="text-sm text-gray-700 dark:text-gray-300  flex-grow">{description}</p>
          
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

export default PrjBoxScroll;
