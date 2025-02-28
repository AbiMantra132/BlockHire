import React from "react";
import ProfileImage from "./ProfileImage";
import DisplayData from "./DisplayData";

export default function UserProfile() {
  return (
    <div className="w-96 bg-white rounded-xl px-4 py-6 flex flex-col justify-start items-start gap-4">
      {/* PROFILE */}
      <ProfileImage />
      {/* BIO */}
      <DisplayData title="Bio" data="User bio" />
      {/* FULLNAME */}
      <DisplayData title="Fullname" data="User fullname" />
      {/* EMAIL */}
      <DisplayData title="Email" data="User email" />
      {/* PORTPOLIO */}
      <DisplayData title="Portofolio" data="User portpolio" />
      {/* SKILLS */}
      <DisplayData title="Skills" data="User skills" />
    </div>
  );
}
