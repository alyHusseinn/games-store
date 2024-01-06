import { Link, useSearchParams } from "react-router-dom";
import useHasScrolledUp from "../hooks/useHasScrolledUp";
import LogoImg from "../assets/imgs/logo.png";
import CartImg from "../assets/imgs/shopping-bag.png";
import SearchImg from "../assets/imgs/search.png";
import { ContextType, MyContext } from "../Context/cartContext";
import { useCallback, useContext, useEffect, useState } from "react";
import { GameType, getSearchResults } from "../dataFetching";
import RemoveSearchIcon from "../assets/imgs/remove.png";

function Header() {
  const hasScrolledUp = useHasScrolledUp();
  const { cart } = useContext(MyContext) as ContextType;
  const [searchResults, setSearchResults] = useState<GameType[]>([]);

  const [searchParams, setSearchParmas] = useSearchParams();
  const query = searchParams.get("search");

  const resetSearchInput = () => {
    setSearchParmas("");
  };

  useEffect(() => {
    setSearchResults(getSearchResults(query ?? ""));
  }, [query]);

  const handleSearchInput = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      const value = e.currentTarget.value;
      const params = { search: value };
      if (value != " ") {
        setSearchParmas(params);
      }
      // setSearchInput(e.currentTarget.value);
    },
    [setSearchParmas]
  );

  const hadnleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
  }, []);

  return (
    <header className={hasScrolledUp || searchResults.length ? "show" : "hide"}>
      <Link to="/" className="logo">
        <img src={LogoImg} alt="store" />
        <h1>Gaming store</h1>
      </Link>
      <form className="search" onSubmit={hadnleSubmit}>
        <input
          type="text"
          name="search"
          value={query ?? ""}
          placeholder="search games..."
          onChange={handleSearchInput}
        />
        <button type="submit">
          <img src={SearchImg} alt="search" />
        </button>
      </form>
      {searchResults.length > 0 && (
        <div className="search-results">
          <div className="delete-search">
            <img
              src={RemoveSearchIcon}
              alt="delete-search"
              onClick={resetSearchInput}
            />
          </div>
          <div className="res-num"><span>There Exist: {searchResults.length} Games</span></div>
          <div className="results">
            {searchResults.map((game: GameType, idx: number) => (
              <Link
                to={`/games/game/${game.id}`}
                className="game-res"
                key={idx}
                onClick={resetSearchInput}
              >
                <div className="name">{game.name}</div>
                <img src={game.background_image} alt={game.name} />
              </Link>
            ))}
          </div>
        </div>
      )}
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
