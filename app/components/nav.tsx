"use client"
import { useState } from 'react';
import Link from 'next/link';

const navItems = {
  '/': {
    name: 'home',
  },
  '/blog': {
    name: 'links',
  },
};

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleContactMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  const emailAddress = "Joseph.Ward@Outlook.com";
  const phone = "908-839-5438"

  const subject = "I saw your site";
  const body = "I wanted to get in touch with you about your car's extended warranty.";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    alert('Email copied to clipboard, talk soon!');
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(emailAddress);
    alert('Phone number copied to clipboard, talk soon!');
  };

  return (
    <aside className="md:mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20 h-auto">

        <nav
          className="flex flex-row justify-between items-start relative pr-1 pb-0 fade md:overflow-hidden scroll-pr-6 md:relative w-auto"
          id="nav"
        >
          <div className="flex flex-row space-x-0">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="transition-all text-neutral-800 dark:text-neutral-200 dark:hover:text-neutral-200 flex align-middle relative pr-4 py-1 after:bg-gradient-to-r after:from-amber-200 after:to-white dark:after:bg-gradient-to-r dark:after:from-amber-200 dark:after:to-neutral-900 after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300"
                >
                  {name}
                </Link>
              );
            })}
          </div>

          {/** Contact Me */}
          <div className='flex flex-col h-8 overflow-hidden hover:h-30 hover:overflow-visible'>
          {/** Contact Me Button */}
            <div className="hover:scale-105 focus:scale-95 cursor-pointer relative rounded-lg w-auto overflow-hidden my-1 h-full">
              <div className="absolute -inset-3  bg-gradient-to-tr from-cyan-300 via-neutral-300 to-cyan-300 dark:bg-black blur opacity-90"></div>
              <div className="relative rounded-lg flex justify-around border-2 border-cyan-200">
                <div className="px-2">
                  <p className="font-semibold text-cyan-700 dark:text-cyan-900 hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-br from-cyan-900 via-neutral-600 to-cyan-700 text-sm"
                      onClick={toggleContactMenu}>
                    Contact Me</p>
                </div>
              </div>
            </div>

          </div>



        </nav>
        
        <div className='mt-2 mb-3 h-0.5 md:mt-0 md:mb-0 md:h-0 w-vw bg-gradient-to-r from-white to-black'> </div>
      </div>

          </aside>
  );
}
