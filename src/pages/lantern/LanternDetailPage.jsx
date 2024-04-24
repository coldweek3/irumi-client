import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

//import component
import Header from "../../components/common/molecules/header/header";
import LikeBtn from "../../components/lanternWrite/atom/likeBtn";
import InitView from "../../components/common/templetes/initView/InitView";

//import api
import { fetchLanternData } from "../../apis/api/lanternDetail";
import { postLike } from "../../apis/api/likeBtn";

//import modal component
import MoreModal from "../../components/lanternWrite/organisms/moreModal";
import DeleteModal from "../../components/lanternWrite/organisms/DeleteModal";
import PwModal from "../../components/lanternWrite/organisms/PwModal";
import ReportModal from "../../components/lanternWrite/organisms/ReportModal";
import ReportAlertModal from "../../components/lanternWrite/organisms/ReportAlertModal";
import ReportedAlertModal from "../../components/lanternWrite/organisms/ReportedAlertModal";
import FixView from "../../components/common/templetes/fixView/FixView";
import ModalBackground from "../../components/lanternWrite/atom/ModalBg";
import NoLanternDetail from "../../components/common/templetes/initView/noLantern";

function LanternDetailPage() {
  const [isInit, setIsInit] = useState(true);
  const { detailId } = useParams();
  const [lanternData, setLanternData] = useState(null);

  useEffect(() => {
    const getLanternDetail = async () => {
      try {
        const userId = localStorage.getItem("userid");
        const data = await fetchLanternData(detailId, userId);
        setLanternData(data);
        console.log(data);
        setIsInit(false);
      } catch (error) {
        console.error("Error fetching lantern detail:", error);
      }
    };
    getLanternDetail();
  }, [detailId]);

  // 좋아요 처리 함수
  const handleLikeClick = async () => {
    try {
      let userId = localStorage.getItem("userid");
      if (!userId) {
        userId = Math.random().toString(36).substring(7);
        localStorage.setItem("userid", userId);
      }

      const response = await postLike(detailId, userId);

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

  //더보기 버튼
  const [modalOpen, setModalOpen] = useState(false);
  // 삭제
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [pwModalOpen, setPwModalOpen] = useState(false);
  // 신고
  const [reportModalOpen, setReportModalOpen] = useState(false);
  const [reportedModalOpen, setReportedModalOpen] = useState(false);
  const [isReportedModalOpen, setIsReportedModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  // 연등 삭제 모달
  const openDeleteModal = () => {
    setDeleteModalOpen(true);
    closeModal();
  };
  const closeDeleteModal = () => {
    setDeleteModalOpen(false);
  };

  // 비밀번호 입력 모달
  const openPwModal = () => {
    setPwModalOpen(true);
    closeDeleteModal();
  };

  const closePwModal = () => {
    setPwModalOpen(false);
  };

  // 신고 체크박스 모달
  const openReportModal = () => {
    setReportModalOpen(true);
    closeModal();
  };
  const closeReportModal = () => {
    setReportModalOpen(false);
  };
  // 신고 완료 모달
  const openReportedModal = () => {
    setReportedModalOpen(true);
    closeReportModal();
    setTimeout(() => {
      setReportedModalOpen(false);
    }, 1500);
  };
  // 이미 신고한 게시글 모달
  const openIsReportedModal = () => {
    setIsReportedModalOpen(true);
    closeReportModal();
    setTimeout(() => {
      setIsReportedModalOpen(false);
    }, 1500);
  };

  return isInit ? (
    <InitView />
  ) : (
    <FixView>
      <Header />
      {lanternData ? (
        <LanternViewPaperContainer>
          <LanternDotContainer onClick={openModal}>
            <LanternDot src="/img/Lantern/Dot.png" />
          </LanternDotContainer>
          {/* 더보기 모달 */}
          {modalOpen && (
            <MoreModal
              closeModal={closeModal}
              openDeleteModal={openDeleteModal}
              openReportModal={openReportModal}
            />
          )}
          {/* 연등 삭제 모달*/}
          {deleteModalOpen && (
            <DeleteModal
              closeDeleteModal={closeDeleteModal}
              openPwModal={openPwModal}
            />
          )}
          {/* 비밀번호 입력 모달 */}
          {pwModalOpen && (
            <>
              <PwModal
                openPwModal={openPwModal}
                closePwModal={() => {
                  closePwModal();
                }}
                data={lanternData}
              />
            </>
          )}

          {/* 신고 모달 */}
          {reportModalOpen && (
            <ReportModal
              closeReportModal={closeReportModal}
              openReportedModal={openReportedModal}
              openIsReportedModal={openIsReportedModal}
              detailId={detailId}
            />
          )}
          {/* 신고 완료 모달 */}
          {reportedModalOpen && <ReportAlertModal />}
          {/* 이미 신고한 게시글 모달 */}
          {isReportedModalOpen && <ReportedAlertModal />}
          <LanternViewPaperImg
            src={
              lanternData
                ? `/img/lanternCard/${lanternData.lanternColor}_${lanternData.light_bool}.png`
                : ""
            }
          />
          {/* ModalBackground 컴포넌트 사용 */}
          {(deleteModalOpen ||
            pwModalOpen ||
            pwModalOpen ||
            reportedModalOpen ||
            isReportedModalOpen) && <ModalBackground />}

          <LanternViewNickname>
            {lanternData ? lanternData.nickname : ""}
          </LanternViewNickname>
          <LanternViewWish>
            {lanternData ? lanternData.content : ""}
          </LanternViewWish>
          <LikeBtn
            handleLikeClick={handleLikeClick}
            isLiked={lanternData ? lanternData.is_liked : false}
            LikeCount={lanternData ? lanternData.like_cnt : 0}
          />
        </LanternViewPaperContainer>
      ) : (
        <NoLanternDetail />
      )}
    </FixView>
  );
}

export default LanternDetailPage;

const LanternViewPaperContainer = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  height: 100%;
  width: 100%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const LanternViewPaperImg = styled.img`
  transform: scale(0.8);
`;

const LanternDotContainer = styled.div`
  position: absolute;
  transform: scale(0.2);
  top: 48%;
  margin-left: 120px;
  z-index: 9;
  min-width: 70px;
  min-height: 100px;
  justify-content: center;
  display: flex;
  align-items: center;
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
  white-space: pre-line;
  width: 13em;
  min-width: 3em;
  line-height: 11px;
  max-height: 15em;
  overflow: scroll;
`;
