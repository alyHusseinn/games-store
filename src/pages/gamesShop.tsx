import { useLoaderData } from "react-router-dom";
import { getAllGames, GameType } from "../dataFetching";
import useUpdateTitle from "../hooks/useUpdateTitle";
import GameCard from "../components/shop/gameCard";
import ShopMainImg from "../assets/imgs/shop-main.jpg";

export async function loader(): Promise<Array<GameType>> {
  const games = await getAllGames();
  return games;
}

function GamesShop() {
  const games: Array<GameType> = useLoaderData() as Array<GameType>;
  useUpdateTitle("Games Shop");

  return (
    <div className="games-shop">
      <div className="main-bg-img">
        <img src={ShopMainImg} />
        <h1>Gaming Store...</h1>
      </div>
      <div className="games-data">
        {games.map((game, idx) => (
          <GameCard game={game} key={idx} />
        ))}
      </div>
    </div>
  );
}

export default GamesShop;
