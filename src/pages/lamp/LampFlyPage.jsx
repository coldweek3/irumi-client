import React, { useEffect, useState } from "react";
import FixView from "../../components/common/templetes/fixView/FixView";

import Draggable from "react-draggable";
import LampImage from "../../components/lampFly/atoms/LampImage";
import LampDrag from "../../components/lampFly/atoms/LampDrag";
import LampImageContainer from "../../components/lampFly/molecules/LampImageContainer";

import ButtonList from "../../components/common/molecules/buttonList/ButtonList";
import LinkButton from "../../components/common/atoms/button/LinkButton";
import LampFlyTextLabel from "../../components/lampFly/atoms/LampFlyTextLabel";

function LampFlyPage() {
  const [isDragMode, setIsDragMode] = useState(true);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  // 업데이트 되는 값을 set 해줌
  const trackPos = data => {
    setPosition({ x: data.x, y: data.y });
  };

  useEffect(() => {
    console.log(position);
    if (
      position.x < 20 &&
      position.x > -20 &&
      position.y > -110 &&
      position.y < -90
    ) {
      setIsDragMode(false);
    }
  }, [position]);

  return (
    <FixView>
      {isDragMode ? (
        <LampImageContainer>
          <LampImage
            className={"absolute"}
            width={380}
            top={-330}
            left={0}
            url={"/img/Lamp/lamp_head.png"}
          />
          <LampImage
            className={"absolute"}
            width={20}
            top={-60}
            left={-60}
            url={"/img/Lamp/line.png"}
          />
          <LampImage
            className={"absolute ani_twinkling"}
            width={170}
            top={0}
            left={80}
            url={"/img/Lamp/text.png"}
          />

          <LampDrag top={60} left={50}>
            <Draggable onDrag={(e, data) => trackPos(data)}>
              <img src={"/img/Lamp/lamp_paper.png"} width={120} />
            </Draggable>
          </LampDrag>
        </LampImageContainer>
      ) : (
        <>
          <LampImageContainer className={"ani_lampFly_moveUp"}>
            <LampImage
              className={"absolute"}
              width={380}
              top={-330}
              left={0}
              url={"/img/Lamp/lamp_head.png"}
            />
            {/* 이걸 리엑트가 라인컴포넌트가 변경된걸로 인식해서
          사진이 새로생기는게 아니라 라인에서 램프로 바뀌어서 따로 넣었습니다. */}
            <div></div>
            <div></div>
            <div></div>
            {/* --- */}
            <LampImage
              className={"absolute fade_in"}
              width={380}
              top={-330}
              left={0}
              url={"/img/Lamp/lamp_light.png"}
            />
            <LampImage
              className={"absolute"}
              width={120}
              top={-50}
              left={0}
              url={"/img/Lamp/lamp_paper.png"}
            />
          </LampImageContainer>
          <LampFlyTextLabel>
            등불을 하늘에 날려보냈습니다!
            <br />
            메일함을 확인해주세요!
          </LampFlyTextLabel>

          <ButtonList className={"bottom layout-1"}>
            <LinkButton className={"primary middle"} herf={"/"}>
              홈으로 돌아가기
            </LinkButton>
          </ButtonList>
        </>
      )}
    </FixView>
  );
}

export default LampFlyPage;
