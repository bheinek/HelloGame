import { gamesList } from "../modules/gamesList";
import { HomePageContent } from "../shared/components/_index";
import { Header } from "../shared/components/Layouts/Header/Header";

export const Home = () => {
  return (
    <>
      <Header level={"h1"} />
      <HomePageContent games={gamesList} />
    </>
  );
};
