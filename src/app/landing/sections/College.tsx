import Image from "next/image";

export function College() {
  return (
    <section id="college" className="w-full max-w-full relative px-24">
      {/* <h2 className="ds-heading-2 text-center pt-[35px]"> */}
      <div className="flex justify-center mb-16">
        <div className="relative">
          <div className="bg-[#503CC9] px-8 py-4 rounded-[20px] shadow-lg">
            <h2 className="text-[#CFC7F1] text-4xl md:text-5xl font-bold font-['Balsamiq_Sans'] capitalize leading-tight text-center">
              Find Your Perfect College
            </h2>
          </div>
        </div>
      </div>

      <div className="my-24 grid grid-cols-1 lg:grid-cols-[529px_1fr] gap-[44px] px-[148px] max-sm:px-6">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-6">
            {["college/university", "course type", "stream"].map((label) => (
              <div
                key={label}
                className="w-[434px] h-[80px] rounded-[26px] border border-[#C1C1C1] px-[27.4px] py-[22.86px] flex items-center justify-between max-sm:w-full"
              >
                <span className="text-[22px] text-[#868686]">{label}</span>
                <Image
                  src="/assets/arrow-down.svg"
                  alt="open"
                  width={32}
                  height={32}
                />
              </div>
            ))}
          </div>
          <button
            className="w-[220px] h-[60px] rounded-[10px] uppercase text-[28px] border-[2px] backdrop-blur-md"
            style={{ borderColor: "rgba(241,199,111,1)" }}
          >
            Go
          </button>
        </div>

        <div className="flex flex-col items-center -translate-y-20">
          <div className="w-[321px] h-[371px] rounded-[130.27px_130.27px_21.54px_21.63px] overflow-hidden translate-y-12">
            <Image
              src="/assets/college-right.png"
              alt="college"
              width={321}
              height={371}
              className="object-cover"
            />
          </div>
          <div className="w-4/5 rounded-[20.25px] bg-[#E9F6FA] px-[22.75px] text-center py-16">
            <p className="text-[19.15px] leading-[1.2] px-10 italic">
              Keep Your Learning Streak Strong! Search, compare and choose
              colleges best-suited for you.
            </p>
          </div>
        </div>
      </div>

      <div
        className="absolute top-32 right-8 pointer-events-none animate-float"
        style={{ animationDelay: "0.1s", animationDuration: "4s" }}
      >
        <Image
          src="/assets/college-ball-top-right.png"
          alt="ball"
          width={142}
          height={142}
          className="drop-shadow-md"
        />
      </div>
      <div
        className="absolute left-60 top-20 pointer-events-none animate-float"
        style={{ animationDelay: "0.4s", animationDuration: "4.5s" }}
      >
        <Image
          src="/assets/college-ball-right-mid.png"
          alt="ball"
          width={138}
          height={138}
          className="drop-shadow-md"
        />
      </div>
      <div
        className="absolute bottom-8 right-1/2 pointer-events-none animate-float"
        style={{ animationDelay: "0.2s", animationDuration: "5s" }}
      >
        <Image
          src="/assets/college-ball-left-mid.png"
          alt="ball"
          width={124}
          height={124}
          className="drop-shadow-md"
        />
      </div>
      <div
        className="absolute left-0 bottom-12 pointer-events-none animate-float"
        style={{ animationDelay: "0.6s", animationDuration: "4.2s" }}
      >
        <Image
          src="/assets/college-ball-left-bottom.png"
          alt="ball"
          width={127}
          height={127}
          className="drop-shadow-md"
        />
      </div>
    </section>
  );
}
