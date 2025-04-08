'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'

const NavLink = ({ href, children }) => {
  const handleClick = (e) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 64,
        behavior: 'smooth',
      });
    }
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      className="relative px-4 py-1 rounded-full transition-all duration-300
        text-white/80 text-sm md:text-base font-semibold
        hover:bg-white/10 hover:backdrop-blur-md focus:outline-none group"
    >
      <span className="relative z-10 tracking-tight">{children}</span>
    </Link>
  );
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [time, setTime] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { hour12: true }));
    };
    const intervalId = setInterval(updateTime, 1000);
    updateTime();
    return () => clearInterval(intervalId);
  }, []);

  return (
    <nav
      className={`transition-all duration-500 font-semibold fixed top-0 w-full z-50 ${
        scrolled
          ? 'bg-black/40 backdrop-blur-xl border-b border-white/10 shadow-xl'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Mobile Menu Toggle */}
          <div className="flex items-center gap-4 md:ml-8">
            <img src="/logo.png" className="w-10 ml-18" alt="logo" />
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Nav Links */}
          <div
            className={`absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto
              bg-black/80 md:bg-transparent backdrop-blur-xl md:backdrop-blur-0
              ${
                isMenuOpen ? 'flex' : 'hidden'
              } md:flex flex-col md:flex-row items-center 
              space-y-4 md:space-y-0 md:space-x-6 lg:space-x-10
              py-4 md:py-0 rounded-2xl md:rounded-none transition-all duration-300 font-semibold`}
          >
            <NavLink href="#landing">Landing</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#services">Experience</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#foundersnote">Tools & More</NavLink>

            {/* Time */}
            <div className="text-white/80 flex items-center gap-2 text-sm md:text-base font-semibold mr-16">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                viewBox="0 -960 960 960"
                width="20"
                fill="#FFFFFF80"
              >
                <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-40-82v-78q-33 0-56.5-23.5T360-320v-40L168-552q-3 18-5.5 36t-2.5 36q0 121 79.5 212T440-162Zm276-102q20-22 36-47.5t26.5-53q10.5-27.5 16-56.5t5.5-59q0-98-54.5-179T600-776v16q0 33-23.5 56.5T520-680h-80v80q0 17-11.5 28.5T400-560h-80v80h240q17 0 28.5 11.5T600-440v120h40q26 0 47 15.5t29 40.5Z" />
              </svg>
              <span className="whitespace-nowrap">{time} IST</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;