import Link from 'next/link';
import dynamic from 'next/dynamic';
import ProjectCarousel from 'app/components/sideProjects/carousel';

const DynamicAccordion = dynamic(() => import('../components/accordion'), { ssr: false });

export const metadata = {
  title: 'Blog',
  description: 'Read my thoughts on operational excellence, data, growth, and more.',
};

export default function BlogPage() {

  return (
    <section>
      <h1 className="font-medium text-2xl mb-4 tracking-tighter text-black dark:text-white">
        Links & Samples
      </h1>
      <div className='mt-3 mb-6 h-auto w-full border-2 border-neutral-700'></div>

      {/*Badges*/}
      <div className='flex flex-col'>
        <ul className="mt-4 mb-4">
          <p className="mr-3 inline-flex items-center rounded border  p-1 text-sm leading-4 border-neutral-700 bg-neutral-800 text-neutral-100 no-underline hover:bg-gradient-to-r from-neutral-500 to-black">
            PMP
          </p>
          <p className="mr-3 inline-flex items-center rounded border  p-1 text-sm leading-4 border-neutral-700 bg-neutral-800 text-neutral-100 no-underline hover:bg-gradient-to-r from-neutral-500 to-black">
            Six-Sigma Green Belt
          </p>
        </ul>

        {/*Subtitle*/}
        <p className="text-neutral-400 text-sm">
          Joe Ward Joe Ward Joe Ward Joe Ward
        </p>

        {/*Text*/}
        <p className="mt-4 mb-4 prose prose-neutral dark:prose-invert">
          Dallas BBQ.
        </p>
        <div className='mt-3 mb-6 h-auto w-full border-2 border-neutral-700'></div>
      </div>

      {/*Site Blog Links*/}
      <div className='w-full flex flex-col text-black'>
        <h3 className='text-lg'>Articles</h3>
        <li><Link key={''} href={"/blog/articles/test"} className="">
              Test Blog</Link></li>
      </div>

        

      <div className="w-full mx-auto mt-4">
        <DynamicAccordion/>
      </div>

      <div className="w-full mx-auto mt-4 text-black">
        <ProjectCarousel/>
      </div>

    </section>
  );
}
