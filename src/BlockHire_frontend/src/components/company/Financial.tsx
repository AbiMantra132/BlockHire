import Transaction from "../ui/Transaction";
import Bubble from "../ui/Bubble";
import Wallet from "../ui/Wallet";
import { useAuth } from "../../hooks/AuthProvider";
import P from "../ui/P";

interface FinancialProps {
  totalSpending: number;
  latestTransaction: [];
}

export default function Financial({
  totalSpending,
  latestTransaction,
}: FinancialProps) {
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
          stat={0}
          detail="Spending this month"
        />
        {/* PENDING */}
        <Bubble
          title="Pending Payments"
          count={0}
          isICP={true}
          stat={0}
          detail="Transactions in process"
        />
      </div>
      {/* WALLET */}
      <Wallet balance={0} address={user.walletAddress} />
      {/* BODY */}
      <div className="flex flex-col justify-start items-start gap-4 w-full">
        <h3 className="font-semibold text-lg text-black">
          Latest Transactions
        </h3>
        {latestTransaction?.length == 0 ? (
          <div className="w-full flex justify-start items-start">
            <P>There is no latest transaction</P>
          </div>
        ) : (
          <div className="flex flex-col justify-start items-start gap-2 w-full">
            <Transaction isForFreelancer={false} name="Sutha R" />
          </div>
        )}
      </div>
    </div>
  );
}
