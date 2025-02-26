import P from "./P";

interface AboutListProps {
  title: string;
  subtitle: string;
  img: string;
  alpha?: boolean;
}

export default function AboutList({
  title,
  subtitle,
  img,
  alpha = false,
}: AboutListProps) {
  return (
    <div className="flex flex-row justify-start items-start gap-3">
      <img src={`images/home/${img}`} alt="about" className="w-8" />
      <div className="flex flex-col justify-start items-start gap-1">
        <h3
          className={`font-semibold text-xl ${
            alpha ? "text-white" : "text-black opacity-90"
          }`}
        >
          {title}
        </h3>
        {alpha ? <P alpha={true}>{subtitle}</P> : <P>{subtitle}</P>}
      </div>
    </div>
  );
}
