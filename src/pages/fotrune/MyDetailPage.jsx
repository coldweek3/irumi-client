import React, { useEffect, useRef, useState } from "react";
import { API } from "../../apis/utils";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import FixView from "../../components/common/templetes/fixView/FixView";
import MyBtn from "../../components/fortune/atoms/MyBtn";
import { fetchLanternData } from "../../apis/api/lanternDetail";

const IrumiViewWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url("/background_detail.png");
  background-size: cover;
  background-position: center;
  margin-bottom: 20px;
`;

const DetailLanternWrapper = styled.div`
  width: 84%;
  height: auto;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: -15px;
`;

const DetailLanternImg = styled.img`
  width: 82%;
  height: auto;
`;

const TitleSec = styled.div`
  position: absolute;
  top: 60%;
  width: 44%;
  color: #5b3a1a;
  font-size: 16px;
  font-weight: 400;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentSec = styled(TitleSec)`
  top: 65%;
  font-size: 14px;
  line-height: 130%;
`;

function MyDetailPage() {
  const LinkRef = useRef();
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

  return (
    <FixView>
      <textarea
        ref={LinkRef}
        value={`/${detailId}`}
        style={{ position: "fixed", top: "-123px" }}
      />
      <IrumiViewWrapper id="detailWrapper">
        {lanternData && (
          <DetailLanternWrapper>
            <DetailLanternImg
              src={`/detail_${lanternData.lanternColor}_${lanternData.light_bool}.png`}
            />
            <TitleSec>{lanternData.nickname}</TitleSec>
            <ContentSec>{lanternData.content}</ContentSec>
          </DetailLanternWrapper>
        )}
      </IrumiViewWrapper>

      <MyBtn />
    </FixView>
  );
}

export default MyDetailPage;
