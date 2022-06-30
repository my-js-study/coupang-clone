import cookies from "js-cookie";

import { COOKIE_KEYS } from "../constants/cookie";
import type { GetReadRequest } from "../types/api";
import Service from "./service";

class UserService extends Service {
  async me() {
    const accessToken = cookies.get(COOKIE_KEYS.ACCESS_TOKEN);
    if (!accessToken) {
      return;
    }

    const { data } = await this.api.get("/users/me", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return data;
  }

  async read({ id }: GetReadRequest) {
    const { data } = await this.api.get("/users/" + id);

    return data;
  }
}

export default new UserService();
