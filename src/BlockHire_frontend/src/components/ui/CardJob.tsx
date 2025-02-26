export default function CardJob() {
  return (
    <div className="w-full max-w-64 min-w-64 bg-white border border-[#20202023] px-3 py-2 rounded-md flex flex-col justify-start items-start gap-5 cursor-pointer hover:bg-slate-50">
      {/* HEAD */}
      <div className="flex flex-row justify-start items-center gap-2">
        <img src="images/home/tech.svg" alt="tech" className="w-4" />
        <span className="font-normal text-sm opacity-60 text-black">Tech</span>
      </div>
      {/* BODY */}
      <div className="flex flex-col justify-start items-start gap-1">
        <p className="font-semibold text-black text-base">Frontend Developer</p>
        <div className="flex flex-row justify-start items-center gap-2">
          <img
            src="images/home/expertise.svg"
            alt="expertise"
            className="w-4"
          />
          <span className="font-normal text-sm opacity-60 text-black">
            Intermediate
          </span>
        </div>
      </div>
      {/* FOOT */}
      <div className="flex flex-row justify-between items-end w-full">
        <div className="flex flex-col justify-start items-start gap-1">
          <span className="font-normal text-sm opacity-60 text-black">
            June 16th, 2024 by
          </span>
          <span className="font-semibold text-sm opacity-60 text-black">
            Taksu.tech
          </span>
        </div>
        <p className="text-[#07C600] font-semibold text-base">$200</p>
      </div>
    </div>
  );
}
