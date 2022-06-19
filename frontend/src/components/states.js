import { atom } from "recoil";

const scrollState = atom({
  key: "scrollState",
  default: "",
});

const scrollBtnState = atom({
  key: "scrollBtnState",
  default: 0,
});

const emailState = atom({
  key: "emailState",
  default: "",
});

const pwState = atom({
  key: "pwState",
  default: "",
});

const rememberState = atom({
  key: "rememberState",
  default: "",
});

export { scrollState, scrollBtnState, emailState, pwState, rememberState };
