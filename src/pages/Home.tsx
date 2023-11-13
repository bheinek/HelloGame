import { gamesList } from "../modules/gamesList";
import { HomePageContent } from "../shared/components/_index";
import { Header } from "../shared/components/Layouts/Header/Header";
import { LEVEL } from "../shared/utils/const";

export const Home = () => {
  return (
    <>
      <Header level={LEVEL.l1} />
      <HomePageContent games={gamesList} />
    </>
  );
};
