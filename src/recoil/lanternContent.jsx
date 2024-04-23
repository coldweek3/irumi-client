import { atom } from "recoil";

export const nicknameState = atom({
  key: "nicknameState",
  default: ""
});

export const wishState = atom({
  key: "wishState",
  default: ""
});

export const passwordState = atom({
  key: "passwordState",
  default: ""
});

export const emailState = atom({
  key: "emailState",
  default: ""
});

export const clickedState = atom({
  key: "clickedState",
  default: {} // 기본값은 빈 객체입니다.
});
