function Container() {
  return (
    <div className="h-[34.667px] relative shrink-0 w-[159.646px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[34.667px] relative w-[159.646px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[13.33px] text-[16px] text-neutral-950 text-nowrap top-[3.67px] whitespace-pre">ASSESSMENT TEST</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[34.667px] relative shrink-0 w-[107.604px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[34.667px] relative w-[107.604px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[13.33px] text-[16px] text-neutral-950 text-nowrap top-[3.67px] whitespace-pre">TIME: 45:30</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[40px]" />
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[40px] relative shrink-0 w-[163.604px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[16px] h-[40px] items-center relative w-[163.604px]">
        <Container1 />
        <Container2 />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container />
      <Container3 />
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[76px] items-start left-0 pb-[4px] pt-[16px] px-[317.333px] top-0 w-[2170.67px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_4px] border-black border-solid inset-0 pointer-events-none" />
      <Container4 />
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute h-[42.667px] left-[20px] top-[20px] w-[210px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[9.33px] text-[16px] text-neutral-950 text-nowrap top-[7.67px] whitespace-pre">QUESTIONS</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[14px] text-neutral-950 top-[-2px] w-[89px]">Progress: 1/25</p>
    </div>
  );
}

function Container8() {
  return <div className="bg-black h-[9.333px] shrink-0 w-full" data-name="Container" />;
}

function Container9() {
  return (
    <div className="h-[12px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[12px] items-start pl-[1.333px] pr-[200.375px] py-[1.333px] relative w-full">
          <Container8 />
        </div>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[36px] items-start left-[20px] top-[78.67px] w-[210px]" data-name="Container">
      <Container7 />
      <Container9 />
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-black left-0 size-[38.792px] top-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[1.33px] text-[14px] text-nowrap text-white top-[7.4px] whitespace-pre">1</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute left-[42.79px] size-[38.792px] top-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[1.33px] text-[14px] text-neutral-950 text-nowrap top-[7.4px] whitespace-pre">2</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute left-[85.58px] size-[38.813px] top-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[1.33px] text-[14px] text-neutral-950 text-nowrap top-[7.4px] whitespace-pre">3</p>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute left-[128.4px] size-[38.792px] top-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[1.33px] text-[14px] text-neutral-950 text-nowrap top-[7.4px] whitespace-pre">4</p>
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute left-[171.19px] size-[38.813px] top-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[1.33px] text-[14px] text-neutral-950 text-nowrap top-[7.4px] whitespace-pre">5</p>
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute left-0 size-[38.792px] top-[42.81px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[1.33px] text-[14px] text-neutral-950 text-nowrap top-[7.4px] whitespace-pre">6</p>
    </div>
  );
}

function Button6() {
  return (
    <div className="absolute left-[42.79px] size-[38.792px] top-[42.81px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[1.33px] text-[14px] text-neutral-950 text-nowrap top-[7.4px] whitespace-pre">7</p>
    </div>
  );
}

function Button7() {
  return (
    <div className="absolute left-[85.58px] size-[38.813px] top-[42.81px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[1.33px] text-[14px] text-neutral-950 text-nowrap top-[7.4px] whitespace-pre">8</p>
    </div>
  );
}

function Button8() {
  return (
    <div className="absolute left-[128.4px] size-[38.792px] top-[42.81px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[1.33px] text-[14px] text-neutral-950 text-nowrap top-[7.4px] whitespace-pre">9</p>
    </div>
  );
}

function Button9() {
  return (
    <div className="absolute left-[171.19px] size-[38.813px] top-[42.81px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[1.33px] text-[14px] text-neutral-950 text-nowrap top-[7.4px] whitespace-pre">10</p>
    </div>
  );
}

function Button10() {
  return (
    <div className="absolute left-0 size-[38.792px] top-[85.63px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[1.33px] text-[14px] text-neutral-950 text-nowrap top-[7.4px] whitespace-pre">11</p>
    </div>
  );
}

function Button11() {
  return (
    <div className="absolute left-[42.79px] size-[38.792px] top-[85.63px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[1.33px] text-[14px] text-neutral-950 text-nowrap top-[7.4px] whitespace-pre">12</p>
    </div>
  );
}

function Button12() {
  return (
    <div className="absolute left-[85.58px] size-[38.813px] top-[85.63px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[1.33px] text-[14px] text-neutral-950 text-nowrap top-[7.4px] whitespace-pre">13</p>
    </div>
  );
}

function Button13() {
  return (
    <div className="absolute left-[128.4px] size-[38.792px] top-[85.63px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[1.33px] text-[14px] text-neutral-950 text-nowrap top-[7.4px] whitespace-pre">14</p>
    </div>
  );
}

function Button14() {
  return (
    <div className="absolute left-[171.19px] size-[38.813px] top-[85.63px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[1.33px] text-[14px] text-neutral-950 text-nowrap top-[7.4px] whitespace-pre">15</p>
    </div>
  );
}

function Button15() {
  return (
    <div className="absolute left-0 size-[38.792px] top-[128.44px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[1.33px] text-[14px] text-neutral-950 text-nowrap top-[7.4px] whitespace-pre">16</p>
    </div>
  );
}

function Button16() {
  return (
    <div className="absolute left-[42.79px] size-[38.792px] top-[128.44px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[1.33px] text-[14px] text-neutral-950 text-nowrap top-[7.4px] whitespace-pre">17</p>
    </div>
  );
}

function Button17() {
  return (
    <div className="absolute left-[85.58px] size-[38.813px] top-[128.44px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[1.33px] text-[14px] text-neutral-950 text-nowrap top-[7.4px] whitespace-pre">18</p>
    </div>
  );
}

function Button18() {
  return (
    <div className="absolute left-[128.4px] size-[38.792px] top-[128.44px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[1.33px] text-[14px] text-neutral-950 text-nowrap top-[7.4px] whitespace-pre">19</p>
    </div>
  );
}

function Button19() {
  return (
    <div className="absolute left-[171.19px] size-[38.813px] top-[128.44px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[1.33px] text-[14px] text-neutral-950 text-nowrap top-[7.4px] whitespace-pre">20</p>
    </div>
  );
}

function Button20() {
  return (
    <div className="absolute left-0 size-[38.792px] top-[171.25px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[1.33px] text-[14px] text-neutral-950 text-nowrap top-[7.4px] whitespace-pre">21</p>
    </div>
  );
}

function Button21() {
  return (
    <div className="absolute left-[42.79px] size-[38.792px] top-[171.25px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[1.33px] text-[14px] text-neutral-950 text-nowrap top-[7.4px] whitespace-pre">22</p>
    </div>
  );
}

function Button22() {
  return (
    <div className="absolute left-[85.58px] size-[38.813px] top-[171.25px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[1.33px] text-[14px] text-neutral-950 text-nowrap top-[7.4px] whitespace-pre">23</p>
    </div>
  );
}

function Button23() {
  return (
    <div className="absolute left-[128.4px] size-[38.792px] top-[171.25px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[1.33px] text-[14px] text-neutral-950 text-nowrap top-[7.4px] whitespace-pre">24</p>
    </div>
  );
}

function Button24() {
  return (
    <div className="absolute left-[171.19px] size-[38.813px] top-[171.25px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[1.33px] text-[14px] text-neutral-950 text-nowrap top-[7.4px] whitespace-pre">25</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute h-[210.063px] left-[20px] top-[130.67px] w-[210px]" data-name="Container">
      <Button />
      <Button1 />
      <Button2 />
      <Button3 />
      <Button4 />
      <Button5 />
      <Button6 />
      <Button7 />
      <Button8 />
      <Button9 />
      <Button10 />
      <Button11 />
      <Button12 />
      <Button13 />
      <Button14 />
      <Button15 />
      <Button16 />
      <Button17 />
      <Button18 />
      <Button19 />
      <Button20 />
      <Button21 />
      <Button22 />
      <Button23 />
      <Button24 />
    </div>
  );
}

function Container12() {
  return (
    <div className="bg-black relative shrink-0 size-[16px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[16px]" />
    </div>
  );
}

function Text() {
  return (
    <div className="h-[20px] relative shrink-0 w-[46.333px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20px] items-start relative w-[46.333px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Current</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full" data-name="Container">
      <Container12 />
      <Text />
    </div>
  );
}

function Container14() {
  return (
    <div className="bg-[#d1d5dc] relative shrink-0 size-[16px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[16px]" />
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[60.771px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20px] items-start relative w-[60.771px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Answered</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full" data-name="Container">
      <Container14 />
      <Text1 />
    </div>
  );
}

function Container16() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[16px]" />
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[20px] relative shrink-0 w-[88.021px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20px] items-start relative w-[88.021px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Not Answered</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full" data-name="Container">
      <Container16 />
      <Text2 />
    </div>
  );
}

function Container18() {
  return (
    <div className="bg-[#ffc9c9] relative shrink-0 size-[16px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[16px]" />
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[20px] relative shrink-0 w-[88.021px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20px] items-start relative w-[88.021px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Marked</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full" data-name="Container">
      <Container18 />
      <Text3 />
    </div>
  );
}

function Text4() {
  return <div className="h-[20px] shrink-0 w-[88.021px]" data-name="Text" />;
}

function Container20() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[8px] h-[89.333px] items-start left-[20px] pb-0 pt-[13.333px] px-0 top-[356.73px] w-[210px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px_0px_0px] border-black border-solid inset-0 pointer-events-none" />
      <Container13 />
      <Container15 />
      <Container17 />
      <Container19 />
      <Text4 />
    </div>
  );
}

function Container21() {
  return (
    <div className="[grid-area:1_/_1] h-[694.667px] justify-self-stretch relative shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <Container6 />
      <Container10 />
      <Container11 />
      <Container20 />
    </div>
  );
}

function Container22() {
  return (
    <div className="h-[34.667px] relative shrink-0 w-[156.25px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[34.667px] relative w-[156.25px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal h-[44px] leading-[24px] left-[17.67px] text-[16px] text-neutral-950 top-[4px] w-[170px]">QUESTION 1 / 25</p>
      </div>
    </div>
  );
}

function Button25() {
  return (
    <div className="h-[30.667px] relative shrink-0 w-[78.688px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[30.667px] relative w-[78.688px]">
        <p className="absolute font-['Arimo:Regular','Noto_Sans:Regular',sans-serif] font-normal leading-[20px] left-[13.33px] text-[14px] text-neutral-950 text-nowrap top-[3.33px] whitespace-pre">⚑ MARK</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute content-stretch flex h-[34.667px] items-center justify-between left-[28px] top-[28px] w-[1158px]" data-name="Container">
      <Container22 />
      <Button25 />
    </div>
  );
}

function Container24() {
  return (
    <div className="h-[50.667px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[13.33px] text-[16px] text-neutral-950 text-nowrap top-[11.67px] whitespace-pre">What is Charlene’s favorite food?</p>
    </div>
  );
}

function Container25() {
  return (
    <div className="box-border content-stretch flex h-[128px] items-center justify-center p-[1.333px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-neutral-950 text-nowrap whitespace-pre">[Question Image/Diagram]</p>
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[194.667px] items-start left-[28px] top-[86.67px] w-[1158px]" data-name="Container">
      <Container24 />
      <Container25 />
    </div>
  );
}

function RadioButton() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Radio Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[16px]" />
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[24px] relative shrink-0 w-[27px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[27px]">
        <p className="absolute font-['Cousine:Regular',sans-serif] h-[44px] leading-[24px] left-[0.33px] not-italic text-[16px] text-neutral-950 top-[-0.67px] w-[33px]">[A]</p>
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[24px] relative shrink-0 w-[117.271px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[117.271px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-neutral-950 top-[-1.67px] w-[118px]">Answer option A</p>
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="absolute box-border content-stretch flex gap-[12px] h-[50.667px] items-center left-0 pl-[13.333px] pr-[1.333px] py-[1.333px] top-0 w-[1158px]" data-name="Label">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <RadioButton />
      <Text5 />
      <Text6 />
    </div>
  );
}

function RadioButton1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Radio Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[16px]" />
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[23px] relative shrink-0 w-[28px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[23px] relative w-[28px]">
        <p className="absolute font-['Cousine:Regular',sans-serif] h-[41px] leading-[24px] left-[0.33px] not-italic text-[16px] text-neutral-950 top-[0.17px] w-[38px]">[B]</p>
      </div>
    </div>
  );
}

function Text8() {
  return (
    <div className="h-[24px] relative shrink-0 w-[116.125px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[116.125px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-neutral-950 top-[-1.67px] w-[117px]">Answer option B</p>
      </div>
    </div>
  );
}

function Label1() {
  return (
    <div className="absolute box-border content-stretch flex gap-[12px] h-[50.667px] items-center left-0 pl-[13.333px] pr-[1.333px] py-[1.333px] top-[58.67px] w-[1158px]" data-name="Label">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <RadioButton1 />
      <Text7 />
      <Text8 />
    </div>
  );
}

function RadioButton2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Radio Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[16px]" />
    </div>
  );
}

function Text9() {
  return (
    <div className="h-[20px] relative shrink-0 w-[26px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[26px]">
        <p className="absolute font-['Cousine:Regular',sans-serif] h-[37px] leading-[24px] left-[0.33px] not-italic text-[16px] text-neutral-950 top-0 w-[36px]">[C]</p>
      </div>
    </div>
  );
}

function Text10() {
  return (
    <div className="h-[28px] relative shrink-0 w-[110px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[28px] relative w-[110px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal h-[44px] leading-[24px] left-[0.33px] text-[16px] text-neutral-950 top-[-2px] w-[131px] whitespace-pre-wrap">{`Answer option  C`}</p>
      </div>
    </div>
  );
}

function Label2() {
  return (
    <div className="absolute box-border content-stretch flex gap-[12px] h-[50.667px] items-center left-0 pl-[13.333px] pr-[1.333px] py-[1.333px] top-[117.33px] w-[1158px]" data-name="Label">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <RadioButton2 />
      <Text9 />
      <Text10 />
    </div>
  );
}

function RadioButton3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Radio Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[16px]" />
    </div>
  );
}

function Text11() {
  return (
    <div className="h-[24px] relative shrink-0 w-[26.438px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[26.438px]">
        <p className="absolute font-['Cousine:Regular',sans-serif] h-[49px] leading-[24px] left-[0.33px] not-italic text-[16px] text-neutral-950 top-[-0.67px] w-[33px]">[D]</p>
      </div>
    </div>
  );
}

function Text12() {
  return (
    <div className="h-[24px] relative shrink-0 w-[118.167px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[118.167px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-neutral-950 top-[-1.67px] w-[119px]">Answer option D</p>
      </div>
    </div>
  );
}

function Label3() {
  return (
    <div className="absolute box-border content-stretch flex gap-[12px] h-[50.667px] items-center left-0 pl-[13.333px] pr-[1.333px] py-[1.333px] top-[176px] w-[1158px]" data-name="Label">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <RadioButton3 />
      <Text11 />
      <Text12 />
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute h-[226.667px] left-[28px] top-[305.33px] w-[1158px]" data-name="Container">
      <Label />
      <Label1 />
      <Label2 />
      <Label3 />
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[14px] text-neutral-950">💡 TIP: The answer is SUSHI :3</p>
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute bg-gray-50 box-border content-stretch flex flex-col h-[46.667px] items-start left-[28px] pb-[1.333px] pt-[13.333px] px-[13.333px] top-[556px] w-[1158px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <Container28 />
    </div>
  );
}

function Container30() {
  return (
    <div className="h-[630.667px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <Container23 />
      <Container26 />
      <Container27 />
      <Container29 />
    </div>
  );
}

function Button26() {
  return (
    <div className="h-[48px] opacity-30 relative shrink-0 w-[110.75px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[48px] relative w-[110.75px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[28px] text-[16px] text-neutral-950 text-nowrap top-[10.33px] whitespace-pre">← PREV</p>
      </div>
    </div>
  );
}

function Button27() {
  return (
    <div className="h-[42.667px] relative shrink-0 w-[80.104px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[42.667px] relative w-[80.104px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[17.33px] text-[16px] text-neutral-950 text-nowrap top-[7.67px] whitespace-pre">CLEAR</p>
      </div>
    </div>
  );
}

function Button28() {
  return (
    <div className="bg-[#ffc9c9] h-[42.667px] relative shrink-0 w-[130.792px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[42.667px] relative w-[130.792px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[17.33px] text-[16px] text-neutral-950 text-nowrap top-[7.67px] whitespace-pre">{`MARK & SKIP`}</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="h-[42.667px] relative shrink-0 w-[218.896px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[42.667px] items-start relative w-[218.896px]">
        <Button27 />
        <Button28 />
      </div>
    </div>
  );
}

function Button29() {
  return (
    <div className="bg-black h-[48px] relative shrink-0 w-[112.333px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[48px] relative w-[112.333px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[28px] text-[16px] text-nowrap text-white top-[10.33px] whitespace-pre">NEXT →</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[48px] items-center justify-between pl-0 pr-[0.021px] py-0 relative w-full">
          <Button26 />
          <Container31 />
          <Button29 />
        </div>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="[grid-area:1_/_2] content-stretch flex flex-col gap-[16px] h-[694.667px] items-start justify-self-stretch relative shrink-0" data-name="Container">
      <Container30 />
      <Container32 />
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute gap-[24px] grid grid-cols-[250px_minmax(0px,_1fr)] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[694.667px] left-[341.33px] top-[108px] w-[1488px]" data-name="Container">
      <Container21 />
      <Container33 />
    </div>
  );
}

function OnlineTest() {
  return (
    <div className="bg-white h-[1210.67px] relative shrink-0 w-full" data-name="OnlineTest">
      <Container5 />
      <Container34 />
    </div>
  );
}

function App() {
  return (
    <div className="absolute bg-gray-50 content-stretch flex flex-col h-[1258px] items-start left-0 top-0 w-[2171px]" data-name="App">
      <OnlineTest />
    </div>
  );
}

export default function StudentAndTeacherAssessmentTest() {
  return (
    <div className="bg-white relative size-full" data-name="Student and Teacher Assessment Test">
      <App />
    </div>
  );
}