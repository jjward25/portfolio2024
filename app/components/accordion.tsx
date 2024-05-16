"use client"
import { useState } from 'react';

function Accordion({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border border-white hover:border-neutral-400 rounded-lg mb-2 w-full bg-grad">
      <div className={`bg-black hover:bg-gradient-to-r from-black to-neutral-700 border-b-white border-b-2 hover:border-neutral-400 cursor-pointer flex items-center justify-between rounded-lg  p-2 text-sm leading-4 h-9 ${isOpen ? 'border-b-amber-200 bg-gradient-to-r from-black to-neutral-500' : ''}`} onClick={toggleAccordion}>
        <h3 className="text-md font-semibold no-underline">{title}</h3>
        <svg className={`w-5 h-5 text-white transition-transform duration-6000 transform ${isOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      <div className={`overflow-hidden transition-height duration-6000 rounded-lg ${isOpen ? 'h-auto' : 'h-0'}`}>
        <div className="p-4 bg-black">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function MyAccordion() {
  return (
    <div className="w-full mx-auto">
      <Accordion title="Operational Efficiency">
        Content for Section 1
      </Accordion>
      <Accordion title="Growth Analytics">
        Content for Section 2
      </Accordion>
      <Accordion title="Change & People Management">
        Content for Section 3
      </Accordion>
    </div>
  );
}
