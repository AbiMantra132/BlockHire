interface StepProps {
  isNext: boolean;
}

export default function Step({ isNext }: StepProps) {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="max-w-lg w-full flex justify-between items-center relative gap-3">
        <div className="flex justify-center items-center aspect-square w-12 rounded-full bg-[#2F89FC]">
          <span className="text-white font-semibold text-lg">1</span>
        </div>
        <div
          className={`w-full h-1 rounded-xl ${
            !isNext ? "bg-[#CDE1FB]" : "bg-[#2F89FC]"
          }`}
        ></div>
        <div
          className={`flex justify-center items-center aspect-square w-12 rounded-full  ${
            !isNext ? "bg-[#CDE1FB]" : "bg-[#2F89FC]"
          }`}
        >
          <span
            className={` font-semibold text-lg ${
              !isNext ? "text-[#2F89FC]" : "text-white"
            }`}
          >
            2
          </span>
        </div>
      </div>
    </div>
  );
}
