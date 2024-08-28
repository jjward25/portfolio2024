import CodingProjects from "./coding"; 
import GTMProjects from "./gtm";
export const metadata = {
  title: 'Projects',
  description: 'Personal Projects.',
};

export default function ProjectCarousel() {

  return (
    <section>
      <div className='mt-3 mb-3 h-0.5 w-full bg-gradient-to-r from-amber-200 to-white'/>
      <h1 className="font-medium text-2xl pt-3 mb-6 tracking-tighter text-black dark:text-white">
        Side Projects
      </h1>
      
      {/* Project Carousel */}
      <div className="flex flex-col gap-4">
        <CodingProjects/>
        <GTMProjects/>
      </div>

  
    </section>
  );
}
