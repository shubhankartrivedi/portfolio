import React from 'react'
import Link from 'next/link'

const navItems = {
  '/': {
    name: 'home',
  },
  '/blog': {
    name: 'blog',
  }
}

export function Navbar() {
  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex items-center w-full">
          {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <React.Fragment key={path}>
                <Link
                  href={path}
                  className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
                >
                {name}
                </Link>
                <svg className='h-1 w-1 dark:fill-white fill-black last:hidden' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/></svg>
                </React.Fragment>
              )
            })}

          </div>
        </nav>
      </div>
    </aside>
  )
}
