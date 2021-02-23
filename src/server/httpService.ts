import axios from "axios";
import { snackbarMessage } from "../components/UI/Snackbar";
import { log } from "../utils/logger";
import { IHttp, HttpMethod } from "./types";

export function setJwt(jwt: string) {
  axios.defaults.headers.common["x-auth-token"] = jwt;
}

const http: IHttp = {
  [HttpMethod.GET]: axios[HttpMethod.GET],
  [HttpMethod.POST]: axios[HttpMethod.POST],
  [HttpMethod.DELETE]: axios[HttpMethod.DELETE],
};

export default http;

axios.defaults.baseURL = process.env.REACT_APP_API_UTL;

// 错误响应拦截
axios.interceptors.response.use(undefined, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  log("interceptors error:", error); // TODO: 真正上传日志

  if (!expectedError) {
    log("Logging the error", error);
    snackbarMessage("A expected Error!");
  }

  return Promise.reject(error);
});
