import { useEffect, useState } from "react";
import Navigation from "./Navigation";
import Overview from "./Overview";
import Management from "./Management";
import PostProject from "./PostProject";
import Financial from "./Financial";
import FreelancerList from "./FreelancerList";
import { useAuth } from "../../hooks/AuthProvider";

interface Data {
  activeFreelancer: number;
  completedProject: number;
  pendingRequest: number;
  totalProject: number;
  totalSpending: number;
}

export default function CompanyDashborad() {
  const [stage, setStage] = useState<
    "overview" | "projects" | "post" | "financial" | "freelancer"
  >("overview");
  const { callFunction, principal } = useAuth();
  const [data, setData] = useState<Data>({
    activeFreelancer: 0,
    completedProject: 0,
    pendingRequest: 0,
    totalProject: 0,
    totalSpending: 0,
  });
  const [projects, setProjects] = useState<[]>([]);
  useEffect(() => {
    const initData = async () => {
      if (callFunction) {
        const res = await callFunction.getCompanyDetailProject(principal);
        if ("ok" in res) {
          const resProjects =
            await callFunction.getProjectsByPrincipalCompanyId(principal);
          if ("ok" in res) {
            setProjects(resProjects);
            setData(res.ok);
          }
        }
      }
    };
    initData();
  }, [callFunction]);
  return (
    <div className="w-full flex flex-col justify-start items-start">
      <Navigation stage={stage} setStage={setStage} />
      {stage == "overview" && (
        <Overview
          activeFreelancer={Number(data.activeFreelancer)}
          pendingRequest={Number(data.pendingRequest)}
          totalProject={Number(data.totalProject)}
          totalSpending={Number(data.totalSpending)}
        />
      )}
      {stage == "projects" && (
        <Management
          completedProject={Number(data.completedProject)}
          totalProject={Number(data.totalProject)}
          projects={projects}
        />
      )}
      {stage == "post" && <PostProject />}
      {stage == "financial" && (
        <Financial
          totalSpending={Number(data.totalSpending)}
          latestTransaction={[]}
        />
      )}
      {stage == "freelancer" && (
        <FreelancerList activeFreelancer={Number(data.activeFreelancer)} />
      )}
    </div>
  );
}
