import React, { Children } from "react";
import styled from "styled-components";

const ImageContainerWrapper = styled.div`
  width: 100%;
  flex-grow: 1;
  padding-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  &.moving {
    animation: moveTop 6s forwards ease-in;
    animation-delay: 2s;

    @keyframes moveTop {
      0% {
        transform: translate(0, 0);
      }
      100% {
        transform: translate(0, -800px);
      }
    }
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  height: 800px;
  position: relative;
  &.moving {
    animation: vibration 2s linear infinite alternate,
      motion 0.6s linear infinite alternate;
    animation-delay: 2s;
    @keyframes vibration {
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

    @keyframes motion {
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
