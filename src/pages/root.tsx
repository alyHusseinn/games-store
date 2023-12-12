import { useLoaderData } from "react-router-dom";
import { getAllGames, GameType } from "../dataFetching";
import MainSwiper from "../components/root/mainSwiper";
import SecSection from "../components/root/SecSection";
import SecSwiper from "../components/root/secSwiper";

export async function loader(): Promise<Array<GameType>> {
  const games = await getAllGames();
  return games;
}

function Root() {
  const games: Array<GameType> = useLoaderData() as Array<GameType>;

  return (
    <>
      <MainSwiper />
      <SecSection />
      <SecSwiper games={games} />
    </>
  );
}

export default Root;
