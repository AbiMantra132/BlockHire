import React from "react";
import P from "../ui/P";
import CardProject from "../ui/CardProject";

export default function Projects() {
  return (
    <div className="w-full bg-white rounded-b-xl px-5 py-8 grid grid-cols-2 flex-row justify-start items-start gap-2 flex-wrap">
      <CardProject
        isForUser={true}
        title="Frontend Development"
        deadline="20 Maret 2025"
        status="open"
        level="entry"
        freelancerApproved={false}
      />
      <CardProject
        isForUser={true}
        title="DAPPs Development"
        deadline="20 Maret 2025"
        status="open"
        level="entry"
        freelancerApproved={false}
      />
    </div>
  );
}
