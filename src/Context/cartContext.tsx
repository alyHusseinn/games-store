import { createContext } from "react";

export type ContextType = {
    cart: number[],
    setCart: (gamesId:number[]) => void,
}

export const MyContext = createContext<ContextType | number[]>([]);