import { Link } from "react-router-dom";
import useHasScrolledUp from "../hooks/useHasScrolledUp";
import LogoImg from "../assets/imgs/logo.png";
import CartImg from "../assets/imgs/shopping-bag.png";
import SearchImg from "../assets/imgs/search.png";

function Header() {
  const hasScrolledUp = useHasScrolledUp();

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
        <Link to="#">
          <img src={CartImg} alt="checkout" />
        </Link>
      </nav>
    </header>
  );
}

export default Header;
