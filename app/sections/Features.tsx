import Image from "next/image";
import screenshot1 from "../../public/assets/screenshots/screenshot1.png";
import screenshot2 from "../../public/assets/screenshots/screenshot2.png";
import screenshot3 from "../../public/assets/screenshots/screenshot3.png";
import screenshot4 from "../../public/assets/screenshots/screenshot4.png";

export function Features() {
    return (
        <div className="flex flex-col items-center mt-20 lg:mt-28 gap-y-4" id="features">
            <h1 className="text-white text-center font-medium text-4xl lg:text-6xl">
                What do we offer?
            </h1>
            <p className="text-neutral-300 text-center text-xl lg:text-2xl lg:mx-40">
                We offer a tool that generates captions for videos.
                This tool is useful for content creators who want to make their videos more accessible to a wider audience.
            </p>

            {/* Feature 1 */}
            <div className="mt-20 lg:mt-28 flex flex-col-reverse gap-x-5 justify-between lg:flex-row">
                <div className="flex flex-col gap-y-6 py-10 justify-center lg:w-1/2 lg:pr-24">
                    <h1 className="text-white text-4xl text-center lg:text-start lg:text-6xl">
                        Translate to multiple languages
                    </h1>
                    <p className="text-neutral-300 text-xl text-center lg:text-start">
                        Our tool can translate captions to multiple languages.
                        This is useful for content creators who want to reach a global audience.
                    </p>
                </div>

                <div className="flex items-center gap-x-4 justify-center">
                    <Image src={screenshot1} alt="Screenshot of CapCap" className="h-[400px] w-1/2 lg:h-[600px] lg:w-[300px] rounded-lg" />
                    <Image src={screenshot2} alt="Screenshot of CapCap" className="h-[400px] w-1/2 lg:h-[600px] lg:w-[300px] rounded-lg" />
                </div>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col-reverse gap-x-5 justify-between lg:flex-row-reverse lg:pt-14">
                <div className="flex flex-col gap-y-6 py-10 justify-center lg:w-1/2 lg:pl-24">
                    <h1 className="text-white text-4xl text-center lg:text-start lg:text-6xl">
                        Font customization
                    </h1>
                    <p className="text-neutral-300 text-xl text-center lg:text-start">
                        Our tool allows you to customize the font of the captions.
                        This is useful for content creators who want to match the captions with the style of their videos.
                    </p>
                </div>

                <div className="flex items-center gap-x-4 justify-center">
                    <Image src={screenshot3} alt="Screenshot of CapCap" className="h-[400px] w-1/2 lg:h-[600px] lg:w-[300px] rounded-lg" />
                    <Image src={screenshot4} alt="Screenshot of CapCap" className="h-[400px] w-1/2 lg:h-[600px] lg:w-[300px] rounded-lg" />
                </div>
            </div>
        </div>
    );
}