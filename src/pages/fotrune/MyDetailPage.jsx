import React, { useEffect, useRef, useState } from "react";
import { API } from "../../apis/utils";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import FixView from "../../components/common/templetes/fixView/FixView";
import MyBtn from "../../components/fortune/atoms/MyBtn";

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
  const [lanternDetail, setLanternDetail] = useState([]);

  const { detailId } = useParams();

  useEffect(() => {
    // 더미 데이터 생성
    const dummyData = {
      id: 1,
      lanternColor: 2,
      light_bool: true,
      nickname: "킼",
      content: "잘 자게 해주세요"
    };

    // 더미 데이터를 lanternDetail 상태에 설정
    setLanternDetail([dummyData]);
  }, [detailId]);

  useEffect(() => {
    const fetchLanternDetailData = async () => {
      try {
        if (detailId) {
          const response = await API.get(`/api/lanterns/${detailId}`, {
            withCredentials: true
          });

          setLanternDetail(response.data);
        }
      } catch (error) {
        console.error(
          "각 id에 해당하는 연등 디테일 가져오는 중 에러 발생",
          error
        );
      }
    };

    fetchLanternDetailData();
  }, [detailId]);

  return (
    <FixView>
      <textarea
        ref={LinkRef}
        value={`/${detailId}`}
        style={{ position: "fixed", top: "-123px" }}
      />
      <IrumiViewWrapper id="detailWrapper">
        {lanternDetail.map(item => (
          <DetailLanternWrapper key={item.id}>
            <DetailLanternImg
              src={`/detail_${item.lanternColor}_${item.light_bool}.png`}
            />
            <TitleSec>{item.nickname}</TitleSec>
            <ContentSec>{item.content}</ContentSec>
          </DetailLanternWrapper>
        ))}
      </IrumiViewWrapper>

      <MyBtn />
    </FixView>
  );
}

export default MyDetailPage;
