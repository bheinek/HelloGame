import { ReactNode } from "react";
import { Heading } from "../components/_index";

type Props = {
  children: ReactNode;
};

export const Page = ({ children }: Props) => {
  return (
    <>
      <Heading variant="h1" isHeaderSticky={true}>
        Hello Games
      </Heading>
      <div className={"bg-gray-100 p-6 "}>{children}</div>
    </>
  );
};
