"use client";
import React, { useState } from 'react';

interface Skill {
  url: string;
  title: string;
}

interface CardProps {
  title: string;
  description: string;
  imageUrls: string[];
  skills: Skill[]; // Updated prop to include both URL and title
  link: string;
}

const TestBoxScroll: React.FC<CardProps> = ({ title, description, imageUrls, skills, link }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? imageUrls.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full min-h-[250px] min-w-[350px] h-full overflow-hidden rounded-lg shadow-lg">
      <img
        src={imageUrls[currentImageIndex]}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
      />
      <a href={link} target='_blank'>
      <div className="relative w-[350px] h-[250px] z-10 p-6 pt-0 bg-gradient-to-b from-transparent to-black bg-opacity-70 text-white">
        <div className='h-1/2'/>
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="mt-2 text-sm">{description}</p>
        <div className='mt-4 flex flex-row justify-evenly hover:bg-yellow-800 hover:rounded-xl hover:bg-opacity-70'>
          {skills.map((skill, index) => (
            <img
              key={index}
              src={skill.url}
              alt={skill.title}
              className="w-6 h-6 object-cover hover:scale-105 cursor-pointer"
              title={skill.title}
            />
          ))}
        </div>
      </div>
      </a>

      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrevImage}
        className="z-50 absolute left-0 top-1/2 transform -translate-y-1/2 bg-opacity-50 hover:bg-opacity-75 text-neutral-400 p-2 rounded-r-md focus:outline-none"
      >
        &#8592;
      </button>
      <button
        onClick={handleNextImage}
        className="z-50 absolute right-0 top-1/2 transform -translate-y-1/2 bg-opacity-50 hover:bg-opacity-75 text-neutral-400 p-2 rounded-l-md focus:outline-none"
      >
        &#8594;
      </button>
    </div>
  );
};

export default TestBoxScroll;
