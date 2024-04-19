import React from "react";
import styled from "styled-components";

const ImageWrapper = styled.img`
  width: ${props => props.$width};

  &.absolute {
    transform: translate(-50%, 0);
    position: absolute;
    top: ${props => props.$top};
    left: ${props => props.$left};
  }
`;
function LampImage({ width, top, left, url, className }) {
  return (
    <ImageWrapper
      className={className}
      src={url}
      $width={width + "px"}
      $top={top + "px"}
      $left={left + "%"}
    />
  );
}

export default LampImage;
