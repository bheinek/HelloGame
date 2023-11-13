import { Link } from "react-router-dom";
import { LEVEL } from "../../../utils/const";
import { Level } from "../../../utils/types";

type Props = { level: Level; gameName?: string };

export const Header = ({ level: headerType = LEVEL.l1, gameName }: Props) => {
  switch (headerType) {
    case LEVEL.l1:
      return (
        <Link to="./">
          <h1 className="text-3xl font-bold underline">Hello game</h1>
        </Link>
      );
    case LEVEL.l2:
      return <h2 className="text-2xl font-bold ">{gameName}</h2>;
  }
};
