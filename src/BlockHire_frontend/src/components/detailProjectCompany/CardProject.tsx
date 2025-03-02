interface CardProjectProps {
  status: "ongoing" | "pending" | "passed";
}

export default function CardProject({ status }: CardProjectProps) {
  return (
    <div className="w-full min-w-64 cursor-pointer bg-white max-w- px-5 py-6 rounded-xl border border-[#20202015] flex-col justify-start items-start gap-3">
      {/* HEAD */}
      <div className="flex flex-col justify-start items-start w-full gap-1">
        {status == "ongoing" && (
          <div
            className={`w-fit px-4 py-1 rounded-full bg-[#2F89FC] text-white text-sm mb-2`}
          >
            Ongoing
          </div>
        )}
        {status == "pending" && (
          <div className="w-full flex justify-between items-center">
            <div
              className={`w-fit px-4 py-1 rounded-full bg-[#07C600] text-white text-sm mb-2`}
            >
              Pending
            </div>
            <div className="flex flex-row justify-end items-center gap-3">
              <button className="w-10 aspect-square rounded-full cursor-pointer flex justify-center items-center bg-[#07C600] hover:bg-[#2da729]">
                <img
                  src="/images/detailProject/check.svg"
                  alt="img"
                  className="w-5"
                />
              </button>
              <button className="w-10 aspect-square rounded-full cursor-pointer flex justify-center items-center bg-[#FF0000] hover:bg-[#d43030]">
                <img
                  src="/images/detailProject/close.svg"
                  alt="img"
                  className="w-5"
                />
              </button>
            </div>
          </div>
        )}
        <h3 className="text-black font-semibold text-lg">Project Name</h3>
        <div className="w-fit gap-2 justify-start items-center flex flex-row">
          <img src="/images/profile/level.svg" alt="img" className="w-5" />
          <span className="text-black opacity-70 text-sm">Level</span>
        </div>
      </div>
      {/* FOOTER */}
      <div className="flex flex-row justify-between items-end w-full mt-5">
        <div className="flex flex-col justify-start items-start gap-1">
          <span className="text-black opacity-40 text-sm">Worked on by</span>
          <span className="text-black opacity-70 text-sm">Freelance Name</span>
        </div>
        <div className="flex flex-row justify-end items-center gap-2">
          <span className="text-[#07C600] opacity-100 font-semibold text-lg">
            2.5
          </span>
          <img src="/images/detailProject/icp.png" alt="icp" className="w-8" />
        </div>
      </div>
    </div>
  );
}
