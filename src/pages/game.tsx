import { useLoaderData, Params } from "react-router-dom";
import { type GameType, getGameDetails } from "../dataFetching";
import useUpdateTitle from "../hooks/useUpdateTitle";
import GameSwiper from "../components/game/gameSwiper";
import { useContext, useRef } from "react";
import { useAdjustPagePaddingTop } from "../hooks/useAdjustPagePaddingTop";
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
  const { cart, setCart } = useContext(MyContext) as ContextType;
  const gameRef = useRef<HTMLDivElement | null>(null);
  useAdjustPagePaddingTop(gameRef as React.MutableRefObject<HTMLDivElement>);
  useUpdateTitle(game.name);
  useScrollTop();

  const hasAdded = cart.includes(game.id);

  function updateCart() {
    if (cart.includes(game.id)) {
      setCart(cart.filter((id: number) => id !== game.id));
    } else {
      // if we use cart.push(gam.id), react will not change the state
      // because it compare the coming array using shallow equality
      // so we need to set new array in order to be updated
      setCart([...cart, game.id]);
    }
  }


  return (
    <div className="game" ref={gameRef}>
      <div className="game-name">{game.name}</div>
      <div className="game-info">
        <GameSwiper imgs={game.short_screenshots} />
        <div className="price-and-add-btn">
          <button className={hasAdded ? "added" : ""} onClick={updateCart}>
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
