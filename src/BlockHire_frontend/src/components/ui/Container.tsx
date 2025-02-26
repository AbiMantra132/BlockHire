import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return (
    <div className="w-full flex justify-center items-center relative">
      <div className="w-full container px-8 mb-32">{children}</div>
    </div>
  );
}
