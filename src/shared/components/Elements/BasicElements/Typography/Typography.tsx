import { ReactNode } from "react";
import { Level } from "@/shared/types/levels";
import { cx } from "@/shared/utils/classNames";

type Props = {
  level?: Level;
  children: ReactNode;
  className?: string;
} & JSX.IntrinsicElements["text"];

export const Typography = ({
  level = "body1",
  children,
  className,
  ...rest
}: Props) => {
  switch (level) {
    case "h1":
      return (
        <h1
          className={cx("", className)}
          {...(rest as JSX.IntrinsicElements["h1"])}
        >
          {children}
        </h1>
      );
    case "h2":
      return (
        <h2
          className={cx("", className)}
          {...(rest as JSX.IntrinsicElements["h2"])}
        >
          {children}
        </h2>
      );
    case "body1":
      return (
        <p
          className={cx("", className)}
          {...(rest as JSX.IntrinsicElements["p"])}
        >
          {children}
        </p>
      );
  }
};
