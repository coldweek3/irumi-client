import React from "react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./swiper.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import WishCard from "../../../common/atoms/wishCard/WishCard";

function WishCardSwiper() {
  return (
    <Swiper
      effect={"coverflow"}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
        slideShadows: false
      }}
      slidesPerView={3}
      centeredSlides={true}
      loop={true}
      modules={[EffectCoverflow, Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
        <WishCard wishSize={150} />
      </SwiperSlide>
      <SwiperSlide>
        <WishCard wishSize={150} />
      </SwiperSlide>
      <SwiperSlide>
        <WishCard wishSize={150} />
      </SwiperSlide>
      <SwiperSlide>
        <WishCard wishSize={150} />
      </SwiperSlide>
      <SwiperSlide>
        <WishCard wishSize={150} />
      </SwiperSlide>
      <SwiperSlide>
        <WishCard wishSize={150} />
      </SwiperSlide>
      <SwiperSlide>
        <WishCard wishSize={150} />
      </SwiperSlide>
    </Swiper>
  );
}

export default WishCardSwiper;
