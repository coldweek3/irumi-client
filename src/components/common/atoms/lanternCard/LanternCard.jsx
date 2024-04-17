import React from "react";
import { useRecoilValue } from "recoil";
import { emSize } from "../../../../recoil/emSize";
import styled from "styled-components";
import { Link } from "react-router-dom";

const LanternCardEmWrapper = styled.div`
  font-size: ${props => props.$emsize}px;
`;

const LanternCardWrapper = styled.div`
  color: #5b3a1a;
  display: flex;
  flex-direction: column;
  align-items: center;

  width: ${props => props.$width}em;
  height: ${props => props.$height}em;
  padding: 0em ${props => props.$padding}em;

  background-size: cover;
  background-image: ${props => `url(/img/wishCard/purple_light.png)`};
`;

const LanternCardName = styled.div`
  width: 100%;
  padding-top: ${props => props.$yPosition}em;
  div {
    width: 100%;
    font-size: ${props => props.$fontSize}em;
  }
`;
const LanternCardContent = styled.div`
  width: 100%;
  flex-grow: 1;
  padding-top: ${props => props.$yPosition}em;

  div {
    width: 100%;
    height: 100%;
    font-size: ${props => props.$fontSize}em;
    line-height: 1.4;
  }
`;

const LanternCardLikeWrapper = styled.div`
  width: 100%;
  padding-bottom: ${props => props.$yPosition}em;
  display: flex;
  justify-content: end;
  div {
    font-size: ${props => props.$fontSize}em;
    line-height: 1.4;
  }
`;

function LanternCard({ wishSize = 127, lanternInfo }) {
  const emSizeValue = useRecoilValue(emSize);

  return (
    <Link to={`랜턴디테일/${lanternInfo.id}`}>
      <LanternCardEmWrapper $emsize={emSizeValue}>
        <LanternCardWrapper
          $padding={((92 / 344) * wishSize) / 10}
          $width={wishSize / 10}
          $height={((705 / 344) * wishSize) / 10}
        >
          <LanternCardName
            $yPosition={((412 / 344) * wishSize) / 10}
            $fontSize={((24 / 344) * wishSize) / 10}
          >
            <div>{lanternInfo.nickname}</div>
          </LanternCardName>

          <LanternCardContent
            $yPosition={((12 / 344) * wishSize) / 10}
            $fontSize={((20 / 344) * wishSize) / 10}
          >
            <div>{lanternInfo.content}</div>
          </LanternCardContent>

          <LanternCardLikeWrapper
            $yPosition={((24 / 344) * wishSize) / 10}
            $fontSize={((24 / 344) * wishSize) / 10}
          >
            <div>좋아요</div>
          </LanternCardLikeWrapper>
        </LanternCardWrapper>
      </LanternCardEmWrapper>
    </Link>
  );
}

export default LanternCard;
