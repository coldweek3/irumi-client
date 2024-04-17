import { API } from "../utils";

export const getLanterns = async type => {
  try {
    const result = await API.get(`api/lanterns/${type}`);
    return result.data;
  } catch (error) {
    console.log(error);
  }
};
