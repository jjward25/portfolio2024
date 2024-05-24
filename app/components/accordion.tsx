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
        <h3 className={`h-auto text-md no-underline bg-clip-text text-transparent bg-gradient-to-r from-neutral-400 via-neutral-100 to-neutral-300 ${isOpen ? 'bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-yellow-200 to-yellow-300' : ''}`}>{title}</h3>
        <svg className={`ml-2 w-5 h-5 text-white transition-transform duration-6000 transform ${isOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
        <p className='mb-2'>For the purposes of this site, let's think of business operations in terms of three major questions:</p>
        <ul className='text-neutral-100 px-5'>
          <li className='mt-2'>(1) What problem(s) need(s) solving? (User/Product Focus)</li>
          <li>(2) Who will be involved? (People & Partnerships)</li>
          <li>(3) How will we do it? (Processes, Data, Tools)</li>
        </ul>
        <p className='my-2'>I take a data-driven, collaborative, and results oriented-approach to problems across these 3 levels of business operations.  Some examples of past work:</p>
        
        <div className='flex flex-row'>
          <div className='w-auto'><img
              src='/schwab.png'
              alt='schwab'
              className="rounded-lg p-1 w-[50px] object-cover"
            /></div>
          <div className='pl-2'>Work Experience</div>
        </div>
      </Accordion>

      <Accordion title="Revenue Growth & Business Intelligence">
        Content for Section 2
      </Accordion>

      <Accordion title="Data & Analytics">
        <p className='mb-2'>{`In my time leading Go-to-Market Analytics at Vercel I've found a few things key to our success:`}</p>
        <p className='mb-4'><em>{`Of course everything here is dependent on myriad variables (company maturity/culture/people, existing tooling and processes, org structures, etc.).`}</em></p>
        <Accordion title="Separate Makes Equal">
        <p className='mb-2'>We have a model where Analytics is a centralized team but kept separate from Data Engineering, which has a few benefits.</p>
        <div className='w-full pt-5 pb-7 mx-auto max-auto max-w-[500px]'><img
              src='/analytics_org.png'
              alt='prof'
              className="w-full h-full object-cover"
            /></div>
        <p>Chief among them is the Analytics team now has a dedicated owner. This:</p>
        <div className='mx-auto my-2 h-0.5 w-5 bg-gradient-to-b from-neutral-400 via-neutral-950 to-neutral-400'></div>
        <ul className='mb-2 px-5'>
          <li className='mt-2'>(1) means QA initiatives have a clear and over-arching owner who is thinking about all data consumers and is separate from the team working on the data.</li>
          <li className='mt-2'>An owner/advocate for creating and maintaining processes around CRM/Ops/Piping changes.</li>
          <li className='mt-2'>(2) data modeling is able to be scoped better as we make our requests with knowledge of what's most valuable across teams. </li>
          <li className='mt-2'>(3) increases the quality of views and business insights, as well as end-user data resiliency, because analysts can work across business partners - breaking down silos and increasing availability. </li>
        </ul>
        <div className='mx-auto  h-0.5 w-5 bg-gradient-to-b from-neutral-400 via-neutral-950 to-neutral-400'></div>
        <p className='mt-2'>The downside is that the analytics team here doesn't own any of the inputs. They are, as usual, beholden to the garbage-in-garbage-out cycle of data into CRMs or from a stream of databases and APIs.</p>
        <p className='mt-2'>This limitation exists with local teams as well though, except then you have a marketing analyst, a sales analyst, etc. trying to make their case and get their issue prioritized against pure business initiatives or as duplicative tickets in the engineering queue.</p>
        <p className='mt-2'>If you have a VP of data who gets the infra side and business intelligence, then I think it's an improvement to have the VP own both, but crucially be accountable to business partner satisfaction on the outputs.</p>

        </Accordion>
        <Accordion title="Processes & Documentation">
        <p className='mb-2'>{`Accountability is king. You have to maintain trust as a data team, so working with Data Engineering to create views that flag QA issues for data pipelines, CRM inconsistencies, dead fields, etc. and ensuring you have agreed upon processes with all stakeholders who may have to own fixes (CRM owner, Data Engineering, Ops, and potentially Business Partners for manually input data) is non-negotiable.`}</p>
        </Accordion>
      </Accordion>
    </div>
  );
}
