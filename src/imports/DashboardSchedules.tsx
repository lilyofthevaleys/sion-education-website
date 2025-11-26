function Container() {
  return (
    <div className="relative shrink-0 size-[39.993px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.275px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[39.993px]" />
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[34.496px] relative shrink-0 w-[138.042px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.275px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[34.496px] relative w-[138.042px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[13.26px] text-[16px] text-neutral-950 text-nowrap top-[2.26px] whitespace-pre">ADMIN PORTAL</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[39.993px] relative shrink-0 w-[190.025px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[11.99px] h-[39.993px] items-center relative w-[190.025px]">
        <Container />
        <Container1 />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex h-[19.996px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[14px] text-neutral-950 text-right">Admin</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex h-[19.996px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-neutral-950 text-nowrap text-right whitespace-pre">System Admin</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[39.993px] relative shrink-0 w-[88.33px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[39.993px] items-start relative w-[88.33px]">
        <Container3 />
        <Container4 />
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="relative rounded-[4.27707e+07px] shrink-0 size-[39.993px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.275px] border-black border-solid inset-0 pointer-events-none rounded-[4.27707e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[39.993px]" />
    </div>
  );
}

function Button1() {
  return (
    <div className="h-[34.496px] relative shrink-0 w-[79.985px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.275px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[34.496px] relative w-[79.985px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[9.26px] text-[16px] text-neutral-950 text-nowrap top-[2.26px] whitespace-pre">LOGOUT</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[39.993px] relative shrink-0 w-[232.288px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[11.99px] h-[39.993px] items-center relative w-[232.288px]">
        <Container5 />
        <Button />
        <Button1 />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[39.993px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex h-[39.993px] items-center justify-between relative w-full">
          <Container2 />
          <Container6 />
        </div>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[76px] items-start left-0 pb-[3.824px] pl-[305.263px] pr-[305.283px] pt-[15.993px] top-0 w-[2172px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_3.824px] border-black border-solid inset-0 pointer-events-none" />
      <Container7 />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex h-[31.986px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[32px] min-h-px min-w-px relative shrink-0 text-[24px] text-white">ADMIN DASHBOARD</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex h-[23.98px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[16px] text-white">{`System overview & management`}</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="bg-[#101828] h-[119.6px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[3.824px] border-black border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[7.987px] h-[119.6px] items-start pb-[3.824px] pt-[27.824px] px-[27.824px] relative w-full">
          <Container9 />
          <Container10 />
        </div>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex h-[35.989px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Cousine:Regular',sans-serif] grow leading-[36px] min-h-px min-w-px not-italic relative shrink-0 text-[30px] text-neutral-950">156</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex h-[19.996px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[14px] text-neutral-950">Students</p>
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[21.271px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.275px_0px_0px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[16px] left-0 text-[12px] text-neutral-950 text-nowrap top-[4.26px] whitespace-pre">+12 month</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[7.987px] h-[128.861px] items-start left-0 pb-[3.824px] pt-[19.817px] px-[19.817px] top-0 w-[359.994px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[3.824px] border-black border-solid inset-0 pointer-events-none" />
      <Container12 />
      <Container13 />
      <Container14 />
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex h-[35.989px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Cousine:Regular',sans-serif] grow leading-[36px] min-h-px min-w-px not-italic relative shrink-0 text-[30px] text-neutral-950">42</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex h-[19.996px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[14px] text-neutral-950">Teachers</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[21.271px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.275px_0px_0px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[16px] left-0 text-[12px] text-neutral-950 text-nowrap top-[4.26px] whitespace-pre">+3 month</p>
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[7.987px] h-[128.861px] items-start left-[375.99px] pb-[3.824px] pt-[19.817px] px-[19.817px] top-0 w-[360.014px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[3.824px] border-black border-solid inset-0 pointer-events-none" />
      <Container16 />
      <Container17 />
      <Container18 />
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex h-[35.989px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Cousine:Regular',sans-serif] grow leading-[36px] min-h-px min-w-px not-italic relative shrink-0 text-[30px] text-neutral-950">284</p>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex h-[19.996px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[14px] text-neutral-950">Lessons/Week</p>
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[7.987px] h-[128.861px] items-start left-[751.99px] pb-[3.824px] pt-[19.817px] px-[19.817px] top-0 w-[359.994px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[3.824px] border-black border-solid inset-0 pointer-events-none" />
      <Container20 />
      <Container21 />
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex h-[35.989px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Cousine:Regular',sans-serif] grow leading-[36px] min-h-px min-w-px not-italic relative shrink-0 text-[30px] text-neutral-950">8</p>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex h-[19.996px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[14px] text-neutral-950">Pending</p>
    </div>
  );
}

function Container25() {
  return (
    <div className="h-[21.271px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.275px_0px_0px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[16px] left-0 text-[12px] text-neutral-950 text-nowrap top-[4.26px] whitespace-pre">Action needed</p>
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[7.987px] h-[128.861px] items-start left-[1127.98px] pb-[3.824px] pt-[19.817px] px-[19.817px] top-0 w-[360.014px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[3.824px] border-black border-solid inset-0 pointer-events-none" />
      <Container23 />
      <Container24 />
      <Container25 />
    </div>
  );
}

function Container27() {
  return (
    <div className="h-[128.861px] relative shrink-0 w-full" data-name="Container">
      <Container15 />
      <Container19 />
      <Container22 />
      <Container26 />
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute h-[43.976px] left-0 top-0 w-[127.248px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0px_3.824px_0px_0px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal h-[22px] leading-[20px] left-[24.18px] text-[14px] text-neutral-950 top-[9.73px] w-[91px]">[OVERVIEW]</p>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute h-[43.976px] left-[127.25px] top-0 w-[126.551px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0px_3.824px_0px_0px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal h-[25px] leading-[20px] left-[23.93px] text-[14px] text-neutral-950 top-[9.73px] w-[91px]">[STUDENTS]</p>
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute h-[43.976px] left-[253.8px] top-0 w-[124.977px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0px_3.824px_0px_0px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal h-[26px] leading-[20px] left-[24.38px] text-[14px] text-neutral-950 top-[9.73px] w-[85px]">[TEACHERS]</p>
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute h-[43.976px] left-[378.78px] top-0 w-[108.008px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0px_3.824px_0px_0px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal h-[21px] leading-[20px] left-[24.4px] text-[14px] text-neutral-950 top-[9.73px] w-[63px]">[ASSIGN]</p>
    </div>
  );
}

function Button6() {
  return (
    <div className="absolute h-[43.976px] left-[486.78px] top-0 w-[131.251px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0px_3.824px_0px_0px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal h-[23px] leading-[20px] left-[24.39px] text-[14px] text-neutral-950 top-[9.73px] w-[93px]">[LOGBOOKS]</p>
    </div>
  );
}

function Button7() {
  return (
    <div className="absolute bg-black h-[43.976px] left-[618.03px] top-0 w-[133.96px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0px_3.824px_0px_0px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal h-[26px] leading-[20px] left-[24.14px] text-[14px] text-white top-[9.73px] w-[97px]">[SCHEDULES]</p>
    </div>
  );
}

function Button8() {
  return (
    <div className="absolute h-[43.976px] left-[751.99px] top-0 w-[94.266px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0px_3.824px_0px_0px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal h-[21px] leading-[20px] left-[24.18px] text-[14px] text-neutral-950 top-[9.73px] w-[57px]">[CHAT]</p>
    </div>
  );
}

function Button9() {
  return (
    <div className="absolute h-[43.976px] left-[846.26px] top-0 w-[92.832px]" data-name="Button">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal h-[25px] leading-[20px] left-[23.92px] text-[14px] text-neutral-950 top-[9.73px] w-[58px]">[TESTS]</p>
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute h-[47.8px] left-[3.82px] top-[3.82px] w-[1480.35px]" data-name="Container">
      <div className="h-[47.8px] overflow-clip relative rounded-[inherit] w-[1480.35px]">
        <Button2 />
        <Button3 />
        <Button4 />
        <Button5 />
        <Button6 />
        <Button7 />
        <Button8 />
        <Button9 />
      </div>
      <div aria-hidden="true" className="absolute border-[0px_0px_3.824px] border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute h-[42.502px] left-0 top-0 w-[1416.37px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.275px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[9.26px] text-[16px] text-neutral-950 text-nowrap top-[6.26px] whitespace-pre">SCHEDULE MANAGEMENT</p>
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute bg-yellow-50 h-[55.607px] left-0 top-[66.5px] w-[1416.37px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#d08700] border-[3.824px] border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[15.81px] text-[16px] text-neutral-950 text-nowrap top-[12.81px] whitespace-pre">⚠ PENDING CHANGE REQUESTS (2)</p>
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute h-[23.98px] left-0 top-0 w-[1376.74px]" data-name="Container">
      <p className="absolute font-['Cousine:Regular',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-[-1.73px] whitespace-pre">Ms. Johnson - Schedule Change</p>
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute content-stretch flex h-[19.996px] items-start left-0 top-[31.97px] w-[1376.74px]" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[14px] text-neutral-950">Current: Tue 5PM-6PM</p>
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute content-stretch flex h-[19.996px] items-start left-0 top-[55.95px] w-[1376.74px]" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[14px] text-neutral-950">Requested: Wed 4PM-5PM</p>
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute content-stretch flex h-[19.996px] items-start left-0 top-[79.93px] w-[1376.74px]" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[14px] text-neutral-950">Reason: Personal appointment</p>
    </div>
  );
}

function Container35() {
  return (
    <div className="h-[99.922px] relative shrink-0 w-full" data-name="Container">
      <Container31 />
      <Container32 />
      <Container33 />
      <Container34 />
    </div>
  );
}

function Button10() {
  return (
    <div className="bg-[#00a63e] h-[42.502px] relative shrink-0 w-[101.894px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.275px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[42.502px] relative w-[101.894px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[17.27px] text-[16px] text-nowrap text-white top-[6.26px] whitespace-pre">APPROVE</p>
      </div>
    </div>
  );
}

function Button11() {
  return (
    <div className="bg-[#e7000b] h-[42.502px] relative shrink-0 w-[74.668px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.275px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[42.502px] relative w-[74.668px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[17.27px] text-[16px] text-nowrap text-white top-[6.26px] whitespace-pre">DENY</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex gap-[7.987px] h-[42.502px] items-start relative shrink-0 w-full" data-name="Container">
      <Button10 />
      <Button11 />
    </div>
  );
}

function Container37() {
  return (
    <div className="h-[198.051px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[3.824px] border-black border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[15.993px] h-[198.051px] items-start pb-[3.824px] pt-[19.817px] px-[19.817px] relative w-full">
          <Container35 />
          <Container36 />
        </div>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[15.993px] h-[412.096px] items-start left-0 top-[146.11px] w-[1416.37px]" data-name="Container">
      {[...Array(2).keys()].map((_, i) => (
        <Container37 key={i} />
      ))}
    </div>
  );
}

function Container39() {
  return (
    <div className="absolute h-[42.502px] left-0 top-[590.19px] w-[1416.37px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.275px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[9.26px] text-[16px] text-neutral-950 text-nowrap top-[6.26px] whitespace-pre">TEACHER SCHEDULES:</p>
    </div>
  );
}

function Container40() {
  return (
    <div className="relative shrink-0 size-[47.999px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.275px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[47.999px]" />
    </div>
  );
}

function Container41() {
  return (
    <div className="h-[28.003px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Cousine:Regular',sans-serif] leading-[28px] left-0 not-italic text-[18px] text-neutral-950 text-nowrap top-[-1.45px] whitespace-pre">Ms. Sarah Johnson</p>
    </div>
  );
}

function Container42() {
  return <div className="h-[19.996px] shrink-0 w-full" data-name="Container" />;
}

function Container43() {
  return (
    <div className="absolute h-[30.512px] left-0 top-0 w-[77.356px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.275px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[13.26px] text-[14px] text-neutral-950 text-nowrap top-[3.26px] whitespace-pre">Monday</p>
    </div>
  );
}

function Container44() {
  return (
    <div className="absolute h-[30.512px] left-[85.34px] top-0 w-[97.93px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.275px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[13.26px] text-[14px] text-neutral-950 text-nowrap top-[3.26px] whitespace-pre">Wednesday</p>
    </div>
  );
}

function Container45() {
  return (
    <div className="absolute h-[30.512px] left-[191.26px] top-0 w-[63.753px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.275px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[13.26px] text-[14px] text-neutral-950 text-nowrap top-[3.26px] whitespace-pre">Friday</p>
    </div>
  );
}

function Container46() {
  return (
    <div className="h-[30.512px] relative shrink-0 w-full" data-name="Container">
      <Container43 />
      <Container44 />
      <Container45 />
    </div>
  );
}

function Container47() {
  return (
    <div className="basis-0 grow h-[90.501px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[90.501px] items-start relative w-full">
        <Container41 />
        <Container42 />
        <Container46 />
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="h-[90.501px] relative shrink-0 w-[319.005px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[15.993px] h-[90.501px] items-center relative w-[319.005px]">
        <Container40 />
        <Container47 />
      </div>
    </div>
  );
}

function Button12() {
  return (
    <div className="bg-black h-[42.502px] relative shrink-0 w-[151.546px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.275px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[42.502px] relative w-[151.546px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[17.27px] text-[16px] text-nowrap text-white top-[6.26px] whitespace-pre">VIEW DETAILS →</p>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex h-[90.501px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container48 />
      <Button12 />
    </div>
  );
}

function Container50() {
  return (
    <div className="h-[146.149px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[3.824px] border-black border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[146.149px] items-start pb-[3.824px] pt-[27.824px] px-[27.824px] relative w-full">
          <Container49 />
        </div>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="relative shrink-0 size-[47.999px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.275px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[47.999px]" />
    </div>
  );
}

function Container52() {
  return (
    <div className="h-[28.003px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Cousine:Regular',sans-serif] leading-[28px] left-0 not-italic text-[18px] text-neutral-950 text-nowrap top-[-1.45px] whitespace-pre">Mr. David Chen</p>
    </div>
  );
}

function Container53() {
  return <div className="h-[19.996px] shrink-0 w-full" data-name="Container" />;
}

function Container54() {
  return (
    <div className="absolute h-[30.512px] left-0 top-0 w-[77.177px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.275px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[13.26px] text-[14px] text-neutral-950 text-nowrap top-[3.26px] whitespace-pre">Tuesday</p>
    </div>
  );
}

function Container55() {
  return (
    <div className="absolute h-[30.512px] left-[85.16px] top-0 w-[82.654px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.275px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[13.26px] text-[14px] text-neutral-950 text-nowrap top-[3.26px] whitespace-pre">Thursday</p>
    </div>
  );
}

function Container56() {
  return (
    <div className="h-[30.512px] relative shrink-0 w-full" data-name="Container">
      <Container54 />
      <Container55 />
    </div>
  );
}

function Container57() {
  return (
    <div className="basis-0 grow h-[90.501px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[90.501px] items-start relative w-full">
        <Container52 />
        <Container53 />
        <Container56 />
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="h-[90.501px] relative shrink-0 w-[231.81px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[15.993px] h-[90.501px] items-center relative w-[231.81px]">
        <Container51 />
        <Container57 />
      </div>
    </div>
  );
}

function Button13() {
  return (
    <div className="bg-black h-[42.502px] relative shrink-0 w-[151.546px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.275px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[42.502px] relative w-[151.546px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[17.27px] text-[16px] text-nowrap text-white top-[6.26px] whitespace-pre">VIEW DETAILS →</p>
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="content-stretch flex h-[90.501px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container58 />
      <Button13 />
    </div>
  );
}

function Container60() {
  return (
    <div className="h-[146.149px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[3.824px] border-black border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[146.149px] items-start pb-[3.824px] pt-[27.824px] px-[27.824px] relative w-full">
          <Container59 />
        </div>
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="relative shrink-0 size-[47.999px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.275px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[47.999px]" />
    </div>
  );
}

function Container62() {
  return (
    <div className="h-[28.003px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Cousine:Regular',sans-serif] leading-[28px] left-0 not-italic text-[18px] text-neutral-950 text-nowrap top-[-1.45px] whitespace-pre">Ms. Emily Rodriguez</p>
    </div>
  );
}

function Container63() {
  return <div className="h-[19.996px] shrink-0 w-full" data-name="Container" />;
}

function Container64() {
  return (
    <div className="absolute h-[30.512px] left-0 top-0 w-[77.356px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.275px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[13.26px] text-[14px] text-neutral-950 text-nowrap top-[3.26px] whitespace-pre">Monday</p>
    </div>
  );
}

function Container65() {
  return (
    <div className="absolute h-[30.512px] left-[85.34px] top-0 w-[77.177px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.275px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[13.26px] text-[14px] text-neutral-950 text-nowrap top-[3.26px] whitespace-pre">Tuesday</p>
    </div>
  );
}

function Container66() {
  return (
    <div className="absolute h-[30.512px] left-[170.51px] top-0 w-[82.654px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.275px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[13.26px] text-[14px] text-neutral-950 text-nowrap top-[3.26px] whitespace-pre">Thursday</p>
    </div>
  );
}

function Container67() {
  return (
    <div className="h-[30.512px] relative shrink-0 w-full" data-name="Container">
      <Container64 />
      <Container65 />
      <Container66 />
    </div>
  );
}

function Container68() {
  return (
    <div className="basis-0 grow h-[90.501px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[90.501px] items-start relative w-full">
        <Container62 />
        <Container63 />
        <Container67 />
      </div>
    </div>
  );
}

function Container69() {
  return (
    <div className="h-[90.501px] relative shrink-0 w-[317.153px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[15.993px] h-[90.501px] items-center relative w-[317.153px]">
        <Container61 />
        <Container68 />
      </div>
    </div>
  );
}

function Button14() {
  return (
    <div className="bg-black h-[42.502px] relative shrink-0 w-[151.546px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.275px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[42.502px] relative w-[151.546px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[17.27px] text-[16px] text-nowrap text-white top-[6.26px] whitespace-pre">VIEW DETAILS →</p>
      </div>
    </div>
  );
}

function Container70() {
  return (
    <div className="content-stretch flex h-[90.501px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container69 />
      <Button14 />
    </div>
  );
}

function Container71() {
  return (
    <div className="h-[146.149px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[3.824px] border-black border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[146.149px] items-start pb-[3.824px] pt-[27.824px] px-[27.824px] relative w-full">
          <Container70 />
        </div>
      </div>
    </div>
  );
}

function Container72() {
  return (
    <div className="relative shrink-0 size-[47.999px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.275px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[47.999px]" />
    </div>
  );
}

function Container73() {
  return (
    <div className="h-[28.003px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Cousine:Regular',sans-serif] leading-[28px] left-0 not-italic text-[18px] text-neutral-950 text-nowrap top-[-1.45px] whitespace-pre">Mr. James Wilson</p>
    </div>
  );
}

function Container74() {
  return <div className="h-[19.996px] shrink-0 w-full" data-name="Container" />;
}

function Container75() {
  return (
    <div className="absolute h-[30.512px] left-0 top-0 w-[97.93px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.275px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[13.26px] text-[14px] text-neutral-950 text-nowrap top-[3.26px] whitespace-pre">Wednesday</p>
    </div>
  );
}

function Container76() {
  return (
    <div className="absolute h-[30.512px] left-[105.92px] top-0 w-[63.753px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.275px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[13.26px] text-[14px] text-neutral-950 text-nowrap top-[3.26px] whitespace-pre">Friday</p>
    </div>
  );
}

function Container77() {
  return (
    <div className="h-[30.512px] relative shrink-0 w-full" data-name="Container">
      <Container75 />
      <Container76 />
    </div>
  );
}

function Container78() {
  return (
    <div className="basis-0 grow h-[90.501px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[90.501px] items-start relative w-full">
        <Container73 />
        <Container74 />
        <Container77 />
      </div>
    </div>
  );
}

function Container79() {
  return (
    <div className="h-[90.501px] relative shrink-0 w-[233.662px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[15.993px] h-[90.501px] items-center relative w-[233.662px]">
        <Container72 />
        <Container78 />
      </div>
    </div>
  );
}

function Button15() {
  return (
    <div className="bg-black h-[42.502px] relative shrink-0 w-[151.546px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.275px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[42.502px] relative w-[151.546px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[17.27px] text-[16px] text-nowrap text-white top-[6.26px] whitespace-pre">VIEW DETAILS →</p>
      </div>
    </div>
  );
}

function Container80() {
  return (
    <div className="content-stretch flex h-[90.501px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container79 />
      <Button15 />
    </div>
  );
}

function Container81() {
  return (
    <div className="h-[146.149px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[3.824px] border-black border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[146.149px] items-start pb-[3.824px] pt-[27.824px] px-[27.824px] relative w-full">
          <Container80 />
        </div>
      </div>
    </div>
  );
}

function Container82() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[15.993px] h-[632.573px] items-start left-0 top-[648.69px] w-[1416.37px]" data-name="Container">
      <Container50 />
      <Container60 />
      <Container71 />
      <Container81 />
    </div>
  );
}

function Container83() {
  return (
    <div className="absolute h-[1281.26px] left-[35.81px] top-[83.61px] w-[1416.37px]" data-name="Container">
      <Container29 />
      <Container30 />
      <Container38 />
      <Container39 />
      <Container82 />
    </div>
  );
}

function Container84() {
  return (
    <div className="h-[1400.68px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[3.824px] border-black border-solid inset-0 pointer-events-none" />
      <Container28 />
      <Container83 />
    </div>
  );
}

function Container85() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[24px] h-[1761.11px] items-start left-[318px] pb-0 pt-[31.986px] px-[24px] top-[76px] w-[1535.99px]" data-name="Container">
      <Container11 />
      <Container27 />
      <Container84 />
    </div>
  );
}

function AdminDashboard() {
  return (
    <div className="bg-white h-[1836.91px] relative shrink-0 w-[2146.54px]" data-name="AdminDashboard">
      <Container8 />
      <Container85 />
    </div>
  );
}

function App() {
  return (
    <div className="absolute bg-gray-50 box-border content-stretch flex flex-col h-[1884.91px] items-start left-0 pb-0 pt-[47.999px] px-0 top-0" data-name="App">
      <AdminDashboard />
    </div>
  );
}

export default function DashboardSchedules() {
  return (
    <div className="bg-white relative size-full" data-name="Dashboard - Schedules">
      <App />
    </div>
  );
}