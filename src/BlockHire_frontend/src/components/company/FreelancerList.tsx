import Bubble from "../ui/Bubble";
import FreelancerCard from "../ui/FreelancerCard";

export default function FreelancerList() {
  return (
    <div className="w-full bg-white rounded-b-xl px-5 py-8 flex flex-col justify-start items-start gap-4">
      {/* HEAD */}
      <div className="flex flex-row justify-start items-stretch w-full gap-3">
        <Bubble
          title="Active Freelancers"
          count={20}
          isICP={false}
          stat={2}
          detail="Hired this month"
        />
      </div>
      {/* BODY */}
      <div className="flex flex-col justify-start items-start gap-4 w-full">
        <h3 className="font-semibold text-lg text-black">List Freelancers</h3>
        <div className="flex w-full flex-col justify-start items-start gap-2">
          <FreelancerCard name="" job="" status="passed" profile="" />
        </div>
      </div>
    </div>
  );
}
