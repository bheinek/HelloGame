import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { cx } from "@/shared/utils/classNames";

type Props = {
  link?: string;
  isSelected?: boolean;
  isInactive?: boolean;
  children: ReactNode;
  className?: string;
};

export const Card = ({
  children,
  link,
  className,
  isSelected,
  isInactive,
}: Props) => {
  const cardClassName = cx(
    "flex flex-col items-center rounded-lg border p-6",
    isInactive ? "bg-gray-300" : "bg-white",
    isSelected ? "border-primary" : "border-gray-400",
    link && "hover:scale-105",
    className
  );

  return link ? (
    <Link className={cardClassName} to={link}>
      {children}
    </Link>
  ) : (
    <div className={cardClassName}>{children}</div>
  );
};
