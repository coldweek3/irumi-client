import { API } from "../utils/axios";

export const getLanterns = async type => {
  try {
    console.log(API.defaults.baseURL);
    const result = await API.get(`api/lanterns/${type}`);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
