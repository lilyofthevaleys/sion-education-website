function Button() {
  return (
    <div className="h-[34.496px] relative shrink-0 w-[204.484px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.275px] border-solid border-white inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[34.496px] relative w-[204.484px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[13.26px] text-[16px] text-nowrap text-white top-[2.26px] whitespace-pre">← BACK TO DASHBOARD</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[34.496px] relative shrink-0 w-[239.279px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.275px] border-solid border-white inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[34.496px] relative w-[239.279px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[13.26px] text-[16px] text-nowrap text-white top-[2.26px] whitespace-pre">SCHEDULE CHANGE REQUEST</p>
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
    <div className="absolute bg-[#101828] box-border content-stretch flex flex-col h-[70px] items-start left-0 pb-[3.824px] pl-[329.262px] pr-[1357.52px] pt-[15.993px] top-0 w-[2172px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_3.824px] border-black border-solid inset-0 pointer-events-none" />
      <Container1 />
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[31.986px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Cousine:Regular',sans-serif] leading-[32px] left-0 not-italic text-[24px] text-neutral-950 text-nowrap top-[-0.73px] whitespace-pre">REQUEST SCHEDULE CHANGE</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex h-[19.996px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[14px] text-neutral-950">Fill out the form below to request a change to your teaching schedule</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="bg-blue-50 h-[99.603px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[3.824px] border-black border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[7.987px] h-[99.603px] items-start pb-[3.824px] pt-[19.817px] px-[19.817px] relative w-full">
          <Container3 />
          <Container4 />
        </div>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-black h-[42.502px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.275px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[9.26px] text-[16px] text-nowrap text-white top-[6.26px] whitespace-pre">CURRENT SCHEDULE TO CHANGE</p>
    </div>
  );
}

function Label() {
  return (
    <div className="h-[19.996px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Cousine:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-[-0.73px] whitespace-pre">SELECT DAY:</p>
    </div>
  );
}

function Option() {
  return <div className="absolute left-[-717.08px] size-0 top-[-388.2px]" data-name="Option" />;
}

function Dropdown() {
  return (
    <div className="h-[45.649px] relative shrink-0 w-full" data-name="Dropdown">
      <div aria-hidden="true" className="absolute border-[1.275px] border-black border-solid inset-0 pointer-events-none" />
      {[...Array(7).keys()].map((_, i) => (
        <Option key={i} />
      ))}
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[7.987px] h-[78.492px] items-start left-0 top-0 w-[348.163px]" data-name="Container">
      <Label />
      <Dropdown />
    </div>
  );
}

function Label1() {
  return (
    <div className="h-[19.996px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Cousine:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-[-0.73px] whitespace-pre">SELECT DATE:</p>
    </div>
  );
}

function DatePicker() {
  return (
    <div className="h-[50.509px] relative shrink-0 w-full" data-name="Date Picker">
      <div aria-hidden="true" className="absolute border-[1.275px] border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[7.987px] h-[78.492px] items-start left-[364.16px] top-0 w-[348.183px]" data-name="Container">
      <Label1 />
      <DatePicker />
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[78.492px] relative shrink-0 w-full" data-name="Container">
      <Container7 />
      <Container8 />
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[15.993px] h-[136.987px] items-start left-[27.82px] top-[27.82px] w-[712.34px]" data-name="Container">
      <Container6 />
      <Container9 />
    </div>
  );
}

function Checkbox() {
  return (
    <div className="absolute h-[19.996px] left-0 top-[3.98px] w-[17.646px]" data-name="Checkbox">
      <div aria-hidden="true" className="absolute border border-[#101828] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[23.98px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Cousine:Regular',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-[-1.73px] whitespace-pre">REQUEST TRANSFER TO OWNER</p>
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[39.993px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[14px] text-neutral-950 top-[-2px] w-[638px]">Check this box if you want to transfer this teaching session to the owner instead of rescheduling to a different time</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3.983px] h-[67.956px] items-start left-[29.64px] top-0 w-[643.069px]" data-name="Container">
      <Container11 />
      <Container12 />
    </div>
  );
}

function Label2() {
  return (
    <div className="h-[67.956px] relative shrink-0 w-full" data-name="Label">
      <Checkbox />
      <Container13 />
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute bg-yellow-50 box-border content-stretch flex flex-col h-[107.59px] items-start left-[27.82px] pb-[3.824px] pt-[19.817px] px-[19.817px] top-[196.8px] w-[712.34px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#d08700] border-[3.824px] border-solid inset-0 pointer-events-none" />
      <Label2 />
    </div>
  );
}

function Container15() {
  return (
    <div className="bg-black h-[42.502px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.275px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[9.26px] text-[16px] text-nowrap text-white top-[6.26px] whitespace-pre">NEW REQUESTED SCHEDULE</p>
    </div>
  );
}

function Label3() {
  return (
    <div className="h-[19.996px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Cousine:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-[-0.73px] whitespace-pre">NEW DAY:</p>
    </div>
  );
}

function Option1() {
  return <div className="absolute left-[-717.08px] size-0 top-[-696.74px]" data-name="Option" />;
}

function Dropdown1() {
  return (
    <div className="h-[45.649px] relative shrink-0 w-full" data-name="Dropdown">
      <div aria-hidden="true" className="absolute border-[1.275px] border-black border-solid inset-0 pointer-events-none" />
      {[...Array(7).keys()].map((_, i) => (
        <Option1 key={i} />
      ))}
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[7.987px] h-[78.492px] items-start left-0 top-0 w-[348.163px]" data-name="Container">
      <Label3 />
      <Dropdown1 />
    </div>
  );
}

function Label4() {
  return (
    <div className="h-[19.996px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Cousine:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-[-0.73px] whitespace-pre">NEW DATE:</p>
    </div>
  );
}

function DatePicker1() {
  return (
    <div className="h-[50.509px] relative shrink-0 w-full" data-name="Date Picker">
      <div aria-hidden="true" className="absolute border-[1.275px] border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[7.987px] h-[78.492px] items-start left-[364.16px] top-0 w-[348.183px]" data-name="Container">
      <Label4 />
      <DatePicker1 />
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[78.492px] relative shrink-0 w-full" data-name="Container">
      <Container16 />
      <Container17 />
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[15.993px] h-[136.987px] items-start left-[27.82px] top-[336.37px] w-[712.34px]" data-name="Container">
      <Container15 />
      <Container18 />
    </div>
  );
}

function Container20() {
  return (
    <div className="bg-black h-[42.502px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.275px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[9.26px] text-[16px] text-nowrap text-white top-[6.26px] whitespace-pre">REASON FOR CHANGE</p>
    </div>
  );
}

function TextArea() {
  return (
    <div className="h-[146.268px] relative shrink-0 w-full" data-name="Text Area">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[146.268px] items-start p-[12px] relative w-full">
          <p className="font-['Cousine:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(10,10,10,0.5)] text-nowrap whitespace-pre">Please provide a detailed reason for this schedule change request...</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[1.275px] border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex h-[19.996px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#4a5565] text-[14px]">Minimum 10 characters required</p>
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[15.993px] h-[238.881px] items-start left-[27.82px] top-[505.35px] w-[712.34px]" data-name="Container">
      <Container20 />
      <TextArea />
      <Container21 />
    </div>
  );
}

function Button1() {
  return (
    <div className="h-[59.631px] relative shrink-0 w-[113.366px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[3.824px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[59.631px] relative w-[113.366px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[27.82px] text-[16px] text-neutral-950 text-nowrap top-[14.83px] whitespace-pre">CANCEL</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="basis-0 bg-[#d1d5dc] grow h-[59.631px] min-h-px min-w-px relative shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[3.824px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[59.631px] relative w-full">
        <p className="absolute font-['Cousine:Regular','Noto_Sans_Symbols2:Regular',sans-serif] leading-[28px] left-[3.82px] not-italic text-[#6a7282] text-[18px] text-nowrap top-[14.36px] whitespace-pre">✓ SUBMIT CHANGE REQUEST</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute content-stretch flex gap-[15.993px] h-[59.631px] items-start left-[27.82px] top-[776.21px] w-[712.34px]" data-name="Container">
      <Button1 />
      <Button2 />
    </div>
  );
}

function Container24() {
  return (
    <div className="bg-white h-[863.666px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[3.824px] border-black border-solid inset-0 pointer-events-none" />
      <Container10 />
      <Container14 />
      <Container19 />
      <Container22 />
      <Container23 />
    </div>
  );
}

function Container25() {
  return (
    <div className="h-[23.98px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Cousine:Regular',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-[-1.73px] whitespace-pre">📋 REQUEST PROCESS:</p>
    </div>
  );
}

function ListItem() {
  return (
    <div className="content-stretch flex h-[19.996px] items-start relative shrink-0 w-full" data-name="List Item">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[14px] text-neutral-950">Your request will be reviewed by the admin/owner</p>
    </div>
  );
}

function ListItem1() {
  return (
    <div className="content-stretch flex h-[19.996px] items-start relative shrink-0 w-full" data-name="List Item">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[14px] text-neutral-950">You will receive a notification once approved or denied</p>
    </div>
  );
}

function ListItem2() {
  return (
    <div className="content-stretch flex h-[19.996px] items-start relative shrink-0 w-full" data-name="List Item">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[14px] text-neutral-950">Schedule changes typically take 24-48 hours to process</p>
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[3.983px] h-[67.956px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem />
      <ListItem1 />
      <ListItem2 />
    </div>
  );
}

function Container26() {
  return (
    <div className="bg-blue-50 h-[139.556px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#155dfc] border-[3.824px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[7.987px] h-[139.556px] items-start pb-[3.824px] pt-[19.817px] px-[19.817px] relative w-full">
          <Container25 />
          <List />
        </div>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[1150.83px] items-start left-[689.26px] top-[102.29px] w-[767.987px]" data-name="Container">
      <Container5 />
      <Container24 />
      <Container26 />
    </div>
  );
}

function ScheduleChangeRequest() {
  return (
    <div className="bg-white h-[1285.1px] relative shrink-0 w-[2146.54px]" data-name="ScheduleChangeRequest">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[1285.1px] relative w-[2146.54px]">
        <Container2 />
        <Container27 />
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="absolute bg-gray-50 box-border content-stretch flex h-[1333.1px] items-start justify-center left-0 pb-0 pt-[47.999px] px-0 top-0" data-name="App">
      <ScheduleChangeRequest />
    </div>
  );
}

export default function RequestScheduleChange() {
  return (
    <div className="bg-white relative size-full" data-name="Request Schedule Change">
      <App />
    </div>
  );
}