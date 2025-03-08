import { useEffect, useState } from "react";
import Navigation from "./Navigation";
import Overview from "./Overview";
import Projects from "./Projects";
import Payment from "./Payment";
import { useAuth } from "../../hooks/AuthProvider";

interface UserDashboardProps {
  activeProject: number;
  pendingPayment: number;
  totalEarning: number;
  myProject: [];
}

export default function UserDashboard() {
  const { callFunction, principal, loading } = useAuth();
  const [stage, setStage] = useState<"overview" | "projects" | "payments">(
    "overview"
  );
  const [data, setData] = useState<UserDashboardProps>({
    activeProject: 0,
    pendingPayment: 0,
    totalEarning: 0,
    myProject: [],
  });

  useEffect(() => {
    const fetch = async () => {
      if (!loading) {
        const res = await callFunction.getFreelancerDetail(principal);
        setData({
          activeProject: Number(res.ok.activeProject),
          pendingPayment: Number(res.ok.pendingPayment),
          totalEarning: Number(res.ok.totalEarning),
          myProject: res.ok.myProject,
        });
      }
    };
    fetch();
  }, [loading]);
  return (
    <div className="w-full flex flex-col justify-start items-start">
      <Navigation stage={stage} setStage={setStage} />
      {stage == "overview" && (
        <Overview
          activeProject={data.activeProject}
          pendingPayment={data.pendingPayment}
          totalEarning={data.totalEarning}
        />
      )}
      {stage == "projects" && <Projects myProject={data.myProject} />}
      {stage == "payments" && (
        <Payment
          pendingPayment={data.pendingPayment}
          totalEarning={data.totalEarning}
        />
      )}
    </div>
  );
}
