import { Link } from "react-router-dom";
import useHasScrolledUp from "../hooks/useHasScrolledUp";
import LogoImg from "../assets/imgs/logo.png";
import CartImg from "../assets/imgs/shopping-bag.png";
import SearchImg from "../assets/imgs/search.png";
import { ContextType, MyContext } from "../Context/cartContext";
import { useContext } from "react";

function Header() {
  const hasScrolledUp = useHasScrolledUp();
  const { cart } = useContext(MyContext) as ContextType;

  return (
    <header className={hasScrolledUp ? "show" : "hide"}>
      <Link to="/" className="logo">
        <img src={LogoImg} alt="store" />
        <h1>Gaming store</h1>
      </Link>
      <form className="search">
        <input type="text" placeholder="search games..." />
        <button type="submit">
          <img src={SearchImg} alt="search" />
        </button>
      </form>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/games">Shop</Link>
        <Link to="/cart" className="cart-link">
        <img src={CartImg} alt="checkout" />
          {cart.length > 0 && (
            <>
              <span>{cart.length}</span>
            </>
          )}
        </Link>
      </nav>
    </header>
  );
}

export default Header;
