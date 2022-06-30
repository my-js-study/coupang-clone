import cookies from "js-cookie";
import { COOKIE_EXPIRES, COOKIE_KEYS } from "../constants/cookie";

export const setAuthCookies = (access: string, refresh: string) => {
  cookies.set(COOKIE_KEYS.ACCESS_TOKEN, access, {
    expires: COOKIE_EXPIRES.A_DAY,
  });
  cookies.set(COOKIE_KEYS.REFRESH_TOKEN, refresh, {
    expires: COOKIE_EXPIRES.A_WEEK,
  });
};
