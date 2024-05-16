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
      
      <div className='flex mt-8 mb-8 md:flex-wrap'>
        <div className="flex-none w-32 h-32 ml-10 mr-10  rounded-full overflow-hidden">
          <img
            src='/prof.jpg'
            alt='prof'
            className="w-full h-full object-cover"
          />
        </div>

        <ul className="mt-4 mb-4 w-auto flex-auto  justify-center content-center">
          <p className="mr-3 mb-3 inline-flex items-center rounded border  p-1 text-xs leading-4 border-neutral-700 bg-neutral-800 text-neutral-100 no-underline hover:bg-gradient-to-r from-neutral-700 to-black">
            {`Operational Efficiency`}
          </p>
          <p className="mr-3 mb-3 inline-flex items-center rounded border  p-1 text-xs leading-4 border-neutral-700 bg-neutral-800 text-neutral-100 no-underline hover:bg-gradient-to-r from-neutral-700 to-black">
            Process Improvement
          </p>
          <p className="mr-3 mb-3 inline-flex items-center rounded border  p-1 text-xs leading-4 border-neutral-700 bg-neutral-800 text-neutral-100 no-underline hover:bg-gradient-to-r from-neutral-700 to-black">
            Growth / Sales / CS Analytics
          </p>
          <ul>
            <p className="mr-3 mb-3 inline-flex items-center rounded border  p-1 text-xs leading-4 border-neutral-700 bg-neutral-800 text-neutral-100 no-underline hover:bg-gradient-to-r from-neutral-700 to-black">
              People Manager
            </p>
            <p className="mr-3 mb-3 inline-flex items-center rounded border  p-1 text-xs leading-4 border-neutral-700 bg-neutral-800 text-neutral-100 no-underline hover:bg-gradient-to-r from-neutral-700 to-black">
              Executive Partner
            </p>
          </ul>
        </ul>

      </div>
      
      <p className="prose prose-invert mb-10">
        I'm an Operations specialist experienced in process improvement, change management, analytics and business intelligence/growth strategy. I'm creative, hands-on, collaborative, and a results-oriented project manager.
      </p>

      <div className="w-full mx-auto my-5">
        <DynamicAccordion/>
      </div>
    </section>
  );
}
