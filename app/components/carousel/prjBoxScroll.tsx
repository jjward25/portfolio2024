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

const PrjBoxScroll: React.FC<CardProps> = ({ title, description, imageUrls, skills, link }) => {
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
    <div className="relative w-full min-w-[310px] min-h-[300px] md:min-w-[350px] md:min-h-[250px] h-full overflow-hidden rounded-lg shadow-lg border border-cyan-700">
      <img
        src={imageUrls[currentImageIndex]}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
      />
      <a href={link} target="_blank">
      <div className="relative w-[310px] h-[300px] md:w-[350px] md:h-[250px] z-10 px-10 pt-0 bg-gradient-to-b from-transparent to-black bg-opacity-70 text-white">
        <div className='h-1/4'/>
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="mt-2 text-sm">{description}</p>
        <div className='mt-4 flex flex-row justify-evenly hover:bg-cyan-800 py-1 hover:rounded-xl hover:bg-opacity-70'>
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
      
      {/** Left Scroll Button */}
      <button
          className="z-40 ml-1 absolute left-0 top-1/2 transform -translate-y-1/2 bg-cyan-950 text-cyan-700 p-1 rounded-full hover:text-yellow-200 transition border border-cyan-700"
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
          className="z-40 mr-1 absolute right-0 top-1/2 transform -translate-y-1/2 bg-cyan-950 text-cyan-700 p-1 rounded-full hover:text-yellow-200 transition border border-cyan-700"
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
    </div>
  );
};

export default PrjBoxScroll;
