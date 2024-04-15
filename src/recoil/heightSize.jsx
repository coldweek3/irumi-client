import { atom } from "recoil";

export const heightSize = atom({
  key: "Height-Size",
  default: window.innerHeight
});
