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
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-neutral-950 text-nowrap text-right whitespace-pre">Ms. Johnson</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-neutral-950 text-nowrap text-right whitespace-pre">Math Teacher</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[40px] relative shrink-0 w-[83.188px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[40px] items-start relative w-[83.188px]">
        <Container3 />
        <Container4 />
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

function Container6() {
  return (
    <div className="h-[40px] relative shrink-0 w-[227.333px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[40px] items-center relative w-[227.333px]">
        <Container5 />
        <Button />
        <Button1 />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container2 />
      <Container6 />
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[76px] items-start left-0 pb-[4px] pt-[16px] px-[317.333px] top-0 w-[2170.67px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_4px] border-black border-solid inset-0 pointer-events-none" />
      <Container7 />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex h-[32px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[32px] min-h-px min-w-px relative shrink-0 text-[24px] text-white">WELCOME MS. JOHNSON!</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-nowrap text-white top-[-1.67px] whitespace-pre">3 lessons today • 2 pending logbooks</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="bg-[#101828] h-[120px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] h-[120px] items-start pb-[4px] pt-[28px] px-[28px] relative w-full">
          <Container9 />
          <Container10 />
        </div>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex h-[36px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Cousine:Regular',sans-serif] grow leading-[36px] min-h-px min-w-px not-italic relative shrink-0 text-[30px] text-neutral-950">15</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[14px] text-neutral-950">Students</p>
    </div>
  );
}

function Container14() {
  return (
    <div className="[grid-area:1_/_1] place-self-stretch relative shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start pb-[4px] pt-[20px] px-[20px] relative size-full">
          <Container12 />
          <Container13 />
        </div>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex h-[36px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Cousine:Regular',sans-serif] grow leading-[36px] min-h-px min-w-px not-italic relative shrink-0 text-[30px] text-neutral-950">24</p>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[14px] text-neutral-950">This Week</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="[grid-area:1_/_2] place-self-stretch relative shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start pb-[4px] pt-[20px] px-[20px] relative size-full">
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
      <p className="basis-0 font-['Cousine:Regular',sans-serif] grow leading-[36px] min-h-px min-w-px not-italic relative shrink-0 text-[30px] text-neutral-950">2</p>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[14px] text-neutral-950">Pending Logs</p>
    </div>
  );
}

function Container20() {
  return (
    <div className="[grid-area:1_/_3] place-self-stretch relative shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start pb-[4px] pt-[20px] px-[20px] relative size-full">
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
      <p className="basis-0 font-['Cousine:Regular',sans-serif] grow leading-[36px] min-h-px min-w-px not-italic relative shrink-0 text-[30px] text-neutral-950">7</p>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[14px] text-neutral-950">Messages</p>
    </div>
  );
}

function Container23() {
  return (
    <div className="[grid-area:1_/_4] place-self-stretch relative shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start pb-[4px] pt-[20px] px-[20px] relative size-full">
          <Container21 />
          <Container22 />
        </div>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="gap-[16px] grid grid-cols-[repeat(4,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[104px] relative shrink-0 w-full" data-name="Container">
      <Container14 />
      <Container17 />
      <Container20 />
      <Container23 />
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute h-[48px] left-0 top-0 w-[137.375px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0px_4px_0px_0px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal h-[61px] leading-[24px] left-[23.67px] text-[16px] text-neutral-950 top-[10px] w-[106px]">[SCHEDULE]</p>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute bg-black h-[48px] left-[137.38px] top-0 w-[137.396px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0px_4px_0px_0px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal h-[64px] leading-[24px] left-[24.29px] text-[16px] text-white top-[10px] w-[105px]">[STUDENTS]</p>
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute h-[48px] left-[274.77px] top-0 w-[134.271px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0px_4px_0px_0px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal h-[56px] leading-[24px] left-[23.9px] text-[16px] text-neutral-950 top-[10px] w-[98px]">[LOGBOOK]</p>
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute h-[48px] left-[409.04px] top-0 w-[100.5px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0px_4px_0px_0px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal h-[57px] leading-[24px] left-[23.63px] text-[16px] text-neutral-950 top-[10px] w-[77px]">[CHAT]</p>
    </div>
  );
}

function Button6() {
  return (
    <div className="absolute h-[48px] left-[509.54px] top-0 w-[115.813px]" data-name="Button">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal h-[54px] leading-[24px] left-[24.13px] text-[16px] text-neutral-950 top-[10px] w-[92px]">[PROFILE]</p>
    </div>
  );
}

function Container25() {
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

function Container26() {
  return (
    <div className="h-[42.667px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[9.33px] text-[16px] text-neutral-950 text-nowrap top-[7.67px] whitespace-pre">ASSIGNED STUDENTS</p>
    </div>
  );
}

function Container27() {
  return (
    <div className="relative rounded-[4.47392e+07px] shrink-0 size-[48px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none rounded-[4.47392e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[48px]" />
    </div>
  );
}

function Container28() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Cousine:Regular',sans-serif] h-[51px] leading-[24px] left-[-0.33px] not-italic text-[16px] text-neutral-950 top-[-0.67px] w-[92px]">Student 1</p>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Grade 10</p>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[14px] text-neutral-950">Next: Tue 5PM</p>
    </div>
  );
}

function Container31() {
  return <div className="h-[20px] shrink-0 w-full" data-name="Container" />;
}

function Container32() {
  return (
    <div className="h-[88px] relative shrink-0 w-[101.813px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[88px] items-start relative w-[101.813px]">
        <Container28 />
        <Container29 />
        <Container30 />
        <Container31 />
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex gap-[12px] h-[88px] items-start relative shrink-0 w-full" data-name="Container">
      <Container27 />
      <Container32 />
    </div>
  );
}

function Button7() {
  return (
    <div className="bg-black h-[38px] relative shrink-0 w-[84px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[38px] relative w-[84px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[13.33px] text-[14px] text-nowrap text-white top-[7.33px] whitespace-pre">Message</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex gap-[8px] h-[38.667px] items-start relative shrink-0 w-full" data-name="Container">
      <Button7 />
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[16px] h-[182.667px] items-start left-0 pb-[4px] pt-[20px] px-[20px] top-0 w-[700px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <Container33 />
      <Container34 />
    </div>
  );
}

function Container36() {
  return (
    <div className="relative rounded-[4.47392e+07px] shrink-0 size-[48px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none rounded-[4.47392e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[48px]" />
    </div>
  );
}

function Container37() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Cousine:Regular',sans-serif] h-[54px] leading-[24px] left-[-0.33px] not-italic text-[16px] text-neutral-950 top-[-0.67px] w-[88px]">Student 2</p>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-neutral-950 w-[103px]">Grade 10</p>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[14px] text-neutral-950">Next: Tue 5PM</p>
    </div>
  );
}

function Container40() {
  return <div className="h-[20px] shrink-0 w-full" data-name="Container" />;
}

function Container41() {
  return (
    <div className="h-[88px] relative shrink-0 w-[101.813px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[88px] items-start relative w-[101.813px]">
        <Container37 />
        <Container38 />
        <Container39 />
        <Container40 />
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex gap-[12px] h-[88px] items-start relative shrink-0 w-full" data-name="Container">
      <Container36 />
      <Container41 />
    </div>
  );
}

function Button8() {
  return (
    <div className="bg-black h-[38px] relative shrink-0 w-[84px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[38px] relative w-[84px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[13.33px] text-[14px] text-nowrap text-white top-[7.33px] whitespace-pre">Message</p>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex gap-[8px] h-[38.667px] items-start relative shrink-0 w-full" data-name="Container">
      <Button8 />
    </div>
  );
}

function Container44() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[16px] h-[182.667px] items-start left-[716px] pb-[4px] pt-[20px] px-[20px] top-0 w-[700px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <Container42 />
      <Container43 />
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
      <p className="absolute font-['Cousine:Regular',sans-serif] h-[49px] leading-[24px] left-[-0.33px] not-italic text-[16px] text-neutral-950 top-[-0.33px] w-[102px]">Student 3</p>
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">{`Grade 10 `}</p>
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[14px] text-neutral-950">Next: Tue 5PM</p>
    </div>
  );
}

function Container49() {
  return <div className="h-[20px] shrink-0 w-full" data-name="Container" />;
}

function Container50() {
  return (
    <div className="h-[88px] relative shrink-0 w-[101.813px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[88px] items-start relative w-[101.813px]">
        <Container46 />
        <Container47 />
        <Container48 />
        <Container49 />
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex gap-[12px] h-[88px] items-start relative shrink-0 w-full" data-name="Container">
      <Container45 />
      <Container50 />
    </div>
  );
}

function Button9() {
  return (
    <div className="bg-black h-[39px] relative shrink-0 w-[84px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[39px] relative w-[84px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[13.33px] text-[14px] text-nowrap text-white top-[7.33px] whitespace-pre">Message</p>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="content-stretch flex gap-[8px] h-[38.667px] items-start relative shrink-0 w-full" data-name="Container">
      <Button9 />
    </div>
  );
}

function Container53() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[16px] h-[182.667px] items-start left-0 pb-[4px] pt-[20px] px-[20px] top-[198.67px] w-[700px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <Container51 />
      <Container52 />
    </div>
  );
}

function Container54() {
  return (
    <div className="relative rounded-[4.47392e+07px] shrink-0 size-[48px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none rounded-[4.47392e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[48px]" />
    </div>
  );
}

function Container55() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Cousine:Regular',sans-serif] h-[48px] leading-[24px] left-[-0.33px] not-italic text-[16px] text-neutral-950 top-[-0.33px] w-[102px]">Student 4</p>
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">{`Grade 10 `}</p>
    </div>
  );
}

function Container57() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[14px] text-neutral-950">Next: Tue 5PM</p>
    </div>
  );
}

function Container58() {
  return <div className="h-[20px] shrink-0 w-full" data-name="Container" />;
}

function Container59() {
  return (
    <div className="h-[88px] relative shrink-0 w-[101.813px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[88px] items-start relative w-[101.813px]">
        <Container55 />
        <Container56 />
        <Container57 />
        <Container58 />
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="content-stretch flex gap-[12px] h-[88px] items-start relative shrink-0 w-full" data-name="Container">
      <Container54 />
      <Container59 />
    </div>
  );
}

function Button10() {
  return (
    <div className="bg-black h-[39px] relative shrink-0 w-[84px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[39px] relative w-[84px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[13.33px] text-[14px] text-nowrap text-white top-[7.33px] whitespace-pre">Message</p>
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="content-stretch flex gap-[8px] h-[38.667px] items-start relative shrink-0 w-full" data-name="Container">
      <Button10 />
    </div>
  );
}

function Container62() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[16px] h-[182.667px] items-start left-[716px] pb-[4px] pt-[20px] px-[20px] top-[198.67px] w-[700px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <Container60 />
      <Container61 />
    </div>
  );
}

function Container63() {
  return (
    <div className="h-[381.333px] relative shrink-0 w-full" data-name="Container">
      <Container35 />
      <Container44 />
      <Container53 />
      <Container62 />
    </div>
  );
}

function Container64() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[448px] items-start left-[36px] top-[88px] w-[1416px]" data-name="Container">
      <Container26 />
      <Container63 />
    </div>
  );
}

function Container65() {
  return (
    <div className="h-[572px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <Container25 />
      <Container64 />
    </div>
  );
}

function Container66() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[24px] h-[908px] items-start left-[317.33px] pb-0 pt-[32px] px-[24px] top-[76px] w-[1536px]" data-name="Container">
      <Container11 />
      <Container24 />
      <Container65 />
    </div>
  );
}

function TeacherDashboard() {
  return (
    <div className="bg-white h-[1210.67px] relative shrink-0 w-full" data-name="TeacherDashboard">
      <Container8 />
      <Container66 />
    </div>
  );
}

function App() {
  return (
    <div className="absolute bg-gray-50 box-border content-stretch flex flex-col h-[1258.67px] items-start left-0 pb-0 pt-[48px] px-0 top-0 w-[2170.67px]" data-name="App">
      <TeacherDashboard />
    </div>
  );
}

export default function DashboardStudents() {
  return (
    <div className="bg-white relative size-full" data-name="Dashboard - Students">
      <App />
    </div>
  );
}