import Image from 'next/image'

export function College() {
  return (
    <section id="college" className="w-[1440px] max-w-full mx-auto">
      <h2 className="ds-heading-2 text-center pt-[35px]">Find Your Perfect College</h2>
      <div className="mt-[92px] flex gap-[44px] px-[148px] max-sm:flex-col max-sm:px-6">
        <div className="w-[529px] flex flex-col gap-10 max-sm:w-full">
          <div className="flex flex-col gap-6">
            <div className="w-[434px] h-[80px] rounded-[26px] border border-[#C1C1C1] px-[27.4px] py-[22.86px] flex items-center justify-between max-sm:w-full">
              <span className="text-[22px]">college/university</span>
              <div className="w-8 h-8" />
            </div>
            <div className="w-[434px] h-[80px] rounded-[26px] border border-[#C1C1C1] px-[27.4px] py-[22.86px] flex items-center justify-between max-sm:w-full">
              <span className="text-[22px]">course type</span>
              <div className="w-8 h-8" />
            </div>
            <div className="w-[434px] h-[80px] rounded-[26px] border border-[#C1C1C1] px-[27.4px] py-[22.86px] flex items-center justify-between max-sm:w-full">
              <span className="text-[22px]">stream</span>
              <div className="w-8 h-8" />
            </div>
          </div>
          <button className="w-[220px] h-[60px] rounded-[10px] uppercase ds-btn-3 border-[2px]" style={{ borderColor: 'rgba(241,199,111,1)' }}>
            search now
          </button>
        </div>
        <div className="relative w-[363.93px] h-[504px] max-sm:w-full">
          <div className="absolute left-0 bottom-0 w-full h-[179.57px] rounded-[20.25px] bg-[#E9F6FA] px-[22.75px] pt-[71.83px] text-center">
            <p className="text-[19.15px] leading-[1.2]">Keep Your Learning Streak Strong! Search, compare and choose colleges best-suited for You.</p>
          </div>
          <div className="absolute left-[21.55px] top-0 w-[321.05px] h-[371.12px] rounded-[130.27px_130.27px_21.54px_21.63px] overflow-hidden bg-[#921818]">
            <Image src="/assets/college-right.png" alt="college" width={321} height={371} className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}


