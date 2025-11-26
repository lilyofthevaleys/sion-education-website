function Button() {
  return (
    <div className="h-[34.667px] relative shrink-0 w-[83.229px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[34.667px] relative w-[83.229px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[13.33px] text-[16px] text-neutral-950 text-nowrap top-[3.67px] whitespace-pre">← BACK</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[34.667px] relative shrink-0 w-[173.958px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[34.667px] relative w-[173.958px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[13.33px] text-[16px] text-neutral-950 text-nowrap top-[3.67px] whitespace-pre">FORGOT PASSWORD</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex gap-[16px] h-[34.667px] items-center relative shrink-0 w-full" data-name="Container">
      <Button />
      <Container />
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[70.667px] items-start left-0 pb-[4px] pt-[16px] px-[317.333px] top-0 w-[2170.67px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_4px] border-black border-solid inset-0 pointer-events-none" />
      <Container1 />
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute h-[50.667px] left-[36px] top-[36px] w-[376px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[188.88px] text-[16px] text-center text-neutral-950 text-nowrap top-[11.67px] translate-x-[-50%] whitespace-pre">RESET YOUR PASSWORD</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[40px] left-[188.27px] text-[36px] text-center text-neutral-950 text-nowrap top-[-3px] translate-x-[-50%] whitespace-pre">🔐</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[188.17px] text-[14px] text-center text-neutral-950 top-[-2px] translate-x-[-50%] w-[363px]">{`Enter your email address and we'll send you instructions to reset your password.`}</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[96px] items-start left-[36px] top-[110.67px] w-[376px]" data-name="Container">
      <Container4 />
      <Container5 />
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-neutral-950 text-nowrap top-[-1.67px] whitespace-pre">[Email Address]</p>
    </div>
  );
}

function EmailInput() {
  return (
    <div className="h-[50.667px] relative shrink-0 w-full" data-name="Email Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[50.667px] items-center p-[12px] relative w-full">
          <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-[rgba(10,10,10,0.5)] text-nowrap whitespace-pre">your@email.com</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[78.667px] items-start left-[36px] top-[230.67px] w-[376px]" data-name="Container">
      <Container7 />
      <EmailInput />
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-gray-200 h-[56px] left-[36px] top-[333.33px] w-[376px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[4px] text-[#99a1af] text-[16px] text-nowrap top-[14.33px] whitespace-pre">[SEND RESET LINK] →</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute h-[42.667px] left-[36px] top-[405.33px] w-[376px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[1.33px] text-[16px] text-neutral-950 text-nowrap top-[7.67px] whitespace-pre">[BACK TO LOGIN]</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[484px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <Container3 />
      <Container6 />
      <Container8 />
      <Button1 />
      <Button2 />
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Cousine:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-[-0.67px] whitespace-pre">💡 TIPS</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[12px] text-neutral-950">• Make sure to use the email you registered with</p>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[12px] text-neutral-950">• Check your spam/junk folder</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[12px] text-neutral-950">• Contact us if you need further assistance</p>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[56px] items-start relative shrink-0 w-full" data-name="Container">
      <Container11 />
      <Container12 />
      <Container13 />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[84px] items-start relative shrink-0 w-full" data-name="Container">
      <Container10 />
      <Container14 />
    </div>
  );
}

function Container16() {
  return (
    <div className="bg-blue-50 h-[118.667px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[118.667px] items-start pb-[1.333px] pt-[17.333px] px-[17.333px] relative w-full">
          <Container15 />
        </div>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[626.667px] items-start left-[861.33px] top-[134.67px] w-[448px]" data-name="Container">
      <Container9 />
      <Container16 />
    </div>
  );
}

function ForgotPassword() {
  return (
    <div className="bg-white h-[1210.67px] relative shrink-0 w-full" data-name="ForgotPassword">
      <Container2 />
      <Container17 />
    </div>
  );
}

function App() {
  return (
    <div className="absolute bg-gray-50 box-border content-stretch flex flex-col h-[1258.67px] items-start left-0 pb-0 pt-[48px] px-0 top-0 w-[2170.67px]" data-name="App">
      <ForgotPassword />
    </div>
  );
}

export default function ForgotPassword1() {
  return (
    <div className="bg-white relative size-full" data-name="Forgot Password">
      <App />
    </div>
  );
}