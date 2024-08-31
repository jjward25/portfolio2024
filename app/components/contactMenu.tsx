"use client";
import { useState } from 'react';

function ContactMenu() {
  const emailAddress = "Joseph.Ward@Outlook.com";
  const [copied, setCopied] = useState(false);

  const handleCopyToClipboard = () => {
    const textArea = document.createElement("textarea");
    textArea.value = emailAddress;
    textArea.style.position = "fixed"; // Avoid scrolling to bottom
    textArea.style.opacity = "0"; // Hide the textarea element
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset copied status after 2 seconds
  };

  return (
    <div className="absolute w-lvw h-lvh bg-cyan-200 opacity-30">
      <div className='flex flex-colw-auto h-auto m-auto'>

        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); handleCopyToClipboard(); }}
          className="text-blue-500 hover:text-blue-700"
        >
          Copy Email
        </a>
        {copied && <span className="text-green-500 ml-2">Copied!</span>}

      </div>
    </div>
  );
}

export default ContactMenu;

