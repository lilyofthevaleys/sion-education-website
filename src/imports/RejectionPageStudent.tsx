function Container() {
  return (
    <div className="absolute h-[96px] left-[785.33px] top-[206.67px] w-[600px]" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[96px] left-[300.08px] text-[96px] text-center text-neutral-950 text-nowrap top-[-9px] translate-x-[-50%] whitespace-pre">😔</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex h-[32px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[32px] min-h-px min-w-px relative shrink-0 text-[24px] text-center text-white">APPLICATION STATUS</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[280.06px] text-[16px] text-center text-nowrap text-white top-[-1.67px] translate-x-[-50%] whitespace-pre">Unfortunately, your application was not approved</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute bg-[#101828] box-border content-stretch flex flex-col gap-[8px] h-[104px] items-start left-[785.33px] pb-[4px] pt-[20px] px-[20px] top-[326.67px] w-[600px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <Container1 />
      <Container2 />
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Cousine:Regular',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-[-0.33px] whitespace-pre">Dear Applicant,</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[14px] text-neutral-950 top-[-2px] w-[411px]">Thank you for your interest in joining SION Education as a student.</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[14px] text-neutral-950 top-[-2px] w-[529px]">After careful review of your application, we regret to inform you that we are unable to approve your student registration at this time.</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[14px] text-neutral-950 top-[-2px] w-[502px]">Additional details regarding this decision have been sent to your registered email address.</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[14px] text-neutral-950 top-[-2px] w-[531px]">We appreciate the time and effort you put into your application and wish you the best in your future endeavors.</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[188px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph />
      <Paragraph1 />
      <Paragraph2 />
      <Paragraph3 />
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Cousine:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-[-0.67px] whitespace-pre">Sincerely,</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Cousine:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-[-0.67px] whitespace-pre">SION Education Team</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="box-border content-stretch flex flex-col h-[57.333px] items-start pb-0 pt-[17.333px] px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px_0px_0px] border-black border-solid inset-0 pointer-events-none" />
      <Container6 />
      <Container7 />
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute bg-gray-50 box-border content-stretch flex flex-col gap-[16px] h-[365.333px] items-start left-[785.33px] pb-[4px] pt-[28px] px-[28px] top-[454.67px] w-[600px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <Container4 />
      <Container5 />
      <Container8 />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-black h-[56px] relative shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[28px] text-[16px] text-nowrap text-white top-[14.33px] whitespace-pre">[RETURN TO HOME]</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-0 top-[13.33px] w-[600px]" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[14px] text-center text-neutral-950">Questions about your application?</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute h-[38.667px] left-[229.75px] top-[41.33px] w-[140.479px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.333px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[25.33px] text-[14px] text-neutral-950 text-nowrap top-[7.33px] whitespace-pre">[CONTACT US]</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[80px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.333px_0px_0px] border-black border-solid inset-0 pointer-events-none" />
      <Container10 />
      <Button1 />
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[160px] items-start left-[785.33px] top-[844px] w-[600px]" data-name="Container">
      <Button />
      <Container11 />
    </div>
  );
}

function RejectionPage() {
  return (
    <div className="bg-white h-[1210.67px] relative shrink-0 w-full" data-name="RejectionPage">
      <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
      <Container />
      <Container3 />
      <Container9 />
      <Container12 />
    </div>
  );
}

function App() {
  return (
    <div className="absolute bg-gray-50 box-border content-stretch flex flex-col h-[1258.67px] items-start left-0 pb-0 pt-[48px] px-0 top-0 w-[2170.67px]" data-name="App">
      <RejectionPage />
    </div>
  );
}

export default function RejectionPageStudent() {
  return (
    <div className="bg-white relative size-full" data-name="Rejection Page - Student">
      <App />
    </div>
  );
}