"use client"

import Image from "next/image";
import { useState } from "react";
import logo from "../../public/assets/logo.svg";
import { ArrowDownTrayIcon } from "@heroicons/react/20/solid";
import { Bars3Icon } from "@heroicons/react/20/solid";

const navLinks = [
    { name: 'Features', link: '#features' },
    { name: 'Review', link: '#review' },
    { name: 'Contact', link: '#contact' },
];

export function Navbar() {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    return (
        <nav className="flex w-full items-center justify-between px-5 py-4 lg:container lg:mx-auto lg:px-20 lg:mt-5">
            <div className="flex items-center gap-x-4">
                <Image src={logo} alt="CapCap logo" className="h-12 w-12 rounded-lg" />
                <h1 className="text-white font-medium text-2xl">CapCap</h1>
            </div>

            <div className="flex items-center gap-x-6">
                <div className="hidden lg:flex pl-[74px] gap-x-14">
                    {navLinks.map((item, index) => (
                        <a key={index} href={item.link} className="text-white font-medium hover:text-[#f67254]">
                            {item.name}
                        </a>
                    ))}
                </div>

                <div className="lg:hidden">
                    <button onClick={toggleDropdown} className="text-white">
                        <Bars3Icon className="size-6" />
                    </button>
                    {isDropdownOpen && (
                        <div className="absolute top-16 right-5 bg-orange-700 rounded-md shadow-lg">
                            {navLinks.map((item, index) => (
                                <a
                                    key={index}
                                    href={item.link}
                                    className="block px-4 py-2 text-white hover:bg-neutral-700 transition rounded-md"
                                    onClick={() => setDropdownOpen(false)} // Close dropdown on link click
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    )}
                </div>

                <button className="hidden lg:flex px-6 py-2 bg-[#E46042] text-white font-medium rounded-3xl lg:hover:bg-orange-700 gap-x-1 items-center">
                    Download
                    <span>
                        <ArrowDownTrayIcon className="text-white size-6 animate-bounce" />
                    </span>
                </button>
            </div>
        </nav>
    );
}