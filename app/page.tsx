import dynamic from 'next/dynamic';
const DynamicAccordion = dynamic(() => import('./components/accordion'), { ssr: false });

export const metadata = {
  title: 'Joe Ward | Home',
  description: 'Read my thoughts on operational efficiency, business analytics, and more.',
};

export default function Page() {
  return (
    <section>
      <h1 className="font-medium text-2xl tracking-tighter">Hey 👋 I'm Joe Ward</h1>
      <div className='mt-3 mb-3 h-0.5 w-full  bg-gradient-to-r from-amber-200 to-black'> </div>
      
      <div className='flex mt-8 mb-8 flex-wrap place-content-center md:flex-nowrap'>
        <div className="flex-none w-32 h-32 ml-10 mr-10  rounded-full overflow-hidden">
          <img
            src='/prof.jpg'
            alt='prof'
            className="w-full h-full object-cover"
          />
        </div>

        <div className='mt-9 md:m-auto w-full'>
          <ul className="flex flex-nowrap w-full space-x-2">
            <p className="w-full h-10 mb-3 inline-flex justify-center items-center rounded border p-1 text-xs leading-4 border-neutral-700 bg-neutral-800 text-neutral-100 no-underline hover:bg-gradient-to-r from-neutral-600 via-black to-neutral-600">
              {`Operational Efficiency`}
            </p>
            <p className="w-full h-10 mb-3 inline-flex justify-center items-center rounded border p-1 text-xs leading-4 border-neutral-700 bg-neutral-800 text-neutral-100 no-underline hover:bg-gradient-to-r from-neutral-600 via-black to-neutral-600">
              Process Improvement
            </p>
            <p className="w-full h-10 mb-3 inline-flex justify-center items-center rounded border p-1 text-xs leading-4 border-neutral-700 bg-neutral-800 text-neutral-100 no-underline hover:bg-gradient-to-r from-neutral-600 via-black to-neutral-600">
              Bus. Intelligence & Growth
            </p>
          </ul>
          <ul className='w-full'>
              <p className="w-full justify-center mb-3 inline-flex items-center rounded border  p-1 text-xs leading-4 border-neutral-700 bg-neutral-800 text-neutral-100 no-underline hover:bg-gradient-to-r from-neutral-600 to-black">
                People Manager
              </p>
              <p className="w-full justify-center  mb-3 inline-flex items-center rounded border  p-1 text-xs leading-4 border-neutral-700 bg-neutral-800 text-neutral-100 no-underline hover:bg-gradient-to-r from-neutral-600 to-black">
                Executive Partner
              </p>
          </ul>
        </div>
      </div>
      
      <div className='flex flex-nowrap h-auto'>
        <div className=' md:mr-3 md:w-1 md:h-vh bg-gradient-to-r from-amber-200 to-black'> </div>
        <p className="prose prose-invert">
          I'm an Operations specialist experienced in process improvement, change management, analytics and business intelligence/growth strategy. I'm creative, hands-on, collaborative, and a results-oriented project manager.
        </p>
      </div>

      <div className="w-full mx-auto mt-10">
        <DynamicAccordion/>
      </div>
    </section>
  );
}
