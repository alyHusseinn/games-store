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
      {game.short_screenshots.map((img, idx) => (
        <img src={img.image} alt={game.name} key={idx} />
      ))}
    </div>
  );
}

export default Game;
