import React, { useEffect, useState } from "react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./swiper.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import LanternCard from "../../../common/atoms/lanternCard/LanternCard";
import styled from "styled-components";

const SwiperWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  padding-bottom: 120px;
`;
function LanternCardSwiper({ lanterns }) {
  return (
    <SwiperWrapper>
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
        {lanterns?.map((item, index) => (
          <SwiperSlide className="lantern" key={index}>
            <LanternCard
              delay={index == 0 ? 0.2 : index == 1 || index == 19 ? 0.4 : 0.6}
              className={"ani_main_lantern_appear"}
              lanternData={item}
              lanternSize={180}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </SwiperWrapper>
  );
}

export default LanternCardSwiper;
