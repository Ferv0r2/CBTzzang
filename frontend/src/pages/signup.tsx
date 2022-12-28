import React, { useState } from "react";
import { NextPage } from "next/types";
import Link from "next/link";

/* Icon */
import { LockClosedIcon } from "@heroicons/react/solid";

/* Component */
import { AutoImage } from "utils";

const SignUp: NextPage = () => {
  const [nickname, setNickName] = useState("");
  const [email, setEmail] = useState("");
  const [checkEmail, setCheckEmail] = useState("");
  const [pw, setPW] = useState("");
  const [checkPW, setCheckPW] = useState("");
  const [agree, setAgree] = useState(false);
  const [isSameEmail, setSameEmail] = useState(false);
  const [isSamePW, setSamePW] = useState(false);

  const submitSignUp = async (e: any) => {
    alert(`이메일 : ${email}, 비밀번호 : ${pw} -> 회원가입 버튼 누름`);
    // 회원가입 API
  };

  const getAgree = (e: any) => {
    setAgree(e.target.value);
  };

  const getNickName = (e: any) => {
    setNickName(e.target.value);
  };

  const getEmail = (e: any) => {
    setEmail(e.target.value);
  };

  const getCheckEmail = (e: any) => {
    setCheckEmail(e.target.value);
  };

  const getSameEmail = (e: any) => {
    // 이메일 인증 여부 확인 후
    setSameEmail(true);
  };

  const getPassword = (e: any) => {
    setPW(e.target.value);
    pw !== "" && checkPW !== "" && e.target.value === checkPW
      ? setSamePW(true)
      : setSamePW(false);
  };

  const getCheckPassword = (e: any) => {
    setCheckPW(e.target.value);
    pw !== "" && checkPW !== "" && pw === e.target.value
      ? setSamePW(true)
      : setSamePW(false);
  };

  return (
    <div className="bg-main min-h-screen flex items-center justify-center py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[588px] bg-white w-full space-y-8 shadow-card rounded-lg font-[Pretendard]">
        <section className="px-[108px] py-20">
          <h2 className="text-center text-4xl font-extrabold text-semi-black">
            회원가입
          </h2>
          <form
            className="mt-16 space-y-6 text-semi-black"
            action="#"
            method="POST"
          >
            <input type="hidden" name="remember" defaultValue="true" />
            <div>
              <div className="py-2">
                <label htmlFor="nickname" className="font-[Pretendard] text-lg">
                  닉네임
                </label>
                <input
                  id="nickname"
                  name="nickname"
                  type="nickname"
                  autoComplete="current-nickname"
                  required
                  className="appearance-none block w-full my-4 p-4 border border-gray-300 placeholder-gray-500 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 text-sm sm:text-base"
                  placeholder="닉네임을 입력해 주세요."
                  onChange={getNickName}
                />
              </div>
              <div className="py-2">
                <label
                  htmlFor="email-address"
                  className="font-[Pretendard] text-lg"
                >
                  이메일
                </label>
                <div className="flex">
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none block w-2/3 m-auto my-4 p-4 border border-gray-300 placeholder-gray-500 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 text-sm sm:text-base"
                    placeholder="이메일을 입력해 주세요."
                    onChange={getEmail}
                  />
                  <div className="w-1/3 m-auto text-right">
                    <button className="w-28 bg-point p-4 my-4 text-white text-lg rounded-lg hover:bg-blue-500">
                      전송
                    </button>
                  </div>
                </div>
              </div>
              <div className="py-2">
                <label
                  htmlFor="email-address"
                  className="font-[Pretendard] text-lg"
                >
                  이메일 인증
                </label>
                <div className="flex">
                  <input
                    id="email-check"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none block w-2/3 m-auto my-4 p-4 border border-gray-300 placeholder-gray-500 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 text-sm sm:text-base"
                    placeholder="이메일 인증코드를 입력해 주세요."
                    onChange={getCheckEmail}
                  />
                  <div className="w-1/3 m-auto text-right">
                    <button className="w-28 bg-point p-4 my-4 text-white text-lg rounded-lg hover:bg-blue-600">
                      확인
                    </button>
                  </div>
                </div>
              </div>
              <div className="py-2">
                <label htmlFor="password" className="font-[Pretendard] text-lg">
                  비밀번호
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none block w-full mt-4 mb-2 p-4 border border-gray-300 placeholder-gray-500 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 text-sm sm:text-base"
                  placeholder="비밀번호를 입력해 주세요."
                  onChange={getPassword}
                />
                <p className="text-sm text-[#666] mb-2">
                  영문, 숫자 조합 8~16자리
                </p>
              </div>
              <div className="py-2">
                <label htmlFor="password" className="font-[Pretendard] text-lg">
                  비밀번호 확인
                </label>
                {pw === "" ? (
                  <input
                    id="password-check"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    value={checkPW}
                    className="appearance-none block w-full mt-4 mb-2 p-4 border border-gray-300 placeholder-gray-500 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 text-sm sm:text-base"
                    placeholder="비밀번호를 한 번 더 입력해 주세요."
                    onChange={getCheckPassword}
                  />
                ) : (
                  ""
                )}
                {isSamePW && pw !== "" ? (
                  <input
                    id="password-check"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    value={checkPW}
                    className="appearance-none block w-full mt-4 mb-2 p-4 border border-gray-300 placeholder-gray-500 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 text-sm sm:text-base"
                    placeholder="비밀번호를 한 번 더 입력해 주세요."
                    onChange={getCheckPassword}
                  />
                ) : (
                  ""
                )}
                {!isSamePW && pw !== "" ? (
                  <input
                    id="password-check"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    value={checkPW}
                    className="appearance-none block w-full mt-4 mb-2 p-4 border border-gray-300 placeholder-gray-500 rounded-md focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 text-sm sm:text-base"
                    placeholder="비밀번호를 한 번 더 입력해 주세요."
                    onChange={getCheckPassword}
                  />
                ) : (
                  ""
                )}
              </div>

              <div className="text-sm mx-1">
                {isSamePW && pw !== "" ? (
                  <p className="text-green-600 mb-2">비밀번호가 일치합니다.</p>
                ) : (
                  ""
                )}
                {!isSamePW && pw !== "" ? (
                  <div className="flex items-center mb-2">
                    <AutoImage
                      className="w-4 h-4"
                      alt="err"
                      src="images/ic.png"
                    />
                    <p className="ml-2 text-red-600">비밀번호가 틀립니다.</p>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                  onClick={getAgree}
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-[#333] text-base"
                >
                  이용약관 및 개인 정보 처리 방침에 동의합니다.
                </label>
              </div>
            </div>
            <div className="pt-11">
              <button
                type="submit"
                onClick={submitSignUp}
                className="group w-full flex justify-center py-4 px-4 border border-transparent text-xl font-medium rounded-lg text-white bg-point hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                가입하기
              </button>
            </div>
            <div className="text-center pt-1.5">
              <div className="flex w-10/12 m-auto justify-center">
                <p className="w-7/12 text-gray-500">계정이 있으신가요?</p>
                <Link href="/login">
                  <p className="w-5/12 text-point cursor-pointer font-bold underline underline-offset-2">
                    로그인 하기
                  </p>
                </Link>
              </div>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};
export default SignUp;
