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
    <div className="h-[34.667px] relative shrink-0 w-[272.583px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[34.667px] relative w-[272.583px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[13.33px] text-[16px] text-neutral-950 text-nowrap top-[3.67px] whitespace-pre">PENDING TEACHER APPLICATIONS</p>
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
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[32px] min-h-px min-w-px relative shrink-0 text-[24px] text-white">⚠ PENDING TEACHER APPLICATIONS</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-nowrap text-white top-[-1.67px] whitespace-pre">Review qualifications and schedule interviews</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute bg-[#d08700] box-border content-stretch flex flex-col gap-[8px] h-[120px] items-start left-[24px] pb-[4px] pt-[28px] px-[28px] top-[32px] w-[1488px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <Container3 />
      <Container4 />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex h-[36px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Cousine:Regular',sans-serif] grow leading-[36px] min-h-px min-w-px not-italic relative shrink-0 text-[30px] text-neutral-950">5</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[14px] text-neutral-950">Total Pending</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute bg-yellow-50 box-border content-stretch flex flex-col gap-[8px] h-[104px] items-start left-0 pb-[4px] pt-[20px] px-[20px] top-0 w-[284.792px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-[#d08700] border-solid inset-0 pointer-events-none" />
      <Container6 />
      <Container7 />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex h-[36px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Cousine:Regular',sans-serif] grow leading-[36px] min-h-px min-w-px not-italic relative shrink-0 text-[30px] text-neutral-950">3</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[14px] text-neutral-950">Need Review</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[8px] h-[104px] items-start left-[300.79px] pb-[4px] pt-[20px] px-[20px] top-0 w-[284.792px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <Container9 />
      <Container10 />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex h-[36px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Cousine:Regular',sans-serif] grow leading-[36px] min-h-px min-w-px not-italic relative shrink-0 text-[30px] text-neutral-950">2</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[14px] text-neutral-950">Interview Scheduled</p>
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[8px] h-[104px] items-start left-[601.58px] pb-[4px] pt-[20px] px-[20px] top-0 w-[284.813px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <Container12 />
      <Container13 />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex h-[36px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Cousine:Regular',sans-serif] grow leading-[36px] min-h-px min-w-px not-italic relative shrink-0 text-[30px] text-neutral-950">93%</p>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[14px] text-neutral-950">Avg Test Score</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[8px] h-[104px] items-start left-[902.4px] pb-[4px] pt-[20px] px-[20px] top-0 w-[284.792px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <Container15 />
      <Container16 />
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex h-[36px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Cousine:Regular',sans-serif] grow leading-[36px] min-h-px min-w-px not-italic relative shrink-0 text-[30px] text-neutral-950">11</p>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[14px] text-neutral-950">Avg Experience</p>
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[8px] h-[104px] items-start left-[1203.19px] pb-[4px] pt-[20px] px-[20px] top-0 w-[284.813px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <Container18 />
      <Container19 />
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute h-[104px] left-[24px] top-[176px] w-[1488px]" data-name="Container">
      <Container8 />
      <Container11 />
      <Container14 />
      <Container17 />
      <Container20 />
    </div>
  );
}

function SearchInput() {
  return (
    <div className="absolute h-[56px] left-0 top-0 w-[865.333px]" data-name="Search Input">
      <div className="box-border content-stretch flex h-[56px] items-center overflow-clip px-[16px] py-[12px] relative rounded-[inherit] w-[865.333px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-[rgba(10,10,10,0.5)] text-nowrap whitespace-pre">[Search by name, email, subject...]</p>
      </div>
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Dropdown() {
  return (
    <div className="absolute h-[56px] left-[881.33px] top-0 w-[193.333px]" data-name="Dropdown">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="h-[56px] w-[193.333px]" />
      </div>
    </div>
  );
}

function Dropdown1() {
  return (
    <div className="absolute h-[56px] left-[1090.67px] top-0 w-[190.667px]" data-name="Dropdown">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Dropdown2() {
  return (
    <div className="absolute h-[56px] left-[1297.33px] top-0 w-[190.667px]" data-name="Dropdown">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute h-[56px] left-[24px] top-[304px] w-[1488px]" data-name="Container">
      <SearchInput />
      <Dropdown />
      <Dropdown1 />
      <Dropdown2 />
    </div>
  );
}

function Container23() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Cousine:Regular',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-[-0.33px] whitespace-pre">🔥 HIGH PRIORITY APPLICATIONS</p>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Excellent candidates with 95%+ test scores or 10+ years experience</p>
    </div>
  );
}

function Container25() {
  return (
    <div className="h-[48px] relative shrink-0 w-[415.25px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[48px] items-start relative w-[415.25px]">
        <Container23 />
        <Container24 />
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="h-[32px] relative shrink-0 w-[158.375px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[32px] relative w-[158.375px]">
        <p className="absolute font-['Cousine:Regular',sans-serif] h-[69px] leading-[32px] left-[0.04px] not-italic text-[24px] text-neutral-950 top-[-0.67px] w-[176px]">3 candidates</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex h-[48px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container25 />
      <Container26 />
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute bg-red-50 box-border content-stretch flex flex-col h-[88px] items-start left-[24px] pb-[4px] pt-[20px] px-[20px] top-[384px] w-[1488px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-[#e7000b] border-solid inset-0 pointer-events-none" />
      <Container27 />
    </div>
  );
}

function Container29() {
  return (
    <div className="relative rounded-[4.47392e+07px] shrink-0 size-[64px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none rounded-[4.47392e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[64px]" />
    </div>
  );
}

function Container30() {
  return (
    <div className="h-[28px] relative shrink-0 w-[197.938px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[28px] relative w-[197.938px]">
        <p className="absolute font-['Cousine:Regular',sans-serif] leading-[28px] left-0 not-italic text-[18px] text-neutral-950 text-nowrap top-0 whitespace-pre">Dr. Michael Anderson</p>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[28px] relative shrink-0 w-[27.479px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[28px] w-[27.479px]" />
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex gap-[8px] h-[28px] items-center relative shrink-0 w-full" data-name="Container">
      <Container30 />
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <p className="font-['Arimo:Regular',sans-serif] font-normal h-[29px] leading-[28px] relative text-[20px] text-neutral-950 w-[45px]">🔥</p>
        </div>
      </div>
      <Text />
    </div>
  );
}

function Container32() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal h-[45px] leading-[20px] left-[-0.33px] text-[14px] text-neutral-950 top-[-1.67px] w-[278px]">Advanced Mathematics • Grades 10-12</p>
    </div>
  );
}

function Container33() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal h-[42px] leading-[20px] left-[-0.33px] text-[14px] text-neutral-950 top-[-1.67px] w-[173px]">Applied: Nov 4, 2024</p>
    </div>
  );
}

function Text1() {
  return (
    <div className="absolute h-[26.667px] left-0 top-0 w-[78.25px]" data-name="Text">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal h-[33px] leading-[16px] left-[9.67px] text-[12px] text-neutral-950 top-[4.33px] w-[77px]">10 YRS EXP</p>
    </div>
  );
}

function Text2() {
  return (
    <div className="absolute bg-green-100 h-[26.667px] left-[86.25px] top-0 w-[78.083px]" data-name="Text">
      <div aria-hidden="true" className="absolute border-[#00a63e] border-[1.333px] border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Cousine:Regular',sans-serif] h-[29px] leading-[16px] left-[9.42px] not-italic text-[12px] text-neutral-950 top-[5.33px] w-[69px]">TEST: 97%</p>
    </div>
  );
}

function Container34() {
  return (
    <div className="h-[26.667px] relative shrink-0 w-full" data-name="Container">
      <Text1 />
      <Text2 />
    </div>
  );
}

function Container35() {
  return (
    <div className="h-[110.667px] relative shrink-0 w-[447.958px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[110.667px] items-start relative w-[447.958px]">
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
    <div className="h-[110.667px] relative shrink-0 w-[527.958px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[16px] h-[110.667px] items-start relative w-[527.958px]">
        <Container29 />
        <Container35 />
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-black h-[42.667px] relative shrink-0 w-[210.333px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[42.667px] relative w-[210.333px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[17.33px] text-[16px] text-nowrap text-white top-[7.67px] whitespace-pre">VIEW FULL APPLICATION</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex h-[110.667px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container36 />
      <Button1 />
    </div>
  );
}

function Container38() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-0 top-0 w-[708px]" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[12px] text-neutral-950">[CONTACT]</p>
    </div>
  );
}

function Container39() {
  return (
    <div className="absolute h-[20px] left-0 top-[20px] w-[708px]" data-name="Container">
      <p className="absolute font-['Cousine:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-[-0.67px] whitespace-pre">michael.a@email.com</p>
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute h-[20px] left-0 top-[40px] w-[708px]" data-name="Container">
      <p className="absolute font-['Cousine:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-[-0.67px] whitespace-pre">555-3001</p>
    </div>
  );
}

function Container41() {
  return (
    <div className="absolute h-[20px] left-0 top-[64px] w-[708px]" data-name="Container">
      <p className="absolute font-['Cousine:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-[-0.67px] whitespace-pre">Mon-Fri 2PM-8PM</p>
    </div>
  );
}

function Container42() {
  return (
    <div className="[grid-area:1_/_1] place-self-stretch relative shrink-0" data-name="Container">
      <Container38 />
      <Container39 />
      <Container40 />
      <Container41 />
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[12px] text-neutral-950">{`[EDUCATION & CREDENTIALS]`}</p>
    </div>
  );
}

function Container44() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Cousine:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-[-0.67px] whitespace-pre">PhD Mathematics, Elite University, 2015</p>
    </div>
  );
}

function Container45() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Cousine:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-[-0.67px] whitespace-pre">State License #56789, AP Calculus Certified</p>
    </div>
  );
}

function Container46() {
  return (
    <div className="[grid-area:1_/_2] content-stretch flex flex-col gap-[4px] items-start place-self-stretch relative shrink-0" data-name="Container">
      <Container43 />
      <Container44 />
      <Container45 />
    </div>
  );
}

function Container47() {
  return (
    <div className="gap-[16px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[84px] relative shrink-0 w-full" data-name="Container">
      <Container42 />
      <Container46 />
    </div>
  );
}

function Text3() {
  return (
    <div className="absolute content-stretch flex h-[17.333px] items-start left-[13.33px] top-[14.67px] w-[100.083px]" data-name="Text">
      <p className="font-['Cousine:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">[Admin Notes]</p>
    </div>
  );
}

function Container48() {
  return (
    <div className="bg-white h-[46.667px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <Text3 />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal h-[43px] leading-[20px] left-[140.67px] text-[14px] text-neutral-950 top-[13.33px] w-[342px]">Excellent credentials. Former university professor.</p>
    </div>
  );
}

function Container49() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[12px] h-[160px] items-start pb-0 pt-[17.333px] px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#d08700] border-[1.333px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Container47 />
      <Container48 />
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute bg-[#9810fa] h-[50.667px] left-0 top-0 w-[571.917px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal h-[50px] leading-[24px] left-[17.67px] text-[16px] text-white top-[11.67px] w-[258px]">📝 INTERVIEW: Nov 10, 2024 2PM</p>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute bg-[#00a63e] h-[50.667px] left-[579.92px] top-0 w-[571.917px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular','Noto_Sans_Symbols2:Regular',sans-serif] font-normal leading-[24px] left-[17.33px] text-[16px] text-nowrap text-white top-[11.67px] whitespace-pre">{`✓ APPROVE & HIRE`}</p>
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute h-[50.667px] left-[1159.83px] top-0 w-[162.271px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[17.33px] text-[16px] text-neutral-950 text-nowrap top-[11.67px] whitespace-pre">📄 VIEW RESUME</p>
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute bg-[#e7000b] h-[50.667px] left-[1330.1px] top-0 w-[101.896px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular','Noto_Sans_Symbols2:Regular',sans-serif] font-normal leading-[24px] left-[17.33px] text-[16px] text-nowrap text-white top-[11.67px] whitespace-pre">✗ REJECT</p>
    </div>
  );
}

function Container50() {
  return (
    <div className="h-[50.667px] relative shrink-0 w-full" data-name="Container">
      <Button2 />
      <Button3 />
      <Button4 />
      <Button5 />
    </div>
  );
}

function Container51() {
  return (
    <div className="h-[401.333px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] h-[401.333px] items-start pb-0 pt-[24px] px-[24px] relative w-full">
          <Container37 />
          <Container49 />
          <Container50 />
        </div>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="absolute bg-red-50 box-border content-stretch flex flex-col h-[409.333px] items-start left-0 p-[4px] top-0 w-[1488px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-[#e7000b] border-solid inset-0 pointer-events-none" />
      <Container51 />
    </div>
  );
}

function Container53() {
  return (
    <div className="relative rounded-[4.47392e+07px] shrink-0 size-[64px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none rounded-[4.47392e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[64px]" />
    </div>
  );
}

function Container54() {
  return (
    <div className="absolute h-[28px] left-0 top-0 w-[188.042px]" data-name="Container">
      <p className="absolute font-['Cousine:Regular',sans-serif] leading-[28px] left-0 not-italic text-[18px] text-neutral-950 text-nowrap top-0 whitespace-pre">Ms. Rachel Thompson</p>
    </div>
  );
}

function Container55() {
  return (
    <div className="absolute h-[20px] left-0 top-[32px] w-[279.604px]" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal h-[44px] leading-[20px] left-[-0.33px] text-[14px] text-neutral-950 top-[-2px] w-[264px]">{`Biology & Life Sciences • Grades 9-11`}</p>
    </div>
  );
}

function Container56() {
  return (
    <div className="absolute h-[20px] left-0 top-[56px] w-[279.604px]" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal h-[42px] leading-[20px] left-[-0.33px] text-[14px] text-neutral-950 top-[-2px] w-[186px]">Applied: Nov 5, 2024</p>
    </div>
  );
}

function Text4() {
  return (
    <div className="absolute h-[26.667px] left-0 top-0 w-[78.25px]" data-name="Text">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal h-[33px] leading-[16px] left-[9.67px] text-[12px] text-neutral-950 top-[4.33px] w-[77px]">10 YRS EXP</p>
    </div>
  );
}

function Text5() {
  return (
    <div className="absolute bg-green-100 h-[26.667px] left-[86.25px] top-0 w-[78.083px]" data-name="Text">
      <div aria-hidden="true" className="absolute border-[#00a63e] border-[1.333px] border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Cousine:Regular',sans-serif] h-[29px] leading-[16px] left-[9.42px] not-italic text-[12px] text-neutral-950 top-[5.33px] w-[69px]">TEST: 97%</p>
    </div>
  );
}

function Container57() {
  return (
    <div className="absolute h-[26.667px] left-0 top-[79.67px] w-[447.958px]" data-name="Container">
      <Text4 />
      <Text5 />
    </div>
  );
}

function Container58() {
  return (
    <div className="h-[111px] relative shrink-0 w-[385px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[111px] relative w-[385px]">
        <Container54 />
        <Container55 />
        <Container56 />
        <Container57 />
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="relative shrink-0 w-[359.604px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[16px] items-start relative w-[359.604px]">
        <Container53 />
        <Container58 />
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="bg-black h-[42.667px] relative shrink-0 w-[210.333px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[42.667px] relative w-[210.333px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[17.33px] text-[16px] text-nowrap text-white top-[7.67px] whitespace-pre">VIEW FULL APPLICATION</p>
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="content-stretch flex h-[110.667px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container59 />
      <Button6 />
    </div>
  );
}

function Container61() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-0 top-0 w-[708px]" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[12px] text-neutral-950">[CONTACT]</p>
    </div>
  );
}

function Container62() {
  return (
    <div className="absolute h-[20px] left-0 top-[20px] w-[708px]" data-name="Container">
      <p className="absolute font-['Cousine:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-[-0.67px] whitespace-pre">rachel.t@email.com</p>
    </div>
  );
}

function Container63() {
  return (
    <div className="absolute h-[20px] left-0 top-[40px] w-[708px]" data-name="Container">
      <p className="absolute font-['Cousine:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-[-0.67px] whitespace-pre">555-3002</p>
    </div>
  );
}

function Container64() {
  return (
    <div className="absolute h-[20px] left-0 top-[64px] w-[708px]" data-name="Container">
      <p className="absolute font-['Cousine:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-[-0.67px] whitespace-pre">Tue-Sat 3PM-9PM</p>
    </div>
  );
}

function Container65() {
  return (
    <div className="[grid-area:1_/_1] place-self-stretch relative shrink-0" data-name="Container">
      <Container61 />
      <Container62 />
      <Container63 />
      <Container64 />
    </div>
  );
}

function Container66() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[12px] text-neutral-950">{`[EDUCATION & CREDENTIALS]`}</p>
    </div>
  );
}

function Container67() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Cousine:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-[-0.67px] whitespace-pre">MS Biology, State College, 2019</p>
    </div>
  );
}

function Container68() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Cousine:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-[-0.67px] whitespace-pre">State License #67890, Science Education Cert</p>
    </div>
  );
}

function Container69() {
  return (
    <div className="[grid-area:1_/_2] content-stretch flex flex-col gap-[4px] items-start place-self-stretch relative shrink-0" data-name="Container">
      <Container66 />
      <Container67 />
      <Container68 />
    </div>
  );
}

function Container70() {
  return (
    <div className="gap-[16px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[84px] relative shrink-0 w-full" data-name="Container">
      <Container65 />
      <Container69 />
    </div>
  );
}

function Text6() {
  return (
    <div className="absolute content-stretch flex h-[17.333px] items-start left-[13.33px] top-[14.67px] w-[100.083px]" data-name="Text">
      <p className="font-['Cousine:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">[Admin Notes]</p>
    </div>
  );
}

function Container71() {
  return (
    <div className="bg-white h-[46.667px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <Text6 />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[146.67px] text-[14px] text-neutral-950 top-[12px] w-[392px]">Strong background in lab work. Looking for part-time position.</p>
    </div>
  );
}

function Container72() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[12px] h-[160px] items-start pb-0 pt-[17.333px] px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#d08700] border-[1.333px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Container70 />
      <Container71 />
    </div>
  );
}

function Button7() {
  return (
    <div className="absolute bg-[#9810fa] h-[50.667px] left-0 top-[-0.33px] w-[571.917px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal h-[50px] leading-[24px] left-[17.67px] text-[16px] text-white top-[11.67px] w-[258px]">📝 INTERVIEW: Nov 10, 2024 2PM</p>
    </div>
  );
}

function Button8() {
  return (
    <div className="absolute bg-[#155dfc] h-[50.667px] left-0 top-0 w-[571.917px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[17.33px] text-[16px] text-nowrap text-white top-[11.67px] whitespace-pre">📅 SCHEDULE INTERVIEW</p>
      <Button7 />
    </div>
  );
}

function Button9() {
  return (
    <div className="absolute bg-[#00a63e] h-[50.667px] left-[579.92px] top-0 w-[571.917px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular','Noto_Sans_Symbols2:Regular',sans-serif] font-normal leading-[24px] left-[17.33px] text-[16px] text-nowrap text-white top-[11.67px] whitespace-pre">{`✓ APPROVE & HIRE`}</p>
    </div>
  );
}

function Button10() {
  return (
    <div className="absolute h-[50.667px] left-[1159.83px] top-0 w-[162.271px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[17.33px] text-[16px] text-neutral-950 text-nowrap top-[11.67px] whitespace-pre">📄 VIEW RESUME</p>
    </div>
  );
}

function Button11() {
  return (
    <div className="absolute bg-[#e7000b] h-[50.667px] left-[1330.1px] top-0 w-[101.896px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular','Noto_Sans_Symbols2:Regular',sans-serif] font-normal leading-[24px] left-[17.33px] text-[16px] text-nowrap text-white top-[11.67px] whitespace-pre">✗ REJECT</p>
    </div>
  );
}

function Container73() {
  return (
    <div className="h-[50.667px] relative shrink-0 w-full" data-name="Container">
      <Button8 />
      <Button9 />
      <Button10 />
      <Button11 />
    </div>
  );
}

function Container74() {
  return (
    <div className="h-[401.333px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] h-[401.333px] items-start pb-0 pt-[24px] px-[24px] relative w-full">
          <Container60 />
          <Container72 />
          <Container73 />
        </div>
      </div>
    </div>
  );
}

function Container75() {
  return (
    <div className="absolute bg-yellow-50 box-border content-stretch flex flex-col h-[409.333px] items-start left-0 p-[4px] top-[425.33px] w-[1488px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-[#d08700] border-solid inset-0 pointer-events-none" />
      <Container74 />
    </div>
  );
}

function Container76() {
  return (
    <div className="relative rounded-[4.47392e+07px] shrink-0 size-[64px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none rounded-[4.47392e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[64px]" />
    </div>
  );
}

function Container77() {
  return (
    <div className="h-[28px] relative shrink-0 w-[197.938px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[28px] relative w-[197.938px]">
        <p className="absolute font-['Cousine:Regular',sans-serif] leading-[28px] left-0 not-italic text-[18px] text-neutral-950 text-nowrap top-0 whitespace-pre">Mr. Carlos Rodriguez</p>
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[27px] relative w-[44px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[27px] items-start relative w-[44px]">
        <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[28px] min-h-px min-w-px relative shrink-0 text-[20px] text-neutral-950">🔥</p>
      </div>
    </div>
  );
}

function Container78() {
  return (
    <div className="content-stretch flex gap-[8px] h-[28px] items-center relative shrink-0 w-full" data-name="Container">
      <Container77 />
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <Text7 />
        </div>
      </div>
    </div>
  );
}

function Container79() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[-0.33px] text-[14px] text-neutral-950 top-[-2.33px] w-[329px]">{`Spanish & World Languages • Grades 7-12`}</p>
    </div>
  );
}

function Container80() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[-0.33px] text-[14px] text-neutral-950 text-nowrap top-[-2.33px] whitespace-pre">Applied: Nov 5, 2024</p>
    </div>
  );
}

function Text8() {
  return (
    <div className="absolute h-[26.667px] left-0 top-0 w-[78.25px]" data-name="Text">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal h-[33px] leading-[16px] left-[9.67px] text-[12px] text-neutral-950 top-[4.33px] w-[77px]">10 YRS EXP</p>
    </div>
  );
}

function Text9() {
  return (
    <div className="absolute bg-green-100 h-[26.667px] left-[86.25px] top-0 w-[78.083px]" data-name="Text">
      <div aria-hidden="true" className="absolute border-[#00a63e] border-[1.333px] border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Cousine:Regular',sans-serif] h-[29px] leading-[16px] left-[9.42px] not-italic text-[12px] text-neutral-950 top-[5.33px] w-[69px]">TEST: 97%</p>
    </div>
  );
}

function Container81() {
  return (
    <div className="h-[26.667px] relative shrink-0 w-full" data-name="Container">
      <Text8 />
      <Text9 />
    </div>
  );
}

function Container82() {
  return (
    <div className="basis-0 grow h-[110.667px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[110.667px] items-start relative w-full">
        <Container78 />
        <Container79 />
        <Container80 />
        <Container81 />
      </div>
    </div>
  );
}

function Container83() {
  return (
    <div className="h-[110.667px] relative shrink-0 w-[366.063px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[16px] h-[110.667px] items-start relative w-[366.063px]">
        <Container76 />
        <Container82 />
      </div>
    </div>
  );
}

function Button12() {
  return (
    <div className="bg-black h-[42.667px] relative shrink-0 w-[210.333px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[42.667px] relative w-[210.333px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[17.33px] text-[16px] text-nowrap text-white top-[7.67px] whitespace-pre">VIEW FULL APPLICATION</p>
      </div>
    </div>
  );
}

function Container84() {
  return (
    <div className="content-stretch flex h-[110.667px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container83 />
      <Button12 />
    </div>
  );
}

function Container85() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-0 top-0 w-[708px]" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[12px] text-neutral-950">[CONTACT]</p>
    </div>
  );
}

function Container86() {
  return (
    <div className="absolute h-[20px] left-0 top-[20px] w-[708px]" data-name="Container">
      <p className="absolute font-['Cousine:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-[-0.67px] whitespace-pre">carlos.r@email.com</p>
    </div>
  );
}

function Container87() {
  return (
    <div className="absolute h-[20px] left-0 top-[40px] w-[708px]" data-name="Container">
      <p className="absolute font-['Cousine:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-[-0.67px] whitespace-pre">555-3003</p>
    </div>
  );
}

function Container88() {
  return (
    <div className="absolute h-[20px] left-0 top-[64px] w-[708px]" data-name="Container">
      <p className="absolute font-['Cousine:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-[-0.67px] whitespace-pre">Mon-Thu 4PM-9PM</p>
    </div>
  );
}

function Container89() {
  return (
    <div className="[grid-area:1_/_1] place-self-stretch relative shrink-0" data-name="Container">
      <Container85 />
      <Container86 />
      <Container87 />
      <Container88 />
    </div>
  );
}

function Container90() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[12px] text-neutral-950">{`[EDUCATION & CREDENTIALS]`}</p>
    </div>
  );
}

function Container91() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Cousine:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-[-0.67px] whitespace-pre">MA Spanish Literature, International University, 2006</p>
    </div>
  );
}

function Container92() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Cousine:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-[-0.67px] whitespace-pre">State License #78901, Bilingual Education Cert</p>
    </div>
  );
}

function Container93() {
  return (
    <div className="[grid-area:1_/_2] content-stretch flex flex-col gap-[4px] items-start place-self-stretch relative shrink-0" data-name="Container">
      <Container90 />
      <Container91 />
      <Container92 />
    </div>
  );
}

function Container94() {
  return (
    <div className="gap-[16px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[84px] relative shrink-0 w-full" data-name="Container">
      <Container89 />
      <Container93 />
    </div>
  );
}

function Text10() {
  return (
    <div className="absolute content-stretch flex h-[17.333px] items-start left-[13.33px] top-[14.67px] w-[100.083px]" data-name="Text">
      <p className="font-['Cousine:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">[Admin Notes]</p>
    </div>
  );
}

function Container95() {
  return (
    <div className="bg-white h-[46.667px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <Text10 />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal h-[46px] leading-[20px] left-[131.67px] text-[14px] text-neutral-950 top-[14.67px] w-[369px]">Native speaker. Extensive teaching experience abroad.</p>
    </div>
  );
}

function Container96() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[12px] h-[160px] items-start pb-0 pt-[17.333px] px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#d08700] border-[1.333px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Container94 />
      <Container95 />
    </div>
  );
}

function Button13() {
  return (
    <div className="absolute bg-[#9810fa] h-[50.667px] left-0 top-[0.33px] w-[571.917px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal h-[50px] leading-[24px] left-[17.67px] text-[16px] text-white top-[11.67px] w-[258px]">📝 INTERVIEW: Nov 10, 2024 2PM</p>
    </div>
  );
}

function Button14() {
  return (
    <div className="absolute bg-[#155dfc] h-[50.667px] left-0 top-0 w-[571.917px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[17.33px] text-[16px] text-nowrap text-white top-[11.67px] whitespace-pre">📅 SCHEDULE INTERVIEW</p>
      <Button13 />
    </div>
  );
}

function Button15() {
  return (
    <div className="absolute bg-[#00a63e] h-[50.667px] left-[579.92px] top-0 w-[571.917px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular','Noto_Sans_Symbols2:Regular',sans-serif] font-normal leading-[24px] left-[17.33px] text-[16px] text-nowrap text-white top-[11.67px] whitespace-pre">{`✓ APPROVE & HIRE`}</p>
    </div>
  );
}

function Button16() {
  return (
    <div className="absolute h-[50.667px] left-[1159.83px] top-0 w-[162.271px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[17.33px] text-[16px] text-neutral-950 text-nowrap top-[11.67px] whitespace-pre">📄 VIEW RESUME</p>
    </div>
  );
}

function Button17() {
  return (
    <div className="absolute bg-[#e7000b] h-[50.667px] left-[1330.1px] top-0 w-[101.896px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular','Noto_Sans_Symbols2:Regular',sans-serif] font-normal leading-[24px] left-[17.33px] text-[16px] text-nowrap text-white top-[11.67px] whitespace-pre">✗ REJECT</p>
    </div>
  );
}

function Container97() {
  return (
    <div className="h-[50.667px] relative shrink-0 w-full" data-name="Container">
      <Button14 />
      <Button15 />
      <Button16 />
      <Button17 />
    </div>
  );
}

function Container98() {
  return (
    <div className="h-[401.333px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] h-[401.333px] items-start pb-0 pt-[24px] px-[24px] relative w-full">
          <Container84 />
          <Container96 />
          <Container97 />
        </div>
      </div>
    </div>
  );
}

function Container99() {
  return (
    <div className="absolute bg-red-50 box-border content-stretch flex flex-col h-[409.333px] items-start left-0 p-[4px] top-[850.67px] w-[1488px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-[#e7000b] border-solid inset-0 pointer-events-none" />
      <Container98 />
    </div>
  );
}

function Container100() {
  return (
    <div className="relative rounded-[4.47392e+07px] shrink-0 size-[64px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none rounded-[4.47392e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[64px]" />
    </div>
  );
}

function Container101() {
  return (
    <div className="h-[28px] relative shrink-0 w-[158.354px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[28px] relative w-[158.354px]">
        <p className="absolute font-['Cousine:Regular',sans-serif] leading-[28px] left-0 not-italic text-[18px] text-neutral-950 text-nowrap top-0 whitespace-pre">Dr. Jennifer Kim</p>
      </div>
    </div>
  );
}

function Text11() {
  return (
    <div className="h-[28px] relative shrink-0 w-[27.479px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[28px] w-[27.479px]" />
    </div>
  );
}

function Container102() {
  return (
    <div className="content-stretch flex gap-[8px] h-[28px] items-center relative shrink-0 w-full" data-name="Container">
      <Container101 />
      <Text11 />
      <p className="font-['Arimo:Regular',sans-serif] font-normal h-[29px] leading-[28px] relative shrink-0 text-[20px] text-neutral-950 w-[42px]">🔥</p>
    </div>
  );
}

function Container103() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[-0.33px] text-[14px] text-neutral-950 top-[-1.67px] w-[332px]">{`Computer Science & Programming • Grades 10-12`}</p>
    </div>
  );
}

function Container104() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal h-[48px] leading-[20px] left-[-0.33px] text-[14px] text-neutral-950 top-[-1.67px] w-[149px]">Applied: Nov 5, 2024</p>
    </div>
  );
}

function Text12() {
  return (
    <div className="absolute h-[26.667px] left-0 top-0 w-[78.25px]" data-name="Text">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal h-[33px] leading-[16px] left-[9.67px] text-[12px] text-neutral-950 top-[4.33px] w-[69px]">12 YRS EXP</p>
    </div>
  );
}

function Text13() {
  return (
    <div className="absolute bg-green-100 h-[26.667px] left-[86.25px] top-0 w-[78.083px]" data-name="Text">
      <div aria-hidden="true" className="absolute border-[#00a63e] border-[1.333px] border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Cousine:Regular',sans-serif] h-[36px] leading-[16px] left-[9.42px] not-italic text-[12px] text-neutral-950 top-[5.33px] w-[69px]">TEST: 99%</p>
    </div>
  );
}

function Text14() {
  return (
    <div className="absolute h-[26.667px] left-0 top-0 w-[78.25px]" data-name="Text">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal h-[33px] leading-[16px] left-[9.67px] text-[12px] text-neutral-950 top-[4.33px] w-[77px]">10 YRS EXP</p>
    </div>
  );
}

function Text15() {
  return (
    <div className="absolute bg-green-100 h-[26.667px] left-[86.25px] top-0 w-[78.083px]" data-name="Text">
      <div aria-hidden="true" className="absolute border-[#00a63e] border-[1.333px] border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Cousine:Regular',sans-serif] h-[29px] leading-[16px] left-[9.42px] not-italic text-[12px] text-neutral-950 top-[5.33px] w-[69px]">TEST: 97%</p>
    </div>
  );
}

function Container105() {
  return (
    <div className="absolute h-[26px] left-[-0.33px] top-[0.33px] w-[182px]" data-name="Container">
      <Text14 />
      <Text15 />
    </div>
  );
}

function Container106() {
  return (
    <div className="h-[26.667px] relative shrink-0 w-full" data-name="Container">
      <Text12 />
      <Text13 />
      <Container105 />
    </div>
  );
}

function Container107() {
  return (
    <div className="basis-0 grow h-[110.667px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[110.667px] items-start relative w-full">
        <Container102 />
        <Container103 />
        <Container104 />
        <Container106 />
      </div>
    </div>
  );
}

function Container108() {
  return (
    <div className="h-[110.667px] relative shrink-0 w-[391.979px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[16px] h-[110.667px] items-start relative w-[391.979px]">
        <Container100 />
        <Container107 />
      </div>
    </div>
  );
}

function Button18() {
  return (
    <div className="bg-black h-[42.667px] relative shrink-0 w-[210.333px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[42.667px] relative w-[210.333px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[17.33px] text-[16px] text-nowrap text-white top-[7.67px] whitespace-pre">VIEW FULL APPLICATION</p>
      </div>
    </div>
  );
}

function Container109() {
  return (
    <div className="content-stretch flex h-[110.667px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container108 />
      <Button18 />
    </div>
  );
}

function Container110() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-0 top-0 w-[708px]" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[12px] text-neutral-950">[CONTACT]</p>
    </div>
  );
}

function Container111() {
  return (
    <div className="absolute h-[20px] left-0 top-[20px] w-[708px]" data-name="Container">
      <p className="absolute font-['Cousine:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-[-0.67px] whitespace-pre">jennifer.k@email.com</p>
    </div>
  );
}

function Container112() {
  return (
    <div className="absolute h-[20px] left-0 top-[40px] w-[708px]" data-name="Container">
      <p className="absolute font-['Cousine:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-[-0.67px] whitespace-pre">555-3004</p>
    </div>
  );
}

function Container113() {
  return (
    <div className="absolute h-[20px] left-0 top-[64px] w-[708px]" data-name="Container">
      <p className="absolute font-['Cousine:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-[-0.67px] whitespace-pre">Wed-Sun 1PM-7PM</p>
    </div>
  );
}

function Container114() {
  return (
    <div className="[grid-area:1_/_1] place-self-stretch relative shrink-0" data-name="Container">
      <Container110 />
      <Container111 />
      <Container112 />
      <Container113 />
    </div>
  );
}

function Container115() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[12px] text-neutral-950">{`[EDUCATION & CREDENTIALS]`}</p>
    </div>
  );
}

function Container116() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Cousine:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-[-0.67px] whitespace-pre">PhD Computer Science, Tech Institute, 2014</p>
    </div>
  );
}

function Container117() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Cousine:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-[-0.67px] whitespace-pre">State License #89012, Computer Science Education Cert</p>
    </div>
  );
}

function Container118() {
  return (
    <div className="[grid-area:1_/_2] content-stretch flex flex-col gap-[4px] items-start place-self-stretch relative shrink-0" data-name="Container">
      <Container115 />
      <Container116 />
      <Container117 />
    </div>
  );
}

function Container119() {
  return (
    <div className="gap-[16px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[84px] relative shrink-0 w-full" data-name="Container">
      <Container114 />
      <Container118 />
    </div>
  );
}

function Text16() {
  return (
    <div className="absolute content-stretch flex h-[17.333px] items-start left-[13.33px] top-[14.67px] w-[100.083px]" data-name="Text">
      <p className="font-['Cousine:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">[Admin Notes]</p>
    </div>
  );
}

function Container120() {
  return (
    <div className="bg-white h-[46.667px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <Text16 />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal h-[44px] leading-[20px] left-[132.67px] text-[14px] text-neutral-950 top-[14.33px] w-[347px]">Former software engineer. Excellent technical skills.</p>
    </div>
  );
}

function Container121() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[12px] h-[160px] items-start pb-0 pt-[17.333px] px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#d08700] border-[1.333px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Container119 />
      <Container120 />
    </div>
  );
}

function Button19() {
  return (
    <div className="absolute bg-[#9810fa] h-[50.667px] left-0 top-0 w-[571.917px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal h-[50px] leading-[24px] left-[17.67px] text-[16px] text-white top-[11.67px] w-[258px]">📝 INTERVIEW: Nov 10, 2024 2PM</p>
    </div>
  );
}

function Button20() {
  return (
    <div className="absolute bg-[#155dfc] h-[50.667px] left-0 top-0 w-[571.917px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[17.33px] text-[16px] text-nowrap text-white top-[11.67px] whitespace-pre">📅 SCHEDULE INTERVIEW</p>
      <Button19 />
    </div>
  );
}

function Button21() {
  return (
    <div className="absolute bg-[#00a63e] h-[50.667px] left-[579.92px] top-0 w-[571.917px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular','Noto_Sans_Symbols2:Regular',sans-serif] font-normal leading-[24px] left-[17.33px] text-[16px] text-nowrap text-white top-[11.67px] whitespace-pre">{`✓ APPROVE & HIRE`}</p>
    </div>
  );
}

function Button22() {
  return (
    <div className="absolute h-[50.667px] left-[1159.83px] top-0 w-[162.271px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[17.33px] text-[16px] text-neutral-950 text-nowrap top-[11.67px] whitespace-pre">📄 VIEW RESUME</p>
    </div>
  );
}

function Button23() {
  return (
    <div className="absolute bg-[#e7000b] h-[50.667px] left-[1330.1px] top-0 w-[101.896px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular','Noto_Sans_Symbols2:Regular',sans-serif] font-normal leading-[24px] left-[17.33px] text-[16px] text-nowrap text-white top-[11.67px] whitespace-pre">✗ REJECT</p>
    </div>
  );
}

function Container122() {
  return (
    <div className="h-[50.667px] relative shrink-0 w-full" data-name="Container">
      <Button20 />
      <Button21 />
      <Button22 />
      <Button23 />
    </div>
  );
}

function Container123() {
  return (
    <div className="h-[401.333px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] h-[401.333px] items-start pb-0 pt-[24px] px-[24px] relative w-full">
          <Container109 />
          <Container121 />
          <Container122 />
        </div>
      </div>
    </div>
  );
}

function Container124() {
  return (
    <div className="absolute bg-red-50 box-border content-stretch flex flex-col h-[409.333px] items-start left-0 p-[4px] top-[1276px] w-[1488px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-[#e7000b] border-solid inset-0 pointer-events-none" />
      <Container123 />
    </div>
  );
}

function Container125() {
  return (
    <div className="relative rounded-[4.47392e+07px] shrink-0 size-[64px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none rounded-[4.47392e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[64px]" />
    </div>
  );
}

function Container126() {
  return (
    <div className="absolute h-[28px] left-0 top-0 w-[158.354px]" data-name="Container">
      <p className="absolute font-['Cousine:Regular',sans-serif] leading-[28px] left-0 not-italic text-[18px] text-neutral-950 text-nowrap top-0 whitespace-pre">Mr. Thomas Baker</p>
    </div>
  );
}

function Container127() {
  return (
    <div className="absolute h-[20px] left-0 top-[32px] w-[441.5px]" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal h-[41px] leading-[20px] left-[-0.33px] text-[14px] text-neutral-950 top-[-2px] w-[262px]">{`History & Social Studies • Grades 8-11`}</p>
    </div>
  );
}

function Container128() {
  return (
    <div className="absolute h-[20px] left-0 top-[56px] w-[441.5px]" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[-0.33px] text-[14px] text-neutral-950 top-[-2px] w-[141px]">Applied: Nov 5, 2024</p>
    </div>
  );
}

function Text17() {
  return (
    <div className="absolute h-[26.667px] left-0 top-0 w-[71.792px]" data-name="Text">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[16px] left-[9.67px] text-[12px] text-neutral-950 top-[4px] w-[62px]">7 YRS EXP</p>
    </div>
  );
}

function Text18() {
  return (
    <div className="absolute bg-blue-100 h-[26.667px] left-[79.79px] top-0 w-[78.083px]" data-name="Text">
      <div aria-hidden="true" className="absolute border-[#155dfc] border-[1.333px] border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Cousine:Regular',sans-serif] h-[36px] leading-[16px] left-[8.88px] not-italic text-[12px] text-neutral-950 top-[6px] w-[65px]">TEST: 91%</p>
    </div>
  );
}

function Container129() {
  return (
    <div className="absolute h-[26.667px] left-0 top-[84px] w-[441.5px]" data-name="Container">
      <Text17 />
      <Text18 />
    </div>
  );
}

function Container130() {
  return (
    <div className="basis-0 grow h-[110.667px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[110.667px] relative w-full">
        <Container126 />
        <Container127 />
        <Container128 />
        <Container129 />
      </div>
    </div>
  );
}

function Container131() {
  return (
    <div className="h-[110.667px] relative shrink-0 w-[521.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[16px] h-[110.667px] items-start relative w-[521.5px]">
        <Container125 />
        <Container130 />
      </div>
    </div>
  );
}

function Button24() {
  return (
    <div className="bg-black h-[42.667px] relative shrink-0 w-[210.333px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[42.667px] relative w-[210.333px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[17.33px] text-[16px] text-nowrap text-white top-[7.67px] whitespace-pre">VIEW FULL APPLICATION</p>
      </div>
    </div>
  );
}

function Container132() {
  return (
    <div className="content-stretch flex h-[110.667px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container131 />
      <Button24 />
    </div>
  );
}

function Container133() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-0 top-0 w-[708px]" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[12px] text-neutral-950">[CONTACT]</p>
    </div>
  );
}

function Container134() {
  return (
    <div className="absolute h-[20px] left-0 top-[20px] w-[708px]" data-name="Container">
      <p className="absolute font-['Cousine:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-[-0.67px] whitespace-pre">thomas.b@email.com</p>
    </div>
  );
}

function Container135() {
  return (
    <div className="absolute h-[20px] left-0 top-[40px] w-[708px]" data-name="Container">
      <p className="absolute font-['Cousine:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-[-0.67px] whitespace-pre">555-3005</p>
    </div>
  );
}

function Container136() {
  return (
    <div className="absolute h-[20px] left-0 top-[64px] w-[708px]" data-name="Container">
      <p className="absolute font-['Cousine:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-[-0.67px] whitespace-pre">Mon-Fri 3PM-8PM</p>
    </div>
  );
}

function Container137() {
  return (
    <div className="[grid-area:1_/_1] place-self-stretch relative shrink-0" data-name="Container">
      <Container133 />
      <Container134 />
      <Container135 />
      <Container136 />
    </div>
  );
}

function Container138() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[12px] text-neutral-950">{`[EDUCATION & CREDENTIALS]`}</p>
    </div>
  );
}

function Container139() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Cousine:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-[-0.67px] whitespace-pre">MA History, City University, 2018</p>
    </div>
  );
}

function Container140() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Cousine:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-[-0.67px] whitespace-pre">State License #90123, Social Studies Cert</p>
    </div>
  );
}

function Container141() {
  return (
    <div className="[grid-area:1_/_2] content-stretch flex flex-col gap-[4px] items-start place-self-stretch relative shrink-0" data-name="Container">
      <Container138 />
      <Container139 />
      <Container140 />
    </div>
  );
}

function Container142() {
  return (
    <div className="gap-[16px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[84px] relative shrink-0 w-full" data-name="Container">
      <Container137 />
      <Container141 />
    </div>
  );
}

function Text19() {
  return (
    <div className="absolute content-stretch flex h-[17.333px] items-start left-[13.33px] top-[14.67px] w-[100.083px]" data-name="Text">
      <p className="font-['Cousine:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">[Admin Notes]</p>
    </div>
  );
}

function Container143() {
  return (
    <div className="bg-white h-[46.667px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <Text19 />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[139.67px] text-[14px] text-neutral-950 top-[15px] w-[313px]">Engaging teaching style. Strong student feedback.</p>
    </div>
  );
}

function Container144() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[12px] h-[160px] items-start pb-0 pt-[17.333px] px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#d08700] border-[1.333px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Container142 />
      <Container143 />
    </div>
  );
}

function Button25() {
  return (
    <div className="absolute bg-[#9810fa] h-[50.667px] left-0 top-0 w-[571.917px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal h-[51px] leading-[24px] left-[17.67px] text-[16px] text-white top-[11.33px] w-[257px]">📝 INTERVIEW: Nov 12, 2024 3PM</p>
    </div>
  );
}

function Button26() {
  return (
    <div className="absolute bg-[#00a63e] h-[50.667px] left-[579.92px] top-0 w-[571.917px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular','Noto_Sans_Symbols2:Regular',sans-serif] font-normal leading-[24px] left-[17.33px] text-[16px] text-nowrap text-white top-[11.67px] whitespace-pre">{`✓ APPROVE & HIRE`}</p>
    </div>
  );
}

function Button27() {
  return (
    <div className="absolute h-[50.667px] left-[1159.83px] top-0 w-[162.271px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[17.33px] text-[16px] text-neutral-950 text-nowrap top-[11.67px] whitespace-pre">📄 VIEW RESUME</p>
    </div>
  );
}

function Button28() {
  return (
    <div className="absolute bg-[#e7000b] h-[50.667px] left-[1330.1px] top-0 w-[101.896px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular','Noto_Sans_Symbols2:Regular',sans-serif] font-normal leading-[24px] left-[17.33px] text-[16px] text-nowrap text-white top-[11.67px] whitespace-pre">✗ REJECT</p>
    </div>
  );
}

function Container145() {
  return (
    <div className="h-[50.667px] relative shrink-0 w-full" data-name="Container">
      <Button25 />
      <Button26 />
      <Button27 />
      <Button28 />
    </div>
  );
}

function Container146() {
  return (
    <div className="h-[401.333px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] h-[401.333px] items-start pb-0 pt-[24px] px-[24px] relative w-full">
          <Container132 />
          <Container144 />
          <Container145 />
        </div>
      </div>
    </div>
  );
}

function Container147() {
  return (
    <div className="absolute bg-yellow-50 box-border content-stretch flex flex-col h-[409.333px] items-start left-0 p-[4px] top-[1701.33px] w-[1488px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-[#d08700] border-solid inset-0 pointer-events-none" />
      <Container146 />
    </div>
  );
}

function Container148() {
  return (
    <div className="absolute h-[2110.67px] left-[24px] top-[496px] w-[1488px]" data-name="Container">
      <Container52 />
      <Container75 />
      <Container99 />
      <Container124 />
      <Container147 />
    </div>
  );
}

function Container149() {
  return (
    <div className="absolute h-[2638.67px] left-[317.33px] top-[70.67px] w-[1536px]" data-name="Container">
      <Container5 />
      <Container21 />
      <Container22 />
      <Container28 />
      <Container148 />
    </div>
  );
}

function ViewPendingTeachers() {
  return (
    <div className="bg-white h-[2709.33px] relative shrink-0 w-full" data-name="ViewPendingTeachers">
      <Container2 />
      <Container149 />
    </div>
  );
}

function App() {
  return (
    <div className="absolute bg-gray-50 box-border content-stretch flex flex-col h-[2757.33px] items-start left-0 pb-0 pt-[48px] px-0 top-0 w-[2170.67px]" data-name="App">
      <ViewPendingTeachers />
    </div>
  );
}

export default function PendingApplicationsTeacher() {
  return (
    <div className="bg-white relative size-full" data-name="Pending Applications - Teacher">
      <App />
    </div>
  );
}