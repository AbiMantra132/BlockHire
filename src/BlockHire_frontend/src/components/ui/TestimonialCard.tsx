import P from "./P";

interface TestimonialCardProps {
  title: string;
  category: string;
  testimonial: string;
  rating: number;
  img: string;
}

export default function TestimonialCard({
  title,
  category,
  testimonial,
  rating,
  img,
}: TestimonialCardProps) {
  return (
    <div className="w-full flex flex-1 flex-col justify-center items-center bg-[#E5F0F9]">
      {/* HEAD */}
      <div className="w-full flex relative justify-center items-center">
        <div className="bg-[#E5F0F9] rounded-full p-1 flex justify-center items-center z-10">
          <img
            src={`/images/home/${img}`}
            alt="testimonial"
            className="w-24 rounded-full"
          />
        </div>
        <div className="w-full bg-white absolute h-1/2 bottom-0 left-0 rounded-t-xl"></div>
      </div>
      {/* BODY */}
      <div className="bg-white rounded-b-xl px-6 py-4 w-full gap-1 flex flex-col justify-center items-center">
        <h4 className="font-semibold text-black opacity-90 text-xl text-center">
          {title}
        </h4>
        <span className="text-black font-sm opacity-40 mb-4">{category}</span>
        <P align="center">{testimonial}</P>
        <div className="flex flex-row justify-center items-center gap-2 mt-6">
          <img src="images/home/star.svg" alt="star" className="w-6" />
          <span className="text-[#2F89FC] text-xl font-bold">{rating}</span>
        </div>
      </div>
    </div>
  );
}
