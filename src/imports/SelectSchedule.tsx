function Button() {
  return (
    <div className="h-[34.496px] relative shrink-0 w-[204.484px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.275px] border-solid border-white inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[34.496px] relative w-[204.484px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[13.26px] text-[16px] text-nowrap text-white top-[2.26px] whitespace-pre">← BACK TO DASHBOARD</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[34.496px] relative shrink-0 w-[185.384px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.275px] border-solid border-white inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[34.496px] relative w-[185.384px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[13.26px] text-[16px] text-nowrap text-white top-[2.26px] whitespace-pre">SCHEDULE SELECTION</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex gap-[15.993px] h-[34.496px] items-center relative shrink-0 w-full" data-name="Container">
      <Button />
      <Container />
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute bg-[#101828] box-border content-stretch flex flex-col h-[70.306px] items-start left-0 pb-[3.824px] pl-[329.262px] pr-[1411.41px] pt-[15.993px] top-0 w-[2146.54px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_3.824px] border-black border-solid inset-0 pointer-events-none" />
      <Container1 />
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[31.986px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Cousine:Regular',sans-serif] leading-[32px] left-0 not-italic text-[24px] text-neutral-950 text-nowrap top-[-0.73px] whitespace-pre">SELECT YOUR WEEKLY SCHEDULE</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex h-[19.996px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[14px] text-neutral-950">Choose up to 3 time slots for your lessons</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute bg-blue-50 box-border content-stretch flex flex-col gap-[7.987px] h-[99.603px] items-start left-0 pb-[3.824px] pt-[19.817px] px-[19.817px] top-0 w-[1487.99px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[3.824px] border-black border-solid inset-0 pointer-events-none" />
      <Container3 />
      <Container4 />
    </div>
  );
}

function Text() {
  return (
    <div className="absolute content-stretch flex h-[19.12px] items-start left-[13.26px] top-[15.81px] w-[193.51px]" data-name="Text">
      <p className="font-['Cousine:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-neutral-950 text-nowrap whitespace-pre">SELECT MAX 3 SCHEDULES</p>
    </div>
  );
}

function Text1() {
  return <div className="absolute h-[19.12px] left-[222.77px] top-[15.81px] w-[83.59px]" data-name="Text" />;
}

function Container6() {
  return (
    <div className="absolute bg-yellow-50 h-[51.783px] left-0 top-[123.6px] w-[1487.99px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.275px] border-black border-solid inset-0 pointer-events-none" />
      <Text />
      <Text1 />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal h-[40px] leading-[20px] left-[233.74px] text-[14px] text-neutral-950 top-[15.11px] w-[116px]">(2/3 selected)</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="bg-black h-[42.502px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.275px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[9.26px] text-[16px] text-nowrap text-white top-[6.26px] whitespace-pre">SELECT DAY</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-white h-[63.614px] left-0 top-0 w-[727.994px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[3.824px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Cousine:Regular',sans-serif] leading-[24px] left-[19.82px] not-italic text-[16px] text-neutral-950 text-nowrap top-[18.09px] whitespace-pre">Monday</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute bg-white h-[63.614px] left-0 top-[75.6px] w-[727.994px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[3.824px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Cousine:Regular',sans-serif] leading-[24px] left-[19.82px] not-italic text-[16px] text-neutral-950 text-nowrap top-[18.09px] whitespace-pre">Tuesday</p>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute bg-white h-[63.614px] left-0 top-[151.21px] w-[727.994px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[3.824px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Cousine:Regular',sans-serif] leading-[24px] left-[19.82px] not-italic text-[16px] text-neutral-950 text-nowrap top-[18.09px] whitespace-pre">Wednesday</p>
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute bg-white h-[63.614px] left-0 top-[226.81px] w-[727.994px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[3.824px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Cousine:Regular',sans-serif] leading-[24px] left-[19.82px] not-italic text-[16px] text-neutral-950 text-nowrap top-[18.09px] whitespace-pre">Thursday</p>
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute bg-white h-[63.614px] left-0 top-[302.41px] w-[727.994px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[3.824px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Cousine:Regular',sans-serif] leading-[24px] left-[19.82px] not-italic text-[16px] text-neutral-950 text-nowrap top-[18.09px] whitespace-pre">Friday</p>
    </div>
  );
}

function Button6() {
  return (
    <div className="absolute bg-white h-[63.614px] left-0 top-[378.02px] w-[727.994px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[3.824px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Cousine:Regular',sans-serif] leading-[24px] left-[19.82px] not-italic text-[16px] text-neutral-950 text-nowrap top-[18.09px] whitespace-pre">Saturday</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[441.632px] relative shrink-0 w-full" data-name="Container">
      <Button1 />
      <Button2 />
      <Button3 />
      <Button4 />
      <Button5 />
      <Button6 />
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[15.993px] h-[500.127px] items-start left-0 top-0 w-[727.994px]" data-name="Container">
      <Container7 />
      <Container8 />
    </div>
  );
}

function Container10() {
  return (
    <div className="bg-black h-[42.502px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.275px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[9.26px] text-[16px] text-nowrap text-white top-[6.26px] whitespace-pre">SELECT TIME</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex h-[31.986px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[32px] min-h-px min-w-px relative shrink-0 text-[24px] text-center text-neutral-950">⏰</p>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex h-[19.996px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[14px] text-center text-neutral-950">SELECT A DAY FIRST</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[163.615px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[3.824px] border-black border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[7.987px] h-[163.615px] items-start pb-[3.824px] pt-[51.823px] px-[51.823px] relative w-full">
          <Container11 />
          <Container12 />
        </div>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[15.993px] h-[500.127px] items-start left-[759.98px] top-0 w-[728.014px]" data-name="Container">
      <Container10 />
      <Container13 />
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute h-[500.127px] left-0 top-[207.37px] w-[1487.99px]" data-name="Container">
      <Container9 />
      <Container14 />
    </div>
  );
}

function Container16() {
  return (
    <div className="bg-black h-[42px] relative shrink-0 w-[310px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.275px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[42px] relative w-[310px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[9.74px] text-[16px] text-nowrap text-white top-[6.22px] whitespace-pre">YOUR SELECTED SCHEDULES (2/3)</p>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="bg-white h-[42.502px] relative shrink-0 w-[86.877px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.275px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[42.502px] relative w-[86.877px]">
        <p className="absolute font-['Arimo:Regular','Noto_Sans_Symbols2:Regular',sans-serif] font-normal leading-[24px] left-[17.27px] text-[16px] text-neutral-950 text-nowrap top-[6.26px] whitespace-pre">✎ EDIT</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex h-[42.502px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container16 />
      <Button7 />
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[28.003px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Cousine:Regular',sans-serif] leading-[28px] left-0 not-italic text-[18px] text-neutral-950 text-nowrap top-[-1.45px] whitespace-pre">Tuesday</p>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex h-[19.996px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Weekly lesson</p>
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[47.999px] relative shrink-0 w-[86.837px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[47.999px] items-start relative w-[86.837px]">
        <Container18 />
        <Container19 />
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="bg-black h-[42.502px] relative shrink-0 w-[96.118px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.275px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[42.502px] relative w-[96.118px]">
        <p className="absolute font-['Cousine:Regular',sans-serif] leading-[24px] left-[17.27px] not-italic text-[16px] text-nowrap text-white top-[7.54px] whitespace-pre">7:00 PM</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="basis-0 grow h-[47.999px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[47.999px] items-center justify-between relative w-full">
          <Container20 />
          <Container21 />
        </div>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="bg-gray-50 h-[87.633px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[3.824px] border-black border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[87.633px] items-center px-[19.817px] py-[3.824px] relative w-full">
          <Container22 />
        </div>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="h-[28.003px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Cousine:Regular',sans-serif] leading-[28px] left-0 not-italic text-[18px] text-neutral-950 text-nowrap top-[-1.45px] whitespace-pre">Saturday</p>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex h-[19.996px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Weekly lesson</p>
    </div>
  );
}

function Container26() {
  return (
    <div className="h-[47.999px] relative shrink-0 w-[86.837px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[47.999px] items-start relative w-[86.837px]">
        <Container24 />
        <Container25 />
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="bg-black h-[42.502px] relative shrink-0 w-[104.901px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.275px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[42.502px] relative w-[104.901px]">
        <p className="absolute font-['Cousine:Regular',sans-serif] leading-[24px] left-[17.27px] not-italic text-[16px] text-nowrap text-white top-[7.54px] whitespace-pre">12:00 PM</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="basis-0 grow h-[47.999px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[47.999px] items-center justify-between relative w-full">
        <Container26 />
        <Container27 />
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="bg-gray-50 h-[87.633px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[3.824px] border-black border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[87.633px] items-center px-[19.817px] py-[3.824px] relative w-full">
          <Container28 />
        </div>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col gap-[11.99px] h-[187.257px] items-start relative shrink-0 w-full" data-name="Container">
      <Container23 />
      <Container29 />
    </div>
  );
}

function Button8() {
  return (
    <div className="bg-black h-[67.637px] relative shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-[3.824px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Cousine:Regular','Noto_Sans_Symbols2:Regular',sans-serif] leading-[28px] left-[3.82px] not-italic text-[18px] text-nowrap text-white top-[18.37px] whitespace-pre">✓ CONFIRM SCHEDULES</p>
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[15.993px] h-[345.375px] items-start left-0 top-[739.49px] w-[1487.99px]" data-name="Container">
      <Container17 />
      <Container30 />
      <Button8 />
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute h-[1084.86px] left-[329.26px] top-[102.29px] w-[1487.99px]" data-name="Container">
      <Container5 />
      <Container6 />
      <Container15 />
      <Container31 />
    </div>
  );
}

function ScheduleSelection() {
  return (
    <div className="bg-white h-[1219.14px] relative shrink-0 w-[2146.54px]" data-name="ScheduleSelection">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[1219.14px] relative w-[2146.54px]">
        <Container2 />
        <Container32 />
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="absolute bg-gray-50 box-border content-stretch flex h-[1267.14px] items-start justify-center left-0 pb-0 pt-[47.999px] px-0 top-0 w-[2146.54px]" data-name="App">
      <ScheduleSelection />
    </div>
  );
}

export default function SelectSchedule() {
  return (
    <div className="bg-white relative size-full" data-name="Select Schedule">
      <App />
    </div>
  );
}