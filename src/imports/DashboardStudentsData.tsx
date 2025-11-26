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
    <div className="absolute box-border content-stretch flex flex-col h-[76px] items-start left-0 pb-[4px] pt-[16px] px-[317.333px] top-0 w-[2171px]" data-name="Container">
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
    <div className="absolute h-[44px] left-0 top-0 w-[127.417px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0px_4px_0px_0px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal h-[45px] leading-[20px] left-[23.67px] text-[14px] text-neutral-950 top-[9.67px] w-[86px]">[OVERVIEW]</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute bg-black h-[44px] left-[127.42px] top-0 w-[126.729px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0px_4px_0px_0px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal h-[45px] leading-[20px] left-[24.25px] text-[14px] text-white top-[9.67px] w-[89px]">[STUDENTS]</p>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute h-[44px] left-[254.15px] top-0 w-[125.146px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0px_4px_0px_0px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal h-[43px] leading-[20px] left-[23.52px] text-[14px] text-neutral-950 top-[9.67px] w-[91px]">[TEACHERS]</p>
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute h-[44px] left-[379.29px] top-0 w-[108.167px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0px_4px_0px_0px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal h-[34px] leading-[20px] left-[24.38px] text-[14px] text-neutral-950 top-[9.67px] w-[69px]">[ASSIGN]</p>
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute h-[44px] left-[487.46px] top-0 w-[131.438px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0px_4px_0px_0px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal h-[43px] leading-[20px] left-[24.21px] text-[14px] text-neutral-950 top-[9.67px] w-[96px]">[LOGBOOKS]</p>
    </div>
  );
}

function Button6() {
  return (
    <div className="absolute h-[44px] left-[618.9px] top-0 w-[134.146px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0px_4px_0px_0px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal h-[49px] leading-[20px] left-[23.77px] text-[14px] text-neutral-950 top-[9.67px] w-[110px]">[SCHEDULES]</p>
    </div>
  );
}

function Button7() {
  return (
    <div className="absolute h-[44px] left-[753.04px] top-0 w-[94.438px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0px_4px_0px_0px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal h-[34px] leading-[20px] left-[23.63px] text-[14px] text-neutral-950 top-[9.67px] w-[47px]">[CHAT]</p>
    </div>
  );
}

function Button8() {
  return (
    <div className="absolute h-[44px] left-[847.48px] top-0 w-[92.813px]" data-name="Button">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal h-[47px] leading-[20px] left-[24.19px] text-[14px] text-neutral-950 top-[9.67px] w-[59px]">[TESTS]</p>
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

function SearchInput() {
  return (
    <div className="basis-0 grow h-[42.667px] min-h-px min-w-px relative shrink-0" data-name="Search Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[42.667px] items-center px-[12px] py-[8px] relative w-full">
          <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-[rgba(10,10,10,0.5)] text-nowrap whitespace-pre">Search...</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container27() {
  return (
    <div className="h-[42.667px] relative shrink-0 w-[295.438px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[42.667px] items-start relative w-[295.438px]">
        <SearchInput />
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex h-[42.667px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container27 />
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute h-[24px] left-[16px] top-[16px] w-[1384px]" data-name="Container">
      <p className="absolute font-['Cousine:Regular',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-[-0.33px] whitespace-pre">⚠ PENDING APPLICATIONS (3)</p>
    </div>
  );
}

function Button9() {
  return (
    <div className="absolute bg-[#d08700] h-[42.667px] left-[16px] top-[48px] w-[132.542px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[17.33px] text-[16px] text-nowrap text-white top-[7.67px] whitespace-pre">REVIEW NOW</p>
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute bg-yellow-50 h-[106.667px] left-[-0.33px] top-[-15px] w-[1416px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-[#d08700] border-solid inset-0 pointer-events-none" />
      <Container29 />
      <Button9 />
    </div>
  );
}

function Container31() {
  return (
    <div className="bg-yellow-50 h-[56px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-[#d08700] border-solid inset-0 pointer-events-none" />
      <Container30 />
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute h-[19.969px] left-[12px] top-[12px] w-[194.578px]" data-name="Container">
      <p className="absolute font-['Cousine:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-[-0.5px] whitespace-pre">NAME</p>
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute h-[19.969px] left-[222.56px] top-[12px] w-[194.578px]" data-name="Container">
      <p className="absolute font-['Cousine:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-[-0.5px] whitespace-pre">EMAIL</p>
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute h-[19.969px] left-[433.13px] top-[12px] w-[194.578px]" data-name="Container">
      <p className="absolute font-['Cousine:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-[-0.5px] whitespace-pre">SCHOOL</p>
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute h-[19.969px] left-[643.69px] top-[12px] w-[194.602px]" data-name="Container">
      <p className="absolute font-['Cousine:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-[-0.5px] whitespace-pre">GRADE</p>
    </div>
  );
}

function Container36() {
  return (
    <div className="absolute h-[19.969px] left-[854.27px] top-[12px] w-[194.578px]" data-name="Container">
      <p className="absolute font-['Cousine:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-[-0.5px] whitespace-pre">TEST SCORE</p>
    </div>
  );
}

function Container37() {
  return (
    <div className="absolute h-[19.969px] left-[1064.84px] top-[12px] w-[194.578px]" data-name="Container">
      <p className="absolute font-['Cousine:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-[-0.5px] whitespace-pre">TEACHER</p>
    </div>
  );
}

function Container38() {
  return (
    <div className="absolute h-[19.969px] left-[1275.4px] top-[12px] w-[194.602px]" data-name="Container">
      <p className="absolute font-['Cousine:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-[-0.5px] whitespace-pre">ACTIONS</p>
    </div>
  );
}

function Container39() {
  return (
    <div className="bg-gray-100 h-[46.969px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_3px] border-black border-solid inset-0 pointer-events-none" />
      <Container32 />
      <Container33 />
      <Container34 />
      <Container35 />
      <Container36 />
      <Container37 />
      <Container38 />
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute content-stretch flex h-[19.969px] items-start left-[12px] top-[15.49px] w-[194.578px]" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[14px] text-neutral-950">Alex Chen</p>
    </div>
  );
}

function Container41() {
  return (
    <div className="absolute content-stretch flex h-[19.969px] items-start left-[222.56px] top-[15.49px] w-[194.578px]" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[14px] text-neutral-950">alex.chen@email.com</p>
    </div>
  );
}

function Container42() {
  return (
    <div className="absolute content-stretch flex h-[19.969px] items-start left-[433.13px] top-[15.49px] w-[194.578px]" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[14px] text-neutral-950">Central High School</p>
    </div>
  );
}

function Container43() {
  return (
    <div className="absolute content-stretch flex h-[19.969px] items-start left-[643.69px] top-[15.49px] w-[194.602px]" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[14px] text-neutral-950">Grade 10</p>
    </div>
  );
}

function Container44() {
  return (
    <div className="absolute h-[19.969px] left-[854.27px] top-[15.49px] w-[194.578px]" data-name="Container">
      <p className="absolute font-['Cousine:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-[-0.5px] whitespace-pre">85%</p>
    </div>
  );
}

function Container45() {
  return (
    <div className="absolute content-stretch flex h-[19.969px] items-start left-[1064.84px] top-[15.49px] w-[194.578px]" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[14px] text-neutral-950">Ms. Johnson</p>
    </div>
  );
}

function Button10() {
  return (
    <div className="bg-black h-[26.953px] relative shrink-0 w-[46.922px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.5px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[26.953px] relative w-[46.922px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[16px] left-[9.49px] text-[12px] text-nowrap text-white top-[2.98px] whitespace-pre">VIEW</p>
      </div>
    </div>
  );
}

function Button11() {
  return (
    <div className="h-[26.953px] relative shrink-0 w-[42.961px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.5px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[26.953px] relative w-[42.961px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[16px] left-[9.49px] text-[12px] text-neutral-950 text-nowrap top-[2.98px] whitespace-pre">EDIT</p>
      </div>
    </div>
  );
}

function Button12() {
  return (
    <div className="h-[27px] relative shrink-0 w-[66px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.5px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[27px] relative w-[66px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[16px] left-[9.49px] text-[12px] text-neutral-950 text-nowrap top-[2.98px] whitespace-pre">DELETE</p>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="absolute content-stretch flex gap-[3.984px] h-[27px] items-start left-[1231.33px] top-[13.36px] w-[164px]" data-name="Container">
      <Button10 />
      <Button11 />
      <Button12 />
    </div>
  );
}

function Container47() {
  return (
    <div className="h-[52.453px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1.5px] border-black border-solid inset-0 pointer-events-none" />
      <Container40 />
      <Container41 />
      {[...Array(2).keys()].map((_, i) => (
        <Container42 key={i} />
      ))}
      <Container43 />
      <Container44 />
      <Container45 />
      <Container46 />
    </div>
  );
}

function Container48() {
  return (
    <div className="absolute content-stretch flex h-[19.969px] items-start left-[12px] top-[15.49px] w-[194.578px]" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[14px] text-neutral-950">Sarah Williams</p>
    </div>
  );
}

function Container49() {
  return (
    <div className="absolute content-stretch flex h-[19.969px] items-start left-[222.56px] top-[15.49px] w-[194.578px]" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[14px] text-neutral-950">sarah.w@email.com</p>
    </div>
  );
}

function Container50() {
  return (
    <div className="absolute content-stretch flex h-[19.969px] items-start left-[433.13px] top-[15.49px] w-[194.578px]" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[14px] text-neutral-950">East Side Academy</p>
    </div>
  );
}

function Container51() {
  return (
    <div className="absolute content-stretch flex h-[19.969px] items-start left-[643.69px] top-[15.49px] w-[194.602px]" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[14px] text-neutral-950">Grade 9</p>
    </div>
  );
}

function Container52() {
  return (
    <div className="absolute h-[19.969px] left-[854.27px] top-[15.49px] w-[194.578px]" data-name="Container">
      <p className="absolute font-['Cousine:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-[-0.5px] whitespace-pre">92%</p>
    </div>
  );
}

function Container53() {
  return (
    <div className="absolute content-stretch flex h-[19.969px] items-start left-[1064.84px] top-[15.49px] w-[194.578px]" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[14px] text-neutral-950">Mr. Smith</p>
    </div>
  );
}

function Button13() {
  return (
    <div className="bg-black h-[26.953px] relative shrink-0 w-[46.922px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.5px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[26.953px] relative w-[46.922px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[16px] left-[9.49px] text-[12px] text-nowrap text-white top-[2.98px] whitespace-pre">VIEW</p>
      </div>
    </div>
  );
}

function Button14() {
  return (
    <div className="h-[26.953px] relative shrink-0 w-[42.961px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.5px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[26.953px] relative w-[42.961px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[16px] left-[9.49px] text-[12px] text-neutral-950 text-nowrap top-[2.98px] whitespace-pre">EDIT</p>
      </div>
    </div>
  );
}

function Button15() {
  return (
    <div className="h-[27px] relative shrink-0 w-[66px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.5px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[27px] relative w-[66px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[16px] left-[9.49px] text-[12px] text-neutral-950 text-nowrap top-[2.98px] whitespace-pre">DELETE</p>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="absolute content-stretch flex gap-[3.984px] h-[27px] items-start left-[1231.33px] top-[12.91px] w-[164px]" data-name="Container">
      <Button13 />
      <Button14 />
      <Button15 />
    </div>
  );
}

function Container55() {
  return (
    <div className="h-[52.453px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1.5px] border-black border-solid inset-0 pointer-events-none" />
      <Container48 />
      <Container49 />
      <Container50 />
      <Container51 />
      <Container52 />
      <Container53 />
      <Container54 />
    </div>
  );
}

function Container56() {
  return (
    <div className="absolute content-stretch flex h-[19.969px] items-start left-[12px] top-[15.49px] w-[194.578px]" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[14px] text-neutral-950">Michael Brown</p>
    </div>
  );
}

function Container57() {
  return (
    <div className="absolute content-stretch flex h-[19.969px] items-start left-[222.56px] top-[15.49px] w-[194.578px]" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[14px] text-neutral-950">mike.b@email.com</p>
    </div>
  );
}

function Container58() {
  return (
    <div className="absolute content-stretch flex h-[19.969px] items-start left-[433.13px] top-[15.49px] w-[194.578px]" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[14px] text-neutral-950">North High</p>
    </div>
  );
}

function Container59() {
  return (
    <div className="absolute content-stretch flex h-[19.969px] items-start left-[643.69px] top-[15.49px] w-[194.602px]" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[14px] text-neutral-950">Grade 11</p>
    </div>
  );
}

function Container60() {
  return (
    <div className="absolute h-[19.969px] left-[854.27px] top-[15.49px] w-[194.578px]" data-name="Container">
      <p className="absolute font-['Cousine:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-[-0.5px] whitespace-pre">78%</p>
    </div>
  );
}

function Container61() {
  return (
    <div className="absolute content-stretch flex h-[19.969px] items-start left-[1064.84px] top-[15.49px] w-[194.578px]" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[14px] text-neutral-950">Ms. Davis</p>
    </div>
  );
}

function Container62() {
  return <div className="absolute h-[26.953px] left-[1275.4px] top-[12px] w-[194.602px]" data-name="Container" />;
}

function Button16() {
  return (
    <div className="bg-black h-[26.953px] relative shrink-0 w-[46.922px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.5px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[26.953px] relative w-[46.922px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[16px] left-[9.49px] text-[12px] text-nowrap text-white top-[2.98px] whitespace-pre">VIEW</p>
      </div>
    </div>
  );
}

function Button17() {
  return (
    <div className="h-[26.953px] relative shrink-0 w-[42.961px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.5px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[26.953px] relative w-[42.961px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[16px] left-[9.49px] text-[12px] text-neutral-950 text-nowrap top-[2.98px] whitespace-pre">EDIT</p>
      </div>
    </div>
  );
}

function Button18() {
  return (
    <div className="h-[27px] relative shrink-0 w-[66px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.5px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[27px] relative w-[66px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[16px] left-[9.49px] text-[12px] text-neutral-950 text-nowrap top-[2.98px] whitespace-pre">DELETE</p>
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="absolute content-stretch flex gap-[3.984px] h-[27px] items-start left-[1231.33px] top-[13.46px] w-[164px]" data-name="Container">
      <Button16 />
      <Button17 />
      <Button18 />
    </div>
  );
}

function Container64() {
  return (
    <div className="h-[52.453px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1.5px] border-black border-solid inset-0 pointer-events-none" />
      <Container56 />
      <Container57 />
      <Container58 />
      <Container59 />
      <Container60 />
      <Container61 />
      <Container62 />
      <Container63 />
    </div>
  );
}

function Container65() {
  return (
    <div className="absolute content-stretch flex h-[19.969px] items-start left-[12px] top-[15.49px] w-[194.578px]" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[14px] text-neutral-950">Emma Martinez</p>
    </div>
  );
}

function Container66() {
  return (
    <div className="absolute content-stretch flex h-[19.969px] items-start left-[222.56px] top-[15.49px] w-[194.578px]" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[14px] text-neutral-950">emma.m@email.com</p>
    </div>
  );
}

function Container67() {
  return (
    <div className="absolute content-stretch flex h-[19.969px] items-start left-[433.13px] top-[15.49px] w-[194.578px]" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[14px] text-neutral-950">South School</p>
    </div>
  );
}

function Container68() {
  return (
    <div className="absolute content-stretch flex h-[19.969px] items-start left-[643.69px] top-[15.49px] w-[194.602px]" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[14px] text-neutral-950">Grade 8</p>
    </div>
  );
}

function Container69() {
  return (
    <div className="absolute h-[19.969px] left-[854.27px] top-[15.49px] w-[194.578px]" data-name="Container">
      <p className="absolute font-['Cousine:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-[-0.5px] whitespace-pre">88%</p>
    </div>
  );
}

function Container70() {
  return (
    <div className="absolute content-stretch flex h-[19.969px] items-start left-[1064.84px] top-[15.49px] w-[194.578px]" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[14px] text-neutral-950">Ms. Johnson</p>
    </div>
  );
}

function Button19() {
  return (
    <div className="bg-black h-[26.953px] relative shrink-0 w-[46.922px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.5px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[26.953px] relative w-[46.922px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[16px] left-[9.49px] text-[12px] text-nowrap text-white top-[2.98px] whitespace-pre">VIEW</p>
      </div>
    </div>
  );
}

function Button20() {
  return (
    <div className="h-[26.953px] relative shrink-0 w-[42.961px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.5px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[26.953px] relative w-[42.961px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[16px] left-[9.49px] text-[12px] text-neutral-950 text-nowrap top-[2.98px] whitespace-pre">EDIT</p>
      </div>
    </div>
  );
}

function Button21() {
  return (
    <div className="h-[27px] relative shrink-0 w-[66px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.5px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[27px] relative w-[66px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[16px] left-[9.49px] text-[12px] text-neutral-950 text-nowrap top-[2.98px] whitespace-pre">DELETE</p>
      </div>
    </div>
  );
}

function Container71() {
  return (
    <div className="absolute content-stretch flex gap-[3.984px] h-[27px] items-start left-[1231.33px] top-[13.01px] w-[164px]" data-name="Container">
      <Button19 />
      <Button20 />
      <Button21 />
    </div>
  );
}

function Container72() {
  return (
    <div className="h-[52.453px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1.5px] border-black border-solid inset-0 pointer-events-none" />
      <Container65 />
      <Container66 />
      <Container67 />
      <Container68 />
      <Container69 />
      <Container70 />
      <Container71 />
    </div>
  );
}

function Container73() {
  return (
    <div className="h-[262.781px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[3px] border-black border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[262.781px] items-start p-[3px] relative w-full">
          <Container39 />
          <Container47 />
          <Container55 />
          <Container64 />
          <Container72 />
        </div>
      </div>
    </div>
  );
}

function Container74() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[60px] h-[533px] items-start left-[35.67px] top-[83.67px] w-[1416px]" data-name="Container">
      <Container28 />
      <Container31 />
      <Container73 />
    </div>
  );
}

function Container75() {
  return (
    <div className="h-[660px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <Container26 />
      <Container74 />
    </div>
  );
}

function Container76() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[24px] h-[1013px] items-start left-[317px] pb-0 pt-[32px] px-[24px] top-[76px] w-[1536px]" data-name="Container">
      <Container9 />
      <Container25 />
      <Container75 />
    </div>
  );
}

function AdminDashboard() {
  return (
    <div className="bg-white h-[1211px] relative shrink-0 w-full" data-name="AdminDashboard">
      <Container6 />
      <Container76 />
    </div>
  );
}

function App() {
  return (
    <div className="absolute bg-gray-50 box-border content-stretch flex flex-col h-[1214px] items-start left-[-1px] pb-0 pt-[3px] px-0 top-0 w-[2171px]" data-name="App">
      <AdminDashboard />
    </div>
  );
}

export default function DashboardStudentsData() {
  return (
    <div className="bg-white relative size-full" data-name="Dashboard - Students Data">
      <App />
    </div>
  );
}