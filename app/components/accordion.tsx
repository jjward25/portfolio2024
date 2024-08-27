"use client"
import { useState } from 'react';

function Accordion({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border border-white hover:border-neutral-400 rounded-lg mb-4 w-full bg-grad">
      <div className={`hover:bg-neutral-800 bg-black  cursor-pointer flex items-center justify-between round p-5 leading-4 h-9 ${isOpen ? 'border-b-2 border-b-neutral-600 bg-gradient-to-r from-black to-neutral-600 rounded-tl-lg rounded-tr-lg' : 'rounded-lg'}`} onClick={toggleAccordion}>
        <h3 className={`h-auto text-md no-underline bg-clip-text text-transparent bg-gradient-to-r from-neutral-300 via-neutral-100 to-neutral-300 ${isOpen ? 'bg-clip-text text-transparent bg-gradient-to-r from-neutral-300 via-amber-200 to-neutral-300' : ''}`}>{title}</h3>
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

export default function MyAccordion() {
  return (
    <div className="w-full mx-auto">
      <Accordion title="My Career">
        <p className='mb-2'>I love learning new things! I'm grateful to have been able to experience work across different sectors in my career; and at any place I work I take a data-driven, collaborative, and results oriented-approach to problems of all stripes and sizes.</p>
        
        <div className='mx-auto mt-4 my-2 h-0.5 w-5 bg-gradient-to-b from-neutral-400 via-neutral-950 to-neutral-400'></div>
        <h3 className='text-lg mt-4'>Vercel</h3>
        <em className='text-xs text-gray-400'>2022-Present</em>
        <div className='flex flex-row mt-2'>
          <div className='w-auto border border-white rounded-lg'><img
              src='/vercel.png'
              alt='schwab'
              className="w-[50px] h-[50px] object-cover rounded-lg"
            /></div>
          <div className='pl-2'>Work Experience</div>
        </div>

        <h3 className='text-lg mt-4'>Charles Schwab</h3>
        <em className='text-xs text-gray-400'>2020-2022</em>
        <div className='flex flex-row mt-2'>
          <div className='w-auto border border-white rounded-lg'><img
              src='/schwab.png'
              alt='schwab'
              className="w-[50px] h-[50px] object-cover rounded-lg"
            /></div>
          <div className='pl-2'>Work Experience</div>
        </div>

        <h3 className='text-lg mt-4'>Practice Makes Perfect</h3>
        <em className='text-xs text-gray-400'>2015-16</em>
        <div className='flex flex-row mt-2'>
          <div className='w-auto border border-white rounded-lg'><img
              src='/pmp.png'
              alt='schwab'
              className="w-[50px] h-[50px] object-cover rounded-lg"
            /></div>
          <div className='pl-2'>Work Experience</div>
        </div>

        <h3 className='text-lg mt-4'>TD Ameritrade</h3>
        <em className='text-xs text-gray-400'>2013-2020</em>
        <div className='flex flex-row mt-2'>
          <div className='w-auto border border-white rounded-lg m-auto mt-0'><img
              src='/tda.png'
              alt='schwab'
              className="w-[50px] h-[50px] object-cover rounded-lg"
            /></div>
          <div className='pl-3 pr-21 flex flex-col w-full text-xs'>
            
            <em className='mt-2'>After the rotational program, I helped transform the Procurement department. At first, every contract was handled the same and everything was manually tracked in Sharepoint.  After a couple years of collaboration and development we had multiple sourcing channels that reduced risk and increased time for Strategic Sourcing, auto-routed new cases to Category Managers, and gave business partners total visibility into their contract requests (Risk scoring, Current Stage + Notes).</em>
            <div className='mx-auto mt-4 my-2 h-0.5 w-5 bg-gradient-to-b from-neutral-400 via-neutral-950 to-neutral-400'></div>
            
            <li className='mt-2'>{`Automated all Procurement related reporting with SQL and Tableau`}</li>
          </div>
        </div>
      </Accordion>

      <Accordion title="GTM Deep Dive">
        <p>Test</p>
        <h3 className='text-lg mt-4'>Product & Users</h3>
        <div className='flex flex-row'>
          <div className='w-auto'><img
              src='/schwab.png'
              alt='schwab'
              className="w-[50px] object-cover"
            /></div>
          <div className='pl-2'>Work Experience</div>
        </div>
        <h3 className='text-lg mt-4'>People & Partners</h3>
        <em>*Often just a function of what's available.</em>
        <div className='flex flex-row'>
          <div className='w-auto'><img
              src='/schwab.png'
              alt='schwab'
              className="w-[50px] object-cover"
            /></div>
          <div className='pl-2'>Work Experience</div>
        </div>
        <h3 className='text-lg mt-4'>Processes, Data, & Tools</h3>
        <div className='flex flex-row'>
          <div className='w-auto'><img
              src='/schwab.png'
              alt='schwab'
              className="w-[50px] object-cover"
            /></div>
          <div className='pl-2'>Work Experience</div>
        </div>
      </Accordion>

      <Accordion title="Analytics & Growth">
        <p className='mb-2'>{`In my time leading Go-to-Market Analytics at Vercel I've found a few things key to our success:`}</p>
        <p className='mb-4'><em>{`Of course everything here is dependent on myriad variables (company maturity/culture, existing tooling and processes, org structures, etc.).`}</em></p>
        <Accordion title="Processes & Documentation">
        <p className='mb-2'>{`Accountability is king. You have to maintain trust as a data team, so working with Data Engineering to create views that flag QA issues for data pipelines, CRM inconsistencies, dead fields, etc. and ensuring you have agreed upon processes with all stakeholders who may have to own fixes (CRM owner, Data Engineering, Ops, and potentially Business Partners for manually input data) is non-negotiable.`}</p>
        </Accordion>
        <Accordion title="Team Structure">
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
        
      </Accordion>
    </div>
  );
}
