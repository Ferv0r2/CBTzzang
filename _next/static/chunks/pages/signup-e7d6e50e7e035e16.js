(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[616],{7691:function(e,r,s){"use strict";s.r(r);var t=s(7837),a=s(8860),n=s.n(a),l=s(2684),o=s(2691),c=s.n(o),d=s(7443),u=s(8598);r.default=function(){var e,r=(0,l.useState)(""),s=(r[0],r[1]),a=(0,l.useState)(""),o=a[0],i=a[1],m=(0,l.useState)(""),p=(m[0],m[1]),x=(0,l.useState)(""),h=x[0],f=x[1],b=(0,l.useState)(""),g=b[0],w=b[1],j=(0,l.useState)(!1),N=(j[0],j[1]),y=(0,l.useState)(!1);y[0],y[1];var v=(0,l.useState)(!1),k=v[0],C=v[1],_=(e=(0,t.Z)(n().mark(function e(r){return n().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:alert("이메일 : ".concat(o,", 비밀번호 : ").concat(h," -> 회원가입 버튼 누름"));case 1:case"end":return e.stop()}},e)})),function(r){return e.apply(this,arguments)}),P=function(e){w(e.target.value),""!==h&&""!==g&&h===e.target.value?C(!0):C(!1)};return(0,u.jsx)("div",{className:"bg-main min-h-screen flex items-center justify-center py-32 px-4 sm:px-6 lg:px-8",children:(0,u.jsx)("div",{className:"max-w-[588px] bg-white w-full space-y-8 shadow-card rounded-lg font-[Pretendard]",children:(0,u.jsxs)("section",{className:"px-[108px] py-20",children:[(0,u.jsx)("h2",{className:"text-center text-4xl font-extrabold text-semi-black",children:"회원가입"}),(0,u.jsxs)("form",{className:"mt-16 space-y-6 text-semi-black",action:"#",method:"POST",children:[(0,u.jsx)("input",{type:"hidden",name:"remember",defaultValue:"true"}),(0,u.jsxs)("div",{children:[(0,u.jsxs)("div",{className:"py-2",children:[(0,u.jsx)("label",{htmlFor:"nickname",className:"font-[Pretendard] text-lg",children:"닉네임"}),(0,u.jsx)("input",{id:"nickname",name:"nickname",type:"nickname",autoComplete:"current-nickname",required:!0,className:"appearance-none block w-full my-4 p-4 border border-gray-300 placeholder-gray-500 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 text-sm sm:text-base",placeholder:"닉네임을 입력해 주세요.",onChange:function(e){s(e.target.value)}})]}),(0,u.jsxs)("div",{className:"py-2",children:[(0,u.jsx)("label",{htmlFor:"email-address",className:"font-[Pretendard] text-lg",children:"이메일"}),(0,u.jsxs)("div",{className:"flex",children:[(0,u.jsx)("input",{id:"email-address",name:"email",type:"email",autoComplete:"email",required:!0,className:"appearance-none block w-2/3 m-auto my-4 p-4 border border-gray-300 placeholder-gray-500 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 text-sm sm:text-base",placeholder:"이메일을 입력해 주세요.",onChange:function(e){i(e.target.value)}}),(0,u.jsx)("div",{className:"w-1/3 m-auto text-right",children:(0,u.jsx)("button",{className:"w-28 bg-point p-4 my-4 text-white text-lg rounded-lg hover:bg-blue-500",children:"전송"})})]})]}),(0,u.jsxs)("div",{className:"py-2",children:[(0,u.jsx)("label",{htmlFor:"email-address",className:"font-[Pretendard] text-lg",children:"이메일 인증"}),(0,u.jsxs)("div",{className:"flex",children:[(0,u.jsx)("input",{id:"email-check",name:"email",type:"email",autoComplete:"email",required:!0,className:"appearance-none block w-2/3 m-auto my-4 p-4 border border-gray-300 placeholder-gray-500 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 text-sm sm:text-base",placeholder:"이메일 인증코드를 입력해 주세요.",onChange:function(e){p(e.target.value)}}),(0,u.jsx)("div",{className:"w-1/3 m-auto text-right",children:(0,u.jsx)("button",{className:"w-28 bg-point p-4 my-4 text-white text-lg rounded-lg hover:bg-blue-600",children:"확인"})})]})]}),(0,u.jsxs)("div",{className:"py-2",children:[(0,u.jsx)("label",{htmlFor:"password",className:"font-[Pretendard] text-lg",children:"비밀번호"}),(0,u.jsx)("input",{id:"password",name:"password",type:"password",autoComplete:"current-password",required:!0,className:"appearance-none block w-full mt-4 mb-2 p-4 border border-gray-300 placeholder-gray-500 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 text-sm sm:text-base",placeholder:"비밀번호를 입력해 주세요.",onChange:function(e){f(e.target.value),""!==h&&""!==g&&e.target.value===g?C(!0):C(!1)}}),(0,u.jsx)("p",{className:"text-sm text-[#666] mb-2",children:"영문, 숫자 조합 8~16자리"})]}),(0,u.jsxs)("div",{className:"py-2",children:[(0,u.jsx)("label",{htmlFor:"password",className:"font-[Pretendard] text-lg",children:"비밀번호 확인"}),""===h?(0,u.jsx)("input",{id:"password-check",name:"password",type:"password",autoComplete:"current-password",required:!0,value:g,className:"appearance-none block w-full mt-4 mb-2 p-4 border border-gray-300 placeholder-gray-500 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 text-sm sm:text-base",placeholder:"비밀번호를 한 번 더 입력해 주세요.",onChange:P}):"",k&&""!==h?(0,u.jsx)("input",{id:"password-check",name:"password",type:"password",autoComplete:"current-password",required:!0,value:g,className:"appearance-none block w-full mt-4 mb-2 p-4 border border-gray-300 placeholder-gray-500 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 text-sm sm:text-base",placeholder:"비밀번호를 한 번 더 입력해 주세요.",onChange:P}):"",k||""===h?"":(0,u.jsx)("input",{id:"password-check",name:"password",type:"password",autoComplete:"current-password",required:!0,value:g,className:"appearance-none block w-full mt-4 mb-2 p-4 border border-gray-300 placeholder-gray-500 rounded-md focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 text-sm sm:text-base",placeholder:"비밀번호를 한 번 더 입력해 주세요.",onChange:P})]}),(0,u.jsxs)("div",{className:"text-sm mx-1",children:[k&&""!==h?(0,u.jsx)("p",{className:"text-green-600 mb-2",children:"비밀번호가 일치합니다."}):"",k||""===h?"":(0,u.jsxs)("div",{className:"flex items-center mb-2",children:[(0,u.jsx)(d.B,{className:"w-4 h-4",alt:"err",src:"images/ic.png"}),(0,u.jsx)("p",{className:"ml-2 text-red-600",children:"비밀번호가 틀립니다."})]})]})]}),(0,u.jsx)("div",{className:"flex items-center justify-between",children:(0,u.jsxs)("div",{className:"flex items-center",children:[(0,u.jsx)("input",{id:"remember-me",name:"remember-me",type:"checkbox",className:"h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300",onClick:function(e){N(e.target.value)}}),(0,u.jsx)("label",{htmlFor:"remember-me",className:"ml-2 block text-[#333] text-base",children:"이용약관 및 개인 정보 처리 방침에 동의합니다."})]})}),(0,u.jsx)("div",{className:"pt-11",children:(0,u.jsx)("button",{type:"submit",onClick:_,className:"group w-full flex justify-center py-4 px-4 border border-transparent text-xl font-medium rounded-lg text-white bg-point hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",children:"가입하기"})}),(0,u.jsx)("div",{className:"text-center pt-1.5",children:(0,u.jsxs)("div",{className:"flex w-10/12 m-auto justify-center",children:[(0,u.jsx)("p",{className:"w-7/12 text-gray-500",children:"계정이 있으신가요?"}),(0,u.jsx)(c(),{href:"/login",children:(0,u.jsx)("p",{className:"w-5/12 text-point cursor-pointer font-bold underline underline-offset-2",children:"로그인 하기"})})]})})]})]})})})}},7805:function(e,r,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/signup",function(){return s(7691)}])},7837:function(e,r,s){"use strict";function t(e,r,s,t,a,n,l){try{var o=e[n](l),c=o.value}catch(d){s(d);return}o.done?r(c):Promise.resolve(c).then(t,a)}function a(e){return function(){var r=this,s=arguments;return new Promise(function(a,n){var l=e.apply(r,s);function o(e){t(l,a,n,o,c,"next",e)}function c(e){t(l,a,n,o,c,"throw",e)}o(void 0)})}}s.d(r,{Z:function(){return a}})}},function(e){e.O(0,[774,888,179],function(){return e(e.s=7805)}),_N_E=e.O()}]);