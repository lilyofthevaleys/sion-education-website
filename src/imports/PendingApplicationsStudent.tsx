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
    <div className="h-[34.667px] relative shrink-0 w-[274.708px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[34.667px] relative w-[274.708px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[13.33px] text-[16px] text-neutral-950 text-nowrap top-[3.67px] whitespace-pre">PENDING STUDENT APPLICATIONS</p>
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
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[32px] min-h-px min-w-px relative shrink-0 text-[24px] text-white">⚠ PENDING STUDENT APPLICATIONS</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-nowrap text-white top-[-1.67px] whitespace-pre">Review and approve student registrations</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="bg-[#d08700] h-[120px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] h-[120px] items-start pb-[4px] pt-[28px] px-[28px] relative w-full">
          <Container3 />
          <Container4 />
        </div>
      </div>
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
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[14px] text-neutral-950">Pending Review</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="[grid-area:1_/_1] bg-yellow-50 place-self-stretch relative shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-[#d08700] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start pb-[4px] pt-[20px] px-[20px] relative size-full">
          <Container6 />
          <Container7 />
        </div>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex h-[36px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Cousine:Regular',sans-serif] grow leading-[36px] min-h-px min-w-px not-italic relative shrink-0 text-[30px] text-neutral-950">86%</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[14px] text-neutral-950">Avg Test Score</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="[grid-area:1_/_2] place-self-stretch relative shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start pb-[4px] pt-[20px] px-[20px] relative size-full">
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
      <p className="basis-0 font-['Cousine:Regular',sans-serif] grow leading-[36px] min-h-px min-w-px not-italic relative shrink-0 text-[30px] text-neutral-950">3</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[14px] text-neutral-950">Today</p>
    </div>
  );
}

function Container14() {
  return (
    <div className="[grid-area:1_/_3] place-self-stretch relative shrink-0" data-name="Container">
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
      <p className="basis-0 font-['Cousine:Regular',sans-serif] grow leading-[36px] min-h-px min-w-px not-italic relative shrink-0 text-[30px] text-neutral-950">2.1</p>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[14px] text-neutral-950">Avg Days Waiting</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="[grid-area:1_/_4] place-self-stretch relative shrink-0" data-name="Container">
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
    <div className="gap-[16px] grid grid-cols-[repeat(4,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[104px] relative shrink-0 w-full" data-name="Container">
      <Container8 />
      <Container11 />
      <Container14 />
      <Container17 />
    </div>
  );
}

function SearchInput() {
  return (
    <div className="basis-0 grow h-[56px] min-h-px min-w-px relative shrink-0" data-name="Search Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[56px] items-center px-[16px] py-[12px] relative w-full">
          <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-[rgba(10,10,10,0.5)] text-nowrap whitespace-pre">[Search by name, email, school...]</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Option() {
  return <div className="h-0 shrink-0 w-full" data-name="Option" />;
}

function Dropdown() {
  return (
    <div className="h-[56px] relative shrink-0 w-[146.667px]" data-name="Dropdown">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[56px] items-start pb-[4px] pr-[1629.33px] relative w-[146.667px]">
        {[...Array(5).keys()].map((_, i) => (
          <Option key={i} />
        ))}
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">VIEW FULL APPLICATION</p>
      </div>
    </div>
  );
}

function Option1() {
  return <div className="h-0 shrink-0 w-full" data-name="Option" />;
}

function Dropdown1() {
  return (
    <div className="h-[56px] relative shrink-0 w-[184px]" data-name="Dropdown">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[56px] items-start pb-[4px] pr-[1829.33px] relative w-[184px]">
        {[...Array(5).keys()].map((_, i) => (
          <Option1 key={i} />
        ))}
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex gap-[16px] h-[56px] items-start relative shrink-0 w-full" data-name="Container">
      <SearchInput />
      <Dropdown />
      <Dropdown1 />
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Cousine:Regular',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-[-0.33px] whitespace-pre">BULK ACTIONS</p>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Process multiple applications at once</p>
    </div>
  );
}

function Container22() {
  return (
    <div className="h-[48px] relative shrink-0 w-[228.313px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[48px] items-start relative w-[228.313px]">
        <Container20 />
        <Container21 />
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#00a63e] h-[42.667px] relative shrink-0 w-[306.417px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[42.667px] relative w-[306.417px]">
        <p className="absolute font-['Arimo:Regular','Noto_Sans_Symbols2:Regular',sans-serif] font-normal leading-[24px] left-[17.33px] text-[16px] text-nowrap text-white top-[7.67px] whitespace-pre">✓ APPROVE ALL HIGH SCORES (90%+)</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="h-[42.667px] relative shrink-0 w-[123.521px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border font-['Arimo:Regular',sans-serif] font-normal h-[42.667px] leading-[24px] relative text-[16px] text-neutral-950 text-nowrap w-[123.521px] whitespace-pre">
        <p className="absolute left-[17.33px] top-[7.67px]">EXPORT LIST</p>
        <p className="absolute left-[17.33px] top-[7.67px]">EXPORT LIST</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="h-[42.667px] relative shrink-0 w-[437.938px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[42.667px] items-start relative w-[437.938px]">
        <Button1 />
        <Button2 />
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex h-[48px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container22 />
      <Container23 />
    </div>
  );
}

function Container25() {
  return (
    <div className="bg-blue-50 h-[88px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-[#155dfc] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[88px] items-start pb-[4px] pt-[20px] px-[20px] relative w-full">
          <Container24 />
        </div>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="relative rounded-[4.47392e+07px] shrink-0 size-[64px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none rounded-[4.47392e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[64px]" />
    </div>
  );
}

function Container27() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Cousine:Regular',sans-serif] leading-[28px] left-0 not-italic text-[18px] text-neutral-950 text-nowrap top-0 whitespace-pre">Jessica Taylor</p>
    </div>
  );
}

function Container28() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal h-[33px] leading-[20px] left-[-0.33px] text-[14px] text-neutral-950 top-[-1.67px] w-[255px]">Westside High School • Grade 10</p>
    </div>
  );
}

function Container29() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal h-[40px] leading-[20px] left-[-0.33px] text-[14px] text-neutral-950 top-[-1.67px] w-[171px]">Applied: Nov 5, 2024</p>
    </div>
  );
}

function Text() {
  return (
    <div className="bg-blue-100 h-[26.667px] relative shrink-0 w-[78.083px]" data-name="Text">
      <div aria-hidden="true" className="absolute border-[#155dfc] border-[1.333px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[26.667px] relative w-[78.083px]">
        <p className="absolute font-['Cousine:Regular',sans-serif] h-[36px] leading-[16px] left-[9.13px] not-italic text-[12px] text-neutral-950 top-[5.33px] w-[69px]">TEST: 82%</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="bg-[#fef9c2] h-[26.667px] relative shrink-0 w-[113.729px]" data-name="Text">
      <div aria-hidden="true" className="absolute border-[#d08700] border-[1.333px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[26.667px] relative w-[113.729px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[16px] left-[9.33px] text-[12px] text-neutral-950 text-nowrap top-[4.33px] whitespace-pre">PENDING REVIEW</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex gap-[8px] h-[26.667px] items-start relative shrink-0 w-full" data-name="Container">
      <Text />
      <Text1 />
    </div>
  );
}

function Container31() {
  return (
    <div className="basis-0 grow h-[110.667px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[110.667px] items-start relative w-full">
        <Container27 />
        <Container28 />
        <Container29 />
        <Container30 />
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="h-[110.667px] relative shrink-0 w-[359.354px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[16px] h-[110.667px] items-start relative w-[359.354px]">
        <Container26 />
        <Container31 />
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-black h-[42.667px] relative shrink-0 w-[210.333px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[42.667px] relative w-[210.333px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[17.33px] text-[16px] text-nowrap text-white top-[7.67px] whitespace-pre">VIEW FULL APPLICATION</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex h-[110.667px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container32 />
      <Button3 />
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[12px] text-neutral-950">[CONTACT]</p>
    </div>
  );
}

function Container35() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Cousine:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-[-0.67px] whitespace-pre">jessica.t@email.com</p>
    </div>
  );
}

function Container36() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Cousine:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-[-0.67px] whitespace-pre">555-2001</p>
    </div>
  );
}

function Container37() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[60px] items-start left-0 top-0 w-[466.667px]" data-name="Container">
      <Container34 />
      <Container35 />
      <Container36 />
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[12px] text-neutral-950">[PARENT/GUARDIAN]</p>
    </div>
  );
}

function Container39() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Cousine:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-[-0.67px] whitespace-pre">Mrs. Taylor</p>
    </div>
  );
}

function Container40() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Cousine:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-[-0.67px] whitespace-pre">parent.t@email.com</p>
    </div>
  );
}

function Container41() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[60px] items-start left-[482.67px] top-0 w-[466.667px]" data-name="Container">
      <Container38 />
      <Container39 />
      <Container40 />
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[12px] text-neutral-950">[TEST INFO]</p>
    </div>
  );
}

function Container43() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Cousine:Regular',sans-serif] h-[36px] leading-[20px] left-[0.33px] not-italic text-[14px] text-neutral-950 top-[-0.67px] w-[117px]">Score: 82%</p>
    </div>
  );
}

function Container44() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Cousine:Regular',sans-serif] h-[31px] leading-[20px] left-[0.33px] not-italic text-[14px] text-neutral-950 top-[-0.67px] w-[179px]">Date: Nov 4, 2024</p>
    </div>
  );
}

function Container45() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[60px] items-start left-[965.33px] top-0 w-[466.667px]" data-name="Container">
      <Container42 />
      <Container43 />
      <Container44 />
    </div>
  );
}

function Container46() {
  return (
    <div className="h-[60px] relative shrink-0 w-full" data-name="Container">
      <Container37 />
      <Container41 />
      <Container45 />
    </div>
  );
}

function Text2() {
  return (
    <div className="absolute content-stretch flex h-[17.333px] items-start left-[13.33px] top-[14.67px] w-[53.896px]" data-name="Text">
      <p className="font-['Cousine:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">[Notes]</p>
    </div>
  );
}

function Container47() {
  return (
    <div className="bg-white h-[46.667px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <Text2 />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[94.67px] text-[14px] text-neutral-950 top-[14.33px] w-[335px]">Strong test performance. Looking for Chemistry tutor.</p>
    </div>
  );
}

function Container48() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[12px] h-[136px] items-start pb-0 pt-[17.333px] px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#d08700] border-[1.333px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Container46 />
      <Container47 />
    </div>
  );
}

function Button4() {
  return (
    <div className="basis-0 bg-[#00a63e] grow h-[50.667px] min-h-px min-w-px relative shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[50.667px] relative w-full">
        <p className="absolute font-['Arimo:Regular','Noto_Sans_Symbols2:Regular',sans-serif] font-normal leading-[24px] left-[17.33px] text-[16px] text-nowrap text-white top-[11.67px] whitespace-pre">✓ APPROVE APPLICATION</p>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="basis-0 bg-[#155dfc] grow h-[50.667px] min-h-px min-w-px relative shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[50.667px] relative w-full">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[17.33px] text-[16px] text-nowrap text-white top-[11.67px] whitespace-pre">📧 REQUEST MORE INFO</p>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="basis-0 bg-[#e7000b] grow h-[50.667px] min-h-px min-w-px relative shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[50.667px] relative w-full">
        <p className="absolute font-['Arimo:Regular','Noto_Sans_Symbols2:Regular',sans-serif] font-normal leading-[24px] left-[17.33px] text-[16px] text-nowrap text-white top-[11.67px] whitespace-pre">✗ REJECT</p>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex gap-[8px] h-[50.667px] items-start relative shrink-0 w-full" data-name="Container">
      <Button4 />
      <Button5 />
      <Button6 />
    </div>
  );
}

function Container50() {
  return (
    <div className="h-[377.333px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] h-[377.333px] items-start pb-0 pt-[24px] px-[24px] relative w-full">
          <Container33 />
          <Container48 />
          <Container49 />
        </div>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="absolute bg-yellow-50 box-border content-stretch flex flex-col h-[385.333px] items-start left-0 p-[4px] top-0 w-[1488px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-[#d08700] border-solid inset-0 pointer-events-none" />
      <Container50 />
    </div>
  );
}

function Container52() {
  return (
    <div className="relative rounded-[4.47392e+07px] shrink-0 size-[64px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none rounded-[4.47392e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[64px]" />
    </div>
  );
}

function Container53() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Cousine:Regular',sans-serif] leading-[28px] left-0 not-italic text-[18px] text-neutral-950 text-nowrap top-0 whitespace-pre">James Wilson</p>
    </div>
  );
}

function Container54() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal h-[46px] leading-[20px] left-[-0.33px] text-[14px] text-neutral-950 top-[-2px] w-[207px]">Central Academy • Grade 9</p>
    </div>
  );
}

function Container55() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal h-[41px] leading-[20px] left-[-0.33px] text-[14px] text-neutral-950 top-[-2px] w-[148px]">Applied: Nov 5, 2024</p>
    </div>
  );
}

function Text3() {
  return (
    <div className="bg-blue-100 h-[26.667px] relative shrink-0 w-[78.083px]" data-name="Text">
      <div aria-hidden="true" className="absolute border-[#155dfc] border-[1.333px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[26.667px] relative w-[78.083px]">
        <p className="absolute font-['Cousine:Regular',sans-serif] h-[31px] leading-[16px] left-[8.94px] not-italic text-[12px] text-neutral-950 top-[6px] w-[69px]">TEST: 76%</p>
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="bg-[#fef9c2] h-[26.667px] relative shrink-0 w-[113.729px]" data-name="Text">
      <div aria-hidden="true" className="absolute border-[#d08700] border-[1.333px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[26.667px] relative w-[113.729px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[16px] left-[9.33px] text-[12px] text-neutral-950 text-nowrap top-[4.33px] whitespace-pre">PENDING REVIEW</p>
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex gap-[8px] h-[26.667px] items-start relative shrink-0 w-full" data-name="Container">
      <Text3 />
      <Text4 />
    </div>
  );
}

function Container57() {
  return (
    <div className="basis-0 grow h-[110.667px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[110.667px] items-start relative w-full">
        <Container53 />
        <Container54 />
        <Container55 />
        <Container56 />
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="h-[110.667px] relative shrink-0 w-[374.542px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[16px] h-[110.667px] items-start relative w-[374.542px]">
        <Container52 />
        <Container57 />
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="bg-black h-[42.667px] relative shrink-0 w-[210.333px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[42.667px] relative w-[210.333px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[17.33px] text-[16px] text-nowrap text-white top-[7.67px] whitespace-pre">VIEW FULL APPLICATION</p>
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="content-stretch flex h-[110.667px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container58 />
      <Button7 />
    </div>
  );
}

function Container60() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[12px] text-neutral-950">[CONTACT]</p>
    </div>
  );
}

function Container61() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Cousine:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-[-0.67px] whitespace-pre">james.w@email.com</p>
    </div>
  );
}

function Container62() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Cousine:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-[-0.67px] whitespace-pre">555-2003</p>
    </div>
  );
}

function Container63() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[60px] items-start left-0 top-0 w-[466.667px]" data-name="Container">
      <Container60 />
      <Container61 />
      <Container62 />
    </div>
  );
}

function Container64() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[12px] text-neutral-950">[PARENT/GUARDIAN]</p>
    </div>
  );
}

function Container65() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Cousine:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-[-0.67px] whitespace-pre">Mr. Wilson</p>
    </div>
  );
}

function Container66() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Cousine:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-[-0.67px] whitespace-pre">parent.w@email.com</p>
    </div>
  );
}

function Container67() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[60px] items-start left-[482.67px] top-0 w-[466.667px]" data-name="Container">
      <Container64 />
      <Container65 />
      <Container66 />
    </div>
  );
}

function Container68() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[12px] text-neutral-950">[TEST INFO]</p>
    </div>
  );
}

function Container69() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Cousine:Regular',sans-serif] h-[43px] leading-[20px] left-[0.33px] not-italic text-[14px] text-neutral-950 top-[-1px] w-[91px]">Score: 76%</p>
    </div>
  );
}

function Container70() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Cousine:Regular',sans-serif] h-[41px] leading-[20px] left-[0.33px] not-italic text-[14px] text-neutral-950 top-[-1px] w-[159px]">Date: Nov 3, 2024</p>
    </div>
  );
}

function Container71() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[60px] items-start left-[965.33px] top-0 w-[466.667px]" data-name="Container">
      <Container68 />
      <Container69 />
      <Container70 />
    </div>
  );
}

function Container72() {
  return (
    <div className="h-[60px] relative shrink-0 w-full" data-name="Container">
      <Container63 />
      <Container67 />
      <Container71 />
    </div>
  );
}

function Text5() {
  return (
    <div className="absolute content-stretch flex h-[17.333px] items-start left-[13.33px] top-[14.67px] w-[53.896px]" data-name="Text">
      <p className="font-['Cousine:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">[Notes]</p>
    </div>
  );
}

function Container73() {
  return (
    <div className="bg-white h-[46.667px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <Text5 />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[85.67px] text-[14px] text-neutral-950 top-[15px] w-[230px]">Needs additional support in algebra.</p>
    </div>
  );
}

function Container74() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[12px] h-[136px] items-start pb-0 pt-[17.333px] px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#d08700] border-[1.333px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Container72 />
      <Container73 />
    </div>
  );
}

function Button8() {
  return (
    <div className="basis-0 bg-[#00a63e] grow h-[50.667px] min-h-px min-w-px relative shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[50.667px] relative w-full">
        <p className="absolute font-['Arimo:Regular','Noto_Sans_Symbols2:Regular',sans-serif] font-normal leading-[24px] left-[17.33px] text-[16px] text-nowrap text-white top-[11.67px] whitespace-pre">✓ APPROVE APPLICATION</p>
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div className="basis-0 bg-[#155dfc] grow h-[50.667px] min-h-px min-w-px relative shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[50.667px] relative w-full">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[17.33px] text-[16px] text-nowrap text-white top-[11.67px] whitespace-pre">📧 REQUEST MORE INFO</p>
      </div>
    </div>
  );
}

function Button10() {
  return (
    <div className="basis-0 bg-[#e7000b] grow h-[50.667px] min-h-px min-w-px relative shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[50.667px] relative w-full">
        <p className="absolute font-['Arimo:Regular','Noto_Sans_Symbols2:Regular',sans-serif] font-normal leading-[24px] left-[17.33px] text-[16px] text-nowrap text-white top-[11.67px] whitespace-pre">✗ REJECT</p>
      </div>
    </div>
  );
}

function Container75() {
  return (
    <div className="content-stretch flex gap-[8px] h-[50.667px] items-start relative shrink-0 w-full" data-name="Container">
      <Button8 />
      <Button9 />
      <Button10 />
    </div>
  );
}

function Container76() {
  return (
    <div className="h-[377.333px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] h-[377.333px] items-start pb-0 pt-[24px] px-[24px] relative w-full">
          <Container59 />
          <Container74 />
          <Container75 />
        </div>
      </div>
    </div>
  );
}

function Container77() {
  return (
    <div className="absolute bg-yellow-50 box-border content-stretch flex flex-col h-[385.333px] items-start left-0 p-[4px] top-[401.33px] w-[1488px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-[#d08700] border-solid inset-0 pointer-events-none" />
      <Container76 />
    </div>
  );
}

function Container78() {
  return (
    <div className="relative rounded-[4.47392e+07px] shrink-0 size-[64px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none rounded-[4.47392e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[64px]" />
    </div>
  );
}

function Container79() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Cousine:Regular',sans-serif] leading-[28px] left-0 not-italic text-[18px] text-neutral-950 text-nowrap top-0 whitespace-pre">Olivia Garcia</p>
    </div>
  );
}

function Container80() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal h-[22px] leading-[20px] left-[-0.33px] text-[14px] text-neutral-950 top-[-2.33px] w-[173px]">North High • Grade 11</p>
    </div>
  );
}

function Container81() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal h-[38px] leading-[20px] left-[-0.33px] text-[14px] text-neutral-950 top-[-2.33px] w-[144px]">Applied: Nov 5, 2024</p>
    </div>
  );
}

function Text6() {
  return (
    <div className="bg-green-100 h-[26.667px] relative shrink-0 w-[78.083px]" data-name="Text">
      <div aria-hidden="true" className="absolute border-[#00a63e] border-[1.333px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[26.667px] relative w-[78.083px]">
        <p className="absolute font-['Cousine:Regular',sans-serif] h-[32px] leading-[16px] left-[9.38px] not-italic text-[12px] text-neutral-950 top-[5.67px] w-[69px]">TEST: 95%</p>
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="bg-[#fef9c2] h-[26.667px] relative shrink-0 w-[113.729px]" data-name="Text">
      <div aria-hidden="true" className="absolute border-[#d08700] border-[1.333px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[26.667px] relative w-[113.729px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[16px] left-[9.33px] text-[12px] text-neutral-950 text-nowrap top-[4.33px] whitespace-pre">PENDING REVIEW</p>
      </div>
    </div>
  );
}

function Container82() {
  return (
    <div className="content-stretch flex gap-[8px] h-[26.667px] items-start relative shrink-0 w-full" data-name="Container">
      <Text6 />
      <Text7 />
    </div>
  );
}

function Container83() {
  return (
    <div className="basis-0 grow h-[110.667px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[110.667px] items-start relative w-full">
        <Container79 />
        <Container80 />
        <Container81 />
        <Container82 />
      </div>
    </div>
  );
}

function Container84() {
  return (
    <div className="h-[110.667px] relative shrink-0 w-[344.104px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[16px] h-[110.667px] items-start relative w-[344.104px]">
        <Container78 />
        <Container83 />
      </div>
    </div>
  );
}

function Button11() {
  return (
    <div className="bg-black h-[42.667px] relative shrink-0 w-[210.333px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[42.667px] relative w-[210.333px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[17.33px] text-[16px] text-nowrap text-white top-[7.67px] whitespace-pre">VIEW FULL APPLICATION</p>
      </div>
    </div>
  );
}

function Container85() {
  return (
    <div className="content-stretch flex h-[110.667px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container84 />
      <Button11 />
    </div>
  );
}

function Container86() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[12px] text-neutral-950">[CONTACT]</p>
    </div>
  );
}

function Container87() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Cousine:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-[-0.67px] whitespace-pre">olivia.g@email.com</p>
    </div>
  );
}

function Container88() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Cousine:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-[-0.67px] whitespace-pre">555-2005</p>
    </div>
  );
}

function Container89() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[60px] items-start left-0 top-0 w-[466.667px]" data-name="Container">
      <Container86 />
      <Container87 />
      <Container88 />
    </div>
  );
}

function Container90() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[12px] text-neutral-950">[PARENT/GUARDIAN]</p>
    </div>
  );
}

function Container91() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Cousine:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-[-0.67px] whitespace-pre">Dr. Garcia</p>
    </div>
  );
}

function Container92() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Cousine:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-[-0.67px] whitespace-pre">parent.g@email.com</p>
    </div>
  );
}

function Container93() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[60px] items-start left-[482.67px] top-0 w-[466.667px]" data-name="Container">
      <Container90 />
      <Container91 />
      <Container92 />
    </div>
  );
}

function Container94() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[12px] text-neutral-950">[TEST INFO]</p>
    </div>
  );
}

function Container95() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Cousine:Regular',sans-serif] h-[44px] leading-[20px] left-[0.33px] not-italic text-[14px] text-neutral-950 top-[-0.33px] w-[108px]">Score: 95%</p>
    </div>
  );
}

function Container96() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Cousine:Regular',sans-serif] h-[39px] leading-[20px] left-[0.33px] not-italic text-[14px] text-neutral-950 top-[-0.33px] w-[146px]">Date: Nov 5, 2024</p>
    </div>
  );
}

function Container97() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[60px] items-start left-[965.33px] top-0 w-[466.667px]" data-name="Container">
      <Container94 />
      <Container95 />
      <Container96 />
    </div>
  );
}

function Container98() {
  return (
    <div className="h-[60px] relative shrink-0 w-full" data-name="Container">
      <Container89 />
      <Container93 />
      <Container97 />
    </div>
  );
}

function Text8() {
  return (
    <div className="absolute content-stretch flex h-[17.333px] items-start left-[13.33px] top-[14.67px] w-[53.896px]" data-name="Text">
      <p className="font-['Cousine:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">[Notes]</p>
    </div>
  );
}

function Container99() {
  return (
    <div className="bg-white h-[46.667px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <Text8 />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal h-[35px] leading-[20px] left-[93.67px] text-[14px] text-neutral-950 top-[14.67px] w-[294px]">Excellent test scores. Preparing for AP exams.</p>
    </div>
  );
}

function Container100() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[12px] h-[136px] items-start pb-0 pt-[17.333px] px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#d08700] border-[1.333px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Container98 />
      <Container99 />
    </div>
  );
}

function Button12() {
  return (
    <div className="basis-0 bg-[#00a63e] grow h-[50.667px] min-h-px min-w-px relative shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[50.667px] relative w-full">
        <p className="absolute font-['Arimo:Regular','Noto_Sans_Symbols2:Regular',sans-serif] font-normal leading-[24px] left-[17.33px] text-[16px] text-nowrap text-white top-[11.67px] whitespace-pre">✓ APPROVE APPLICATION</p>
      </div>
    </div>
  );
}

function Button13() {
  return (
    <div className="basis-0 bg-[#155dfc] grow h-[50.667px] min-h-px min-w-px relative shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[50.667px] relative w-full">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[17.33px] text-[16px] text-nowrap text-white top-[11.67px] whitespace-pre">📧 REQUEST MORE INFO</p>
      </div>
    </div>
  );
}

function Button14() {
  return (
    <div className="basis-0 bg-[#e7000b] grow h-[50.667px] min-h-px min-w-px relative shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[50.667px] relative w-full">
        <p className="absolute font-['Arimo:Regular','Noto_Sans_Symbols2:Regular',sans-serif] font-normal leading-[24px] left-[17.33px] text-[16px] text-nowrap text-white top-[11.67px] whitespace-pre">✗ REJECT</p>
      </div>
    </div>
  );
}

function Container101() {
  return (
    <div className="content-stretch flex gap-[8px] h-[50.667px] items-start relative shrink-0 w-full" data-name="Container">
      <Button12 />
      <Button13 />
      <Button14 />
    </div>
  );
}

function Container102() {
  return (
    <div className="h-[377.333px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] h-[377.333px] items-start pb-0 pt-[24px] px-[24px] relative w-full">
          <Container85 />
          <Container100 />
          <Container101 />
        </div>
      </div>
    </div>
  );
}

function Container103() {
  return (
    <div className="absolute bg-yellow-50 box-border content-stretch flex flex-col h-[385.333px] items-start left-0 p-[4px] top-[802.67px] w-[1488px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-[#d08700] border-solid inset-0 pointer-events-none" />
      <Container102 />
    </div>
  );
}

function Container104() {
  return (
    <div className="relative rounded-[4.47392e+07px] shrink-0 size-[64px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none rounded-[4.47392e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[64px]" />
    </div>
  );
}

function Container105() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Cousine:Regular',sans-serif] leading-[28px] left-0 not-italic text-[18px] text-neutral-950 text-nowrap top-0 whitespace-pre">Ethan Lee</p>
    </div>
  );
}

function Container106() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal h-[43px] leading-[20px] left-[-0.33px] text-[14px] text-neutral-950 top-[-1.67px] w-[198px]">East Middle School • Grade 8</p>
    </div>
  );
}

function Container107() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal h-[42px] leading-[20px] left-[-0.33px] text-[14px] text-neutral-950 top-[-1.67px] w-[154px]">Applied: Nov 5, 2024</p>
    </div>
  );
}

function Text9() {
  return (
    <div className="bg-blue-100 h-[26.667px] relative shrink-0 w-[78.083px]" data-name="Text">
      <div aria-hidden="true" className="absolute border-[#155dfc] border-[1.333px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[26.667px] relative w-[78.083px]">
        <p className="absolute font-['Cousine:Regular',sans-serif] h-[34px] leading-[16px] left-[9.27px] not-italic text-[12px] text-neutral-950 top-[5.33px] w-[69px]">TEST: 88%</p>
      </div>
    </div>
  );
}

function Text10() {
  return (
    <div className="bg-[#fef9c2] h-[26.667px] relative shrink-0 w-[113.729px]" data-name="Text">
      <div aria-hidden="true" className="absolute border-[#d08700] border-[1.333px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[26.667px] relative w-[113.729px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[16px] left-[9.33px] text-[12px] text-neutral-950 text-nowrap top-[4.33px] whitespace-pre">PENDING REVIEW</p>
      </div>
    </div>
  );
}

function Container108() {
  return (
    <div className="content-stretch flex gap-[8px] h-[26.667px] items-start relative shrink-0 w-full" data-name="Container">
      <Text9 />
      <Text10 />
    </div>
  );
}

function Container109() {
  return (
    <div className="basis-0 grow h-[110.667px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[110.667px] items-start relative w-full">
        <Container105 />
        <Container106 />
        <Container107 />
        <Container108 />
      </div>
    </div>
  );
}

function Container110() {
  return (
    <div className="h-[110.667px] relative shrink-0 w-[346.208px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[16px] h-[110.667px] items-start relative w-[346.208px]">
        <Container104 />
        <Container109 />
      </div>
    </div>
  );
}

function Button15() {
  return (
    <div className="bg-black h-[42.667px] relative shrink-0 w-[210.333px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[42.667px] relative w-[210.333px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[17.33px] text-[16px] text-nowrap text-white top-[7.67px] whitespace-pre">VIEW FULL APPLICATION</p>
      </div>
    </div>
  );
}

function Container111() {
  return (
    <div className="content-stretch flex h-[110.667px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container110 />
      <Button15 />
    </div>
  );
}

function Container112() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[12px] text-neutral-950">[CONTACT]</p>
    </div>
  );
}

function Container113() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Cousine:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-[-0.67px] whitespace-pre">ethan.l@email.com</p>
    </div>
  );
}

function Container114() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Cousine:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-[-0.67px] whitespace-pre">555-2007</p>
    </div>
  );
}

function Container115() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[60px] items-start left-0 top-0 w-[466.667px]" data-name="Container">
      <Container112 />
      <Container113 />
      <Container114 />
    </div>
  );
}

function Container116() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[12px] text-neutral-950">[PARENT/GUARDIAN]</p>
    </div>
  );
}

function Container117() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Cousine:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-[-0.67px] whitespace-pre">Ms. Lee</p>
    </div>
  );
}

function Container118() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Cousine:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-[-0.67px] whitespace-pre">parent.l@email.com</p>
    </div>
  );
}

function Container119() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[60px] items-start left-[482.67px] top-0 w-[466.667px]" data-name="Container">
      <Container116 />
      <Container117 />
      <Container118 />
    </div>
  );
}

function Container120() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[12px] text-neutral-950">[TEST INFO]</p>
    </div>
  );
}

function Container121() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Cousine:Regular',sans-serif] h-[38px] leading-[20px] left-[0.33px] not-italic text-[14px] text-neutral-950 top-[-0.67px] w-[134px]">Score: 88%</p>
    </div>
  );
}

function Container122() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Cousine:Regular',sans-serif] h-[40px] leading-[20px] left-[0.33px] not-italic text-[14px] text-neutral-950 top-[-0.67px] w-[157px]">Date: Nov 4, 2024</p>
    </div>
  );
}

function Container123() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[60px] items-start left-[965.33px] top-0 w-[466.667px]" data-name="Container">
      <Container120 />
      <Container121 />
      <Container122 />
    </div>
  );
}

function Container124() {
  return (
    <div className="h-[60px] relative shrink-0 w-full" data-name="Container">
      <Container115 />
      <Container119 />
      <Container123 />
    </div>
  );
}

function Text11() {
  return (
    <div className="absolute content-stretch flex h-[17.333px] items-start left-[13.33px] top-[14.67px] w-[53.896px]" data-name="Text">
      <p className="font-['Cousine:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">[Notes]</p>
    </div>
  );
}

function Container125() {
  return (
    <div className="bg-white h-[46.667px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <Text11 />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[92.67px] text-[14px] text-neutral-950 top-[14.33px] w-[265px]">Interested in science enrichment program.</p>
    </div>
  );
}

function Container126() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[12px] h-[136px] items-start pb-0 pt-[17.333px] px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#d08700] border-[1.333px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Container124 />
      <Container125 />
    </div>
  );
}

function Button16() {
  return (
    <div className="basis-0 bg-[#00a63e] grow h-[50.667px] min-h-px min-w-px relative shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[50.667px] relative w-full">
        <p className="absolute font-['Arimo:Regular','Noto_Sans_Symbols2:Regular',sans-serif] font-normal leading-[24px] left-[17.33px] text-[16px] text-nowrap text-white top-[11.67px] whitespace-pre">✓ APPROVE APPLICATION</p>
      </div>
    </div>
  );
}

function Button17() {
  return (
    <div className="basis-0 bg-[#155dfc] grow h-[50.667px] min-h-px min-w-px relative shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[50.667px] relative w-full">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[17.33px] text-[16px] text-nowrap text-white top-[11.67px] whitespace-pre">📧 REQUEST MORE INFO</p>
      </div>
    </div>
  );
}

function Button18() {
  return (
    <div className="basis-0 bg-[#e7000b] grow h-[50.667px] min-h-px min-w-px relative shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[50.667px] relative w-full">
        <p className="absolute font-['Arimo:Regular','Noto_Sans_Symbols2:Regular',sans-serif] font-normal leading-[24px] left-[17.33px] text-[16px] text-nowrap text-white top-[11.67px] whitespace-pre">✗ REJECT</p>
      </div>
    </div>
  );
}

function Container127() {
  return (
    <div className="content-stretch flex gap-[8px] h-[50.667px] items-start relative shrink-0 w-full" data-name="Container">
      <Button16 />
      <Button17 />
      <Button18 />
    </div>
  );
}

function Container128() {
  return (
    <div className="h-[377.333px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] h-[377.333px] items-start pb-0 pt-[24px] px-[24px] relative w-full">
          <Container111 />
          <Container126 />
          <Container127 />
        </div>
      </div>
    </div>
  );
}

function Container129() {
  return (
    <div className="absolute bg-yellow-50 box-border content-stretch flex flex-col h-[385.333px] items-start left-0 p-[4px] top-[1204px] w-[1488px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-[#d08700] border-solid inset-0 pointer-events-none" />
      <Container128 />
    </div>
  );
}

function Container130() {
  return (
    <div className="relative rounded-[4.47392e+07px] shrink-0 size-[64px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none rounded-[4.47392e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[64px]" />
    </div>
  );
}

function Container131() {
  return (
    <div className="absolute h-[28px] left-0 top-0 w-[264.438px]" data-name="Container">
      <p className="absolute font-['Cousine:Regular',sans-serif] leading-[28px] left-0 not-italic text-[18px] text-neutral-950 text-nowrap top-0 whitespace-pre">Sophia Martinez</p>
    </div>
  );
}

function Container132() {
  return (
    <div className="absolute h-[20px] left-0 top-[32px] w-[264.438px]" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal h-[42px] leading-[20px] left-[-0.33px] text-[14px] text-neutral-950 top-[-2px] w-[151px]">South High • Grade 10</p>
    </div>
  );
}

function Container133() {
  return (
    <div className="absolute h-[20px] left-0 top-[56px] w-[264.438px]" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal h-[36px] leading-[20px] left-[-0.33px] text-[14px] text-neutral-950 top-[-2px] w-[141px]">Applied: Nov 5, 2024</p>
    </div>
  );
}

function Text12() {
  return (
    <div className="bg-green-100 h-[26.667px] relative shrink-0 w-[78.083px]" data-name="Text">
      <div aria-hidden="true" className="absolute border-[#00a63e] border-[1.333px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[26.667px] relative w-[78.083px]">
        <p className="absolute font-['Cousine:Regular',sans-serif] h-[33px] leading-[16px] left-[9.04px] not-italic text-[12px] text-neutral-950 top-[6px] w-[69px]">TEST: 90%</p>
      </div>
    </div>
  );
}

function Text13() {
  return (
    <div className="bg-[#fef9c2] h-[26.667px] relative shrink-0 w-[113.729px]" data-name="Text">
      <div aria-hidden="true" className="absolute border-[#d08700] border-[1.333px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[26.667px] relative w-[113.729px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[16px] left-[9.33px] text-[12px] text-neutral-950 text-nowrap top-[4.33px] whitespace-pre">PENDING REVIEW</p>
      </div>
    </div>
  );
}

function Container134() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[26.667px] items-start left-0 top-[84px] w-[264.438px]" data-name="Container">
      <Text12 />
      <Text13 />
    </div>
  );
}

function Container135() {
  return (
    <div className="basis-0 grow h-[110.667px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[110.667px] relative w-full">
        <Container131 />
        <Container132 />
        <Container133 />
        <Container134 />
      </div>
    </div>
  );
}

function Container136() {
  return (
    <div className="h-[110.667px] relative shrink-0 w-[344.438px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[16px] h-[110.667px] items-start relative w-[344.438px]">
        <Container130 />
        <Container135 />
      </div>
    </div>
  );
}

function Button19() {
  return (
    <div className="bg-black h-[42.667px] relative shrink-0 w-[210.333px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[42.667px] relative w-[210.333px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[17.33px] text-[16px] text-nowrap text-white top-[7.67px] whitespace-pre">VIEW FULL APPLICATION</p>
      </div>
    </div>
  );
}

function Container137() {
  return (
    <div className="content-stretch flex h-[110.667px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container136 />
      <Button19 />
    </div>
  );
}

function Container138() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[12px] text-neutral-950">[CONTACT]</p>
    </div>
  );
}

function Container139() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Cousine:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-[-0.67px] whitespace-pre">sophia.m@email.com</p>
    </div>
  );
}

function Container140() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Cousine:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-[-0.67px] whitespace-pre">555-2009</p>
    </div>
  );
}

function Container141() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[60px] items-start left-0 top-0 w-[466.667px]" data-name="Container">
      <Container138 />
      <Container139 />
      <Container140 />
    </div>
  );
}

function Container142() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[12px] text-neutral-950">[PARENT/GUARDIAN]</p>
    </div>
  );
}

function Container143() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Cousine:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-[-0.67px] whitespace-pre">{`Mr. & Mrs. Martinez`}</p>
    </div>
  );
}

function Container144() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Cousine:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-[-0.67px] whitespace-pre">parent.martinez@email.com</p>
    </div>
  );
}

function Container145() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[60px] items-start left-[482.67px] top-0 w-[466.667px]" data-name="Container">
      <Container142 />
      <Container143 />
      <Container144 />
    </div>
  );
}

function Container146() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[12px] text-neutral-950">[TEST INFO]</p>
    </div>
  );
}

function Container147() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Cousine:Regular',sans-serif] h-[44px] leading-[20px] left-[0.33px] not-italic text-[14px] text-neutral-950 top-[-1px] w-[95px]">Score: 90%</p>
    </div>
  );
}

function Container148() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Cousine:Regular',sans-serif] h-[39px] leading-[20px] left-[0.33px] not-italic text-[14px] text-neutral-950 top-[-1px] w-[152px]">Date: Nov 5, 2024</p>
    </div>
  );
}

function Container149() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[60px] items-start left-[965.33px] top-0 w-[466.667px]" data-name="Container">
      <Container146 />
      <Container147 />
      <Container148 />
    </div>
  );
}

function Container150() {
  return (
    <div className="h-[60px] relative shrink-0 w-full" data-name="Container">
      <Container141 />
      <Container145 />
      <Container149 />
    </div>
  );
}

function Text14() {
  return (
    <div className="absolute content-stretch flex h-[17.333px] items-start left-[13.33px] top-[14.67px] w-[53.896px]" data-name="Text">
      <p className="font-['Cousine:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">[Notes]</p>
    </div>
  );
}

function Container151() {
  return (
    <div className="bg-white h-[46.667px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <Text14 />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[86.67px] text-[14px] text-neutral-950 top-[15px] w-[335px]">Struggling with physics concepts but shows potential.</p>
    </div>
  );
}

function Container152() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[12px] h-[136px] items-start pb-0 pt-[17.333px] px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#d08700] border-[1.333px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Container150 />
      <Container151 />
    </div>
  );
}

function Button20() {
  return (
    <div className="basis-0 bg-[#00a63e] grow h-[50.667px] min-h-px min-w-px relative shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[50.667px] relative w-full">
        <p className="absolute font-['Arimo:Regular','Noto_Sans_Symbols2:Regular',sans-serif] font-normal leading-[24px] left-[17.33px] text-[16px] text-nowrap text-white top-[11.67px] whitespace-pre">✓ APPROVE APPLICATION</p>
      </div>
    </div>
  );
}

function Button21() {
  return (
    <div className="basis-0 bg-[#155dfc] grow h-[50.667px] min-h-px min-w-px relative shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[50.667px] relative w-full">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[17.33px] text-[16px] text-nowrap text-white top-[11.67px] whitespace-pre">📧 REQUEST MORE INFO</p>
      </div>
    </div>
  );
}

function Button22() {
  return (
    <div className="basis-0 bg-[#e7000b] grow h-[50.667px] min-h-px min-w-px relative shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[50.667px] relative w-full">
        <p className="absolute font-['Arimo:Regular','Noto_Sans_Symbols2:Regular',sans-serif] font-normal leading-[24px] left-[17.33px] text-[16px] text-nowrap text-white top-[11.67px] whitespace-pre">✗ REJECT</p>
      </div>
    </div>
  );
}

function Container153() {
  return (
    <div className="content-stretch flex gap-[8px] h-[50.667px] items-start relative shrink-0 w-full" data-name="Container">
      <Button20 />
      <Button21 />
      <Button22 />
    </div>
  );
}

function Container154() {
  return (
    <div className="h-[377.333px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] h-[377.333px] items-start pb-0 pt-[24px] px-[24px] relative w-full">
          <Container137 />
          <Container152 />
          <Container153 />
        </div>
      </div>
    </div>
  );
}

function Container155() {
  return (
    <div className="absolute bg-yellow-50 box-border content-stretch flex flex-col h-[385.333px] items-start left-0 p-[4px] top-[1605.33px] w-[1488px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-[#d08700] border-solid inset-0 pointer-events-none" />
      <Container154 />
    </div>
  );
}

function Container156() {
  return (
    <div className="h-[1990.67px] relative shrink-0 w-full" data-name="Container">
      <Container51 />
      <Container77 />
      <Container103 />
      <Container129 />
      <Container155 />
    </div>
  );
}

function Container157() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[24px] h-[2518.67px] items-start left-[317.33px] pb-0 pt-[32px] px-[24px] top-[70.67px] w-[1536px]" data-name="Container">
      <Container5 />
      <Container18 />
      <Container19 />
      <Container25 />
      <Container156 />
    </div>
  );
}

function ViewPendingStudents() {
  return (
    <div className="bg-white h-[2589.33px] relative shrink-0 w-full" data-name="ViewPendingStudents">
      <Container2 />
      <Container157 />
    </div>
  );
}

function App() {
  return (
    <div className="absolute bg-gray-50 box-border content-stretch flex flex-col h-[2637.33px] items-start left-0 pb-0 pt-[48px] px-0 top-0 w-[2170.67px]" data-name="App">
      <ViewPendingStudents />
    </div>
  );
}

export default function PendingApplicationsStudent() {
  return (
    <div className="bg-white relative size-full" data-name="Pending Applications - Student">
      <App />
    </div>
  );
}