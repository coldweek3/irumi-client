import { API } from "../utils";

// lantern 데이터를 가져오는 함수
export const fetchLanternData = async detailId => {
  try {
    const result = await API.get(`/api/lanterns/${detailId}`);
    return result.data;
  } catch (error) {
    console.error("Error fetching lantern data:", error);
    return null;
  }
};
