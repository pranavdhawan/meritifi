import Image from 'next/image'

export function HowItWorks() {
  return (
    <section id="how-it-works" className="w-[1440px] max-w-full mx-auto">
      <h2 className="ds-heading-2 text-center pt-[90px]">how it works</h2>
      <div className="mt-[94px] px-[60px] flex gap-[67px] max-sm:flex-col">
        {/* left (students) */}
        <div className="relative w-[604.5px] h-[401.25px] rounded-[15px] backdrop-blur-[16px]" style={{ background: 'rgba(254,254,254,0.7)' }}>
          <div className="absolute left-[21.75px] top-[54.75px]">
            <svg width="2" height="63" viewBox="0 0 2 63" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="1" y1="0" x2="1" y2="63" stroke="#868686" strokeWidth="1.5" strokeDasharray="6 6" />
            </svg>
          </div>
          <div className="absolute left-[21.75px] top-[178.5px]">
            <svg width="2" height="65.25" viewBox="0 0 2 65.25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="1" y1="0" x2="1" y2="65.25" stroke="#868686" strokeWidth="1.5" strokeDasharray="6 6" />
            </svg>
          </div>
          <div className="absolute left-[42px] top-[45px] w-[240px] h-[297.5px]">
            <div className="absolute left-0 top-0 flex items-center gap-[23px]">
              <div className="w-[45px] h-[45px] rounded-[25.5px] border border-[#CFC7F1] flex items-center justify-center">
                <div className="w-[30px] h-[30px] rounded-full bg-white" />
              </div>
              <span className="ds-body-1 text-[#957CFF]">Search for your subjects</span>
            </div>
            <div className="absolute left-0 top-[122.25px] flex items-center gap-[23px]">
              <div className="w-[45px] h-[45px] rounded-[25.5px] border border-[#CFC7F1] flex items-center justify-center">
                <div className="w-[27px] h-[27px] rounded-full bg-white" />
              </div>
              <span className="ds-body-1 text-[#957CFF]">Connect with expert tutors</span>
            </div>
            <div className="absolute left-0 top-[244.5px] flex items-center gap-[23px]">
              <div className="w-[45px] h-[45px] rounded-[25.5px] border border-[#CFC7F1] flex items-center justify-center">
                <div className="w-[20.25px] h-[20.25px] rounded-full bg-white" />
              </div>
              <span className="ds-body-1 text-[#957CFF]">Learn anytime anywhere</span>
            </div>
          </div>
          <div className="absolute right-0 top-0 w-[289.5px] h-[401.25px] rounded-[90px_90px_11.46px_11.46px] overflow-hidden">
            <Image src="/assets/how-left.png" alt="Student" width={290} height={401} className="object-cover" />
          </div>
        </div>

        {/* right (teachers) */}
        <div className="relative w-[604.5px] h-[401.25px] rounded-[15px] bg-white shadow-[0_0_0_1px_#C1C1C1]">
          <div className="absolute right-0 top-0 w-[289.5px] h-[401.25px] bg-[#FFDA8C] rounded-[90px_90px_11.25px_11.25px] overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
            <Image src="/assets/how-right.png" alt="Teacher" width={290} height={401} className="object-cover" />
          </div>
          <div className="absolute left-[324px] top-[42px] w-[240px] h-[311.75px]">
            <div className="absolute left-0 top-0 flex items-center gap-[23px]">
              <div className="w-[45px] h-[45px] rounded-[25.5px] border border-[#CFC7F1] flex items-center justify-center">
                <div className="w-[33.75px] h-[33.75px] rounded-full bg-white" />
              </div>
              <span className="ds-body-1 text-[#957CFF]">register yourself to teach.</span>
            </div>
            <div className="absolute left-0 top-[123.75px] flex items-center gap-[23px]">
              <div className="w-[45px] h-[45px] rounded-[25.5px] border border-[#CFC7F1] flex items-center justify-center">
                <div className="w-[27px] h-[27px] rounded-full bg-white" />
              </div>
              <span className="ds-body-1 text-[#957CFF]">Connect with interested students.</span>
            </div>
            <div className="absolute left-0 top-[258.75px] flex items-center gap-[23px]">
              <div className="w-[45px] h-[45px] rounded-[25.5px] border border-[#CFC7F1] flex items-center justify-center">
                <div className="w-[23.28px] h-[23.28px] rounded-full bg-white" />
              </div>
              <span className="ds-body-1 text-[#957CFF]">earn through classes.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


