import { keyframes, css } from "styled-components";

export const fadeInAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(-2rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const colors = {
  black: "#1E1E25",
  white: "#FFFFFF",
  grey0: "#F4F6FA",
  grey1: "#D6D6DD",
  grey2: "#9393A0",
  grey3: "#737381",
  grey4: "#585865",
  grey5: "#FF0000",
  important: "#FF0000"
};

export const theme = {
  colors
};
export default colors;
