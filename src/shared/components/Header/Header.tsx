import { FC } from "react";

type Props = { plural?: boolean };

export const Header: FC<Props> = ({ plural = false }) => {
  return <h1>Hello game{plural ? "s" : null}</h1>;
};
