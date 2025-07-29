import React from 'react';
import DynamicAccordion from '../accordions/accordion';
import ProjectCarousel from '../carousel/carouselVibe';
import Link from 'next/link';

const Vibe = () => {
  return (
<DynamicAccordion title="Vibe Coding" isOpenByDefault={false}>
{/* Badges */}
<div className='flex flex-col'>
  {/* Carousel */}
  <ProjectCarousel />
</div>
</DynamicAccordion>
  );
};

export default Vibe;