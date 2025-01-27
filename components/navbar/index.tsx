'use client';

import { components } from '@/configs';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeOverlay = () => setIsOpen(false);

  return (
    <nav className="relative px-6 py-6">
      <div className="mx-auto flex w-full max-w-2xl items-center justify-between text-left">
        <div className="flex w-full items-center justify-between">
          <div className="font-bold">Muhammad Zulfan Wahyudin.</div>
          {/* Mobile Menu Button */}
          <button
            className="block lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {!isOpen && <span className="text-2xl">☰</span>}
          </button>
        </div>
        <ul className="hidden w-full justify-start space-x-6 lg:flex lg:justify-end">
          {components.navbar.map(item => (
            <li key={item.href}>
              <Link href={item.href} className="hover:underline">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div
        className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-black bg-opacity-80 transition-opacity duration-300 ease-in-out ${
          isOpen
            ? 'pointer-events-auto opacity-100'
            : 'pointer-events-none opacity-0'
        }`}
        aria-hidden={!isOpen}
      >
        <button
          onClick={closeOverlay}
          aria-label="Close Menu"
          className="absolute right-6 top-6 text-3xl text-white transition-transform duration-200 hover:scale-110"
        >
          ✖
        </button>
        <ul
          className={`transform space-y-6 text-center transition-transform duration-300 ${
            isOpen ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
          }`}
        >
          {components.navbar.map(item => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-2xl text-white transition-colors duration-300 hover:underline"
                onClick={closeOverlay}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
