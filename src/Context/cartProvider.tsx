import { useEffect, useState } from "react";
import { MyContext } from "./cartContext";

export default function CartProvider({children}: {children: React.ReactNode}){

    const [cart, setCart] = useState<number[]>(JSON.parse(localStorage.getItem("cart") as string).map((item: string) => Number(item)) || []);
    console.log(cart);
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    return (
        <MyContext.Provider value={{cart, setCart}}>
            {children}
        </MyContext.Provider>
    )
}