import React from "react";
import styled from "styled-components";

function DescriptionText(props) {
  return (
    <LanternWriteDesWrapper>
      <DesTextContainer style={{ whiteSpace: "pre-wrap" }}>
        <DesText>{props.preText}</DesText>
        <DesTextYellow>{props.Yellowtext}</DesTextYellow>
        <DesText>{props.nextText}</DesText>
      </DesTextContainer>
    </LanternWriteDesWrapper>
  );
}

export default DescriptionText;

const LanternWriteDesWrapper = styled.div`
  height: 4em;
  justify-content: center;
  margin-top: 2em;
  display: flex;
  flex-direction: row;
  position: relative;
  margin-top: 1em;
`;

const DesTextContainer = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  width: 100%;
`;

const DesText = styled.div`
  color: white;
  font-size: 1em;
`;

const DesTextYellow = styled.div`
  color: #fcd300;
  font-size: 1em;
`;
