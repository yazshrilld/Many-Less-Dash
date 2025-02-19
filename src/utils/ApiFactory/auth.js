import axios from "axios";
import Axios from "../axios";

export const providusLoginFn = async (payload) => {
  const res = await Axios.post(`auth/login`);
  return res;
};
