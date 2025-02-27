import { useState } from "react";

interface SkillOptProps {
  isActive?: boolean;
  isEmpty?: boolean;
  skill?: string;
  onclick?: () => void;
  setSkills?: React.Dispatch<React.SetStateAction<string[]>>;
}

export default function SkillOpt({
  isActive,
  onclick,
  skill,
  isEmpty = false,
  setSkills,
}: SkillOptProps) {
  const [newSkill, setNewSkill] = useState<string>("");

  const addSkill = () => {
    if (newSkill.trim() !== "" && setSkills) {
      setSkills((prev) => [...prev, newSkill.trim()]);
      setNewSkill("");
    }
  };

  return (
    <div
      className={`w-fit px-4 py-1 rounded-full flex justify-center items-center gap-2 border cursor-pointer ${
        isActive
          ? "bg-[#CDE1FB] border-[#CDE1FB]"
          : "bg-transparent border-[#20202021]"
      }`}
    >
      <div
        className="flex justify-center items-center w-3 aspect-square relative"
        onClick={onclick}
      >
        <div
          className={`w-full h-[2px] rounded-full ${
            isActive ? "bg-[#2F89FC]" : "bg-black opacity-60"
          }`}
        ></div>
        {!isActive && (
          <div
            className={`h-full w-[2px] rounded-full bg-black opacity-60 absolute`}
          ></div>
        )}
      </div>
      {isEmpty ? (
        <input
          type="text"
          className="text-sm outline-none w-20"
          placeholder="type here..."
          value={newSkill}
          onChange={(e) => setNewSkill(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              addSkill();
            }
          }}
          onBlur={addSkill}
        />
      ) : (
        <p
          className={` text-sm ${
            isActive ? "text-[#2F89FC]" : "text-black opacity-60"
          }`}
        >
          {skill}
        </p>
      )}
    </div>
  );
}
