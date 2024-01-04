import { GameType } from "../../dataFetching";
import { useContext } from "react";
import { MyContext, type ContextType } from "../../Context/cartContext";
import { Link } from "react-router-dom";

export default function GameCard({ game }: { game: GameType }) {
  const { cart, addToCart, removeFromCart } = useContext(MyContext) as ContextType;

  const hasAdded = cart.includes(game.id);

  return (
    <div className="game-card">
      <Link to={`/games/game/${game.id}`}>
        <img src={game.background_image} alt={game.name} />
      </Link>

      <div className="game-info">
        <div className="price-and-add-btn">
          <button
            className={hasAdded ? "added" : ''}
            onClick={hasAdded? () => removeFromCart(game.id): () => addToCart(game.id)}
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
