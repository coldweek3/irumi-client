import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import FixView from "../../components/common/templetes/fixView/FixView";
import fetchFortuneMessage from "../../apis/api/fortune";

const LeafContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`;

const LeafImg = styled.img`
  position: relative;
  top: 7%;
  width: 230px;
  max-height: 550px;
`;

const TextWrapper = styled.div`
  position: absolute;
  display: flex;
  width: 200px;
  height: 200px;
  justify-content: center;
  align-items: center;
  white-space: pre-line;
  top: 35%;
`;

const RandomText = styled.div`
  position: absolute;
  top: 25%;
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
  height: 54%;
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

        <Link to={`/myDetail/${detailId}`}>
          <QuitButton src="/img/Fortune/quit_button.png" />
        </Link>
      </LeafContainer>
    </FixView>
  );
}

export default FortuneLeafPage;
