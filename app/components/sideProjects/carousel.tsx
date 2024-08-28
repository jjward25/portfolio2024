
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
      <div className="flex flex-row gap-4">

        {/** Category */}
        <div className="flex flex-col bg-slate-100 p-2 rounded-xl max-w-[300px]">
            <p className="font-semibold text-md mb-2">Coding</p>
            {/** Project */}
            <div className="text-sm border border-neutral-300 rounded-md p-3 mb-2 hover:scale-105 shadow-xl"> Personal Webapp
                <p className="mt-1"><em>A basic NextJS app using MongoDB and D3 charts to track tasks and daily routines.</em></p>
                <p className="my-2 bg-cyan-950 rounded-xl text-white px-2">NextJS, MongoDB, D3, APIs</p>
                <iframe width="260" height="145" src="https://www.youtube-nocookie.com/embed/guVl-h9NWZE?si=-uZrTaxUqFIzUCB9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </div>

        {/** Category */}
        <div className="flex flex-col bg-slate-100 p-2 rounded-xl">
            <p className="font-semibold text-md mb-2">GTM Strategy</p>
            {/** Project */}
            <div className="text-sm border border-neutral-300 rounded-md p-3 mb-2 hover:scale-105 shadow-xl"> Project Name
                <li className="mt-1">Description</li>
                <li className="">Related Skills</li>
                <div className="">img</div>
            </div>
        </div>

      </div>

  
    </section>
  );
}
