import P from "../ui/P";
import Message from "./Message";

interface OverviewProps {
  activeFreelancer: number;
  pendingRequest: number;
  totalProject: number;
  totalSpending: number;
}

export default function Overview({
  pendingRequest,
  totalProject,
  totalSpending,
  activeFreelancer,
}: OverviewProps) {
  return (
    <div className="w-full bg-white rounded-b-xl px-5 py-8 flex flex-col justify-start items-start gap-4">
      {/* HEAD */}
      <div className="grid grid-flow-col grid-cols-2 grid-rows-2 flex-row justify-start items-stretch w-full gap-3">
        {/* SPENDING */}
        <div className="flex flex-col justify-start items-start gap-3 flex-1 bg-[#CDE1FB] rounded-md px-3 py-4">
          <P>Total Spending</P>
          <div className="flex items-center justify-start w-full gap-2">
            <h3 className="font-semibold text-2xl text-black">
              {totalSpending}
            </h3>
            <img src="/images/profile/icp.png" alt="img" className="w-8" />
          </div>
          <div className="flex justify-start items-center gap-1">
            <img src="/images/profile/up.svg" alt="img" className="h-4" />
            <span className="text-sm text-[#2F89FC] font-medium">2</span>
            <span className="text-sm text-[#2F89FC] font-medium">
              {" "}
              this month
            </span>
          </div>
        </div>
        {/* PROJECT */}
        <div className="flex flex-col justify-start items-start gap-3 flex-1 bg-[#CDE1FB] rounded-md px-3 py-4">
          <P>Active Freelancer</P>
          <div className="flex items-center justify-start w-full gap-2">
            <h3 className="font-semibold text-2xl text-black">
              {activeFreelancer}
            </h3>
          </div>
          <div className="flex justify-start items-center gap-1">
            <img src="/images/profile/up.svg" alt="img" className="h-4" />
            <span className="text-sm text-[#2F89FC] font-medium">2</span>
            <span className="text-sm text-[#2F89FC] font-medium">
              {" "}
              this week
            </span>
          </div>
        </div>
        {/* PENDING */}
        <div className="flex flex-col justify-start items-start gap-3 flex-1 bg-[#CDE1FB] rounded-md px-3 py-4">
          <P>Pending Request</P>
          <div className="flex items-center justify-start w-full gap-2">
            <h3 className="font-semibold text-2xl text-black">
              {pendingRequest}
            </h3>
          </div>
          <div className="flex justify-start items-center gap-1">
            <img src="/images/profile/up.svg" alt="img" className="h-4" />
            <span className="text-sm text-[#2F89FC] font-medium">2</span>
            <span className="text-sm text-[#2F89FC] font-medium">
              {" "}
              projects approval
            </span>
          </div>
        </div>
        {/* TOTAL */}
        <div className="flex flex-col justify-start items-start gap-3 flex-1 bg-[#CDE1FB] rounded-md px-3 py-4">
          <P>Total Projects</P>
          <div className="flex items-center justify-start w-full gap-2">
            <h3 className="font-semibold text-2xl text-black">
              {totalProject}
            </h3>
          </div>
          <div className="flex justify-start items-center gap-1">
            <img src="/images/profile/up.svg" alt="img" className="h-4" />
            <span className="text-sm text-[#2F89FC] font-medium">1</span>
            <span className="text-sm text-[#2F89FC] font-medium">
              {" "}
              this month
            </span>
          </div>
        </div>
      </div>
      {/* BODY */}
      <div className="flex flex-col justify-start items-start gap-4 w-full">
        <h3 className="font-semibold text-lg text-black">New Messages</h3>
        <div className="flex flex-col justify-start items-start gap-2 w-full">
          <Message name="Wiradarma" count={1} />
        </div>
      </div>
    </div>
  );
}
