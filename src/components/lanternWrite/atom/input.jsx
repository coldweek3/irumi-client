import React from "react";
import styled from "styled-components";

const InputWrapper = styled.div``;

const InputTitle = styled.div`
  color: black;
  font-weight: bold;
  font-size: 12px;
`;

const InputContainer = styled.input`
  background-color: #f1f1f1;
  width: 100%;
  padding: ${props => props.$inputpadding || "0.5em"};
  margin-top: 10px;
  border: 1.059px solid #898989;
  border-radius: 5.294px;
  outline: none;
  height: ${props => props.$inputheight || "auto"};
  overflow: ${props => props.$inputoverflow || "scroll"};

  &::placeholder {
    font-size: 10px;
    color: #898989;
    word-spacing: 0.1px;
  }
`;

function PaperInput(props) {
  const { onChange, value } = props;

  return (
    <InputWrapper>
      <InputTitle>{props.inputTitle}</InputTitle>
      <InputContainer
        placeholder={props.inputPlaceholder}
        $inputheight={props.inputHeight}
        $inputpadding={props.inputPadding}
        $inputoverflow={props.inputoverflow}
        maxLength={props.maxLength}
        onChange={onChange}
        value={value}
      ></InputContainer>
    </InputWrapper>
  );
}

export default PaperInput;
