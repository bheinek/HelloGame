import { ReactNode } from "react";
import { Level } from "../../../../utils/types";

type Props = {
  level?: Level;
  children: ReactNode;
} & JSX.IntrinsicElements["text"];

export const Typography = ({ level, children, ...rest }: Props) => {
  switch (level) {
    case "h1":
      return <h1 {...(rest as JSX.IntrinsicElements["h1"])}>{children}</h1>;
    case "h2":
      return <h2 {...(rest as JSX.IntrinsicElements["h2"])}>{children}</h2>;
    default:
      return <p {...(rest as JSX.IntrinsicElements["p"])}>{children}</p>;
  }
};
