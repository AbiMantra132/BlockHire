import React from "react";

export default function CardProject() {
  return (
    <div className="w-full min-w-64 cursor-pointer hover:bg-[#fafafa] max-w- px-4 py-3 rounded-xl border border-[#20202015] flex-col justify-start items-start gap-3">
      {/* HEAD */}
      <div className="flex flex-col justify-start items-start w-full gap-1">
        <div
          className={`w-fit px-4 py-1 rounded-full bg-[#2F89FC] text-white text-sm`}
        >
          Ongoing
        </div>
        <h3 className="text-black font-semibold text-lg">Project Name</h3>
        <div className="w-fit gap-2 justify-start items-center flex flex-row">
          <img src="/images/profile/level.svg" alt="img" className="w-5" />
          <span className="text-black opacity-70 text-sm">Level</span>
        </div>
      </div>
      {/* FOOTER */}
      <div className="flex flex-row justify-between items-end w-full mt-5">
        <div className="flex flex-col justify-start items-start gap-1">
          <span className="text-black opacity-40 text-sm">Date</span>
          <span className="text-black opacity-70 text-sm">Company Name</span>
        </div>
        <div className="flex justify-start items-center gap-1">
          <span className="text-[#202020] opacity-100 font-semibold text-base">
            2
          </span>

          <img src="/images/profile/icp.png" alt="img" className="w-6" />
        </div>
      </div>
    </div>
  );
}
