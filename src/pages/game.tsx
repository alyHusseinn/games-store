import {  useLoaderData, Params } from "react-router-dom";
import { type GameType, getGame } from "../dataFetching";

// const gamePath = "/game/:gameId";
// interface paramsType extends LoaderFunctionArgs {
//   params: Params<ParamParseKey<typeof gamePath>>;
// }

export async function loader({params}: {params: Params<"gameId">}): Promise<GameType> {
  const gameID = Number(params.gameId);
  const game = getGame(gameID);
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
