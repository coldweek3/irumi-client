import React from "react";
import LanternCard from "../../../common/atoms/lanternCard/LanternCard";
import styled from "styled-components";

const LanternListWrapper = styled.div`
  width: 100%;
  padding: 16px;

  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 40px;
  column-gap: 12px;

  place-items: center;
`;

function LanternList() {
  return (
    <LanternListWrapper>
      <LanternCard wishSize={150} />
      <LanternCard wishSize={150} />
      <LanternCard wishSize={150} />
      <LanternCard wishSize={150} />
      <LanternCard wishSize={150} />
    </LanternListWrapper>
  );
}

export default LanternList;
