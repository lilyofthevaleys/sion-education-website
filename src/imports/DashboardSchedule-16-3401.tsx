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
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[13.33px] text-[16px] text-neutral-950 text-nowrap top-[3.67px] whitespace-pre">TEACHER PORTAL</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[40px] relative shrink-0 w-[203.479px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[40px] items-center relative w-[203.479px]">
        <Container />
        <Container1 />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[40px] relative shrink-0 w-[88.354px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[40px] w-[88.354px]" />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-neutral-950 text-nowrap text-right whitespace-pre">Ms. Johnson</p>
    </div>
  );
}

function Container5() {
  return <div className="h-[20px] shrink-0 w-full" data-name="Container" />;
}

function Container6() {
  return (
    <div className="h-[40px] relative shrink-0 w-[83.188px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[40px] items-start relative w-[83.188px]">
        <Container4 />
        <Container5 />
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="relative rounded-[4.47392e+07px] shrink-0 size-[40px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none rounded-[4.47392e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[40px]" />
    </div>
  );
}

function Button1() {
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
    <div className="h-[40px] relative shrink-0 w-[227.333px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[40px] items-center relative w-[227.333px]">
        <Container3 />
        <Container6 />
        <Button />
        <Button1 />
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
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[32px] min-h-px min-w-px relative shrink-0 text-[24px] text-white">WELCOME MS. JOHNSON!</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-nowrap text-white top-[-1.67px] whitespace-pre">3 lessons today • 2 pending logbooks</p>
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
      <p className="basis-0 font-['Cousine:Regular',sans-serif] grow leading-[36px] min-h-px min-w-px not-italic relative shrink-0 text-[30px] text-neutral-950">15</p>
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
    <div className="[grid-area:1_/_1] place-self-stretch relative shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start pb-[4px] pt-[20px] px-[20px] relative size-full">
          <Container13 />
          <Container14 />
        </div>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex h-[36px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Cousine:Regular',sans-serif] grow leading-[36px] min-h-px min-w-px not-italic relative shrink-0 text-[30px] text-neutral-950">3</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[14px] text-neutral-950">Upcoming Lessons This Week</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="[grid-area:1_/_2] place-self-stretch relative shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start pb-[4px] pt-[20px] px-[20px] relative size-full">
          <Container16 />
          <Container17 />
        </div>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex h-[36px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Cousine:Regular',sans-serif] grow leading-[36px] min-h-px min-w-px not-italic relative shrink-0 text-[30px] text-neutral-950">2</p>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[14px] text-neutral-950">Pending Logs</p>
    </div>
  );
}

function Container21() {
  return (
    <div className="[grid-area:1_/_3] place-self-stretch relative shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start pb-[4px] pt-[20px] px-[20px] relative size-full">
          <Container19 />
          <Container20 />
        </div>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex h-[36px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Cousine:Regular',sans-serif] grow leading-[36px] min-h-px min-w-px not-italic relative shrink-0 text-[30px] text-neutral-950">7</p>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[14px] text-neutral-950">Messages</p>
    </div>
  );
}

function Container24() {
  return (
    <div className="[grid-area:1_/_4] place-self-stretch relative shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start pb-[4px] pt-[20px] px-[20px] relative size-full">
          <Container22 />
          <Container23 />
        </div>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="gap-[16px] grid grid-cols-[repeat(4,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[104px] relative shrink-0 w-full" data-name="Container">
      <Container15 />
      <Container18 />
      <Container21 />
      <Container24 />
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute bg-black h-[48px] left-0 top-0 w-[137.375px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0px_4px_0px_0px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal h-[53px] leading-[24px] left-[23.67px] text-[16px] text-white top-[10px] w-[103px]">[SCHEDULE]</p>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute h-[48px] left-[137.38px] top-0 w-[137.396px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0px_4px_0px_0px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal h-[52px] leading-[24px] left-[24.29px] text-[16px] text-neutral-950 top-[10px] w-[98px]">[STUDENTS]</p>
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute h-[48px] left-[274.77px] top-0 w-[134.271px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0px_4px_0px_0px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal h-[52px] leading-[24px] left-[23.9px] text-[16px] text-neutral-950 top-[10px] w-[92px]">[LOGBOOK]</p>
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute h-[48px] left-[409.04px] top-0 w-[100.5px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0px_4px_0px_0px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal h-[55px] leading-[24px] left-[23.63px] text-[16px] text-neutral-950 top-[10px] w-[64px]">[CHAT]</p>
    </div>
  );
}

function Button6() {
  return (
    <div className="absolute h-[48px] left-[509.54px] top-0 w-[115.813px]" data-name="Button">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal h-[49px] leading-[24px] left-[24.13px] text-[16px] text-neutral-950 top-[10px] w-[92px]">[PROFILE]</p>
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute h-[52px] left-[4px] top-[4px] w-[1480px]" data-name="Container">
      <div className="h-[52px] overflow-clip relative rounded-[inherit] w-[1480px]">
        <Button2 />
        <Button3 />
        <Button4 />
        <Button5 />
        <Button6 />
      </div>
      <div aria-hidden="true" className="absolute border-[0px_0px_4px] border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container27() {
  return (
    <div className="h-[42.667px] relative shrink-0 w-[121.958px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[42.667px] relative w-[121.958px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[9.33px] text-[16px] text-neutral-950 text-nowrap top-[7.67px] whitespace-pre">MY SCHEDULE</p>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="h-[42.667px] relative shrink-0 w-[167.375px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[42.667px] relative w-[167.375px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[17.33px] text-[16px] text-neutral-950 text-nowrap top-[7.67px] whitespace-pre">REQUEST CHANGE</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute content-stretch flex h-[42.667px] items-center justify-between left-0 top-0 w-[1416px]" data-name="Container">
      <Container27 />
      <Button7 />
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute box-border content-stretch flex h-[192px] items-center justify-center left-0 p-[4px] top-[66.67px] w-[1416px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-neutral-950 text-nowrap whitespace-pre">[WEEKLY SCHEDULE VIEW]</p>
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute h-[42.667px] left-0 top-[282.67px] w-[1416px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[9.33px] text-[16px] text-neutral-950 text-nowrap top-[7.67px] whitespace-pre">{`TODAY'S LESSONS:`}</p>
    </div>
  );
}

function Container31() {
  return (
    <div className="relative rounded-[4.47392e+07px] shrink-0 size-[48px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none rounded-[4.47392e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[48px]" />
    </div>
  );
}

function Container32() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-neutral-950 text-nowrap top-[-1.67px] whitespace-pre">Alex Chen - Math</p>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">5PM - 6PM</p>
    </div>
  );
}

function Container34() {
  return (
    <div className="basis-0 grow h-[44px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[44px] items-start relative w-full">
        <Container32 />
        <Container33 />
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="h-[48px] relative shrink-0 w-[194.771px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[16px] h-[48px] items-center relative w-[194.771px]">
        <Container31 />
        <Container34 />
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="h-[43px] relative shrink-0 w-[158px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[43px] relative w-[158px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[53.56px] text-[16px] text-neutral-950 text-nowrap top-[9.67px] whitespace-pre">Details</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="h-[42.667px] relative shrink-0 w-[157.563px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[42.667px] items-start relative w-[157.563px]">
        <Button8 />
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="h-[82.667px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[82.667px] items-center justify-between px-[17.333px] py-[1.333px] relative w-full">
          <Container35 />
          <Container36 />
        </div>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="relative rounded-[4.47392e+07px] shrink-0 size-[48px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none rounded-[4.47392e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[48px]" />
    </div>
  );
}

function Container39() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-neutral-950 text-nowrap top-[-1.67px] whitespace-pre">Alex Chun - Physics</p>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">5PM - 7PM</p>
    </div>
  );
}

function Container41() {
  return (
    <div className="basis-0 grow h-[44px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[44px] items-start relative w-full">
        <Container39 />
        <Container40 />
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="h-[48px] relative shrink-0 w-[194.771px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[16px] h-[48px] items-center relative w-[194.771px]">
        <Container38 />
        <Container41 />
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div className="h-[43px] relative shrink-0 w-[158px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[43px] relative w-[158px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[53.56px] text-[16px] text-neutral-950 text-nowrap top-[10px] whitespace-pre">Details</p>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="h-[42.667px] relative shrink-0 w-[157.563px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[42.667px] items-start relative w-[157.563px]">
        <Button9 />
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="h-[82.667px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[82.667px] items-center justify-between px-[17.333px] py-[1.333px] relative w-full">
          <Container42 />
          <Container43 />
        </div>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="relative rounded-[4.47392e+07px] shrink-0 size-[48px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none rounded-[4.47392e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[48px]" />
    </div>
  );
}

function Container46() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-neutral-950 text-nowrap top-[-1.67px] whitespace-pre">Alex Chan - Chemistry</p>
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">{`5PM - 6.30PM `}</p>
    </div>
  );
}

function Container48() {
  return (
    <div className="basis-0 grow h-[44px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[44px] items-start relative w-full">
        <Container46 />
        <Container47 />
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="h-[48px] relative shrink-0 w-[194.771px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[16px] h-[48px] items-center relative w-[194.771px]">
        <Container45 />
        <Container48 />
      </div>
    </div>
  );
}

function Button10() {
  return (
    <div className="h-[42px] relative shrink-0 w-[158px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[42px] relative w-[158px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[53.56px] text-[16px] text-neutral-950 text-nowrap top-[9.33px] whitespace-pre">Details</p>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="h-[42.667px] relative shrink-0 w-[157.563px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[42.667px] items-start relative w-[157.563px]">
        <Button10 />
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="h-[82.667px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[82.667px] items-center justify-between px-[17.333px] py-[1.333px] relative w-full">
          <Container49 />
          <Container50 />
        </div>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[272px] items-start left-0 top-[341.33px] w-[1416px]" data-name="Container">
      <Container37 />
      <Container44 />
      <Container51 />
    </div>
  );
}

function Container53() {
  return (
    <div className="absolute h-[613.333px] left-[36px] top-[88px] w-[1416px]" data-name="Container">
      <Container28 />
      <Container29 />
      <Container30 />
      <Container52 />
    </div>
  );
}

function Container54() {
  return (
    <div className="h-[737.333px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <Container26 />
      <Container53 />
    </div>
  );
}

function Container55() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[24px] h-[1073.33px] items-start left-[317.33px] pb-0 pt-[32px] px-[24px] top-[76px] w-[1536px]" data-name="Container">
      <Container12 />
      <Container25 />
      <Container54 />
    </div>
  );
}

function TeacherDashboard() {
  return (
    <div className="bg-white h-[1210.67px] relative shrink-0 w-full" data-name="TeacherDashboard">
      <Container9 />
      <Container55 />
    </div>
  );
}

function App() {
  return (
    <div className="absolute bg-gray-50 box-border content-stretch flex flex-col h-[1258.67px] items-start left-0 pb-0 pt-px px-0 top-0 w-[2170.67px]" data-name="App">
      <TeacherDashboard />
    </div>
  );
}

export default function DashboardSchedule() {
  return (
    <div className="bg-white relative size-full" data-name="Dashboard - Schedule">
      <App />
    </div>
  );
}