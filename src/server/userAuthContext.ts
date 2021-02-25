import { createContext, useContext } from "react";

export type UserAuth = {
  name: string;
  isAdmin: boolean;
} | null;

export type TUserAuthContext = [
  UserAuth,
  React.Dispatch<React.SetStateAction<UserAuth>>
];

const UserAuthContext = createContext<TUserAuthContext | null>(null);

export default UserAuthContext;

export const useUserInfo: any = () => useContext(UserAuthContext);
