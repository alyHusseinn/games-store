import { useLoaderData } from "react-router-dom";
import { GameType, getGame } from "../dataFetching";

export async function loader({ params }): Promise<GameType> {
  const game = getGame(params.gameId);
  return game;
}

function Game() {
  const game: GameType = useLoaderData() as GameType;

  return (
    <div className="game">
      <div className="game-name">{game.name}</div>
      <img src={game.background_image} alt={game.name} />
    </div>
  );
}

export default Game;
