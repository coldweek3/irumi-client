import React from "react";
import FixView from "../../components/common/templetes/fixView/FixView";
import LightBanner from "../../components/main/atoms/lightBanner/LightBanner";
import ButtonList from "../../components/common/molecules/buttonList/ButtonList";
import Button from "../../components/common/atoms/button/Button";
import WishCard from "../../components/common/atoms/wishCard/WishCard";

function Main() {
  return (
    <FixView>
      <LightBanner />
      <div>현재까지 1000개의 연등이 달렸어요.</div>
      <div>좌우로 드래그해보세요</div>

      <WishCard />
      <ButtonList className={"layout-col-1-1 bottom"}>
        <Button className={"middle primary"}>버튼</Button>
        <Button className={"middle primary"}>버튼</Button>
      </ButtonList>
    </FixView>
  );
}

export default Main;
