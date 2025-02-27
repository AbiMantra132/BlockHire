interface CategoryCardProps {
  title: string;
  img: string;
  onclick: () => void;
  active: boolean;
}

export default function CategoryCard({
  title,
  img,
  onclick,
  active,
}: CategoryCardProps) {
  return (
    <div
      onClick={onclick}
      className="w-full max-w-96 bg-white rounded-xl gap-4 px-4 py-6 flex flex-col justify-start items-start"
    >
      <div className="flex flex-row justify-between items-start w-full">
        <img
          src={`images/createAccount/${img}`}
          alt="profile"
          className="w-16"
        />
        <div
          className={`flex justify-center items-center ${
            active ? "border-[#2F89FC]" : "border-[#CDE1FB]"
          } border-2 rounded-full p-1`}
        >
          <div
            className={`w-5 aspect-square rounded-full ${
              active ? "bg-[#2F89FC]" : "bg-transparent"
            }`}
          ></div>
        </div>
      </div>
      <p className="text-black font-semibold text-2xl opacity-80">{title}</p>
    </div>
  );
}
