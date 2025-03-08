import React from "react";
import { Link } from "react-router";
interface CardProjectProps {
  id: string;
  isForUser: boolean;
  title: string;
  status: "open" | "";
  level: "entry" | "intermediate" | "expert";
  deadline: string;
  freelancerApproved: boolean;
}

export default function CardProject({
  id,
  isForUser,
  title,
  status,
  level,
  deadline,
  freelancerApproved,
}: CardProjectProps) {
  return (
    <Link
      to={"/project/" + id}
      className="w-full min-w-64 cursor-pointer hover:bg-[#fafafa] max-w- px-4 py-3 rounded-xl border border-[#20202015] flex-col justify-start items-start gap-3"
    >
      {/* HEAD */}
      <div className="flex flex-col justify-start items-start w-full gap-1">
        <div
          className={`w-fit px-4 py-1 rounded-full bg-[#2F89FC] text-white text-sm`}
        >
          {status == "open" && "Ongoing"}
        </div>
        <h3 className="text-black font-semibold text-lg">{title}</h3>
        <div className="w-fit gap-2 justify-start items-center flex flex-row">
          <img src="/images/profile/level.svg" alt="img" className="w-5" />
          <span className="text-black opacity-70 text-sm">{level}</span>
        </div>
      </div>
      {/* FOOTER */}
      <div className="flex flex-row justify-between items-end w-full mt-5">
        {isForUser ? (
          <div className="flex flex-col justify-start items-start gap-1">
            <span className="text-black opacity-40 text-sm">Project for</span>
            <span className="text-black opacity-70 text-sm">Company Name</span>
          </div>
        ) : (
          <div className="flex flex-col justify-start items-start gap-1">
            <span className="text-black opacity-40 text-sm">Worked on by</span>
            <span className="text-black opacity-70 text-sm">
              {freelancerApproved ? "Wiradarma" : "-"}
            </span>
          </div>
        )}
        <span className="text-[#FF0000] opacity-100 font-semibold text-base">
          {deadline}
        </span>
      </div>
    </Link>
  );
}
