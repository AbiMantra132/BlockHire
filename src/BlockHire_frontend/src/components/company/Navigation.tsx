import { useState } from "react";

interface NavigationProps {
  stage: string;
  setStage: React.Dispatch<
    React.SetStateAction<
      "overview" | "projects" | "post" | "financial" | "freelancer"
    >
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
        Management
      </button>
      <button
        onClick={() => setStage("post")}
        className={`flex flex-1 justify-center items-center w-fit py-2 whitespace-nowrap px-8 cursor-pointer ${
          stage == "post"
            ? "bg-[#2F89FC] text-white"
            : "bg-white text-[#20202094]"
        }`}
      >
        Post Project
      </button>
      <button
        onClick={() => setStage("financial")}
        className={`flex flex-1 justify-center items-center w-fit py-2 whitespace-nowrap px-8 cursor-pointer ${
          stage == "financial"
            ? "bg-[#2F89FC] text-white"
            : "bg-white text-[#20202094]"
        }`}
      >
        Financials
      </button>
      <button
        onClick={() => setStage("freelancer")}
        className={`flex flex-1 justify-center items-center w-fit py-2 whitespace-nowrap px-8 cursor-pointer ${
          stage == "freelancer"
            ? "bg-[#2F89FC] text-white"
            : "bg-white text-[#20202094]"
        }`}
      >
        Freelancer
      </button>
    </div>
  );
}
