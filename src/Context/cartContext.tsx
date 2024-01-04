import { createContext } from "react";

export type ContextType = {
    cart: number[],
    addToCart: (gamesId:number) => void,
    removeFromCart: (gamesId:number) => void
}

export const MyContext = createContext<ContextType | number[]>([]);