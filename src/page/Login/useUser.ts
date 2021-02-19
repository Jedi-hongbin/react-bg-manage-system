import { useState, useCallback } from "react";

export enum USER {
  name = "name",
  password = "password",
}

interface IUser {
  [USER.name]: string;
  [USER.password]: string;
}

type HandleChangeUser = (e: React.ChangeEvent<HTMLInputElement>) => void;

const initialUser = {
  [USER.name]: "",
  [USER.password]: "",
};

const useUser = (): [IUser, HandleChangeUser] => {
  const [user, setUser] = useState<IUser>({ ...initialUser });

  const handleChangeUser: HandleChangeUser = useCallback(
    ({ currentTarget: { value, name: key } }) => {
      setUser((user) => ({ ...user, [key]: value }));
    },
    []
  );

  return [user, handleChangeUser];
};

export default useUser;
