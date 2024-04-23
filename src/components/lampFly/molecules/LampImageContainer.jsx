import React, { Children } from "react";
import styled from "styled-components";

const ImageContainerWrapper = styled.div`
  width: 100%;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  &.ani_lampFly_moveUp {
    animation: ani_lampFly_moveUp 3s forwards ease-in;
    animation-delay: 1.2s;

    @keyframes ani_lampFly_moveUp {
      0% {
        transform: scale(1) translate(0, 0);
        opacity: 1;
      }
      100% {
        transform: scale(0.6) translate(0, -1200px);
        opacity: 0.7;
      }
    }
  }
`;

const ImageContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  position: relative;

  &.ani_lampFly_moveUp {
    animation: ani_lampFly_vibration 2s linear infinite alternate,
      ani_lampFly_motion 0.6s linear infinite alternate;
    animation-delay: 2s;
    @keyframes ani_lampFly_vibration {
      0% {
        transform: rotate(0deg);
      }
      25% {
        transform: rotate(-1.5deg);
      }
      50% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(1.5deg);
      }
    }

    @keyframes ani_lampFly_motion {
      0% {
        margin-top: 0px;
      }
      100% {
        margin-top: 40px;
      }
    }
  }
`;
function LampImageContainer({ children, className }) {
  return (
    <ImageContainerWrapper className={className}>
      <ImageContainer className={className}>{children}</ImageContainer>
    </ImageContainerWrapper>
  );
}

export default LampImageContainer;
