import Link from "next/link";
import { LockClosedIcon } from "@heroicons/react/solid";
import { useRecoilState } from "recoil";
import { emailState, pwState, rememberState } from "components/states";

const Login = () => {
  const [email, setEmail] = useRecoilState(emailState);
  const [pw, setPW] = useRecoilState(pwState);
  const [remember, setRemember] = useRecoilState(rememberState);

  const submitLogin = async (e) => {
    alert(`이메일 : ${email}, 비밀번호 : ${pw} -> 로그인 버튼 누름`);
    // 로그인 API
  };

  const getRemember = async (e) => {
    console.log(e.target.value);
    setRemember(e.target.value);
  };

  const getEmail = async (e) => {
    setEmail(e.target.value);
  };

  const getPassward = async (e) => {
    setPW(e.target.value);
  };

  return (
    <div className="bg-main min-h-screen flex items-center justify-center py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl bg-white w-full space-y-8 shadow-card rounded-lg font-[Pretendard]">
        <section className="p-24">
          <h2 className="text-center text-4xl font-extrabold text-gray-900">
            로그인
          </h2>
          <form className="mt-16 space-y-6" action="#" method="POST">
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
                  className="appearance-none relative block w-full my-4 p-4 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 text-sm sm:text-base"
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
                  className="appearance-none relative block w-full my-4 p-4 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 text-sm sm:text-base"
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
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                  onClick={getRemember}
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-base font-bold text"
                >
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

            <div className="pt-12">
              <button
                type="submit"
                onClick={submitLogin}
                className="group relative w-full flex justify-center py-4 px-4 border border-transparent text-xl font-medium rounded-lg text-white bg-point hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                로그인
              </button>
            </div>
            <div className="text-center pt-1.5">
              <div className="flex w-10/12 m-auto justify-center">
                <p className="w-7/12 text-gray-500">계정이 없으신가요?</p>
                <Link href="/signup">
                  <p className="w-5/12 text-point cursor-pointer font-bold underline underline-offset-2">
                    회원 가입하기
                  </p>
                </Link>
              </div>
            </div>
          </form>
          <div className="flex w-full text-center pt-14 pb-8">
            <div className="w-1/3 m-auto bg-light-gray h-px"></div>
            <p className="w-1/3 m-1 text-semi-gray">SNS 계정 로그인</p>
            <div className="w-1/3 m-auto bg-light-gray h-px"></div>
          </div>
          <div>
            <ul className="flex justify-center">
              <li className="m-2 p-2">
                <img src="images/ic-facebook.png" alt="facebook" />
              </li>
              <li className="m-2 p-2">
                <img src="images/ic-naver.png" alt="naver" />
              </li>
              <li className="m-2 p-2">
                <img src="images/ic-google.png" alt="google" />
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};
export default Login;
