import { useLoaderData, Params } from "react-router-dom";
import { type GameType, getGameDetails } from "../dataFetching";
import useUpdateTitle from "../hooks/useUpdateTitle";
import GameSwiper from "../components/game/gameSwiper";
import { useContext, useRef } from "react";
import useScrollTop from "../hooks/useScrollTop";
import { ContextType, MyContext } from "../Context/cartContext";


export async function loader({
  params,
}: {
  params: Params<"gameId">;
}): Promise<GameType> {
  const gameID = Number(params.gameId);
  const game = await getGameDetails(gameID);
  return game;
}

function Game() {
  const game: GameType = useLoaderData() as GameType;
  const { cart, addToCart, removeFromCart } = useContext(MyContext) as ContextType;
  const gameRef = useRef<HTMLDivElement | null>(null);
  useUpdateTitle(game.name);
  useScrollTop();

  const hasAdded = cart.includes(game.id);


  return (
    <div className="game" ref={gameRef}>
      <div className="game-name">{game.name}</div>
      <div className="game-info">
        <GameSwiper imgs={game.short_screenshots} />
        <div className="price-and-add-btn">
          <button className={hasAdded ? "added" : ""} onClick={hasAdded? () => removeFromCart(game.id): () => addToCart(game.id)}>
            {hasAdded ? "Added" : "Add to cart+"}
          </button>
          <h3 className="price">$5.5</h3>
        </div>
        
        <div className="description">
          <span>Description: </span> {game.description}
        </div><div className="release-geners">
          <div className="geners">
            <span>Geners: </span> {game.genres.map((gen) => gen.name + "  ")}
          </div>
          <div className="released">
            <span>Release:</span> {game.released}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Game;
