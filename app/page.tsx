import TimelineDesktop from './components/timeline/timelineDesktop';
import TimelineMobile from './components/timeline/timelineMobile';
import ProjectCarousel from './components/carousel/carousel';
import DynamicAccordion from './components/accordions/accordion';
import Link from 'next/link';

export const metadata = {
  title: 'Joe Ward | Home',
  description: 'Read my thoughts on operational efficiency, business analytics, and more.',
};


export default function Page() {
  return (
    <section className=''>
      
      <h1 className="font-medium text-2xl tracking-tighter text-black dark:text-white flex flex-row">Hey <p className='hover:rotate-45 hover:duration-500 transition-all ease-out mx-1'>👋</p> I'm Joe Ward</h1>
      <div className='mt-3 mb-3 h-0.5 w-full  bg-gradient-to-r from-amber-200 to-white'/>

        <div className='flex my-8 md:my-8 flex-wrap place-content-center md:flex-nowrap '>
          <div className="flex-none w-32 h-32 ml-10 mr-10 rounded-full overflow-hidden border-black dark:border-white border-2">
            <img
              src='/prof.jpg'
              alt='prof'
              className="w-full h-full object-cover hover:scale-105 hover:duration-500 transition-all ease-out"
            />
          </div>

          <div className='mt-8 md:m-auto w-full'>
            <ul className="flex flex-nowrap w-full space-x-2 mb-3">

            <div className='cursor-pointer hover:shadow-md hover:scale-105 w-full h-10 bg-cyan-950 text-center justify-center items-center flex flex-nowrap rounded border text-xs leading-4 border-neutral-700 no-underline bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.2)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%,100%_100%] bg-[position:-100%_0,0_0] bg-no-repeat shadow-xl transition-[background-position_0s_ease] hover:bg-[position:200%_0,0_0] hover:duration-[2000ms]'>
                <div className=''><img
                    src='/lightbulbCyan.png'
                    alt='prof'
                    className="w-auto h-6 object-cover ml-2"
                /></div>
                <p className="w-full h-10 pl-2 md:pl-6 inline-flex  items-center ">
                    Operational Excellence
                </p>
            </div>
            <div className='cursor-pointer hover:shadow-md hover:scale-105 w-full h-10 bg-cyan-950 text-center justify-center items-center flex flex-nowrap rounded border text-xs leading-4 border-neutral-700 no-underline bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.2)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%,100%_100%] bg-[position:-100%_0,0_0] bg-no-repeat shadow-xl transition-[background-position_0s_ease] hover:bg-[position:200%_0,0_0] hover:duration-[2000ms]'>
                <div className=''><img
                  src='/growthCyan.png'
                  alt='prof'
                  className="w-auto h-5 object-cover ml-2"
                /></div>
                <p className="w-full h-10 pl-2 md:pl-6 inline-flex  items-center ">
                  Bus. Intelligence & Growth
                </p>
              </div>
            </ul>

            <ul className='w-full'>
                <p className="cursor-pointer hover:shadow-md bg-cyan-950 hover:scale-105 w-full justify-center mb-3 inline-flex items-center rounded border  p-1 text-xs leading-4 border-neutral-700 no-underline bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.2)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%,100%_100%] bg-[position:-100%_0,0_0] bg-no-repeat shadow-xl transition-[background-position_0s_ease] hover:bg-[position:200%_0,0_0] hover:duration-[2000ms]">
                  People & Project Manager
                </p>
                <p className="cursor-pointer hover:shadow-md bg-cyan-950 hover:scale-105 w-full justify-center inline-flex items-center rounded border  p-1 text-xs leading-4 border-neutral-700 no-underline bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.2)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%,100%_100%] bg-[position:-100%_0,0_0] bg-no-repeat shadow-xl transition-[background-position_0s_ease] hover:bg-[position:200%_0,0_0] hover:duration-[2000ms]">
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
            {`I'm a creative, detail-oriented, and technical business partner who's worked with teams from small non-profits, to the Fortune 500, to cutting-edge tech companies - helping them implement sustainable ops and get the most from what they have.`} 
          </p>
          <p className="md:pb-4 prose prose-invert w-full text-black dark:text-white overflow-hidden h-auto">
            {`Together, we can establish ground-level ops `}
            <em className='text-neutral-600'>{`(ex: process mapping; identifying KPIs and leading indicators (and building useful views); defining and enabling SOPs)`}</em>
            {`, or identify and tackle the more complex and tailored Operations improvements needed to hit ever-more challenging targets `}
            <em className='text-neutral-600'>(ex: Deep-Dives and Forecasting; Tool or Process Evaluation + Migration; or other large projects)</em>{`.`}
          </p>
        
          <p className="pb-4 prose prose-invert w-full text-black dark:text-white">
            Read more about my experiences below:
          </p>
        </div>
      </div>

      {/* Timeline */}
      <div className='hidden md:block md:w-full md:max-w-full'>
        <TimelineDesktop/>
      </div>
      <div className='block md:hidden'>
        <TimelineMobile/>
      </div>

      {/* Links & Samples */}
      <div className='flex flex-col'>
        <div className='mt-3 mb-1 h-0.5 w-full bg-gradient-to-r from-amber-200 via-neutral-200 to-cyan-950'/>
        <h1 className="font-medium text-xl mt-3 mb-1 tracking-tighter text-black dark:text-white">
          Links & Samples
        </h1>

        {/* Badges */}
        <div className='flex flex-col'>
          {/* Carousel */}
          <ProjectCarousel />
        </div>

        {/* Business Articles Accordion */}
        <div className='mt-1 mb-3 h-0.5 w-full  bg-gradient-to-l from-amber-200 via-neutral-200 to-cyan-950'/>
        <DynamicAccordion title="Other Content" isOpenByDefault={false}>
          <li><Link target="_blank" href="https://medium.com/cultural-commentary/strategic-resiliency-in-large-corporations-6003c35f98f6" className="cursor-pointer hover:text-yellow-600 text-sm md:text-md">Strategic Resiliency in Large Corporations</Link></li>
          <li><Link target="_blank" href="https://medium.com/cultural-commentary/continuous-improvement-via-operational-awareness-dc0278ff9923" className="cursor-pointer hover:text-yellow-600 text-sm md:text-md">Continuous Improvement via Operational Awareness</Link></li>
          <li><Link target="_blank" href="https://medium.com/cultural-commentary/the-biggest-question-in-crypto-whats-the-right-multiplier-932254d1f39c" className="cursor-pointer hover:text-yellow-600 text-sm md:text-md">Crypto: What's it worth?</Link></li>
          <li><Link target="_blank" href="https://medium.com/cultural-commentary/the-important-differences-between-idos-and-ipos-680f1f85900a" className="cursor-pointer hover:text-yellow-600 text-sm md:text-md">The Important Difference Between IDOs and IPOs</Link></li>
          <li><Link target="_blank" href="https://medium.com/cultural-commentary/the-impact-of-impact-investing-86feafb14266" className="cursor-pointer hover:text-yellow-600 text-sm md:text-md">The Impact of Impact Investing</Link></li>
        </DynamicAccordion>
        </div>

    </section>
  );
}
