function Icon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d="M18 6L6 18" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M6 6L18 18" id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Icon />
    </div>
  );
}

function Container1() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start p-[4px] relative size-[48px]">
        <Container />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="basis-0 grow h-[34.667px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[34.667px] relative w-full">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[13.33px] text-[16px] text-neutral-950 text-nowrap top-[3.67px] whitespace-pre">SION EDUCATION</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[48px] relative shrink-0 w-[213.896px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[48px] items-center relative w-[213.896px]">
        <Container1 />
        <Container2 />
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-black h-[48px] relative shrink-0 w-[95.542px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[48px] relative w-[95.542px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[20px] text-[16px] text-nowrap text-white top-[10.33px] whitespace-pre">[HOME]</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="h-[48px] relative shrink-0 w-[119.146px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[48px] relative w-[119.146px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[17.33px] text-[16px] text-neutral-950 text-nowrap top-[10.33px] whitespace-pre">[ABOUT US]</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="h-[48px] relative shrink-0 w-[113.417px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[48px] relative w-[113.417px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[17.33px] text-[16px] text-neutral-950 text-nowrap top-[10.33px] whitespace-pre">[CONTACT]</p>
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <div className="h-[48px] relative shrink-0 w-[336.104px]" data-name="Navigation">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[48px] items-start relative w-[336.104px]">
        <Button />
        <Button1 />
        <Button2 />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[48px] relative shrink-0 w-[574px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[24px] h-[48px] items-center relative w-[574px]">
        <Container3 />
        <Navigation />
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="h-[48px] relative shrink-0 w-[111.917px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[48px] relative w-[111.917px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[28px] text-[16px] text-neutral-950 text-nowrap top-[10.33px] whitespace-pre">[LOGIN]</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[48px] relative shrink-0 w-[240.292px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[48px] items-center relative w-[240.292px]">
        <Button3 />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex h-[48px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container4 />
      <Container5 />
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[84px] items-start left-0 pb-[4px] pt-[16px] px-[317.333px] top-0 w-[2170.67px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_4px] border-black border-solid inset-0 pointer-events-none" />
      <Container6 />
    </div>
  );
}

function Text() {
  return (
    <div className="absolute content-stretch flex h-[32px] items-start left-[306.98px] top-[80px] w-[154.021px]" data-name="Text">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[32px] relative shrink-0 text-[24px] text-neutral-950 text-nowrap whitespace-pre">[HERO IMAGE]</p>
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-[12px] size-[32px] top-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d="M24 8L8 24" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M8 8L24 24" id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute left-[724px] size-[32px] top-[148px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d="M24 8L8 24" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M8 8L24 24" id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[192px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <Text />
      <Icon1 />
      <Icon2 />
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[356.73px] text-[16px] text-center text-neutral-950 text-nowrap top-[-1.67px] translate-x-[-50%] whitespace-pre">SION Education Platform</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[80px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[80px] items-start pb-[4px] pt-[28px] px-[28px] relative w-full">
          <Container9 />
        </div>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[58.667px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[384.21px] text-[16px] text-center text-neutral-950 text-nowrap top-[15.67px] translate-x-[-50%] whitespace-pre">Online learning system connecting students with teachers</p>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[378.667px] items-start left-[384px] top-[48px] w-[768px]" data-name="Container">
      <Container8 />
      <Container10 />
      <Container11 />
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute h-[56px] left-0 top-[52px] w-[1488px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[743.6px] text-[16px] text-center text-neutral-950 text-nowrap top-[14.33px] translate-x-[-50%] whitespace-pre">BY THE NUMBERS</p>
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[53.333px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[40px] left-[82.56px] text-[36px] text-center text-neutral-950 text-nowrap top-[-3px] translate-x-[-50%] whitespace-pre">500+</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[14px] text-center text-neutral-950">Active Students</p>
    </div>
  );
}

function Container16() {
  return (
    <div className="[grid-area:1_/_1] h-[157.333px] relative shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[12px] h-[157.333px] items-start pb-[4px] pt-[36px] px-[36px] relative w-full">
          <Container14 />
          <Container15 />
        </div>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[53.333px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[40px] left-[82.56px] text-[36px] text-center text-neutral-950 text-nowrap top-[-3px] translate-x-[-50%] whitespace-pre">100+</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[14px] text-center text-neutral-950">Qualified Teachers</p>
    </div>
  );
}

function Container19() {
  return (
    <div className="[grid-area:1_/_2] h-[157.333px] relative shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[12px] h-[157.333px] items-start pb-[4px] pt-[36px] px-[36px] relative w-full">
          <Container17 />
          <Container18 />
        </div>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[53.333px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[40px] left-[83.27px] text-[36px] text-center text-neutral-950 text-nowrap top-[-3px] translate-x-[-50%] whitespace-pre">50+</p>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[14px] text-center text-neutral-950">Courses Offered</p>
    </div>
  );
}

function Container22() {
  return (
    <div className="[grid-area:1_/_3] h-[157.333px] relative shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[12px] h-[157.333px] items-start pb-[4px] pt-[36px] px-[36px] relative w-full">
          <Container20 />
          <Container21 />
        </div>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="h-[53.333px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[40px] left-[83.35px] text-[36px] text-center text-neutral-950 text-nowrap top-[-3px] translate-x-[-50%] whitespace-pre">95%</p>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[14px] text-center text-neutral-950">Success Rate</p>
    </div>
  );
}

function Container25() {
  return (
    <div className="[grid-area:1_/_4] h-[157.333px] relative shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[12px] h-[157.333px] items-start pb-[4px] pt-[36px] px-[36px] relative w-full">
          <Container23 />
          <Container24 />
        </div>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute gap-[24px] grid grid-cols-[repeat(4,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[157.333px] left-[232px] top-[140px] w-[1024px]" data-name="Container">
      <Container16 />
      <Container19 />
      <Container22 />
      <Container25 />
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute h-[297.333px] left-[24.67px] top-[502px] w-[1488px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[4px_0px_0px] border-black border-solid inset-0 pointer-events-none" />
      <Container13 />
      <Container26 />
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute h-[56px] left-0 top-0 w-[1488px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[744.63px] text-[16px] text-center text-neutral-950 text-nowrap top-[14.33px] translate-x-[-50%] whitespace-pre">HOW IT WORKS</p>
    </div>
  );
}

function Container29() {
  return (
    <div className="h-[50.667px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[134.69px] text-[16px] text-center text-neutral-950 text-nowrap top-[11.67px] translate-x-[-50%] whitespace-pre">STEP 1</p>
    </div>
  );
}

function Container30() {
  return (
    <div className="h-[128px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex h-[128px] items-center justify-center p-[17.333px] relative w-full">
          <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-center text-neutral-950 text-nowrap whitespace-pre">[Register and create account]</p>
        </div>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[16px] h-[250.667px] items-start left-0 pb-[4px] pt-[28px] px-[28px] top-0 w-[325.333px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <Container29 />
      <Container30 />
    </div>
  );
}

function Container32() {
  return (
    <div className="h-[50.667px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[134.69px] text-[16px] text-center text-neutral-950 text-nowrap top-[11.67px] translate-x-[-50%] whitespace-pre">STEP 2</p>
    </div>
  );
}

function Container33() {
  return (
    <div className="h-[128px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex h-[128px] items-center justify-center p-[17.333px] relative w-full">
          <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-center text-neutral-950 text-nowrap whitespace-pre">[Take assessment test]</p>
        </div>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[16px] h-[250.667px] items-start left-[349.33px] pb-[4px] pt-[28px] px-[28px] top-0 w-[325.333px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <Container32 />
      <Container33 />
    </div>
  );
}

function Container35() {
  return (
    <div className="h-[50.667px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[134.69px] text-[16px] text-center text-neutral-950 text-nowrap top-[11.67px] translate-x-[-50%] whitespace-pre">STEP 3</p>
    </div>
  );
}

function Container36() {
  return (
    <div className="h-[128px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex h-[128px] items-center justify-center p-[17.333px] relative w-full">
          <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-center text-neutral-950 text-nowrap whitespace-pre">[Get matched and start learning]</p>
        </div>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[16px] h-[250.667px] items-start left-[698.67px] pb-[4px] pt-[28px] px-[28px] top-0 w-[325.333px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <Container35 />
      <Container36 />
    </div>
  );
}

function Container38() {
  return (
    <div className="absolute h-[250.667px] left-[232px] top-[88px] w-[1024px]" data-name="Container">
      <Container31 />
      <Container34 />
      <Container37 />
    </div>
  );
}

function Container39() {
  return (
    <div className="absolute h-[338.667px] left-[23.67px] top-[860px] w-[1488px]" data-name="Container">
      <Container28 />
      <Container38 />
    </div>
  );
}

function Container40() {
  return (
    <div className="h-[42.667px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[187.6px] text-[16px] text-center text-neutral-950 text-nowrap top-[7.67px] translate-x-[-50%] whitespace-pre">[STUDENT REGISTRATION]</p>
    </div>
  );
}

function Container41() {
  return (
    <div className="box-border content-stretch flex h-[256px] items-center justify-center p-[1.333px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-neutral-950 text-nowrap whitespace-pre">[Cartoon Picture - Student]</p>
    </div>
  );
}

function Container42() {
  return (
    <div className="bg-black h-[56px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[188.1px] text-[16px] text-center text-nowrap text-white top-[14.33px] translate-x-[-50%] whitespace-pre">REGISTER AS STUDENT →</p>
    </div>
  );
}

function Container43() {
  return (
    <div className="[grid-area:1_/_1] h-[442.667px] relative shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] h-[442.667px] items-start pb-[4px] pt-[28px] px-[28px] relative w-full">
          <Container40 />
          <Container41 />
          <Container42 />
        </div>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="h-[42.667px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[188.38px] text-[16px] text-center text-neutral-950 text-nowrap top-[7.67px] translate-x-[-50%] whitespace-pre">[TEACHER APPLICATION]</p>
    </div>
  );
}

function Container45() {
  return (
    <div className="box-border content-stretch flex h-[256px] items-center justify-center p-[1.333px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-neutral-950 text-nowrap whitespace-pre">[Cartoon Picture - Teacher]</p>
    </div>
  );
}

function Container46() {
  return (
    <div className="bg-black h-[56px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[188.06px] text-[16px] text-center text-nowrap text-white top-[14.33px] translate-x-[-50%] whitespace-pre">APPLY AS TEACHER →</p>
    </div>
  );
}

function Container47() {
  return (
    <div className="[grid-area:1_/_2] h-[442.667px] relative shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] h-[442.667px] items-start pb-[4px] pt-[28px] px-[28px] relative w-full">
          <Container44 />
          <Container45 />
          <Container46 />
        </div>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="absolute gap-[32px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[442.667px] left-[319.67px] top-[1257px] w-[896px]" data-name="Container">
      <Container43 />
      <Container47 />
    </div>
  );
}

function Container49() {
  return (
    <div className="absolute h-[56px] left-0 top-[52px] w-[1488px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[744.31px] text-[16px] text-center text-neutral-950 text-nowrap top-[14.33px] translate-x-[-50%] whitespace-pre">WHAT COURSES WE OFFER</p>
    </div>
  );
}

function Container50() {
  return (
    <div className="h-[32px] relative shrink-0 w-[32.958px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[32px] items-start relative w-[32.958px]">
        <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[32px] min-h-px min-w-px relative shrink-0 text-[24px] text-neutral-950">📚</p>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="absolute box-border content-stretch flex items-center justify-center left-[152px] p-[4px] size-[64px] top-[28px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <Container50 />
    </div>
  );
}

function Container52() {
  return (
    <div className="absolute h-[42.667px] left-[28px] top-[108px] w-[312px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[156.13px] text-[16px] text-center text-neutral-950 text-nowrap top-[7.67px] translate-x-[-50%] whitespace-pre">Mathematics</p>
    </div>
  );
}

function Container53() {
  return (
    <div className="absolute h-[38.667px] left-0 top-0 w-[312px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[9.33px] text-[14px] text-neutral-950 top-[7.33px] w-[61px]">□ Algebra</p>
    </div>
  );
}

function Container54() {
  return (
    <div className="absolute h-[38.667px] left-0 top-[46.67px] w-[312px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[9.33px] text-[14px] text-neutral-950 top-[7.33px] w-[74px]">□ Geometry</p>
    </div>
  );
}

function Container55() {
  return (
    <div className="absolute h-[38.667px] left-0 top-[93.33px] w-[312px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal h-[31px] leading-[20px] left-[9.67px] text-[14px] text-neutral-950 top-[7.67px] w-[79px]">□ Calculus</p>
    </div>
  );
}

function Container56() {
  return (
    <div className="absolute h-[38.667px] left-0 top-[140px] w-[312px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal h-[41px] leading-[20px] left-[9.67px] text-[14px] text-neutral-950 top-[7px] w-[83px]">□ Statistics</p>
    </div>
  );
}

function Container57() {
  return (
    <div className="absolute h-[178.667px] left-[28px] top-[166.67px] w-[312px]" data-name="Container">
      <Container53 />
      <Container54 />
      <Container55 />
      <Container56 />
    </div>
  );
}

function Container58() {
  return (
    <div className="absolute h-[373.333px] left-0 top-0 w-[368px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <Container51 />
      <Container52 />
      <Container57 />
    </div>
  );
}

function Container59() {
  return (
    <div className="h-[32px] relative shrink-0 w-[32.958px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[32px] items-start relative w-[32.958px]">
        <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[32px] min-h-px min-w-px relative shrink-0 text-[24px] text-neutral-950">📚</p>
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="absolute box-border content-stretch flex items-center justify-center left-[152px] p-[4px] size-[64px] top-[28px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <Container59 />
    </div>
  );
}

function Container61() {
  return (
    <div className="absolute h-[42.667px] left-[28px] top-[108px] w-[312px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[156.13px] text-[16px] text-center text-neutral-950 text-nowrap top-[7.67px] translate-x-[-50%] whitespace-pre">Physics</p>
    </div>
  );
}

function Container62() {
  return (
    <div className="absolute h-[38.667px] left-0 top-0 w-[312px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal h-[49px] leading-[20px] left-[9.67px] text-[14px] text-neutral-950 top-[7px] w-[68px]">□ Vector</p>
    </div>
  );
}

function Container63() {
  return (
    <div className="absolute h-[38.667px] left-0 top-[46.67px] w-[312px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[9.67px] text-[14px] text-neutral-950 text-nowrap top-[7.33px] whitespace-pre">□ Newton’s Law</p>
    </div>
  );
}

function Container64() {
  return (
    <div className="absolute h-[38.667px] left-0 top-[93.33px] w-[312px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[9.33px] text-[14px] text-neutral-950 top-[7.33px] w-[59px]">□ Optic</p>
    </div>
  );
}

function Container65() {
  return (
    <div className="absolute h-[38.667px] left-0 top-[140px] w-[312px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal h-[41px] leading-[20px] left-[9.67px] text-[14px] text-neutral-950 top-[7px] w-[167px]">□ Temperature and Heat</p>
    </div>
  );
}

function Container66() {
  return (
    <div className="absolute h-[178.667px] left-[28px] top-[166.67px] w-[312px]" data-name="Container">
      <Container62 />
      <Container63 />
      <Container64 />
      <Container65 />
    </div>
  );
}

function Container67() {
  return (
    <div className="absolute h-[373.333px] left-[392px] top-0 w-[368px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <Container60 />
      <Container61 />
      <Container66 />
    </div>
  );
}

function Container68() {
  return (
    <div className="h-[32px] relative shrink-0 w-[32.958px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[32px] items-start relative w-[32.958px]">
        <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[32px] min-h-px min-w-px relative shrink-0 text-[24px] text-neutral-950">📚</p>
      </div>
    </div>
  );
}

function Container69() {
  return (
    <div className="absolute box-border content-stretch flex items-center justify-center left-[152px] p-[4px] size-[64px] top-[28px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <Container68 />
    </div>
  );
}

function Container70() {
  return (
    <div className="absolute h-[42.667px] left-[28px] top-[108px] w-[312px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[156.52px] text-[16px] text-center text-neutral-950 text-nowrap top-[7.67px] translate-x-[-50%] whitespace-pre">Chemistry</p>
    </div>
  );
}

function Container71() {
  return (
    <div className="absolute h-[38.667px] left-0 top-0 w-[312px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal h-[25px] leading-[20px] left-[10px] text-[14px] text-neutral-950 top-[7.33px] w-[138px]">□ Atomic Structure</p>
    </div>
  );
}

function Container72() {
  return (
    <div className="absolute h-[38.667px] left-0 top-[46.67px] w-[312px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal h-[39px] leading-[20px] left-[9px] text-[14px] text-neutral-950 top-[7.67px] w-[169px]">□ Chemical Bonding</p>
    </div>
  );
}

function Container73() {
  return (
    <div className="absolute h-[38.667px] left-0 top-[93.33px] w-[312px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal h-[32px] leading-[20px] left-[9px] text-[14px] text-neutral-950 top-[7px] w-[121px]">□ Stoichiometry</p>
    </div>
  );
}

function Container74() {
  return (
    <div className="absolute h-[38.667px] left-0 top-[140px] w-[312px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal h-[43px] leading-[20px] left-[10px] text-[14px] text-neutral-950 top-[7.33px] w-[154px]">□ Acids, Bases and pH</p>
    </div>
  );
}

function Container75() {
  return (
    <div className="absolute h-[178.667px] left-[28px] top-[166.67px] w-[312px]" data-name="Container">
      <Container71 />
      <Container72 />
      <Container73 />
      <Container74 />
    </div>
  );
}

function Container76() {
  return (
    <div className="absolute h-[373.333px] left-[784px] top-0 w-[368px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <Container69 />
      <Container70 />
      <Container75 />
    </div>
  );
}

function Container77() {
  return (
    <div className="absolute h-[770.667px] left-[168px] top-[140px] w-[1152px]" data-name="Container">
      <Container58 />
      <Container67 />
      <Container76 />
    </div>
  );
}

function Container78() {
  return (
    <div className="absolute h-[910.667px] left-[23.67px] top-[1758px] w-[1488px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[4px_0px_0px] border-black border-solid inset-0 pointer-events-none" />
      <Container49 />
      <Container77 />
    </div>
  );
}

function Container79() {
  return (
    <div className="absolute h-[2768px] left-[317.33px] top-[84px] w-[1536px]" data-name="Container">
      <Container12 />
      <Container27 />
      <Container39 />
      <Container48 />
      <Container78 />
    </div>
  );
}

function Container80() {
  return (
    <div className="h-[42.667px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[135.27px] text-[16px] text-center text-neutral-950 text-nowrap top-[7.67px] translate-x-[-50%] whitespace-pre">📍 ADDRESS</p>
    </div>
  );
}

function Container81() {
  return (
    <div className="h-[106.667px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[135.6px] text-[14px] text-center text-neutral-950 text-nowrap top-[11.33px] translate-x-[-50%] whitespace-pre">Jl. Pendidikan No. 123</p>
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[135.02px] text-[14px] text-center text-neutral-950 text-nowrap top-[31.33px] translate-x-[-50%] whitespace-pre">Kebayoran Baru</p>
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[135.46px] text-[14px] text-center text-neutral-950 text-nowrap top-[51.33px] translate-x-[-50%] whitespace-pre">Jakarta Selatan 12345</p>
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[135.25px] text-[14px] text-center text-neutral-950 text-nowrap top-[71.33px] translate-x-[-50%] whitespace-pre">Indonesia</p>
    </div>
  );
}

function Container82() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[16px] h-[246.667px] items-start left-0 pb-[4px] pt-[28px] px-[28px] top-0 w-[325.333px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <Container80 />
      <Container81 />
    </div>
  );
}

function Container83() {
  return (
    <div className="h-[42.667px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[135.44px] text-[16px] text-center text-neutral-950 text-nowrap top-[7.67px] translate-x-[-50%] whitespace-pre">📞 CONTACT</p>
    </div>
  );
}

function Container84() {
  return (
    <div className="h-[38.667px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[135.65px] text-[14px] text-center text-neutral-950 text-nowrap top-[7.33px] translate-x-[-50%] whitespace-pre">📧 info@sionedu.com</p>
    </div>
  );
}

function Container85() {
  return (
    <div className="h-[38.667px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[134.69px] text-[14px] text-center text-neutral-950 text-nowrap top-[7.33px] translate-x-[-50%] whitespace-pre">☎️ (021) 1234-5678</p>
    </div>
  );
}

function Container86() {
  return (
    <div className="h-[38.667px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[135.27px] text-[14px] text-center text-neutral-950 text-nowrap top-[7.33px] translate-x-[-50%] whitespace-pre">💬 +62 812-3456-7890</p>
    </div>
  );
}

function Container87() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[132px] items-start relative shrink-0 w-full" data-name="Container">
      <Container84 />
      <Container85 />
      <Container86 />
    </div>
  );
}

function Container88() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[16px] h-[246.667px] items-start left-[349.33px] pb-[4px] pt-[28px] px-[28px] top-0 w-[325.333px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <Container83 />
      <Container87 />
    </div>
  );
}

function Container89() {
  return (
    <div className="h-[42.667px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[135.54px] text-[16px] text-center text-neutral-950 text-nowrap top-[7.67px] translate-x-[-50%] whitespace-pre">🔗 FOLLOW US</p>
    </div>
  );
}

function Container90() {
  return (
    <div className="h-[38.667px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[135.02px] text-[14px] text-center text-neutral-950 text-nowrap top-[7.33px] translate-x-[-50%] whitespace-pre">📷 @sion.education</p>
    </div>
  );
}

function Container91() {
  return (
    <div className="h-[38.667px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[135.1px] text-[14px] text-center text-neutral-950 text-nowrap top-[7.33px] translate-x-[-50%] whitespace-pre">🌐 facebook.com/sionedu</p>
    </div>
  );
}

function Container92() {
  return (
    <div className="h-[38.667px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[134.48px] text-[14px] text-center text-neutral-950 text-nowrap top-[7.33px] translate-x-[-50%] whitespace-pre">🎥 youtube.com/sionedu</p>
    </div>
  );
}

function Container93() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[132px] items-start relative shrink-0 w-full" data-name="Container">
      <Container90 />
      <Container91 />
      <Container92 />
    </div>
  );
}

function Container94() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[16px] h-[246.667px] items-start left-[698.67px] pb-[4px] pt-[28px] px-[28px] top-0 w-[325.333px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <Container89 />
      <Container93 />
    </div>
  );
}

function Container95() {
  return (
    <div className="absolute h-[246.667px] left-[256px] top-0 w-[1024px]" data-name="Container">
      <Container82 />
      <Container88 />
      <Container94 />
    </div>
  );
}

function Container96() {
  return (
    <div className="absolute bg-white h-[42.667px] left-[567.52px] top-[25.33px] w-[352.958px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[176.33px] text-[16px] text-center text-neutral-950 text-nowrap top-[7.67px] translate-x-[-50%] whitespace-pre">© 2025 SION Education - All Rights Reserved</p>
    </div>
  );
}

function Container97() {
  return (
    <div className="absolute h-[114.667px] left-[24px] top-[278.67px] w-[1488px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px_0px_0px] border-black border-solid inset-0 pointer-events-none" />
      <Container96 />
    </div>
  );
}

function Container98() {
  return (
    <div className="h-[393.333px] relative shrink-0 w-full" data-name="Container">
      <Container95 />
      <Container97 />
    </div>
  );
}

function PublicFooter() {
  return (
    <div className="absolute bg-gray-100 box-border content-stretch flex flex-col h-[429px] items-start left-0 pb-0 pt-[36px] px-[317.333px] top-[2783px] w-[2171px]" data-name="PublicFooter">
      <div aria-hidden="true" className="absolute border-[4px_0px_0px] border-black border-solid inset-0 pointer-events-none" />
      <Container98 />
    </div>
  );
}

function LandingPage() {
  return (
    <div className="bg-white h-[3198px] relative shrink-0 w-full" data-name="LandingPage">
      <Container7 />
      <Container79 />
      <PublicFooter />
    </div>
  );
}

export default function App() {
  return (
    <div className="bg-gray-50 box-border content-stretch flex flex-col items-start pb-0 pt-[48px] px-0 relative size-full" data-name="App">
      <LandingPage />
    </div>
  );
}