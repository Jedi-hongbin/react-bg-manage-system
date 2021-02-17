/* eslint-disable no-console */
import React, { FC, ReactElement } from "react";

interface IProps {}

const Copy: FC<IProps> = (): ReactElement => {
  const arr1 = [{ id: 1 }];
  const arr2 = [{ id: 2 }];
  const arr3 = arr1.concat(arr2);
  const arr4 = [...arr1, ...arr2];
  console.log(arr3);
  console.log(arr4);
  arr1[0].id = 12;
  console.log(arr3);
  console.log(arr4);

  return <div></div>;
};
export default Copy;
