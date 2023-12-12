import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/App.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Root, { loader as rootLoader } from "./pages/root";
import GamesShop, { loader as gamesLoader } from "./pages/gamesShop";
import Game, { loader as gameLoader } from "./pages/game";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Root />,
        loader: rootLoader,
      },
      {
        path: "games",
        element: <GamesShop />,
        loader: gamesLoader,
      },
      {
        path: "games/game/:gameId",
        element: <Game />,
        loader: gameLoader,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
