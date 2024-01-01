import { useLoaderData } from "react-router-dom";
import { getAllGames, GameType } from "../dataFetching";
import useUpdateTitle from "../hooks/useUpdateTitle";
import GameCard from "../components/shop/gameCard";

export async function loader(): Promise<Array<GameType>> {
  const games = await getAllGames();
  return games;
}

function GamesShop() {
  const games: Array<GameType> = useLoaderData() as Array<GameType>;
  useUpdateTitle("Games Shop");

  return (
    <div className="games-data">
      {games.map((game, idx) => (
        <GameCard
          game={game}
          key={idx}
        />
      ))}
    </div>
  );
}

export default GamesShop;
