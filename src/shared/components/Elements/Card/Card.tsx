import { ReactNode } from "react";

type Props = { children: ReactNode };

export const Card = ({ children }: Props) => {
  return (
    <div className="max-w-sm flex flex-col items-center border border-gray-300 rounded p-2">
      {children}
    </div>
  );
};
