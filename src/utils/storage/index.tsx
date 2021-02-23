export enum storageType {
  TOKEN = "token",
}

export const setStorageItem = window.localStorage.setItem;
export const getStorageItem = window.localStorage.getItem;
export const removeStorageItem = window.localStorage.removeItem;

// export const setUserTokenStorage = (token: string) => {
//   window.localStorage.setItem(storageType.TOKEN, token);
// };

// export const getUserTokenStorage = () => {
//   return window.localStorage.getItem(storageType.TOKEN);
// };

// export const clearUserTokenStorage = () => {
//   return window.localStorage.removeItem(storageType.TOKEN);
// };
