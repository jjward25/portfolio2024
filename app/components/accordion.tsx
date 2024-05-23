"use client"
import { useState } from 'react';

function Accordion({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border border-white hover:border-neutral-400 rounded-lg mb-4 w-full bg-grad">
      <div className={`bg-black hover:bg-gradient-to-r from-black to-neutral-700 border-b-white border-b-2 hover:border-neutral-400 cursor-pointer flex items-center justify-between rounded-lg  p-5 text-md leading-4 h-9 ${isOpen ? 'border-b-4 border-b-amber-200 bg-gradient-to-r from-black to-neutral-500' : ''}`} onClick={toggleAccordion}>
        <h3 className={`text-md no-underline bg-clip-text text-transparent bg-gradient-to-r from-neutral-400 via-neutral-100 to-neutral-300 ${isOpen ? 'bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-yellow-200 to-yellow-300' : ''}`}>{title}</h3>
        <svg className={`w-5 h-5 text-white transition-transform duration-6000 transform ${isOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      <div className={`overflow-hidden transition-height duration-6000 rounded-lg ${isOpen ? 'h-auto' : 'h-0'}`}>
        <div className="p-4 bg-black text-sm">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function MyAccordion() {
  return (
    <div className="w-full mx-auto">
      <Accordion title="Operational Excellence">
        <ul className='text-neutral-100'>For the purposes of this site, let's think of business operations in terms of three major questions:
          <li>(1) What problem(s) need(s) solving? (User Focus)</li>
          <li>(2) Who will be involved? (People & Partnerships)</li>
          <li>(3) How will we do it? (Processes, Data, Tools)</li>
        </ul>
      </Accordion>
      <Accordion title="Growth & Business Intelligence">
        Content for Section 2
      </Accordion>
      <Accordion title="Data & Analytics Learnings">
        <p className='mb-2'>{`In my time leading Go-to-Market Analytics at Vercel I've found a few things core to our success.`}</p>
        <p className='mb-4'>{`Of course everything here is dependent on variables like your company size, data engineering capabilities (how many sources can you pull from and model for use?), CRM/Tools used, Ops capabilities, etc.`}</p>
        <Accordion title="Always keep Data Engineering and end-user Analytics separate">
          Content for Section 2
        </Accordion>
        <Accordion title="Analytics teams should be centralized under 1 manager (but can have focus areas)">
          Content for Section 2
        </Accordion>
        <Accordion title="Important to have transparent and robust processes (particularly around QA and prioritization)">
          Content for Section 2
        </Accordion>
      </Accordion>
    </div>
  );
}
