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
    <div className="h-[34.667px] relative shrink-0 w-[210.167px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[34.667px] relative w-[210.167px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[13.33px] text-[16px] text-neutral-950 text-nowrap top-[3.67px] whitespace-pre">UPDATE PROFILE PICTURE</p>
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
    <div className="absolute h-[42.667px] left-0 top-0 w-[396px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[9.33px] text-[16px] text-neutral-950 text-nowrap top-[7.67px] whitespace-pre">CURRENT PICTURE</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[60px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[60px] left-[41px] text-[60px] text-center text-neutral-950 text-nowrap top-[-6.67px] translate-x-[-50%] whitespace-pre">👤</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[14px] text-center text-neutral-950">No Image</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[88px] relative shrink-0 w-[82.396px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[8px] h-[88px] items-start relative w-[82.396px]">
        <Container4 />
        <Container5 />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="relative rounded-[4.47392e+07px] shrink-0 size-[192px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center overflow-clip pl-[4px] pr-[4.021px] py-[4px] relative rounded-[inherit] size-[192px]">
        <Container6 />
      </div>
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none rounded-[4.47392e+07px]" />
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Cousine:Regular',sans-serif] leading-[24px] left-[59.56px] not-italic text-[16px] text-center text-neutral-950 text-nowrap top-[-0.33px] translate-x-[-50%] whitespace-pre">Alex Chen</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-center text-neutral-950 text-nowrap whitespace-pre">Student • Grade 10</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[48px] relative shrink-0 w-[117.333px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[48px] items-start relative w-[117.333px]">
        <Container8 />
        <Container9 />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[16px] h-[272px] items-center left-0 pb-[16px] pt-0 px-0 top-[66.67px] w-[396px]" data-name="Container">
      <Container7 />
      <Container10 />
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute h-[42.667px] left-0 top-[370.67px] w-[396px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[9.33px] text-[16px] text-neutral-950 text-nowrap top-[7.67px] whitespace-pre">UPLOAD NEW</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute h-[40px] left-[52px] top-[52px] w-[292px]" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[40px] left-[145.5px] text-[36px] text-center text-neutral-950 text-nowrap top-[-3px] translate-x-[-50%] whitespace-pre">↑</p>
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute h-[24px] left-[52px] top-[108px] w-[292px]" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[146.25px] text-[16px] text-center text-neutral-950 text-nowrap top-[-1.67px] translate-x-[-50%] whitespace-pre">CLICK TO UPLOAD</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[52px] top-[140px] w-[292px]" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[14px] text-center text-neutral-950">or drag and drop</p>
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute h-[25.333px] left-[52px] top-[168px] w-[292px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px_0px_0px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[16px] left-[146.75px] text-[12px] text-center text-neutral-950 text-nowrap top-[8.33px] translate-x-[-50%] whitespace-pre">JPG, PNG, GIF • Max 5MB</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute h-[245.333px] left-0 top-[429.33px] w-[396px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <Container13 />
      <Container14 />
      <Container15 />
      <Container16 />
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Cousine:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-[-0.67px] whitespace-pre">💡 TIPS:</p>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[14px] text-neutral-950">□ Use square images (1:1 ratio)</p>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[14px] text-neutral-950">□ Face should be clearly visible</p>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[14px] text-neutral-950">□ Professional appearance</p>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[14px] text-neutral-950">□ Good lighting</p>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[92px] items-start relative shrink-0 w-full" data-name="Container">
      <Container19 />
      <Container20 />
      <Container21 />
      <Container22 />
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute bg-blue-50 box-border content-stretch flex flex-col gap-[8px] h-[160px] items-start left-0 pb-[4px] pt-[20px] px-[20px] top-[690.67px] w-[396px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-[#155dfc] border-solid inset-0 pointer-events-none" />
      <Container18 />
      <Container23 />
    </div>
  );
}

function Container25() {
  return (
    <div className="[grid-area:1_/_1] h-[1015.48px] justify-self-stretch relative shrink-0" data-name="Container">
      <Container3 />
      <Container11 />
      <Container12 />
      <Container17 />
      <Container24 />
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute h-[42.667px] left-0 top-0 w-[396px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[9.33px] text-[16px] text-neutral-950 text-nowrap top-[7.67px] whitespace-pre">CHOOSE PRESET AVATAR</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute box-border content-stretch flex items-center justify-center left-0 p-[4px] size-[124px] top-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[40px] relative shrink-0 text-[36px] text-neutral-950 text-nowrap whitespace-pre">👩</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute box-border content-stretch flex items-center justify-center left-[136px] p-[4px] size-[124px] top-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[40px] relative shrink-0 text-[36px] text-neutral-950 text-nowrap whitespace-pre">🧑</p>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute box-border content-stretch flex items-center justify-center left-[272px] p-[4px] size-[124px] top-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[40px] relative shrink-0 text-[36px] text-neutral-950 text-nowrap whitespace-pre">👨</p>
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute box-border content-stretch flex items-center justify-center left-0 p-[4px] size-[124px] top-[136px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[40px] relative shrink-0 text-[36px] text-neutral-950 text-nowrap whitespace-pre">👩</p>
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute box-border content-stretch flex items-center justify-center left-[136px] p-[4px] size-[124px] top-[136px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[40px] relative shrink-0 text-[36px] text-neutral-950 text-nowrap whitespace-pre">🧑</p>
    </div>
  );
}

function Button6() {
  return (
    <div className="absolute box-border content-stretch flex items-center justify-center left-[272px] p-[4px] size-[124px] top-[136px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[40px] relative shrink-0 text-[36px] text-neutral-950 text-nowrap whitespace-pre">👨</p>
    </div>
  );
}

function Button7() {
  return (
    <div className="absolute box-border content-stretch flex items-center justify-center left-0 p-[4px] size-[124px] top-[272px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[40px] relative shrink-0 text-[36px] text-neutral-950 text-nowrap whitespace-pre">👩</p>
    </div>
  );
}

function Button8() {
  return (
    <div className="absolute box-border content-stretch flex items-center justify-center left-[136px] p-[4px] size-[124px] top-[272px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[40px] relative shrink-0 text-[36px] text-neutral-950 text-nowrap whitespace-pre">🧑</p>
    </div>
  );
}

function Button9() {
  return (
    <div className="absolute box-border content-stretch flex items-center justify-center left-[272px] p-[4px] size-[124px] top-[272px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[40px] relative shrink-0 text-[36px] text-neutral-950 text-nowrap whitespace-pre">👨</p>
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute left-0 size-[396px] top-[66.67px]" data-name="Container">
      <Button1 />
      <Button2 />
      <Button3 />
      <Button4 />
      <Button5 />
      <Button6 />
      <Button7 />
      <Button8 />
      <Button9 />
    </div>
  );
}

function Container28() {
  return (
    <div className="h-[42.667px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[9.33px] text-[16px] text-neutral-950 text-nowrap top-[7.67px] whitespace-pre">CUSTOMIZE</p>
    </div>
  );
}

function Container29() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-neutral-950 text-nowrap top-[-1.67px] whitespace-pre">[Background Color]</p>
    </div>
  );
}

function Button10() {
  return (
    <div className="absolute bg-[#ffc9c9] left-0 size-[72.792px] top-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Button11() {
  return (
    <div className="absolute bg-[#bedbff] left-[80.79px] size-[72.792px] top-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Button12() {
  return (
    <div className="absolute bg-[#b9f8cf] left-[161.58px] size-[72.813px] top-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Button13() {
  return (
    <div className="absolute bg-[#fff085] left-[242.4px] size-[72.792px] top-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Button14() {
  return (
    <div className="absolute bg-[#e9d4ff] left-[323.19px] size-[72.792px] top-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container30() {
  return (
    <div className="h-[72.813px] relative shrink-0 w-full" data-name="Container">
      <Button10 />
      <Button11 />
      <Button12 />
      <Button13 />
      <Button14 />
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[104.813px] items-start relative shrink-0 w-full" data-name="Container">
      <Container29 />
      <Container30 />
    </div>
  );
}

function Container32() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-neutral-950 text-nowrap top-[-1.67px] whitespace-pre">[Frame Style]</p>
    </div>
  );
}

function Button15() {
  return (
    <div className="basis-0 grow h-[50.667px] min-h-px min-w-px relative shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[50.667px] relative w-full">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[13.33px] text-[16px] text-neutral-950 text-nowrap top-[11.67px] whitespace-pre">Circle</p>
      </div>
    </div>
  );
}

function Button16() {
  return (
    <div className="basis-0 grow h-[50.667px] min-h-px min-w-px relative shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[50.667px] relative w-full">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[13.33px] text-[16px] text-neutral-950 text-nowrap top-[11.67px] whitespace-pre">Square</p>
      </div>
    </div>
  );
}

function Button17() {
  return (
    <div className="basis-0 grow h-[50.667px] min-h-px min-w-px relative shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[50.667px] relative w-full">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[13.33px] text-[16px] text-neutral-950 text-nowrap top-[11.67px] whitespace-pre">None</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex gap-[8px] h-[50.667px] items-start relative shrink-0 w-full" data-name="Container">
      <Button15 />
      <Button16 />
      <Button17 />
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[82.667px] items-start relative shrink-0 w-full" data-name="Container">
      <Container32 />
      <Container33 />
    </div>
  );
}

function Container35() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-neutral-950 text-nowrap top-[-1.67px] whitespace-pre">[Border Width]</p>
    </div>
  );
}

function RangeSlider() {
  return (
    <div className="basis-0 grow h-[16px] min-h-px min-w-px relative shrink-0" data-name="Range Slider">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16px] w-full" />
    </div>
  );
}

function Text() {
  return (
    <div className="h-[30.667px] relative shrink-0 w-[48.875px]" data-name="Text">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[30.667px] relative w-[48.875px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[13.33px] text-[14px] text-neutral-950 text-nowrap top-[3.33px] whitespace-pre">4px</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex gap-[12px] h-[30.667px] items-center relative shrink-0 w-full" data-name="Container">
      <RangeSlider />
      <Text />
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[62.667px] items-start relative shrink-0 w-full" data-name="Container">
      <Container35 />
      <Container36 />
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[282.146px] items-start relative shrink-0 w-full" data-name="Container">
      <Container31 />
      <Container34 />
      <Container37 />
    </div>
  );
}

function Container39() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[16px] h-[368.813px] items-start left-0 pb-0 pt-[28px] px-0 top-[486.67px] w-[396px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[4px_0px_0px] border-black border-solid inset-0 pointer-events-none" />
      <Container28 />
      <Container38 />
    </div>
  );
}

function Container40() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Cousine:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-[-0.67px] whitespace-pre">⚠ PRIVACY:</p>
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[14px] text-neutral-950">{`□ Visible to teachers & admin`}</p>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[14px] text-neutral-950">□ Not public outside system</p>
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[14px] text-neutral-950">□ Can be removed anytime</p>
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[68px] items-start relative shrink-0 w-full" data-name="Container">
      <Container41 />
      <Container42 />
      <Container43 />
    </div>
  );
}

function Container45() {
  return (
    <div className="absolute bg-yellow-50 box-border content-stretch flex flex-col gap-[8px] h-[136px] items-start left-0 pb-[4px] pt-[20px] px-[20px] top-[879.48px] w-[396px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-[#d08700] border-solid inset-0 pointer-events-none" />
      <Container40 />
      <Container44 />
    </div>
  );
}

function Container46() {
  return (
    <div className="[grid-area:1_/_2] h-[1015.48px] justify-self-stretch relative shrink-0" data-name="Container">
      <Container26 />
      <Container27 />
      <Container39 />
      <Container45 />
    </div>
  );
}

function Container47() {
  return (
    <div className="gap-[32px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[1015.48px] relative shrink-0 w-full" data-name="Container">
      <Container25 />
      <Container46 />
    </div>
  );
}

function Button18() {
  return (
    <div className="bg-[#e7000b] h-[56px] relative shrink-0 w-[191.938px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[56px] relative w-[191.938px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[28px] text-[16px] text-nowrap text-white top-[14.33px] whitespace-pre">[REMOVE PICTURE]</p>
      </div>
    </div>
  );
}

function Button19() {
  return (
    <div className="h-[56px] relative shrink-0 w-[123.396px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[56px] relative w-[123.396px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[28px] text-[16px] text-neutral-950 text-nowrap top-[14.33px] whitespace-pre">[CANCEL]</p>
      </div>
    </div>
  );
}

function Button20() {
  return (
    <div className="bg-black h-[56px] relative shrink-0 w-[195.125px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[56px] relative w-[195.125px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[28px] text-[16px] text-nowrap text-white top-[14.33px] whitespace-pre">[SAVE CHANGES] →</p>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="h-[56px] relative shrink-0 w-[330.521px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[56px] items-start relative w-[330.521px]">
        <Button19 />
        <Button20 />
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="h-[92px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[4px_0px_0px] border-black border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex h-[92px] items-start justify-between pb-0 pt-[36px] px-0 relative w-full">
          <Button18 />
          <Container48 />
        </div>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="h-[1211.48px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[32px] h-[1211.48px] items-start pb-[4px] pt-[36px] px-[36px] relative w-full">
          <Container47 />
          <Container49 />
        </div>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="h-[42.667px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[9.33px] text-[16px] text-neutral-950 text-nowrap top-[7.67px] whitespace-pre">RECENT CHANGES</p>
    </div>
  );
}

function Container52() {
  return (
    <div className="relative rounded-[4.47392e+07px] shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none rounded-[4.47392e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[32px]" />
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[14px] text-neutral-950">Updated profile picture</p>
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[12px] text-neutral-950">Nov 10, 2024</p>
    </div>
  );
}

function Container55() {
  return (
    <div className="basis-0 grow h-[36px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[36px] items-start relative w-full">
        <Container53 />
        <Container54 />
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="h-[62.667px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[62.667px] items-center px-[13.333px] py-[1.333px] relative w-full">
          <Container52 />
          <Container55 />
        </div>
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="relative rounded-[4.47392e+07px] shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none rounded-[4.47392e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[32px]" />
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[14px] text-neutral-950">Changed to avatar #3</p>
    </div>
  );
}

function Container59() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[12px] text-neutral-950">Oct 15, 2024</p>
    </div>
  );
}

function Container60() {
  return (
    <div className="basis-0 grow h-[36px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[36px] items-start relative w-full">
        <Container58 />
        <Container59 />
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="h-[62.667px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[62.667px] items-center px-[13.333px] py-[1.333px] relative w-full">
          <Container57 />
          <Container60 />
        </div>
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="relative rounded-[4.47392e+07px] shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none rounded-[4.47392e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[32px]" />
    </div>
  );
}

function Container63() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[14px] text-neutral-950">First upload</p>
    </div>
  );
}

function Container64() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[12px] text-neutral-950">Sep 1, 2024</p>
    </div>
  );
}

function Container65() {
  return (
    <div className="basis-0 grow h-[36px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[36px] items-start relative w-full">
        <Container63 />
        <Container64 />
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="h-[62.667px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[62.667px] items-center px-[13.333px] py-[1.333px] relative w-full">
          <Container62 />
          <Container65 />
        </div>
      </div>
    </div>
  );
}

function Container67() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[204px] items-start relative shrink-0 w-full" data-name="Container">
      <Container56 />
      <Container61 />
      <Container66 />
    </div>
  );
}

function Container68() {
  return (
    <div className="h-[318.667px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] h-[318.667px] items-start pb-[4px] pt-[28px] px-[28px] relative w-full">
          <Container51 />
          <Container67 />
        </div>
      </div>
    </div>
  );
}

function Container69() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[1554.15px] items-start left-[637.33px] top-[102.67px] w-[896px]" data-name="Container">
      <Container50 />
      <Container68 />
    </div>
  );
}

function ProfilePictureUpdate() {
  return (
    <div className="bg-white h-[1688.81px] relative shrink-0 w-full" data-name="ProfilePictureUpdate">
      <Container2 />
      <Container69 />
    </div>
  );
}

function App() {
  return (
    <div className="absolute bg-gray-50 box-border content-stretch flex flex-col h-[1736.81px] items-start left-0 pb-0 pt-[48px] px-0 top-0 w-[2170.67px]" data-name="App">
      <ProfilePictureUpdate />
    </div>
  );
}

export default function ProfilePictureUpdate1() {
  return (
    <div className="bg-white relative size-full" data-name="Profile Picture Update">
      <App />
    </div>
  );
}