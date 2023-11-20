import { cx } from "@/shared/utils/classNames";
import { ButtonHTMLAttributes, ReactNode } from "react";
import { buttonSizes, buttonVariants } from "./utils";

type Props = {
  variant?: keyof typeof buttonVariants;
  size?: keyof typeof buttonSizes;
  children: ReactNode;
  className?: string;
  isLoading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  variant = "primary",
  size = "md",
  children,
  className,
  disabled,
  isLoading,
  ...rest
}: Props) => {
  const isDisabled = disabled || isLoading;

  const buttonBaseStyles =
    "flex items-center justify-center rounded-md font-semibold transition-colors focus:outline-0 disabled:cursor-not-allowed";

  return (
    <button
      className={cx(
        buttonBaseStyles,
        buttonVariants[variant],
        buttonSizes[size],
        className
      )}
      disabled={isDisabled}
      {...rest}
    >
      {children}
    </button>
  );
};
