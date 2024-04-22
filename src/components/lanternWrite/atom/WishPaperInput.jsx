import React from "react";
import styled from "styled-components";

function ContentInput(props) {
  const { onChange, value } = props;

  return (
    <InputWrapper>
      <InputTitle>{props.inputTitle}</InputTitle>
      {props.inputType === "textarea" ? (
        <TextAreaContainer
          placeholder={props.inputPlaceholder}
          $inputheight={props.inputHeight}
          $inputpadding={props.inputPadding}
          $inputoverflow={props.inputoverflow}
          maxLength={props.maxLength}
          onChange={onChange}
          value={value}
        ></TextAreaContainer>
      ) : (
        <InputContainer
          type="text"
          placeholder={props.inputPlaceholder}
          $inputheight={props.inputHeight}
          $inputpadding={props.inputPadding}
          $inputoverflow={props.inputoverflow}
          maxLength={props.maxLength}
          onChange={onChange}
          value={value}
        />
      )}
    </InputWrapper>
  );
}

export default ContentInput;

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

const TextAreaContainer = styled.textarea`
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
