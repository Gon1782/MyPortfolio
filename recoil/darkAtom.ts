import { atom } from "recoil";
import { v4 } from "uuid";

export const darkState = atom({
  key: `isDark/${v4()}`,
  default: false,
});
