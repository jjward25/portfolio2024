"use client"
//import * as NBAIcons from 'react-nba-logos'; <NBAIcons.TOR/>
import { useState } from 'react';

function Accordion({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border border-cyan-600 hover:border-neutral-400 rounded-lg mb-4 w-full bg-grad">
      <div className={`bg-neutral-800 hover:bg-black hover:border-neutral-400 cursor-pointer flex items-center justify-between round p-4 leading-4 h-9 ${isOpen ? 'border-b-2 border-b-cyan-600 bg-gradient-to-r from-black to-neutral-600 rounded-tl-lg rounded-tr-lg' : 'rounded-lg'}`} onClick={toggleAccordion}>
        <h3 className={`h-auto text-md no-underline font-light text-neutral-100 `}>{title}</h3>
        <svg className={`ml-2 w-5 h-5 text-white transition-transform duration-6000 transform ${isOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      <div className={`overflow-hidden transition-height duration-6000 rounded-bl-lg rounded-br-lg ${isOpen ? 'h-auto' : 'h-0'}`}>
        <div className="p-4 bg-black text-sm">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function NbaPost() {

  return (
    <section className=''>
      <h1 className="font-medium text-2xl mb-4 tracking-tighter">
        The NBA Blow-it-Up Article
      </h1>
      <div className='mt-3 mb-6 h-auto w-full border-2 border-cyan-600'></div>


      <div className='flex flex-col'>
        <div className="mt-4 mb-4 flex flex-row">
          <p className="mr-3 inline-flex items-center rounded border  p-1 text-sm leading-4 border-neutral-700 bg-neutral-800 text-neutral-100 no-underline hover:bg-gradient-to-r from-neutral-500 to-black">
            
          </p>
          <div className="w-full mr-3 items-center rounded border  p-1 text-sm leading-4 border-neutral-700 bg-neutral-800 text-neutral-100 no-underline hover:bg-gradient-to-r from-neutral-500 to-black">
            <h3 className='mb-2'>Atlanta Hawks</h3>
            <Accordion title="Revenue Growth & Business Intelligence">
              Content for Section 2
            </Accordion>
          </div>
        </div>

        <p className="text-neutral-400 text-sm">
          Joe Ward Joe Ward Joe Ward Joe Ward
        </p>
        
        <p className="mt-4 mb-4 prose prose-neutral dark:prose-invert">
          Dallas BBQ.
        </p>
        <div className='mt-3 mb-6 h-auto w-full border-2 border-neutral-700'></div>
      </div>

    
    </section>
  );
}
