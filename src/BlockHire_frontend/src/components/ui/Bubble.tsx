import P from "./P";

interface BubbleProps {
  title: string;
  count: number;
  isICP: boolean;
  stat: number;
  detail: string;
}

export default function Bubble({
  title,
  count,
  isICP,
  stat,
  detail,
}: BubbleProps) {
  return isICP ? (
    <div className="flex flex-col justify-start items-start gap-3 flex-1 bg-[#CDE1FB] rounded-md px-3 py-4">
      <P>{title}</P>
      <div className="flex items-center justify-start w-full gap-2">
        <h3 className="font-semibold text-2xl text-black">{count}</h3>
        <img src="/images/profile/icp.png" alt="img" className="w-8" />
      </div>
      <div className="flex justify-start items-center gap-1">
        <img src="/images/profile/up.svg" alt="img" className="h-4" />
        <span className="text-sm text-[#2F89FC] font-medium">{stat}</span>
        <span className="text-sm text-[#2F89FC] font-medium"> {detail}</span>
      </div>
    </div>
  ) : (
    <div className="flex flex-col justify-start items-start gap-3 flex-1 bg-[#CDE1FB] rounded-md px-3 py-4">
      <P>{title}</P>
      <div className="flex items-center justify-start w-full gap-2">
        <h3 className="font-semibold text-2xl text-black">{count}</h3>
      </div>
      <div className="flex justify-start items-center gap-1">
        <img src="/images/profile/up.svg" alt="img" className="h-4" />
        <span className="text-sm text-[#2F89FC] font-medium">{stat}</span>
        <span className="text-sm text-[#2F89FC] font-medium"> {detail}</span>
      </div>
    </div>
  );
}
