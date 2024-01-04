import { useEffect, useState } from "react";
import { MyContext } from "./cartContext";

export default function CartProvider({children}: {children: React.ReactNode}) {
  const [cart, setCart] = useState<number[]>(
    JSON.parse(localStorage.getItem("cart") as string) || []
  );

  const removeFromCart = (gamesId: number) => {
    setCart(cart.filter((id: number) => id !== gamesId));
  };
  // if we use cart.push(gam.id), react will not change the state
  // because it compare the coming array using shallow equality
  // so we need to set new array in order to be updated
  const addToCart = (gamesId: number) => {
    setCart([...cart, gamesId]);
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <MyContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </MyContext.Provider>
  );
}
