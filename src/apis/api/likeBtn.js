import { API } from "../utils";

// 좋아요를 추가하거나 제거하는 함수
export const postLike = async (detailId, userId) => {
  const headers = {
    "Content-Type": "application/json",
    userid: userId
  };

  try {
    // 백엔드로 POST 요청을 보냅니다.
    const data = await API.post(
      `/api/lanterns/${detailId}/likes`,
      {},
      { headers: headers }
    );
    console.log("백엔드의 헤더: ", headers);

    // 백엔드에서 보내준 데이터를 반환합니다.
    console.log("좋아요 버튼 로그: ", data);
    return data;
  } catch (error) {
    // 에러가 발생하면 콘솔에 에러 메시지를 출력합니다.
    console.error("Error adding or removing like:", error);
    throw error;
  }
};
