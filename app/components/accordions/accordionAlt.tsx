"use client"
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Accordion({ title, children, isOpenByDefault = false }) {
  const [isOpen, setIsOpen] = useState(isOpenByDefault);

  const toggleAccordion = () => setIsOpen(!isOpen);

  return (
    <div className="mb-8">
      <button
        onClick={toggleAccordion}
        className="flex justify-between items-center w-full text-left px-2 py-1 bg-cyan-50 opacity-85 drop-shadow-lg dark:bg-neutral-800 rounded-xl ring-neutral-500 ring-1 ring-white  hover:ring-1 md:hover:ring-cyan-700 transition-colors"
      >
        <span className="text-xl text-black dark:text-white">{title}</span>
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
        <div className="px-4 text-black dark:text-white">{children}</div>
      </motion.div>
    </div>
  );
}
