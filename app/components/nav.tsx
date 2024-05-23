import Link from 'next/link';

const navItems = {
  '/': {
    name: 'home',
  },
  '/blog': {
    name: 'blog',
  },
};

export function Navbar() {
  return (
    <aside className="md:mb-12 tracking-tight">
      <div className="lg:sticky lg:top-20 h-auto">

        <nav
          className="flex flex-row justify-between items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative w-auto"
          id="nav"
        >
          <div className="flex flex-row space-x-0">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative pr-4 py-1 after:bg-gradient-to-r from-amber-200 to-neutral-900 after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300"
                >
                  {name}
                </Link>
              );
            })}
          </div>

          

          <div class="cursor-pointer relative w-auto overflow-hidden rounded-xl">
            <div class="absolute -inset-3 bg-gradient-to-tr from-neutral-800 via-neutral-200 to-neutral-500 rounded-lg blur opacity-35"></div>

            <div class="relative rounded-lg flex justify-start">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="5px" height="5px">
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M6.62 10.79a15.91 15.91 0 006.59 6.59l2.2-2.2a1.003 1.003 0 011.11-.27c1.12.45 2.33.69 3.58.69.56 0 1.01.45 1.01 1.01v3.49c0 .56-.45 1.01-1.01 1.01C10.92 21 3 13.07 3 3.99 3 3.44 3.45 3 4.01 3H7.5c.56 0 1.01.45 1.01 1.01 0 1.25.24 2.46.69 3.58.17.47.06 1.01-.27 1.11l-2.21 2.2z" fill="black"/>
              </svg>
              <div class="px-2">
                <p class="font-semibold text-white text-sm">Contact Me</p>
              </div>
            </div>
          </div>
        </nav>
        
        <div className='mt-2 mb-3 h-0.5 md:mt-0 md:mb-0 md:h-0 w-vw  bg-gradient-to-r from-neutral-200 to-black'> </div>
      </div>
      
    </aside>
  );
}
