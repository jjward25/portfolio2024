"use client"
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Accordion({ title, children, isOpenByDefault = false }) {
  const [isOpen, setIsOpen] = useState(isOpenByDefault);

  const toggleAccordion = () => setIsOpen(!isOpen);

  return (
    <div className="mb-4">
      <button
        onClick={toggleAccordion}
        className="flex justify-start w-full text-left dark:bg-neutral-800 pl-[0.5px]   "
      >
        <svg width="6" height="6" viewBox="0 0 8 8" xmlns="http://www.w3.org/2000/svg" className='my-auto'>
          <circle cx="3.5" cy="3.5" r="3.5" fill="currentColor" />
        </svg>
        <span className="text-md text-black dark:text-white pl-4 align-middle my-auto w-full hover:text-cyan-500">{title}</span>
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="black"
          className={`w-6 h-6 transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
        </motion.svg>
      </button>
      <motion.div
        initial={isOpen ? 'open' : 'collapsed'}
        animate={isOpen ? 'open' : 'collapsed'}
        variants={{
          open: { height: 'auto', opacity: 1 },
          collapsed: { height: 0, opacity: 0 },
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="overflow-hidden"
      >
        <div className="p-4 pt-0 text-black dark:text-white">{children}</div>
      </motion.div>
    </div>
  );
}
