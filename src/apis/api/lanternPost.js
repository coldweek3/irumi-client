import { API } from "../utils";

// Lantern 데이터를 포스트하는 함수
export const postLanternData = async ({
  nickname,
  content,
  password,
  lanternColor
}) => {
  try {
    const response = await API.post("/api/lanterns", {
      nickname: nickname,
      content: content,
      password: password,
      lanternColor: lanternColor
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to post lantern data");
  }
};
