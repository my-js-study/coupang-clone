import cookies from "js-cookie";
import { api } from "../utils/api";

class UserService {
  async me() {
    const accessToken = cookies.get("accessToken");
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

  async read(id: number) {
    const { data } = await api.get("/users/" + id);

    return data;
  }
}

export default new UserService();
