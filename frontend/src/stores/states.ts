import { atom } from "recoil";
import { v1 } from "uuid";

const scrollState = atom({
  key: `scrollState${v1()}`,
  default: 0,
});

const scrollBtnState = atom({
  key: `scrollBtnState${v1()}`,
  default: false,
});

const emailState = atom({
  key: `emailState${v1()}`,
  default: "",
});

const pwState = atom({
  key: `pwState${v1()}`,
  default: "",
});

const rememberState = atom({
  key: `rememberState${v1()}`,
  default: "",
});

export { scrollState, scrollBtnState, emailState, pwState, rememberState };
