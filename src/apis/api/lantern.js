import { API } from "../utils";

export const getLanterns = async type => {
  try {
    const result = await API.get(`api/lanterns/${type}`);
    return { type: "clear", data: result.data };
  } catch (error) {
    return { type: "error", message: error.message };
  }
};
