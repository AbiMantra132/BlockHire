import { Link } from "react-router";

interface FreelancerCardProps {
  name: string;
  job: string;
  status: "active" | "passed";
  profile: string;
  isWhite?: boolean;
}

export default function FreelancerCard({
  name,
  job,
  status,
  profile,
  isWhite,
}: FreelancerCardProps) {
  return (
    <Link
      to={"/freelancer/id"}
      className={`w-full flex flex-row cursor-pointer hover:bg-[#f9f9f9] justify-between items-center gap-3 px-4 py-2 rounded-md border border-[#20202015] ${
        isWhite && "bg-white"
      }`}
    >
      <div className="flex flex-row justify-start items-center gap-3">
        <div className="w-12 aspect-square border rounded-full border-[#20202015] flex justify-center items-center">
          <img src={profile} alt="img" className="w-full" />
        </div>
        <div className="flex flex-col justify-center items-start gap-[2px]">
          <span className="text-sm text-[#202020] font-medium opacity-80">
            {name}
          </span>
          <span className="text-xs text-[#20202061] font-medium">
            Worked on {job}
          </span>
        </div>
      </div>
      {status == "active" && (
        <div className="flex justify-center items-center gap-2 px-6 py-2 rounded-full bg-[#2F89FC]">
          <p className={`font-normal text-sm text-white`}>Active</p>
        </div>
      )}
      {status == "passed" && (
        <div className="flex justify-center items-center gap-2 px-6 py-2 rounded-full bg-[#b4b4b4]">
          <p className={`font-normal text-sm text-white`}>Passed</p>
        </div>
      )}
    </Link>
  );
}
