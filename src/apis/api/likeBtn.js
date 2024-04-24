import { API } from "../utils";

// 좋아요를 추가하거나 제거하는 함수
export const postLike = async (detailId, userId) => {
  const headers = {
    "Content-Type": "application/json",
    userid: userId
  };

  try {
    const data = await API.post(
      `/api/lanterns/${detailId}/likes`,
      {},
      { headers: headers }
    );
    return data;
  } catch (error) {
    throw error;
  }
};
