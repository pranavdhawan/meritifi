import Image from "next/image";

export function Hero() {
  return (
    <section id="hero" className="w-[1440px] max-w-full mx-auto relative">
      <div className="flex gap-5 max-sm:flex-col-reverse">
        <div className="flex-1 pl-20 pt-[120px] max-sm:pt-8 max-sm:px-6">
          <h1 className="ds-heading-2 text-black max-w-[621px]">
            Ever Wondered About Wonder? The Kind That Doesn&apos;t Stop At Classrooms
            And Time-tables.
          </h1>
          <p className="ds-body-1 text-[#503CC9] max-w-[641px] mt-4">
            At Meritifi, we support your education journey outside the schools
          </p>
          <div className="mt-[37px] flex gap-10">
            <button
              className="h-[70px] px-[30px] rounded-[11.66px] border-[4px] border-transparent uppercase ds-btn-2 w-fit transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_24px_rgba(241,199,111,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F1C76F]"
              style={{
                background: "linear-gradient(white,white) padding-box, linear-gradient(90deg,#F1C76F 0%,#DDCA21 50%,#F6FFB9 100%) border-box",
              }}
            >
              find a teacher
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
          <div className="mt-[37px] flex justify-center pr-20">
            <button
              className="h-[70px] px-[30px] rounded-[11.66px] border-[2px] border-[#28B9CE] uppercase ds-btn-2 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(40,185,206,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#28B9CE] w-fit"
              style={{
                background: "linear-gradient(white,white) padding-box, linear-gradient(90deg,#28B9CE 0%,#2FBFCF 50%,#A69AFF 100%) border-box",
              }}
            >
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

      {/* Floating decorative elements with icons - positioned according to Figma design */}
      {/* <div className="absolute left-[80px] top-[80px] w-[90px] h-[90px] rounded-full shadow-[0px_7.35px_23.9px_rgba(0,0,0,0.08)] animate-float bg-[#F1C76F] flex items-center justify-center max-sm:w-[70px] max-sm:h-[70px] max-sm:left-[60px] max-sm:top-[60px]">

        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
        </svg>
      </div>

      <div className="absolute right-[120px] top-[120px] w-[80px] h-[80px] rounded-full shadow-[0px_8.31px_27.01px_rgba(0,0,0,0.08)] animate-float bg-[#F48383] flex items-center justify-center max-sm:w-[65px] max-sm:h-[65px] max-sm:right-[80px] max-sm:top-[90px]">

        <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">  
        </svg>
      </div>

      <div className="absolute left-[100px] bottom-[100px] w-[85px] h-[85px] rounded-full shadow-[0px_6.35px_20.9px_rgba(0,0,0,0.08)] animate-float bg-[#28B9CE] flex items-center justify-center max-sm:w-[70px] max-sm:h-[70px] max-sm:left-[80px] max-sm:bottom-[80px]">

        <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
        </svg>
      </div>

      <div className="absolute right-[80px] bottom-[80px] w-[95px] h-[95px] rounded-full shadow-[0px_7.35px_23.9px_rgba(0,0,0,0.08)] animate-float bg-[#A69AFF] flex items-center justify-center max-sm:w-[75px] max-sm:h-[75px] max-sm:right-[60px] max-sm:bottom-[60px]">
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
          
        </svg>
      </div> */}
    </section>
  );
}
