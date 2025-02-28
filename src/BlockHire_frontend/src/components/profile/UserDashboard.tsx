import { useState } from "react";
import Navigation from "./Navigation";
import Overview from "./Overview";
import Projects from "./Projects";
import Payment from "./Payment";

export default function UserDashboard() {
  const [stage, setStage] = useState<"overview" | "projects" | "payments">(
    "overview"
  );
  return (
    <div className="w-full flex flex-col justify-start items-start">
      <Navigation stage={stage} setStage={setStage} />
      {stage == "overview" && <Overview />}
      {stage == "projects" && <Projects />}
      {stage == "payments" && <Payment />}
    </div>
  );
}
