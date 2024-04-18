import { API } from "../utils";

export const deleteLantern = async (lanternId, password) => {
  try {
    const Response = await API.post(`/api/lanterns/${lanternId}/delete`, {
      password
    });
    return Response;
  } catch (error) {
    throw new Error("Failed to delete lantern:", error);
  }
};
