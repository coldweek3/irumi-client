import { atom } from "recoil";

export const clickedState = atom({
  key: "clickedState",
  default: {
    pink: true,
    yellow: false,
    green: false,
    blue: false,
    purple: false
  }
});
