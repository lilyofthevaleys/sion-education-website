function Container() {
  return (
    <div className="absolute box-border content-stretch flex items-center justify-center left-[288px] p-[4px] size-[96px] top-[52px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <p className="font-['Arimo:Regular','Noto_Sans_Symbols2:Regular',sans-serif] font-normal leading-[40px] relative shrink-0 text-[36px] text-center text-neutral-950 text-nowrap whitespace-pre">✓</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute h-[56px] left-[52px] top-[172px] w-[568px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[284px] text-[16px] text-center text-neutral-950 text-nowrap top-[14.33px] translate-x-[-50%] whitespace-pre">TEST SUBMITTED!</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute h-[50.667px] left-[52px] top-[244px] w-[568px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[283.58px] text-[16px] text-center text-neutral-950 text-nowrap top-[11.67px] translate-x-[-50%] whitespace-pre">Your application is now under review</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[42.667px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[256.44px] text-[16px] text-center text-neutral-950 text-nowrap top-[7.67px] translate-x-[-50%] whitespace-pre">WHAT HAPPENS NEXT?</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center p-[1.333px] relative size-[40px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-neutral-950 text-nowrap whitespace-pre">✉</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Cousine:Regular',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-[-0.33px] whitespace-pre">[1] Email Confirmation</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[14px] text-neutral-950">Check your email for details</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[48px] relative shrink-0 w-[193.542px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[48px] items-start relative w-[193.542px]">
        <Container5 />
        <Container6 />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex gap-[12px] h-[48px] items-start relative shrink-0 w-full" data-name="Container">
      <Container4 />
      <Container7 />
    </div>
  );
}

function Container9() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center p-[1.333px] relative size-[40px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-neutral-950 text-nowrap whitespace-pre">⏱</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Cousine:Regular',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-[-0.33px] whitespace-pre">[2] Review Process</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[14px] text-neutral-950">2-3 business days</p>
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[48px] relative shrink-0 w-[158.354px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[48px] items-start relative w-[158.354px]">
        <Container10 />
        <Container11 />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex gap-[12px] h-[48px] items-start relative shrink-0 w-full" data-name="Container">
      <Container9 />
      <Container12 />
    </div>
  );
}

function Container14() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center p-[1.333px] relative size-[40px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-neutral-950 text-nowrap whitespace-pre">📅</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Cousine:Regular',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-[-0.33px] whitespace-pre">[3] Interview (Teachers)</p>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[14px] text-neutral-950">Schedule if approved</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[48px] relative shrink-0 w-[211.125px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[48px] items-start relative w-[211.125px]">
        <Container15 />
        <Container16 />
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex gap-[12px] h-[48px] items-start relative shrink-0 w-full" data-name="Container">
      <Container14 />
      <Container17 />
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[168px] items-start relative shrink-0 w-full" data-name="Container">
      <Container8 />
      <Container13 />
      <Container18 />
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[16px] h-[282.667px] items-start left-[52px] pb-[4px] pt-[28px] px-[28px] top-[326.67px] w-[568px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <Container3 />
      <Container19 />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-black h-[56px] relative shrink-0 w-[179.417px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[56px] relative w-[179.417px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[36px] text-[16px] text-nowrap text-white top-[14.33px] whitespace-pre">[GO TO LOGIN]</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="h-[56px] relative shrink-0 w-[170.292px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[56px] relative w-[170.292px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[36px] text-[16px] text-neutral-950 text-nowrap top-[14.33px] whitespace-pre">[BACK HOME]</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[56px] items-start justify-center left-[52px] top-[641.33px] w-[568px]" data-name="Container">
      <Button />
      <Button1 />
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute h-[42.667px] left-[149.13px] top-[25.33px] w-[269.729px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[135.33px] text-[16px] text-center text-neutral-950 text-nowrap top-[7.67px] translate-x-[-50%] whitespace-pre">Application ID: SION-2024-00123</p>
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-0 top-[76px] w-[568px]" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[14px] text-center text-neutral-950">Save this ID for reference</p>
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute h-[96px] left-[52px] top-[729.33px] w-[568px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px_0px_0px] border-black border-solid inset-0 pointer-events-none" />
      <Container22 />
      <Container23 />
    </div>
  );
}

function Container25() {
  return (
    <div className="h-[877.333px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <Container />
      <Container1 />
      <Container2 />
      <Container20 />
      <Container21 />
      <Container24 />
    </div>
  );
}

function Container26() {
  return (
    <div className="h-[38.667px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[336.38px] text-[14px] text-center text-neutral-950 text-nowrap top-[7.33px] translate-x-[-50%] whitespace-pre">
        <span>{`Need help? `}</span>
        <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid underline">Contact</span>
        <span>{` our socials.`}</span>
      </p>
    </div>
  );
}

function TestSubmission() {
  return (
    <div className="bg-white h-[1210.67px] relative shrink-0 w-full" data-name="TestSubmission">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] h-[1210.67px] items-start pb-0 pt-[139.333px] px-[749.333px] relative w-full">
          <Container25 />
          <Container26 />
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="absolute bg-gray-50 box-border content-stretch flex flex-col h-[1164px] items-start left-0 pb-0 pt-[3px] px-0 top-0 w-[2171px]" data-name="App">
      <TestSubmission />
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute box-border content-stretch flex items-center justify-center left-[288px] p-[4px] size-[96px] top-[52px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <p className="font-['Arimo:Regular','Noto_Sans_Symbols2:Regular',sans-serif] font-normal leading-[40px] relative shrink-0 text-[36px] text-center text-neutral-950 text-nowrap whitespace-pre">✓</p>
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute h-[56px] left-[52px] top-[172px] w-[568px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[284px] text-[16px] text-center text-neutral-950 text-nowrap top-[14.33px] translate-x-[-50%] whitespace-pre">TEST SUBMITTED!</p>
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute h-[50.667px] left-[52px] top-[244px] w-[568px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[283.58px] text-[16px] text-center text-neutral-950 text-nowrap top-[11.67px] translate-x-[-50%] whitespace-pre">Your application is now under review</p>
    </div>
  );
}

function Container30() {
  return (
    <div className="h-[42.667px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[256.44px] text-[16px] text-center text-neutral-950 text-nowrap top-[7.67px] translate-x-[-50%] whitespace-pre">WHAT HAPPENS NEXT?</p>
    </div>
  );
}

function Container31() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center p-[1.333px] relative size-[40px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-neutral-950 text-nowrap whitespace-pre">✉</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Cousine:Regular',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-[-0.33px] whitespace-pre">[1] Email Confirmation</p>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[14px] text-neutral-950">Check your email for details</p>
    </div>
  );
}

function Container34() {
  return (
    <div className="h-[48px] relative shrink-0 w-[193.542px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[48px] items-start relative w-[193.542px]">
        <Container32 />
        <Container33 />
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex gap-[12px] h-[48px] items-start relative shrink-0 w-full" data-name="Container">
      <Container31 />
      <Container34 />
    </div>
  );
}

function Container36() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center p-[1.333px] relative size-[40px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-neutral-950 text-nowrap whitespace-pre">⏱</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Cousine:Regular',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-[-0.33px] whitespace-pre">[2] Review Process</p>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[14px] text-neutral-950">2-3 business days</p>
    </div>
  );
}

function Container39() {
  return (
    <div className="h-[48px] relative shrink-0 w-[158.354px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[48px] items-start relative w-[158.354px]">
        <Container37 />
        <Container38 />
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex gap-[12px] h-[48px] items-start relative shrink-0 w-full" data-name="Container">
      <Container36 />
      <Container39 />
    </div>
  );
}

function Container41() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center p-[1.333px] relative size-[40px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-neutral-950 text-nowrap whitespace-pre">📚</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Cousine:Regular',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-[-0.33px] whitespace-pre">[3] Start learning</p>
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[14px] text-neutral-950">Get access to Student Dashboard</p>
    </div>
  );
}

function Container44() {
  return (
    <div className="h-[48px] relative shrink-0 w-[211.125px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[48px] items-start relative w-[211.125px]">
        <Container42 />
        <Container43 />
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex gap-[12px] h-[48px] items-start relative shrink-0 w-full" data-name="Container">
      <Container41 />
      <Container44 />
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[168px] items-start relative shrink-0 w-full" data-name="Container">
      <Container35 />
      <Container40 />
      <Container45 />
    </div>
  );
}

function Container47() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[16px] h-[282.667px] items-start left-[52px] pb-[4px] pt-[28px] px-[28px] top-[326.67px] w-[568px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <Container30 />
      <Container46 />
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute bg-black h-[56px] left-[238.81px] top-[641.33px] w-[194.375px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[36px] text-[16px] text-nowrap text-white top-[14.33px] whitespace-pre">[BACK TO HOME]</p>
    </div>
  );
}

function Container48() {
  return (
    <div className="absolute h-[42.667px] left-[149.13px] top-[25.33px] w-[269.729px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[135.33px] text-[16px] text-center text-neutral-950 text-nowrap top-[7.67px] translate-x-[-50%] whitespace-pre">Application ID: SION-2024-00123</p>
    </div>
  );
}

function Container49() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-0 top-[76px] w-[568px]" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[14px] text-center text-neutral-950">Save this ID for reference</p>
    </div>
  );
}

function Container50() {
  return (
    <div className="absolute h-[96px] left-[52px] top-[729.33px] w-[568px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px_0px_0px] border-black border-solid inset-0 pointer-events-none" />
      <Container48 />
      <Container49 />
    </div>
  );
}

function Container51() {
  return (
    <div className="h-[877.333px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <Container27 />
      <Container28 />
      <Container29 />
      <Container47 />
      <Button2 />
      <Container50 />
    </div>
  );
}

function Container52() {
  return (
    <div className="h-[38.667px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[335.88px] text-[14px] text-center text-neutral-950 text-nowrap top-[7.33px] translate-x-[-50%] whitespace-pre">Need help? support@sioneducation.com</p>
    </div>
  );
}

function TestSubmission1() {
  return (
    <div className="bg-white h-[1210.67px] relative shrink-0 w-full" data-name="TestSubmission">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] h-[1210.67px] items-start pb-0 pt-[139.333px] px-[749.333px] relative w-full">
          <Container51 />
          <Container52 />
        </div>
      </div>
    </div>
  );
}

function App1() {
  return (
    <div className="absolute bg-gray-50 box-border content-stretch flex flex-col h-[1258.67px] items-start left-0 pb-0 pt-[48px] px-0 top-0 w-[2170.67px]" data-name="App">
      <TestSubmission1 />
    </div>
  );
}

function UserRegistrationAndDashboard() {
  return (
    <div className="absolute bg-white h-[1236px] left-0 top-0 w-[2170px]" data-name="User Registration and Dashboard">
      <App1 />
    </div>
  );
}

export default function RegistrationSuccessMessageStudents() {
  return (
    <div className="bg-white relative size-full" data-name="Registration Success Message - Students">
      <App />
      <UserRegistrationAndDashboard />
    </div>
  );
}