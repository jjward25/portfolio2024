import React from 'react';
import DynamicAccordion from '../accordions/accordion';
import ProjectCarousel from '../carousel/carouselOther';
import Link from 'next/link';

const RevOps = () => {
  return (
<DynamicAccordion title="Other Links & Samples" isOpenByDefault={false}>
{/* Badges */}
<div className='flex flex-col'>
  {/* Carousel */}
  <ProjectCarousel />
</div>
<div className='mt-4 mx-auto mb-3 h-0.5 w-1/3 bg-gradient-to-r from-amber-200 via-neutral-200 to-cyan-950'/>
<p className='font-semibold text-lg mb-2'>Articles</p>
<li><Link target="_blank" href="https://medium.com/cultural-commentary/strategic-resiliency-in-large-corporations-6003c35f98f6" className="cursor-pointer hover:text-yellow-600 text-sm md:text-md">Strategic Resiliency in Large Corporations</Link></li>
<li><Link target="_blank" href="https://medium.com/cultural-commentary/continuous-improvement-via-operational-awareness-dc0278ff9923" className="cursor-pointer hover:text-yellow-600 text-sm md:text-md">Continuous Improvement via Operational Awareness</Link></li>
<li><Link target="_blank" href="https://medium.com/cultural-commentary/the-biggest-question-in-crypto-whats-the-right-multiplier-932254d1f39c" className="cursor-pointer hover:text-yellow-600 text-sm md:text-md">Crypto: What's it worth?</Link></li>
<li><Link target="_blank" href="https://medium.com/cultural-commentary/the-important-differences-between-idos-and-ipos-680f1f85900a" className="cursor-pointer hover:text-yellow-600 text-sm md:text-md">The Important Difference Between IDOs and IPOs</Link></li>
<li><Link target="_blank" href="https://medium.com/cultural-commentary/the-impact-of-impact-investing-86feafb14266" className="cursor-pointer hover:text-yellow-600 text-sm md:text-md">The Impact of Impact Investing</Link></li>
</DynamicAccordion>
  );
};

export default RevOps;