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
      <div className='mt-3 mb-3 h-auto w-full border-2 border-neutral-700'> </div>
      <ul className="mt-4 mb-4">
        <p className="mr-3 mb-3 inline-flex items-center rounded border  p-1 text-sm leading-4 border-neutral-700 bg-neutral-800 text-neutral-100 no-underline hover:bg-gradient-to-r from-neutral-500 to-black">
          Operational Efficiency
        </p>
        <p className="mr-3 mb-3 inline-flex items-center rounded border  p-1 text-sm leading-4 border-neutral-700 bg-neutral-800 text-neutral-100 no-underline hover:bg-gradient-to-r from-neutral-500 to-black">
          Process Improvement
        </p>
        <p className="mr-3 mb-3 inline-flex items-center rounded border  p-1 text-sm leading-4 border-neutral-700 bg-neutral-800 text-neutral-100 no-underline hover:bg-gradient-to-r from-neutral-500 to-black">
          Growth / Sales / CS Analytics
        </p>
        <p className="mr-3 mb-3 inline-flex items-center rounded border  p-1 text-sm leading-4 border-neutral-700 bg-neutral-800 text-neutral-100 no-underline hover:bg-gradient-to-r from-neutral-500 to-black">
          People Manager
        </p>
        <p className="mr-3 mb-3 inline-flex items-center rounded border  p-1 text-sm leading-4 border-neutral-700 bg-neutral-800 text-neutral-100 no-underline hover:bg-gradient-to-r from-neutral-500 to-black">
          Executive Partner
        </p>
      </ul>
      
      <p className="prose prose-invert mb-10">
        I'm an Operations specialist with extensive experience in analytics and business intelligence/growth strategy.
      </p>

      <div className="w-full mx-auto my-5">
        <DynamicAccordion/>
      </div>
    </section>
  );
}
