import { LEVEL } from "../../../utils/const";
import { Level } from "../../../utils/types";

type Props = { level: Level; gameName?: string };

export const Header = ({ level: headerType = LEVEL.l1, gameName }: Props) => {
  switch (headerType) {
    case LEVEL.l1:
      return <h1 className="text-3xl font-bold underline">Hello game</h1>;
    case LEVEL.l2:
      return <h2 className="text-2xl font-bold ">{gameName}</h2>;
  }
};
