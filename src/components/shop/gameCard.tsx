import { GameType } from "../../dataFetching";
import { useContext } from "react";
import { MyContext, type ContextType } from "../../Context/cartContext";
import { Link } from "react-router-dom";

export default function GameCard({ game }: { game: GameType }) {
  const { cart, setCart } = useContext(MyContext) as ContextType;

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
    <div className="game-card">
      <Link to={`/games/game/${game.id}`}>
        <img src={game.background_image} alt={game.name} />
      </Link>

      <div className="game-info">
        <div className="price-and-add-btn">
          <button
            className={hasAdded ? "added" : ''}
            onClick={updateCart}
          >
            {hasAdded ? "Added" : "Add to cart+"}
          </button>
          <h3 className="price">$5.5</h3>
        </div>
        <Link to={`/games/game/${game.id}`}>{game.name}</Link>
      </div>
    </div>
  );
}
