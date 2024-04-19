import { API } from "../utils";

export const getLanterns = async type => {
  try {
    const result = await API.get(`api/lanterns/${type}`);
    console.log(result);
    return { type: "clear", data: result.data };
  } catch (error) {
    console.log("에러발생");
    return { type: "error", message: error.message };
  }
};
