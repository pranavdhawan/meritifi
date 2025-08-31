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


