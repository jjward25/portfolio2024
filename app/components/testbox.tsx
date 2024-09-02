import React from 'react';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  skills: Skill[];
  link:string;
}

const TestBox: React.FC<CardProps> = ({ title, description, imageUrl, skills, link }) => {
  return (
    <div className="relative w-full min-h-[250px] min-w-[350px] overflow-hidden rounded-lg shadow-lg">
      <img src={imageUrl} alt={title} className="absolute inset-0 w-full h-full object-cover" />

      <a href={link} target='_blank'><div className="relative z-10 p-6 pt-0 w-full h-full bg-gradient-to-b from-transparent to-black bg-opacity-70 text-white">
        <div className='h-1/2'/>
        <h2 className="z-20 text-xl font-bold">{title}</h2>
        <p className="z-20 mt-2 text-sm">{description}</p>
        <div className='z-20 mt-4 flex flex-row justify-evenly hover:bg-yellow-800 hover:rounded-xl hover:bg-opacity-70'>
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
    </div>
  );
};

export default TestBox;
