import dynamic from 'next/dynamic';
import Timeline from './components/timeline';

const DynamicAccordion = dynamic(() => import('./components/accordion'), { ssr: false });

export const metadata = {
  title: 'Joe Ward | Home',
  description: 'Read my thoughts on operational efficiency, business analytics, and more.',
};

export default function Page() {
  return (
    <section w-full>
      
      <h1 className="font-medium text-2xl tracking-tighter text-black dark:text-white flex flex-row">Hey <p className='hover:rotate-45 hover:duration-500 transition-all ease-out'>👋</p> I'm Joe Ward</h1>
      <div className='mt-3 mb-3 h-0.5 w-full  bg-gradient-to-r from-amber-200 to-white'> </div>

        <div className='flex my-8 md:my-8 flex-wrap place-content-center md:flex-nowrap '>
          <div className="flex-none w-32 h-32 ml-10 mr-10 rounded-full overflow-hidden border-black dark:border-white border-2">
            <img
              src='/prof.jpg'
              alt='prof'
              className="w-full h-full object-cover hover:rotate-180 hover:duration-500 transition-all ease-out"
            />
          </div>

          <div className='mt-8 md:m-auto w-full'>
            <ul className="flex flex-nowrap w-full space-x-2 mb-3">
            <div className='hover:shadow-md hover:scale-105 w-full h-10 text-center justify-center items-center flex flex-nowrap rounded border p-1 text-xs leading-4 border-neutral-700 text-neutral-100 no-underline bg-gradient-to-r from-neutral-800 via-black to-neutral-800'>
                <div className=''><img
                    src='/lightbulb.png'
                    alt='prof'
                    className="w-auto h-6 object-cover ml-2"
                /></div>
                <p className="w-full h-10 pl-4 inline-flex  items-center ">
                    Operational Excellence
                </p>
            </div>
            <div className='hover:shadow-md hover:scale-105 w-full h-10 text-center  justify-center items-center flex flex-nowrap rounded border p-1 text-xs leading-4 border-neutral-700 text-neutral-100 no-underline bg-gradient-to-r from-neutral-800 via-black to-neutral-800'>
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
                <p className="hover:shadow-md hover:scale-105 w-full justify-center mb-3 inline-flex items-center rounded border  p-1 text-xs leading-4 border-neutral-700  text-neutral-100 no-underline bg-gradient-to-r from-neutral-800 via-black to-neutral-800">
                  People & Project Manager
                </p>
                <p className="hover:shadow-md hover:scale-105 w-full justify-center inline-flex items-center rounded border  p-1 text-xs leading-4 border-neutral-700  text-neutral-100 no-underline bg-gradient-to-r from-neutral-800 via-black to-neutral-800">
                  Executive Partner
                </p>
            </ul>
          </div>
        </div>

        <div className='mb-5 md:mb-0 h-0.5 md:h-0 w-full  bg-gradient-to-r from-white to-amber-200'> </div>

      <div className='flex flex-nowrap h-auto'>
        <div className='mt-1 md:mr-3 md:w-2 dark:md:w-1 md:h-vh bg-gradient-to-b from-amber-200 to-neutral-100'> </div>
        <div className='flex flex-wrap'>
          <p className="pb-4 prose prose-invert w-full text-black dark:text-white">
            I'm a creative, detail-oriented, and technical business partner who's worked with teams from small non-profits to the Fortune 500 to cutting-edge tech companies to help them get the most from what they have, and chart the path ahead. 
          </p>
          <p className="md:pb-4 prose prose-invert w-full text-black dark:text-white h-0 overflow-hidden md:h-auto">
            Together we can establish ground-level ops (ex: identifying KPIs and leading indicators, process mapping, or defining other SOPs and handling enablement), or identify and tackle the more complex and tailored Operations improvements needed to hit ever-more challenging targets (ex: Lead Scoring & Attribution, Channel Optimization & ICP strategies, Churn/NRR/Expansion analyses, tool migrations, or other large projects).
          </p>
          <p className="pb-4 prose prose-invert w-full text-black dark:text-white">
            I can get my hands dirty in systems and with data, but also on more nuanced and qualitative issues that teams may face.
            I’m a shepherd for complex and cross-functional initiatives who can pro-actively identify solutions, own functions long-term, individually contribute on multiple levels, and lead teams of effective contributors.    
          </p>
          <p className="pb-4 prose prose-invert w-full text-black dark:text-white">
            Read more about my experiences below:
          </p>
        </div>
      </div>

      <div className="w-full mx-auto mt-4">
        <DynamicAccordion/>
      </div>

      <div className='text-red-800'>Other Project Carousel</div>

      <Timeline/>

    </section>
  );
}
