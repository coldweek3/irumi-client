import React from "react";
import { Link } from "react-router-dom";
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
function NoLanternDetail() {
  return (
    <FixView>
      <TextWapper>
        <Link to="/">
          <ImgWrapper src="/img/Lantern/Big_purple.png" width={80} />
        </Link>
        삭제된 연등입니다!
        <br />
        연꽃을 눌러 홈으로 이동해주세요 :)
      </TextWapper>
    </FixView>
  );
}

export default NoLanternDetail;
