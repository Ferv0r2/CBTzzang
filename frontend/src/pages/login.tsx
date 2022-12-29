import React from "react";
import { NextPage } from "next/types";
import Link from "next/link";

/* Icon */
import { LockClosedIcon } from "@heroicons/react/solid";

/* Component */
import { AutoImage } from "utils";

/* State */
import { useRecoilState } from "recoil";
import { emailState, pwState, rememberState } from "stores";
import { v1 } from "uuid";
import { GetUsersAPI } from "~/api";

const Login: NextPage = () => {
  const [email, setEmail] = useRecoilState(emailState);
  const [pw, setPW] = useRecoilState(pwState);
  const [remember, setRemember] = useRecoilState(rememberState);

  const submitLogin = async (e: any) => {
    const a = await GetUsersAPI();
    console.log(a);
    return;
  };

  const getRemember = async (e: any) => {
    console.log(e.target.value);
    setRemember(e.target.value);
  };

  const getEmail = async (e: any) => {
    setEmail(e.target.value);
  };

  const getPassward = async (e: any) => {
    setPW(e.target.value);
  };

  const socials = ["facebook", "naver", "google"];

  return (
    <div className="bg-main min-h-screen flex items-center justify-center py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[588px] bg-white w-full space-y-8 shadow-card rounded-lg font-[Pretendard]">
        <section className="px-[108px] py-20">
          <h2
            onClick={submitLogin}
            className="text-center text-4xl font-extrabold text-semi-black"
          >
            로그인
          </h2>
          <form
            className="mt-16 space-y-6 text-semi-black"
            action="#"
            method="POST"
          >
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  이메일
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none block w-full my-4 p-4 border border-gray-300 placeholder-gray-500 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 text-sm sm:text-base"
                  placeholder="이메일을 입력해주세요."
                  onChange={getEmail}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  비밀번호
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none block w-full my-4 p-4 border border-gray-300 placeholder-gray-500 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 text-sm sm:text-base"
                  placeholder="비밀번호를 입력해주세요."
                  onChange={getPassward}
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                  onClick={getRemember}
                />
                <label htmlFor="remember-me" className="ml-2 block text-base">
                  자동 로그인
                </label>
              </div>
              <div className="flex items-center ">
                <Link href="/findpassword">
                  <p className="cursor-pointer text-base hover:font-bold">
                    비밀번호 찾기
                  </p>
                </Link>
              </div>
            </div>

            <div className="pt-11">
              <button
                type="submit"
                onClick={submitLogin}
                className="group w-full flex justify-center py-4 px-4 border border-transparent text-xl font-medium rounded-lg text-white bg-point hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                로그인
              </button>
            </div>
            <div className="text-center pt-1.5">
              <div className="flex w-10/12 m-auto justify-center">
                <p className="w-7/12 text-gray-500">계정이 없으신가요?</p>
                <Link href="/signup">
                  <p className="text-point cursor-pointer font-bold underline underline-offset-2">
                    회원 가입하기
                  </p>
                </Link>
              </div>
            </div>
          </form>
          <div className="flex w-full text-center pt-14 pb-8">
            <div className="w-1/3 m-auto bg-light-gray h-px"></div>
            <p className="w-1/3 m-1 text-sm text-semi-gray">SNS 계정 로그인</p>
            <div className="w-1/3 m-auto bg-light-gray h-px"></div>
          </div>
          <div>
            <ul className="mt-2 grid grid-cols-3 gap-4 pb-2 justify-center">
              {socials.map((v: string) => (
                <li key={v1()}>
                  <div className="relative w-12 h-12 mx-auto">
                    <AutoImage src={`images/ic-${v}.png`} alt={v} />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};
export default Login;
