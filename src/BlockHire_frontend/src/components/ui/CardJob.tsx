import { Link } from "react-router";

interface CardJob {
  isFlex?: boolean;
  id: any;
  title: string;
  level: string;
  deadline: string;
  budget: number;
  scope: string;
}

export default function CardJob({
  isFlex,
  title,
  level,
  deadline,
  budget,
  scope,
  id,
}: CardJob) {
  return (
    <Link
      to={"/project/" + id}
      className={`${
        isFlex ? "flex-1" : "w-full max-w-64"
      }  min-w-64 max-w-96 bg-white border border-[#20202023] px-3 py-2 rounded-md flex flex-col justify-start items-start gap-5 cursor-pointer hover:bg-slate-50`}
    >
      {/* HEAD */}
      <div className="flex flex-row justify-start items-center gap-2">
        <img src="images/home/tech.svg" alt="tech" className="w-4" />
        <span className="font-normal text-sm opacity-60 text-black">
          {scope}
        </span>
      </div>
      {/* BODY */}
      <div className="flex flex-col justify-start items-start gap-1">
        <p className="font-semibold text-black text-base">{title}</p>
        <div className="flex flex-row justify-start items-center gap-2">
          <img
            src="images/home/expertise.svg"
            alt="expertise"
            className="w-4"
          />
          <span className="font-normal text-sm opacity-60 text-black">
            {level}
          </span>
        </div>
      </div>
      {/* FOOT */}
      <div className="flex flex-row justify-between items-end w-full">
        <div className="flex flex-col justify-start items-start gap-1">
          <span className="font-normal text-sm opacity-60 text-black">
            {deadline} by
          </span>
          <span className="font-semibold text-sm opacity-60 text-black">
            Taksu tech
          </span>
        </div>
        <div className="flex flex-row justify-end px-2 items-center gap-2">
          <p className="text-[#202020] font-semibold text-xl">{budget}</p>
          <img src="/images/profile/icp.png" alt="" className="h-5" />
        </div>
      </div>
    </Link>
  );
}
