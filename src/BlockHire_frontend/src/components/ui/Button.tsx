import React from "react";

interface ButtonProps {
  type: "default" | "ghost";
  title: string;
  onclick?: () => void;
}

export default function Button({ type, title, onclick }: ButtonProps) {
  return (
    <button
      className={`w-fit text-base px-5 py-1 rounded-md cursor-pointer 
        ${
          type == "default" && "bg-[#2F89FC] text-white border border-[#2F89FC]"
        }
        ${
          type == "ghost" &&
          "bg-transparent text-[#2F89FC] border border-[#2F89FC]"
        }
        `}
      onClick={onclick}
    >
      {title}
    </button>
  );
}
