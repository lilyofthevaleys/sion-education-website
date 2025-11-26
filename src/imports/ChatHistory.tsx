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
    <div className="h-[34.667px] relative shrink-0 w-[103.708px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[34.667px] relative w-[103.708px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[13.33px] text-[16px] text-neutral-950 text-nowrap top-[3.67px] whitespace-pre">MESSAGES</p>
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

function SearchInput() {
  return (
    <div className="h-[42.667px] relative shrink-0 w-full" data-name="Search Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[42.667px] items-center px-[12px] py-[8px] relative w-full">
          <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-[rgba(10,10,10,0.5)] w-[155px]">[Search by name]</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[76px] relative shrink-0 w-[316px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1.333px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[76px] items-start pb-[1.333px] pt-[16px] px-[16px] relative w-[316px]">
        <SearchInput />
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-black h-[40px] left-[8px] top-[8px] w-[99.104px]" data-name="Button">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[12px] text-[16px] text-nowrap text-white top-[6.33px] whitespace-pre">Teacher</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute h-[40px] left-[107.1px] top-[8px] w-[100.438px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0px_0px_0px_1.333px] border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[57.333px] relative shrink-0 w-[316px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1.333px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[57.333px] relative w-[316px]">
        <Button1 />
        <Button2 />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="relative rounded-[4.47392e+07px] shrink-0 size-[40px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none rounded-[4.47392e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[40px]" />
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[24px] relative shrink-0 w-[135px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] overflow-clip relative rounded-[inherit] w-[135px]">
        <p className="absolute font-['Cousine:Regular',sans-serif] leading-[24px] left-[-0.33px] not-italic text-[16px] text-neutral-950 top-[8px] w-[161px]">Ms. Johnson</p>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[16px] relative shrink-0 w-[39.521px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16px] w-[39.521px]" />
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute content-stretch flex h-[24px] items-center justify-between left-0 top-0 w-[232px]" data-name="Container">
      <Container6 />
      <Text />
    </div>
  );
}

function Container8() {
  return (
    <div className="basis-0 grow h-[72.667px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[72.667px] relative w-full">
        <Container7 />
        <p className="absolute font-['Cousine:Regular','Noto_Sans_Symbols2:Regular',sans-serif] leading-[24px] left-[-0.33px] not-italic text-[16px] text-neutral-950 top-[49px] w-[161px]">5 Students ▽</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex gap-[12px] h-[72.667px] items-start relative shrink-0 w-full" data-name="Container">
      <Container5 />
      <Container8 />
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute bg-gray-100 box-border content-stretch flex flex-col h-[106px] items-start left-0 pb-[1.333px] pt-[16px] px-[16px] top-0 w-[316px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1.333px] border-black border-solid inset-0 pointer-events-none" />
      <Container9 />
    </div>
  );
}

function Container11() {
  return (
    <div className="relative rounded-[4.47392e+07px] shrink-0 size-[40px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none rounded-[4.47392e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[40px]" />
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[24px] relative shrink-0 w-[135px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] overflow-clip relative rounded-[inherit] w-[135px]">
        <p className="absolute font-['Cousine:Regular',sans-serif] leading-[24px] left-[-0.33px] not-italic text-[16px] text-neutral-950 top-[8px] w-[161px]">Ms. Eve</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[16px] relative shrink-0 w-[39.521px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16px] w-[39.521px]" />
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute content-stretch flex h-[24px] items-center justify-between left-0 top-0 w-[232px]" data-name="Container">
      <Container12 />
      <Text1 />
    </div>
  );
}

function Container14() {
  return (
    <div className="basis-0 grow h-[72.667px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[72.667px] relative w-full">
        <Container13 />
        <p className="absolute font-['Cousine:Regular','Noto_Sans_Symbols2:Regular',sans-serif] leading-[24px] left-[-0.33px] not-italic text-[16px] text-neutral-950 top-[49px] w-[161px]">9 Students ▽</p>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[16px] relative shrink-0 w-[39.521px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16px] w-[39.521px]" />
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute content-stretch flex h-[24px] items-center justify-between left-0 top-0 w-[232px]" data-name="Container">
      <Text2 />
    </div>
  );
}

function Container16() {
  return <div className="absolute h-[20px] left-0 top-[28px] w-[232px]" data-name="Container" />;
}

function Container17() {
  return (
    <div className="basis-0 grow h-[72.667px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[72.667px] relative w-full">
        <Container15 />
        <Container16 />
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex gap-[12px] h-[72.667px] items-start relative shrink-0 w-full" data-name="Container">
      <Container11 />
      <Container14 />
      <Container17 />
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[106px] items-start left-0 pb-[1.333px] pt-[16px] px-[16px] top-[106px] w-[316px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1.333px] border-black border-solid inset-0 pointer-events-none" />
      <Container18 />
    </div>
  );
}

function Container20() {
  return (
    <div className="relative rounded-[4.47392e+07px] shrink-0 size-[40px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none rounded-[4.47392e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[40px]" />
    </div>
  );
}

function Container21() {
  return (
    <div className="h-[24px] relative shrink-0 w-[135px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] overflow-clip relative rounded-[inherit] w-[135px]">
        <p className="absolute font-['Cousine:Regular',sans-serif] leading-[24px] left-[-0.33px] not-italic text-[16px] text-neutral-950 top-[8px] w-[161px]">Ms. Kelly</p>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[16px] relative shrink-0 w-[39.521px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16px] w-[39.521px]" />
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute content-stretch flex h-[24px] items-center justify-between left-0 top-0 w-[232px]" data-name="Container">
      <Container21 />
      <Text3 />
    </div>
  );
}

function Container23() {
  return (
    <div className="basis-0 grow h-[72.667px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[72.667px] relative w-full">
        <Container22 />
        <p className="absolute font-['Cousine:Regular','Noto_Sans_Symbols2:Regular',sans-serif] leading-[24px] left-[-0.33px] not-italic text-[16px] text-neutral-950 top-[49px] w-[161px]">10 Students ▽</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex gap-[12px] h-[48px] items-start relative shrink-0 w-full" data-name="Container">
      <Container20 />
      <Container23 />
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[98px] items-start left-[-0.33px] pb-[1.333px] pt-[16px] px-[16px] top-[212px] w-[316px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1.333px] border-black border-solid inset-0 pointer-events-none" />
      <Container24 />
    </div>
  );
}

function Container26() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[316px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full overflow-clip relative rounded-[inherit] w-[316px]">
        <Container10 />
        <Container19 />
        <Container25 />
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="h-[1140px] relative shrink-0 w-[320px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_4px_0px_0px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[1140px] items-start pl-0 pr-[4px] py-0 relative w-[320px]">
        <Container3 />
        <Container4 />
        <Container26 />
      </div>
    </div>
  );
}

function Container28() {
  return <div className="h-[24px] shrink-0 w-full" data-name="Container" />;
}

function Container29() {
  return <div className="h-[20px] shrink-0 w-full" data-name="Container" />;
}

function Container30() {
  return (
    <div className="h-[44px] relative shrink-0 w-[339px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[44px] items-start relative w-[339px]">
        <Container28 />
        <p className="font-['Cousine:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-neutral-950 w-[361px]">Ms. Johnson → Adi</p>
        <Container29 />
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="h-[44px] relative shrink-0 w-[148.771px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[44px] items-center relative w-[148.771px]">
        <Container30 />
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="h-[34.667px] relative shrink-0 w-[32.021px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[34.667px] relative w-[32.021px]">
        <p className="absolute font-['Arimo:Regular','Noto_Sans_Math:Regular',sans-serif] font-normal leading-[24px] left-[13.33px] text-[16px] text-neutral-950 text-nowrap top-[3.67px] whitespace-pre">⋮</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="h-[80px] relative shrink-0 w-[1216px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_4px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[80px] items-center justify-between pb-[4px] pt-0 px-[16px] relative w-[1216px]">
        <Container31 />
        <Button3 />
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="relative rounded-[4.47392e+07px] shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none rounded-[4.47392e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[32px]" />
    </div>
  );
}

function Container34() {
  return (
    <div className="h-[50.667px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[13.33px] text-[16px] text-neutral-950 text-nowrap top-[11.67px] whitespace-pre">Hi! Could you review my homework?</p>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[12px] text-neutral-950">10:30 AM</p>
    </div>
  );
}

function Container36() {
  return (
    <div className="h-[70.667px] relative shrink-0 w-[285.292px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[70.667px] items-start relative w-[285.292px]">
        <Container34 />
        <Container35 />
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[70.667px] items-start left-[24px] top-[24px] w-[1168px]" data-name="Container">
      <Container33 />
      <Container36 />
    </div>
  );
}

function Container38() {
  return (
    <div className="bg-black h-[50.667px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[13.33px] text-[16px] text-nowrap text-white top-[11.67px] whitespace-pre">NO! STAY AWAY! HELP ME!</p>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[12px] text-neutral-950 text-right">10:45 AM</p>
    </div>
  );
}

function Container40() {
  return (
    <div className="h-[70.667px] relative shrink-0 w-[289.479px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[70.667px] items-start relative w-[289.479px]">
        <Container38 />
        <Container39 />
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="relative rounded-[4.47392e+07px] shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none rounded-[4.47392e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[32px]" />
    </div>
  );
}

function Container42() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[70.667px] items-start justify-end left-[24px] top-[110.67px] w-[1168px]" data-name="Container">
      <Container40 />
      <Container41 />
    </div>
  );
}

function Container43() {
  return (
    <div className="relative rounded-[4.47392e+07px] shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none rounded-[4.47392e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[32px]" />
    </div>
  );
}

function Container44() {
  return (
    <div className="h-[50.667px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[13.33px] text-[16px] text-neutral-950 text-nowrap top-[11.67px] whitespace-pre">Thank you! I was unsure about question 7.</p>
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[12px] text-neutral-950">11:15 AM</p>
    </div>
  );
}

function Container46() {
  return (
    <div className="h-[70.667px] relative shrink-0 w-[324.146px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[70.667px] items-start relative w-[324.146px]">
        <Container44 />
        <Container45 />
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[70.667px] items-start left-[24px] top-[197.33px] w-[1168px]" data-name="Container">
      <Container43 />
      <Container46 />
    </div>
  );
}

function Container48() {
  return (
    <div className="bg-black h-[74.667px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[13.33px] text-[16px] text-white top-[11.67px] w-[405px]">{`For Q7, break it down step by step. Start with what you're solving for.`}</p>
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[12px] text-neutral-950 text-right">1:20 PM</p>
    </div>
  );
}

function Container50() {
  return (
    <div className="h-[94.667px] relative shrink-0 w-[448px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[94.667px] items-start relative w-[448px]">
        <Container48 />
        <Container49 />
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="relative rounded-[4.47392e+07px] shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none rounded-[4.47392e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[32px]" />
    </div>
  );
}

function Container52() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[94.667px] items-start justify-end left-[24px] top-[284px] w-[1168px]" data-name="Container">
      <Container50 />
      <Container51 />
    </div>
  );
}

function Container53() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[1216px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full overflow-clip relative rounded-[inherit] w-[1216px]">
        <Container37 />
        <Container42 />
        <Container47 />
        <Container52 />
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="h-[42.667px] relative shrink-0 w-[48.646px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[42.667px] relative w-[48.646px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[13.33px] text-[16px] text-neutral-950 text-nowrap top-[7.67px] whitespace-pre">📎</p>
      </div>
    </div>
  );
}

function TextInput() {
  return (
    <div className="basis-0 grow h-[50.667px] min-h-px min-w-px relative shrink-0" data-name="Text Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[50.667px] items-center px-[16px] py-[12px] relative w-full">
          <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-[rgba(10,10,10,0.5)] text-nowrap whitespace-pre">[Type message...]</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-black h-[50.667px] relative shrink-0 w-[92.646px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[50.667px] relative w-[92.646px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[17.33px] text-[16px] text-nowrap text-white top-[11.67px] whitespace-pre">SEND →</p>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="h-[50.667px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] h-[50.667px] items-center relative w-full">
          <Button4 />
          <TextInput />
          <Button5 />
        </div>
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="h-[86.667px] relative shrink-0 w-[1216px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[4px_0px_0px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[86.667px] items-start pb-0 pt-[20px] px-[16px] relative w-[1216px]">
        <Container54 />
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="basis-0 grow h-[1140px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[1140px] items-start relative w-full">
        <Container32 />
        <Container53 />
        <Container55 />
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="absolute content-stretch flex h-[1140px] items-start left-[317.33px] overflow-clip top-[70.67px] w-[1536px]" data-name="Container">
      <Container27 />
      <Container56 />
    </div>
  );
}

function ChatInterface() {
  return (
    <div className="bg-white h-[1210.67px] relative shrink-0 w-full" data-name="ChatInterface">
      <Container2 />
      <Container57 />
    </div>
  );
}

function App() {
  return (
    <div className="absolute bg-gray-50 box-border content-stretch flex flex-col h-[1258.67px] items-start left-0 pb-0 pt-[48px] px-0 top-0 w-[2170.67px]" data-name="App">
      <ChatInterface />
    </div>
  );
}

export default function ChatHistory() {
  return (
    <div className="bg-white relative size-full" data-name="Chat history">
      <App />
    </div>
  );
}