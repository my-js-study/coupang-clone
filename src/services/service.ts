import axios, { AxiosInstance } from "axios";

class Service {
  api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: process.env.NEXT_PUBLIC_API_HOST,
    });
  }
}

export default Service;
