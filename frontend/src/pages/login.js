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
              Sign in
            </h2>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
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
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="이메일 입력"
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
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="비밀번호 입력"
                  onChange={getPassward}
                />
              </div>
            </div>

            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                onClick={getRemember}
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-900"
              >
                자동 로그인
              </label>
            </div>

            <div>
              <button
                type="submit"
                onClick={submitLogin}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    aria-hidden="true"
                  />
                </span>
                로그인
              </button>
            </div>
            <div className="text-center text-sm font-medium">
              <div className="flex w-10/12 m-auto justify-center">
                <p className="w-7/12 text-gray-500">아직 계정이 없으신가요?</p>
                <Link href="/signup">
                  <p className="w-5/12 text-black cursor-pointer hover:font-bold">
                    계정 생성
                  </p>
                </Link>
              </div>
              <div className="flex py-2 w-10/12 m-auto justify-center">
                <p className="w-7/12 text-gray-500">비밀번호를 잊으셨나요?</p>
                <Link href="/findpassword">
                  <p className="w-5/12 text-black cursor-pointer hover:font-bold">
                    비밀번호 찾기
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
export default Login;
