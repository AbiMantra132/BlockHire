import { ReactNode } from "react";
interface PProps {
  children: ReactNode;
  type?: "normal" | "strong" | "ghost";
  align?: "center" | "left" | "right";
  alpha?: boolean;
}

export default function P({
  children,
  type = "normal",
  align = "left",
  alpha,
}: PProps) {
  return (
    <p
      className={`font-normal opacity-70 text-base
        ${type == "normal" && "opacity-70"}
        ${type == "strong" && "opacity-100"}
        ${type == "ghost" && "opacity-50"}
        ${align == "center" && "text-center"}
        ${align == "left" && "text-left"}
        ${align == "right" && "text-right"}
        ${alpha ? "text-white" : "text-black"}
        `}
    >
      {children}
    </p>
  );
}
