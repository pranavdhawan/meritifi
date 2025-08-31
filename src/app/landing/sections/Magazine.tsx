import Image from "next/image";

export function Magazine() {
  return (
    <section id="magazine" className="w-[1440px] max-w-full mx-auto">
      <h2 className="ds-heading-2 text-center pt-[52px]">Meritifi magazine</h2>
      <div className="relative mt-[161px] px-[79.5px] max-sm:px-6 h-[822px] max-sm:h-auto">
        {/* Top-left: two-column feature card */}
        <div className="absolute left-[0px] top-[0px] w-[519.91px] h-[301.83px] rounded-[14.22px] bg-white shadow-[0px_14.22px_35.56px_rgba(18,17,39,0.08)] overflow-hidden max-sm:static max-sm:w-full max-sm:h-auto">
          <div className="relative w-[229.44px] h-full float-left">
            <Image src="/assets/mag-right.png" alt="feature" width={230} height={302} className="w-full h-full object-cover" />
            <div className="absolute left-[7px] top-[7px] flex items-center gap-2 px-3 py-1 rounded-[14.22px] border border-white text-[14px]" style={{ background: 'rgba(237,232,254,0.46)' }}>
              <span>Article</span>
            </div>
          </div>
          <div className="ml-[229.44px] h-full px-6 py-6">
            <h3 className="font-bold text-[20px] leading-[1.26]">Viverra accumsan, sed vestibulum sit turpis neque, sit.</h3>
            <div className="mt-1 text-[12px] text-[#959595]">Rosa Bima • March 16,2022</div>
            <p className="mt-4 text-[14.22px] leading-[1.26] text-[#464646]">
              At accumsan condimentum donec dictumst eros, tempus in diam. Ornare gravida quis eu blandit lectus vestibulum egestas. Congue neque in mi vulputate tincidunt amet arcu varius pulvinar.
            </p>
            <div className="mt-4 text-[#382E53] text-[11.38px] inline-flex items-center gap-1">Read more <span className="text-[14px]">»</span></div>
          </div>
        </div>

        {/* Top-center: video image with play overlay */}
        <div className="absolute left-[542.92px] top-[0.92px] w-[294.46px] h-[299.07px] rounded-[18.4px] overflow-hidden max-sm:static max-sm:w-full max-sm:h-[240px]">
          <Image src="/assets/mag-left.png" alt="video" width={294} height={299} className="object-cover w-full h-full" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[85px] h-[85px] rounded-full flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.47)', boxShadow: '0 0 0 1.8px rgba(255,255,255,0.8) inset' }}>
              <div className="w-[22px] h-[22px] border-l-[14px] border-l-[#ffffff] border-y-[11px] border-y-transparent ml-1" />
            </div>
          </div>
        </div>

        {/* Top-right: tall article card */}
        <div className="absolute left-[868.67px] top-[2.76px] w-[411.33px] h-[588.01px] rounded-[22.85px] shadow-[0px_22.85px_57.13px_rgba(18,17,39,0.08)] bg-white overflow-hidden max-sm:static max-sm:w-full max-sm:h-auto">
          <Image src="/assets/mag-left.png" alt="article" width={411} height={303} className="rounded-t-[22.85px] object-cover w-full h-[303px]" />
          <div className="px-[18.28px] pt-[10px]">
            <div className="text-[18.28px] text-[#464646]">ARTICLE</div>
            <h3 className="mt-[42px] text-[22.85px] font-bold text-[#1A1A1A] leading-[1.4]">Placerat sed pharetra interdum odio et tincidunt</h3>
            <p className="mt-[31px] text-[18.28px] leading-[1.8] text-[#464646]">In purus at morbi magna in in maecenas. Nunc nulla magna elit, varius phasellus blandit convallis.</p>
          </div>
        </div>

        <div className="absolute left-[79.5px] top-[161px] w-[1280px] h-[590.77px] max-sm:static max-sm:w-full max-sm:h-auto">
          <div className="absolute left-[434.33px] top-[316.55px] w-[403.05px] h-[274.22px] rounded-[18.4px] bg-[#E9F6FA] transition-shadow duration-200 hover:shadow-[0_12px_32px_rgba(0,0,0,0.1)] group cursor-pointer select-none max-sm:static max-sm:w-full max-sm:mt-6">
            <div className="flex items-center justify-between px-[17.48px] pt-[27.61px]">
              <span className="text-[18.4px]">Explore our blogs</span>
              <div className="w-[34.97px] h-[34.97px] bg-white rounded-full flex items-center justify-center">
                <span className="inline-block text-[#382E53] text-[17.07px] transition-transform duration-200 group-hover:translate-x-0.5">
                  →
                </span>
              </div>
            </div>
            <h3 className="px-[22.08px] mt-[55px] text-[22.08px] font-bold">
              Offline or Online: What Works Best for Today’s Learners?
            </h3>
            <div className="px-[22.08px] mt-[50px] flex items-center gap-2 text-[#382E53]">
              <span className="text-[11.38px]">Read more</span>
              <span className="inline-block text-[14px] transition-transform duration-200 group-hover:translate-x-1">
                »
              </span>
            </div>
          </div>
          <div className="absolute left-0 top-[316.55px] w-[412.25px] h-[274.22px] rounded-[18.4px] bg-[#F3E2C1] max-sm:static max-sm:w-full max-sm:mt-6">
            <div className="absolute left-[22.08px] top-[29.45px] w-[34.97px] h-[34.97px] bg-white rounded-full" />
            <h3 className="absolute left-[75.46px] top-[28.53px] text-[18.4px] font-semibold w-[246.61px]">
              Smart Study Habits for Gen-Z Learners
            </h3>
            <p className="absolute left-[24.85px] top-[98.46px] w-[272.38px] text-[18.4px] leading-[1.25]">
              Bite-sized learning, productivity apps, and AI reminders—here’s
              how today’s students are getting more done in less time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
