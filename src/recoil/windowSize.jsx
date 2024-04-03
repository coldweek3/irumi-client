import { atom } from "recoil";
import { getEmSize } from "../utils/getEmSize";

export const windowSize = atom({
  key: "Window-Size",
  default: getEmSize(window.innerWidth)
});
