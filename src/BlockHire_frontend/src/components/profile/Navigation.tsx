import { useState } from "react";

interface NavigationProps {
  stage: string;
  setStage: React.Dispatch<
    React.SetStateAction<"overview" | "projects" | "payments">
  >;
}

export default function Navigation({ stage, setStage }: NavigationProps) {
  return (
    <div className="w-fit flex flex-row justify-start items-start rounded-t-lg overflow-hidden border-b border-[#20202015]">
      <button
        onClick={() => setStage("overview")}
        className={`flex flex-1 justify-center items-center w-fit py-2 whitespace-nowrap px-8 cursor-pointer ${
          stage == "overview"
            ? "bg-[#2F89FC] text-white"
            : "bg-white text-[#20202094]"
        }`}
      >
        Overview
      </button>
      <button
        onClick={() => setStage("projects")}
        className={`flex flex-1 justify-center items-center w-fit py-2 whitespace-nowrap px-8 cursor-pointer ${
          stage == "projects"
            ? "bg-[#2F89FC] text-white"
            : "bg-white text-[#20202094]"
        }`}
      >
        My Projects
      </button>
      <button
        onClick={() => setStage("payments")}
        className={`flex flex-1 justify-center items-center w-fit py-2 whitespace-nowrap px-8 cursor-pointer ${
          stage == "payments"
            ? "bg-[#2F89FC] text-white"
            : "bg-white text-[#20202094]"
        }`}
      >
        Payments
      </button>
    </div>
  );
}
