import React, { useEffect, useState } from "react";
import ScrollView from "../../components/common/templetes/scrollView/ScrollView";

import SearchHeader from "../../components/common/molecules/header/SearchHeader";
import LanternList from "../../components/lanterns/molecules/lanternList/LanternList";
import ToggleButton from "../../components/lanterns/atoms/button/ToggleButton";
import InitView from "../../components/common/templetes/initView/InitView";
import { getLanterns } from "../../apis/api/lantern";
import { PaginationTotalPage } from "../../emun/pagination";
import InfinifyScroll from "../../components/lanterns/organisms/infinityScroll/InfinifyScroll";
import RoundBtn from "../../components/common/atoms/button/RoundBtn";
import { Link } from "react-router-dom";
import ButtonList from "../../components/common/molecules/buttonList/ButtonList";
import { sortEng, sortKor } from "../../emun/sort";

function LanternsPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const getCurrentIndex = data => {
    setCurrentIndex(data);
  };

  useEffect(() => {
    fetchData();
  }, [currentIndex]);

  // 초기 API 호출 관련
  const [isInit, setIsInit] = useState(true);
  const [lanterns, setLanterns] = useState([]);

  const [totPage, setTotPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await getLanterns(`${sortEng[currentIndex]}?page=${currentPage}`).then(
      result => {
        if (result.type == "clear") {
          setLanterns(result.data.results);
          setTotPage(PaginationTotalPage(result.data.count));
          setIsInit(false);
        }
      }
    );
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
    await getLanterns(`${sortEng[currentIndex]}?page=${currentPage}`).then(
      result => {
        setIsLoading(false);
        if (result.type == "clear") {
          setLanterns(prevLanterns => [
            ...prevLanterns,
            ...result.data.results
          ]);
        }
      }
    );
  };

  return isInit ? (
    <InitView />
  ) : (
    <ScrollView>
      <ButtonList className={"fixBottom"}>
        <Link to={"/lanternColor"}>
          <RoundBtn className={"primary"} icon={"/icon/pen.svg"} />
        </Link>
      </ButtonList>

      <SearchHeader className={"scroll"} to="/" />

      {/* 무한 스크롤을 적용한 내부 콘텐츠 */}
      <InfinifyScroll
        isLoading={isLoading}
        isMoreData={currentPage < totPage}
        onBottom={() => setCurrentPage(currentPage + 1)}
      >
        <ToggleButton
          index={sortKor}
          currentIndex={currentIndex}
          getCurrentIndex={getCurrentIndex}
        />
        <LanternList lanterns={lanterns} />
      </InfinifyScroll>
      {/* 무한 스크롤을 적용한 내부 콘텐츠 */}
    </ScrollView>
  );
}

export default LanternsPage;
