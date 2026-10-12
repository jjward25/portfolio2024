import CareerTimeline from './components/timeline/CareerTimeline';
import GTMMachine from './components/GTMMachine';

import ContactButton from './components/ContactButton';
import ExpertiseSelector from './components/ExpertiseSelector';
import RevOps from './components/revOps/revOps';
import OtherLinks from './components/otherLinks/other';
import Vibe from './components/vibecoding/vibe';
import SampleCarousel from './components/sampleCarousel/sampleCar';

export const metadata = {
  title: 'Joe Ward | Home',
  description: 'Read my thoughts on operational efficiency, business analytics, and more.',
};

export default function Page() {
  return (
    <section className=''>
      
      <header className="portfolio-header home-hero">
        <div className="home-hero-top">
          <h1 className="home-greeting" style={{ color: 'var(--home-heading-color, #171717)' }}>Hey <span className="hello-wave" role="img" aria-label="waving hand">👋</span> I’m Joe Ward</h1>
          <ContactButton />
        </div>
        <div className="home-header-divider" />
        <div className="home-header-body">
          <div className="portrait-wrap home-portrait">
            <img src="/prof.jpg" alt="Joe Ward" className="portrait" />
          </div>
          <ExpertiseSelector />
        </div>
      </header>
      <GTMMachine />
      <div className='flex flex-nowrap h-auto mb-16' style={{ marginTop: 24 }}>
        <div className='mt-1 md:mr-3 md:w-2 dark:md:w-1 md:h-vh portfolio-divider-vertical'> </div>
        <div className='flex flex-wrap'>
          <p className="pb-8 prose prose-invert w-full text-black dark:text-white">
            {`I'm a creative, detail-oriented, and technical business partner who's worked with teams from small non-profits, to the Fortune 500, to cutting-edge tech companies - helping them design and implement scalable operations, and get the most from what they have.`} 
          </p>
          <p style={{ paddingBottom: 0, marginBottom: 0 }} className="prose prose-invert w-full text-black dark:text-white overflow-hidden h-auto">
            {`Together, we can establish ground-level ops and analytics `}
            <em className='text-neutral-600'>{`(ex: process mapping; identifying KPIs and leading indicators - and building useful views)`}</em>
            {`, or identify and tackle the more complex and tailored Operations improvements needed to hit ever-more challenging targets `}
            <em className='text-neutral-600'>(ex: Deep-Dives for Revenue and Ops opportunities; Forecasting and other modeling; Tool or process evaluation + migration; Workflow design and implementation; Customer Tiering, or other large projects)</em>{`.`}
          </p>
        
        </div>
      </div>

      {/* Timeline */}
      <CareerTimeline />

      {/* RevOps */}
      <div className='flex flex-col'>
        <div className='mt-3 mb-1 h-0.5 w-full portfolio-divider'/>
        <RevOps />
      </div>

      {/* Vibe Coding */}
      <div className='flex flex-col'>
        <div className='mt-4 mb-3 h-0.5 w-full portfolio-divider'/>
        <Vibe />
      </div>

      {/* Other Links & Samples */}
      <div className='flex flex-col'>
        <div className='mt-4 mb-3 h-0.5 w-full portfolio-divider'/>
        <OtherLinks />
      </div>

      <div className='mt-4 mb-3 h-0.5 w-full portfolio-divider'/>

      {/* Sample Carousel 
      <SampleCarousel />
      */}

    </section>
  );
}
