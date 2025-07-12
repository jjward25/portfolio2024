"use client"
import { useState } from 'react';

export default function ContactButton() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleContactMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  const emailAddress = "Joseph.Ward@Outlook.com";
  const subject = "I saw your site";
  const body = "I wanted to get in touch with you about your car's extended warranty.";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    alert('Email copied to clipboard, talk soon!');
  };

  return (
    <>
      {/* Contact Me Button */}
      <div className="hover:scale-105 focus:scale-95 cursor-pointer relative rounded-lg overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-300 via-neutral-300 to-cyan-300 rounded-lg opacity-90"></div>
        <div className="relative rounded-lg flex justify-center border-2 border-cyan-200 px-3 py-1">
          <p className="font-semibold text-cyan-700 hover:text-cyan-900 text-sm transition-colors"
              onClick={toggleContactMenu}>
            Contact Me
          </p>
        </div>
      </div>
      
      {/* Contact Modal */}
      <div className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center ${isMenuOpen ? 'z-50 opacity-100 transition-all ease-in' : '-z-50 opacity-0 transition-all ease-in'}`}
           onClick={toggleContactMenu}>
        <div className="bg-gradient-to-tr from-neutral-200 via-white to-neutral-200 rounded-lg shadow-2xl p-8 max-w-md w-full mx-4 relative"
             onClick={(e) => e.stopPropagation()}>

          <div className='absolute top-4 right-4 cursor-pointer font-semibold text-black hover:text-cyan-700 transition-all ease-in-out' onClick={toggleContactMenu}>✕</div>

          <div className='flex flex-col gap-4 text-center'>
            
            <div className="flex-none w-16 h-16 mx-auto rounded-full overflow-hidden border-black dark:border-white border-2">
              <img
                src='/prof.jpg'
                alt='prof'
                className="w-full h-full object-cover hover:rotate-180 hover:duration-500 transition-all ease-out"
              />
            </div>

            <a href="#" 
              onClick={(e) => { e.preventDefault(); handleCopyEmail(); }}
              className="text-black hover:text-cyan-500 font-semibold w-auto m-auto flex items-center gap-2"
              title="Joseph.Ward@Outlook.com"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
              </svg>
              Copy Email
            </a>

            <a href={`mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`}
              className="text-black hover:text-cyan-500 font-semibold w-auto m-auto flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              Send Email
            </a>

            <a href="https://www.linkedin.com/in/joe-ward1/"
              target='_blank' 
              className="text-black hover:text-cyan-500 font-semibold w-auto m-auto flex items-center gap-2"
              title="LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>

            <a href="https://github.com/jjward25"
              target='_blank' 
              className="text-black hover:text-cyan-500 font-semibold w-auto m-auto flex items-center gap-2"
              title="Github"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              Github
            </a>

          </div>
        </div>
      </div>
    </>
  );
} 