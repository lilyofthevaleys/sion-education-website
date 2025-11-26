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
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[13.33px] text-[16px] text-neutral-950 text-nowrap top-[3.67px] whitespace-pre">ADMIN PORTAL</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[40px] relative shrink-0 w-[190.208px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[40px] items-center relative w-[190.208px]">
        <Container />
        <Container1 />
      </div>
    </div>
  );
}

function Container3() {
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

function Container4() {
  return (
    <div className="h-[40px] relative shrink-0 w-[232.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[40px] items-center relative w-[232.5px]">
        <Container3 />
        <Button />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container2 />
      <Container4 />
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[76px] items-start left-0 pb-[4px] pt-[16px] px-[317.333px] top-0 w-[2170.67px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_4px] border-black border-solid inset-0 pointer-events-none" />
      <Container5 />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex h-[32px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[32px] min-h-px min-w-px relative shrink-0 text-[24px] text-white">ADMIN DASHBOARD</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-nowrap text-white top-[-1.67px] whitespace-pre">{`System overview & management`}</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="bg-[#101828] h-[120px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] h-[120px] items-start pb-[4px] pt-[28px] px-[28px] relative w-full">
          <Container7 />
          <Container8 />
        </div>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex h-[36px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Cousine:Regular',sans-serif] grow leading-[36px] min-h-px min-w-px not-italic relative shrink-0 text-[30px] text-neutral-950">156</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[14px] text-neutral-950">Students</p>
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[21.333px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px_0px_0px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[16px] left-0 text-[12px] text-neutral-950 text-nowrap top-[4.33px] whitespace-pre">+12 month</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="[grid-area:1_/_1] h-[129.333px] justify-self-stretch relative shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] h-[129.333px] items-start pb-[4px] pt-[20px] px-[20px] relative w-full">
          <Container10 />
          <Container11 />
          <Container12 />
        </div>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex h-[36px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Cousine:Regular',sans-serif] grow leading-[36px] min-h-px min-w-px not-italic relative shrink-0 text-[30px] text-neutral-950">42</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[14px] text-neutral-950">Teachers</p>
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[21.333px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px_0px_0px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[16px] left-0 text-[12px] text-neutral-950 text-nowrap top-[4.33px] whitespace-pre">+3 month</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="[grid-area:1_/_2] h-[129.333px] justify-self-stretch relative shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] h-[129.333px] items-start pb-[4px] pt-[20px] px-[20px] relative w-full">
          <Container14 />
          <Container15 />
          <Container16 />
        </div>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex h-[36px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Cousine:Regular',sans-serif] grow leading-[36px] min-h-px min-w-px not-italic relative shrink-0 text-[30px] text-neutral-950">284</p>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[14px] text-neutral-950">Lessons/Week</p>
    </div>
  );
}

function Container20() {
  return (
    <div className="[grid-area:1_/_3] h-[129.333px] justify-self-stretch relative shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] h-[129.333px] items-start pb-[4px] pt-[20px] px-[20px] relative w-full">
          <Container18 />
          <Container19 />
        </div>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex h-[36px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Cousine:Regular',sans-serif] grow leading-[36px] min-h-px min-w-px not-italic relative shrink-0 text-[30px] text-neutral-950">8</p>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[14px] text-neutral-950">Pending</p>
    </div>
  );
}

function Container23() {
  return (
    <div className="h-[21.333px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px_0px_0px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[16px] left-0 text-[12px] text-neutral-950 text-nowrap top-[4.33px] whitespace-pre">Action needed</p>
    </div>
  );
}

function Container24() {
  return (
    <div className="[grid-area:1_/_4] h-[129.333px] justify-self-stretch relative shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] h-[129.333px] items-start pb-[4px] pt-[20px] px-[20px] relative w-full">
          <Container21 />
          <Container22 />
          <Container23 />
        </div>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="gap-[16px] grid grid-cols-[repeat(4,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[129.333px] relative shrink-0 w-full" data-name="Container">
      <Container13 />
      <Container17 />
      <Container20 />
      <Container24 />
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-black h-[44px] left-0 top-0 w-[127.417px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0px_4px_0px_0px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal h-[44px] leading-[20px] left-[23.67px] text-[14px] text-white top-[9.67px] w-[97px]">[OVERVIEW]</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute h-[44px] left-[127.42px] top-0 w-[126.729px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0px_4px_0px_0px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal h-[44px] leading-[20px] left-[24.25px] text-[14px] text-neutral-950 top-[9.67px] w-[102px]">[STUDENTS]</p>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute h-[44px] left-[254.15px] top-0 w-[125.146px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0px_4px_0px_0px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal h-[45px] leading-[20px] left-[23.52px] text-[14px] text-neutral-950 top-[9.67px] w-[90px]">[TEACHERS]</p>
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute h-[44px] left-[379.29px] top-0 w-[108.167px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0px_4px_0px_0px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal h-[45px] leading-[20px] left-[24.38px] text-[14px] text-neutral-950 top-[9.67px] w-[84px]">[ASSIGN]</p>
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute h-[44px] left-[487.46px] top-0 w-[131.438px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0px_4px_0px_0px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal h-[47px] leading-[20px] left-[24.21px] text-[14px] text-neutral-950 top-[9.67px] w-[96px]">[LOGBOOKS]</p>
    </div>
  );
}

function Button6() {
  return (
    <div className="absolute h-[44px] left-[618.9px] top-0 w-[134.146px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0px_4px_0px_0px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal h-[41px] leading-[20px] left-[23.77px] text-[14px] text-neutral-950 top-[9.67px] w-[94px]">[SCHEDULES]</p>
    </div>
  );
}

function Button7() {
  return (
    <div className="absolute h-[44px] left-[753.04px] top-0 w-[94.438px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0px_4px_0px_0px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal h-[44px] leading-[20px] left-[23.63px] text-[14px] text-neutral-950 top-[9.67px] w-[59px]">[CHAT]</p>
    </div>
  );
}

function Button8() {
  return (
    <div className="absolute h-[48px] left-[847.67px] top-[-0.33px] w-[111px]" data-name="Button">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal h-[38px] leading-[20px] left-[24px] text-[14px] text-neutral-950 top-[10px] w-[73px]">[TESTS]</p>
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute h-[48px] left-[4px] top-[4px] w-[1480px]" data-name="Container">
      <div className="h-[48px] overflow-clip relative rounded-[inherit] w-[1480px]">
        <Button1 />
        <Button2 />
        <Button3 />
        <Button4 />
        <Button5 />
        <Button6 />
        <Button7 />
        <Button8 />
      </div>
      <div aria-hidden="true" className="absolute border-[0px_0px_4px] border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute h-[42.667px] left-0 top-0 w-[1416px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[9.33px] text-[16px] text-neutral-950 text-nowrap top-[7.67px] whitespace-pre">SYSTEM OVERVIEW</p>
    </div>
  );
}

function Container28() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[40px] left-[296.27px] text-[36px] text-center text-neutral-950 text-nowrap top-[-3px] translate-x-[-50%] whitespace-pre">📊</p>
    </div>
  );
}

function Container29() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[296.48px] text-[16px] text-center text-neutral-950 text-nowrap top-[-1.67px] translate-x-[-50%] whitespace-pre">[STUDENT TREND CHART]</p>
    </div>
  );
}

function Container30() {
  return (
    <div className="[grid-area:1_/_1] place-self-stretch relative shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start pb-[4px] pt-[52px] px-[52px] relative size-full">
          <Container28 />
          <Container29 />
        </div>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[40px] left-[296.27px] text-[36px] text-center text-neutral-950 text-nowrap top-[-3px] translate-x-[-50%] whitespace-pre">📈</p>
    </div>
  );
}

function Container32() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[296.27px] text-[16px] text-center text-neutral-950 text-nowrap top-[-1.67px] translate-x-[-50%] whitespace-pre">[COMPLETION RATE]</p>
    </div>
  );
}

function Container33() {
  return (
    <div className="[grid-area:1_/_2] place-self-stretch relative shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start pb-[4px] pt-[52px] px-[52px] relative size-full">
          <Container31 />
          <Container32 />
        </div>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute gap-[24px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[184px] left-0 top-[66.67px] w-[1416px]" data-name="Container">
      <Container30 />
      <Container33 />
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute h-[42.667px] left-0 top-[282.67px] w-[1416px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[9.33px] text-[16px] text-neutral-950 text-nowrap top-[7.67px] whitespace-pre">RECENT ACTIVITY:</p>
    </div>
  );
}

function Container36() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[32px]" />
    </div>
  );
}

function Container37() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-full">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-neutral-950 text-nowrap top-[-1.67px] whitespace-pre">New student: Alex Chen</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="h-[20px] relative shrink-0 w-[42.896px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[42.896px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[14px] text-neutral-950 top-[-2px] w-[43px]">1h ago</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="absolute box-border content-stretch flex gap-[12px] h-[58.667px] items-center left-0 px-[13.333px] py-[1.333px] top-0 w-[1416px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <Container36 />
      <Container37 />
      <Container38 />
    </div>
  );
}

function Container40() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[32px]" />
    </div>
  );
}

function Container41() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-full">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-neutral-950 text-nowrap top-[-1.67px] whitespace-pre">Teacher approved: Ms. Johnson</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="h-[20px] relative shrink-0 w-[42.896px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[42.896px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[14px] text-neutral-950 top-[-2px] w-[43px]">2h ago</p>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="absolute box-border content-stretch flex gap-[12px] h-[58.667px] items-center left-0 px-[13.333px] py-[1.333px] top-[66.67px] w-[1416px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <Container40 />
      <Container41 />
      <Container42 />
    </div>
  );
}

function Container44() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[32px]" />
    </div>
  );
}

function Container45() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-full">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-neutral-950 text-nowrap top-[-1.67px] whitespace-pre">Logbook: Mr. Smith</p>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="h-[20px] relative shrink-0 w-[42.896px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[42.896px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[14px] text-neutral-950 top-[-2px] w-[43px]">3h ago</p>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="absolute box-border content-stretch flex gap-[12px] h-[58.667px] items-center left-0 px-[13.333px] py-[1.333px] top-[133.33px] w-[1416px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <Container44 />
      <Container45 />
      <Container46 />
    </div>
  );
}

function Container48() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[32px]" />
    </div>
  );
}

function Container49() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-full">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-neutral-950 text-nowrap top-[-1.67px] whitespace-pre">Schedule change: Ms. Davis</p>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="h-[20px] relative shrink-0 w-[42.896px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[42.896px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[14px] text-neutral-950 top-[-2px] w-[43px]">4h ago</p>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="absolute box-border content-stretch flex gap-[12px] h-[58.667px] items-center left-0 px-[13.333px] py-[1.333px] top-[200px] w-[1416px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <Container48 />
      <Container49 />
      <Container50 />
    </div>
  );
}

function Container52() {
  return (
    <div className="absolute h-[258.667px] left-0 top-[341.33px] w-[1416px]" data-name="Container">
      <Container39 />
      <Container43 />
      <Container47 />
      <Container51 />
    </div>
  );
}

function Container53() {
  return (
    <div className="absolute h-[600px] left-[36px] top-[84px] w-[1416px]" data-name="Container">
      <Container27 />
      <Container34 />
      <Container35 />
      <Container52 />
    </div>
  );
}

function Container54() {
  return (
    <div className="h-[720px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <Container26 />
      <Container53 />
    </div>
  );
}

function Container55() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[24px] h-[1081.33px] items-start left-[317.33px] pb-0 pt-[32px] px-[24px] top-[76px] w-[1536px]" data-name="Container">
      <Container9 />
      <Container25 />
      <Container54 />
    </div>
  );
}

function AdminDashboard() {
  return (
    <div className="bg-white h-[1211px] relative shrink-0 w-full" data-name="AdminDashboard">
      <Container6 />
      <Container55 />
    </div>
  );
}

function App() {
  return (
    <div className="absolute bg-gray-50 box-border content-stretch flex flex-col h-[1214px] items-start left-0 pb-0 pt-[3px] px-0 top-0 w-[2171px]" data-name="App">
      <AdminDashboard />
    </div>
  );
}

export default function DashboardDefaultOverview() {
  return (
    <div className="bg-white relative size-full" data-name="Dashboard - Default/Overview">
      <App />
    </div>
  );
}