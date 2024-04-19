import React from "react";
import styled from "styled-components";

const DraggWrapper = styled.div`
  width: 100%;
  transform: translate(-50%, 0);
  position: absolute;
  top: ${props => props.$top};
  left: ${props => props.$left};
  display: flex;
  justify-content: center;
  align-items: center;
`;

function LampDrag({ children, top, left }) {
  return (
    <DraggWrapper $top={top + "px"} $left={left + "%"}>
      {children}
    </DraggWrapper>
  );
}

export default LampDrag;
