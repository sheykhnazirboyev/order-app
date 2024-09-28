import axios from "axios";
import { ILogin } from "../types";

const URL = "http://localhost:9001/api/auth";

export const loginService = async ({ username, password }: ILogin) => {
  try {
    const response = await axios.post(URL, { username, password });
    return response.data;
  } catch (err) {}
};
