import { GameType } from "../../dataFetching";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Navigation,
  Mousewheel,
  Keyboard,
} from "swiper/modules";
import { Link } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function SecSwiper({ games }: { games: Array<GameType> }) {
  return (
    <div className="sec-root-swiper">
      <h1>top games</h1>
      <Swiper
        cssMode={true}
        navigation={true}
        mousewheel={true}
        keyboard={true}
        lazyPreloadPrevNext={1000}
        autoplay={{ delay: 10000 }}
        slidesPerView={3}
        spaceBetween={20}
        slidesPerGroup={2}
        // centeredSlides={false}
        modules={[Navigation, Mousewheel, Keyboard, Autoplay]}
        className="swiper"
      >
        {games.map((game, idx) => (
          <SwiperSlide key={idx}>
            <Link to={`/games/game/${game.id}`}>
              <img src={game.background_image} />
              <h3>{game.name}</h3>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
