import P from "../ui/P";

interface DisplayDataProps {
  title: string;
  data: string;
}

export default function DisplayData({ title, data }: DisplayDataProps) {
  return (
    <div className="w-full flex flex-col justify-start items-start gap-2 py-1">
      <div className="w-full flex justify-between items-center">
        <h3 className="font-semibold text-lg text-black">{title}</h3>
        <button className="w-8 rounded-full aspect-square bg-transparent cursor-pointer">
          <img src="/images/profile/pen.svg" alt="img" className="w-full" />
        </button>
      </div>
      <div className="flex w-full justify-start items-start">
        <P>{data}</P>
      </div>
    </div>
  );
}
