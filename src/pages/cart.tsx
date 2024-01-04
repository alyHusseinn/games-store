import { ContextType, MyContext } from "../Context/cartContext";
import { useContext } from "react";
import { GameType } from "../dataFetching";
import { Link, useLoaderData } from "react-router-dom";
import { getAllGames } from "../dataFetching";
import { useAdjustPagePaddingTop } from "../hooks/useAdjustPagePaddingTop";
import { useRef } from "react";
import useScrollTop from "../hooks/useScrollTop";
import RemoveIcon from "../assets/imgs/remove.png";

export async function loader(): Promise<Array<GameType>> {
  const game = await getAllGames();
  return game;
}

export default function Cart() {
  const { cart, removeFromCart } = useContext(MyContext) as ContextType;
  let gameInCart = useLoaderData() as Array<GameType>;
  gameInCart = gameInCart.filter((game) => cart.includes(game.id));
  const cartRef = useRef<HTMLDivElement | null>(null);
  useAdjustPagePaddingTop(cartRef as React.MutableRefObject<HTMLDivElement>);
  useScrollTop();

  return (
    <div className="cart" ref={cartRef}>
      <div className="cart-info">
        <div className="num">{cart.length} Games</div>
        <button className="clear">Check out</button>
        <div className="total-price">
          ${cart.length * 5.5}
        </div>
      </div>
      <div className="cart-items">
        {gameInCart.map((game: GameType, index: number) => {
          return (
            <div className="item" key={index}>
              <Link to={`/games/game/${game.id}`}>
                <img src={game.background_image} alt={game.name} />
              </Link>
              <div className="info">
                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(game.id)}
                >
                  <img src={RemoveIcon} alt="remove from cart" />
                </button>
                <div className="name">{game.name}</div>
                <div className="price">$5.5</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
