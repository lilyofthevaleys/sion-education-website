function Container() {
  return (
    <div className="relative shrink-0 size-[39.993px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.275px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[39.993px]" />
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[34.496px] relative shrink-0 w-[153.458px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.275px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[34.496px] relative w-[153.458px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[13.26px] text-[16px] text-neutral-950 text-nowrap top-[2.26px] whitespace-pre">STUDENT PORTAL</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[39.993px] relative shrink-0 w-[205.44px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[11.99px] h-[39.993px] items-center relative w-[205.44px]">
        <Container />
        <Container1 />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex h-[19.996px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-neutral-950 text-nowrap text-right whitespace-pre">Alex Chen</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex h-[19.996px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-neutral-950 text-nowrap text-right whitespace-pre">Grade 10</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[39.993px] relative shrink-0 w-[61.821px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[39.993px] items-start relative w-[61.821px]">
        <Container3 />
        <Container4 />
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="relative rounded-[4.27707e+07px] shrink-0 size-[39.993px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.275px] border-black border-solid inset-0 pointer-events-none rounded-[4.27707e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[39.993px]" />
    </div>
  );
}

function Button1() {
  return (
    <div className="h-[34.496px] relative shrink-0 w-[79.985px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.275px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[34.496px] relative w-[79.985px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[9.26px] text-[16px] text-neutral-950 text-nowrap top-[2.26px] whitespace-pre">LOGOUT</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[39.993px] relative shrink-0 w-[205.779px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[11.99px] h-[39.993px] items-center relative w-[205.779px]">
        <Container5 />
        <Button />
        <Button1 />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex h-[39.993px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container2 />
      <Container6 />
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[75.803px] items-start left-0 pb-[3.824px] pl-[305.263px] pr-[305.283px] pt-[15.993px] top-0 w-[2146.54px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_3.824px] border-black border-solid inset-0 pointer-events-none" />
      <Container7 />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex h-[31.986px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[32px] min-h-px min-w-px relative shrink-0 text-[24px] text-white">WELCOME ALEX!</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex h-[23.98px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[16px] text-white">Next: Math - Tuesday 5PM</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="bg-[#101828] h-[119.6px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[3.824px] border-black border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[7.987px] h-[119.6px] items-start pb-[3.824px] pt-[27.824px] px-[27.824px] relative w-full">
          <Container9 />
          <Container10 />
        </div>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute bg-black h-[47.959px] left-0 top-0 w-[137.186px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0px_3.824px_0px_0px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal h-[53px] leading-[24px] left-[23.91px] text-[16px] text-white top-[9.18px] w-[105px]">[SCHEDULE]</p>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute h-[47.959px] left-[137.19px] top-0 w-[100.32px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0px_3.824px_0px_0px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal h-[47px] leading-[24px] left-[23.73px] text-[16px] text-neutral-950 top-[9.18px] w-[77px]">[CHAT]</p>
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute h-[47.959px] left-[237.51px] top-0 w-[159.393px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0px_3.824px_0px_0px] border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Button5() {
  return <div className="absolute h-[47.959px] left-[396.9px] top-0 w-[115.815px]" data-name="Button" />;
}

function Container12() {
  return (
    <div className="absolute h-[51.783px] left-[3.82px] top-[3.82px] w-[1480.35px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_3.824px] border-black border-solid inset-0 pointer-events-none" />
      <Button2 />
      <Button3 />
      <Button4 />
      <Button5 />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal h-[39px] leading-[24px] left-[257.91px] text-[16px] text-neutral-950 top-[8.79px] w-[118px]">[PROFILE]</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[42.502px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.275px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[9.26px] text-[16px] text-neutral-950 text-nowrap top-[6.26px] whitespace-pre">MY SCHEDULE</p>
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute h-[60.009px] left-[51.82px] top-[51.82px] w-[1312.73px]" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[60px] left-[656.17px] text-[60px] text-center text-neutral-950 text-nowrap top-[-6.2px] translate-x-[-50%] whitespace-pre">📅</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute h-[31.986px] left-[51.82px] top-[135.83px] w-[1312.73px]" data-name="Container">
      <p className="absolute font-['Cousine:Regular',sans-serif] leading-[32px] left-[656.08px] not-italic text-[24px] text-center text-neutral-950 text-nowrap top-[-0.73px] translate-x-[-50%] whitespace-pre">NO SCHEDULE SELECTED YET</p>
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute h-[39.993px] left-[484.19px] top-[183.81px] w-[447.986px]" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[224.39px] text-[14px] text-center text-neutral-950 top-[-2px] translate-x-[-50%] w-[442px]">Get started by selecting your preferred lesson times. You can choose up to 3 weekly time slots.</p>
    </div>
  );
}

function Button6() {
  return (
    <div className="absolute bg-black h-[67.637px] left-[518.99px] top-[255.79px] w-[378.397px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[3.824px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Cousine:Regular',sans-serif] leading-[28px] left-[35.81px] not-italic text-[18px] text-nowrap text-white top-[18.37px] whitespace-pre">→ CLICK HERE TO SELECT SCHEDULE</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="bg-gray-50 h-[375.25px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[3.824px] border-black border-solid inset-0 pointer-events-none" />
      <Container14 />
      <Container15 />
      <Container16 />
      <Button6 />
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[441.752px] items-start left-[35.81px] top-[87.59px] w-[1416.37px]" data-name="Container">
      <Container13 />
      <Container17 />
    </div>
  );
}

function Container19() {
  return (
    <div className="h-[565.155px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[3.824px] border-black border-solid inset-0 pointer-events-none" />
      <Container12 />
      <Container18 />
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[24px] h-[900.333px] items-start left-[305.26px] pb-0 pt-[31.986px] px-[24px] top-[75.8px] w-[1535.99px]" data-name="Container">
      <Container11 />
      <Container19 />
    </div>
  );
}

function StudentDashboard() {
  return (
    <div className="bg-white h-[976.136px] relative shrink-0 w-[2146.54px]" data-name="StudentDashboard">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[976.136px] relative w-[2146.54px]">
        <Container8 />
        <Container20 />
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="absolute bg-gray-50 box-border content-stretch flex h-[1024.13px] items-start justify-center left-0 pb-0 pt-[47.999px] px-0 top-0 w-[2146.54px]" data-name="App">
      <StudentDashboard />
    </div>
  );
}

export default function DashboardNewAccountSchedule() {
  return (
    <div className="bg-white relative size-full" data-name="Dashboard (New Account) - Schedule">
      <App />
    </div>
  );
}