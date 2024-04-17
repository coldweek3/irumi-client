import React from "react";
import FixView from "../../components/common/templetes/fixView/FixView";

import ButtonList from "../../components/common/molecules/buttonList/ButtonList";
import WishCardSwiper from "../../components/main/molecules/wishCardSwiper/WishCardSwiper";
import MainTextLabel from "../../components/main/atoms/mainTextLabel/MainTextLabel";
import LinkButton from "../../components/common/atoms/button/LinkButton";
import LamplightBanner from "../../components/main/atoms/lamplightBanner/LamplightBanner";

function MainPage() {
  return (
    <FixView>
      <LamplightBanner />
      <MainTextLabel className={"count"}>
        지금까지 '1000'개의 연등이 달렸어요!
      </MainTextLabel>

      <MainTextLabel className={"notice"}>
        좌우로 드래그 해보세요.
      </MainTextLabel>

      <WishCardSwiper />

      <ButtonList className={"layout-col-1-1 bottom"}>
        <LinkButton className={"middle primary"} herf={"/lanterns"}>
          연등 둘러보기
        </LinkButton>

        <LinkButton className={"middle primary"} herf={"/wishWrite"}>
          연등 작성하기
        </LinkButton>
      </ButtonList>
    </FixView>
  );
}

export default MainPage;
