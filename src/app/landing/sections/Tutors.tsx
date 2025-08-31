import Image from 'next/image'

export function Tutors() {
  const tutors = [
    { name: 'Ashish Chanchalani', area: 'South Delhi', mode: 'Hybrid', price: '₹ 20/min' },
    { name: 'Priya Sharma', area: 'Mumbai', mode: 'Online', price: '₹ 25/min' },
    { name: 'Rahul Verma', area: 'Bangalore', mode: 'Offline', price: '₹ 30/min' },
  ]
  return (
    <section id="tutors" className="w-[1440px] max-w-full mx-auto">
      <h2 className="ds-heading-2 text-center pt-[60px]">Our Best Teachers, Your Best Mentors</h2>
      <div className="mt-[140px] flex gap-[110px] px-[136px] max-sm:flex-col max-sm:px-6">
        {tutors.map((tutor) => (
          <div key={tutor.name} className="w-[316px] h-[384px] rounded-[60px_60px_12px_12px] shadow-[2px_2px_4px_rgba(0,0,0,0.25)] bg-[#FFF3FA] relative">
            <div className="absolute left-[47px] -top-[28px] w-[221px] h-[196px] rounded-[60px] overflow-hidden bg-white transition-transform duration-200 hover:-translate-y-0.5">
              <Image src="/assets/tutor-card-bg.png" alt="tutor" width={221} height={196} className="object-cover" />
            </div>
            <div className="absolute left-[64px] top-[183px] ds-body-2 font-bold">{tutor.name}</div>
            <div className="absolute left-[36px] top-[223px] flex items-center gap-5">
              <div className="flex items-center gap-1">
                <div className="w-[10.34px] h-[9.86px] bg-[#644BFC]" />
                <span className="text-[10.87px] tracking-[-0.01em]">4.5</span>
              </div>
              <div className="w-px h-[19.53px] bg-black/70" />
              <div className="flex items-center gap-1">
                <div className="w-[13.22px] h-[8.5px] bg-[#644BFC]" />
                <span className="text-[10.87px] tracking-[-0.01em]">{tutor.mode}</span>
              </div>
              <div className="w-px h-[19.53px] bg-black/70" />
              <div className="flex items-center gap-1">
                <div className="w-[13.05px] h-[13.05px] bg-[#644BFC]" />
                <span className="text-[10.87px] tracking-[-0.01em]">{tutor.area}</span>
              </div>
            </div>
            <div className="absolute left-[36px] top-[273px] flex items-center gap-[11.3px]">
              <div className="flex flex-col gap-[5.65px]">
                <span className="text-[14.36px]">Sub: Physics & Maths</span>
                <span className="text-[14.36px]">Classes: 1st-12th</span>
              </div>
              <div className="w-px h-[29.28px] bg-black/70" />
              <div className="flex flex-col gap-[5.65px]">
                <span className="text-[14.36px]">Exp: 7 Years</span>
                <span className="text-[13.55px] text-[#51BD3B] font-semibold">{tutor.price}</span>
              </div>
            </div>
            <div className="absolute left-[36px] top-[345px] flex gap-3">
              <button className="w-[109px] h-[30px] rounded bg-white border border-[#FC4BC7] text-[#FF5CDC] text-[16px] transition-colors duration-200 hover:bg-[#FFE5F3] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FC4BC7]">Chat</button>
              <button className="w-[109px] h-[30px] rounded bg-[#FF95D3] border border-[#E049AE] text-white text-[16px] transition duration-200 hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E049AE]">View</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}


