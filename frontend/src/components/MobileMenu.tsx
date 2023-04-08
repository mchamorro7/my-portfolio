import { isRouteActive } from '@utils/index'
import { useState } from 'react'

interface MobileMenuProps {
  currentPath: string;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ currentPath }) => {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <>
      <div className="md:hidden p-6 flex justify-end">
        <button onClick={() => setVisible(!visible)}>
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
      <aside
        className="relative z-50">
        <div className={`${visible ? 'w-full' : 'w-0'} duration-500 fixed top-0 left-0 bottom-0 flex flex-col w-full bg-secondary overflow-y-auto`}>
          <div className="flex justify-end p-6">
            <button onClick={() => setVisible(!visible)}>
              <svg
                className="h-6 w-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
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
                href="/">
                Portfolio
              </a>
            </li>
            <li className="mb-1">
              <a
                className={`${isRouteActive(
                  currentPath,
                  '/about'
                )} block p-4 text-sm text-white`}
                href="/about">
                About
              </a>
            </li>
            <li className="mb-1">
              <a
                className={`${isRouteActive(
                  currentPath,
                  '/blog'
                )} block p-4 text-sm text-white`}
                href="/blog">
                Blog
              </a>
            </li>
            <li className="mb-1">
              <a
                className="block p-4 text-sm text-white"
                href="mailto:mateochamo1@gmail.com">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </>
  )
};
