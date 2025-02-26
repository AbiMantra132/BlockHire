import { ReactNode } from "react";
interface TitleProps {
  children: ReactNode;
  align?: "center" | "left" | "right";
  alpha?: boolean;
}

export default function Title({
  children,
  align = "left",
  alpha = false,
}: TitleProps) {
  return (
    <h2
      className={`font-bold text-4xl leading-tight
        ${align == "center" && "text-center"}
        ${align == "left" && "text-left"}
        ${align == "right" && "text-right"}
        ${alpha ? "text-white" : "text-black opacity-90"}
        `}
    >
      {children}
    </h2>
  );
}
