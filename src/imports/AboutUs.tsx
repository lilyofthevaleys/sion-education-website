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
    <div className="h-[48px] relative shrink-0 w-[90.208px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[48px] relative w-[90.208px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[17.33px] text-[16px] text-neutral-950 text-nowrap top-[10.33px] whitespace-pre">[HOME]</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-black h-[48px] relative shrink-0 w-[124.479px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[48px] relative w-[124.479px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[20px] text-[16px] text-nowrap text-white top-[10.33px] whitespace-pre">[ABOUT US]</p>
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
    <div className="content-stretch flex h-[48px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container4 />
      <Button3 />
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[84px] items-start left-0 pb-[4px] pt-[16px] px-[317.333px] top-0 w-[2170.67px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_4px] border-black border-solid inset-0 pointer-events-none" />
      <Container5 />
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute bg-white h-[64px] left-[272.73px] top-0 w-[222.542px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[111px] text-[16px] text-center text-neutral-950 text-nowrap top-[18.33px] translate-x-[-50%] whitespace-pre">ABOUT SION EDUCATION</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute bg-white h-[58.667px] left-0 top-[80px] w-[768px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[383.56px] text-[16px] text-center text-neutral-950 text-nowrap top-[15.67px] translate-x-[-50%] whitespace-pre">Empowering students through personalized online education</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[138.667px] relative shrink-0 w-full" data-name="Container">
      <Container7 />
      <Container8 />
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute bg-blue-50 box-border content-stretch flex flex-col h-[238.667px] items-start left-0 pb-[4px] pt-[48px] px-[701.333px] top-[84px] w-[2170.67px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_4px] border-black border-solid inset-0 pointer-events-none" />
      <Container9 />
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[42.667px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[219.52px] text-[16px] text-center text-neutral-950 text-nowrap top-[7.67px] translate-x-[-50%] whitespace-pre">OUR MISSION</p>
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[130.667px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex h-[130.667px] items-center justify-center p-[17.333px] relative w-full">
          <p className="font-['Arimo:Regular',sans-serif] font-normal h-[81px] leading-[24px] relative shrink-0 text-[16px] text-center text-neutral-950 w-[408px]">[Mission statement placeholder - To provide accessible, quality education through innovative online learning solutions that connect qualified teachers with motivated students]</p>
        </div>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="[grid-area:1_/_1] h-[245.333px] relative shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] h-[245.333px] items-start pb-[4px] pt-[28px] px-[28px] relative w-full">
          <Container11 />
          <Container12 />
        </div>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[42.667px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[220.5px] text-[16px] text-center text-neutral-950 text-nowrap top-[7.67px] translate-x-[-50%] whitespace-pre">OUR VISION</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[128px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex h-[128px] items-center justify-center p-[17.333px] relative w-full">
          <p className="font-['Arimo:Regular',sans-serif] font-normal h-[75px] leading-[24px] relative shrink-0 text-[16px] text-center text-neutral-950 w-[408px]">[Vision statement placeholder - To become the leading education platform that transforms learning experiences globally]</p>
        </div>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="[grid-area:1_/_2] h-[245.333px] relative shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] h-[245.333px] items-start pb-[4px] pt-[28px] px-[28px] relative w-full">
          <Container14 />
          <Container15 />
        </div>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute gap-[32px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[245.333px] left-[256px] top-[48px] w-[1024px]" data-name="Container">
      <Container13 />
      <Container16 />
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute h-[56px] left-0 top-0 w-[1488px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[744.02px] text-[16px] text-center text-neutral-950 text-nowrap top-[14.33px] translate-x-[-50%] whitespace-pre">OUR TEACHERS</p>
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute h-[42.667px] left-[631.21px] top-[28px] w-[225.563px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[112.33px] text-[16px] text-center text-neutral-950 text-nowrap top-[7.67px] translate-x-[-50%] whitespace-pre">TEACHER QUALIFICATIONS</p>
    </div>
  );
}

function Container20() {
  return (
    <div className="[grid-area:1_/_1] bg-white h-[50.667px] relative shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular','Noto_Sans:Regular',sans-serif] font-normal leading-[24px] left-[173.02px] text-[16px] text-center text-neutral-950 text-nowrap top-[11.67px] translate-x-[-50%] whitespace-pre">✓ Verified Credentials</p>
    </div>
  );
}

function Container21() {
  return (
    <div className="[grid-area:1_/_2] bg-white h-[50.667px] relative shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular','Noto_Sans:Regular',sans-serif] font-normal leading-[24px] left-[173.15px] text-[16px] text-center text-neutral-950 text-nowrap top-[11.67px] translate-x-[-50%] whitespace-pre">✓ Teaching Experience</p>
    </div>
  );
}

function Container22() {
  return (
    <div className="[grid-area:1_/_3] bg-white h-[50.667px] relative shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular','Noto_Sans:Regular',sans-serif] font-normal leading-[24px] left-[173.5px] text-[16px] text-center text-neutral-950 text-nowrap top-[11.67px] translate-x-[-50%] whitespace-pre">✓ Subject Expertise</p>
    </div>
  );
}

function Container23() {
  return (
    <div className="[grid-area:1_/_4] bg-white h-[50.667px] relative shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular','Noto_Sans:Regular',sans-serif] font-normal leading-[24px] left-[173.5px] text-[16px] text-center text-neutral-950 text-nowrap top-[11.67px] translate-x-[-50%] whitespace-pre">✓ Background Check</p>
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute gap-[16px] grid grid-cols-[repeat(4,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[50.667px] left-[28px] top-[94.67px] w-[1432px]" data-name="Container">
      <Container20 />
      <Container21 />
      <Container22 />
      <Container23 />
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute bg-yellow-50 h-[173.333px] left-0 top-[88px] w-[1488px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <Container19 />
      <Container24 />
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute left-[114.67px] rounded-[4.47392e+07px] size-[96px] top-[28px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none rounded-[4.47392e+07px]" />
    </div>
  );
}

function Container27() {
  return (
    <div className="h-[42.667px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal h-[28px] leading-[24px] left-[134.67px] text-[16px] text-center text-neutral-950 top-[7.67px] translate-x-[-50%] w-[106px]">TEACHER 1</p>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[14px] text-center text-neutral-950">Subject Specialist</p>
    </div>
  );
}

function Text() {
  return (
    <div className="absolute h-[24px] left-[93.33px] top-0 w-[13.333px]" data-name="Text">
      <p className="absolute font-['Arimo:Regular','Noto_Sans:Regular',sans-serif] font-normal leading-[24px] left-[7px] text-[16px] text-center text-neutral-950 text-nowrap top-[-1.67px] translate-x-[-50%] whitespace-pre">★</p>
    </div>
  );
}

function Text1() {
  return (
    <div className="absolute h-[24px] left-[110.67px] top-0 w-[13.333px]" data-name="Text">
      <p className="absolute font-['Arimo:Regular','Noto_Sans:Regular',sans-serif] font-normal leading-[24px] left-[7px] text-[16px] text-center text-neutral-950 text-nowrap top-[-1.67px] translate-x-[-50%] whitespace-pre">★</p>
    </div>
  );
}

function Text2() {
  return (
    <div className="absolute h-[24px] left-[128px] top-0 w-[13.333px]" data-name="Text">
      <p className="absolute font-['Arimo:Regular','Noto_Sans:Regular',sans-serif] font-normal leading-[24px] left-[7px] text-[16px] text-center text-neutral-950 text-nowrap top-[-1.67px] translate-x-[-50%] whitespace-pre">★</p>
    </div>
  );
}

function Text3() {
  return (
    <div className="absolute h-[24px] left-[145.33px] top-0 w-[13.333px]" data-name="Text">
      <p className="absolute font-['Arimo:Regular','Noto_Sans:Regular',sans-serif] font-normal leading-[24px] left-[7px] text-[16px] text-center text-neutral-950 text-nowrap top-[-1.67px] translate-x-[-50%] whitespace-pre">★</p>
    </div>
  );
}

function Text4() {
  return (
    <div className="absolute h-[24px] left-[162.67px] top-0 w-[13.333px]" data-name="Text">
      <p className="absolute font-['Arimo:Regular','Noto_Sans:Regular',sans-serif] font-normal leading-[24px] left-[7px] text-[16px] text-center text-neutral-950 text-nowrap top-[-1.67px] translate-x-[-50%] whitespace-pre">★</p>
    </div>
  );
}

function Container29() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <Text />
      <Text1 />
      <Text2 />
      <Text3 />
      <Text4 />
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[102.667px] items-start left-[28px] top-[140px] w-[269.333px]" data-name="Container">
      <Container27 />
      <Container28 />
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute box-border content-stretch flex h-[80px] items-center justify-center left-[28px] p-[13.333px] top-[254.67px] w-[269.333px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">[Brief bio and qualifications]</p>
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute h-[362.667px] left-0 top-0 w-[325.333px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <Container26 />
      <Container30 />
      <Container31 />
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute left-[114.67px] rounded-[4.47392e+07px] size-[96px] top-[28px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none rounded-[4.47392e+07px]" />
    </div>
  );
}

function Container34() {
  return (
    <div className="h-[42.667px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal h-[23px] leading-[24px] left-[134.33px] text-[16px] text-center text-neutral-950 top-[9.67px] translate-x-[-50%] w-[92px]">TEACHER 2</p>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[14px] text-center text-neutral-950">Subject Specialist</p>
    </div>
  );
}

function Text5() {
  return (
    <div className="absolute h-[24px] left-[93.33px] top-0 w-[13.333px]" data-name="Text">
      <p className="absolute font-['Arimo:Regular','Noto_Sans:Regular',sans-serif] font-normal leading-[24px] left-[7px] text-[16px] text-center text-neutral-950 text-nowrap top-[-1.67px] translate-x-[-50%] whitespace-pre">★</p>
    </div>
  );
}

function Text6() {
  return (
    <div className="absolute h-[24px] left-[110.67px] top-0 w-[13.333px]" data-name="Text">
      <p className="absolute font-['Arimo:Regular','Noto_Sans:Regular',sans-serif] font-normal leading-[24px] left-[7px] text-[16px] text-center text-neutral-950 text-nowrap top-[-1.67px] translate-x-[-50%] whitespace-pre">★</p>
    </div>
  );
}

function Text7() {
  return (
    <div className="absolute h-[24px] left-[128px] top-0 w-[13.333px]" data-name="Text">
      <p className="absolute font-['Arimo:Regular','Noto_Sans:Regular',sans-serif] font-normal leading-[24px] left-[7px] text-[16px] text-center text-neutral-950 text-nowrap top-[-1.67px] translate-x-[-50%] whitespace-pre">★</p>
    </div>
  );
}

function Text8() {
  return (
    <div className="absolute h-[24px] left-[145.33px] top-0 w-[13.333px]" data-name="Text">
      <p className="absolute font-['Arimo:Regular','Noto_Sans:Regular',sans-serif] font-normal leading-[24px] left-[7px] text-[16px] text-center text-neutral-950 text-nowrap top-[-1.67px] translate-x-[-50%] whitespace-pre">★</p>
    </div>
  );
}

function Text9() {
  return (
    <div className="absolute h-[24px] left-[162.67px] top-0 w-[13.333px]" data-name="Text">
      <p className="absolute font-['Arimo:Regular','Noto_Sans:Regular',sans-serif] font-normal leading-[24px] left-[7px] text-[16px] text-center text-neutral-950 text-nowrap top-[-1.67px] translate-x-[-50%] whitespace-pre">★</p>
    </div>
  );
}

function Container36() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <Text5 />
      <Text6 />
      <Text7 />
      <Text8 />
      <Text9 />
    </div>
  );
}

function Container37() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[102.667px] items-start left-[28px] top-[140px] w-[269.333px]" data-name="Container">
      <Container34 />
      <Container35 />
    </div>
  );
}

function Container38() {
  return (
    <div className="absolute box-border content-stretch flex h-[80px] items-center justify-center left-[28px] p-[13.333px] top-[254.67px] w-[269.333px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">[Brief bio and qualifications]</p>
    </div>
  );
}

function Container39() {
  return (
    <div className="absolute h-[362.667px] left-[349.33px] top-0 w-[325.333px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <Container33 />
      <Container37 />
      <Container38 />
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute left-[114.67px] rounded-[4.47392e+07px] size-[96px] top-[28px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none rounded-[4.47392e+07px]" />
    </div>
  );
}

function Container41() {
  return (
    <div className="h-[42.667px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal h-[26px] leading-[24px] left-[135.5px] text-[16px] text-center text-neutral-950 top-[8.67px] translate-x-[-50%] w-[93px]">TEACHER 3</p>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[14px] text-center text-neutral-950">Subject Specialist</p>
    </div>
  );
}

function Text10() {
  return (
    <div className="absolute h-[24px] left-[93.33px] top-0 w-[13.333px]" data-name="Text">
      <p className="absolute font-['Arimo:Regular','Noto_Sans:Regular',sans-serif] font-normal leading-[24px] left-[7px] text-[16px] text-center text-neutral-950 text-nowrap top-[-1.67px] translate-x-[-50%] whitespace-pre">★</p>
    </div>
  );
}

function Text11() {
  return (
    <div className="absolute h-[24px] left-[110.67px] top-0 w-[13.333px]" data-name="Text">
      <p className="absolute font-['Arimo:Regular','Noto_Sans:Regular',sans-serif] font-normal leading-[24px] left-[7px] text-[16px] text-center text-neutral-950 text-nowrap top-[-1.67px] translate-x-[-50%] whitespace-pre">★</p>
    </div>
  );
}

function Text12() {
  return (
    <div className="absolute h-[24px] left-[128px] top-0 w-[13.333px]" data-name="Text">
      <p className="absolute font-['Arimo:Regular','Noto_Sans:Regular',sans-serif] font-normal leading-[24px] left-[7px] text-[16px] text-center text-neutral-950 text-nowrap top-[-1.67px] translate-x-[-50%] whitespace-pre">★</p>
    </div>
  );
}

function Text13() {
  return (
    <div className="absolute h-[24px] left-[145.33px] top-0 w-[13.333px]" data-name="Text">
      <p className="absolute font-['Arimo:Regular','Noto_Sans:Regular',sans-serif] font-normal leading-[24px] left-[7px] text-[16px] text-center text-neutral-950 text-nowrap top-[-1.67px] translate-x-[-50%] whitespace-pre">★</p>
    </div>
  );
}

function Text14() {
  return (
    <div className="absolute h-[24px] left-[162.67px] top-0 w-[13.333px]" data-name="Text">
      <p className="absolute font-['Arimo:Regular','Noto_Sans:Regular',sans-serif] font-normal leading-[24px] left-[7px] text-[16px] text-center text-neutral-950 text-nowrap top-[-1.67px] translate-x-[-50%] whitespace-pre">★</p>
    </div>
  );
}

function Container43() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <Text10 />
      <Text11 />
      <Text12 />
      <Text13 />
      <Text14 />
    </div>
  );
}

function Container44() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[102.667px] items-start left-[28px] top-[140px] w-[269.333px]" data-name="Container">
      <Container41 />
      <Container42 />
    </div>
  );
}

function Container45() {
  return (
    <div className="absolute box-border content-stretch flex h-[80px] items-center justify-center left-[28px] p-[13.333px] top-[254.67px] w-[269.333px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">[Brief bio and qualifications]</p>
    </div>
  );
}

function Container46() {
  return (
    <div className="absolute h-[362.667px] left-[698.67px] top-0 w-[325.333px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <Container40 />
      <Container44 />
      <Container45 />
    </div>
  );
}

function Container47() {
  return (
    <div className="absolute left-[114.67px] rounded-[4.47392e+07px] size-[96px] top-[28px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none rounded-[4.47392e+07px]" />
    </div>
  );
}

function Container48() {
  return (
    <div className="h-[42.667px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[134.94px] text-[16px] text-center text-neutral-950 top-[7.67px] translate-x-[-50%] w-[79px]">TEACHER 4</p>
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[14px] text-center text-neutral-950">Subject Specialist</p>
    </div>
  );
}

function Text15() {
  return (
    <div className="absolute h-[24px] left-[93.33px] top-0 w-[13.333px]" data-name="Text">
      <p className="absolute font-['Arimo:Regular','Noto_Sans:Regular',sans-serif] font-normal leading-[24px] left-[7px] text-[16px] text-center text-neutral-950 text-nowrap top-[-1.67px] translate-x-[-50%] whitespace-pre">★</p>
    </div>
  );
}

function Text16() {
  return (
    <div className="absolute h-[24px] left-[110.67px] top-0 w-[13.333px]" data-name="Text">
      <p className="absolute font-['Arimo:Regular','Noto_Sans:Regular',sans-serif] font-normal leading-[24px] left-[7px] text-[16px] text-center text-neutral-950 text-nowrap top-[-1.67px] translate-x-[-50%] whitespace-pre">★</p>
    </div>
  );
}

function Text17() {
  return (
    <div className="absolute h-[24px] left-[128px] top-0 w-[13.333px]" data-name="Text">
      <p className="absolute font-['Arimo:Regular','Noto_Sans:Regular',sans-serif] font-normal leading-[24px] left-[7px] text-[16px] text-center text-neutral-950 text-nowrap top-[-1.67px] translate-x-[-50%] whitespace-pre">★</p>
    </div>
  );
}

function Text18() {
  return (
    <div className="absolute h-[24px] left-[145.33px] top-0 w-[13.333px]" data-name="Text">
      <p className="absolute font-['Arimo:Regular','Noto_Sans:Regular',sans-serif] font-normal leading-[24px] left-[7px] text-[16px] text-center text-neutral-950 text-nowrap top-[-1.67px] translate-x-[-50%] whitespace-pre">★</p>
    </div>
  );
}

function Text19() {
  return (
    <div className="absolute h-[24px] left-[162.67px] top-0 w-[13.333px]" data-name="Text">
      <p className="absolute font-['Arimo:Regular','Noto_Sans:Regular',sans-serif] font-normal leading-[24px] left-[7px] text-[16px] text-center text-neutral-950 text-nowrap top-[-1.67px] translate-x-[-50%] whitespace-pre">★</p>
    </div>
  );
}

function Container50() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <Text15 />
      <Text16 />
      <Text17 />
      <Text18 />
      <Text19 />
    </div>
  );
}

function Container51() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[102.667px] items-start left-[28px] top-[140px] w-[269.333px]" data-name="Container">
      <Container48 />
      <Container49 />
    </div>
  );
}

function Container52() {
  return (
    <div className="absolute box-border content-stretch flex h-[80px] items-center justify-center left-[28px] p-[13.333px] top-[254.67px] w-[269.333px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">[Brief bio and qualifications]</p>
    </div>
  );
}

function Container53() {
  return (
    <div className="absolute h-[362.667px] left-0 top-[386.67px] w-[325.333px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <Container47 />
      <Container51 />
      <Container52 />
    </div>
  );
}

function Container54() {
  return (
    <div className="absolute left-[114.67px] rounded-[4.47392e+07px] size-[96px] top-[28px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none rounded-[4.47392e+07px]" />
    </div>
  );
}

function Container55() {
  return (
    <div className="h-[42.667px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[134.94px] text-[16px] text-center text-neutral-950 top-[7.67px] translate-x-[-50%] w-[79px]">TEACHER 5</p>
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[14px] text-center text-neutral-950">Subject Specialist</p>
    </div>
  );
}

function Text20() {
  return (
    <div className="absolute h-[24px] left-[93.33px] top-0 w-[13.333px]" data-name="Text">
      <p className="absolute font-['Arimo:Regular','Noto_Sans:Regular',sans-serif] font-normal leading-[24px] left-[7px] text-[16px] text-center text-neutral-950 text-nowrap top-[-1.67px] translate-x-[-50%] whitespace-pre">★</p>
    </div>
  );
}

function Text21() {
  return (
    <div className="absolute h-[24px] left-[110.67px] top-0 w-[13.333px]" data-name="Text">
      <p className="absolute font-['Arimo:Regular','Noto_Sans:Regular',sans-serif] font-normal leading-[24px] left-[7px] text-[16px] text-center text-neutral-950 text-nowrap top-[-1.67px] translate-x-[-50%] whitespace-pre">★</p>
    </div>
  );
}

function Text22() {
  return (
    <div className="absolute h-[24px] left-[128px] top-0 w-[13.333px]" data-name="Text">
      <p className="absolute font-['Arimo:Regular','Noto_Sans:Regular',sans-serif] font-normal leading-[24px] left-[7px] text-[16px] text-center text-neutral-950 text-nowrap top-[-1.67px] translate-x-[-50%] whitespace-pre">★</p>
    </div>
  );
}

function Text23() {
  return (
    <div className="absolute h-[24px] left-[145.33px] top-0 w-[13.333px]" data-name="Text">
      <p className="absolute font-['Arimo:Regular','Noto_Sans:Regular',sans-serif] font-normal leading-[24px] left-[7px] text-[16px] text-center text-neutral-950 text-nowrap top-[-1.67px] translate-x-[-50%] whitespace-pre">★</p>
    </div>
  );
}

function Text24() {
  return (
    <div className="absolute h-[24px] left-[162.67px] top-0 w-[13.333px]" data-name="Text">
      <p className="absolute font-['Arimo:Regular','Noto_Sans:Regular',sans-serif] font-normal leading-[24px] left-[7px] text-[16px] text-center text-neutral-950 text-nowrap top-[-1.67px] translate-x-[-50%] whitespace-pre">★</p>
    </div>
  );
}

function Container57() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <Text20 />
      <Text21 />
      <Text22 />
      <Text23 />
      <Text24 />
    </div>
  );
}

function Container58() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[102.667px] items-start left-[28px] top-[140px] w-[269.333px]" data-name="Container">
      <Container55 />
      <Container56 />
    </div>
  );
}

function Container59() {
  return (
    <div className="absolute box-border content-stretch flex h-[80px] items-center justify-center left-[28px] p-[13.333px] top-[254.67px] w-[269.333px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">[Brief bio and qualifications]</p>
    </div>
  );
}

function Container60() {
  return (
    <div className="absolute h-[362.667px] left-[349.33px] top-[386.67px] w-[325.333px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <Container54 />
      <Container58 />
      <Container59 />
    </div>
  );
}

function Container61() {
  return (
    <div className="absolute left-[114.67px] rounded-[4.47392e+07px] size-[96px] top-[28px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none rounded-[4.47392e+07px]" />
    </div>
  );
}

function Container62() {
  return (
    <div className="h-[42.667px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[134.94px] text-[16px] text-center text-neutral-950 top-[7.67px] translate-x-[-50%] w-[79px]">TEACHER 6</p>
    </div>
  );
}

function Container63() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[14px] text-center text-neutral-950">Subject Specialist</p>
    </div>
  );
}

function Text25() {
  return (
    <div className="absolute h-[24px] left-[93.33px] top-0 w-[13.333px]" data-name="Text">
      <p className="absolute font-['Arimo:Regular','Noto_Sans:Regular',sans-serif] font-normal leading-[24px] left-[7px] text-[16px] text-center text-neutral-950 text-nowrap top-[-1.67px] translate-x-[-50%] whitespace-pre">★</p>
    </div>
  );
}

function Text26() {
  return (
    <div className="absolute h-[24px] left-[110.67px] top-0 w-[13.333px]" data-name="Text">
      <p className="absolute font-['Arimo:Regular','Noto_Sans:Regular',sans-serif] font-normal leading-[24px] left-[7px] text-[16px] text-center text-neutral-950 text-nowrap top-[-1.67px] translate-x-[-50%] whitespace-pre">★</p>
    </div>
  );
}

function Text27() {
  return (
    <div className="absolute h-[24px] left-[128px] top-0 w-[13.333px]" data-name="Text">
      <p className="absolute font-['Arimo:Regular','Noto_Sans:Regular',sans-serif] font-normal leading-[24px] left-[7px] text-[16px] text-center text-neutral-950 text-nowrap top-[-1.67px] translate-x-[-50%] whitespace-pre">★</p>
    </div>
  );
}

function Text28() {
  return (
    <div className="absolute h-[24px] left-[145.33px] top-0 w-[13.333px]" data-name="Text">
      <p className="absolute font-['Arimo:Regular','Noto_Sans:Regular',sans-serif] font-normal leading-[24px] left-[7px] text-[16px] text-center text-neutral-950 text-nowrap top-[-1.67px] translate-x-[-50%] whitespace-pre">★</p>
    </div>
  );
}

function Text29() {
  return (
    <div className="absolute h-[24px] left-[162.67px] top-0 w-[13.333px]" data-name="Text">
      <p className="absolute font-['Arimo:Regular','Noto_Sans:Regular',sans-serif] font-normal leading-[24px] left-[7px] text-[16px] text-center text-neutral-950 text-nowrap top-[-1.67px] translate-x-[-50%] whitespace-pre">★</p>
    </div>
  );
}

function Container64() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <Text25 />
      <Text26 />
      <Text27 />
      <Text28 />
      <Text29 />
    </div>
  );
}

function Container65() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[102.667px] items-start left-[28px] top-[140px] w-[269.333px]" data-name="Container">
      <Container62 />
      <Container63 />
    </div>
  );
}

function Container66() {
  return (
    <div className="absolute box-border content-stretch flex h-[80px] items-center justify-center left-[28px] p-[13.333px] top-[254.67px] w-[269.333px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">[Brief bio and qualifications]</p>
    </div>
  );
}

function Container67() {
  return (
    <div className="absolute h-[362.667px] left-[698.67px] top-[386.67px] w-[325.333px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <Container61 />
      <Container65 />
      <Container66 />
    </div>
  );
}

function Container68() {
  return (
    <div className="absolute h-[749.333px] left-[232px] top-[293.33px] w-[1024px]" data-name="Container">
      <Container32 />
      <Container39 />
      <Container46 />
      <Container53 />
      <Container60 />
      <Container67 />
    </div>
  );
}

function Container69() {
  return (
    <div className="absolute h-[1042.67px] left-[24px] top-[357.33px] w-[1488px]" data-name="Container">
      <Container18 />
      <Container25 />
      <Container68 />
    </div>
  );
}

function Container70() {
  return (
    <div className="absolute h-[56px] left-0 top-0 w-[1488px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[744.33px] text-[16px] text-center text-neutral-950 text-nowrap top-[14.33px] translate-x-[-50%] whitespace-pre">PHOTO GALLERY</p>
    </div>
  );
}

function Container71() {
  return (
    <div className="absolute h-[60px] left-[442.79px] top-[238.25px] w-[82.396px]" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[60px] left-0 text-[60px] text-neutral-950 text-nowrap top-[-6.67px] whitespace-pre">📸</p>
    </div>
  );
}

function Container72() {
  return (
    <div className="absolute bg-white h-[30.667px] left-[20px] top-[20px] w-[170.979px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[13.33px] text-[14px] text-neutral-950 text-nowrap top-[3.33px] whitespace-pre">[STUDENTS STUDYING]</p>
    </div>
  );
}

function Container73() {
  return (
    <div className="bg-white h-[544.5px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <Container71 />
      <Container72 />
    </div>
  );
}

function Button4() {
  return (
    <div className="h-[56px] relative shrink-0 w-[110.75px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[56px] relative w-[110.75px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[28px] text-[16px] text-neutral-950 text-nowrap top-[14.33px] whitespace-pre">← PREV</p>
      </div>
    </div>
  );
}

function Container74() {
  return (
    <div className="bg-black relative shrink-0 size-[12px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[12px]" />
    </div>
  );
}

function Container75() {
  return (
    <div className="bg-white relative shrink-0 size-[12px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[12px]" />
    </div>
  );
}

function Container76() {
  return (
    <div className="basis-0 bg-white grow h-[12px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[12px] w-full" />
    </div>
  );
}

function Container77() {
  return (
    <div className="h-[12px] relative shrink-0 w-[112px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[12px] items-start relative w-[112px]">
        <Container74 />
        {[...Array(4).keys()].map((_, i) => (
          <Container75 key={i} />
        ))}
        <Container76 />
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="h-[56px] relative shrink-0 w-[112.333px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[56px] relative w-[112.333px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[28px] text-[16px] text-neutral-950 text-nowrap top-[14.33px] whitespace-pre">NEXT →</p>
      </div>
    </div>
  );
}

function Container78() {
  return (
    <div className="h-[56px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex h-[56px] items-center justify-between relative w-full">
          <Button4 />
          <Container77 />
          <Button5 />
        </div>
      </div>
    </div>
  );
}

function Container79() {
  return (
    <div className="bg-gray-50 h-[672.5px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] h-[672.5px] items-start pb-[4px] pt-[28px] px-[28px] relative w-full">
          <Container73 />
          <Container78 />
        </div>
      </div>
    </div>
  );
}

function Container80() {
  return (
    <div className="h-[32px] relative shrink-0 w-[32.958px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[32px] items-start relative w-[32.958px]">
        <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[32px] min-h-px min-w-px relative shrink-0 text-[24px] text-neutral-950">📷</p>
      </div>
    </div>
  );
}

function Container81() {
  return (
    <div className="bg-white h-[76.875px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex h-[76.875px] items-center justify-center p-[1.333px] relative w-full">
          <Container80 />
        </div>
      </div>
    </div>
  );
}

function Container82() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[12px] text-center text-neutral-950 text-nowrap whitespace-pre">[STUDENTS STUDYING]</p>
    </div>
  );
}

function Button6() {
  return (
    <div className="absolute bg-gray-200 box-border content-stretch flex flex-col gap-[8px] h-[124.875px] items-start left-0 pb-[4px] pt-[12px] px-[12px] top-0 w-[160.667px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <Container81 />
      <Container82 />
    </div>
  );
}

function Container83() {
  return (
    <div className="h-[32px] relative shrink-0 w-[32.958px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[32px] items-start relative w-[32.958px]">
        <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[32px] min-h-px min-w-px relative shrink-0 text-[24px] text-neutral-950">📷</p>
      </div>
    </div>
  );
}

function Container84() {
  return (
    <div className="bg-white h-[76.875px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex h-[76.875px] items-center justify-center p-[1.333px] relative w-full">
          <Container83 />
        </div>
      </div>
    </div>
  );
}

function Container85() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[12px] text-center text-neutral-950">[TEACHER CLASS]</p>
    </div>
  );
}

function Button7() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[8px] h-[124.875px] items-start left-[172.67px] pb-[4px] pt-[12px] px-[12px] top-0 w-[160.667px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <Container84 />
      <Container85 />
    </div>
  );
}

function Container86() {
  return (
    <div className="h-[32px] relative shrink-0 w-[32.958px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[32px] items-start relative w-[32.958px]">
        <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[32px] min-h-px min-w-px relative shrink-0 text-[24px] text-neutral-950">📷</p>
      </div>
    </div>
  );
}

function Container87() {
  return (
    <div className="bg-white h-[76.875px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex h-[76.875px] items-center justify-center p-[1.333px] relative w-full">
          <Container86 />
        </div>
      </div>
    </div>
  );
}

function Container88() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[12px] text-center text-neutral-950">[COMPUTER LAB]</p>
    </div>
  );
}

function Button8() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[8px] h-[124.875px] items-start left-[345.33px] pb-[4px] pt-[12px] px-[12px] top-0 w-[160.667px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <Container87 />
      <Container88 />
    </div>
  );
}

function Container89() {
  return (
    <div className="h-[32px] relative shrink-0 w-[32.958px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[32px] items-start relative w-[32.958px]">
        <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[32px] min-h-px min-w-px relative shrink-0 text-[24px] text-neutral-950">📷</p>
      </div>
    </div>
  );
}

function Container90() {
  return (
    <div className="bg-white h-[76.875px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex h-[76.875px] items-center justify-center p-[1.333px] relative w-full">
          <Container89 />
        </div>
      </div>
    </div>
  );
}

function Container91() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[12px] text-center text-neutral-950">[GROUP WORK]</p>
    </div>
  );
}

function Button9() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[8px] h-[124.875px] items-start left-[518px] pb-[4px] pt-[12px] px-[12px] top-0 w-[160.667px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <Container90 />
      <Container91 />
    </div>
  );
}

function Container92() {
  return (
    <div className="h-[32px] relative shrink-0 w-[32.958px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[32px] items-start relative w-[32.958px]">
        <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[32px] min-h-px min-w-px relative shrink-0 text-[24px] text-neutral-950">📷</p>
      </div>
    </div>
  );
}

function Container93() {
  return (
    <div className="bg-white h-[76.875px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex h-[76.875px] items-center justify-center p-[1.333px] relative w-full">
          <Container92 />
        </div>
      </div>
    </div>
  );
}

function Container94() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[12px] text-center text-neutral-950">[LIBRARY]</p>
    </div>
  );
}

function Button10() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[8px] h-[124.875px] items-start left-[690.67px] pb-[4px] pt-[12px] px-[12px] top-0 w-[160.667px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <Container93 />
      <Container94 />
    </div>
  );
}

function Container95() {
  return (
    <div className="h-[32px] relative shrink-0 w-[32.958px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[32px] items-start relative w-[32.958px]">
        <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[32px] min-h-px min-w-px relative shrink-0 text-[24px] text-neutral-950">📷</p>
      </div>
    </div>
  );
}

function Container96() {
  return (
    <div className="bg-white h-[76.875px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex h-[76.875px] items-center justify-center p-[1.333px] relative w-full">
          <Container95 />
        </div>
      </div>
    </div>
  );
}

function Container97() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[12px] text-center text-neutral-950">[CLASSROOM]</p>
    </div>
  );
}

function Button11() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[8px] h-[124.875px] items-start left-[863.33px] pb-[4px] pt-[12px] px-[12px] top-0 w-[160.667px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <Container96 />
      <Container97 />
    </div>
  );
}

function Container98() {
  return (
    <div className="h-[124.875px] relative shrink-0 w-full" data-name="Container">
      <Button6 />
      <Button7 />
      <Button8 />
      <Button9 />
      <Button10 />
      <Button11 />
    </div>
  );
}

function Container99() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[821.375px] items-start left-[232px] top-[88px] w-[1024px]" data-name="Container">
      <Container79 />
      <Container98 />
    </div>
  );
}

function Container100() {
  return (
    <div className="absolute h-[909.375px] left-[24px] top-[1464px] w-[1488px]" data-name="Container">
      <Container70 />
      <Container99 />
    </div>
  );
}

function Container101() {
  return (
    <div className="absolute h-[2485.38px] left-[317.33px] top-[322.67px] w-[1536px]" data-name="Container">
      <Container17 />
      <Container69 />
      <Container100 />
    </div>
  );
}

function Container102() {
  return (
    <div className="h-[42.667px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[135.27px] text-[16px] text-center text-neutral-950 text-nowrap top-[7.67px] translate-x-[-50%] whitespace-pre">📍 ADDRESS</p>
    </div>
  );
}

function Container103() {
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

function Container104() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[16px] h-[246.667px] items-start left-0 pb-[4px] pt-[28px] px-[28px] top-0 w-[325.333px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <Container102 />
      <Container103 />
    </div>
  );
}

function Container105() {
  return (
    <div className="h-[42.667px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[135.44px] text-[16px] text-center text-neutral-950 text-nowrap top-[7.67px] translate-x-[-50%] whitespace-pre">📞 CONTACT</p>
    </div>
  );
}

function Container106() {
  return (
    <div className="h-[38.667px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[135.65px] text-[14px] text-center text-neutral-950 text-nowrap top-[7.33px] translate-x-[-50%] whitespace-pre">📧 info@sionedu.com</p>
    </div>
  );
}

function Container107() {
  return (
    <div className="h-[38.667px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[134.69px] text-[14px] text-center text-neutral-950 text-nowrap top-[7.33px] translate-x-[-50%] whitespace-pre">☎️ (021) 1234-5678</p>
    </div>
  );
}

function Container108() {
  return (
    <div className="h-[38.667px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[135.27px] text-[14px] text-center text-neutral-950 text-nowrap top-[7.33px] translate-x-[-50%] whitespace-pre">💬 +62 812-3456-7890</p>
    </div>
  );
}

function Container109() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[132px] items-start relative shrink-0 w-full" data-name="Container">
      <Container106 />
      <Container107 />
      <Container108 />
    </div>
  );
}

function Container110() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[16px] h-[246.667px] items-start left-[349.33px] pb-[4px] pt-[28px] px-[28px] top-0 w-[325.333px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <Container105 />
      <Container109 />
    </div>
  );
}

function Container111() {
  return (
    <div className="h-[42.667px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[135.54px] text-[16px] text-center text-neutral-950 text-nowrap top-[7.67px] translate-x-[-50%] whitespace-pre">🔗 FOLLOW US</p>
    </div>
  );
}

function Container112() {
  return (
    <div className="h-[38.667px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[135.02px] text-[14px] text-center text-neutral-950 text-nowrap top-[7.33px] translate-x-[-50%] whitespace-pre">📷 @sion.education</p>
    </div>
  );
}

function Container113() {
  return (
    <div className="h-[38.667px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[135.1px] text-[14px] text-center text-neutral-950 text-nowrap top-[7.33px] translate-x-[-50%] whitespace-pre">🌐 facebook.com/sionedu</p>
    </div>
  );
}

function Container114() {
  return (
    <div className="h-[38.667px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[134.48px] text-[14px] text-center text-neutral-950 text-nowrap top-[7.33px] translate-x-[-50%] whitespace-pre">🎥 youtube.com/sionedu</p>
    </div>
  );
}

function Container115() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[132px] items-start relative shrink-0 w-full" data-name="Container">
      <Container112 />
      <Container113 />
      <Container114 />
    </div>
  );
}

function Container116() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[16px] h-[246.667px] items-start left-[698.67px] pb-[4px] pt-[28px] px-[28px] top-0 w-[325.333px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <Container111 />
      <Container115 />
    </div>
  );
}

function Container117() {
  return (
    <div className="absolute h-[246.667px] left-[256px] top-0 w-[1024px]" data-name="Container">
      <Container104 />
      <Container110 />
      <Container116 />
    </div>
  );
}

function Container118() {
  return (
    <div className="absolute bg-white h-[42.667px] left-[567.52px] top-[25.33px] w-[352.958px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[176.33px] text-[16px] text-center text-neutral-950 text-nowrap top-[7.67px] translate-x-[-50%] whitespace-pre">© 2025 SION Education - All Rights Reserved</p>
    </div>
  );
}

function Container119() {
  return (
    <div className="absolute h-[114.667px] left-[24px] top-[278.67px] w-[1488px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px_0px_0px] border-black border-solid inset-0 pointer-events-none" />
      <Container118 />
    </div>
  );
}

function Container120() {
  return (
    <div className="h-[393.333px] relative shrink-0 w-full" data-name="Container">
      <Container117 />
      <Container119 />
    </div>
  );
}

function PublicFooter() {
  return (
    <div className="absolute bg-gray-100 box-border content-stretch flex flex-col h-[461.333px] items-start left-0 pb-0 pt-[36px] px-[317.333px] top-[2872.04px] w-[2170.67px]" data-name="PublicFooter">
      <div aria-hidden="true" className="absolute border-[4px_0px_0px] border-black border-solid inset-0 pointer-events-none" />
      <Container120 />
    </div>
  );
}

function AboutUs() {
  return (
    <div className="bg-white h-[3333.38px] relative shrink-0 w-full" data-name="AboutUs">
      <Container6 />
      <Container10 />
      <Container101 />
      <PublicFooter />
    </div>
  );
}

function App() {
  return (
    <div className="absolute bg-gray-50 box-border content-stretch flex flex-col h-[3381.38px] items-start left-0 pb-0 pt-[48px] px-0 top-0 w-[2170.67px]" data-name="App">
      <AboutUs />
    </div>
  );
}

export default function AboutUs1() {
  return (
    <div className="bg-white relative size-full" data-name="About Us">
      <App />
    </div>
  );
}
