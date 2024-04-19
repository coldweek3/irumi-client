import React, { useEffect, useState } from "react";
import ScrollView from "../../components/common/templetes/scrollView/ScrollView";

import SearchHeader from "../../components/common/molecules/header/SearchHeader";
import LanternList from "../../components/lanterns/molecules/lanternList/LanternList";
import ToggleButton from "../../components/lanterns/atoms/button/ToggleButton";
import InitView from "../../components/common/templetes/initView/InitView";
import { getLanterns } from "../../apis/api/lantern";
import { PaginationTotalPage } from "../../emun/pagination";
import InfinifyScroll from "../../components/lanterns/organisms/infinityScroll/InfinifyScroll";
import { useParams } from "react-router-dom";
import LanternsTextLabel from "../../components/lanterns/atoms/lanternsTextLabel/LanternsTextLabel";

function LanternsPage() {
  const params = useParams();
  // 최신순, 인기순 토글
  const indexKor = ["최신순", "인기순"];
  const indexEng = ["recent", "pop"];

  const [currentIndex, setCurrentIndex] = useState(0);
  const getCurrentIndex = data => {
    setCurrentIndex(data);
  };

  // 초기 API 호출 관련
  const [isInit, setIsInit] = useState(true);
  const [lanterns, setLanterns] = useState([]);

  const [totPage, setTotPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await getLanterns(
      `${indexEng[currentIndex]}?page=${currentPage}&nickname=${params.nickname}`
    ).then(result => {
      if (result.type == "clear") {
        setLanterns(result.data.results);
        setTotPage(PaginationTotalPage(result.data.count));
        setIsInit(false);
      }
    });
  };

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    console.log(currentPage);
    if (currentPage > 1) {
      loadData();
    }
  }, [currentPage]);

  // 다음 페이지를 불러오는 함수
  const loadData = async () => {
    setIsLoading(true);
    await getLanterns(
      `${indexEng[currentIndex]}?page=${currentPage}&nickname=${params.nickname}`
    ).then(result => {
      setIsLoading(false);
      if (result.type == "clear") {
        setLanterns(prevLanterns => [...prevLanterns, ...result.data.results]);
      }
    });
  };

  return isInit ? (
    <InitView />
  ) : (
    <ScrollView>
      <SearchHeader className={"scroll"} />

      {/* 무한 스크롤을 적용한 내부 콘텐츠 */}
      <InfinifyScroll
        isLoading={isLoading}
        isMoreData={currentPage < totPage}
        onBottom={() => setCurrentPage(currentPage + 1)}
      >
        {/* 검색 결과 분기 설정 */}

        {lanterns.length == 0 ? (
          <LanternsTextLabel className={"none"}>
            '{params.keyword}'에 대한 검색 결과가 없습니다.
          </LanternsTextLabel>
        ) : (
          <>
            <LanternsTextLabel className={"notNone"}>
              '{params.keyword}'에 대한 검색 결과입니다.
            </LanternsTextLabel>
            <LanternList lanterns={lanterns} />
          </>
        )}

        <LanternList lanterns={lanterns} />
      </InfinifyScroll>
      {/* 무한 스크롤을 적용한 내부 콘텐츠 */}
    </ScrollView>
  );
}

export default LanternsPage;
