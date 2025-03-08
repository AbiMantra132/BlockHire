import React from "react";
import P from "../ui/P";
import CardProject from "../ui/CardProject";

interface ProjectsProps {
  myProject: [];
}

export default function Projects({ myProject }: ProjectsProps) {
  return (
    <div className="w-full bg-white rounded-b-xl px-5 py-8 grid grid-cols-2 flex-row justify-start items-start gap-2 flex-wrap">
      {myProject.map((project: any, index) => (
        <CardProject
          id="dummy"
          isForUser={true}
          title="Frontend Development"
          deadline="20 Maret 2025"
          status="open"
          level="entry"
          freelancerApproved={false}
          key={index}
        />
      ))}
    </div>
  );
}
