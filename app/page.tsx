import dynamic from 'next/dynamic';
const DynamicAccordion = dynamic(() => import('./components/accordion'), { ssr: false });

export const metadata = {
  title: 'Joe Ward | Home',
  description: 'Read my thoughts on operational efficiency, business analytics, and more.',
};

export default function Page() {
  return (
    <section w-full>
      
      <h1 className="font-medium text-2xl tracking-tighter">Hey 👋 I'm Joe Ward</h1>
      <div className='mt-3 mb-3 h-0.5 w-full  bg-gradient-to-r from-amber-200 to-black'> </div>

        <div className='flex my-8 md:my-14 flex-wrap place-content-center md:flex-nowrap '>
          <div className="flex-none w-32 h-32 ml-10 mr-10 rounded-full overflow-hidden">
            <img
              src='/prof.jpg'
              alt='prof'
              className="w-full h-full object-cover"
            />
          </div>

          <div className='mt-8 md:m-auto w-full'>
            <ul className="flex flex-nowrap w-full space-x-2 mb-3">
              <div className='w-full h-10 text-center justify-center items-center flex flex-nowrap rounded border p-1 text-xs leading-4 border-neutral-700 bg-neutral-800 text-neutral-100 no-underline hover:bg-gradient-to-r from-neutral-600 via-black to-neutral-600'>
                <div className=''><img
                    src='/lightbulb.png'
                    alt='prof'
                    className="w-auto h-6 object-cover ml-2"
                /></div>
                <p className="w-full h-10 pl-4 inline-flex  items-center ">
                    Operational Efficiency
                </p>
              </div>
              <div className='w-full h-10 text-center  justify-center items-center flex flex-nowrap rounded border p-1 text-xs leading-4 border-neutral-700 bg-neutral-800 text-neutral-100 no-underline hover:bg-gradient-to-r from-neutral-600 via-black to-neutral-600'>
                <div className=''><img
                  src='/growth.png'
                  alt='prof'
                  className="w-auto h-5 object-cover ml-2"
                /></div>
                <p className="w-full h-10 pl-4 inline-flex  items-center ">
                  Bus. Intelligence & Growth
                </p>
              </div>
            </ul>

            <ul className='w-full'>
                <p className="w-full justify-center mb-3 inline-flex items-center rounded border  p-1 text-xs leading-4 border-neutral-700 bg-neutral-800 text-neutral-100 no-underline hover:bg-gradient-to-r from-neutral-600 to-black">
                  People & Project Manager
                </p>
                <p className="w-full justify-center  mb-3 inline-flex items-center rounded border  p-1 text-xs leading-4 border-neutral-700 bg-neutral-800 text-neutral-100 no-underline hover:bg-gradient-to-r from-neutral-600 to-black">
                  Executive Partner
                </p>
            </ul>
          </div>
        </div>

        <div className='mb-5 md:mb-0 h-0.5 md:h-0 w-full  bg-gradient-to-r from-black to-amber-200'> </div>

      <div className='flex flex-nowrap h-auto'>
        <div className='mt-1 md:mr-3 md:w-1 md:h-vh bg-gradient-to-b from-amber-200 to-neutral-950'> </div>
        <div className='flex flex-wrap'>
          <p className="prose prose-invert w-full">
            I'm an Operations specialist experienced in process improvement, change management, analytics and business intelligence/growth strategy. I'm creative, hands-on, collaborative, and a results-oriented project manager. 
          </p>
          <div className='mx-auto my-2 h-0.5 w-5 bg-gradient-to-b from-neutral-400 via-neutral-950 to-neutral-400'></div>
          <p className="prose prose-invert w-full">
            Can shepherd complex projects that implement and enable measurable efficiencies across multiple teams. 
          </p>
          <div className='mx-auto my-2 h-0.5 w-5 bg-gradient-to-b from-neutral-400 via-neutral-950 to-neutral-400'></div>
          <p className="prose prose-invert w-full">
            Use analytics when needed, like to assess pricing, set sales targets, monitor ad returns or other performance results, etc. And be creative in using data to find opportunities for growth.  Also sit with teams to help enable the changes that will really make them most effective.  
          </p>
        </div>
      </div>

      <div className="w-full mx-auto mt-8">
        <DynamicAccordion/>
      </div>



    </section>
  );
}
