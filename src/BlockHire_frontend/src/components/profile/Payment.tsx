import React from "react";
import P from "../ui/P";
import Transaction from "../ui/Transaction";
import Wallet from "../ui/Wallet";
import { useAuth } from "../../hooks/AuthProvider";

export default function Payment() {
  const { user } = useAuth();
  return (
    <div className="w-full bg-white rounded-b-xl px-5 py-8 flex flex-col justify-start items-start gap-4">
      {/* HEAD */}
      <div className="flex flex-row justify-start items-stretch w-full gap-3">
        {/* EARN */}
        <div className="flex flex-col justify-start items-start gap-3 flex-1 bg-[#CDE1FB] rounded-md px-3 py-4">
          <P>Total Earnings</P>
          <div className="flex items-center justify-start w-full gap-2">
            <h3 className="font-semibold text-2xl text-black">2</h3>
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
        {/* PENDING */}
        <div className="flex flex-col justify-start items-start gap-3 flex-1 bg-[#CDE1FB] rounded-md px-3 py-4">
          <P>Pending Payments</P>
          <div className="flex items-center justify-start w-full gap-2">
            <h3 className="font-semibold text-2xl text-black">1</h3>
            <img src="/images/profile/icp.png" alt="img" className="w-8" />
          </div>
          <div className="flex justify-start items-center gap-1">
            <img src="/images/profile/up.svg" alt="img" className="h-4" />
            <span className="text-sm text-[#2F89FC] font-medium">2</span>
            <span className="text-sm text-[#2F89FC] font-medium">
              {" "}
              in proses
            </span>
          </div>
        </div>
      </div>
      {/* WALLET */}
      <Wallet balance={2} address={user.walletAddress} />

      {/* BODY */}
      <div className="flex flex-col justify-start items-start gap-4 w-full">
        <h3 className="font-semibold text-lg text-black">
          Latest Transactions
        </h3>
        <div className="flex flex-col justify-start items-start gap-2 w-full">
          <Transaction isForFreelancer={true} name="Company" />
          <Transaction isForFreelancer={true} name="Company" />
          <Transaction isForFreelancer={true} name="Company" />
        </div>
      </div>
    </div>
  );
}
