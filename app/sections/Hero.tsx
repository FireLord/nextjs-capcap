import Image from "next/image";
import screenshot1 from "../../public/assets/screenshots/screenshot1.png";
import screenshot2 from "../../public/assets/screenshots/screenshot2.png";
import screenshot3 from "../../public/assets/screenshots/screenshot3.png";
import appStore from "../../public/assets/app_store.svg";
import googlePlay from "../../public/assets/google_play.svg";
import * as motion from "framer-motion/client"

export function Hero() {
    return (
        <div className="w-full bg-neutral-700 rounded-lg lg:mt-28">
            <div className="flex h-full py-20 px-12 justify-between gap-x-5 items-center">
                {/* Hero Text and Download icons */}
                <div className="flex flex-col items-start lg:w-1/2 gap-y-10">
                    <h1 className="text-5xl font-bold text-white">
                        Manually
                        <span className="text-[#f67254]"> create or edit </span>
                        captions
                    </h1>
                    <p className="text-neutral-300 font-medium text-xl ">
                        CapCap is an automatic subtitle and captions generator for videos.
                        60+ Languages supported for English Captioning. Reach global audience with English translation.
                    </p>

                    <div className="flex gap-x-6">
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

                {/* Hero Image */}
                <motion.div
                    animate={{ x: 100 }}
                    transition={{ ease: "easeOut", duration: 1 }}
                    className="hidden lg:flex gap-x-5 justify-end">
                    <Image
                        src={screenshot1}
                        alt="Screenshot 1"
                        className="h-[500px] w-[250px] rounded-lg object-fill"
                    />
                    <Image
                        src={screenshot2}
                        alt="Screenshot 1"
                        className="h-[500px] w-[250px] rounded-lg object-fill"
                    />
                    <Image
                        src={screenshot3}
                        alt="Screenshot 1"
                        className="h-[500px] w-[250px] rounded-lg object-fill"
                    />
                </motion.div>
            </div>
        </div>
    );
}
