function Container() {
  return (
    <div className="absolute box-border content-stretch flex items-center justify-center left-[1037.33px] p-[4px] size-[96px] top-[270.67px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[40px] relative shrink-0 text-[36px] text-center text-neutral-950 text-nowrap whitespace-pre">⏰</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute h-[40px] left-[801.33px] top-[390.67px] w-[568px]" data-name="Container">
      <p className="absolute font-['Cousine:Regular',sans-serif] leading-[40px] left-[284.04px] not-italic text-[36px] text-center text-neutral-950 text-nowrap top-[-1.33px] translate-x-[-50%] whitespace-pre">SESSION TIMEOUT</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute h-[56px] left-[801.33px] top-[446.67px] w-[568px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[284.94px] text-[16px] text-center text-neutral-950 text-nowrap top-[14.33px] translate-x-[-50%] whitespace-pre">YOUR SESSION EXPIRED</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute h-[74.667px] left-[801.33px] top-[518.67px] w-[448px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[224.19px] text-[16px] text-center text-neutral-950 top-[11.67px] translate-x-[-50%] w-[382px]">{`You've been logged out due to inactivity. Please log in again.`}</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Cousine:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-[-0.67px] whitespace-pre">[SECURITY TIPS:]</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[14px] text-neutral-950">□ Sessions expire after 30 min</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[14px] text-neutral-950">□ Always logout on shared devices</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[14px] text-neutral-950">{`□ Enable "Remember Me" for trusted devices`}</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[68px] items-start relative shrink-0 w-full" data-name="Container">
      <Container5 />
      <Container6 />
      <Container7 />
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute bg-blue-50 box-border content-stretch flex flex-col gap-[8px] h-[136px] items-start left-[801.33px] pb-[4px] pt-[20px] px-[20px] top-[617.33px] w-[448px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-[#155dfc] border-solid inset-0 pointer-events-none" />
      <Container4 />
      <Container8 />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-black h-[56px] relative shrink-0 w-[127.542px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[56px] relative w-[127.542px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[36px] text-[16px] text-nowrap text-white top-[14.33px] whitespace-pre">[HOME]</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="h-[56px] relative shrink-0 w-[127.917px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[56px] relative w-[127.917px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[36px] text-[16px] text-neutral-950 text-nowrap top-[14.33px] whitespace-pre">[LOGIN]</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[56px] items-start justify-center left-[801.33px] top-[785.33px] w-[568px]" data-name="Container">
      <Button />
      <Button1 />
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[38.667px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[143.33px] text-[14px] text-center text-neutral-950 text-nowrap top-[7.33px] translate-x-[-50%] whitespace-pre">Need help? support@sioneducation.com</p>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[66.667px] items-start left-[801.33px] pb-0 pt-[28px] px-[140.542px] top-[873.33px] w-[568px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[4px_0px_0px] border-black border-solid inset-0 pointer-events-none" />
      <Container11 />
    </div>
  );
}

function ErrorPages() {
  return (
    <div className="bg-white h-[1210.67px] relative shrink-0 w-full" data-name="ErrorPages">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <Container />
      <Container1 />
      <Container2 />
      <Container3 />
      <Container9 />
      <Container10 />
      <Container12 />
    </div>
  );
}

function App() {
  return (
    <div className="absolute bg-gray-50 box-border content-stretch flex flex-col h-[1258.67px] items-start left-0 pb-0 pt-[48px] px-0 top-0 w-[2170.67px]" data-name="App">
      <ErrorPages />
    </div>
  );
}

export default function SessionTImeout() {
  return (
    <div className="bg-white relative size-full" data-name="Session TImeout">
      <App />
    </div>
  );
}