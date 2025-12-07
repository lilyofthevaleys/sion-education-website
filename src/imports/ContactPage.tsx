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
    <div className="basis-0 grow h-[48px] min-h-px min-w-px relative shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[48px] relative w-full">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[17.33px] text-[16px] text-neutral-950 text-nowrap top-[10.33px] whitespace-pre">[ABOUT US]</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-black h-[48px] relative shrink-0 w-[118.75px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[48px] relative w-[118.75px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[20px] text-[16px] text-nowrap text-white top-[10.33px] whitespace-pre">[CONTACT]</p>
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
    <div className="absolute h-[40px] left-[32px] top-[32px] w-[824px]" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[40px] left-[412.27px] text-[36px] text-center text-neutral-950 text-nowrap top-[-3px] translate-x-[-50%] whitespace-pre">📞</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute h-[64px] left-[338.19px] top-[88px] w-[211.625px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[106px] text-[16px] text-center text-neutral-950 text-nowrap top-[18.33px] translate-x-[-50%] whitespace-pre">GET IN TOUCH WITH US</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute h-[58.667px] left-[108px] top-[168px] w-[672px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[336.52px] text-[16px] text-center text-neutral-950 text-nowrap top-[15.67px] translate-x-[-50%] whitespace-pre">{`We're here to help! Send us a message or visit our location`}</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[258.667px] relative shrink-0 w-full" data-name="Container">
      <Container7 />
      <Container8 />
      <Container9 />
    </div>
  );
}

function Container11() {
  return (
    <div className="bg-white h-[266.667px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[266.667px] items-start p-[4px] relative w-full">
          <Container10 />
        </div>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute bg-green-50 box-border content-stretch flex flex-col h-[366.667px] items-start left-0 pb-[4px] pt-[48px] px-[637.333px] top-[84px] w-[2170.67px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_4px] border-black border-solid inset-0 pointer-events-none" />
      <Container11 />
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute h-[56px] left-0 top-0 w-[1488px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[744.58px] text-[16px] text-center text-neutral-950 text-nowrap top-[14.33px] translate-x-[-50%] whitespace-pre">OUR LOCATION</p>
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[42.667px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[348.15px] text-[16px] text-center text-neutral-950 text-nowrap top-[7.67px] translate-x-[-50%] whitespace-pre">TUITION CENTER</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[42.667px] relative shrink-0 w-[40.646px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[42.667px] relative w-[40.646px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[9.33px] text-[16px] text-neutral-950 text-nowrap top-[7.67px] whitespace-pre">📍</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[14px] text-neutral-950">Address:</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[122.667px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[13.33px] text-[16px] text-neutral-950 text-nowrap top-[11.67px] whitespace-pre">Jl. Pendidikan No. 123</p>
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[13.33px] text-[16px] text-neutral-950 text-nowrap top-[35.67px] whitespace-pre">Kebayoran Baru</p>
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[13.33px] text-[16px] text-neutral-950 text-nowrap top-[59.67px] whitespace-pre">Jakarta Selatan 12345</p>
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[13.33px] text-[16px] text-neutral-950 text-nowrap top-[83.67px] whitespace-pre">Indonesia</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="basis-0 grow h-[146.667px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[146.667px] items-start relative w-full">
        <Container16 />
        <Container17 />
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex gap-[12px] h-[146.667px] items-start relative shrink-0 w-full" data-name="Container">
      <Container15 />
      <Container18 />
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[42.667px] relative shrink-0 w-[40.646px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[42.667px] relative w-[40.646px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[9.33px] text-[16px] text-neutral-950 text-nowrap top-[7.67px] whitespace-pre">🕐</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[14px] text-neutral-950">Operating Hours:</p>
    </div>
  );
}

function Container22() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-neutral-950 text-nowrap top-[-1.67px] whitespace-pre">Mon - Fri: 9:00 AM - 8:00 PM</p>
    </div>
  );
}

function Container23() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-neutral-950 text-nowrap top-[-1.67px] whitespace-pre">Saturday: 9:00 AM - 5:00 PM</p>
    </div>
  );
}

function Container24() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-neutral-950 text-nowrap top-[-1.67px] whitespace-pre">Sunday: Closed</p>
    </div>
  );
}

function Container25() {
  return (
    <div className="h-[106.667px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] h-[106.667px] items-start pb-[1.333px] pt-[13.333px] px-[13.333px] relative w-full">
          <Container22 />
          <Container23 />
          <Container24 />
        </div>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="basis-0 grow h-[130.667px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[130.667px] items-start relative w-full">
        <Container21 />
        <Container25 />
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex gap-[12px] h-[130.667px] items-start relative shrink-0 w-full" data-name="Container">
      <Container20 />
      <Container26 />
    </div>
  );
}

function Container28() {
  return (
    <div className="h-[42.667px] relative shrink-0 w-[40.646px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[42.667px] relative w-[40.646px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[9.33px] text-[16px] text-neutral-950 text-nowrap top-[7.67px] whitespace-pre">🚗</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[14px] text-neutral-950">Parking:</p>
    </div>
  );
}

function Container30() {
  return (
    <div className="h-[50.667px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[13.33px] text-[16px] text-neutral-950 text-nowrap top-[11.67px] whitespace-pre">Free parking available for students and visitors</p>
    </div>
  );
}

function Container31() {
  return (
    <div className="basis-0 grow h-[74.667px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[74.667px] items-start relative w-full">
        <Container29 />
        <Container30 />
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex gap-[12px] h-[74.667px] items-start relative shrink-0 w-full" data-name="Container">
      <Container28 />
      <Container31 />
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[384px] items-start relative shrink-0 w-full" data-name="Container">
      <Container19 />
      <Container27 />
      <Container32 />
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-black h-[64px] relative shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[20px] text-[16px] text-nowrap text-white top-[18.33px] whitespace-pre">[GET DIRECTIONS] →</p>
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[24px] h-[610.667px] items-start left-[360px] pb-[4px] pt-[36px] px-[36px] top-[88px] w-[768px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <Container14 />
      <Container33 />
      <Button4 />
    </div>
  );
}

function Container35() {
  return (
    <div className="h-[698.667px] relative shrink-0 w-full" data-name="Container">
      <Container13 />
      <Container34 />
    </div>
  );
}

function Container36() {
  return (
    <div className="absolute h-[56px] left-0 top-0 w-[1488px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[744.85px] text-[16px] text-center text-neutral-950 text-nowrap top-[14.33px] translate-x-[-50%] whitespace-pre">SEND US A MESSAGE</p>
    </div>
  );
}

function Container37() {
  return (
    <div className="h-[32px] relative shrink-0 w-[32.958px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[32px] items-start relative w-[32.958px]">
        <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[32px] min-h-px min-w-px relative shrink-0 text-[24px] text-neutral-950">💡</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="h-[20px] relative shrink-0 w-[397.604px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20px] items-start relative w-[397.604px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">{`Fill out the form below and we'll get back to you within 24 hours`}</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex gap-[12px] h-[32px] items-start relative shrink-0 w-full" data-name="Container">
      <Container37 />
      <Container38 />
    </div>
  );
}

function Container40() {
  return (
    <div className="bg-blue-50 h-[72px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-[#155dfc] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[72px] items-start pb-[4px] pt-[20px] px-[20px] relative w-full">
          <Container39 />
        </div>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-neutral-950 text-nowrap top-[-1.67px] whitespace-pre">[Full Name *]</p>
    </div>
  );
}

function TextInput() {
  return (
    <div className="h-[50.667px] relative shrink-0 w-full" data-name="Text Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[50.667px] items-center p-[12px] relative w-full">
          <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-[rgba(10,10,10,0.5)] text-nowrap whitespace-pre">_________________</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container42() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex flex-col gap-[8px] h-[82.667px] items-start relative shrink-0" data-name="Container">
      <Container41 />
      <TextInput />
    </div>
  );
}

function Container43() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-neutral-950 text-nowrap top-[-1.67px] whitespace-pre">[Email *]</p>
    </div>
  );
}

function EmailInput() {
  return (
    <div className="h-[50.667px] relative shrink-0 w-full" data-name="Email Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[50.667px] items-center p-[12px] relative w-full">
          <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-[rgba(10,10,10,0.5)] text-nowrap whitespace-pre">_________________</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container44() {
  return (
    <div className="[grid-area:1_/_2] content-stretch flex flex-col gap-[8px] h-[82.667px] items-start relative shrink-0" data-name="Container">
      <Container43 />
      <EmailInput />
    </div>
  );
}

function Container45() {
  return (
    <div className="absolute gap-[16px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[82.667px] left-0 top-0 w-[696px]" data-name="Container">
      <Container42 />
      <Container44 />
    </div>
  );
}

function Container46() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-neutral-950 text-nowrap top-[-1.67px] whitespace-pre">[Phone Number]</p>
    </div>
  );
}

function PhoneInput() {
  return (
    <div className="h-[50.667px] relative shrink-0 w-full" data-name="Phone Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[50.667px] items-center p-[12px] relative w-full">
          <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-[rgba(10,10,10,0.5)] text-nowrap whitespace-pre">_________________</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container47() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex flex-col gap-[8px] h-[82.667px] items-start relative shrink-0" data-name="Container">
      <Container46 />
      <PhoneInput />
    </div>
  );
}

function Container48() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-neutral-950 text-nowrap top-[-1.67px] whitespace-pre">[Subject *]</p>
    </div>
  );
}

function EmailInput1() {
  return (
    <div className="h-[50.667px] relative shrink-0 w-full" data-name="Email Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[50.667px] items-center p-[12px] relative w-full">
          <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-[rgba(10,10,10,0.5)] text-nowrap whitespace-pre">_________________</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container49() {
  return (
    <div className="[grid-area:1_/_2] content-stretch flex flex-col gap-[8px] h-[82.667px] items-start relative shrink-0" data-name="Container">
      <Container48 />
      <EmailInput1 />
    </div>
  );
}

function Container50() {
  return (
    <div className="absolute gap-[16px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[82.667px] left-0 top-[106.67px] w-[696px]" data-name="Container">
      <Container47 />
      <Container49 />
    </div>
  );
}

function Container51() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-neutral-950 text-nowrap top-[-1.67px] whitespace-pre">[Message *]</p>
    </div>
  );
}

function TextArea() {
  return (
    <div className="h-[170.667px] relative shrink-0 w-full" data-name="Text Area">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[170.667px] items-start p-[12px] relative w-full">
          <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-[rgba(10,10,10,0.5)] text-nowrap whitespace-pre">Type your message here...</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container52() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[208px] items-start left-0 top-[213.33px] w-[696px]" data-name="Container">
      <Container51 />
      <TextArea />
    </div>
  );
}

function Checkbox() {
  return <div className="absolute left-0 size-[16px] top-[4px]" data-name="Checkbox" />;
}

function Container53() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[28px] top-0 w-[346.417px]" data-name="Container">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">I agree to receive communications from SION Education</p>
    </div>
  );
}

function Container54() {
  return (
    <div className="absolute h-[20px] left-0 top-[445.33px] w-[696px]" data-name="Container">
      <Checkbox />
      <Container53 />
    </div>
  );
}

function Button5() {
  return (
    <div className="basis-0 bg-black grow h-[64px] min-h-px min-w-px relative shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[64px] relative w-full">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[20px] text-[16px] text-nowrap text-white top-[18.33px] whitespace-pre">[SEND MESSAGE] →</p>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="h-[64px] relative shrink-0 w-[101.438px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[64px] relative w-[101.438px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[28px] text-[16px] text-neutral-950 text-nowrap top-[18.33px] whitespace-pre">CLEAR</p>
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[64px] items-start left-0 top-[489.33px] w-[696px]" data-name="Container">
      <Button5 />
      <Button6 />
    </div>
  );
}

function Form() {
  return (
    <div className="h-[553.333px] relative shrink-0 w-full" data-name="Form">
      <Container45 />
      <Container50 />
      <Container52 />
      <Container54 />
      <Container55 />
    </div>
  );
}

function Container56() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[24px] h-[721.333px] items-start left-[360px] pb-[4px] pt-[36px] px-[36px] top-[88px] w-[768px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <Container40 />
      <Form />
    </div>
  );
}

function Container57() {
  return (
    <div className="h-[809.333px] relative shrink-0 w-full" data-name="Container">
      <Container36 />
      <Container56 />
    </div>
  );
}

function Container58() {
  return (
    <div className="absolute h-[56px] left-0 top-[52px] w-[1488px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[743.88px] text-[16px] text-center text-neutral-950 text-nowrap top-[14.33px] translate-x-[-50%] whitespace-pre">FREQUENTLY ASKED</p>
    </div>
  );
}

function Container59() {
  return (
    <div className="h-[34.667px] relative shrink-0 w-[42.208px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[34.667px] relative w-[42.208px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[13.33px] text-[16px] text-neutral-950 text-nowrap top-[3.67px] whitespace-pre">Q:</p>
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="h-[24px] relative shrink-0 w-[255.125px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[255.125px]">
        <p className="absolute font-['Cousine:Regular',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-[-0.33px] whitespace-pre">What are your response times?</p>
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="content-stretch flex gap-[12px] h-[34.667px] items-start relative shrink-0 w-full" data-name="Container">
      <Container59 />
      <Container60 />
    </div>
  );
}

function Container62() {
  return (
    <div className="h-[34.667px] relative shrink-0 w-[40.458px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[34.667px] relative w-[40.458px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[13.33px] text-[16px] text-neutral-950 text-nowrap top-[3.67px] whitespace-pre">A:</p>
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="basis-0 grow h-[74.667px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[74.667px] relative w-full">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[13.33px] text-[16px] text-neutral-950 top-[11.67px] w-[615px]">We typically respond to emails within 24 hours and WhatsApp messages within 2 hours during business hours.</p>
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="box-border content-stretch flex gap-[12px] h-[88px] items-start pb-0 pt-[13.333px] px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px_0px_0px] border-black border-solid inset-0 pointer-events-none" />
      <Container62 />
      <Container63 />
    </div>
  );
}

function Container65() {
  return (
    <div className="h-[190.667px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[12px] h-[190.667px] items-start pb-[4px] pt-[28px] px-[28px] relative w-full">
          <Container61 />
          <Container64 />
        </div>
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="h-[34.667px] relative shrink-0 w-[42.208px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[34.667px] relative w-[42.208px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[13.33px] text-[16px] text-neutral-950 text-nowrap top-[3.67px] whitespace-pre">Q:</p>
      </div>
    </div>
  );
}

function Container67() {
  return (
    <div className="h-[24px] relative shrink-0 w-[272.708px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[272.708px]">
        <p className="absolute font-['Cousine:Regular',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-[-0.33px] whitespace-pre">Can I visit the tuition center?</p>
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div className="content-stretch flex gap-[12px] h-[34.667px] items-start relative shrink-0 w-full" data-name="Container">
      <Container66 />
      <Container67 />
    </div>
  );
}

function Container69() {
  return (
    <div className="h-[34.667px] relative shrink-0 w-[40.458px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[34.667px] relative w-[40.458px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[13.33px] text-[16px] text-neutral-950 text-nowrap top-[3.67px] whitespace-pre">A:</p>
      </div>
    </div>
  );
}

function Container70() {
  return (
    <div className="basis-0 grow h-[50.667px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[50.667px] relative w-full">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[13.33px] text-[16px] text-neutral-950 text-nowrap top-[11.67px] whitespace-pre">Yes! We welcome visits by appointment. Please contact us to schedule a tour.</p>
      </div>
    </div>
  );
}

function Container71() {
  return (
    <div className="box-border content-stretch flex gap-[12px] h-[64px] items-start pb-0 pt-[13.333px] px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px_0px_0px] border-black border-solid inset-0 pointer-events-none" />
      <Container69 />
      <Container70 />
    </div>
  );
}

function Container72() {
  return (
    <div className="h-[166.667px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[12px] h-[166.667px] items-start pb-[4px] pt-[28px] px-[28px] relative w-full">
          <Container68 />
          <Container71 />
        </div>
      </div>
    </div>
  );
}

function Container73() {
  return (
    <div className="h-[34.667px] relative shrink-0 w-[42.208px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[34.667px] relative w-[42.208px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[13.33px] text-[16px] text-neutral-950 text-nowrap top-[3.67px] whitespace-pre">Q:</p>
      </div>
    </div>
  );
}

function Container74() {
  return (
    <div className="h-[24px] relative shrink-0 w-[299.104px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[299.104px]">
        <p className="absolute font-['Cousine:Regular',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-[-0.33px] whitespace-pre">Do you offer online consultations?</p>
      </div>
    </div>
  );
}

function Container75() {
  return (
    <div className="content-stretch flex gap-[12px] h-[34.667px] items-start relative shrink-0 w-full" data-name="Container">
      <Container73 />
      <Container74 />
    </div>
  );
}

function Container76() {
  return (
    <div className="h-[34.667px] relative shrink-0 w-[40.458px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[34.667px] relative w-[40.458px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[13.33px] text-[16px] text-neutral-950 text-nowrap top-[3.67px] whitespace-pre">A:</p>
      </div>
    </div>
  );
}

function Container77() {
  return (
    <div className="basis-0 grow h-[50.667px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[50.667px] relative w-full">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[13.33px] text-[16px] text-neutral-950 text-nowrap top-[11.67px] whitespace-pre">Absolutely! We can arrange video calls via Zoom or Google Meet.</p>
      </div>
    </div>
  );
}

function Container78() {
  return (
    <div className="box-border content-stretch flex gap-[12px] h-[64px] items-start pb-0 pt-[13.333px] px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px_0px_0px] border-black border-solid inset-0 pointer-events-none" />
      <Container76 />
      <Container77 />
    </div>
  );
}

function Container79() {
  return (
    <div className="h-[166.667px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[12px] h-[166.667px] items-start pb-[4px] pt-[28px] px-[28px] relative w-full">
          <Container75 />
          <Container78 />
        </div>
      </div>
    </div>
  );
}

function Container80() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[556px] items-start left-[360px] top-[140px] w-[768px]" data-name="Container">
      <Container65 />
      <Container72 />
      <Container79 />
    </div>
  );
}

function Container81() {
  return (
    <div className="h-[696px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[4px_0px_0px] border-black border-solid inset-0 pointer-events-none" />
      <Container58 />
      <Container80 />
    </div>
  );
}

function Container82() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[64px] h-[2428px] items-start left-[317.33px] pb-0 pt-[48px] px-[24px] top-[450.67px] w-[1536px]" data-name="Container">
      <Container35 />
      <Container57 />
      <Container81 />
    </div>
  );
}

function Container83() {
  return (
    <div className="h-[42.667px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[135.27px] text-[16px] text-center text-neutral-950 text-nowrap top-[7.67px] translate-x-[-50%] whitespace-pre">📍 ADDRESS</p>
    </div>
  );
}

function Container84() {
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

function Container85() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[16px] h-[246.667px] items-start left-0 pb-[4px] pt-[28px] px-[28px] top-0 w-[325.333px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <Container83 />
      <Container84 />
    </div>
  );
}

function Container86() {
  return (
    <div className="h-[42.667px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[135.44px] text-[16px] text-center text-neutral-950 text-nowrap top-[7.67px] translate-x-[-50%] whitespace-pre">📞 CONTACT</p>
    </div>
  );
}

function Container87() {
  return (
    <div className="h-[38.667px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[135.65px] text-[14px] text-center text-neutral-950 text-nowrap top-[7.33px] translate-x-[-50%] whitespace-pre">📧 info@sionedu.com</p>
    </div>
  );
}

function Container88() {
  return (
    <div className="h-[38.667px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[134.69px] text-[14px] text-center text-neutral-950 text-nowrap top-[7.33px] translate-x-[-50%] whitespace-pre">☎️ (021) 1234-5678</p>
    </div>
  );
}

function Container89() {
  return (
    <div className="h-[38.667px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[135.27px] text-[14px] text-center text-neutral-950 text-nowrap top-[7.33px] translate-x-[-50%] whitespace-pre">💬 +62 812-3456-7890</p>
    </div>
  );
}

function Container90() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[132px] items-start relative shrink-0 w-full" data-name="Container">
      <Container87 />
      <Container88 />
      <Container89 />
    </div>
  );
}

function Container91() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[16px] h-[246.667px] items-start left-[349.33px] pb-[4px] pt-[28px] px-[28px] top-0 w-[325.333px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <Container86 />
      <Container90 />
    </div>
  );
}

function Container92() {
  return (
    <div className="h-[42.667px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[135.54px] text-[16px] text-center text-neutral-950 text-nowrap top-[7.67px] translate-x-[-50%] whitespace-pre">🔗 FOLLOW US</p>
    </div>
  );
}

function Container93() {
  return (
    <div className="h-[38.667px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[135.02px] text-[14px] text-center text-neutral-950 text-nowrap top-[7.33px] translate-x-[-50%] whitespace-pre">📷 @sion.education</p>
    </div>
  );
}

function Container94() {
  return (
    <div className="h-[38.667px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[135.1px] text-[14px] text-center text-neutral-950 text-nowrap top-[7.33px] translate-x-[-50%] whitespace-pre">🌐 facebook.com/sionedu</p>
    </div>
  );
}

function Container95() {
  return (
    <div className="h-[38.667px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[134.48px] text-[14px] text-center text-neutral-950 text-nowrap top-[7.33px] translate-x-[-50%] whitespace-pre">🎥 youtube.com/sionedu</p>
    </div>
  );
}

function Container96() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[132px] items-start relative shrink-0 w-full" data-name="Container">
      <Container93 />
      <Container94 />
      <Container95 />
    </div>
  );
}

function Container97() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[16px] h-[246.667px] items-start left-[698.67px] pb-[4px] pt-[28px] px-[28px] top-0 w-[325.333px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <Container92 />
      <Container96 />
    </div>
  );
}

function Container98() {
  return (
    <div className="absolute h-[246.667px] left-[256px] top-0 w-[1024px]" data-name="Container">
      <Container85 />
      <Container91 />
      <Container97 />
    </div>
  );
}

function Container99() {
  return (
    <div className="absolute bg-white h-[42.667px] left-[567.52px] top-[25.33px] w-[352.958px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[176.33px] text-[16px] text-center text-neutral-950 text-nowrap top-[7.67px] translate-x-[-50%] whitespace-pre">© 2025 SION Education - All Rights Reserved</p>
    </div>
  );
}

function Container100() {
  return (
    <div className="absolute h-[114.667px] left-[24px] top-[278.67px] w-[1488px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px_0px_0px] border-black border-solid inset-0 pointer-events-none" />
      <Container99 />
    </div>
  );
}

function Container101() {
  return (
    <div className="h-[393.333px] relative shrink-0 w-full" data-name="Container">
      <Container98 />
      <Container100 />
    </div>
  );
}

function PublicFooter() {
  return (
    <div className="absolute bg-gray-100 box-border content-stretch flex flex-col h-[461.333px] items-start left-0 pb-0 pt-[36px] px-[317.333px] top-[2942.67px] w-[2170.67px]" data-name="PublicFooter">
      <div aria-hidden="true" className="absolute border-[4px_0px_0px] border-black border-solid inset-0 pointer-events-none" />
      <Container101 />
    </div>
  );
}

function Contact() {
  return (
    <div className="bg-white h-[3404px] relative shrink-0 w-[2170.67px]" data-name="Contact">
      <Container6 />
      <Container12 />
      <Container82 />
      <PublicFooter />
    </div>
  );
}

function App() {
  return (
    <div className="absolute bg-gray-50 box-border content-stretch flex flex-col h-[3452px] items-start left-0 pb-0 pt-[48px] px-0 top-0" data-name="App">
      <Contact />
    </div>
  );
}

export default function ContactPage() {
  return (
    <div className="bg-white relative size-full" data-name="Contact Page">
      <App />
    </div>
  );
}