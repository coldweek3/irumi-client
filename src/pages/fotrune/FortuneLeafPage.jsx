import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import FixView from "../../components/common/templetes/fixView/FixView";
import fetchFortuneMessage from "../../apis/api/fortune";
import ButtonList from "../../components/common/molecules/buttonList/ButtonList";

const LeafContainer = styled.div`
  position: relative;
  display: flex;

  justify-content: center;
  align-items: center;

  flex-grow: 1;
`;

const LeafImg = styled.img`
  width: 230px;
  margin-bottom: 40px;
`;

const TextWrapper = styled.div`
  position: absolute;
  display: flex;
  width: 300px;
  height: 200px;
  justify-content: center;
  align-items: center;
  white-space: pre-line;
  /* margin-bottom: 25px; */
`;

const RandomText = styled.div`
  writing-mode: horizontal-tb;
  text-orientation: mixed;
  flex-wrap: wrap;
  word-wrap: break-word;
  word-break: keep-all;
  white-space: pre-line;
  color: #5f3a16;
  font-size: 18px;
  text-align: center;
  line-height: 100%;
  width: 245px;

  justify-content: center;
  line-height: 1.5;
  padding: 25px;
`;

const QuitButton = styled.img`
  width: 46px;
  height: 46px;
  bottom: 10%;
`;

function FortuneLeafPage() {
  const [fortuneMessage, setFortuneMessage] = useState("");
  const { detailId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const message = await fetchFortuneMessage();
      setFortuneMessage(message);
    };

    fetchData();
  }, []);

  return (
    <FixView>
      <LeafContainer>
        <LeafImg src="/img/Fortune/leaf.png" />
        <TextWrapper>
          <RandomText>{fortuneMessage}</RandomText>
        </TextWrapper>
      </LeafContainer>

      <ButtonList className={"bottom"}>
        <Link to={`/myDetail/${detailId}`}>
          <QuitButton src="/img/Fortune/quit_button.svg" />
        </Link>
      </ButtonList>
    </FixView>
  );
}

export default FortuneLeafPage;
