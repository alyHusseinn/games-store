import { GameType } from "../../dataFetching";
import { useContext } from "react";
import { MyContext, type ContextType } from "../../Context/cartContext";

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
      <img src={game.background_image} alt={game.name} />
      <div className="info">
        <div className="price-and-add">
          <button
            className={`btn-add-game ${hasAdded ? "added" : "not-added"}`}
            onClick={updateCart}
          >
            {hasAdded ? "Added" : "Add to cart+"}
          </button>
          <h3 className="price">$5.5</h3>
        </div>
        <h2>{game.name}</h2>
      </div>
    </div>
  );
}
