import Link from 'next/link';
import dynamic from 'next/dynamic';
import ProjectCarousel from 'app/components/carousel/carousel';

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
      <DynamicAccordion title="Business Articles" isOpenByDefault={true}>
        <li><Link target="_blank" href="https://medium.com/cultural-commentary/continuous-improvement-via-operational-awareness-dc0278ff9923" className="cursor-pointer hover:text-yellow-600">Continuous Improvement via Operational Awareness</Link></li>
        <li><Link target="_blank" href="https://medium.com/cultural-commentary/strategic-resiliency-in-large-corporations-6003c35f98f6" className="cursor-pointer hover:text-yellow-600">Strategic Resiliency in Large Corporations</Link></li>
        <li><Link target="_blank" href="https://medium.com/cultural-commentary/the-biggest-question-in-crypto-whats-the-right-multiplier-932254d1f39c" className="cursor-pointer hover:text-yellow-600">Crypto: What's it worth?</Link></li>
        <li><Link target="_blank" href="https://medium.com/cultural-commentary/the-important-differences-between-idos-and-ipos-680f1f85900a" className="cursor-pointer hover:text-yellow-600">The Important Difference Between IDOs and IPOs</Link></li>
        <li><Link target="_blank" href="https://medium.com/cultural-commentary/the-impact-of-impact-investing-86feafb14266" className="cursor-pointer hover:text-yellow-600">The Impact of Impact Investing</Link></li>
      </DynamicAccordion>

      {/* Other Articles Accordion */}
      <DynamicAccordion title="Other Articles" isOpenByDefault={false}>
        <li><Link target="_blank" href="https://medium.com/cultural-commentary/voting-101-e1e3677e057" className="cursor-pointer hover:text-yellow-600">Voting 101</Link></li>
        <li><Link target="_blank" href="https://medium.com/cultural-commentary/what-id-like-to-see-from-the-next-administration-3504d10addb2" className="cursor-pointer hover:text-yellow-600">{`What I'd Like to See From the Next Administration (2020 Election)`}</Link></li>
        <DynamicAccordionNested title="Cliches" isOpenByDefault={false}>
        <li><Link target="_blank" href="https://medium.com/cultural-commentary/youll-understand-when-you-re-older-c30534bdcb21" className="cursor-pointer hover:text-yellow-600">{`You'll Understand When You're Older`}</Link></li>
        <li><Link target="_blank" href="https://medium.com/cultural-commentary/2-work-smarter-not-harder-6ee8772de498" className="cursor-pointer hover:text-yellow-600">{`Work Smarter Not Harder`}</Link></li>
        <li><Link target="_blank" href="https://medium.com/cultural-commentary/3-carpe-diem-abd5552a7e11" className="cursor-pointer hover:text-yellow-600">{`Carpe Diem`}</Link></li>
        <li><Link target="_blank" href="https://medium.com/cultural-commentary/4-beauty-is-only-skin-deep-79cdba359e17" className="cursor-pointer hover:text-yellow-600">{`Beauty is Only Skin Deep`}</Link></li>
        <li><Link target="_blank" href="https://medium.com/cultural-commentary/5-you-cant-teach-an-old-dog-new-tricks-d9bbd9376f6d" className="cursor-pointer hover:text-yellow-600">{`You Can't Teach an Old Dog New Tricks`}</Link></li>
        <li><Link target="_blank" href="https://medium.com/cultural-commentary/6-money-cant-buy-happiness-8a9b6cfc4df3" className="cursor-pointer hover:text-yellow-600">{`Money Can't Buy Happiness`}</Link></li>
        <li><Link target="_blank" href="https://medium.com/cultural-commentary/7-achilles-heel-54ebab918ba" className="cursor-pointer hover:text-yellow-600">{`Achilles Heel`}</Link></li>
        </DynamicAccordionNested>
        
      </DynamicAccordion>
    </section>
  );
}
