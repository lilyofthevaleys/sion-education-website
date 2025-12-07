function Container() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[40px]" />
    </div>
  );
}

function Container1() {
  return (
    <div className="basis-0 grow h-[34.667px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[34.667px] relative w-full">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[13.33px] text-[16px] text-neutral-950 text-nowrap top-[3.67px] whitespace-pre">STUDENT PORTAL</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[40px] relative shrink-0 w-[205.604px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[40px] items-center relative w-[205.604px]">
        <Container />
        <Container1 />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-neutral-950 text-nowrap text-right whitespace-pre">Alex Chen</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-neutral-950 text-nowrap text-right whitespace-pre">Grade 10</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[40px] relative shrink-0 w-[61.854px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[40px] items-start relative w-[61.854px]">
        <Container3 />
        <Container4 />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="relative rounded-[4.47392e+07px] shrink-0 size-[40px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none rounded-[4.47392e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[40px]" />
    </div>
  );
}

function Button() {
  return (
    <div className="h-[34.667px] relative shrink-0 w-[80.146px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[34.667px] relative w-[80.146px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[9.33px] text-[16px] text-neutral-950 text-nowrap top-[3.67px] whitespace-pre">LOGOUT</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[40px] relative shrink-0 w-[206px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[40px] items-center relative w-[206px]">
        <Container5 />
        <Container6 />
        <Button />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container2 />
      <Container7 />
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[76px] items-start left-0 pb-[4px] pt-[16px] px-[317.333px] top-0 w-[2170.67px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_4px] border-black border-solid inset-0 pointer-events-none" />
      <Container8 />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex h-[32px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[32px] min-h-px min-w-px relative shrink-0 text-[24px] text-white">WELCOME ALEX!</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-nowrap text-white top-[-1.67px] whitespace-pre">Next: Math - Tuesday 5PM</p>
    </div>
  );
}

function Container12() {
  return (
    <div className="bg-[#101828] h-[120px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] h-[120px] items-start pb-[4px] pt-[28px] px-[28px] relative w-full">
          <Container10 />
          <Container11 />
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute h-[48px] left-0 top-0 w-[137.375px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0px_4px_0px_0px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal h-[54px] leading-[24px] left-[23.67px] text-[16px] text-neutral-950 top-[10px] w-[103px]">[SCHEDULE]</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute h-[48px] left-[137.38px] top-0 w-[100.5px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0px_4px_0px_0px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal h-[59px] leading-[24px] left-[24.29px] text-[16px] text-neutral-950 top-[10px] w-[58px]">[CHAT]</p>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute bg-black h-[48px] left-[237.67px] top-0 w-[115.813px]" data-name="Button">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal h-[59px] leading-[24px] left-[24.21px] text-[16px] text-white top-[10px] w-[78px]">[PROFILE]</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute h-[52px] left-[4px] top-[4px] w-[1480px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_4px] border-black border-solid inset-0 pointer-events-none" />
      <Button1 />
      <Button2 />
      <Button3 />
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[42.667px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[9.33px] text-[16px] text-neutral-950 text-nowrap top-[7.67px] whitespace-pre">MY PROFILE</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-neutral-950 top-[-1.67px] w-[52px]">[Name]</p>
    </div>
  );
}

function TextInput() {
  return (
    <div className="bg-gray-50 h-[42.667px] relative shrink-0 w-full" data-name="Text Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[42.667px] items-center p-[8px] relative w-full">
          <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-neutral-950 text-nowrap whitespace-pre">Alex Chen</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[70.667px] items-start left-0 top-0 w-[700px]" data-name="Container">
      <Container15 />
      <TextInput />
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[-0.33px] text-[16px] text-neutral-950 top-[-1.67px] w-[81px]">[Email]</p>
    </div>
  );
}

function TextInput1() {
  return (
    <div className="bg-gray-50 h-[42.667px] relative shrink-0 w-full" data-name="Text Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[42.667px] items-center p-[8px] relative w-full">
          <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-neutral-950 text-nowrap whitespace-pre">alex@email.com</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[70.667px] items-start left-[716px] top-0 w-[700px]" data-name="Container">
      <Container17 />
      <TextInput1 />
    </div>
  );
}

function Container19() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal h-[41px] leading-[24px] left-[-0.33px] text-[16px] text-neutral-950 top-[-1.33px] w-[105px]">[Grade]</p>
    </div>
  );
}

function TextInput2() {
  return (
    <div className="bg-gray-50 h-[42.667px] relative shrink-0 w-full" data-name="Text Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[42.667px] items-center p-[8px] relative w-full">
          <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-neutral-950 text-nowrap whitespace-pre">Grade 10</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[70.667px] items-start left-0 top-[86.67px] w-[700px]" data-name="Container">
      <Container19 />
      <TextInput2 />
    </div>
  );
}

function Container21() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[-0.33px] text-[16px] text-neutral-950 top-[-1.33px] w-[92px]">[Phone]</p>
    </div>
  );
}

function TextInput3() {
  return (
    <div className="bg-gray-50 h-[42.667px] relative shrink-0 w-full" data-name="Text Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[42.667px] items-center p-[8px] relative w-full">
          <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-neutral-950 text-nowrap whitespace-pre">+1 234 567 8900</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[70.667px] items-start left-[716px] top-[86.67px] w-[700px]" data-name="Container">
      <Container21 />
      <TextInput3 />
    </div>
  );
}

function Container23() {
  return (
    <div className="h-[157.333px] relative shrink-0 w-full" data-name="Container">
      <Container16 />
      <Container18 />
      <Container20 />
      <Container22 />
    </div>
  );
}

function Container24() {
  return (
    <div className="h-[70.667px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[4px_0px_0px] border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[318.667px] items-start left-[36px] top-[88px] w-[1416px]" data-name="Container">
      <Container14 />
      <Container23 />
      <Container24 />
    </div>
  );
}

function Container26() {
  return (
    <div className="h-[442.667px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <Container13 />
      <Container25 />
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[24px] h-[778.667px] items-start left-[317.33px] pb-0 pt-[32px] px-[24px] top-[76px] w-[1536px]" data-name="Container">
      <Container12 />
      <Container26 />
    </div>
  );
}

function StudentDashboard() {
  return (
    <div className="bg-white h-[1210.67px] relative shrink-0 w-full" data-name="StudentDashboard">
      <Container9 />
      <Container27 />
    </div>
  );
}

function App() {
  return (
    <div className="absolute bg-gray-50 box-border content-stretch flex flex-col h-[1258.67px] items-start left-0 pb-0 pt-px px-0 top-0 w-[2170.67px]" data-name="App">
      <StudentDashboard />
    </div>
  );
}

export default function DashboardProfile() {
  return (
    <div className="bg-white relative size-full" data-name="Dashboard - Profile">
      <App />
    </div>
  );
}