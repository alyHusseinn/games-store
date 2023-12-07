 import { Link, useLoaderData } from "react-router-dom";
// import { getAllGames, GameType } from "../dataFetching";
import MainSwiper from "../components/mainSwiper";

// export async function loader(): Promise<Array<GameType>> {
//   const games = await getAllGames();
//   return games;
// }

function Root() {
  // const games: Array<GameType> = useLoaderData() as Array<GameType>;

  return (
    <>
      <MainSwiper />

      
      {/* <div className="games-data">
        {games.map((game, idx) => {
          return (
            <div className="game" key={idx}>
              <div className="game-name" key={idx}>
                {game.name}
              </div>
              <img
                src={game.background_image}
                alt={game.name + ", game"}
                key={idx}
              />
              <Link to={`/games/${game.id}`} key={idx}>
                open {game.name}
              </Link>
            </div>
          );
        })}
      </div> */}
    </>
  );
}

export default Root;
