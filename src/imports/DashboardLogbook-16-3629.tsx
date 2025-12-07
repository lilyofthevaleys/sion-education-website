function Container() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[40px]" />
    </div>
  );
}

function Container1() {
  return (
    <div className="basis-0 grow h-[34.667px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[34.667px] relative w-full">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[13.33px] text-[16px] text-neutral-950 text-nowrap top-[3.67px] whitespace-pre">TEACHER PORTAL</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[40px] relative shrink-0 w-[203.479px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[40px] items-center relative w-[203.479px]">
        <Container />
        <Container1 />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[40px] relative shrink-0 w-[88.354px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[40px] w-[88.354px]" />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-neutral-950 text-nowrap text-right whitespace-pre">Ms. Johnson</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-neutral-950 text-nowrap text-right whitespace-pre">Math Teacher</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[40px] relative shrink-0 w-[83.188px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[40px] items-start relative w-[83.188px]">
        <Container4 />
        <Container5 />
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="relative rounded-[4.47392e+07px] shrink-0 size-[40px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none rounded-[4.47392e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[40px]" />
    </div>
  );
}

function Button1() {
  return (
    <div className="h-[34.667px] relative shrink-0 w-[80.146px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[34.667px] relative w-[80.146px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[9.33px] text-[16px] text-neutral-950 text-nowrap top-[3.67px] whitespace-pre">LOGOUT</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[40px] relative shrink-0 w-[227.333px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[40px] items-center relative w-[227.333px]">
        <Container3 />
        <Container6 />
        <Button />
        <Button1 />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container2 />
      <Container7 />
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[76px] items-start left-0 pb-[4px] pt-[16px] px-[317.333px] top-0 w-[2170.67px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_4px] border-black border-solid inset-0 pointer-events-none" />
      <Container8 />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex h-[32px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[32px] min-h-px min-w-px relative shrink-0 text-[24px] text-white">WELCOME MS. JOHNSON!</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-nowrap text-white top-[-1.67px] whitespace-pre">3 lessons today • 2 pending logbooks</p>
    </div>
  );
}

function Container12() {
  return (
    <div className="bg-[#101828] h-[120px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] h-[120px] items-start pb-[4px] pt-[28px] px-[28px] relative w-full">
          <Container10 />
          <Container11 />
        </div>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex h-[36px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Cousine:Regular',sans-serif] grow leading-[36px] min-h-px min-w-px not-italic relative shrink-0 text-[30px] text-neutral-950">15</p>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[14px] text-neutral-950">Students</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="[grid-area:1_/_1] place-self-stretch relative shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start pb-[4px] pt-[20px] px-[20px] relative size-full">
          <Container13 />
          <Container14 />
        </div>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex h-[36px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Cousine:Regular',sans-serif] grow leading-[36px] min-h-px min-w-px not-italic relative shrink-0 text-[30px] text-neutral-950">24</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[14px] text-neutral-950">This Week</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="[grid-area:1_/_2] place-self-stretch relative shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start pb-[4px] pt-[20px] px-[20px] relative size-full">
          <Container16 />
          <Container17 />
        </div>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex h-[36px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Cousine:Regular',sans-serif] grow leading-[36px] min-h-px min-w-px not-italic relative shrink-0 text-[30px] text-neutral-950">2</p>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[14px] text-neutral-950">Pending Logs</p>
    </div>
  );
}

function Container21() {
  return (
    <div className="[grid-area:1_/_3] place-self-stretch relative shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start pb-[4px] pt-[20px] px-[20px] relative size-full">
          <Container19 />
          <Container20 />
        </div>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex h-[36px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Cousine:Regular',sans-serif] grow leading-[36px] min-h-px min-w-px not-italic relative shrink-0 text-[30px] text-neutral-950">7</p>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[14px] text-neutral-950">Messages</p>
    </div>
  );
}

function Container24() {
  return (
    <div className="[grid-area:1_/_4] place-self-stretch relative shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start pb-[4px] pt-[20px] px-[20px] relative size-full">
          <Container22 />
          <Container23 />
        </div>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="gap-[16px] grid grid-cols-[repeat(4,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[104px] relative shrink-0 w-full" data-name="Container">
      <Container15 />
      <Container18 />
      <Container21 />
      <Container24 />
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute h-[48px] left-0 top-0 w-[137.375px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0px_4px_0px_0px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal h-[52px] leading-[24px] left-[23.67px] text-[16px] text-neutral-950 top-[10px] w-[99px]">[SCHEDULE]</p>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute h-[48px] left-[137.38px] top-0 w-[137.396px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0px_4px_0px_0px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal h-[54px] leading-[24px] left-[24.29px] text-[16px] text-neutral-950 top-[10px] w-[98px]">[STUDENTS]</p>
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute bg-black h-[48px] left-[274.77px] top-0 w-[134.271px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0px_4px_0px_0px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal h-[59px] leading-[24px] left-[23.9px] text-[16px] text-white top-[10px] w-[93px]">[LOGBOOK]</p>
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute h-[48px] left-[409.04px] top-0 w-[100.5px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0px_4px_0px_0px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal h-[59px] leading-[24px] left-[23.63px] text-[16px] text-neutral-950 top-[10px] w-[54px]">[CHAT]</p>
    </div>
  );
}

function Button6() {
  return (
    <div className="absolute h-[48px] left-[509.54px] top-0 w-[115.813px]" data-name="Button">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal h-[50px] leading-[24px] left-[24.13px] text-[16px] text-neutral-950 top-[10px] w-[78px]">[PROFILE]</p>
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute h-[52px] left-[4px] top-[4px] w-[1480px]" data-name="Container">
      <div className="h-[52px] overflow-clip relative rounded-[inherit] w-[1480px]">
        <Button2 />
        <Button3 />
        <Button4 />
        <Button5 />
        <Button6 />
      </div>
      <div aria-hidden="true" className="absolute border-[0px_0px_4px] border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container27() {
  return (
    <div className="h-[42.667px] relative shrink-0 w-[170.604px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[42.667px] relative w-[170.604px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[9.33px] text-[16px] text-neutral-950 text-nowrap top-[7.67px] whitespace-pre">TEACHING LOGBOOK</p>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="bg-black h-[42.667px] relative shrink-0 w-[146.667px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[42.667px] relative w-[146.667px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[17.33px] text-[16px] text-nowrap text-white top-[7.67px] whitespace-pre">NEW LOGBOOK</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex h-[42.667px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container27 />
      <Button7 />
    </div>
  );
}

function Container29() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Cousine:Regular',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-[-0.33px] whitespace-pre">Select Student</p>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[14px] text-neutral-950">{`□ Alex Chen `}</p>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[14px] text-neutral-950">{`□ Sarah Wilson `}</p>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start relative shrink-0 w-full" data-name="Container">
      <Container30 />
      <Container31 />
    </div>
  );
}

function Container33() {
  return (
    <div className="bg-yellow-50 h-[116px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-[#d08700] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] h-[116px] items-start pb-[4px] pt-[20px] px-[20px] relative w-full">
          <Container29 />
          <Container32 />
        </div>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="h-[42.667px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[9.33px] text-[16px] text-neutral-950 text-nowrap top-[7.67px] whitespace-pre">NEW ENTRY</p>
    </div>
  );
}

function Container35() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-neutral-950 text-nowrap top-[-1.67px] whitespace-pre">{`[Date & Time]`}</p>
    </div>
  );
}

function Option() {
  return <div className="absolute left-[-405.33px] size-0 top-[-837.33px]" data-name="Option" />;
}

function Dropdown() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Dropdown">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      {[...Array(2).keys()].map((_, i) => (
        <Option key={i} />
      ))}
    </div>
  );
}

function Container36() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[68px] items-start left-0 top-0 w-[1360px]" data-name="Container">
      <Container35 />
      <Dropdown />
    </div>
  );
}

function Container37() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-neutral-950 text-nowrap top-[-1.67px] whitespace-pre">[Topic]</p>
    </div>
  );
}

function TextInput() {
  return (
    <div className="h-[42.667px] relative shrink-0 w-full" data-name="Text Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[42.667px] items-center p-[8px] relative w-full">
          <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-[rgba(10,10,10,0.5)] text-nowrap whitespace-pre">Lesson topic...</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container38() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[70.667px] items-start left-0 top-[84px] w-[1360px]" data-name="Container">
      <Container37 />
      <TextInput />
    </div>
  );
}

function Container39() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-neutral-950 text-nowrap top-[-1.67px] whitespace-pre">[Notes]</p>
    </div>
  );
}

function TextArea() {
  return (
    <div className="h-[114.667px] relative shrink-0 w-full" data-name="Text Area">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[114.667px] items-start p-[8px] relative w-full">
          <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-[rgba(10,10,10,0.5)] text-nowrap whitespace-pre">Progress, homework...</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[148px] items-start left-0 top-[170.67px] w-[1360px]" data-name="Container">
      <Container39 />
      <TextArea />
    </div>
  );
}

function Container41() {
  return <div className="absolute h-[52px] left-0 top-[334.67px] w-[1360px]" data-name="Container" />;
}

function Container42() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-neutral-950 text-nowrap top-[-1.67px] whitespace-pre">[Upload Photo]</p>
    </div>
  );
}

function Container43() {
  return (
    <div className="h-[80px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[680.1px] text-[16px] text-center text-neutral-950 text-nowrap top-[26.33px] translate-x-[-50%] whitespace-pre">↑ Click to upload</p>
    </div>
  );
}

function Container44() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[108px] items-start left-0 top-[402.67px] w-[1360px]" data-name="Container">
      <Container42 />
      <Container43 />
    </div>
  );
}

function Button8() {
  return (
    <div className="bg-black h-[42.667px] relative shrink-0 w-[106.354px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[42.667px] relative w-[106.354px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[25.33px] text-[16px] text-nowrap text-white top-[7.67px] whitespace-pre">SUBMIT</p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="absolute box-border content-stretch flex gap-[8px] h-[58.667px] items-start left-0 pb-0 pt-[16px] px-0 top-[526.67px] w-[1360px]" data-name="Container">
      <Button8 />
    </div>
  );
}

function Container46() {
  return (
    <div className="h-[585.333px] relative shrink-0 w-full" data-name="Container">
      <Container36 />
      <Container38 />
      <Container40 />
      <Container41 />
      <Container44 />
      <Container45 />
    </div>
  );
}

function Container47() {
  return (
    <div className="h-[700px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] h-[700px] items-start pb-[4px] pt-[28px] px-[28px] relative w-full">
          <Container34 />
          <Container46 />
        </div>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[906.667px] items-start left-[36px] top-[88px] w-[1416px]" data-name="Container">
      <Container28 />
      <Container33 />
      <Container47 />
    </div>
  );
}

function Container49() {
  return (
    <div className="h-[1030.67px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <Container26 />
      <Container48 />
    </div>
  );
}

function Container50() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[24px] h-[1366.67px] items-start left-[317.33px] pb-0 pt-[32px] px-[24px] top-[76px] w-[1536px]" data-name="Container">
      <Container12 />
      <Container25 />
      <Container49 />
    </div>
  );
}

function TeacherDashboard() {
  return (
    <div className="bg-white h-[1442.67px] relative shrink-0 w-full" data-name="TeacherDashboard">
      <Container9 />
      <Container50 />
    </div>
  );
}

function App() {
  return (
    <div className="absolute bg-gray-50 content-stretch flex flex-col h-[1490.67px] items-start left-0 top-0 w-[2170.67px]" data-name="App">
      <TeacherDashboard />
    </div>
  );
}

export default function DashboardLogbook() {
  return (
    <div className="bg-white relative size-full" data-name="Dashboard - Logbook">
      <App />
    </div>
  );
}