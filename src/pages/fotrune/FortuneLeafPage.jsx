import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { Link, useParams } from "react-router-dom";
import GradientBackground from "../../components/common/organisms/Background/GradientBackground";
import FixView from "../../components/common/templetes/fixView/FixView";
import { API } from "../../apis/utils";
import fetchFortuneMessage from "../../apis/api/fortune";

const LeafContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  /* border: 3px solid yellow; */
`;

const LeafImg = styled.img`
  display: flex;
  position: relative;
  top: 7%;
  width: 230px;
  max-height: 550px;
  /* justify-content: center; */
  align-items: center;
  /* border: 3px solid red; */
`;

const TextWrapper = styled.div`
  display: flex;
  position: absolute;
  width: 200px;
  height: 200px;
  justify-content: center;
  align-items: center;
  white-space: pre-line;
  top: 35%;
  /* border: 1px solid blue; */
`;

const RandomText = styled.div`
  display: flex;
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
  /* align-items: center; */
  line-height: 1.5;
  padding: 25px;
`;

const QuitButton = styled.img`
  display: flex;
  width: 46px;
  height: 46px;
  justify-content: center;
  bottom: 10%;
  align-items: center;
  /* border: 3px solid blue; */
`;

function FortuneLeafPage() {
  const [fortuneMessage, setFortuneMessage] = useState(
    "당신은 웃는 얼굴이 참 예뻐요 당신의 미소가 힘이 돼요"
  );
  const { lantern_id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      // fetchFortuneMessage 모듈에서 운세 메시지 가져오기
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

        <Link to={`/myDetail/${lantern_id}`}>
          <QuitButton src="/img/Fortune/quit_button.png" />
        </Link>
      </LeafContainer>
    </FixView>
  );
}

export default FortuneLeafPage;
