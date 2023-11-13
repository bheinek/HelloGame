import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { cx } from "@/shared/utils/classNames";

type Props = { children: ReactNode; link?: string; className?: string };

export const Card = ({ children, link, className }: Props) => {
  const cardClassName =
    "max-w-sm min-w-xs flex flex-col items-center border border-gray-300 rounded p-2";
  return link ? (
    <Link className={cx(cardClassName, className)} to={link}>
      {children}
    </Link>
  ) : (
    <div className={cx(cardClassName, className)}>{children}</div>
  );
};
