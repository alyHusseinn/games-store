import { useLoaderData, Params } from "react-router-dom";
import { type GameType, getGameDetails } from "../dataFetching";
import useUpdateTitle from "../hooks/useUpdateTitle";
import GameSwiper from "../components/game/gameSwiper";
import { useContext, useEffect, useRef } from "react";
import { ContextType, MyContext } from "../Context/cartContext";

// const gamePath = "/game/:gameId";
// interface paramsType extends LoaderFunctionArgs {
//   params: Params<ParamParseKey<typeof gamePath>>;
// }

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
  useUpdateTitle(game.name);
  const { cart, setCart } = useContext(MyContext) as ContextType;
  const gameRef = useRef<HTMLDivElement | null>(null);

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

  useEffect(() => {
    const header = document.querySelector("header") as HTMLDivElement;
    const headerHeight = header.offsetHeight;
    (gameRef.current as HTMLDivElement).style.paddingTop =
      headerHeight + 10 + "px";
  }, []);

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
