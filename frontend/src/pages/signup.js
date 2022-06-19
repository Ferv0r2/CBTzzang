import Link from "next/link";
import { LockClosedIcon } from "@heroicons/react/solid";
import { useState } from "react";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [checkEmail, setCheckEmail] = useState("");
  const [pw, setPW] = useState("");
  const [checkPW, setCheckPW] = useState("");
  const [agree, setAgree] = useState(false);
  const [isSameEmail, setSameEmail] = useState(false);
  const [isSamePW, setSamePW] = useState(false);

  const submitSignUp = async (e) => {
    alert(`이메일 : ${email}, 비밀번호 : ${pw} -> 회원가입 버튼 누름`);
    // 회원가입 API
  };

  const getAgree = (e) => {
    setAgree(e.target.value);
  };

  const getEmail = (e) => {
    setEmail(e.target.value);
  };

  const getCheckEmail = (e) => {
    setCheckEmail(e.target.value);
  };

  const getSameEmail = (e) => {
    // 이메일 인증 여부 확인 후
    setSameEmail(true);
  };

  const getPassword = (e) => {
    setPW(e.target.value);
    pw !== "" && checkPW !== "" && e.target.value === checkPW
      ? setSamePW(true)
      : setSamePW(false);
  };

  const getCheckPassword = (e) => {
    setCheckPW(e.target.value);
    pw !== "" && checkPW !== "" && pw === e.target.value
      ? setSamePW(true)
      : setSamePW(false);
  };

  return (
    <>
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <Link href="/">
            <div className="flex py-1 w-24 rounded-lg text-indigo-600 text-center text-sm font-bold cursor-pointer hover:text-indigo-500">
              <p>BACK</p>
            </div>
          </Link>
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Sign Up
            </h2>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div>
              <div className="py-2">
                <label htmlFor="email-address" className="text-sm p-1">
                  이메일
                </label>
                <div className="flex">
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none relative block w-3/4 m-auto px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="이메일 입력"
                    onChange={getEmail}
                  />
                  <div className="w-1/4 m-auto text-right">
                    <button className="w-3/4 bg-indigo-600 p-2 text-sm text-white rounded-lg hover:bg-indigo-500">
                      전송
                    </button>
                  </div>
                </div>
              </div>
              <div className="py-2">
                <label htmlFor="email-address" className="text-sm p-1">
                  이메일 인증
                </label>
                <div className="flex">
                  <input
                    id="email-check"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none relative block w-3/4 m-auto px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="이메일 인증코드 입력"
                    onChange={getCheckEmail}
                  />
                  <div className="w-1/4 m-auto text-right">
                    <button className="w-3/4 bg-indigo-600 p-2 text-sm text-white rounded-lg hover:bg-indigo-500">
                      확인
                    </button>
                  </div>
                </div>
              </div>
              <div className="py-2">
                <label htmlFor="password" className="text-sm p-1">
                  비밀번호
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="비밀번호 입력"
                  onChange={getPassword}
                />
              </div>
              <div className="py-2">
                <label htmlFor="password" className="text-sm p-1">
                  비밀번호 확인
                </label>
                <input
                  id="password-check"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="비밀번호 확인"
                  onChange={getCheckPassword}
                />
              </div>

              <div className="text-sm mx-1">
                {isSamePW && pw !== "" ? (
                  <p className="text-green-600">비밀번호가 일치합니다.</p>
                ) : (
                  ""
                )}
                {!isSamePW && pw !== "" ? (
                  <p className="text-red-600">비밀번호가 틀립니다.</p>
                ) : (
                  ""
                )}
              </div>
            </div>

            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                onClick={getAgree}
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-900"
              >
                이용약관 및 개인정보 처리방침에 동의합니다.
              </label>
            </div>

            <div>
              <button
                type="submit"
                onClick={submitSignUp}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    aria-hidden="true"
                  />
                </span>
                계정 생성
              </button>
            </div>
            <div className="text-center text-sm font-medium">
              <div className="flex w-10/12 m-auto justify-center">
                <p className="w-7/12 text-gray-500">이미 계정이 있으신가요?</p>
                <Link href="/login">
                  <p className="w-5/12 text-black cursor-pointer hover:font-bold">
                    로그인
                  </p>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default SignUp;
