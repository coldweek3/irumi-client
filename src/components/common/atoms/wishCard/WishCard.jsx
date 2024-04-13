import React from "react";
import { useRecoilValue } from "recoil";
import { emSize } from "../../../../recoil/emSize";
import styled from "styled-components";

const WishCardEmWrapper = styled.div`
  font-size: ${props => props.$emsize}px;
`;

const WishCardWrapper = styled.div`
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

const WishCardName = styled.div`
  width: 100%;
  padding-top: ${props => props.$yPosition}em;
  div {
    width: 100%;
    font-size: ${props => props.$fontSize}em;
  }
`;
const WishCardContent = styled.div`
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

const WishCardLikeWrapper = styled.div`
  width: 100%;
  padding-bottom: ${props => props.$yPosition}em;
  display: flex;
  justify-content: end;
  div {
    font-size: ${props => props.$fontSize}em;
    line-height: 1.4;
  }
`;

function WishCard({ wishSize = 127 }) {
  const emSizeValue = useRecoilValue(emSize);

  return (
    <WishCardEmWrapper $emsize={emSizeValue}>
      <WishCardWrapper
        $padding={((92 / 344) * wishSize) / 10}
        $width={wishSize / 10}
        $height={((705 / 344) * wishSize) / 10}
      >
        <WishCardName
          $yPosition={((412 / 344) * wishSize) / 10}
          $fontSize={((24 / 344) * wishSize) / 10}
        >
          <div>산시20 김강민</div>
        </WishCardName>

        <WishCardContent
          $yPosition={((12 / 344) * wishSize) / 10}
          $fontSize={((20 / 344) * wishSize) / 10}
        >
          <div>올해 우리 가족 무 탈하게 잘 마무리 하길...</div>
        </WishCardContent>

        <WishCardLikeWrapper
          $yPosition={((24 / 344) * wishSize) / 10}
          $fontSize={((24 / 344) * wishSize) / 10}
        >
          <div>좋아요</div>
        </WishCardLikeWrapper>
      </WishCardWrapper>
    </WishCardEmWrapper>
  );
}

export default WishCard;
