import { FC } from 'react';
import { TestimonialModel } from '../model/TestimonialModel';

type TestimonialCardProps = {
  testimonial: TestimonialModel;
};

const TestimonialCard: FC<TestimonialCardProps> = ({ testimonial }) => {
  const {
    title,
    date,
    author,
    subheading,
    review,
  } = testimonial;

  return (
    <div className="w-full bg-neutral-700 rounded-lg lg:w-72">
      <div className="flex flex-col p-4">
        <h1 className="text-white font-semibold flex flex-row items-center justify-between">
          {title}
          <span className="text-neutral-400 text-xs">{date}</span>
        </h1>

        <p className="flex gap-x-2 items-center">
          ⭐️⭐️⭐️⭐️⭐️
          <span className="text-neutral-400 text-xs">{author}</span>
        </p>

        <h1 className="text-neutral-400 text-xs pt-2">
          {subheading}
        </h1>

        <p className="pt-3 text-white">{review}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
