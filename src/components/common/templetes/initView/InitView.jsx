import React from "react";
import FixView from "../fixView/FixView";
import styled from "styled-components";

const TextWapper = styled.div`
  flex-grow: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  line-height: 1.5;
  gap: 32px;
`;

const ImgWrapper = styled.img`
  animation: ani_init_loading 2s linear infinite alternate;
  @keyframes ani_init_loading {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.1);
    }
  }
`;
function InitView() {
  return (
    <FixView>
      <TextWapper>
        <ImgWrapper src="/img/Lantern/Big_pink.png" width={80} />
        데이터를 불러오고 있습니다.
        <br />
        잠시만 기다려주세요!
      </TextWapper>
    </FixView>
  );
}

export default InitView;
