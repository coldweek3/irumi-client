import React from "react";
import { useRecoilValue } from "recoil";
import { emSize } from "../../../../recoil/emSize";
import styled from "styled-components";
import { Link } from "react-router-dom";

const LanternCardEmWrapper = styled.div`
  font-size: ${props => props.$emsize}px;
  width: calc(${props => props.$width} * 1);
  height: calc(${props => props.$size} * 820);
  &:hover {
    transform: scale(1.1) translateY(-5%);
  }
`;

const LanternCardWrapper = styled.div`
  color: #5b3a1a;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  width: calc(${props => props.$width} * 1);
  height: calc(${props => props.$size} * 820);

  background-size: cover;
  background-image: url(${props => props.$url});
`;

const LanternCardName = styled.div`
  position: absolute;
  top: calc(${props => props.$size} * 460);
  p {
    font-family: "LotteMartDreamBold";
    font-size: calc(${props => props.$size} * 28);
    line-height: calc(36 / 28);
  }
`;
const LanternCardContent = styled.div`
  position: absolute;
  top: calc(${props => props.$size} * 505);
  width: calc(${props => props.$size} * 210);
  height: calc(${props => props.$size} * 210);
  white-space: wrap;
  overflow: hidden;
  word-break: break-all;
  text-overflow: ellipsis;
  p {
    font-size: calc(${props => props.$size} * 20);
    line-height: calc(28 / 20);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-all;
  }
`;

const LanternCardLikeWrapper = styled.div`
  position: absolute;
  width: calc(${props => props.$size} * 210);
  top: calc(${props => props.$size} * 760);
  display: flex;
  justify-content: end;
  align-items: center;

  gap: calc(${props => props.$size} * 8);

  img {
    width: calc(${props => props.$size} * 24);
    height: calc(${props => props.$size} * 24);
  }
  div {
    font-size: calc(${props => props.$size} * 20);
  }
`;

function LanternCard({ lanternSize = 127, lanternInfo }) {
  console.log(lanternInfo);
  const emSizeValue = useRecoilValue(emSize);

  return (
    <LanternCardEmWrapper
      $emsize={emSizeValue}
      $width={lanternSize / 10 + "em"}
      $size={lanternSize / 10 / 400 + "em"}
    >
      <Link to={`랜턴디테일/${lanternInfo.id}`}>
        <LanternCardWrapper
          $url={
            "/img/wishCard/" +
            lanternInfo.lanternColor +
            (lanternInfo.light_bool ? "_light" : "_default") +
            ".png"
          }
          $width={lanternSize / 10 + "em"}
          $size={lanternSize / 10 / 400 + "em"}
        >
          <LanternCardName $size={lanternSize / 10 / 400 + "em"}>
            <p>{lanternInfo.nickname}</p>
          </LanternCardName>

          <LanternCardContent $size={lanternSize / 10 / 400 + "em"}>
            {lanternInfo.content}
          </LanternCardContent>

          <LanternCardLikeWrapper $size={lanternSize / 10 / 400 + "em"}>
            <img src="/icon/heart.svg" />
            <div>{lanternInfo.like_cnt}</div>
          </LanternCardLikeWrapper>
        </LanternCardWrapper>
      </Link>
    </LanternCardEmWrapper>
  );
}

export default LanternCard;
