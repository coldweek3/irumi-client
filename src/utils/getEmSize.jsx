// 피그마 기준 작업 뷰가 375px일때
// 지원하는 윈도우뷰의 최대가 420px일때
// 지원하는 윈도우뷰의 최소가 300px일때

export function getEmSize(windowSize) {
  if (windowSize < 420 && windowSize > 300) {
    return (windowSize / 375) * 10;
  } else if (windowSize > 420) {
    return (420 / 375) * 10;
  }
}
