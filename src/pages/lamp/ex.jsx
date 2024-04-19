import React, { useEffect, useRef, useState } from "react";
import * as S from "./style";
import Draggable from "react-draggable";

import "../../assets/animation/animation.css";
import { Link } from "react-router-dom";
import Notice from "../../components/notice/Notice";

function Intro() {
  const [isDragMode, setIsDragMode] = useState(true);
  const [position, setPosition] = useState({ x: 0, y: 0 }); // box의 포지션 값
  // 업데이트 되는 값을 set 해줌
  const trackPos = data => {
    setPosition({ x: data.x, y: data.y });
  };

  useEffect(() => {
    if (
      position.x < 20 &&
      position.x > -20 &&
      position.y > -105 &&
      position.y < -85
    ) {
      setIsDragMode(false);
    }
  }, [position]);
  return (
    <S.IntroWrapper>
      {isDragMode ? (
        <>
          <S.SubTitle className="shine">연등에 소원을 달아보세요</S.SubTitle>
          <S.intro1_box>
            <S.intro1 src={"intro_before_lantern.svg"} />
          </S.intro1_box>

          <S.introBox>
            <S.intro_line src={"intro_line.svg"} />
            <S.intro_hand className="handMove" src={"icon_hand.png"} />
          </S.introBox>

          <Draggable onDrag={(e, data) => trackPos(data)}>
            <S.intro2_box>
              <S.intro2_div />
              <S.intro2_img src={"intro_before_paper.svg"} />
            </S.intro2_box>
          </Draggable>
        </>
      ) : (
        <>
          <Notice />
          <S.SubTitle className="fadein">
            이루미에 오신 것을 환영합니다
          </S.SubTitle>
          <S.intro1_box>
            <S.intro1 className="fadein" src={"intro_after_lantern.svg"} />
            <S.intro1 src={"intro_before_lantern.svg"} />
          </S.intro1_box>

          <S.intro2_box>
            <S.intro2_img
              className="fadein"
              src={"intro_after_paper_write.svg"}
              style={{ zIndex: "4" }}
            />
            <S.intro2_img src={"intro_after_paper.svg"} />
          </S.intro2_box>
        </>
      )}
    </S.IntroWrapper>
  );
}

export default Intro;
