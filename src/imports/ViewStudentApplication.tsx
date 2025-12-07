function Button() {
  return (
    <div className="h-[34.667px] relative shrink-0 w-[83.229px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[34.667px] relative w-[83.229px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[13.33px] text-[16px] text-neutral-950 text-nowrap top-[3.67px] whitespace-pre">← BACK</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[34.667px] relative shrink-0 w-[194.375px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[34.667px] relative w-[194.375px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[13.33px] text-[16px] text-neutral-950 text-nowrap top-[3.67px] whitespace-pre">STUDENT APPLICATION</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex gap-[16px] h-[34.667px] items-center relative shrink-0 w-full" data-name="Container">
      <Button />
      <Container />
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[70.667px] items-start left-0 pb-[4px] pt-[16px] px-[317.333px] top-0 w-[2170.67px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_4px] border-black border-solid inset-0 pointer-events-none" />
      <Container1 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex h-[32px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[32px] relative shrink-0 text-[24px] text-nowrap text-white whitespace-pre">STUDENT APPLICATION</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[14px] text-white top-[-2px] w-[183px]">Application ID: STU-2024-001</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[60px] relative shrink-0 w-[251.563px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[8px] h-[60px] items-start relative w-[251.563px]">
        <Container3 />
        <Container4 />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[14px] text-right text-white">Submitted:</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Cousine:Regular',sans-serif] leading-[24px] left-[141px] not-italic text-[16px] text-nowrap text-right text-white top-[-0.33px] translate-x-[-100%] whitespace-pre">November 1, 2024</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[48px] relative shrink-0 w-[140.75px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[48px] items-start relative w-[140.75px]">
        <Container6 />
        <Container7 />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex h-[60px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container5 />
      <Container8 />
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute bg-[#101828] box-border content-stretch flex flex-col h-[116px] items-start left-0 pb-[4px] pt-[28px] px-[28px] top-0 w-[896px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <Container9 />
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Cousine:Regular',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-[-0.33px] whitespace-pre">PERSONAL INFORMATION</p>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute bg-gray-100 box-border content-stretch flex flex-col h-[60px] items-start left-[4px] pb-[4px] pt-[16px] px-[16px] top-[4px] w-[888px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_4px] border-black border-solid inset-0 pointer-events-none" />
      <Container11 />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[14px] text-neutral-950">[Name]</p>
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Cousine:Regular',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-[-0.33px] whitespace-pre">Alex Chen</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="bg-gray-50 h-[50.667px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[50.667px] items-start pb-[1.333px] pt-[13.333px] px-[13.333px] relative w-full">
          <Container14 />
        </div>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[78.667px] items-start left-0 top-0 w-[408px]" data-name="Container">
      <Container13 />
      <Container15 />
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[14px] text-neutral-950">[Age]</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Cousine:Regular',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-[-0.33px] whitespace-pre">16</p>
    </div>
  );
}

function Container19() {
  return (
    <div className="bg-gray-50 h-[50.667px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[50.667px] items-start pb-[1.333px] pt-[13.333px] px-[13.333px] relative w-full">
          <Container18 />
        </div>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[78.667px] items-start left-[432px] top-0 w-[408px]" data-name="Container">
      <Container17 />
      <Container19 />
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[14px] text-neutral-950">[Email]</p>
    </div>
  );
}

function Container22() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Cousine:Regular',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-[-0.33px] whitespace-pre">alex.chen@email.com</p>
    </div>
  );
}

function Container23() {
  return (
    <div className="bg-gray-50 h-[50.667px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[50.667px] items-start pb-[1.333px] pt-[13.333px] px-[13.333px] relative w-full">
          <Container22 />
        </div>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[78.667px] items-start left-0 top-[102.67px] w-[408px]" data-name="Container">
      <Container21 />
      <Container23 />
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[14px] text-neutral-950">[Phone]</p>
    </div>
  );
}

function Container26() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Cousine:Regular',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-[-0.33px] whitespace-pre">555-0101</p>
    </div>
  );
}

function Container27() {
  return (
    <div className="bg-gray-50 h-[50.667px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[50.667px] items-start pb-[1.333px] pt-[13.333px] px-[13.333px] relative w-full">
          <Container26 />
        </div>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[78.667px] items-start left-[432px] top-[102.67px] w-[408px]" data-name="Container">
      <Container25 />
      <Container27 />
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[14px] text-neutral-950">[Address]</p>
    </div>
  );
}

function Container30() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Container">
      <div className="absolute font-['Cousine:Regular',sans-serif] h-[80px] leading-[24px] left-[0.33px] not-italic text-[16px] text-neutral-950 top-[-0.33px] w-[180px]">
        <p className="mb-0">123 Main Street</p>
        <p>City, State 12345</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="bg-gray-50 h-[74.667px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[74.667px] items-start pb-[1.333px] pt-[13.333px] px-[13.333px] relative w-full">
          <Container30 />
        </div>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[102.667px] items-start left-0 top-[205.33px] w-[840px]" data-name="Container">
      <Container29 />
      <Container31 />
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute h-[308px] left-[28px] top-[88px] w-[840px]" data-name="Container">
      <Container16 />
      <Container20 />
      <Container24 />
      <Container28 />
      <Container32 />
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute h-[424px] left-0 top-[140px] w-[896px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <Container12 />
      <Container33 />
    </div>
  );
}

function Container35() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Cousine:Regular',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-[-0.33px] whitespace-pre">SCHOOL INFORMATION</p>
    </div>
  );
}

function Container36() {
  return (
    <div className="absolute bg-gray-100 box-border content-stretch flex flex-col h-[60px] items-start left-[4px] pb-[4px] pt-[16px] px-[16px] top-[4px] w-[888px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_4px] border-black border-solid inset-0 pointer-events-none" />
      <Container35 />
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[14px] text-neutral-950">[School]</p>
    </div>
  );
}

function Container38() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Cousine:Regular',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-[-0.33px] whitespace-pre">Central High School</p>
    </div>
  );
}

function Container39() {
  return (
    <div className="bg-gray-50 h-[50.667px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[50.667px] items-start pb-[1.333px] pt-[13.333px] px-[13.333px] relative w-full">
          <Container38 />
        </div>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex flex-col gap-[8px] h-[78.667px] items-start justify-self-stretch relative shrink-0" data-name="Container">
      <Container37 />
      <Container39 />
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[14px] text-neutral-950">[Grade]</p>
    </div>
  );
}

function Container42() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Cousine:Regular',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-[-0.33px] whitespace-pre">Grade 10</p>
    </div>
  );
}

function Container43() {
  return (
    <div className="bg-gray-50 h-[50.667px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[50.667px] items-start pb-[1.333px] pt-[13.333px] px-[13.333px] relative w-full">
          <Container42 />
        </div>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="[grid-area:1_/_2] content-stretch flex flex-col gap-[8px] h-[78.667px] items-start justify-self-stretch relative shrink-0" data-name="Container">
      <Container41 />
      <Container43 />
    </div>
  );
}

function Container45() {
  return (
    <div className="absolute gap-[24px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[78.667px] left-[28px] top-[88px] w-[840px]" data-name="Container">
      <Container40 />
      <Container44 />
    </div>
  );
}

function Container46() {
  return (
    <div className="absolute h-[194.667px] left-0 top-[588px] w-[896px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <Container36 />
      <Container45 />
    </div>
  );
}

function Container47() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Cousine:Regular',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-[-0.33px] whitespace-pre">PARENT/GUARDIAN INFORMATION</p>
    </div>
  );
}

function Container48() {
  return (
    <div className="absolute bg-gray-100 box-border content-stretch flex flex-col h-[60px] items-start left-[4px] pb-[4px] pt-[16px] px-[16px] top-[4px] w-[888px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_4px] border-black border-solid inset-0 pointer-events-none" />
      <Container47 />
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[14px] text-neutral-950">[Parent Name]</p>
    </div>
  );
}

function Container50() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Cousine:Regular',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-[-0.33px] whitespace-pre">Mr. John Chen</p>
    </div>
  );
}

function Container51() {
  return (
    <div className="bg-gray-50 h-[50.667px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[50.667px] items-start pb-[1.333px] pt-[13.333px] px-[13.333px] relative w-full">
          <Container50 />
        </div>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex flex-col gap-[8px] h-[78.667px] items-start justify-self-stretch relative shrink-0" data-name="Container">
      <Container49 />
      <Container51 />
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[14px] text-neutral-950">[Parent Phone]</p>
    </div>
  );
}

function Container54() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Cousine:Regular',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-[-0.33px] whitespace-pre">555-0102</p>
    </div>
  );
}

function Container55() {
  return (
    <div className="bg-gray-50 h-[50.667px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[50.667px] items-start pb-[1.333px] pt-[13.333px] px-[13.333px] relative w-full">
          <Container54 />
        </div>
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="[grid-area:1_/_2] content-stretch flex flex-col gap-[8px] h-[78.667px] items-start justify-self-stretch relative shrink-0" data-name="Container">
      <Container53 />
      <Container55 />
    </div>
  );
}

function Container57() {
  return (
    <div className="absolute gap-[24px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[78.667px] left-[28px] top-[88px] w-[840px]" data-name="Container">
      <Container52 />
      <Container56 />
    </div>
  );
}

function Container58() {
  return (
    <div className="absolute h-[194.667px] left-0 top-[806.67px] w-[896px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <Container48 />
      <Container57 />
    </div>
  );
}

function Button1() {
  return (
    <div className="basis-0 grow h-[56px] min-h-px min-w-px relative shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[56px] relative w-full">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[28px] text-[16px] text-neutral-950 text-nowrap top-[14.33px] whitespace-pre">[CLOSE]</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="basis-0 bg-[#155dfc] grow h-[56px] min-h-px min-w-px relative shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[56px] relative w-full">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[28px] text-[16px] text-nowrap text-white top-[14.33px] whitespace-pre">[EDIT APPLICATION]</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="basis-0 bg-black grow h-[56px] min-h-px min-w-px relative shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[56px] relative w-full">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[28px] text-[16px] text-nowrap text-white top-[14.33px] whitespace-pre">[PRINT]</p>
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[56px] items-start left-0 top-[1025.33px] w-[896px]" data-name="Container">
      <Button1 />
      <Button2 />
      <Button3 />
    </div>
  );
}

function Container60() {
  return (
    <div className="absolute h-[1081.33px] left-[637.33px] top-[102.67px] w-[896px]" data-name="Container">
      <Container10 />
      <Container34 />
      <Container46 />
      <Container58 />
      <Container59 />
    </div>
  );
}

function ViewStudentApplication() {
  return (
    <div className="bg-white h-[1216px] relative shrink-0 w-full" data-name="ViewStudentApplication">
      <Container2 />
      <Container60 />
    </div>
  );
}

function App() {
  return (
    <div className="absolute bg-gray-50 box-border content-stretch flex flex-col h-[1264px] items-start left-0 pb-0 pt-[48px] px-0 top-0 w-[2170.67px]" data-name="App">
      <ViewStudentApplication />
    </div>
  );
}

export default function ViewStudentApplication1() {
  return (
    <div className="bg-white relative size-full" data-name="View Student Application">
      <App />
    </div>
  );
}