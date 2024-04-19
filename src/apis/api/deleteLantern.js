import { API } from "../utils";

export const deleteLantern = async (lanternId, password) => {
  console.log("deleteLantern 함수 실행 시작:", lanternId, password);
  try {
    const response = await API.post(`/api/lanterns/${lanternId}/delete`, {
      password,
      lanternId
    });
    console.log("deleteLantern 함수 실행 성공:", response);

    return response;
  } catch (error) {
    console.error("deleteLantern 함수 실행 중 오류 발생:", error);
    throw new Error("Failed to delete lantern:", error);
  }
};
