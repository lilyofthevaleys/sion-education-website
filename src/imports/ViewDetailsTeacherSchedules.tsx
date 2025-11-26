function Button() {
  return (
    <div className="h-[34.496px] relative shrink-0 w-[163.675px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.275px] border-solid border-white inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[34.496px] relative w-[163.675px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[13.26px] text-[16px] text-nowrap text-white top-[2.26px] whitespace-pre">← BACK TO ADMIN</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[34.496px] relative shrink-0 w-[233.583px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.275px] border-solid border-white inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[34.496px] relative w-[233.583px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[13.26px] text-[16px] text-nowrap text-white top-[2.26px] whitespace-pre">TEACHER SCHEDULE DETAILS</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex gap-[15.993px] h-[34.496px] items-center relative shrink-0 w-full" data-name="Container">
      <Button />
      <Container />
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute bg-[#101828] box-border content-stretch flex flex-col h-[70px] items-start left-0 pb-[3.824px] pl-[329.262px] pr-[1404.03px] pt-[15.993px] top-0 w-[2175px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_3.824px] border-black border-solid inset-0 pointer-events-none" />
      <Container1 />
    </div>
  );
}

function Container3() {
  return (
    <div className="relative shrink-0 size-[63.992px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.275px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[63.992px]" />
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[31.986px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Cousine:Regular',sans-serif] leading-[32px] left-0 not-italic text-[24px] text-neutral-950 text-nowrap top-[-0.73px] whitespace-pre">Ms. Sarah Johnson</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[28.003px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[28px] left-0 text-[18px] text-neutral-950 text-nowrap top-[-1.73px] whitespace-pre">Mathematics</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[63.972px] relative shrink-0 w-[224.222px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[3.983px] h-[63.972px] items-start relative w-[224.222px]">
        <Container4 />
        <Container5 />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex gap-[15.993px] h-[63.992px] items-center relative shrink-0 w-full" data-name="Container">
      <Container3 />
      <Container6 />
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute bg-gray-50 box-border content-stretch flex flex-col h-[119.639px] items-start left-0 pb-[3.824px] pt-[27.824px] px-[27.824px] top-0 w-[1487.99px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[3.824px] border-black border-solid inset-0 pointer-events-none" />
      <Container7 />
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[23.98px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Cousine:Regular',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-nowrap text-white top-[-1.73px] whitespace-pre">COMPLETE SCHEDULE - NOVEMBER 2025</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute bg-black box-border content-stretch flex flex-col h-[50.509px] items-start left-0 pb-[1.275px] pl-[13.264px] pr-[13.265px] pt-[13.264px] top-[151.63px] w-[1487.99px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.275px] border-black border-solid inset-0 pointer-events-none" />
      <Container9 />
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute h-[27.983px] left-[15.99px] top-[15.99px] w-[1448.36px]" data-name="Container">
      <p className="absolute font-['Cousine:Regular',sans-serif] leading-[28px] left-[-0.08px] not-italic text-[28px] text-neutral-950 text-nowrap top-[13.76px] whitespace-pre">Monday</p>
    </div>
  );
}

function Container12() {
  return (
    <div className="bg-blue-50 h-[83.789px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_3.824px] border-black border-solid inset-0 pointer-events-none" />
      <Container11 />
    </div>
  );
}

function Container13() {
  return (
    <div className="relative shrink-0 size-[39.993px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.275px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[39.993px]" />
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute h-[28.003px] left-0 top-0 w-[89.067px]" data-name="Container">
      <p className="absolute font-['Cousine:Regular',sans-serif] leading-[28px] left-0 not-italic text-[18px] text-neutral-950 text-nowrap top-[-1.45px] whitespace-pre">Alex Chen</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute h-[30.512px] left-0 top-[31.99px] w-[74.608px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.275px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[9.26px] text-[14px] text-neutral-950 text-nowrap top-[3.26px] whitespace-pre">Grade 10</p>
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[62.499px] relative shrink-0 w-[89.067px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[62.499px] relative w-[89.067px]">
        <Container14 />
        <Container15 />
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="basis-0 grow h-[62.499px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[15.993px] h-[62.499px] items-center relative w-full">
        <Container13 />
        <Container16 />
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="bg-[#101828] h-[42.502px] relative shrink-0 w-[201.656px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.275px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[42.502px] relative w-[201.656px]">
        <p className="absolute font-['Cousine:Regular',sans-serif] leading-[24px] left-[17.27px] not-italic text-[16px] text-nowrap text-white top-[7.54px] whitespace-pre">09:00 AM - 10:00 AM</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute box-border content-stretch flex h-[95.759px] items-center justify-between left-0 pb-[1.275px] pt-0 px-[15.993px] top-0 w-[1480.35px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1.275px] border-black border-solid inset-0 pointer-events-none" />
      <Container17 />
      <Container18 />
    </div>
  );
}

function Container20() {
  return (
    <div className="relative shrink-0 size-[39.993px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.275px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[39.993px]" />
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute h-[28.003px] left-0 top-0 w-[138.54px]" data-name="Container">
      <p className="absolute font-['Cousine:Regular',sans-serif] leading-[28px] left-0 not-italic text-[18px] text-neutral-950 text-nowrap top-[-1.45px] whitespace-pre">Sarah Williams</p>
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute h-[30.512px] left-0 top-[31.99px] w-[67.059px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.275px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[9.26px] text-[14px] text-neutral-950 text-nowrap top-[3.26px] whitespace-pre">Grade 9</p>
    </div>
  );
}

function Container23() {
  return (
    <div className="h-[62.499px] relative shrink-0 w-[138.54px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[62.499px] relative w-[138.54px]">
        <Container21 />
        <Container22 />
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="basis-0 grow h-[62.499px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[15.993px] h-[62.499px] items-center relative w-full">
        <Container20 />
        <Container23 />
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="bg-[#101828] h-[42.502px] relative shrink-0 w-[201.656px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.275px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[42.502px] relative w-[201.656px]">
        <p className="absolute font-['Cousine:Regular',sans-serif] leading-[24px] left-[17.27px] not-italic text-[16px] text-nowrap text-white top-[7.54px] whitespace-pre">10:30 AM - 11:30 AM</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute box-border content-stretch flex h-[95.759px] items-center justify-between left-0 pb-[1.275px] pt-0 px-[15.993px] top-[95.76px] w-[1480.35px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1.275px] border-black border-solid inset-0 pointer-events-none" />
      <Container24 />
      <Container25 />
    </div>
  );
}

function Container27() {
  return (
    <div className="relative shrink-0 size-[39.993px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.275px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[39.993px]" />
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute h-[28.003px] left-0 top-0 w-[128.662px]" data-name="Container">
      <p className="absolute font-['Cousine:Regular',sans-serif] leading-[28px] left-0 not-italic text-[18px] text-neutral-950 text-nowrap top-[-1.45px] whitespace-pre">Michael Brown</p>
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute h-[30.512px] left-0 top-[31.99px] w-[74.608px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.275px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[9.26px] text-[14px] text-neutral-950 text-nowrap top-[3.26px] whitespace-pre">Grade 11</p>
    </div>
  );
}

function Container30() {
  return (
    <div className="h-[62.499px] relative shrink-0 w-[128.662px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[62.499px] relative w-[128.662px]">
        <Container28 />
        <Container29 />
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="basis-0 grow h-[62.499px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[15.993px] h-[62.499px] items-center relative w-full">
        <Container27 />
        <Container30 />
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="bg-[#101828] h-[42.502px] relative shrink-0 w-[201.656px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.275px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[42.502px] relative w-[201.656px]">
        <p className="absolute font-['Cousine:Regular',sans-serif] leading-[24px] left-[17.27px] not-italic text-[16px] text-nowrap text-white top-[7.54px] whitespace-pre">02:00 PM - 03:00 PM</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute box-border content-stretch flex h-[95.759px] items-center justify-between left-0 pb-[1.275px] pt-0 px-[15.993px] top-[191.52px] w-[1480.35px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1.275px] border-black border-solid inset-0 pointer-events-none" />
      <Container31 />
      <Container32 />
    </div>
  );
}

function Container34() {
  return (
    <div className="relative shrink-0 size-[39.993px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.275px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[39.993px]" />
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute h-[28.003px] left-0 top-0 w-[108.865px]" data-name="Container">
      <p className="absolute font-['Cousine:Regular',sans-serif] leading-[28px] left-0 not-italic text-[18px] text-neutral-950 text-nowrap top-[-1.45px] whitespace-pre">Jessica Lee</p>
    </div>
  );
}

function Container36() {
  return (
    <div className="absolute h-[30.512px] left-0 top-[31.99px] w-[74.608px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.275px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[9.26px] text-[14px] text-neutral-950 text-nowrap top-[3.26px] whitespace-pre">Grade 10</p>
    </div>
  );
}

function Container37() {
  return (
    <div className="h-[62.499px] relative shrink-0 w-[108.865px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[62.499px] relative w-[108.865px]">
        <Container35 />
        <Container36 />
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="basis-0 grow h-[62.499px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[15.993px] h-[62.499px] items-center relative w-full">
        <Container34 />
        <Container37 />
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="bg-[#101828] h-[42.502px] relative shrink-0 w-[201.656px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.275px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[42.502px] relative w-[201.656px]">
        <p className="absolute font-['Cousine:Regular',sans-serif] leading-[24px] left-[17.27px] not-italic text-[16px] text-nowrap text-white top-[7.54px] whitespace-pre">03:30 PM - 04:30 PM</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute box-border content-stretch flex h-[94.485px] items-center justify-between left-0 px-[15.993px] py-0 top-[287.28px] w-[1480.35px]" data-name="Container">
      <Container38 />
      <Container39 />
    </div>
  );
}

function Container41() {
  return (
    <div className="h-[381.763px] relative shrink-0 w-full" data-name="Container">
      <Container19 />
      <Container26 />
      <Container33 />
      <Container40 />
    </div>
  );
}

function Text() {
  return (
    <div className="h-[16.571px] relative shrink-0 w-full" data-name="Text">
      <p className="absolute font-['Cousine:Regular',sans-serif] h-[27px] leading-[20px] left-[-0.08px] not-italic text-[14px] text-neutral-950 top-[-1.62px] w-[174px]">TOTAL STUDENTS: 4</p>
    </div>
  );
}

function Container42() {
  return (
    <div className="bg-gray-100 h-[46.525px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.275px_0px_0px] border-black border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[46.525px] items-start pb-0 pl-[11.99px] pr-[1337.52px] pt-[15.814px] relative w-full">
          <Text />
        </div>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[519.725px] items-start left-0 p-[3.824px] top-0 w-[1487.99px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[3.824px] border-black border-solid inset-0 pointer-events-none" />
      <Container12 />
      <Container41 />
      <Container42 />
    </div>
  );
}

function Container44() {
  return (
    <div className="absolute h-[27.983px] left-[15.91px] top-[28.04px] w-[1448.36px]" data-name="Container">
      <p className="absolute font-['Cousine:Regular',sans-serif] leading-[28px] left-0 not-italic text-[28px] text-neutral-950 text-nowrap top-[-0.73px] whitespace-pre">Wednesday</p>
    </div>
  );
}

function Container45() {
  return (
    <div className="bg-blue-50 h-[83.789px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_3.824px] border-black border-solid inset-0 pointer-events-none" />
      <Container44 />
    </div>
  );
}

function Container46() {
  return (
    <div className="relative shrink-0 size-[39.993px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.275px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[39.993px]" />
    </div>
  );
}

function Container47() {
  return (
    <div className="absolute h-[28.003px] left-0 top-0 w-[138.54px]" data-name="Container">
      <p className="absolute font-['Cousine:Regular',sans-serif] leading-[28px] left-0 not-italic text-[18px] text-neutral-950 text-nowrap top-[-1.45px] whitespace-pre">David Martinez</p>
    </div>
  );
}

function Container48() {
  return (
    <div className="absolute h-[30.512px] left-0 top-[31.99px] w-[67.059px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.275px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[9.26px] text-[14px] text-neutral-950 text-nowrap top-[3.26px] whitespace-pre">Grade 9</p>
    </div>
  );
}

function Container49() {
  return (
    <div className="h-[62.499px] relative shrink-0 w-[138.54px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[62.499px] relative w-[138.54px]">
        <Container47 />
        <Container48 />
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="basis-0 grow h-[62.499px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[15.993px] h-[62.499px] items-center relative w-full">
        <Container46 />
        <Container49 />
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="bg-[#101828] h-[42.502px] relative shrink-0 w-[201.656px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.275px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[42.502px] relative w-[201.656px]">
        <p className="absolute font-['Cousine:Regular',sans-serif] leading-[24px] left-[17.27px] not-italic text-[16px] text-nowrap text-white top-[7.54px] whitespace-pre">09:00 AM - 10:00 AM</p>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="absolute box-border content-stretch flex h-[95.759px] items-center justify-between left-0 pb-[1.275px] pt-0 px-[15.993px] top-0 w-[1480.35px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1.275px] border-black border-solid inset-0 pointer-events-none" />
      <Container50 />
      <Container51 />
    </div>
  );
}

function Container53() {
  return (
    <div className="relative shrink-0 size-[39.993px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.275px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[39.993px]" />
    </div>
  );
}

function Container54() {
  return (
    <div className="absolute h-[28.003px] left-0 top-0 w-[128.662px]" data-name="Container">
      <p className="absolute font-['Cousine:Regular',sans-serif] leading-[28px] left-0 not-italic text-[18px] text-neutral-950 text-nowrap top-[-1.45px] whitespace-pre">Emma Thompson</p>
    </div>
  );
}

function Container55() {
  return (
    <div className="absolute h-[30.512px] left-0 top-[31.99px] w-[74.608px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.275px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[9.26px] text-[14px] text-neutral-950 text-nowrap top-[3.26px] whitespace-pre">Grade 10</p>
    </div>
  );
}

function Container56() {
  return (
    <div className="h-[62.499px] relative shrink-0 w-[128.662px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[62.499px] relative w-[128.662px]">
        <Container54 />
        <Container55 />
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="basis-0 grow h-[62.499px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[15.993px] h-[62.499px] items-center relative w-full">
        <Container53 />
        <Container56 />
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="bg-[#101828] h-[42.502px] relative shrink-0 w-[201.656px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.275px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[42.502px] relative w-[201.656px]">
        <p className="absolute font-['Cousine:Regular',sans-serif] leading-[24px] left-[17.27px] not-italic text-[16px] text-nowrap text-white top-[7.54px] whitespace-pre">10:30 AM - 11:30 AM</p>
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="absolute box-border content-stretch flex h-[95.759px] items-center justify-between left-0 pb-[1.275px] pt-0 px-[15.993px] top-[95.76px] w-[1480.35px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1.275px] border-black border-solid inset-0 pointer-events-none" />
      <Container57 />
      <Container58 />
    </div>
  );
}

function Container60() {
  return (
    <div className="relative shrink-0 size-[39.993px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.275px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[39.993px]" />
    </div>
  );
}

function Container61() {
  return (
    <div className="absolute h-[28.003px] left-0 top-0 w-[118.763px]" data-name="Container">
      <p className="absolute font-['Cousine:Regular',sans-serif] leading-[28px] left-0 not-italic text-[18px] text-neutral-950 text-nowrap top-[-1.45px] whitespace-pre">James Wilson</p>
    </div>
  );
}

function Container62() {
  return (
    <div className="absolute h-[30.512px] left-0 top-[31.99px] w-[74.608px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.275px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[9.26px] text-[14px] text-neutral-950 text-nowrap top-[3.26px] whitespace-pre">Grade 11</p>
    </div>
  );
}

function Container63() {
  return (
    <div className="h-[62.499px] relative shrink-0 w-[118.763px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[62.499px] relative w-[118.763px]">
        <Container61 />
        <Container62 />
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="basis-0 grow h-[62.499px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[15.993px] h-[62.499px] items-center relative w-full">
        <Container60 />
        <Container63 />
      </div>
    </div>
  );
}

function Container65() {
  return (
    <div className="bg-[#101828] h-[42.502px] relative shrink-0 w-[201.656px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.275px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[42.502px] relative w-[201.656px]">
        <p className="absolute font-['Cousine:Regular',sans-serif] leading-[24px] left-[17.27px] not-italic text-[16px] text-nowrap text-white top-[7.54px] whitespace-pre">01:00 PM - 02:00 PM</p>
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="absolute box-border content-stretch flex h-[95.759px] items-center justify-between left-0 pb-[1.275px] pt-0 px-[15.993px] top-[191.52px] w-[1480.35px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1.275px] border-black border-solid inset-0 pointer-events-none" />
      <Container64 />
      <Container65 />
    </div>
  );
}

function Container67() {
  return (
    <div className="relative shrink-0 size-[39.993px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.275px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[39.993px]" />
    </div>
  );
}

function Container68() {
  return (
    <div className="absolute h-[28.003px] left-0 top-0 w-[128.662px]" data-name="Container">
      <p className="absolute font-['Cousine:Regular',sans-serif] leading-[28px] left-0 not-italic text-[18px] text-neutral-950 text-nowrap top-[-1.45px] whitespace-pre">Olivia Garcia</p>
    </div>
  );
}

function Container69() {
  return (
    <div className="absolute h-[30.512px] left-0 top-[31.99px] w-[67.059px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.275px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[9.26px] text-[14px] text-neutral-950 text-nowrap top-[3.26px] whitespace-pre">Grade 9</p>
    </div>
  );
}

function Container70() {
  return (
    <div className="h-[62.499px] relative shrink-0 w-[128.662px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[62.499px] relative w-[128.662px]">
        <Container68 />
        <Container69 />
      </div>
    </div>
  );
}

function Container71() {
  return (
    <div className="basis-0 grow h-[62.499px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[15.993px] h-[62.499px] items-center relative w-full">
        <Container67 />
        <Container70 />
      </div>
    </div>
  );
}

function Container72() {
  return (
    <div className="bg-[#101828] h-[42.502px] relative shrink-0 w-[201.656px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.275px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[42.502px] relative w-[201.656px]">
        <p className="absolute font-['Cousine:Regular',sans-serif] leading-[24px] left-[17.27px] not-italic text-[16px] text-nowrap text-white top-[7.54px] whitespace-pre">02:30 PM - 03:30 PM</p>
      </div>
    </div>
  );
}

function Container73() {
  return (
    <div className="absolute box-border content-stretch flex h-[95.759px] items-center justify-between left-0 pb-[1.275px] pt-0 px-[15.993px] top-[287.28px] w-[1480.35px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1.275px] border-black border-solid inset-0 pointer-events-none" />
      <Container71 />
      <Container72 />
    </div>
  );
}

function Container74() {
  return (
    <div className="relative shrink-0 size-[39.993px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.275px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[39.993px]" />
    </div>
  );
}

function Container75() {
  return (
    <div className="absolute h-[28.003px] left-0 top-0 w-[98.966px]" data-name="Container">
      <p className="absolute font-['Cousine:Regular',sans-serif] leading-[28px] left-0 not-italic text-[18px] text-neutral-950 text-nowrap top-[-1.45px] whitespace-pre">Daniel Kim</p>
    </div>
  );
}

function Container76() {
  return (
    <div className="absolute h-[30.512px] left-0 top-[31.99px] w-[74.608px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.275px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[9.26px] text-[14px] text-neutral-950 text-nowrap top-[3.26px] whitespace-pre">Grade 10</p>
    </div>
  );
}

function Container77() {
  return (
    <div className="h-[62.499px] relative shrink-0 w-[98.966px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[62.499px] relative w-[98.966px]">
        <Container75 />
        <Container76 />
      </div>
    </div>
  );
}

function Container78() {
  return (
    <div className="basis-0 grow h-[62.499px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[15.993px] h-[62.499px] items-center relative w-full">
        <Container74 />
        <Container77 />
      </div>
    </div>
  );
}

function Container79() {
  return (
    <div className="bg-[#101828] h-[42.502px] relative shrink-0 w-[201.656px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.275px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[42.502px] relative w-[201.656px]">
        <p className="absolute font-['Cousine:Regular',sans-serif] leading-[24px] left-[17.27px] not-italic text-[16px] text-nowrap text-white top-[7.54px] whitespace-pre">04:00 PM - 05:00 PM</p>
      </div>
    </div>
  );
}

function Container80() {
  return (
    <div className="absolute box-border content-stretch flex h-[94.485px] items-center justify-between left-0 px-[15.993px] py-0 top-[383.04px] w-[1480.35px]" data-name="Container">
      <Container78 />
      <Container79 />
    </div>
  );
}

function Container81() {
  return (
    <div className="h-[477.522px] relative shrink-0 w-full" data-name="Container">
      <Container52 />
      <Container59 />
      <Container66 />
      <Container73 />
      <Container80 />
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[16.571px] relative shrink-0 w-full" data-name="Text">
      <p className="absolute font-['Cousine:Regular',sans-serif] h-[44px] leading-[20px] left-[-0.08px] not-italic text-[14px] text-neutral-950 top-[-2.09px] w-[157px]">TOTAL STUDENTS: 5</p>
    </div>
  );
}

function Container82() {
  return (
    <div className="bg-gray-100 h-[46.525px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.275px_0px_0px] border-black border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[46.525px] items-start pb-0 pl-[11.99px] pr-[1337.52px] pt-[15.814px] relative w-full">
          <Text1 />
        </div>
      </div>
    </div>
  );
}

function Container83() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[615.485px] items-start left-0 p-[3.824px] top-[551.71px] w-[1487.99px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[3.824px] border-black border-solid inset-0 pointer-events-none" />
      <Container45 />
      <Container81 />
      <Container82 />
    </div>
  );
}

function Container84() {
  return (
    <div className="absolute h-[27.983px] left-[15.99px] top-[15.99px] w-[1448.36px]" data-name="Container">
      <p className="absolute font-['Cousine:Regular',sans-serif] leading-[28px] left-[-0.08px] not-italic text-[28px] text-neutral-950 text-nowrap top-[13.58px] whitespace-pre">Friday</p>
    </div>
  );
}

function Container85() {
  return (
    <div className="bg-blue-50 h-[83.789px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_3.824px] border-black border-solid inset-0 pointer-events-none" />
      <Container84 />
    </div>
  );
}

function Container86() {
  return (
    <div className="relative shrink-0 size-[39.993px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.275px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[39.993px]" />
    </div>
  );
}

function Container87() {
  return (
    <div className="absolute h-[28.003px] left-0 top-0 w-[158.338px]" data-name="Container">
      <p className="absolute font-['Cousine:Regular',sans-serif] leading-[28px] left-0 not-italic text-[18px] text-neutral-950 text-nowrap top-[-1.45px] whitespace-pre">Sophia Rodriguez</p>
    </div>
  );
}

function Container88() {
  return (
    <div className="absolute h-[30.512px] left-0 top-[31.99px] w-[74.608px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.275px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[9.26px] text-[14px] text-neutral-950 text-nowrap top-[3.26px] whitespace-pre">Grade 11</p>
    </div>
  );
}

function Container89() {
  return (
    <div className="h-[62.499px] relative shrink-0 w-[158.338px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[62.499px] relative w-[158.338px]">
        <Container87 />
        <Container88 />
      </div>
    </div>
  );
}

function Container90() {
  return (
    <div className="basis-0 grow h-[62.499px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[15.993px] h-[62.499px] items-center relative w-full">
        <Container86 />
        <Container89 />
      </div>
    </div>
  );
}

function Container91() {
  return (
    <div className="bg-[#101828] h-[42.502px] relative shrink-0 w-[201.656px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.275px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[42.502px] relative w-[201.656px]">
        <p className="absolute font-['Cousine:Regular',sans-serif] leading-[24px] left-[17.27px] not-italic text-[16px] text-nowrap text-white top-[7.54px] whitespace-pre">09:30 AM - 10:30 AM</p>
      </div>
    </div>
  );
}

function Container92() {
  return (
    <div className="absolute box-border content-stretch flex h-[95.759px] items-center justify-between left-0 pb-[1.275px] pt-0 px-[15.993px] top-0 w-[1480.35px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1.275px] border-black border-solid inset-0 pointer-events-none" />
      <Container90 />
      <Container91 />
    </div>
  );
}

function Container93() {
  return (
    <div className="relative shrink-0 size-[39.993px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.275px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[39.993px]" />
    </div>
  );
}

function Container94() {
  return (
    <div className="absolute h-[28.003px] left-0 top-0 w-[128.662px]" data-name="Container">
      <p className="absolute font-['Cousine:Regular',sans-serif] leading-[28px] left-0 not-italic text-[18px] text-neutral-950 text-nowrap top-[-1.45px] whitespace-pre">Liam Anderson</p>
    </div>
  );
}

function Container95() {
  return (
    <div className="absolute h-[30.512px] left-0 top-[31.99px] w-[67.059px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.275px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[9.26px] text-[14px] text-neutral-950 text-nowrap top-[3.26px] whitespace-pre">Grade 9</p>
    </div>
  );
}

function Container96() {
  return (
    <div className="h-[62.499px] relative shrink-0 w-[128.662px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[62.499px] relative w-[128.662px]">
        <Container94 />
        <Container95 />
      </div>
    </div>
  );
}

function Container97() {
  return (
    <div className="basis-0 grow h-[62.499px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[15.993px] h-[62.499px] items-center relative w-full">
        <Container93 />
        <Container96 />
      </div>
    </div>
  );
}

function Container98() {
  return (
    <div className="bg-[#101828] h-[42.502px] relative shrink-0 w-[201.656px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.275px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[42.502px] relative w-[201.656px]">
        <p className="absolute font-['Cousine:Regular',sans-serif] leading-[24px] left-[17.27px] not-italic text-[16px] text-nowrap text-white top-[7.54px] whitespace-pre">11:00 AM - 12:00 PM</p>
      </div>
    </div>
  );
}

function Container99() {
  return (
    <div className="absolute box-border content-stretch flex h-[95.759px] items-center justify-between left-0 pb-[1.275px] pt-0 px-[15.993px] top-[95.76px] w-[1480.35px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1.275px] border-black border-solid inset-0 pointer-events-none" />
      <Container97 />
      <Container98 />
    </div>
  );
}

function Container100() {
  return (
    <div className="relative shrink-0 size-[39.993px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.275px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[39.993px]" />
    </div>
  );
}

function Container101() {
  return (
    <div className="absolute h-[28.003px] left-0 top-0 w-[148.439px]" data-name="Container">
      <p className="absolute font-['Cousine:Regular',sans-serif] leading-[28px] left-0 not-italic text-[18px] text-neutral-950 text-nowrap top-[-1.45px] whitespace-pre">Isabella Taylor</p>
    </div>
  );
}

function Container102() {
  return (
    <div className="absolute h-[30.512px] left-0 top-[31.99px] w-[74.608px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.275px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[9.26px] text-[14px] text-neutral-950 text-nowrap top-[3.26px] whitespace-pre">Grade 10</p>
    </div>
  );
}

function Container103() {
  return (
    <div className="h-[62.499px] relative shrink-0 w-[148.439px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[62.499px] relative w-[148.439px]">
        <Container101 />
        <Container102 />
      </div>
    </div>
  );
}

function Container104() {
  return (
    <div className="basis-0 grow h-[62.499px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[15.993px] h-[62.499px] items-center relative w-full">
        <Container100 />
        <Container103 />
      </div>
    </div>
  );
}

function Container105() {
  return (
    <div className="bg-[#101828] h-[42.502px] relative shrink-0 w-[201.656px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.275px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[42.502px] relative w-[201.656px]">
        <p className="absolute font-['Cousine:Regular',sans-serif] leading-[24px] left-[17.27px] not-italic text-[16px] text-nowrap text-white top-[7.54px] whitespace-pre">02:00 PM - 03:00 PM</p>
      </div>
    </div>
  );
}

function Container106() {
  return (
    <div className="absolute box-border content-stretch flex h-[95.759px] items-center justify-between left-0 pb-[1.275px] pt-0 px-[15.993px] top-[191.52px] w-[1480.35px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1.275px] border-black border-solid inset-0 pointer-events-none" />
      <Container104 />
      <Container105 />
    </div>
  );
}

function Container107() {
  return (
    <div className="relative shrink-0 size-[39.993px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.275px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[39.993px]" />
    </div>
  );
}

function Container108() {
  return (
    <div className="absolute h-[28.003px] left-0 top-0 w-[98.966px]" data-name="Container">
      <p className="absolute font-['Cousine:Regular',sans-serif] leading-[28px] left-0 not-italic text-[18px] text-neutral-950 text-nowrap top-[-1.45px] whitespace-pre">Noah Davis</p>
    </div>
  );
}

function Container109() {
  return (
    <div className="absolute h-[30.512px] left-0 top-[31.99px] w-[74.608px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.275px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[9.26px] text-[14px] text-neutral-950 text-nowrap top-[3.26px] whitespace-pre">Grade 11</p>
    </div>
  );
}

function Container110() {
  return (
    <div className="h-[62.499px] relative shrink-0 w-[98.966px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[62.499px] relative w-[98.966px]">
        <Container108 />
        <Container109 />
      </div>
    </div>
  );
}

function Container111() {
  return (
    <div className="basis-0 grow h-[62.499px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[15.993px] h-[62.499px] items-center relative w-full">
        <Container107 />
        <Container110 />
      </div>
    </div>
  );
}

function Container112() {
  return (
    <div className="bg-[#101828] h-[42.502px] relative shrink-0 w-[201.656px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.275px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[42.502px] relative w-[201.656px]">
        <p className="absolute font-['Cousine:Regular',sans-serif] leading-[24px] left-[17.27px] not-italic text-[16px] text-nowrap text-white top-[7.54px] whitespace-pre">03:30 PM - 04:30 PM</p>
      </div>
    </div>
  );
}

function Container113() {
  return (
    <div className="absolute box-border content-stretch flex h-[94.485px] items-center justify-between left-0 px-[15.993px] py-0 top-[287.28px] w-[1480.35px]" data-name="Container">
      <Container111 />
      <Container112 />
    </div>
  );
}

function Container114() {
  return (
    <div className="h-[381.763px] relative shrink-0 w-full" data-name="Container">
      <Container92 />
      <Container99 />
      <Container106 />
      <Container113 />
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[16.571px] relative shrink-0 w-full" data-name="Text">
      <p className="absolute font-['Cousine:Regular',sans-serif] h-[42px] leading-[20px] left-[-0.08px] not-italic text-[14px] text-neutral-950 top-[-1.8px] w-[146px]">TOTAL STUDENTS: 4</p>
    </div>
  );
}

function Container115() {
  return (
    <div className="bg-gray-100 h-[46.525px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.275px_0px_0px] border-black border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[46.525px] items-start pb-0 pl-[11.99px] pr-[1337.52px] pt-[15.814px] relative w-full">
          <Text2 />
        </div>
      </div>
    </div>
  );
}

function Container116() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[519.725px] items-start left-0 p-[3.824px] top-[1199.18px] w-[1487.99px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[3.824px] border-black border-solid inset-0 pointer-events-none" />
      <Container85 />
      <Container114 />
      <Container115 />
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-white h-[55.607px] relative shrink-0 w-[224.839px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[3.824px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[55.607px] relative w-[224.839px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[27.82px] text-[16px] text-neutral-950 text-nowrap top-[12.81px] whitespace-pre">← BACK TO SCHEDULES</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-black h-[55.607px] relative shrink-0 w-[153.458px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[3.824px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[55.607px] relative w-[153.458px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[27.82px] text-[16px] text-nowrap text-white top-[12.81px] whitespace-pre">[EXPORT PDF]</p>
      </div>
    </div>
  );
}

function Container117() {
  return (
    <div className="absolute content-stretch flex gap-[15.993px] h-[55.607px] items-start left-[-4px] top-[2092.87px] w-[1487.99px]" data-name="Container">
      <Button1 />
      <Button2 />
    </div>
  );
}

function Container118() {
  return (
    <div className="absolute h-[2203px] left-0 top-[226px] w-[1488px]" data-name="Container">
      <Container43 />
      <Container83 />
      <Container116 />
      <Container117 />
    </div>
  );
}

function Container119() {
  return (
    <div className="absolute h-[2429px] left-[329px] top-[70px] w-[1488px]" data-name="Container">
      <Container8 />
      <Container10 />
      <Container118 />
    </div>
  );
}

function TeacherScheduleDetails() {
  return (
    <div className="bg-white h-[2499px] relative shrink-0 w-[2164px]" data-name="TeacherScheduleDetails">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[2499px] relative w-[2164px]">
        <Container2 />
        <Container119 />
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="absolute bg-gray-50 box-border content-stretch flex h-[2546px] items-start justify-center left-0 pb-[668px] pt-[47.999px] px-0 top-0 w-[2170px]" data-name="App">
      <TeacherScheduleDetails />
    </div>
  );
}

export default function ViewDetailsTeacherSchedules() {
  return (
    <div className="bg-white relative size-full" data-name="View Details - Teacher Schedules">
      <App />
    </div>
  );
}