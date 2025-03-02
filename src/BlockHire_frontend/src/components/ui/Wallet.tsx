interface WalletProps {
  balance: number;
  address: string;
}

export default function Wallet({ balance, address }: WalletProps) {
  return (
    <div className="w-full flex flex-col justify-start items-start gap-4 px-4 py-6 rounded-xl bg-[#2F89FC]">
      <h3 className="font-semibold text-lg text-white">My Wallet</h3>
      <div className="w-full flex flex-row justify-start items-stretch gap-2">
        {/* BALANCE */}
        <div className="min-w-fit flex flex-col justify-start items-start gap-2 px-3 pe-12 py-4 rounded-md bg-[#CDE1FB]">
          <p className="font-normal text-[#2F89FC] text-base">Balance</p>
          <h3 className="font-semibold text-3xl text-[#2F89FC]">
            {balance} ICP
          </h3>
        </div>
        {/* ADDRES */}
        <div className="w-full bg-[#CDE1FB] rounded-md flex flex-col justify-center items-start px-3 gap-2">
          <p className="font-normal text-[#2F89FC] text-base">Address</p>
          <div className="w-full bg-white px-3 py-1 rounded-md">
            <p className="font-normal text-[#202020de] text-base">{address}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
