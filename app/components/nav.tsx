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

      <div className={`fixed top-0 left-0 w-full h-full bg-gradient-to-tr from-neutral-200 via-white to-neutral-200 ${isMenuOpen ? 'z-50 opacity-98 transition-all ease-in' : '-z-50 opacity-0 transition-all ease-in'}`}>
        <div className="w-full h-full m-auto flex flex-col">

          <div className='absolute top-4 right-4 md:top-8 md:right-8 cursor-pointer font-semibold text-black hover:text-cyan-700 transition-all ease-in-out' onClick={toggleContactMenu}>X</div>

          <div className='max-w-full top-1/3 flex flex-col gap-4 text-center w-auto h-auto m-auto'>
            
            <div className="flex-none w-16 h-16 mx-auto rounded-full overflow-hidden border-black dark:border-white border-2">
              <img
                src='/prof.jpg'
                alt='prof'
                className="w-full h-full object-cover hover:rotate-180 hover:duration-500 transition-all ease-out"
              />
            </div>

            <a href="#" 
              onClick={(e) => { e.preventDefault(); handleCopyEmail(); }}
              className="text-black hover:text-cyan-500 font-semibold w-auto m-auto"
              title="Joseph.Ward@Outlook.com"
            >
              Copy Email
            </a>

            <a href={`mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`}
              className="text-black hover:text-cyan-500 font-semibold w-auto m-auto"
            >
              Send Email
            </a>

            <a href="https://www.linkedin.com/in/joe-ward1/"
              target='_blank' 
              className="text-black hover:text-cyan-500 font-semibold w-auto m-auto"
              title="LinkedIn"
            >
              LinkedIn
            </a>

          </div>
        </div>

      </div>
      
    </aside>
  );
}
