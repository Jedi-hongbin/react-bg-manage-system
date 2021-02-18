import { useState, useCallback } from "react";

export enum User {
  name = "name",
  password = "password",
}

interface IUser {
  name: string;
  password: string;
}

type HandleChangeUser = (
  key: User
) => (e: React.ChangeEvent<HTMLInputElement>) => void;

const useUser = (): [IUser, HandleChangeUser] => {
  const [user, setUser] = useState<IUser>({ name: "", password: "" });

  const handleChangeUser: HandleChangeUser = useCallback(
    (key) => ({ currentTarget: { value } }) => {
      setUser((user) => ({ ...user, [key]: value }));
    },
    []
  );

  return [user, handleChangeUser];
};

export default useUser;
