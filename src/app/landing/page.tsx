export default function Landing() {
  return (
    <main className="min-h-screen bg-white">
      {/* header */}
      <section className="w-[1440px] max-w-full mx-auto">
        <header className="w-full h-[100px] flex items-center">
          <div className="w-full flex items-center justify-between px-[140px]">
            <div className="flex items-center gap-4">
              <img src="/assets/logo.png" alt="Meritifi" width={72} height={75} />
              <span className="font-display text-[40px] leading-[1.2]">meritfi</span>
            </div>
            <nav className="flex items-center gap-4 p-1">
              <a className="ds-body-2">home</a>
              <a className="ds-body-2">about us</a>
              <a className="ds-body-2">teacher dashboard</a>
              <a className="ds-body-2">student dashboard</a>
              <a className="ds-body-2">magazine</a>
              <a className="ds-body-2">college hunt</a>
            </nav>
            <button className="px-6 py-2 border rounded-sm uppercase tracking-wide ds-btn-3">Log In</button>
          </div>
        </header>
      </section>

      {/* hero */}
      <section className="w-[1440px] max-w-full mx-auto">
        <div className="flex gap-5" style={{ height: 718 }}>
          <div className="flex-1 pl-20 pt-[211px]">
            <h1 className="font-display text-[48px] leading-[1.2] text-black max-w-[621px]">
              Ever Wondered About Wonder? The Kind That Doesn’t Stop At Classrooms And Time-tables.
            </h1>
            <p className="ds-body-1 text-[#868686] max-w-[641px] mt-4">
              Meritifi is for all those who want a little more than enough.
            </p>
            <div className="mt-[37px] flex items-center gap-10">
              <button className="h-[70px] px-[30px] rounded-[11.66px] backdrop-blur-[18.66px] border-[4px] border-[#F1C76F] uppercase ds-btn-2">
                Find a teacher
              </button>
              <button className="h-[70px] px-[30px] rounded-[11.66px] border-[4px] border-[#644BFC] uppercase ds-btn-2">
                start teaching
              </button>
            </div>
            <div className="mt-[37px]">
              <button className="h-[60px] px-[26px] rounded-[10px] border-[2px] border-[#28B9CE] uppercase ds-btn-3">
                Start a Chat
              </button>
            </div>
          </div>
          <div className="w-[478.28px] ml-[80px] rounded-b-[229.39px] overflow-hidden">
            <img src="/assets/hero-cover.png" alt="Hero" className="w-full h-[718px] object-cover" />
          </div>
        </div>
      </section>

      {/* how it works */}
      <section className="w-[1440px] max-w-full mx-auto" style={{ height: 768 }}>
        <h2 className="font-display text-[36px] leading-[1.2] text-center pt-[90px]">how it works</h2>
        <div className="mt-[94px] px-[60px] flex gap-[67px]">
          {/* left (students) */}
          <div className="relative w-[604.5px] h-[401.25px] rounded-[15px] backdrop-blur-[16px]" style={{ background: 'rgba(254,254,254,0.7)' }}>
            {/* purple dots and lines per figma */}
            <div className="absolute left-[21.75px] top-[54.75px] w-px h-[63px]" style={{ borderLeft: '1.5px dashed #868686' }} />
            <div className="absolute left-[21.75px] top-[178.5px] w-[0.75px] h-[65.25px]" style={{ borderLeft: '1.5px dashed #868686' }} />
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
              <img src="/assets/how-left.png" alt="Student" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* right (teachers) */}
          <div className="relative w-[604.5px] h-[401.25px] rounded-[15px] bg-white shadow-[0_0_0_1px_#C1C1C1]">
            <div className="absolute right-0 top-0 w-[289.5px] h-[401.25px] bg-[#FFDA8C] rounded-[90px_90px_11.25px_11.25px] overflow-hidden">
              <img src="/assets/how-right.png" alt="Teacher" className="w-full h-full object-cover" />
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

      {/* dashboard */}
      <section className="w-[1440px] max-w-full mx-auto" style={{ height: 595 }}>
        <h2 className="font-display text-[40px] leading-[1.2] text-center pt-[60px]">Stay Organized, Stay Wondering</h2>
        <div className="mt-[92px] flex items-center gap-[110px] px-[136px]">
          <div className="flex flex-col gap-16 w-[519px]">
            <div className="flex flex-col gap-6">
              <h3 className="font-sans font-bold text-[32px] leading-[1.2]">Explore Subjects, tutors & colleges</h3>
              <button className="h-[70px] px-[30px] rounded-[11.66px] backdrop-blur-[18.66px] border-[4px] border-[#F1C76F] uppercase ds-btn-2 w-fit">student dashboard</button>
            </div>
            <div className="flex flex-col gap-6">
              <h3 className="font-sans font-bold text-[32px] leading-[1.2]">Manage classes, students & earnings</h3>
              <button className="h-[70px] px-[30px] rounded-[11.66px] backdrop-blur-[4.66px] border-[4px] border-[#503CCD] uppercase ds-btn-2 w-fit">teacher dashboard</button>
            </div>
          </div>
          <div className="relative w-[340.77px] h-[388px]">
            <div className="absolute left-[15.18px] top-[39.64px] w-[309.56px] h-[309.56px] rounded-[156.04px_156.04px_156.04px_42px] overflow-hidden">
              <img src="/assets/dashboard-girl.png" alt="dashboard" className="w-full h-full object-cover" />
            </div>
            {/* floating bubbles */}
            <div className="absolute left-[42px] top-[416px] w-[126.79px] h-[126.79px] rounded-full shadow-[0px_7.35px_23.9px_rgba(0,0,0,0.08)]" style={{ background: '#F48383' }} />
            <div className="absolute left-[221px] top-[-4px] w-[141.37px] h-[141.97px] rounded-full shadow-[0px_8.31px_27.01px_rgba(0,0,0,0.08)]" style={{ background: '#F1C76F' }} />
            <div className="absolute left-[1312px] top-[84px] hidden" />
          </div>
        </div>
      </section>

      {/* how it works */}
      <section className="w-[1440px] max-w-full mx-auto" />

      {/* dashboard */}
      <section className="w-[1440px] max-w-full mx-auto" />

      {/* top tutors */}
      <section className="w-[1440px] max-w-full mx-auto" />

      {/* magazine */}
      <section className="w-[1440px] max-w-full mx-auto" />

      {/* success stories */}
      <section className="w-[1440px] max-w-full mx-auto" />

      {/* college search */}
      <section className="w-[1440px] max-w-full mx-auto" />

      {/* footer */}
      <section className="w-[1440px] max-w-full mx-auto" />
    </main>
  );
}


