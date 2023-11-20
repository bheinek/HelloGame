import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const OverviewGrid = ({ children }: Props) => {
  return <div className="flex flex-wrap gap-4">{children}</div>;
};
