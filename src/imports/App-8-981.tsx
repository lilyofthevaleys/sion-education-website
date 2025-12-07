function Container() {
  return (
    <div className="absolute h-[95.998px] left-[773.09px] top-[59.81px] w-[600.368px]" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[96px] left-[300.28px] text-[96px] text-center text-neutral-950 text-nowrap top-[-9.57px] translate-x-[-50%] whitespace-pre">⏰</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex h-[31.986px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[32px] min-h-px min-w-px relative shrink-0 text-[24px] text-center text-white">APPLICATION STATUS</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex h-[23.98px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[16px] text-center text-white">Your application is currently under review</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute bg-[#1c398e] box-border content-stretch flex flex-col gap-[7.987px] h-[103.587px] items-start left-[773.09px] pb-[3.824px] pt-[19.817px] px-[19.817px] top-[179.81px] w-[600.368px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[3.824px] border-black border-solid inset-0 pointer-events-none" />
      <Container1 />
      <Container2 />
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[23.98px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Cousine:Regular',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-[-1.73px] whitespace-pre">Dear Applicant,</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[19.996px] left-0 top-0 w-[544.721px]" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[14px] text-neutral-950 top-[-2px] w-[410px]">Thank you for your interest in joining SION Education as a teacher.</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute h-[39.993px] left-0 top-[35.99px] w-[544.721px]" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[14px] text-neutral-950 top-[-2px] w-[540px]">We have successfully received your application and it is currently being reviewed by our administration team.</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="absolute h-[39.993px] left-0 top-[91.98px] w-[544.721px]" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[14px] text-neutral-950 top-[-2px] w-[477px]">The review process typically takes 2-3 business days. You will receive an email notification once a decision has been made regarding your application.</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="absolute h-[39.993px] left-0 top-[147.96px] w-[544.721px]" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[14px] text-neutral-950 top-[-2px] w-[482px]">Please check your email regularly for updates. If you have any questions in the meantime, feel free to contact our support team.</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="absolute h-[19.996px] left-0 top-[203.95px] w-[544.721px]" data-name="Paragraph">
      <p className="absolute font-['Cousine:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-[-0.73px] whitespace-pre">Thank you for your patience!</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[223.943px] relative shrink-0 w-full" data-name="Container">
      <Paragraph />
      <Paragraph1 />
      <Paragraph2 />
      <Paragraph3 />
      <Paragraph4 />
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[19.996px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Cousine:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-[-0.73px] whitespace-pre">Sincerely,</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[19.996px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Cousine:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-[-0.73px] whitespace-pre">SION Education Team</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="box-border content-stretch flex flex-col h-[57.26px] items-start pb-0 pt-[17.268px] px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.275px_0px_0px] border-black border-solid inset-0 pointer-events-none" />
      <Container6 />
      <Container7 />
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute bg-blue-50 box-border content-stretch flex flex-col gap-[15.993px] h-[400.823px] items-start left-[773.09px] pb-[3.824px] pt-[27.824px] px-[27.824px] top-[307.39px] w-[600.368px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[3.824px] border-black border-solid inset-0 pointer-events-none" />
      <Container4 />
      <Container5 />
      <Container8 />
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[23.98px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Cousine:Regular',sans-serif] leading-[24px] left-[280.71px] not-italic text-[16px] text-center text-neutral-950 text-nowrap top-[-1.73px] translate-x-[-50%] whitespace-pre">{`📋 WHAT'S NEXT?`}</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex h-[19.996px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular','Noto_Sans_Symbols2:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[14px] text-neutral-950">✓ Application received and logged</p>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex h-[19.996px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[14px] text-neutral-950">⏳ Currently under review by admin team</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex h-[19.996px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[14px] text-neutral-950">📧 Email notification will be sent upon decision</p>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex h-[19.996px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[14px] text-neutral-950">🔔 Expected response time: 2-3 business days</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col gap-[7.987px] h-[103.945px] items-start relative shrink-0 w-full" data-name="Container">
      <Container11 />
      <Container12 />
      <Container13 />
      <Container14 />
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute bg-yellow-50 box-border content-stretch flex flex-col gap-[7.987px] h-[175.546px] items-start left-[773.09px] pb-[3.824px] pt-[19.817px] px-[19.817px] top-[732.22px] w-[600.368px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#d08700] border-[3.824px] border-solid inset-0 pointer-events-none" />
      <Container10 />
      <Container15 />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-black h-[55.607px] relative shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-[3.824px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[27.82px] text-[16px] text-nowrap text-white top-[12.81px] whitespace-pre">[RETURN TO HOME]</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute content-stretch flex h-[19.996px] items-start left-0 top-[13.26px] w-[600.368px]" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[14px] text-center text-neutral-950">Need to check something?</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute h-[38.519px] left-[209.36px] top-[41.25px] w-[181.64px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.275px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[25.27px] text-[14px] text-neutral-950 text-nowrap top-[7.26px] whitespace-pre">[CONTACT SUPPORT]</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[79.766px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.275px_0px_0px] border-black border-solid inset-0 pointer-events-none" />
      <Container17 />
      <Button1 />
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[23.98px] h-[159.353px] items-start left-[773.09px] top-[931.76px] w-[600.368px]" data-name="Container">
      <Button />
      <Container18 />
    </div>
  );
}

function WaitingApprovalPage() {
  return (
    <div className="bg-white h-[1150.92px] relative shrink-0 w-[2146.54px]" data-name="WaitingApprovalPage">
      <div aria-hidden="true" className="absolute border-[3.824px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[1150.92px] relative w-[2146.54px]">
        <Container />
        <Container3 />
        <Container9 />
        <Container16 />
        <Container19 />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="bg-gray-50 box-border content-stretch flex items-start justify-center pb-0 pt-[47.999px] px-0 relative size-full" data-name="App">
      <WaitingApprovalPage />
    </div>
  );
}