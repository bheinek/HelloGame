import { cx } from "@/shared/utils/classNames";
import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Typography } from "../../../_index";
import { headerBaseStyles } from "./utils";
import { ROUTES } from "@/router/routes";

type Props = {
  children: ReactNode;
  variant?: keyof typeof headerBaseStyles;
  isHeaderSticky?: boolean;
  logo?: string;
  link?: string;
  className?: string;
};

export const Heading = ({
  variant = "h1",
  children,
  link = ROUTES.home,
  logo,
  isHeaderSticky,
  className,
}: Props) => {
  const headerContent = (
    <>
      <img src={logo} />
      <Typography variant={variant} as={variant}>
        {children}
      </Typography>
    </>
  );
  return (
    <header
      className={cx(
        headerBaseStyles[variant],
        isHeaderSticky && `sticky z-10`,
        className
      )}
    >
      {variant === "h1" ? (
        <Link to={link}>{headerContent}</Link>
      ) : (
        headerContent
      )}
    </header>
  );
};
