import Transaction from "../ui/Transaction";
import Bubble from "../ui/Bubble";
import Wallet from "../ui/Wallet";
import { useAuth } from "../../hooks/AuthProvider";

interface FinancialProps {
  totalSpending: number;
}

export default function Financial({ totalSpending }: FinancialProps) {
  const { user } = useAuth();
  return (
    <div className="w-full bg-white rounded-b-xl px-5 py-8 flex flex-col justify-start items-start gap-4">
      {/* HEAD */}
      <div className="flex flex-row justify-start items-stretch w-full gap-3">
        {/* SPENDING */}
        <Bubble
          title="Total Spending"
          count={totalSpending}
          isICP={true}
          stat={2}
          detail="Spending this month"
        />
        {/* PENDING */}
        <Bubble
          title="Pending Payments"
          count={2}
          isICP={true}
          stat={3}
          detail="Transactions in process"
        />
      </div>
      {/* WALLET */}
      <Wallet balance={2} address={user.walletAddress} />
      {/* BODY */}
      <div className="flex flex-col justify-start items-start gap-4 w-full">
        <h3 className="font-semibold text-lg text-black">
          Latest Transactions
        </h3>
        <div className="flex flex-col justify-start items-start gap-2 w-full">
          <Transaction isForFreelancer={false} name="Frelancer" />
          <Transaction isForFreelancer={false} name="Frelancer" />
          <Transaction isForFreelancer={false} name="Frelancer" />
        </div>
      </div>
    </div>
  );
}
