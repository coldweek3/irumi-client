import React from "react";
import styled from "styled-components";

const ToggleWrapper = styled.div`
  padding-top: 32px;
  padding-bottom: 24px;

  display: flex;
  gap: 24px;
`;
const ToggleLabel = styled.div`
  font-size: 20px;

  color: ${props => (props.$isActive ? props.theme.font1 : props.theme.font2)};
`;
function ToggleButton({ index, getCurrentIndex, currentIndex }) {
  return (
    <ToggleWrapper>
      {index.map((item, i) => (
        <ToggleLabel
          key={i}
          onClick={() => getCurrentIndex(i)}
          $isActive={currentIndex == i}
        >
          {item}
        </ToggleLabel>
      ))}
    </ToggleWrapper>
  );
}

export default ToggleButton;
