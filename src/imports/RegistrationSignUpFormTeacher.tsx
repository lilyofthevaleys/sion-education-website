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
    <div className="h-[34.667px] relative shrink-0 w-[192.25px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[34.667px] relative w-[192.25px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[13.33px] text-[16px] text-neutral-950 text-nowrap top-[3.67px] whitespace-pre">TEACHER APPLICATION</p>
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
    <div className="bg-black relative shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center p-[4px] relative size-[32px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">1</p>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-full">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-neutral-950 text-nowrap top-[-1.67px] whitespace-pre">Apply</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex gap-[8px] h-[32px] items-center relative shrink-0 w-[80.75px]" data-name="Container">
      <Container3 />
      <Text />
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[4px] relative shrink-0 w-[64px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px_0px_0px] border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container6() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center p-[4px] relative size-[32px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-neutral-950 text-nowrap whitespace-pre">2</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[24px] relative shrink-0 w-[27.417px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[27.417px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-neutral-950 text-nowrap top-[-1.67px] whitespace-pre">Test</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex gap-[8px] h-[32px] items-center relative shrink-0 w-[67.417px]" data-name="Container">
      <Container6 />
      <Text1 />
    </div>
  );
}

function Container8() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center p-[4px] relative size-[32px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-neutral-950 text-nowrap whitespace-pre">3</p>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-full">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-neutral-950 text-nowrap top-[-1.67px] whitespace-pre">Interview</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex gap-[8px] h-[32px] items-center relative shrink-0 w-[104.146px]" data-name="Container">
      <Container8 />
      <Text2 />
    </div>
  );
}

function Container10() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center p-[4px] relative size-[32px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-neutral-950 text-nowrap whitespace-pre">4</p>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-full">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-neutral-950 text-nowrap top-[-1.67px] whitespace-pre">Done</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex gap-[8px] h-[32px] items-center relative shrink-0 w-[104.146px]" data-name="Container">
      <Container10 />
      <Text3 />
    </div>
  );
}

function Container12() {
  return (
    <div className="box-border content-stretch flex gap-[16px] items-center justify-center px-[465px] py-0 relative shrink-0" data-name="Container">
      <Container4 />
      <Container5 />
      <Container7 />
      <Container5 />
      <Container9 />
      <Container5 />
      <Container11 />
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[65.333px] items-start left-0 pb-[1.333px] pt-[16px] px-[317.333px] top-[70.67px] w-[2170.67px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1.333px] border-black border-solid inset-0 pointer-events-none" />
      <Container12 />
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[42.667px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[9.33px] text-[16px] text-neutral-950 text-nowrap top-[7.67px] whitespace-pre">TEACHER APPLICATION FORM</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-neutral-950 text-nowrap top-[-1.67px] whitespace-pre">[Full Name *]</p>
    </div>
  );
}

function TextInput() {
  return (
    <div className="h-[42.667px] relative shrink-0 w-full" data-name="Text Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[42.667px] items-center p-[8px] relative w-full">
          <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-[rgba(10,10,10,0.5)] text-nowrap whitespace-pre">____________</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container16() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex flex-col gap-[4px] h-[70.667px] items-start justify-self-stretch relative shrink-0" data-name="Container">
      <Container15 />
      <TextInput />
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-neutral-950 text-nowrap top-[-1.67px] whitespace-pre">[Age *]</p>
    </div>
  );
}

function TextInput1() {
  return (
    <div className="h-[42.667px] relative shrink-0 w-full" data-name="Text Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[42.667px] items-center p-[8px] relative w-full">
          <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-[rgba(10,10,10,0.5)] text-nowrap whitespace-pre">___</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container18() {
  return (
    <div className="[grid-area:1_/_2] content-stretch flex flex-col gap-[4px] h-[70.667px] items-start justify-self-stretch relative shrink-0" data-name="Container">
      <Container17 />
      <TextInput1 />
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute gap-[16px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[70.667px] left-0 top-0 w-[840px]" data-name="Container">
      <Container16 />
      <Container18 />
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-neutral-950 text-nowrap top-[-1.67px] whitespace-pre">[Email *]</p>
    </div>
  );
}

function TextInput2() {
  return (
    <div className="h-[42.667px] relative shrink-0 w-full" data-name="Text Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[42.667px] items-center p-[8px] relative w-full">
          <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-[rgba(10,10,10,0.5)] text-nowrap whitespace-pre">____________</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container21() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex flex-col gap-[4px] h-[70.667px] items-start justify-self-stretch relative shrink-0" data-name="Container">
      <Container20 />
      <TextInput2 />
    </div>
  );
}

function Container22() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-neutral-950 text-nowrap top-[-1.67px] whitespace-pre">[Phone *]</p>
    </div>
  );
}

function TextInput3() {
  return (
    <div className="h-[42.667px] relative shrink-0 w-full" data-name="Text Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[42.667px] items-center p-[8px] relative w-full">
          <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-[rgba(10,10,10,0.5)] text-nowrap whitespace-pre">____________</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container23() {
  return (
    <div className="[grid-area:1_/_2] content-stretch flex flex-col gap-[4px] h-[70.667px] items-start justify-self-stretch relative shrink-0" data-name="Container">
      <Container22 />
      <TextInput3 />
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute gap-[16px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[70.667px] left-0 top-[86.67px] w-[840px]" data-name="Container">
      <Container21 />
      <Container23 />
    </div>
  );
}

function Container25() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-neutral-950 text-nowrap top-[-1.67px] whitespace-pre">[Password *]</p>
    </div>
  );
}

function PasswordInput() {
  return (
    <div className="h-[42.667px] relative shrink-0 w-full" data-name="Password Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[42.667px] items-center p-[8px] relative w-full">
          <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-[rgba(10,10,10,0.5)] text-nowrap whitespace-pre">******</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container26() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex flex-col gap-[4px] h-[70.667px] items-start justify-self-stretch relative shrink-0" data-name="Container">
      <Container25 />
      <PasswordInput />
    </div>
  );
}

function Container27() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-neutral-950 text-nowrap top-[-1.67px] whitespace-pre">[Confirm Pass *]</p>
    </div>
  );
}

function PasswordInput1() {
  return (
    <div className="h-[42.667px] relative shrink-0 w-full" data-name="Password Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[42.667px] items-center p-[8px] relative w-full">
          <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-[rgba(10,10,10,0.5)] text-nowrap whitespace-pre">******</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container28() {
  return (
    <div className="[grid-area:1_/_2] content-stretch flex flex-col gap-[4px] h-[70.667px] items-start justify-self-stretch relative shrink-0" data-name="Container">
      <Container27 />
      <PasswordInput1 />
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute gap-[16px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[70.667px] left-0 top-[173.33px] w-[840px]" data-name="Container">
      <Container26 />
      <Container28 />
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute h-[42.667px] left-0 top-[20px] w-[840px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[9.33px] text-[16px] text-neutral-950 text-nowrap top-[7.67px] whitespace-pre">QUALIFICATIONS</p>
    </div>
  );
}

function Container31() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-neutral-950 text-nowrap top-[-1.67px] whitespace-pre">[Grade *]</p>
    </div>
  );
}

function TextInput4() {
  return (
    <div className="h-[42.667px] relative shrink-0 w-full" data-name="Text Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[42.667px] items-center p-[8px] relative w-full">
          <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-[rgba(10,10,10,0.5)] text-nowrap whitespace-pre">e.g. Grade 10</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container32() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex flex-col gap-[4px] h-[70.667px] items-start justify-self-stretch relative shrink-0" data-name="Container">
      <Container31 />
      <TextInput4 />
    </div>
  );
}

function Container33() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-neutral-950 text-nowrap top-[-1.67px] whitespace-pre">[Years Experience *]</p>
    </div>
  );
}

function TextInput5() {
  return (
    <div className="h-[42.667px] relative shrink-0 w-full" data-name="Text Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[42.667px] items-center p-[8px] relative w-full">
          <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-[rgba(10,10,10,0.5)] text-nowrap whitespace-pre">___</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container34() {
  return (
    <div className="[grid-area:1_/_2] content-stretch flex flex-col gap-[4px] h-[70.667px] items-start justify-self-stretch relative shrink-0" data-name="Container">
      <Container33 />
      <TextInput5 />
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute gap-[16px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[70.667px] left-0 top-[74.67px] w-[840px]" data-name="Container">
      <Container32 />
      <Container34 />
    </div>
  );
}

function Container36() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-neutral-950 text-nowrap top-[-1.67px] whitespace-pre">[Education Details *]</p>
    </div>
  );
}

function TextArea() {
  return (
    <div className="h-[90.667px] relative shrink-0 w-full" data-name="Text Area">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[90.667px] items-start p-[8px] relative w-full">
          <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-[rgba(10,10,10,0.5)] text-nowrap whitespace-pre">University, Degree, Year...</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container37() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[124px] items-start left-0 top-[161.33px] w-[840px]" data-name="Container">
      <Container36 />
      <TextArea />
    </div>
  );
}

function Container38() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-neutral-950 text-nowrap top-[-1.67px] whitespace-pre">[Certifications]</p>
    </div>
  );
}

function TextArea1() {
  return (
    <div className="h-[66.667px] relative shrink-0 w-full" data-name="Text Area">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[66.667px] items-start p-[8px] relative w-full">
          <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-[rgba(10,10,10,0.5)] text-nowrap whitespace-pre">Teaching licenses...</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container39() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[100px] items-start left-0 top-[301.33px] w-[840px]" data-name="Container">
      <Container38 />
      <TextArea1 />
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute h-[401.333px] left-0 top-[260px] w-[840px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[4px_0px_0px] border-black border-solid inset-0 pointer-events-none" />
      <Container30 />
      <Container35 />
      <Container37 />
      <Container39 />
    </div>
  );
}

function Container41() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-neutral-950 text-nowrap top-[-1.67px] whitespace-pre">[Address *]</p>
    </div>
  );
}

function TextArea2() {
  return (
    <div className="h-[66.667px] relative shrink-0 w-full" data-name="Text Area">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[66.667px] items-start p-[8px] relative w-full">
          <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-[rgba(10,10,10,0.5)] text-nowrap whitespace-pre">____________</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container42() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[100px] items-start left-0 top-[677.33px] w-[840px]" data-name="Container">
      <Container41 />
      <TextArea2 />
    </div>
  );
}

function Container43() {
  return (
    <div className="h-[42.667px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[9.33px] text-[16px] text-neutral-950 text-nowrap top-[7.67px] whitespace-pre">DOCUMENTS</p>
    </div>
  );
}

function Container44() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-neutral-950 text-nowrap top-[-1.67px] whitespace-pre">[CV/Resume *]</p>
    </div>
  );
}

function Container45() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[170.21px] text-[16px] text-center text-neutral-950 text-nowrap top-[-1.67px] translate-x-[-50%] whitespace-pre">↑</p>
    </div>
  );
}

function Container46() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[170.06px] text-[16px] text-center text-neutral-950 text-nowrap top-[-1.67px] translate-x-[-50%] whitespace-pre">Click to upload</p>
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[14px] text-center text-neutral-950">(PDF, DOC)</p>
    </div>
  );
}

function Container48() {
  return (
    <div className="h-[148px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] h-[148px] items-start pb-[4px] pt-[36px] px-[36px] relative w-full">
          <Container45 />
          <Container46 />
          <Container47 />
        </div>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex flex-col gap-[4px] items-start place-self-stretch relative shrink-0" data-name="Container">
      <Container44 />
      <Container48 />
    </div>
  );
}

function Container50() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-neutral-950 text-nowrap top-[-1.67px] whitespace-pre">[Portfolio]</p>
    </div>
  );
}

function Container51() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[170.21px] text-[16px] text-center text-neutral-950 text-nowrap top-[-1.67px] translate-x-[-50%] whitespace-pre">↑</p>
    </div>
  );
}

function Container52() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[170.06px] text-[16px] text-center text-neutral-950 text-nowrap top-[-1.67px] translate-x-[-50%] whitespace-pre">Click to upload</p>
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[14px] text-center text-neutral-950">(PDF, ZIP)</p>
    </div>
  );
}

function Container54() {
  return (
    <div className="h-[148px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] h-[148px] items-start pb-[4px] pt-[36px] px-[36px] relative w-full">
          <Container51 />
          <Container52 />
          <Container53 />
        </div>
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="[grid-area:1_/_2] content-stretch flex flex-col gap-[4px] items-start place-self-stretch relative shrink-0" data-name="Container">
      <Container50 />
      <Container54 />
    </div>
  );
}

function Container56() {
  return (
    <div className="gap-[16px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[176px] relative shrink-0 w-full" data-name="Container">
      <Container49 />
      <Container55 />
    </div>
  );
}

function Container57() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[12px] h-[250.667px] items-start left-0 pb-0 pt-[20px] px-0 top-[793.33px] w-[840px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[4px_0px_0px] border-black border-solid inset-0 pointer-events-none" />
      <Container43 />
      <Container56 />
    </div>
  );
}

function Button1() {
  return (
    <div className="h-[48px] relative shrink-0 w-[123.396px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[48px] relative w-[123.396px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[28px] text-[16px] text-neutral-950 text-nowrap top-[10.33px] whitespace-pre">[CANCEL]</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-black h-[48px] relative shrink-0 w-[242.188px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[48px] relative w-[242.188px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[28px] text-[16px] text-nowrap text-white top-[10.33px] whitespace-pre">{`[SUBMIT & START TEST] →`}</p>
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="absolute box-border content-stretch flex gap-[12px] h-[68px] items-start justify-end left-0 pb-0 pt-[20px] px-0 top-[1060px] w-[840px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[4px_0px_0px] border-black border-solid inset-0 pointer-events-none" />
      <Button1 />
      <Button2 />
    </div>
  );
}

function Container59() {
  return (
    <div className="h-[1128px] relative shrink-0 w-full" data-name="Container">
      <Container19 />
      <Container24 />
      <Container29 />
      <Container40 />
      <Container42 />
      <Container57 />
      <Container58 />
    </div>
  );
}

function Container60() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[24px] h-[1250.67px] items-start left-[637.33px] pb-[4px] pt-[28px] px-[28px] top-[168px] w-[896px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <Container14 />
      <Container59 />
    </div>
  );
}

function TeacherRegistration() {
  return (
    <div className="bg-white h-[1450.67px] relative shrink-0 w-full" data-name="TeacherRegistration">
      <Container2 />
      <Container13 />
      <Container60 />
    </div>
  );
}

function App() {
  return (
    <div className="absolute bg-gray-50 box-border content-stretch flex flex-col h-[1498.67px] items-start left-0 pb-0 pt-[48px] px-0 top-0 w-[2170.67px]" data-name="App">
      <TeacherRegistration />
    </div>
  );
}

export default function RegistrationSignUpFormTeacher() {
  return (
    <div className="bg-white relative size-full" data-name="Registration / Sign up Form - Teacher">
      <App />
    </div>
  );
}