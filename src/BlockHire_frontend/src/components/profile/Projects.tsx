import React from "react";
import P from "../ui/P";
import CardProject from "../ui/CardProject";
import Bubble from "../ui/Bubble";

interface ProjectsProps {
  myProject: [];
}

export default function Projects({ myProject }: ProjectsProps) {
  return (
    <div className="w-full bg-white rounded-b-xl px-5 py-8 flex flex-col justify-start items-start gap-4 flex-wrap">
      {/* HEAD */}
      <div className="flex flex-row justify-start items-stretch w-full gap-3">
        <Bubble
          title="Projects"
          count={0}
          isICP={false}
          stat={0}
          detail="this month"
        />
        <Bubble
          title="On Going"
          count={0}
          isICP={false}
          stat={0}
          detail="this month"
        />
      </div>
      <div className="w-full flex flex-col justify-start items-start gap-2">
        <h3 className="font-semibold text-lg text-black">Recent Projects</h3>
        {myProject.length == 0 ? (
          <P>There is no latest projects</P>
        ) : (
          <div className="w-full flex flex-row justify-start items-start gap-2 flex-wrap">
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
        )}
      </div>
    </div>
  );
}
