import Image from "next/image";

export function Hero() {
  return (
    <section id="hero" className="w-[1440px] max-w-full mx-auto">
      <div className="flex gap-5 max-sm:flex-col-reverse">
        <div className="flex-1 pl-20 pt-[120px] max-sm:pt-8 max-sm:px-6">
          <h1 className="ds-heading-1 text-black max-w-[621px]">
            Ever Wondered About Wonder? The Kind That Doesn’t Stop At Classrooms
            And Time-tables.
          </h1>
          <p className="ds-body-1 text-[#868686] max-w-[641px] mt-4">
            Meritifi is for all those who want a little more than enough.
          </p>
          <div className="mt-[37px] flex items-center gap-10">
            <button
              className="h-[70px] px-[30px] rounded-[11.66px] backdrop-blur-[18.66px] border-[4px] border-transparent uppercase ds-btn-2 transition-shadow duration-200 hover:shadow-[0_0_24px_rgba(241,199,111,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F1C76F]"
              style={{
                background:
                  "linear-gradient(rgba(255,255,255,0.7),rgba(255,255,255,0.7)) padding-box, linear-gradient(90deg,#F1C76F 0%,#DDCA21 50%,#F6FFB9 100%) border-box",
              }}
            >
              Find a teacher
            </button>
            <button
              className="h-[70px] px-[30px] rounded-[11.66px] border-[4px] border-transparent uppercase ds-btn-2 transition-shadow duration-200 hover:shadow-[0_0_24px_rgba(100,75,252,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#644BFC]"
              style={{
                background:
                  "linear-gradient(white,white) padding-box, linear-gradient(90deg,#644BFC 0%,#503CCD 50%,#A69AFF 100%) border-box",
              }}
            >
              start teaching
            </button>
          </div>
          <div className="mt-[37px]">
            <button className="h-[60px] px-[26px] rounded-[10px] border-[2px] border-[#28B9CE] uppercase ds-btn-3 transition-shadow duration-200 hover:shadow-[0_0_20px_rgba(40,185,206,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#28B9CE]">
              Start a Chat
            </button>
          </div>
        </div>
        <div className="w-[478.28px] ml-[80px] rounded-b-[229.39px] overflow-hidden max-sm:ml-0 max-sm:self-center">
          <Image
            src="/assets/hero-cover.png"
            alt="Hero"
            width={478}
            height={718}
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
