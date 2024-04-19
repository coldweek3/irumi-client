import React, { useEffect, useState } from "react";
import FixView from "../../components/common/templetes/fixView/FixView";

import Draggable from "react-draggable";
import LampImage from "../../components/lampFly/atoms/LampImage";
import LampDrag from "../../components/lampFly/atoms/LampDrag";
import LampImageContainer from "../../components/lampFly/molecules/LampImageContainer";

function LampFlyPage() {
  const [isDragMode, setIsDragMode] = useState(true);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  // 업데이트 되는 값을 set 해줌
  const trackPos = data => {
    setPosition({ x: data.x, y: data.y });
  };

  useEffect(() => {
    if (
      position.x < 20 &&
      position.x > -20 &&
      position.y > -150 &&
      position.y < -120
    ) {
      setIsDragMode(false);
    }
  }, [position]);

  useEffect(() => {
    console.log(position);
  }, [position]);

  return (
    <FixView>
      {isDragMode ? (
        <LampImageContainer>
          <LampImage
            className={"absolute"}
            width={430}
            top={20}
            left={0}
            url={"/img/Lamp/lamp_head.png"}
          />
          <LampImage
            className={"absolute"}
            width={20}
            top={360}
            left={-60}
            url={"/img/Lamp/line.png"}
          />
          <LampImage
            className={"absolute"}
            width={170}
            top={420}
            left={120}
            url={"/img/Lamp/text.png"}
          />

          <LampDrag top={500} left={50}>
            <Draggable onDrag={(e, data) => trackPos(data)}>
              <img src={"/img/Lamp/lamp_paper.png"} width={140} />
            </Draggable>
          </LampDrag>
        </LampImageContainer>
      ) : (
        <LampImageContainer>
          <LampImage
            className={"absolute"}
            width={430}
            top={20}
            left={0}
            url={"/img/Lamp/lamp_head.png"}
          />
          <LampImage
            className={"absolute"}
            width={430}
            top={20}
            left={0}
            url={"/img/Lamp/lamp_light.png"}
          />
          <LampImage
            className={"absolute"}
            width={140}
            top={340}
            left={0}
            url={"/img/Lamp/lamp_paper.png"}
          />
        </LampImageContainer>
      )}
    </FixView>
  );
}

export default LampFlyPage;
