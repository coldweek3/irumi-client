import { atom } from "recoil";
import moment from "moment";

export const getTheme = () => {
  const nowTime = parseInt(moment().format("H"));

  return nowTime > 6 && nowTime < 19 ? "DAY" : "NIGHT";
};

export const themeMode = atom({ key: "Theme-Mode", default: getTheme() });
