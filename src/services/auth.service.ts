import cookies from "js-cookie";

import { COOKIE_EXPIRES, COOKIE_KEYS } from "../constants/cookie";
import type { LoginRequest, SignupRequest } from "../types/api";
import Service from "./service";

class AuthService extends Service {
  setAuthCookies(access: string, refresh: string) {
    cookies.set(COOKIE_KEYS.ACCESS_TOKEN, access, {
      expires: COOKIE_EXPIRES.A_DAY,
    });
    cookies.set(COOKIE_KEYS.REFRESH_TOKEN, refresh, {
      expires: COOKIE_EXPIRES.A_WEEK,
    });
  }

  /** refreshToken을 이용해 새로운 토큰을 발급받습니다. */
  async refresh() {
    const refreshToken = cookies.get(COOKIE_KEYS.REFRESH_TOKEN);
    if (!refreshToken) {
      return;
    }

    const { data } = await this.api.post("/auth/refresh", null, {
      headers: {
        Authorization: `Bearer ${refreshToken}`,
      },
    });

    this.setAuthCookies(data.access, data.refresh);
  }

  /** 새로운 계정을 생성하고 토큰을 발급받습니다. */
  async signup({
    email,
    password,
    name,
    phoneNumber,
    agreements,
  }: SignupRequest) {
    const { data } = await this.api.post("/auth/signup", {
      email,
      password,
      name,
      phoneNumber,
      agreements,
    });

    this.setAuthCookies(data.access, data.refresh);
  }

  /** 이미 생성된 계정의 토큰을 발급받습니다. */
  async login({ email, password }: LoginRequest) {
    const { data } = await this.api.post("/auth/login", { email, password });

    this.setAuthCookies(data.access, data.refresh);
  }
}

export default new AuthService();
