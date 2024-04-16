import React from "react";
import FixView from "../../components/common/templetes/fixView/FixView";
import LightBanner from "../../components/main/atoms/lightBanner/LightBanner";
import ButtonList from "../../components/common/molecules/buttonList/ButtonList";
import Button from "../../components/common/atoms/button/Button";
import WishCardSwiper from "../../components/main/molecules/wishCardSwiper/WishCardSwiper";
import MainTextLabel from "../../components/main/atoms/mainTextLabel/MainTextLabel";

function Main() {
  return (
    <FixView>
      <LightBanner />
      <MainTextLabel className={"count"}>
        지금까지 1000개의 연등이...
      </MainTextLabel>

      <MainTextLabel className={"notice"}>
        좌우로 드래그 해보세요.
      </MainTextLabel>

      <WishCardSwiper />

      <ButtonList className={"layout-col-1-1 bottom"}>
        <Button className={"middle primary"}>연등 둘러보기</Button>
        <Button className={"middle primary"}>연등 작성하기</Button>
      </ButtonList>
    </FixView>
  );
}

export default Main;
