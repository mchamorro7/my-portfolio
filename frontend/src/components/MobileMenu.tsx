import { isRouteActive } from '@utils/index'
import { useState } from 'react'

interface MobileMenuProps {
  currentPath: string;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ currentPath }) => {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <>
      <div className="md:hidden flex justify-end">
        <button role="button" aria-label="Open mobile menu" onClick={() => setVisible(!visible)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
      <aside className="relative z-50">
        <div
          className={`${
            visible ? 'w-full' : 'w-0'
          } duration-500 fixed top-0 left-0 bottom-0 flex flex-col bg-secondary overflow-y-auto`}>
          <div className="flex justify-end p-6">
            <button role="button" aria-label="Close mobile menu"  onClick={() => setVisible(!visible)}>
              <svg
                className="h-6 w-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <ul className="p-6">
            <li className="mb-1">
              <a
                className={`${isRouteActive(
                  currentPath,
                  '/'
                )} block p-4 text-sm text-white`}
                aria-label="Go to home page"
                href="/">
                Home
              </a>
            </li>
            <li className="mb-1">
              <a
                className={`${isRouteActive(
                  currentPath,
                  '/projects'
                )} block p-4 text-sm text-white`}
                aria-label="Go to projects page"
                href="/projects">
                Projects
              </a>
            </li>
            <li className="mb-1">
              <a
                className={`${isRouteActive(
                  currentPath,
                  '/blog'
                )} block p-4 text-sm text-white`}
                aria-label="Go to blog page"
                href="/blog">
                Blog
              </a>
            </li>
            <li className="mb-1">
              <a
                className="block p-4 text-sm text-white"
                aria-label="Contact me by email"
                href="mailto:mateochamo1@gmail.com">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </>
  )
}
