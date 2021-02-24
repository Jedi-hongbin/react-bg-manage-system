import storage, { storageType } from "../utils/storage";
import { error } from "../utils/logger";
import { IUser } from "./../page/Login/useUser";
import { Jwt } from "./types";
// import http from "./httpService";

// const apiEndpoint = "/auth";

export const getCurrentUser = () => {
  // TODO: 解析Jwt (Json web token) 获得user
  return storage.get(storageType.TOKEN);
};

export const logIn = async (user: IUser) => {
  try {
    // TODO: 后端返回一个Jwt表示用户信息
    // const { data: Jwt } = await http.post(apiEndpoint, user);
    storage.set(storageType.TOKEN, user);
  } catch (err) {
    error("login err:", err);
  }
};

export function loginWithJwt(jwt: Jwt) {
  storage.set(storageType.TOKEN, jwt);
}

export const signOut = () => {
  storage.remove(storageType.TOKEN);
};

const auth = {
  logIn,
  signOut,
  getCurrentUser,
};

export default auth;
