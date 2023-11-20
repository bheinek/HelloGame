import { GameBoardLayout, Heading } from "@/shared/components/_index";
import { ReactNode } from "react";
import { Page } from "./Page";

type Props = {
  gameTitle: string;
  gameLogo: string;
  game: ReactNode;
};

export const GamesPage = ({ gameTitle, gameLogo, game }: Props) => {
  return (
    <Page>
      <Heading variant="h2" logo={gameLogo}>
        {gameTitle}
      </Heading>
      <GameBoardLayout> {game}</GameBoardLayout>
    </Page>
  );
};
