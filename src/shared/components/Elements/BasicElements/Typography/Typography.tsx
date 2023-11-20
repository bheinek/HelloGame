import { cx } from "@/shared/utils/classNames";
import type { FC, HTMLAttributes } from "react";
import { textVariants } from "./utils";

type Props = {
  as?: keyof typeof textVariants;
  variant?: keyof typeof textVariants;
} & HTMLAttributes<HTMLHeadingElement>;

export const Typography: FC<Props> = ({
  children,
  className,
  as,
  variant = "p",
  ...rest
}) => {
  const Tag = as || variant;

  return (
    <Tag
      className={cx("font-semibold", textVariants[variant], className)}
      {...rest}
    >
      {children}
    </Tag>
  );
};
