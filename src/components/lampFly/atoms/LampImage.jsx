import React from "react";
import styled from "styled-components";

const ImageWrapper = styled.img`
  width: ${props => props.$width};

  &.absolute {
    position: absolute;
    z-index: 10;
    transform: translate(${props => props.$left}, ${props => props.$top});
  }
  &.fade_in {
    animation-duration: 1.5s;
    animation-name: fadeIn;
    @keyframes fadeIn {
      from {
        opacity: 0;
      }

      to {
        opacity: 100%;
      }
    }
  }
`;
function LampImage({ width, top, left, url, className }) {
  return (
    <ImageWrapper
      className={className}
      src={url}
      $width={width + "px"}
      $top={top + "px"}
      $left={left + "px"}
    />
  );
}

export default LampImage;
