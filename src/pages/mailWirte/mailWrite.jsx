import React from "react";
import styled from "styled-components";

import FixView from "../../components/common/templetes/fixView/FixView";
//배경지 컴포넌트
import GradientBackground from "../../components/common/organisms/Background/GradientBackground";
import Header from "../../components/common/molecules/header/header";

//등불 배너
import MailBanner from "../../components/main/atoms/mailBanner/MailBanner";

function mailWrite() {
  return (
    <FixView>
      <Header title="더 오래 간직할 수 있는 등불 쓰기💌" />
      <MailBanner />
    </FixView>
  );
}

export default mailWrite;
