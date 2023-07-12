
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { NavLink } from 'react-router-dom'

const navigation = [
  { name: 'Product', href: '/', current: false },
  { name: 'Team', href: '/', current: false },
  { name: 'Enterprise', href: '/', current: false },
  { name: 'Explore', href: '/', current: false },
  { name: 'Marketplace', href: '/', current: false },
  { name: 'Pricing', href: '/', current: false },
  {name: 'Users', href: '/users', current:false }
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="bg-[#000000] mx-auto max-w-[90rem] px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}

                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>

              </div>

              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <NavLink to='/'>
                  <img
                    className="block h-8 w-auto lg:hidden"
                    src="/logo.png"
                    alt="Your Company"
                  />
                  <img
                    className="hidden h-8 w-auto lg:block"
                    src="/logo.png"
                    alt="Your Company"
                  />  
                  </NavLink>
                  
                </div>

                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-md font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}

                    <div className="hidden md:flex items-center ml-[80px] relative">
                      <input
                        type="text"
                        placeholder="Search DOML"
                        className="py-1 px-2 bg-[#272F43] outline-none w-[230px]  tracking-wide placeholder:text-[#C0C3C9] h-6 lg:h-8 p-2 rounded-sm"
                        
                      />
                        <div className='absolute ml-[200px]'>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="25"
                        viewBox="0 0 18 18"
                        fill="none"
                        >
                      <path
                        d="M0.826131 3.59253C0.826131 1.93956 2.16612 0.599568 3.81909 0.599568H13.4714C15.1243 0.599568 16.4643 1.93956 16.4643 3.59253V14.3672C16.4643 16.0201 15.1243 17.3601 13.4714 17.3601H3.81909C2.16612 17.3601 0.826131 16.0201 0.826131 14.3672V3.59253Z"
                        stroke="#515868"
                        strokeWidth="1.19718"
                        />
                   <line
                    x1="6.39745"
                    y1="14.3926"
                    x2="9.76453"
                    y2="4.85252"
                    stroke="#7A7D86"
                    strokeWidth="1.19718"
                      />
                  </svg>
                        </div>
                          
                           
                    <button className="py-1 px-2 min-w-[100px] text-white rounded-md hover:bg-gray-700">
                      Sign In
                    </button>
                    <button className="py-1 min-w-[100px] text-white border hover:bg-white hover:text-black hover:scale-110 transition duration-300 ease-in-out border-gray-500 rounded-md p-[2px] px-1">
                      Sign Up
                    </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
              
              
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )}
