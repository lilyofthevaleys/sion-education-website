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
    <div className="absolute h-[44px] left-0 top-0 w-[127.417px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0px_4px_0px_0px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal h-[43px] leading-[20px] left-[23.67px] text-[14px] text-neutral-950 top-[9.67px] w-[88px]">[OVERVIEW]</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute h-[44px] left-[127.42px] top-0 w-[126.729px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0px_4px_0px_0px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal h-[45px] leading-[20px] left-[24.25px] text-[14px] text-neutral-950 top-[9.67px] w-[86px]">[STUDENTS]</p>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute bg-black h-[44px] left-[254.15px] top-0 w-[125.146px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0px_4px_0px_0px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal h-[45px] leading-[20px] left-[23.52px] text-[14px] text-white top-[9.67px] w-[87px]">[TEACHERS]</p>
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute h-[44px] left-[379.29px] top-0 w-[108.167px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0px_4px_0px_0px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal h-[46px] leading-[20px] left-[24.38px] text-[14px] text-neutral-950 top-[9.67px] w-[71px]">[ASSIGN]</p>
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute h-[44px] left-[487.46px] top-0 w-[131.438px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0px_4px_0px_0px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal h-[44px] leading-[20px] left-[24.21px] text-[14px] text-neutral-950 top-[9.67px] w-[88px]">[LOGBOOKS]</p>
    </div>
  );
}

function Button6() {
  return (
    <div className="absolute h-[44px] left-[618.9px] top-0 w-[134.146px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0px_4px_0px_0px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal h-[52px] leading-[20px] left-[23.77px] text-[14px] text-neutral-950 top-[9.67px] w-[94px]">[SCHEDULES]</p>
    </div>
  );
}

function Button7() {
  return (
    <div className="absolute h-[44px] left-[753.04px] top-0 w-[94.438px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0px_4px_0px_0px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal h-[59px] leading-[20px] left-[23.63px] text-[14px] text-neutral-950 top-[9.67px] w-[65px]">[CHAT]</p>
    </div>
  );
}

function Button8() {
  return (
    <div className="absolute h-[44px] left-[847.48px] top-0 w-[92.813px]" data-name="Button">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal h-[48px] leading-[20px] left-[24.19px] text-[14px] text-neutral-950 top-[9.67px] w-[63px]">[TESTS]</p>
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
    <div className="h-[43px] relative shrink-0 w-[289px]" data-name="Search Input">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[43px] items-center overflow-clip px-[12px] py-[8px] relative rounded-[inherit] w-[289px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-[rgba(10,10,10,0.5)] text-nowrap whitespace-pre">Search...</p>
      </div>
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex h-[42.667px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <SearchInput />
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute h-[24px] left-[16px] top-[16px] w-[1384px]" data-name="Container">
      <p className="absolute font-['Cousine:Regular',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-[-0.33px] whitespace-pre">⚠ PENDING APPLICATIONS (5)</p>
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

function Container29() {
  return (
    <div className="bg-yellow-50 h-[106.667px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-[#d08700] border-solid inset-0 pointer-events-none" />
      <Container28 />
      <Button9 />
    </div>
  );
}

function Container30() {
  return (
    <div className="relative rounded-[5.03316e+07px] shrink-0 size-[79.992px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[3px] border-black border-solid inset-0 pointer-events-none rounded-[5.03316e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[79.992px]" />
    </div>
  );
}

function Container31() {
  return (
    <div className="h-[27.984px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Cousine:Regular',sans-serif] leading-[28px] left-0 not-italic text-[18px] text-neutral-950 text-nowrap top-[-1px] whitespace-pre">Ms. Sarah Johnson</p>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex h-[19.969px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[14px] text-neutral-950">Mathematics</p>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex h-[19.969px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[14px] text-neutral-950">Grades 9-11</p>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[26.953px] relative shrink-0 w-[72.094px]" data-name="Text">
      <div aria-hidden="true" className="absolute border-[1.5px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[26.953px] relative w-[72.094px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal h-[33px] leading-[16px] left-[9.77px] text-[12px] text-neutral-950 top-[3.28px] w-[62px]">8 YRS EXP</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[26.953px] relative shrink-0 w-[38.789px]" data-name="Text">
      <div aria-hidden="true" className="absolute border-[1.5px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[26.953px] relative w-[38.789px]">
        <p className="absolute font-['Cousine:Regular',sans-serif] leading-[16px] left-[9.49px] not-italic text-[12px] text-neutral-950 text-nowrap top-[4.48px] whitespace-pre">94%</p>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="bg-green-50 h-[26.953px] relative shrink-0 w-[56.93px]" data-name="Text">
      <div aria-hidden="true" className="absolute border-[#00a63e] border-[1.5px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[26.953px] relative w-[56.93px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[16px] left-[9.49px] text-[12px] text-neutral-950 text-nowrap top-[2.98px] whitespace-pre">ACTIVE</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex gap-[7.992px] h-[26.953px] items-start relative shrink-0 w-full" data-name="Container">
      <Text />
      <Text1 />
      <Text2 />
    </div>
  );
}

function Container35() {
  return (
    <div className="basis-0 grow h-[110.836px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[3.984px] h-[110.836px] items-start relative w-full">
        <Container31 />
        <Container32 />
        <Container33 />
        <Container34 />
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex gap-[15.984px] h-[110.836px] items-start relative shrink-0 w-full" data-name="Container">
      <Container30 />
      <Container35 />
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[19.969px] relative shrink-0 w-[41.484px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[19.969px] items-start relative w-[41.484px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">[Email]</p>
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[19.969px] relative shrink-0 w-[123.117px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[19.969px] relative w-[123.117px]">
        <p className="absolute font-['Cousine:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-[-0.5px] whitespace-pre">sarah.j@sion.edu</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex h-[19.969px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Text3 />
      <Text4 />
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[19.969px] relative shrink-0 w-[47.648px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[19.969px] items-start relative w-[47.648px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">[Phone]</p>
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[19.969px] relative shrink-0 w-[61.57px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[19.969px] relative w-[61.57px]">
        <p className="absolute font-['Cousine:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-[-0.5px] whitespace-pre">555-1001</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex h-[19.969px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Text5 />
      <Text6 />
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[19.969px] relative shrink-0 w-[62.273px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[19.969px] items-start relative w-[62.273px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">[Students]</p>
      </div>
    </div>
  );
}

function Text8() {
  return (
    <div className="h-[19.969px] relative shrink-0 w-[84.656px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[19.969px] relative w-[84.656px]">
        <p className="absolute font-['Cousine:Regular',sans-serif] h-[40px] leading-[20px] left-[0.41px] not-italic text-[14px] text-neutral-950 top-[-0.07px] w-[96px]">12 assigned</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex h-[19.969px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Text7 />
      <Text8 />
    </div>
  );
}

function Text9() {
  return (
    <div className="h-[19.969px] relative shrink-0 w-[74.836px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[19.969px] items-start relative w-[74.836px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">[Availability]</p>
      </div>
    </div>
  );
}

function Text10() {
  return (
    <div className="h-[19.969px] relative shrink-0 w-[98.977px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[19.969px] items-start relative w-[98.977px]">
        <p className="font-['Cousine:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-neutral-950 text-nowrap whitespace-pre">Mon-Fri 3PM-8PM</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex h-[19.969px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Text9 />
      <Text10 />
    </div>
  );
}

function Container41() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[7.992px] h-[121.336px] items-start pb-0 pt-[17.484px] px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.5px_0px_0px] border-black border-solid inset-0 pointer-events-none" />
      <Container37 />
      <Container38 />
      <Container39 />
      <Container40 />
    </div>
  );
}

function Button10() {
  return (
    <div className="bg-black h-[43px] relative shrink-0 w-[181px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.5px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[43px] relative w-[181px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[13.5px] text-[16px] text-nowrap text-white top-[6.49px] whitespace-pre">VIEW FULL DETAILS</p>
      </div>
    </div>
  );
}

function Button11() {
  return (
    <div className="h-[42.984px] relative shrink-0 w-[58.945px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.5px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[42.984px] relative w-[58.945px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[13.5px] text-[16px] text-neutral-950 text-nowrap top-[6.49px] whitespace-pre">EDIT</p>
      </div>
    </div>
  );
}

function Button12() {
  return (
    <div className="h-[43px] relative shrink-0 w-[90px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.5px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[43px] relative w-[90px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[13.5px] text-[16px] text-neutral-950 text-nowrap top-[6.49px] whitespace-pre">DELETE</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex gap-[7.992px] h-[43px] items-start relative shrink-0 w-[496px]" data-name="Container">
      <Button10 />
      <Button11 />
      <Button12 />
    </div>
  );
}

function Container43() {
  return (
    <div className="[grid-area:1_/_1] place-self-stretch relative shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[3px] border-black border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[15.984px] items-start pb-[3px] pt-[27px] px-[27px] relative size-full">
          <Container36 />
          <Container41 />
          <Container42 />
        </div>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="relative rounded-[5.03316e+07px] shrink-0 size-[79.992px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[3px] border-black border-solid inset-0 pointer-events-none rounded-[5.03316e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[79.992px]" />
    </div>
  );
}

function Container45() {
  return (
    <div className="h-[27.984px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Cousine:Regular',sans-serif] leading-[28px] left-0 not-italic text-[18px] text-neutral-950 text-nowrap top-[-1px] whitespace-pre">Mr. David Smith</p>
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex h-[19.969px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[14px] text-neutral-950">{`Science & Physics`}</p>
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex h-[19.969px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[14px] text-neutral-950">Grades 10-12</p>
    </div>
  );
}

function Text11() {
  return (
    <div className="h-[26.953px] relative shrink-0 w-[78.563px]" data-name="Text">
      <div aria-hidden="true" className="absolute border-[1.5px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[26.953px] relative w-[78.563px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal h-[37px] leading-[16px] left-[9.77px] text-[12px] text-neutral-950 top-[3.28px] w-[69px]">15 YRS EXP</p>
      </div>
    </div>
  );
}

function Text12() {
  return (
    <div className="h-[26.953px] relative shrink-0 w-[38.789px]" data-name="Text">
      <div aria-hidden="true" className="absolute border-[1.5px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[26.953px] relative w-[38.789px]">
        <p className="absolute font-['Cousine:Regular',sans-serif] leading-[16px] left-[9.49px] not-italic text-[12px] text-neutral-950 text-nowrap top-[4.48px] whitespace-pre">98%</p>
      </div>
    </div>
  );
}

function Text13() {
  return (
    <div className="bg-green-50 h-[26.953px] relative shrink-0 w-[56.93px]" data-name="Text">
      <div aria-hidden="true" className="absolute border-[#00a63e] border-[1.5px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[26.953px] relative w-[56.93px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[16px] left-[9.49px] text-[12px] text-neutral-950 text-nowrap top-[2.98px] whitespace-pre">ACTIVE</p>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex gap-[7.992px] h-[26.953px] items-start relative shrink-0 w-full" data-name="Container">
      <Text11 />
      <Text12 />
      <Text13 />
    </div>
  );
}

function Container49() {
  return (
    <div className="basis-0 grow h-[110.836px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[3.984px] h-[110.836px] items-start relative w-full">
        <Container45 />
        <Container46 />
        <Container47 />
        <Container48 />
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex gap-[15.984px] h-[110.836px] items-start relative shrink-0 w-full" data-name="Container">
      <Container44 />
      <Container49 />
    </div>
  );
}

function Text14() {
  return (
    <div className="h-[19.969px] relative shrink-0 w-[41.484px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[19.969px] items-start relative w-[41.484px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">[Email]</p>
      </div>
    </div>
  );
}

function Text15() {
  return (
    <div className="h-[19.969px] relative shrink-0 w-[123.117px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[19.969px] relative w-[123.117px]">
        <p className="absolute font-['Cousine:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-[-0.5px] whitespace-pre">david.s@sion.edu</p>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex h-[19.969px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Text14 />
      <Text15 />
    </div>
  );
}

function Text16() {
  return (
    <div className="h-[19.969px] relative shrink-0 w-[47.648px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[19.969px] items-start relative w-[47.648px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">[Phone]</p>
      </div>
    </div>
  );
}

function Text17() {
  return (
    <div className="h-[19.969px] relative shrink-0 w-[61.57px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[19.969px] relative w-[61.57px]">
        <p className="absolute font-['Cousine:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-[-0.5px] whitespace-pre">555-1002</p>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="content-stretch flex h-[19.969px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Text16 />
      <Text17 />
    </div>
  );
}

function Text18() {
  return (
    <div className="h-[19.969px] relative shrink-0 w-[62.273px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[19.969px] items-start relative w-[62.273px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">[Students]</p>
      </div>
    </div>
  );
}

function Text19() {
  return (
    <div className="h-[19.969px] relative shrink-0 w-[84.656px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[19.969px] relative w-[84.656px]">
        <p className="absolute font-['Cousine:Regular',sans-serif] leading-[20px] left-[0.41px] not-italic text-[14px] text-neutral-950 top-[-0.07px] w-[93px]">15 assigned</p>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex h-[19.969px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Text18 />
      <Text19 />
    </div>
  );
}

function Text20() {
  return (
    <div className="h-[19.969px] relative shrink-0 w-[74.836px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[19.969px] items-start relative w-[74.836px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">[Availability]</p>
      </div>
    </div>
  );
}

function Text21() {
  return (
    <div className="h-[19.969px] relative shrink-0 w-[98.977px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[19.969px] items-start relative w-[98.977px]">
        <p className="font-['Cousine:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-neutral-950 text-nowrap whitespace-pre">Tue-Sat 2PM-7PM</p>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex h-[19.969px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Text20 />
      <Text21 />
    </div>
  );
}

function Container55() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[7.992px] h-[121.336px] items-start pb-0 pt-[17.484px] px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.5px_0px_0px] border-black border-solid inset-0 pointer-events-none" />
      <Container51 />
      <Container52 />
      <Container53 />
      <Container54 />
    </div>
  );
}

function Button13() {
  return (
    <div className="bg-black h-[43px] relative shrink-0 w-[181px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.5px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[43px] relative w-[181px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[13.5px] text-[16px] text-nowrap text-white top-[6.49px] whitespace-pre">VIEW FULL DETAILS</p>
      </div>
    </div>
  );
}

function Button14() {
  return (
    <div className="h-[42.984px] relative shrink-0 w-[58.945px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.5px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[42.984px] relative w-[58.945px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[13.5px] text-[16px] text-neutral-950 text-nowrap top-[6.49px] whitespace-pre">EDIT</p>
      </div>
    </div>
  );
}

function Button15() {
  return (
    <div className="h-[43px] relative shrink-0 w-[90px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.5px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[43px] relative w-[90px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[13.5px] text-[16px] text-neutral-950 text-nowrap top-[6.49px] whitespace-pre">DELETE</p>
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex gap-[7.992px] h-[43px] items-start relative shrink-0 w-[496px]" data-name="Container">
      <Button13 />
      <Button14 />
      <Button15 />
    </div>
  );
}

function Container57() {
  return (
    <div className="[grid-area:1_/_2] place-self-stretch relative shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[3px] border-black border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[15.984px] items-start pb-[3px] pt-[27px] px-[27px] relative size-full">
          <Container50 />
          <Container55 />
          <Container56 />
        </div>
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="gap-[24px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(2,_minmax(0px,_1fr))] h-[746.25px] relative shrink-0 w-full" data-name="Container">
      <Container43 />
      <Container57 />
    </div>
  );
}

function Container59() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[592px] items-start left-[36px] top-[84px] w-[1416px]" data-name="Container">
      <Container27 />
      <Container29 />
      <Container58 />
    </div>
  );
}

function Container60() {
  return (
    <div className="h-[712px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <Container26 />
      <Container59 />
    </div>
  );
}

function Container61() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[24px] h-[1073.33px] items-start left-[317.33px] pb-0 pt-[32px] px-[24px] top-[76px] w-[1536px]" data-name="Container">
      <Container9 />
      <Container25 />
      <Container60 />
    </div>
  );
}

function AdminDashboard() {
  return (
    <div className="bg-white h-[1210.67px] relative shrink-0 w-full" data-name="AdminDashboard">
      <Container6 />
      <Container61 />
    </div>
  );
}

function App() {
  return (
    <div className="absolute bg-gray-50 content-stretch flex flex-col items-start left-0 top-0 w-[2171px]" data-name="App">
      <AdminDashboard />
    </div>
  );
}

export default function DashboardTeachersData() {
  return (
    <div className="bg-white relative size-full" data-name="Dashboard - Teachers Data">
      <App />
    </div>
  );
}