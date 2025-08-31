import Image from "next/image";

export function Dashboard() {
  return (
    <section id="dashboard" className="w-[1440px] max-w-full mx-auto">
      {/* Header Section with proper background and text alignment */}
      <div className="flex justify-center pt-12">
        <div className="relative">
          <div className="bg-[#644BFC] px-8 py-3 rounded-[20px]">
            <h2 className="text-[#F6FFB9] text-5xl font-bold font-['Balsamiq_Sans'] capitalize leading-none">
              Get Started
            </h2>
          </div>
        </div>
      </div>
      
      <div className="mt-[92px] flex items-center gap-[110px] px-[136px] max-sm:flex-col max-sm:px-6 max-sm:gap-16">
        <div className="flex flex-col gap-16 w-[519px] max-sm:w-full">
          <div className="flex flex-col gap-6">
            <button 
              className="h-[70px] px-[30px] rounded-[11.66px] border-[4px] border-transparent uppercase ds-btn-2 w-fit transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_24px_rgba(241,199,111,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F1C76F]"
              style={{
                background: "linear-gradient(white,white) padding-box, linear-gradient(90deg,#F1C76F 0%,#DDCA21 50%,#F6FFB9 100%) border-box",
              }}
            >
              student dashboard
            </button>
            <h3 className="font-sans font-bold text-[32px] leading-[1.2] text-black max-sm:text-[28px]">
              Explore Subjects, tutors & colleges
            </h3>
          </div>
          <div className="flex flex-col gap-6">
            <button 
              className="h-[70px] px-[30px] rounded-[11.66px] border-[4px] border-transparent uppercase ds-btn-2 w-fit transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_24px_rgba(80,60,205,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#503CCD]"
              style={{
                background: "linear-gradient(white,white) padding-box, linear-gradient(90deg,#503CCD 0%,#644BFC 50%,#A69AFF 100%) border-box",
              }}
            >
              teacher dashboard
            </button>
            <h3 className="font-sans font-bold text-[32px] leading-[1.2] text-black max-sm:text-[28px]">
              Manage classes, students & earnings
            </h3>
          </div>
        </div>
        
        <div className="relative w-[340.77px] h-[388px] max-sm:w-[280px] max-sm:h-[320px]">
          {/* Decorative frame around the image - everything #F1C76F */}
          <div className="absolute left-[0px] top-[10px] w-[400px] h-[400px] rounded-[200px_200px_200px_60px] bg-[#F1C76F] shadow-[0px_8px_25px_rgba(241,199,111,0.25)] max-sm:w-[320px] max-sm:h-[320px] max-sm:left-[0px] max-sm:top-[8px]">
            {/* Main image container - now directly within the #F1C76F frame */}
            <div className="absolute left-[35px] top-[60px] w-[300px] h-[300px] rounded-[150px_150px_150px_40px] overflow-hidden will-change-transform max-sm:w-[240px] max-sm:h-[240px] max-sm:left-[28px] max-sm:top-[48px]">
              <Image
                src="/assets/dashboard-girl.png"
                alt="Dashboard"
                width={300}
                height={300}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating decorative elements - now positioned around the entire Dashboard section */}
      {/* <div className="relative">
        <div
          className="absolute left-[0px] top-[12px] w-[80px] h-[80px] rounded-full shadow-[0px_7.35px_23.9px_rgba(0,0,0,0.08)] animate-float max-sm:w-[60px] max-sm:h-[60px] max-sm:left-[30px] max-sm:top-[100px]"
          style={{ 
            background: "#F1C76F", 
            animationDuration: "6s",
            animationDelay: "0s"
          }}
        />
        <div
          className="absolute right-[100px] top-[80px] w-[70px] h-[70px] rounded-full shadow-[0px_8.31px_27.01px_rgba(0,0,0,0.08)] animate-float max-sm:w-[55px] max-sm:h-[55px] max-sm:right-[60px] max-sm:top-[70px]"
          style={{ 
            background: "#F48383", 
            animationDuration: "5s",
            animationDelay: "1.5s"
          }}
        />
        <div
          className="absolute left-[200px] bottom-[50px] w-[90px] h-[90px] rounded-full shadow-[0px_6.35px_20.9px_rgba(0,0,0,0.08)] animate-float max-sm:w-[70px] max-sm:h-[70px] max-sm:left-[150px] max-sm:bottom-[40px]"
          style={{ 
            background: "#A69AFF", 
            animationDuration: "7s",
            animationDelay: "2s"
          }}
        />
      </div> */}
    </section>
  );
}

