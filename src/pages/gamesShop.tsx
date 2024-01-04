import { useLoaderData } from "react-router-dom";
import { getAllGames, GameType } from "../dataFetching.ts";
import useUpdateTitle from "../hooks/useUpdateTitle";
import GameCard from "../components/shop/gameCard";
import ShopMainImg from "../assets/imgs/shop-main.jpg";
import { useRef } from "react";
import useScrollTop from "../hooks/useScrollTop.tsx";

export async function loader(): Promise<Array<GameType>> {
  const games = await getAllGames();
  return games;
}

function GamesShop() {
  const games: Array<GameType> = useLoaderData() as Array<GameType>;
  const shopRef = useRef<HTMLDivElement | null>(null);
  useUpdateTitle("Games Shop");
  useScrollTop();

  return (
    <div className="games-shop" ref={shopRef}>
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
