import React from "react";
import P from "../ui/P";
import SkillOpt from "../ui/SkillOpt";

export default function WorkerDetail() {
  return (
    <div className="w-full bg-white rounded-xl px-5 py-8 flex flex-row justify-start items-start gap-8">
      <div className="flex flex-col justify-start items-start gap-4 flex-1">
        {/* NAME */}
        <div className="flex flex-col justify-start items-start gap-2 w-full">
          <P type="ghost">Full Name</P>
          <p className="text-base text-[#202020] font-medium">FreelancerName</p>
        </div>
        {/* EMAIL */}
        <div className="flex flex-col justify-start items-start gap-2 w-full">
          <P type="ghost">Email</P>
          <p className="text-base text-[#202020] font-medium">FreelancerName</p>
        </div>
        {/* DISPLAY NAME */}
        <div className="flex flex-col justify-start items-start gap-2 w-full">
          <P type="ghost">Display Name</P>
          <p className="text-base text-[#202020] font-medium">FreelancerName</p>
        </div>
        {/* PORTPOLIO */}
        <div className="flex flex-col justify-start items-start gap-2 w-full">
          <P type="ghost">Portpolio Link</P>
          <p className="text-base text-[#202020] font-medium">FreelancerName</p>
        </div>
        {/* SKILLS */}
        <div className="flex flex-col justify-start items-start gap-2 w-full">
          <P type="ghost">Skills</P>
          <SkillOpt isActive={true} skill="Website" notClick={true} />
        </div>
      </div>
      <div className="flex flex-row justify-start items-start gap-4 flex-1">
        {/* BIO */}
        <div className="flex flex-col justify-start items-start gap-2 w-full">
          <P type="ghost">Personal Bio</P>
          <p className="text-base text-[#202020] font-medium">FreelancerName</p>
        </div>
      </div>
    </div>
  );
}
