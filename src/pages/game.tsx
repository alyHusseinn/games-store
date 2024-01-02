import {  useLoaderData, Params } from "react-router-dom";
import { type GameType, getGameDetails } from "../dataFetching";
import useUpdateTitle from "../hooks/useUpdateTitle";
import GameSwiper from "../components/game/gameSwiper";

// const gamePath = "/game/:gameId";
// interface paramsType extends LoaderFunctionArgs {
//   params: Params<ParamParseKey<typeof gamePath>>;
// }

export async function loader({params}: {params: Params<"gameId">}): Promise<GameType> {
  const gameID = Number(params.gameId);
  const game = await getGameDetails(gameID);
  return game;
}

function Game() {
  const game: GameType = useLoaderData() as GameType;
  useUpdateTitle(game.name);

  return (
    <div className="game">
      <div className="game-name">{game.name}</div>
      <div className="game-info">
        <GameSwiper imgs={game.short_screenshots}/>
        <div className="info">
          <div className="description">
            {game.description}
          </div>
          <div className="geners">
           Geners: {game.genres.map(gen => gen.name + "  ")}
          </div>
          <div className="released">
            Release: {game.released}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Game;
