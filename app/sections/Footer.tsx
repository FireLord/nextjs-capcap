import Image from "next/image";
import Link from 'next/link';
import logo from "../../public/assets/logo.svg";
import appStore from "../../public/assets/app_store.svg";
import googlePlay from "../../public/assets/google_play.svg";

export function Footer() {
    return (
        <footer className="flex flex-col lg:flex-row w-full bg-[#E46042] p-5 gap-y-5 lg:p-20 lg:gap-x-10" id="contact">

            {/* Logo and description */}
            <div className="flex flex-col items-start gap-y-3 lg:gap-y-7 lg:w-1/4">
                <div className="flex gap-x-4 items-center">
                    <Image src={logo} alt="CapCap logo" className="h-14 w-14 rounded-lg" />
                    <h1 className="text-white font-medium text-4xl">
                        CapCap
                    </h1>
                </div>

                <p className="text-white lg:text-[15px] font-medium">
                    CapCap - Caption for video is a tool that helps you to generate captions for your images.
                </p>
            </div>

            {/* Links */}
            <div className="flex flex-col lg:w-3/4 gap-y-10">
                {/* Main rows */}
                <div className="flex flex-col gap-y-10 lg:flex-row justify-between">
                    {/* help and navigation links */}
                    <div className="flex flex-row lg:gap-x-20 justify-between">
                        {/* Main navigation */}
                        <div className="flex flex-col gap-y-4 items-start">
                            <h1 className="text-white font-bold text-xl">USE CAPCAP</h1>
                            <button className="text-white font-medium">
                                <Link href="#features">Features</Link>
                            </button>
                            <button className="text-white font-medium">
                                <Link href="#review">Review</Link>
                            </button>
                            <button className="text-white font-medium">
                                <Link href="#contact">Contact</Link>
                            </button>
                        </div>

                        {/* Help */}
                        <div className="flex flex-col justify-between">
                            <div className="flex flex-col gap-y-4 items-start">
                                <h1 className="text-white font-bold text-xl">NEED HELP?</h1>
                                <button className="text-white font-medium">
                                    <Link href="/privacy">Privacy policy</Link>
                                </button>
                            </div>

                            <div>
                                <h1 className="text-white font-bold text-xl">EMAIL US ON:</h1>
                                <a href="mailto:contact@capcap.in" className="text-white font-medium">contact@capcap.in</a>
                            </div>
                        </div>
                    </div>

                    {/* Mobile store links */}
                    <div className="flex lg:flex-col gap-y-4 items-end justify-between lg:justify-normal">
                        <h1 className="text-white font-bold text-xl">DOWNLOAD CAPCAP</h1>

                        <div className="lg:hidden flex flex-row items-center gap-x-5">
                        <button><Image src={appStore} alt="app store icon" className="w-7" /></button>
                        <button><Image src={googlePlay} alt="google play icon" className="w-7" /></button>
                        </div>

                        <button className="hidden text-white font-medium lg:flex flex-row items-center gap-x-5">
                            App Store
                            <span><Image src={appStore} alt="app store icon" className="w-7" /></span>
                        </button>
                        <button className="hidden text-white font-medium lg:flex flex-row items-center gap-x-5">
                            Google Play
                            <span><Image src={googlePlay} alt="google play icon" className="w-7" /></span>
                        </button>
                    </div>
                </div>

                {/* white divider */}
                <div className="h-[1px] bg-white w-full" />
            </div>
        </footer>
    );
}