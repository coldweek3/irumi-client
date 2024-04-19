import { useRecoilValue } from "recoil";
import { theme } from "../../../../recoil/theme";

import dayImage from "/img/Lantern/DAY.png";
import sunsetImage from "/img/Lantern/SUNSET.png";
import nightImage from "/img/Lantern/NIGHT.png";

function LanternDetailBg() {
  const currentTheme = useRecoilValue(theme);

  switch (currentTheme) {
    case "DAY":
      return { backgroundImageUrl: dayImage };
    case "SUNSET":
      return { backgroundImageUrl: sunsetImage };
    case "NIGHT":
    default:
      return { backgroundImageUrl: nightImage };
  }
}

export default LanternDetailBg;
