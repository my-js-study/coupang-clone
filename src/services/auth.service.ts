import cookies from "js-cookie";
import { COOKIE_EXPIRES, COOKIE_KEYS } from "../constants/cookie";
import { api } from "../utils/api";
import { setAuthCookies } from "../utils/cookie";

type SignupAgreements = {
  privacy: boolean;
  ad:
    | {
        email: boolean;
        sms: boolean;
        app: boolean;
      }
    | false;
};

class AuthService {
  /** refreshToken을 이용해 새로운 토큰을 발급받습니다. */
  async refresh() {
    const refreshToken = cookies.get(COOKIE_KEYS.REFRESH_TOKEN);
    if (!refreshToken) {
      return;
    }

    const { data } = await api.post("/auth/refresh", null, {
      headers: {
        Authorization: `Bearer ${refreshToken}`,
      },
    });

    setAuthCookies(data.access, data.refresh);
  }

  /** 새로운 계정을 생성하고 토큰을 발급받습니다. */
  async signup(
    email: string,
    password: string,
    name: string,
    phoneNumber: string,
    agreements: SignupAgreements
  ) {
    const { data } = await api.post("/auth/signup", {
      email,
      password,
      name,
      phoneNumber,
      agreements,
    });

    setAuthCookies(data.access, data.refresh);
  }

  /** 이미 생성된 계정의 토큰을 발급받습니다. */
  async login(email: string, password: string) {
    const { data } = await api.post("/auth/login", { email, password });

    setAuthCookies(data.access, data.refresh);
  }
}

export default new AuthService();
