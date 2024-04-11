import { atom } from "recoil";
import { getEmSize } from "../utils/getEmSize";

export const emSize = atom({
  key: "Em-Size",
  default: getEmSize(window.innerWidth)
});
