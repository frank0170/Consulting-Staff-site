'use client'

import { useState, useRef, useEffect } from 'react'
import { Transition } from '@headlessui/react'
import Link from 'next/link'

export default function MobileMenu() {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false)

  const trigger = useRef<HTMLButtonElement>(null)
  const mobileNav = useRef<HTMLDivElement>(null)

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }: { target: EventTarget | null }): void => {
      if (!mobileNav.current || !trigger.current) return;
      if (!mobileNavOpen || mobileNav.current.contains(target as Node) || trigger.current.contains(target as Node)) return;
      setMobileNavOpen(false)
    };
    document.addEventListener('click', clickHandler)
    return () => document.removeEventListener('click', clickHandler)
  })

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }): void => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false)
    };
    document.addEventListener('keydown', keyHandler)
    return () => document.removeEventListener('keydown', keyHandler)
  })

  return (
    <div className="flex md:hidden">
      {/* Hamburger button */}
      <button
        ref={trigger}
        className={`hamburger ${mobileNavOpen && 'active'}`}
        aria-controls="mobile-nav"
        aria-expanded={mobileNavOpen}
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
      >
        <span className="sr-only">Menu</span>
        <svg className="w-6 h-6 fill-current text-gray-900" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <rect y="4" width="24" height="2" />
          <rect y="11" width="24" height="2" />
          <rect y="18" width="24" height="2" />
        </svg>
      </button>

      {/*Mobile navigation */}
      <div ref={mobileNav}>
        <Transition
          show={mobileNavOpen}
          as="nav"
          id="mobile-nav"
          className="absolute top-full h-screen pb-16 z-20 left-0 w-full overflow-scroll bg-white"
          enter="transition ease-out duration-200 transform"
          enterFrom="opacity-0 -translate-y-2"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-out duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <ul className="px-5 py-2">
            <li>
              <Link href="/proiecte" className="flex text-gray-600 hover:text-gray-900 py-2" onClick={() => setMobileNavOpen(false)}>Proiecte Fonduri</Link>
            </li>
            <li>
              <Link href="/afaceri" className="flex text-gray-600 hover:text-gray-900 py-2" onClick={() => setMobileNavOpen(false)}>Afaceri de Vanzare</Link>
            </li>
            <li>
              <Link href="/servicii" className="flex text-gray-600 hover:text-gray-900 py-2" onClick={() => setMobileNavOpen(false)}>Promovare Servicii</Link>
            </li>
            {/* <li>
              <Link href="/blog" className="flex text-gray-600 hover:text-gray-900 py-2" onClick={() => setMobileNavOpen(false)}>Blog</Link>
            </li> */}
            <li className="py-2 my-2 border-t border-b border-gray-200">
              <span className="flex text-gray-600 hover:text-gray-900 py-2" onClick={() => setMobileNavOpen(false)}>Resurse</span>
              <ul className="pl-4">
                {/* <li>
                  <Link href="/documentatie" className="text-sm flex font-medium text-gray-600 hover:text-gray-900 py-2" onClick={() => setMobileNavOpen(false)}>Documentatie</Link>
                </li> */}
                <li>
                  <Link href="/proiecte-reusite" className="text-sm flex font-medium text-gray-600 hover:text-gray-900 py-2" onClick={() => setMobileNavOpen(false)}>Proiecte Reusite</Link>
                </li>
                {/* <li>
                  <Link href="/suport" className="text-sm flex font-medium text-gray-600 hover:text-gray-900 py-2" onClick={() => setMobileNavOpen(false)}>Suport</Link>
                </li> */}
                {/* <li>
                  <Link href="/404" className="text-sm flex font-medium text-gray-600 hover:text-gray-900 py-2" onClick={() => setMobileNavOpen(false)}>404</Link>
                </li> */}
              </ul>
            </li>
            {/* <li>
              <Link href="/signin" className="flex font-medium w-full text-gray-600 hover:text-gray-900 py-2 justify-center" onClick={() => setMobileNavOpen(false)}>Sign in</Link>
            </li> */}
            <li>
              <Link href="/signup" className="btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800 w-full my-2" onClick={() => setMobileNavOpen(false)}>
                <span>Contacteaza-ne</span>
                <svg className="w-3 h-3 fill-current text-gray-400 shrink-0 ml-2 -mr-1" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fill="#999" fillRule="nonzero" />
                </svg>
              </Link>
            </li>
          </ul>    
        </Transition>
      </div>
    </div>
  )
}
