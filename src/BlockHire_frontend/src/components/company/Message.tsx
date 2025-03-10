import { useState } from "react";
import RoomChat from "../ui/RoomChat";

interface MessageProps {
  name: string;
  count: number;
  img?: string;
}

export default function Message({ name, count, img }: MessageProps) {
  const [isShow, setIsShow] = useState<boolean>(false);
  const handlerMessage = (value: boolean) => {
    if (value) {
      setIsShow(true);
    } else {
      setIsShow(false);
    }
  };
  return (
    <div
      onClick={() => handlerMessage(true)}
      className="w-full flex flex-row cursor-pointer hover:bg-[#f9f9f9] justify-start items-center gap-3 px-4 py-2 rounded-md border border-[#20202015]"
    >
      <div className="w-12 aspect-square border rounded-full border-[#20202015] flex justify-center items-center">
        <img
          src={img ? img : "/images/freelancer/sampleProfile.png"}
          alt="img"
          className="w-full"
        />
      </div>
      <div className="flex flex-col justify-center items-start gap-[2px]">
        <span className="text-sm text-[#202020] font-medium opacity-80">
          {name}
        </span>
        <span className="text-xs text-[#2F89FC] font-medium">
          +{count} messages
        </span>
      </div>
      <RoomChat isActive={isShow} onClick={() => handlerMessage(false)} />
    </div>
  );
}
