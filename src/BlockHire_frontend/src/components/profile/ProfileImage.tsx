import React from "react";
import P from "../ui/P";

export default function ProfileImage() {
  return (
    <div className="flex flex-row w-full gap-3 justify-start items-center pb-4 border-b border-[#2020201e]">
      <div className="relative flex justify-center items-center w-16 aspect-square border border-[#2020201e] rounded-full">
        <img src="/images/profile/user.svg" alt="img" className="w-8" />
        <img
          src="/images/profile/image.svg"
          alt="img"
          className="w-8 absolute -bottom-1 -right-1"
        />
      </div>
      <div className="flex flex-col justify-start items-start">
        <h3 className="font-semibold text-lg text-black">Name</h3>
        <P>Freelancer</P>
      </div>
    </div>
  );
}
