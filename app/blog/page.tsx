import Link from 'next/link';
import dynamic from 'next/dynamic';
import ProjectCarousel from './carousel';

const DynamicAccordion = dynamic(() => import('../components/accordion'), { ssr: false });
const DynamicAccordionNested = dynamic(() => import('../components/accordionNested'), { ssr: false });

export const metadata = {
  title: 'Blog',
  description: 'Read my thoughts on operational excellence, data, growth, and more.',
};

export default function BlogPage() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-4 mt-2 tracking-tighter text-black dark:text-white">
        Links & Samples
      </h1>
      <div className='hidden md:block mt-3 mb-6 h-auto w-full border-2 border-neutral-700'></div>

      {/* Badges */}
      <div className='flex flex-col'>
        {/* Carousel */}
        <ProjectCarousel />
        <div className='hidden md:block mt-6 mb-4 h-auto w-full border-2 border-neutral-700'></div>
        <div className='md:hidden mt-6 mb-4 h-0.5 w-vw bg-gradient-to-l from-white to-black'></div>
      </div>

      {/* Business Articles Accordion */}
      <DynamicAccordion title="Relevant Articles" isOpenByDefault={true}>
      <li><Link target="_blank" href="/blog/articles/nbamvp" className="cursor-pointer hover:text-yellow-600 text-sm md:text-md">Data Science: Predicting the NBA MVP with Public Datasets</Link></li>
        <li><Link target="_blank" href="https://medium.com/cultural-commentary/strategic-resiliency-in-large-corporations-6003c35f98f6" className="cursor-pointer hover:text-yellow-600 text-sm md:text-md">Strategic Resiliency in Large Corporations</Link></li>
        <li><Link target="_blank" href="https://medium.com/cultural-commentary/continuous-improvement-via-operational-awareness-dc0278ff9923" className="cursor-pointer hover:text-yellow-600 text-sm md:text-md">Continuous Improvement via Operational Awareness</Link></li>
        <li><Link target="_blank" href="https://medium.com/cultural-commentary/the-biggest-question-in-crypto-whats-the-right-multiplier-932254d1f39c" className="cursor-pointer hover:text-yellow-600 text-sm md:text-md">Crypto: What's it worth?</Link></li>
        <li><Link target="_blank" href="https://medium.com/cultural-commentary/the-important-differences-between-idos-and-ipos-680f1f85900a" className="cursor-pointer hover:text-yellow-600 text-sm md:text-md">The Important Difference Between IDOs and IPOs</Link></li>
        <li><Link target="_blank" href="https://medium.com/cultural-commentary/the-impact-of-impact-investing-86feafb14266" className="cursor-pointer hover:text-yellow-600 text-sm md:text-md">The Impact of Impact Investing</Link></li>
      </DynamicAccordion>
        
    </section>
  );
}
