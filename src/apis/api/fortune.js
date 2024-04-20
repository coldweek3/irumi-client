import { API } from "../../apis/utils";

const fetchFortuneMessage = async () => {
  try {
    const response = await API.get("/api/lanterns/cookie");
    console.log("API 응답 데이터:", response.data);
    return response.data.fortune;
  } catch (error) {
    console.error("API 요청 실패:", error);
    // API 요청 실패 시 기본 메시지 반환
    return "당신은 웃는 얼굴이 참 예뻐요 당신의 미소가 힘이 돼요";
  }
};

export default fetchFortuneMessage;
