import React from "react";
import { NextPage } from "next/types";
import Link from "next/link";

/* State */
import { useRecoilState } from "recoil";
import { emailState, pwState, rememberState } from "stores";

const FindPW: NextPage = () => {
  const [email, setEmail] = useRecoilState(emailState);
  const [pw, setPW] = useRecoilState(pwState);

  const sendEmail = async (e: any) => {
    alert(`이메일 : ${email}, 비밀번호 : ${pw} -> 로그인 버튼 누름`);
    // 이메일 전송 API
  };

  const getEmail = async (e: any) => {
    setEmail(e.target.value);
  };

  const getPassward = async (e: any) => {
    setPW(e.target.value);
  };

  return (
    <div className="bg-main min-h-screen flex items-center justify-center py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[588px] bg-white w-full space-y-8 shadow-card rounded-lg font-[Pretendard]">
        <section className="px-[108px] py-20">
          <h2 className="text-center text-4xl font-extrabold text-semi-black">
            비밀번호 찾기
          </h2>
          <form className="text-semi-black" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px">
              <div className="py-12 text-center text-[#666] text-lg">
                <p className="pb-1">비밀번호를 재설정합니다.</p>
                <p>가입하신 이메일 주소를 입력해 주세요.</p>
              </div>
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
            </div>

            <div className="py-4">
              <button
                type="submit"
                onClick={sendEmail}
                className="group w-full flex justify-center py-4 px-4 border border-transparent text-xl font-medium rounded-lg text-white bg-point hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                전송하기
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};
export default FindPW;
