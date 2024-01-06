import swipImg_1 from "../../assets/imgs/swip-root-1.jpg";
import swipImg_2 from "../../assets/imgs/swip-root-2.jpg";
import swipImg_3 from "../../assets/imgs/swip-root-3.jpg";
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
          <div className="intor-1">
          Explore The <span>best</span> games store in that world.
          </div>
          <div className="intor-2">
            Your First step in the world of games should be here.
          </div>
        </div>
        <Link to="/games" className="go-shopping-btn">
          go shopping..
        </Link>
      </div>
    </div>
  );
}
