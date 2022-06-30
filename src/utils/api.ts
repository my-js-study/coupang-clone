import axios from "axios";
import cookies from "js-cookie";
import { COOKIE_EXPIRES, COOKIE_KEYS } from "../constants/cookie";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_HOST,
});

api.interceptors.response.use((response) => {
  if (response.data.access) {
    cookies.set(COOKIE_KEYS.ACCESS_TOKEN, response.data.access, {
      expires: COOKIE_EXPIRES.A_DAY,
    });
  }

  if (response.data.refresh) {
    cookies.set(COOKIE_KEYS.REFRESH_TOKEN, response.data.refresh, {
      expires: COOKIE_EXPIRES.A_WEEK,
    });
  }

  return response;
});
