import { atom } from "recoil";
import moment from "moment";

export const getTheme = () => {
  const nowTime = parseInt(moment().format("H"));

  //현재 시간이 오전 6시 부터, 오후 7시 사이라면 낮을 반환
  return nowTime > 6 && nowTime < 19 ? "DAY" : "NIGHT";
};

export const theme = atom({ key: "Theme", default: getTheme() });
