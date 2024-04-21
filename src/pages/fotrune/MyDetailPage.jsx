import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import FixView from "../../components/common/templetes/fixView/FixView";
import MyBtn from "../../components/fortune/atoms/MyBtn";
import { fetchLanternData } from "../../apis/api/lanternDetail";


const DetailLanternWrapper = styled.div`
  /* width: 84%; */
  /* height: auto; */
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  left: 50%;
  top: 41%;
  transform: translate(-50%, -50%);
  position: absolute;
`;

const DetailLanternImg = styled.img`
  height: auto;
  transform: scale(0.6);
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
  /* border: 1px solid brown; */
`;

const ContentSec = styled(TitleSec)`
  top: 65%;
  font-size: 14px;
  line-height: 130%;
  /* border: 1px solid white; */
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
        console.log(data);
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
        value={`/myDetail/${detailId}`}
        style={{ position: "fixed", top: "-123px" }}
      />
      {lanternData && (
        <DetailLanternWrapper>
          <DetailLanternImg
            src={`/img/lanternCard/${lanternData.lanternColor}_${lanternData.light_bool}.png`}
          />

          <TitleSec>{lanternData.nickname}</TitleSec>
          <ContentSec>{lanternData.content}</ContentSec>
        </DetailLanternWrapper>
      )}

      <MyBtn />
    </FixView>
  );
}

export default MyDetailPage;
