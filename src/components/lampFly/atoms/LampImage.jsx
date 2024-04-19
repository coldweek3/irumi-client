import React from "react";
import styled from "styled-components";

const ImageWrapper = styled.img`
  width: ${props => props.$width};

  &.absolute {
    position: absolute;
    z-index: 10;
    transform: translate(${props => props.$left}, ${props => props.$top});
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
