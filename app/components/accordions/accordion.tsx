"use client"
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Accordion({ title, children, isOpenByDefault = false }) {
  const [isOpen, setIsOpen] = useState(isOpenByDefault);

  const toggleAccordion = () => setIsOpen(!isOpen);

  return (
    <div className="mb-2">
      <button
        onClick={toggleAccordion}
        className="flex justify-between items-center w-full text-left text-black drop-shadow-lg dark:bg-neutral-800 rounded-xl hover:text-cyan-600 transition-colors"
      >
      <h1 className="font-medium text-xl mb-2 mt-2 tracking-tighter  dark:text-white">
                {title}</h1>
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
        <div className="p-4 pt-2 text-black dark:text-white">{children}</div>
      </motion.div>
    </div>
  );
}
