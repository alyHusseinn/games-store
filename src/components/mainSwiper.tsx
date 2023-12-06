import swipImg_1 from "../assets/imgs/swip-root-1.jpg";
import swipImg_2 from "../assets/imgs/swip-root-2.jpg";
import swipImg_3 from "../assets/imgs/swip-root-3.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
} from "swiper/modules";
import { Link } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function MainSwiper() {
  return (
    <div className="main-swiper">
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
        <SwiperSlide className="slide">
          <img src={swipImg_1} />
        </SwiperSlide>
        <SwiperSlide className="slide">
          <img src={swipImg_2} />
        </SwiperSlide>
        <SwiperSlide className="slide">
          <img src={swipImg_3} />
        </SwiperSlide>
      </Swiper>

      <div className="info">
        <div className="intro">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
          aspernatur cum vel cumque. Aliquam, dolores officia explicabo rem,
          animi excepturi labore harum modi repellendus est totam reiciendis
          officiis doloremque consequuntur.
        </div>
        <Link to="/games" className="go-shopping-btn">
          go shopping..
        </Link>
      </div>
    </div>
  );
}
