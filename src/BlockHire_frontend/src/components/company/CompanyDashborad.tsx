import { useState } from "react";
import Navigation from "./Navigation";
import Overview from "./Overview";
import Management from "./Management";
import PostProject from "./PostProject";
import Financial from "./Financial";
import FreelancerList from "./FreelancerList";

export default function CompanyDashborad() {
  const [stage, setStage] = useState<
    "overview" | "projects" | "post" | "financial" | "freelancer"
  >("overview");
  return (
    <div className="w-full flex flex-col justify-start items-start">
      <Navigation stage={stage} setStage={setStage} />
      {stage == "overview" && <Overview />}
      {stage == "projects" && <Management />}
      {stage == "post" && <PostProject />}
      {stage == "financial" && <Financial />}
      {stage == "freelancer" && <FreelancerList />}
    </div>
  );
}
