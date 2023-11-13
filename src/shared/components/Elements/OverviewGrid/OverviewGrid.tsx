import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const OverviewGrid = ({ children }: Props) => {
  return <div className="flex gap-x-1">{children}</div>;
};
