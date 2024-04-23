import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import html2canvas from "html2canvas";
import FixView from "../../components/common/templetes/fixView/FixView";
import MyBtn from "../../components/fortune/atoms/MyBtn";
import { fetchLanternData } from "../../apis/api/lanternDetail";
import NoLanternDetail from "../../components/common/templetes/initView/noLantern";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const DetailLanternWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  left: 50%;
  top: 41%;
  transform: translate(-50%, -50%);
`;

const DetailLanternImg = styled.img`
  height: auto;
  transform: scale(0.6);
`;

const TitleSec = styled.div`
  position: absolute;
  top: 56%;
  width: 33%;
  color: #5b3a1a;
  font-size: 16px;
  font-weight: 400;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentSec = styled.div`
  position: absolute;
  display: flex;
  top: 60%;
  width: 33%;
  color: #5b3a1a;
  font-size: 14px;
  justify-content: center;
  align-items: center;
  line-height: 130%;
  padding: 10px;
`;

function MyDetailPage() {
  const FixViewRef = useRef(); // FixView의 ref 추가
  const { detailId } = useParams();
  const [lanternData, setLanternData] = useState(null);

  useEffect(() => {
    const getLanternDetail = async () => {
      try {
        const data = await fetchLanternData(detailId);
        setLanternData(data);
      } catch (error) {
        console.error("Error fetching lantern detail:", error);
      }
    };
    getLanternDetail();
  }, [detailId]);

  const handleDownload = async () => {
    if (!FixViewRef.current) return;

    try {
      const canvas = await html2canvas(FixViewRef.current); // FixView의 내용 캡처
      const imageUrl = canvas.toDataURL();
      const a = document.createElement("a");
      a.href = imageUrl;
      a.download = "당신의_연등.png";

      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch (error) {
      console.error("Error capturing image:", error);
    }
  };

  return (
    <Container>
      {lanternData && (
        <MyBtn
          handleDownload={handleDownload}
          FixViewRef={FixViewRef} // FixView의 ref 전달
          detailId={detailId}
        />
      )}
      {lanternData ? (
        <FixView ref={FixViewRef}>
          {" "}
          {/* FixView에 ref 추가 */}
          {lanternData && (
            <DetailLanternWrapper>
              <DetailLanternImg
                src={`/img/lanternCard/${lanternData.lanternColor}_${lanternData.light_bool}.png`}
              />
              <TitleSec>{lanternData.nickname}</TitleSec>
              <ContentSec>{lanternData.content}</ContentSec>
            </DetailLanternWrapper>
          )}
        </FixView>
      ) : (
        <NoLanternDetail />
      )}
    </Container>
  );
}

export default MyDetailPage;
