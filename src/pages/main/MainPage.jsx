import React, { useEffect, useState } from "react";
import FixView from "../../components/common/templetes/fixView/FixView";

import ButtonList from "../../components/common/molecules/buttonList/ButtonList";
import LanternCardSwiper from "../../components/main/molecules/lanternCardSwiper/LanternCardSwiper";
import MainTextLabel from "../../components/main/atoms/mainTextLabel/MainTextLabel";
import LinkButton from "../../components/common/atoms/button/LinkButton";
import LamplightBanner from "../../components/main/atoms/lamplightBanner/LamplightBanner";
import { getLanterns } from "../../apis/api/lantern";

import InitView from "../../components/common/templetes/initView/InitView";

function MainPage() {
  const [isInit, setIsInit] = useState(true);
  const [data, setData] = useState({ totCount: 0, lanterns: [] });

  const fetchData = async () => {
    await getLanterns("random").then(result => {
      if (result.type == "clear") {
        setData(result.data);
        setIsInit(false);
      }
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return isInit ? (
    <InitView />
  ) : (
    <FixView>
      <LamplightBanner />
      <MainTextLabel className={"count"}>
        지금까지 '{data.totCount}'개의 연등이 달렸어요!
      </MainTextLabel>

      <MainTextLabel className={"notice"}>
        좌우로 드래그 해보세요.
      </MainTextLabel>

      <LanternCardSwiper lanterns={data.lanterns} />

      <ButtonList className={"layout-col-1-1 bottom"}>
        <LinkButton className={"middle primary"} herf={"/lanterns"}>
          연등 둘러보기
        </LinkButton>

        <LinkButton className={"middle primary"} herf={"/lanternWrite"}>
          연등 작성하기
        </LinkButton>
      </ButtonList>
    </FixView>
  );
}

export default MainPage;
