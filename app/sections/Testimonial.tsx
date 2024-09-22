import TestimonialCard from '../components/TestimonialCard';
import { TestimonialModel } from '../model/TestimonialModel';

const testimonials: TestimonialModel[] = [
    {
        title: 'Awesome and easy',
        date: '5 mo ago',
        author: 'SierraF',
        subheading: 'iOS | Version 1.3.4 | United States',
        review: "I'm so glad I found this app. It's so easy to use and the results are amazing.",
    },
    {
        title: 'Just what I needed',
        date: '5 mo ago',
        author: 'Uday.Gupta',
        subheading: 'iOS | Version 1.2.7 | United States',
        review: "The app has good features, clean interface, and is easy to use. I've been using it for a few months now and I'm very happy with it. I highly recommend it.",
    },
    {
        title: 'Awesome and easy',
        date: '2 mo ago',
        author: 'dujcuksiic',
        subheading: 'iOS | Version 1.3.4 | United Arab Emirates',
        review: "Very smart",
    },
];

export function Testimonial() {
    return (
        <div className="flex flex-col items-center py-14 gap-y-4 pb-48">
            <h1 className="text-white text-center font-medium text-4xl lg:text-6xl">
                Trusted by our customers
            </h1>
            <p className="text-neutral-300 text-center text-xl lg:text-2xl lg:mx-40">
                CapCap is an automatic subtitle and captions generator for videos. 60+ Languages supported for English Captioning. Reach global audience with English translation.
            </p>

            {/* Testimonial Card */}
            <div className="flex flex-col w-full justify-center gap-y-5 lg:gap-x-14 pt-5 lg:flex-row">
                {testimonials.map((testimonial, index) => (
                    <TestimonialCard key={index} testimonial={testimonial} />
                ))}
            </div>
        </div>
    );
}