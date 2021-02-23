import { getStorageItem, setStorageItem, storageType } from "../utils/storage";
import { error } from "../utils/logger";
import { Jwt } from "./types";
import { IUser } from "./../page/Login/useUser";
// import http from "./httpService";

// const apiEndpoint = "/auth";

export const getCurrentUser = () => {
  const Jwt: Jwt | null = getStorageItem(storageType.TOKEN);
  // TODO: 解析Jwt (Json web token) 获得user
  return JSON.parse(Jwt || "");
};

export const login = async (user: IUser) => {
  try {
    const Jwt = JSON.stringify(user);
    // TODO: 后端返回一个Jwt表示用户信息
    // const { data: Jwt } = await http.post(apiEndpoint, user);
    setStorageItem(storageType.TOKEN, Jwt);
  } catch (err) {
    error("login err:", err);
  }
};
