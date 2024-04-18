import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Header from "../../components/common/molecules/header/header";
import LanternDetailBg from "../../components/common/organisms/Background/LanternDetailBg";
import LikeBtn from "../../components/lanternWrite/atom/likeBtn";
import { useParams } from "react-router-dom";
import { fetchLanternData } from "../../apis/api/lanternDetail";
import { postLike } from "../../apis/api/likeBtn";

const Background = styled.div`
  background-image: ${props => `url(${props.$backgroundImageUrl})`};
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  position: relative;
  background-size: cover;
`;

const LanternViewPaperContainer = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  height: 85%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const LanternViewPaperImg = styled.img`
  transform: scale(0.9);
`;

const LanternDotContainer = styled.div`
  position: absolute;
  transform: scale(0.2);
  top: 46%;
  margin-left: 120px;
  z-index: 9;
  cursor: pointer;
`;

const LanternDot = styled.img``;

const LanternViewNickname = styled.div`
  position: absolute;
  top: 57%;
  color: #5b3a1a;
  font-size: 13px;
`;

const LanternViewWish = styled.div`
  position: absolute;
  top: 62%;
  font-size: 10px;
  color: #5b3a1a;
  white-space: "pre-line";
  width: 13em;
  min-width: 3em;
  line-height: 11px;
`;

function LanternDetail() {
  const { backgroundImageUrl } = LanternDetailBg();
  const { detailId } = useParams();
  const [lanternData, setLanternData] = useState(null);

  useEffect(() => {
    const getLanternDetail = async () => {
      try {
        const data = await fetchLanternData(detailId);
        console.log("get해온 연등 디테일:", data);
        setLanternData(data);
      } catch (error) {
        console.error("Error fetching lantern detail:", error);
      }
    };
    getLanternDetail();
  }, [detailId]);

  // 좋아요 처리 함수
  const handleLikeClick = async () => {
    try {
      // 좋아요 상태 업데이트
      const response = await postLike(detailId);
      console.log("좋아요 요청:", response.config); // 요청 데이터 로그
      console.log("좋아요 응답:", response.data); // 응답 데이터 로그
      if (response.status === 200) {
        setLanternData(prevData => ({
          ...prevData,
          is_liked: !prevData.is_liked,
          like_cnt: prevData.is_liked
            ? prevData.like_cnt - 1
            : prevData.like_cnt + 1
        }));
      }
    } catch (error) {
      console.error("좋아요 처리 중 오류 발생:", error);
    }
  };

  return (
    <Background $backgroundImageUrl={backgroundImageUrl}>
      <Header />
      <LanternViewPaperContainer>
        <LanternDotContainer>
          <LanternDot src="/img/Lantern/Dot.png" />
        </LanternDotContainer>
        <LanternViewPaperImg
          src={
            lanternData
              ? `/img/lanternCard/${lanternData.lanternColor}_${lanternData.light_bool}.png`
              : ""
          }
        />

        <LanternViewNickname>
          {lanternData ? lanternData.nickname : ""}
        </LanternViewNickname>
        <LanternViewWish>
          {lanternData ? lanternData.content : ""}
        </LanternViewWish>
        <LikeBtn
          handleLikeClick={handleLikeClick}
          isLiked={lanternData ? lanternData.is_liked : ""}
          LikeCount={lanternData ? lanternData.like_cnt : ""}
        />
      </LanternViewPaperContainer>
    </Background>
  );
}

export default LanternDetail;
