import Link from 'next/link';

const navItems = {
  '/': {
    name: 'home',
  },
  '/work': {
    name: 'work',
  },
  '/blog': {
    name: 'blog',
  },
};

export function Navbar() {
  return (
    <aside className="md:mb-20 tracking-tight">
      <div className="lg:sticky lg:top-20 h-auto">
        <nav
          className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row space-x-0 pr-10">
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
        </nav>
        <div className='mt-2 mb-3 h-0.5 w-vw  bg-gradient-to-r from-neutral-200 to-black'> </div>
      </div>
      
    </aside>
  );
}
