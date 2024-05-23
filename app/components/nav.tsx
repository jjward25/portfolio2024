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

          <div className="cursor-pointer relative w-auto overflow-hidden rounded-xl my-1 h-full">
            <div className="absolute -inset-3 bg-gradient-to-tr from-neutral-900 via-neutral-100 to-neutral-900 blur opacity-35"></div>
            <div className="relative rounded-lg flex justify-around">
              <div className="px-2">
                <p className="font-semibold text-white text-sm ">Contact Me</p>
              </div>
            </div>
          </div>
        </nav>
        
        <div className='mt-2 mb-3 h-0.5 md:mt-0 md:mb-0 md:h-0 w-vw  bg-gradient-to-r from-neutral-200 to-black'> </div>
      </div>
      
    </aside>
  );
}
