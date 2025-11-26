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
  return <div className="h-[20px] shrink-0 w-full" data-name="Container" />;
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col h-[40px] items-start relative shrink-0 w-[88.354px]" data-name="Container">
      <Container3 />
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[40px] relative shrink-0 w-[88.354px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[40px] items-start relative w-[88.354px]">
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
    <div className="h-[40px] relative shrink-0 w-[232.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[40px] items-center relative w-[232.5px]">
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
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[32px] min-h-px min-w-px relative shrink-0 text-[24px] text-white">ADMIN DASHBOARD</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-nowrap text-white top-[-1.67px] whitespace-pre">{`System overview & management`}</p>
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

function Container13() {
  return (
    <div className="content-stretch flex h-[36px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Cousine:Regular',sans-serif] grow leading-[36px] min-h-px min-w-px not-italic relative shrink-0 text-[30px] text-neutral-950">156</p>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[14px] text-neutral-950">Students</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[21.333px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px_0px_0px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[16px] left-0 text-[12px] text-neutral-950 text-nowrap top-[4.33px] whitespace-pre">+12 month</p>
    </div>
  );
}

function Container16() {
  return (
    <div className="[grid-area:1_/_1] h-[129.333px] justify-self-stretch relative shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] h-[129.333px] items-start pb-[4px] pt-[20px] px-[20px] relative w-full">
          <Container13 />
          <Container14 />
          <Container15 />
        </div>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex h-[36px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Cousine:Regular',sans-serif] grow leading-[36px] min-h-px min-w-px not-italic relative shrink-0 text-[30px] text-neutral-950">42</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[14px] text-neutral-950">Teachers</p>
    </div>
  );
}

function Container19() {
  return (
    <div className="h-[21.333px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px_0px_0px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[16px] left-0 text-[12px] text-neutral-950 text-nowrap top-[4.33px] whitespace-pre">+3 month</p>
    </div>
  );
}

function Container20() {
  return (
    <div className="[grid-area:1_/_2] h-[129.333px] justify-self-stretch relative shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] h-[129.333px] items-start pb-[4px] pt-[20px] px-[20px] relative w-full">
          <Container17 />
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
      <p className="basis-0 font-['Cousine:Regular',sans-serif] grow leading-[36px] min-h-px min-w-px not-italic relative shrink-0 text-[30px] text-neutral-950">284</p>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[14px] text-neutral-950">Lessons/Week</p>
    </div>
  );
}

function Container23() {
  return (
    <div className="[grid-area:1_/_3] h-[129.333px] justify-self-stretch relative shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] h-[129.333px] items-start pb-[4px] pt-[20px] px-[20px] relative w-full">
          <Container21 />
          <Container22 />
        </div>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex h-[36px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Cousine:Regular',sans-serif] grow leading-[36px] min-h-px min-w-px not-italic relative shrink-0 text-[30px] text-neutral-950">8</p>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[14px] text-neutral-950">Pending</p>
    </div>
  );
}

function Container26() {
  return (
    <div className="h-[21.333px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px_0px_0px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[16px] left-0 text-[12px] text-neutral-950 text-nowrap top-[4.33px] whitespace-pre">Action needed</p>
    </div>
  );
}

function Container27() {
  return (
    <div className="[grid-area:1_/_4] h-[129.333px] justify-self-stretch relative shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] h-[129.333px] items-start pb-[4px] pt-[20px] px-[20px] relative w-full">
          <Container24 />
          <Container25 />
          <Container26 />
        </div>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="gap-[16px] grid grid-cols-[repeat(4,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[129.333px] relative shrink-0 w-full" data-name="Container">
      <Container16 />
      <Container20 />
      <Container23 />
      <Container27 />
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute h-[44px] left-0 top-0 w-[127.417px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0px_4px_0px_0px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal h-[42px] leading-[20px] left-[23.67px] text-[14px] text-neutral-950 top-[9.67px] w-[86px]">[OVERVIEW]</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute h-[44px] left-[127.42px] top-0 w-[126.729px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0px_4px_0px_0px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal h-[42px] leading-[20px] left-[24.25px] text-[14px] text-neutral-950 top-[9.67px] w-[88px]">[STUDENTS]</p>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute h-[44px] left-[254.15px] top-0 w-[125.146px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0px_4px_0px_0px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal h-[45px] leading-[20px] left-[23.52px] text-[14px] text-neutral-950 top-[9.67px] w-[89px]">[TEACHERS]</p>
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute bg-black h-[44px] left-[379.29px] top-0 w-[108.167px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0px_4px_0px_0px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal h-[45px] leading-[20px] left-[24.38px] text-[14px] text-white top-[9.67px] w-[64px]">[ASSIGN]</p>
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute h-[44px] left-[487.46px] top-0 w-[131.438px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0px_4px_0px_0px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal h-[48px] leading-[20px] left-[24.21px] text-[14px] text-neutral-950 top-[9.67px] w-[88px]">[LOGBOOKS]</p>
    </div>
  );
}

function Button6() {
  return (
    <div className="absolute h-[44px] left-[618.9px] top-0 w-[134.146px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0px_4px_0px_0px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal h-[51px] leading-[20px] left-[23.77px] text-[14px] text-neutral-950 top-[9.67px] w-[94px]">[SCHEDULES]</p>
    </div>
  );
}

function Button7() {
  return (
    <div className="absolute h-[44px] left-[753.04px] top-0 w-[94.438px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0px_4px_0px_0px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal h-[51px] leading-[20px] left-[23.63px] text-[14px] text-neutral-950 top-[9.67px] w-[53px]">[CHAT]</p>
    </div>
  );
}

function Button8() {
  return (
    <div className="absolute h-[44px] left-[847.48px] top-0 w-[92.813px]" data-name="Button">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal h-[47px] leading-[20px] left-[24.19px] text-[14px] text-neutral-950 top-[9.67px] w-[57px]">[TESTS]</p>
    </div>
  );
}

function Container29() {
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

function Container30() {
  return (
    <div className="absolute h-[42.667px] left-0 top-0 w-[1416px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[9.33px] text-[16px] text-neutral-950 text-nowrap top-[7.67px] whitespace-pre">Student 1 - Grade 10</p>
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute h-[24px] left-[20px] top-[20px] w-[1376px]" data-name="Container">
      <p className="absolute font-['Cousine:Regular',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-[-0.33px] whitespace-pre">🤖 AUTO-SUGGEST FEATURE</p>
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute bg-blue-50 h-[173px] left-[-0.33px] top-[54px] w-[1416px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-[#155dfc] border-solid inset-0 pointer-events-none" />
      <Container31 />
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute h-[42.667px] left-0 top-[237.33px] w-[1416px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[9.33px] text-[16px] text-neutral-950 text-nowrap top-[7.67px] whitespace-pre">Teachers:</p>
    </div>
  );
}

function Container34() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[40px]" />
    </div>
  );
}

function Container35() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Cousine:Regular',sans-serif] h-[31px] leading-[24px] left-[0.33px] not-italic text-[16px] text-neutral-950 top-[-0.67px] w-[149px]">Ms. Olivia</p>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Grade 10 - 4 Students</p>
    </div>
  );
}

function Container37() {
  return (
    <div className="basis-0 grow h-[44px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[44px] items-start relative w-full">
        <Container35 />
        <Container36 />
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="h-[44px] relative shrink-0 w-[234.896px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[44px] items-center relative w-[234.896px]">
        <Container34 />
        <Container37 />
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div className="bg-black h-[42.667px] relative shrink-0 w-[89.208px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[42.667px] relative w-[89.208px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[17.33px] text-[16px] text-nowrap text-white top-[7.67px] whitespace-pre">ASSIGN</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="h-[42.667px] relative shrink-0 w-[258.542px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[42.667px] items-start relative w-[258.542px]">
        <Button9 />
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex h-[44px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container38 />
      <Container39 />
    </div>
  );
}

function Container41() {
  return (
    <div className="h-[78.667px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[78.667px] items-start pb-[1.333px] pt-[17.333px] px-[17.333px] relative w-full">
          <Container40 />
        </div>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[40px]" />
    </div>
  );
}

function Container43() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Cousine:Regular',sans-serif] h-[31px] leading-[24px] left-[0.33px] not-italic text-[16px] text-neutral-950 top-[-0.33px] w-[138px]">Ms. Johnson</p>
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Grade 12 - 10 Students</p>
    </div>
  );
}

function Container45() {
  return (
    <div className="basis-0 grow h-[44px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[44px] items-start relative w-full">
        <Container43 />
        <Container44 />
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="h-[44px] relative shrink-0 w-[234.896px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[44px] items-center relative w-[234.896px]">
        <Container42 />
        <Container45 />
      </div>
    </div>
  );
}

function Button10() {
  return (
    <div className="bg-black h-[42.667px] relative shrink-0 w-[89.208px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[42.667px] relative w-[89.208px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[17.33px] text-[16px] text-nowrap text-white top-[7.67px] whitespace-pre">ASSIGN</p>
      </div>
    </div>
  );
}

function Button11() {
  return (
    <div className="bg-black h-[42.667px] relative shrink-0 w-[89.208px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[42.667px] relative w-[89.208px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[17.33px] text-[16px] text-nowrap text-white top-[7.67px] whitespace-pre">NOTIFY</p>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="h-[42.667px] relative shrink-0 w-[258.542px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[42.667px] items-start relative w-[258.542px]">
        <Button10 />
        <Button11 />
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex h-[44px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container46 />
      <Container47 />
    </div>
  );
}

function Container49() {
  return (
    <div className="h-[78.667px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[78.667px] items-start pb-[1.333px] pt-[17.333px] px-[17.333px] relative w-full">
          <Container48 />
        </div>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[40px]" />
    </div>
  );
}

function Container51() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Cousine:Regular',sans-serif] leading-[24px] left-[0.33px] not-italic text-[16px] text-neutral-950 top-0 w-[90px]">Ms. Eve</p>
    </div>
  );
}

function Container52() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Grade 7 - 1 Students</p>
    </div>
  );
}

function Container53() {
  return (
    <div className="basis-0 grow h-[44px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[44px] items-start relative w-full">
        <Container51 />
        <Container52 />
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="h-[44px] relative shrink-0 w-[234.896px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[44px] items-center relative w-[234.896px]">
        <Container50 />
        <Container53 />
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="h-[42.667px] relative shrink-0 w-[258.542px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[42.667px] w-[258.542px]" />
    </div>
  );
}

function Button12() {
  return (
    <div className="bg-black h-[42.667px] relative shrink-0 w-[89.208px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[42.667px] relative w-[89.208px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[17.33px] text-[16px] text-nowrap text-white top-[7.67px] whitespace-pre">ASSIGN</p>
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="h-[42.667px] relative shrink-0 w-[258.542px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[42.667px] items-start relative w-[258.542px]">
        <Button12 />
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="content-stretch flex h-[44px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container54 />
      <Container55 />
      <Container56 />
    </div>
  );
}

function Container58() {
  return (
    <div className="h-[78.667px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[78.667px] items-start pb-[1.333px] pt-[17.333px] px-[17.333px] relative w-full">
          <Container57 />
        </div>
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[260px] items-start left-0 top-[296px] w-[1416px]" data-name="Container">
      <Container41 />
      <Container49 />
      <Container58 />
    </div>
  );
}

function Container60() {
  return (
    <div className="absolute h-[556px] left-[36px] top-[84px] w-[1416px]" data-name="Container">
      <Container30 />
      <Container32 />
      <Container33 />
      <Container59 />
    </div>
  );
}

function Container61() {
  return (
    <div className="h-[676px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <Container29 />
      <Container60 />
    </div>
  );
}

function Container62() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[24px] h-[1037.33px] items-start left-[317.33px] pb-0 pt-[32px] px-[24px] top-[76px] w-[1536px]" data-name="Container">
      <Container12 />
      <Container28 />
      <Container61 />
    </div>
  );
}

function Container63() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[1138px] top-[553.33px] w-[1376px]" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[14px] text-neutral-950">{`AI matches based on subject, grade & availability`}</p>
    </div>
  );
}

function Container64() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[40px]" />
    </div>
  );
}

function Container65() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Cousine:Regular',sans-serif] h-[31px] leading-[24px] left-[0.33px] not-italic text-[16px] text-neutral-950 top-[-0.67px] w-[149px]">Ms. Olivia</p>
    </div>
  );
}

function Container66() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Grade 10 - 4 Students</p>
    </div>
  );
}

function Container67() {
  return (
    <div className="basis-0 grow h-[44px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[44px] items-start relative w-full">
        <Container65 />
        <Container66 />
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div className="h-[44px] relative shrink-0 w-[234.896px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[44px] items-center relative w-[234.896px]">
        <Container64 />
        <Container67 />
      </div>
    </div>
  );
}

function Button13() {
  return (
    <div className="bg-black h-[42.667px] relative shrink-0 w-[89.208px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[42.667px] relative w-[89.208px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[17.33px] text-[16px] text-nowrap text-white top-[7.67px] whitespace-pre">ASSIGN</p>
      </div>
    </div>
  );
}

function Container69() {
  return (
    <div className="h-[42.667px] relative shrink-0 w-[258.542px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[42.667px] items-start relative w-[258.542px]">
        <Button13 />
      </div>
    </div>
  );
}

function Container70() {
  return (
    <div className="content-stretch flex h-[44px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container68 />
      <Container69 />
    </div>
  );
}

function Container71() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[79px] items-start left-[397px] pb-[1.333px] pt-[17.333px] px-[17.333px] top-[623.33px] w-[1379px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <Container70 />
    </div>
  );
}

export default function AdminDashboard() {
  return (
    <div className="bg-white relative size-full" data-name="AdminDashboard">
      <Container9 />
      <Container62 />
      <Container63 />
      <Container71 />
    </div>
  );
}