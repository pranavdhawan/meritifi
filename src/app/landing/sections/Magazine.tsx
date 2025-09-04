import Image from "next/image";

export function Magazine() {
  return (
    <section id="magazine" className="w-[1440px] max-w-full mx-auto mb-12">
      {/* <h2 className="ds-heading-2 text-center pt-[52px]">Meritifi magazine</h2> */}
      <div className="flex justify-center mb-16">
        <div className="relative">
          <div className="bg-[#FFF3FA] px-8 py-4 rounded-[20px] shadow-lg">
            <h2 className="text-[#76DFFF] text-4xl md:text-5xl font-bold font-['Balsamiq_Sans'] capitalize leading-tight text-center">
              Meritifi magazine
            </h2>
          </div>
        </div>
      </div>
      <div className="flex gap-9 mt-[40px] px-[79.5px] max-sm:px-6 max-sm:flex-col">
        {/* Left section - 2/3 width */}
        <div className="w-2/3 flex flex-col gap-9 max-sm:w-full">
          {/* Top row - 2/3 + 1/3 split */}
          <div className="flex gap-9">
            {/* Feature card - 2/3 width */}
            <div className="w-2/3 rounded-[14.22px] bg-white shadow-[0px_14.22px_35.56px_rgba(18,17,39,0.08)] overflow-hidden">
              <div className="relative w-[229.44px] h-full float-left">
                <Image
                  src="/assets/mag-right.png"
                  alt="feature"
                  width={230}
                  height={302}
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute left-[7px] top-[7px] flex items-center gap-2 px-3 py-1 rounded-[14.22px] border border-white text-[14px]"
                  style={{ background: "rgba(237,232,254,0.46)" }}
                >
                  <span>Article</span>
                </div>
              </div>
              <div className="ml-[229.44px] h-full px-6 py-6">
                <h3 className="font-bold text-[20px] leading-[1.26]">
                  Viverra accumsan, sed vestibulum sit turpis neque, sit.
                </h3>
                <div className="mt-1 text-[12px] text-[#959595]">
                  Rosa Bima • March 16,2022
                </div>
                <p className="mt-4 text-[14.22px] leading-[1.26] text-[#464646]">
                  At accumsan condimentum donec dictumst eros, tempus in diam.
                  Ornare gravida quis eu blandit lectus vestibulum egestas.
                  Congue neque in mi vulputate tincidunt amet arcu varius
                  pulvinar.
                </p>
                <div className="mt-4 text-[#382E53] text-[11.38px] inline-flex items-center gap-1">
                  Read more <span className="text-[14px]">»</span>
                </div>
              </div>
            </div>

            {/* Video card - 1/3 width */}
            <div className="w-1/3 rounded-[18.4px] overflow-hidden">
              <Image
                src="/assets/mag-left.png"
                alt="video"
                width={294}
                height={299}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="w-[85px] h-[85px] rounded-full flex items-center justify-center"
                  style={{
                    background: "rgba(255,255,255,0.47)",
                    boxShadow: "0 0 0 1.8px rgba(255,255,255,0.8) inset",
                  }}
                >
                  <div className="w-[22px] h-[22px] border-l-[14px] border-l-[#ffffff] border-y-[11px] border-y-transparent ml-1" />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom row - 50/50 split */}
          <div className="flex gap-9">
            <div className="w-1/2 rounded-[18.4px] bg-[#E9F6FA] transition-shadow duration-200 hover:shadow-[0_12px_32px_rgba(0,0,0,0.1)] group cursor-pointer select-none p-6">
              <div className="flex items-center justify-between">
                <span className="text-[18.4px]">Explore our blogs</span>
                <div className="w-[35px] h-[35px] bg-white rounded-full flex items-center justify-center">
                  <span className="inline-block text-[#382E53] text-[17px] transition-transform duration-200 group-hover:translate-x-0.5">
                    →
                  </span>
                </div>
              </div>
              <h3 className="mt-[55px] text-[22px] font-bold">
                Offline or Online: What Works Best for Today&apos;s Learners?
              </h3>
              <div className="mt-[50px] flex items-center gap-2 text-[#382E53]">
                <span className="text-[11px]">Read more</span>
                <span className="inline-block text-[14px] transition-transform duration-200 group-hover:translate-x-1">
                  »
                </span>
              </div>
            </div>

            <div className="w-1/2 rounded-[18.4px] bg-[#F3E2C1] p-6">
              <div className="flex items-center gap-4">
                <div className="w-[35px] h-[35px] bg-white rounded-full" />
                <h3 className="text-[18.4px] font-semibold">
                  Smart Study Habits for Gen-Z Learners
                </h3>
              </div>
              <p className="mt-[40px] text-[18.4px] leading-[1.25]">
                Bite-sized learning, productivity apps, and AI
                reminders—here&apos;s how today&apos;s students are getting more
                done in less time.
              </p>
            </div>
          </div>
        </div>

        {/* Right section - 1/3 width */}
        <div className="w-1/3 rounded-[22.85px] shadow-[0px_22.85px_57.13px_rgba(18,17,39,0.08)] bg-white overflow-hidden max-sm:w-full">
          <Image
            src="/assets/mag-left.png"
            alt="article"
            width={411}
            height={303}
            className="rounded-t-[22.85px] object-cover w-full h-[303px]"
          />
          <div className="px-[18px] pt-[10px]">
            <div className="text-[18px] text-[#464646]">ARTICLE</div>
            <h3 className="mt-[42px] text-[23px] font-bold text-[#1A1A1A] leading-[1.4]">
              Placerat sed pharetra interdum odio et tincidunt
            </h3>
            <p className="mt-[31px] text-[18px] leading-[1.8] text-[#464646]">
              In purus at morbi magna in in maecenas. Nunc nulla magna elit,
              varius phasellus blandit convallis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
