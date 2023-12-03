import { Link, useLoaderData } from "react-router-dom";
import { getAllGames, GameType } from "../dataFetching";

export async function loader(): Promise<Array<GameType>> {
  const games = await getAllGames();
  return games;
}

function GamesShop() {
  const games: Array<GameType> = useLoaderData() as Array<GameType>;

  return (
    <div className="games-data">
      {games.map((game) => {
        return (
          <div className="game">
            <div className="name">{game.name}</div>
            <img src={game.background_image} alt={game.name + ", game"} />
            <Link to={`/games/${game.id}`}>open {game.name}</Link>
          </div>
        );
      })}
    </div>
  );
}

export default GamesShop;
