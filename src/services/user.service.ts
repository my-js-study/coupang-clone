import cookies from "js-cookie";
import { COOKIE_KEYS } from "../constants/cookie";
import { GetReadRequest } from "../types/api";
import { api } from "../utils/api";

class UserService {
  async me() {
    const accessToken = cookies.get(COOKIE_KEYS.ACCESS_TOKEN);

    if (!accessToken) {
      return;
    }

    const { data } = await api.get("/users/me", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return data;
  }

  async read({ id }: GetReadRequest) {
    const { data } = await api.get("/users/" + id);

    return data;
  }
}

export default new UserService();
