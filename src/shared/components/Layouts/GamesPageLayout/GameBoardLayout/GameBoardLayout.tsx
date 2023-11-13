import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const GameBoardLayout = ({ children }: Props) => {
  return <div>{children}</div>;
};
