import { gamesList } from "@/modules/gamesList";
import { Header, HomePageContent } from "@/shared/components/_index";

export const Home = () => {
  return (
    <>
      <Header level={"h1"} />
      <HomePageContent games={gamesList} />
    </>
  );
};
