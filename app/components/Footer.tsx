import Image from "next/image";
import logo from "../../public/assets/logo.svg";
import { ArrowDownTrayIcon } from "@heroicons/react/20/solid";

export function Footer() {
    return (
        <footer className="flex flex-row w-full bg-[#E46042] py-20 px-20 gap-x-10">

            {/* Logo and download button */}
            <div className="flex flex-col items-start gap-y-7 w-1/4">
                <div className="flex gap-x-4 items-center">
                    <Image src={logo} alt="CapCap logo" className="h-14 w-14" />
                    <h1 className="text-white font-medium text-4xl">
                        CapCap
                    </h1>
                </div>

                <p className="text-white text-sm font-medium">
                    CapCap - Caption for video is a tool that helps you to generate captions for your images.
                </p>
            </div>

            {/* Links */}
            <div className="flex flex-col w-3/4 gap-y-10">
                {/* Main rows */}
                <div className="flex flex-row justify-between">
                    {/* help and navigation links */}
                    <div className="flex flex-row gap-x-20">
                        {/* Main navigation */}
                        <div className="flex flex-col gap-y-4 items-start">
                            <h1 className="text-white font-bold text-xl">USE CAPCAP</h1>
                            <button className="text-white font-medium">Features</button>
                            <button className="text-white font-medium">Pricing</button>
                            <button className="text-white font-medium">Contact</button>
                        </div>

                        {/* Help */}
                        <div className="flex flex-col h-full justify-between">
                            <div className="flex flex-col gap-y-4 items-start">
                                <h1 className="text-white font-bold text-xl">NEED HELP?</h1>
                                <button className="text-white font-medium">Privacy policy</button>
                            </div>

                            <div>
                                <h1 className="text-white font-bold text-xl">EMAIL US ON:</h1>
                                <a href="mailto:contact@capcap.in" className="text-white font-medium">contact@capcap.in</a>
                            </div>
                        </div>
                    </div>

                    {/* Mobile store links */}
                    <div className="flex flex-col gap-y-4 items-end">
                        <h1 className="text-white font-bold text-xl">DOWNLOAD CAPCAP</h1>
                        <button className="text-white font-medium">Google Play</button>
                        <button className="text-white font-medium">App Store</button>
                    </div>
                </div>

                {/* white divider */}
                <div className="h-[1px] bg-white w-full" />
            </div>
        </footer>
    );
}