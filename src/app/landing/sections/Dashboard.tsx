import Image from 'next/image'

export function Dashboard() {
  return (
    <section id="dashboard" className="w-[1440px] max-w-full mx-auto">
      <h2 className="ds-heading-2 text-center pt-[60px]">Stay Organized, Stay Wondering</h2>
      <div className="mt-[92px] flex items-center gap-[110px] px-[136px] max-sm:flex-col max-sm:px-6">
        <div className="flex flex-col gap-16 w-[519px]">
          <div className="flex flex-col gap-6">
            <h3 className="font-sans font-bold text-[32px] leading-[1.2]">Explore Subjects, tutors & colleges</h3>
            <button className="h-[70px] px-[30px] rounded-[11.66px] backdrop-blur-[18.66px] border-[4px] border-[#F1C76F] uppercase ds-btn-2 w-fit">
              student dashboard
            </button>
          </div>
          <div className="flex flex-col gap-6">
            <h3 className="font-sans font-bold text-[32px] leading-[1.2]">Manage classes, students & earnings</h3>
            <button className="h-[70px] px-[30px] rounded-[11.66px] backdrop-blur-[4.66px] border-[4px] border-[#503CCD] uppercase ds-btn-2 w-fit">
              teacher dashboard
            </button>
          </div>
        </div>
        <div className="relative w-[340.77px] h-[388px]">
          <div className="absolute left-[15.18px] top-[39.64px] w-[309.56px] h-[309.56px] rounded-[156.04px_156.04px_156.04px_42px] overflow-hidden will-change-transform">
            <Image src="/assets/dashboard-girl.png" alt="dashboard" width={310} height={310} className="object-cover" />
          </div>
          <div className="absolute left-[42px] top-[416px] w-[126.79px] h-[126.79px] rounded-full shadow-[0px_7.35px_23.9px_rgba(0,0,0,0.08)] animate-float" style={{ background: '#F48383', animationDuration: '5s' }} />
          <div className="absolute left-[221px] top-[-4px] w-[141.37px] h-[141.97px] rounded-full shadow-[0px_8.31px_27.01px_rgba(0,0,0,0.08)] animate-float" style={{ background: '#F1C76F', animationDuration: '4s' }} />
          <div className="absolute left-[1312px] top-[84px] hidden" />
        </div>
      </div>
    </section>
  )
}


