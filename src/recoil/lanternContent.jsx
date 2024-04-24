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
  key: "clickedStateUniqueKey", //다른 clickedState와 중복되지 않게 고유한 key값 부여
  default: ""
});
