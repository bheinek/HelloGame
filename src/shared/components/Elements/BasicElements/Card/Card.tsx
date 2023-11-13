import { ReactNode } from "react";
import { Link } from "react-router-dom";

type Props = { children: ReactNode; link?: string };

export const Card = ({ children, link }: Props) => {
  const className =
    "max-w-sm min-w-xs flex flex-col items-center border border-gray-300 rounded p-2";
  return link ? (
    <Link className={className} to={link}>
      {children}
    </Link>
  ) : (
    <div className={className}>{children}</div>
  );
};
