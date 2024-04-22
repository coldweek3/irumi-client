import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import FixView from "../../components/common/templetes/fixView/FixView";
import MyBtn from "../../components/fortune/atoms/MyBtn";
import { fetchLanternData } from "../../apis/api/lanternDetail";
import html2canvas from "html2canvas";

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
  top: 62%;
  width: 33%;
  color: #5b3a1a;
  font-size: 14px;
  justify-content: center;
  align-items: center;
  line-height: 130%;
`;

function MyDetailPage() {
  const LinkRef = useRef();
  const LanternRef = useRef(); // 이미지 요소를 참조하는 Ref
  const TitleSecRef = useRef(); // 제목 요소를 참조하는 Ref
  const ContentSecRef = useRef(); // 내용 요소를 참조하는 Ref
  const DetailLanternWrapperRef = useRef(); // DetailLanternWrapper 요소를 참조하는 Ref
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
    if (!LanternRef.current || !DetailLanternWrapperRef.current) return;

    try {
      const canvas = await html2canvas(DetailLanternWrapperRef.current); // DetailLanternWrapper 캡쳐
      const ctx = canvas.getContext("2d");

      // 제목 텍스트 가져오기 및 그리기
      const titleText = lanternData.nickname;
      ctx.fillText(titleText, 10, 250);

      // 내용 텍스트 가져오기 및 그리기
      const contentText = lanternData.content;
      ctx.fillText(contentText, 10, 270);

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
    <FixView>
      <textarea
        ref={LinkRef}
        value={`/myDetail/${detailId}`}
        style={{ position: "fixed", top: "-123px" }}
      />
      {lanternData && (
        <DetailLanternWrapper ref={DetailLanternWrapperRef}>
          <DetailLanternImg
            ref={LanternRef}
            src={`/img/lanternCard/${lanternData.lanternColor}_${lanternData.light_bool}.png`}
          />
          <TitleSec ref={TitleSecRef}>{lanternData.nickname}</TitleSec>
          <ContentSec ref={ContentSecRef}>{lanternData.content}</ContentSec>
        </DetailLanternWrapper>
      )}
      {lanternData && (
        <MyBtn
          handleDownload={handleDownload}
          LanternRef={LanternRef}
          TitleSecRef={TitleSecRef}
          ContentSecRef={ContentSecRef}
        />
      )}
    </FixView>
  );
}

export default MyDetailPage;
