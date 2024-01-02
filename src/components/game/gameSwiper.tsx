import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
} from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function GameSwiper({ imgs }: { imgs: Array<{image: string}> }) {
  return (
    <Swiper
      cssMode={true}
      navigation={true}
      pagination={true}
      mousewheel={true}
      keyboard={true}
      lazyPreloadPrevNext={1000}
      autoplay={{ delay: 10000 }}
      modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
      className="swiper"
    >
      {imgs.map((imgs, idx) => (
        <SwiperSlide className="slide" key={idx}>
          <img src={imgs.image} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
