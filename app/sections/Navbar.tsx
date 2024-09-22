import Image from "next/image";
import logo from "../..//public/assets/logo.svg";
import { ArrowDownTrayIcon } from "@heroicons/react/20/solid";
import { Bars3Icon } from "@heroicons/react/20/solid";

const navLinks = [
    { name: 'Features' },
    { name: 'Pricing' },
    { name: 'Contact' },
];

export function Navbar() {
    return (
        <nav className="flex w-full items-center justify-between px-5 py-4 lg:container lg:mx-auto lg:px-20">
            <div className="flex items-center gap-x-4">
                <Image src={logo} alt="CapCap logo" className="h-12 w-12 rounded-lg" />
                <h1 className="text-white font-medium text-2xl">
                    CapCap
                </h1>
            </div>

            <div className="flex items-center gap-x-6">
                <div className="hidden lg:flex pl-[74px] gap-x-14">
                    {navLinks.map((item, index) => (
                        <p className="font-medium text-white hover:text-[#E46042]" key={index}>
                            {item.name}
                        </p>
                    ))}
                </div>

                <Bars3Icon className="text-blue-50 size-6 lg:hidden" />

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