import { useRecoilValue } from "recoil";
import { theme } from "../../../recoil/theme";

import dayImage from "../../../assets/image/WishWrite/DayGradientBg.png";
import sunsetImage from "../../../assets/image/WishWrite/SunsetGradientBg.png";
import nightImage from "../../../assets/image/WishWrite/NightGradientBg.png";

function GradientBackground() {
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

export default GradientBackground;
