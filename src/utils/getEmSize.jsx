// 피그마 기준 작업 뷰가 420px일때
// 지원하는 윈도우뷰의 최대가 560px일때

const figmaSize = 420;
export const maxSize = 560;

export function getEmSize(windowSize) {
  if (windowSize < maxSize) {
    return (windowSize / figmaSize) * 10;
  } else if (windowSize > figmaSize) {
    return (maxSize / figmaSize) * 10;
  }
}
