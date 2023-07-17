import { Playfair_Display } from 'next/font/google'
const playfair = Playfair_Display({ subsets: ['latin'] })

import React, { useState } from 'react';
import Link from 'next/link'
const Header = ({ logoText, navItems }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

                <div className='flex'>
                    <div className='flex items-center'>
                        <Link href="/" legacyBehavior>
                            <a className="flex items-center">
                                <span className={`self-center text-2xl font-semibold whitespace-nowrap text-[#e80c15] ${playfair.className}`}>
                                    {logoText}
                                </span>
                            </a>
                        </Link>
                        <span className="text-gray-600 font-bold px-5 hidden md:block">|</span>
                    </div>
                    <div className={`items-center justify-between w-full md:flex md:w-auto hidden`} id="navbar-user">
                        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            {navItems.map((item) => (
                                <NavItem key={item.href} href={item.href} label={item.label} />
                            ))}
                        </ul>
                    </div>
                </div>
                <div className='flex'>
                    <button type="button" className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded={isDropdownOpen} onClick={toggleDropdown}>
                        <span className="sr-only">Open user menu</span>
                        <img className="w-8 h-8 rounded-full" src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=2000" alt="user photo" />
                    </button>
                    <button data-collapse-toggle="navbar-user" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-user" aria-expanded={isMenuOpen} onClick={toggleMenu} >
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>

                </div>
                <div className={`w-full md:hidden ${isMenuOpen ? '' : 'hidden'}`} id="navbar-user">
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        {navItems.map((item) => (
                            <NavItem key={item.href} href={item.href} label={item.label} />
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};


const NavItem = ({ href, label }) => {
    return (
        <li>
            <Link href={href} legacyBehavior>
                <a className="text-[14px] font-sans block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                    {label}
                </a>
            </Link>
        </li>
    );
};

export default Header;
