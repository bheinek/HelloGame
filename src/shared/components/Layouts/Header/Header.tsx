import { Link } from "react-router-dom";
import { Level } from "../../../utils/types";

type Props = { level: Level; gameName?: string };

export const Header = ({ level: headerType = "h1", gameName }: Props) => {
  switch (headerType) {
    case "h1":
      return (
        <Link to="./">
          <h1 className="text-3xl font-bold underline">Hello game</h1>
        </Link>
      );
    case "h2":
      return <h2 className="text-2xl font-bold ">{gameName}</h2>;
  }
};
