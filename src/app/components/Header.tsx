"use client"
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
    const [isMenuOpen, setMenuOpen] = useState(false);

    return (
        <header>
            <nav className="flex items-center justify-between h-16 bg-[rgb(60,174,226)] px-2 md:px-10">
                {/* Logo */}
                <div>
                    <Link href={"/"}><Image src="/logo.png" alt="logo" width={50} height={50} /></Link>
                </div>

                {/* Desktop Heading */}
                <h1 className="flex-grow ml-4 text-xs md:text-xl lg:text-2xl text-gray-800 font-bold">
                    Tuition-Free Education Program on Latest Technologies
                </h1>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden">
                    <button
                        className="text-black focus:outline-none"
                        onClick={() => setMenuOpen(!isMenuOpen)}
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                            ></path>
                        </svg>
                    </button>
                </div>

                {/* Desktop Navigation Links */}
                <div className="hidden md:flex gap-7">
                    <Link
                        href="/"
                        className="relative text-[rgb(1,1,3)] font-calibri text-lg group"
                    >
                        Home
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-700 group-hover:w-full transition-all"></span>
                    </Link>
                    <Link
                        href="/contact-us"
                        className="relative text-black font-calibri text-lg group text-nowrap"
                    >
                        Contact Us
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-700 group-hover:w-full transition-all"></span>
                    </Link>
                    <Link
                        href="/about"
                        className="relative text-black font-calibri text-lg group"
                    >
                        About
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-700 group-hover:w-full transition-all"></span>
                    </Link>
                </div>
            </nav>

            {/* Mobile Navigation Dropdown */}
            {isMenuOpen && (
                <div className="md:hidden bg-[rgb(138,217,231)] px-6 py-4">
                    <Link
                        href="/"
                        className="block py-2 text-[rgb(1,1,3)] font-calibri text-lg"
                        onClick={() => setMenuOpen(false)}
                    >
                        Home
                    </Link>
                    <Link
                        href="/contact-us"
                        className="block py-2 text-black font-calibri text-lg"
                        onClick={() => setMenuOpen(false)}
                    >
                        Contact Us
                    </Link>
                    <Link
                        href="/about"
                        className="block py-2 text-black font-calibri text-lg"
                        onClick={() => setMenuOpen(false)}
                    >
                        About
                    </Link>
                </div>
            )}
        </header>
    );
}
