interface CardServiceProps {
  image: string;
  title: string;
}

export default function CardService({ image, title }: CardServiceProps) {
  return (
    <div className="min-w-52 w-52 p-2 rounded-md overflow-hidden bg-[#CDE1FB] cursor-pointer hover:bg-[#c4d7f0]">
      <div className="w-full aspect-square rounded-md bg-[#2F89FC] flex justify-center items-center">
        <img src={`images/home/${image}`} alt="service icon" className="w-20" />
      </div>
      <div className="flex justify-start items-start px-1 py-2">
        <p className="text-[#2F89FC] font-semibold text-base">{title}</p>
      </div>
    </div>
  );
}
