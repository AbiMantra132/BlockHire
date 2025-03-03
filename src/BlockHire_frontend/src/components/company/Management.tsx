import Bubble from "../ui/Bubble";
import CardProject from "../ui/CardProject";

interface ManagementProps {
  totalProject: number;
  completedProject: number;
  projects: [];
}

export default function Management({
  totalProject,
  completedProject,
  projects,
}: ManagementProps) {
  return (
    <div className="w-full bg-white rounded-b-xl px-5 py-8 flex flex-col justify-start items-start gap-4">
      {/* HEAD */}
      <div className="grid grid-flow-row grid-cols-2 flex-row justify-start items-stretch w-full gap-3">
        {/* PROJECT */}
        <Bubble
          title="Total Projects"
          count={totalProject}
          stat={2}
          detail="this month"
          isICP={false}
        />
        {/* COMPLATED */}
        <Bubble
          title="Projects Completed"
          count={completedProject}
          stat={1}
          detail="this month"
          isICP={false}
        />
      </div>
      {/* BODY */}
      <div className="flex flex-col justify-start items-start gap-4 w-full">
        <h3 className="font-semibold text-lg text-black">List Projects</h3>
        <div className="grid grid-flow-row grid-cols-2 flex-col justify-start items-start gap-2 w-full">
          {projects.map((project: any, index) => (
            <CardProject
              isForUser={false}
              title={project.title}
              status={project.status}
              level={project.level}
              deadline={project.deadline}
              freelancerApproved={project.freelancerApproved}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
