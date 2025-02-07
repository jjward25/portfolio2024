import React from 'react';

interface Skill {
  url: string;
  title: string;
}

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  skills: Skill[];
  link:string;
}

const PrjBox: React.FC<CardProps> = ({ title, description, imageUrl, skills, link }) => {
  return (
    <div className="relative w-full min-w-[310px] min-h-[300px] md:min-w-[350px] md:min-h-[250px] h-full overflow-hidden rounded-lg shadow-lg border border-cyan-700">
      <img src={imageUrl} alt={title} className="absolute inset-0 w-full h-full object-cover" />

      <a href={link} target='_blank'>
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
    </div>
  );
};

export default PrjBox;
