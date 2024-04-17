import React, { useEffect, useState } from "react";
import ScrollView from "../../components/common/templetes/scrollView/ScrollView";

import SearchHeader from "../../components/common/molecules/header/SearchHeader";
import LanternList from "../../components/lanterns/molecules/lanternList/LanternList";
import ToggleButton from "../../components/lanterns/atoms/button/ToggleButton";
import InitView from "../../components/common/templetes/initView/InitView";
import { getLanterns } from "../../apis/api/lantern";
import { getInitData } from "../../apis/services/getData";

function LanternsPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const getCurrentIndex = data => {
    setCurrentIndex(data);
  };

  const indexKor = ["최신순", "인기순"];
  const indexEng = ["recent", "pop"];

  const [isInit, setIsInit] = useState(true);
  const [data, setData] = useState();

  const fetchData = async () => {
    await getLanterns(indexEng[currentIndex])
      .then(getInitData)
      .then(data => {
        setData(data);
      });
    setIsInit(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return isInit ? (
    <InitView />
  ) : (
    <ScrollView>
      <SearchHeader className={"scroll"} />
      <ToggleButton
        index={indexKor}
        currentIndex={currentIndex}
        getCurrentIndex={getCurrentIndex}
      />
      <LanternList lanterns={data.results} />
    </ScrollView>
  );
}

export default LanternsPage;
