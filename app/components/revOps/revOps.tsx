import React from 'react';
import DynamicAccordion from '../accordions/accordion';
import ProjectCarousel from '../carousel/carouselRevOps';

const RevOps = () => {
  return (
    <DynamicAccordion title="RevOps Related" isOpenByDefault={false}>
    
        <ProjectCarousel />

    </DynamicAccordion>
  );
};

export default RevOps;