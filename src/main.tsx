import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root, { loader as rootLoader } from "./pages/root";
import GamesShop, { loader as gamesLoader } from "./pages/gamesShop";
import Game, { loader as gameLoader } from "./pages/game";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    loader: rootLoader,
    // children: [
    // ]
  },
  {
    path: "games",
    element: <GamesShop/>,
    loader: gamesLoader,
  },
  {
    path: "games/:gameId",
    element: <Game/>,
    loader: gameLoader,
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
