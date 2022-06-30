import cookies from "js-cookie";
import { COOKIE_KEYS } from "../constants/cookie";
import type { LoginRequest, SignupRequest } from "../types/api";
import { api } from "../utils/api";

class AuthService {
  /** refreshToken을 이용해 새로운 토큰을 발급받습니다. */
  async refresh() {
    const refreshToken = cookies.get(COOKIE_KEYS.REFRESH_TOKEN);
    if (!refreshToken) {
      return;
    }

    await api.post("/auth/refresh", null, {
      headers: {
        Authorization: `Bearer ${refreshToken}`,
      },
    });
  }

  /** 새로운 계정을 생성하고 토큰을 발급받습니다. */
  async signup({
    email,
    password,
    name,
    phoneNumber,
    agreements,
  }: SignupRequest) {
    await api.post("/auth/signup", {
      email,
      password,
      name,
      phoneNumber,
      agreements,
    });
  }

  /** 이미 생성된 계정의 토큰을 발급받습니다. */
  async login({ email, password }: LoginRequest) {
    await api.post("/auth/login", { email, password });
  }
}

export default new AuthService();
