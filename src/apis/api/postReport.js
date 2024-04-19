import { API } from "../utils";

export const reportLantern = async (detailId, categories) => {
  try {
    const response = await API.post(`/api/lanterns/${detailId}/report`, {
      category: categories
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    if (error.response) {
      throw error.response.data;
    } else {
      throw error;
    }
  }
};
