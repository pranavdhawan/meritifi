import Image from "next/image";
import { LandingNav } from "./Nav";

export default function Landing() {
  return (
    <main className="min-h-screen bg-white">
      {/* header */}
      <section className="w-[1440px] max-w-full mx-auto">
        <header className="w-full h-[100px] flex items-center">
          <div className="w-full flex items-center justify-between px-[140px]">
            <div className="flex items-center gap-4">
              <Image
                src="/assets/logo.png"
                alt="Meritifi"
                width={72}
                height={75}
                priority
              />
              <span className="font-display text-[40px] leading-[1.2]">
                meritfi
              </span>
            </div>
            <LandingNav />
            <button className="px-6 py-2 border rounded-sm uppercase tracking-wide ds-btn-3">
              Log In
            </button>
          </div>
        </header>
      </section>

      {/* hero */}
      <section id="hero" className="w-[1440px] max-w-full mx-auto">
        <div className="flex gap-5" style={{ height: 718 }}>
          <div className="flex-1 pl-20 pt-[211px]">
            <h1 className="font-display text-[48px] leading-[1.2] text-black max-w-[621px]">
              Ever Wondered About Wonder? The Kind That Doesn’t Stop At
              Classrooms And Time-tables.
            </h1>
            <p className="ds-body-1 text-[#868686] max-w-[641px] mt-4">
              Meritifi is for all those who want a little more than enough.
            </p>
            <div className="mt-[37px] flex items-center gap-10">
              <button className="h-[70px] px-[30px] rounded-[11.66px] backdrop-blur-[18.66px] border-[4px] border-[#F1C76F] uppercase ds-btn-2 transition-shadow duration-200 hover:shadow-[0_0_24px_rgba(241,199,111,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F1C76F]">
                Find a teacher
              </button>
              <button className="h-[70px] px-[30px] rounded-[11.66px] border-[4px] border-[#644BFC] uppercase ds-btn-2 transition-shadow duration-200 hover:shadow-[0_0_24px_rgba(100,75,252,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#644BFC]">
                start teaching
              </button>
            </div>
            <div className="mt-[37px]">
              <button className="h-[60px] px-[26px] rounded-[10px] border-[2px] border-[#28B9CE] uppercase ds-btn-3 transition-shadow duration-200 hover:shadow-[0_0_20px_rgba(40,185,206,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#28B9CE]">
                Start a Chat
              </button>
            </div>
          </div>
          <div className="w-[478.28px] ml-[80px] rounded-b-[229.39px] overflow-hidden">
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

      {/* how it works */}
      <section
        id="how-it-works"
        className="w-[1440px] max-w-full mx-auto"
        style={{ height: 768 }}
      >
        <h2 className="font-display text-[36px] leading-[1.2] text-center pt-[90px]">
          how it works
        </h2>
        <div className="mt-[94px] px-[60px] flex gap-[67px]">
          {/* left (students) */}
          <div
            className="relative w-[604.5px] h-[401.25px] rounded-[15px] backdrop-blur-[16px]"
            style={{ background: "rgba(254,254,254,0.7)" }}
          >
            {/* purple dots and lines per figma */}
            <div
              className="absolute left-[21.75px] top-[54.75px] w-px h-[63px]"
              style={{ borderLeft: "1.5px dashed #868686" }}
            />
            <div
              className="absolute left-[21.75px] top-[178.5px] w-[0.75px] h-[65.25px]"
              style={{ borderLeft: "1.5px dashed #868686" }}
            />
            <div className="absolute left-[42px] top-[45px] w-[240px] h-[297.5px]">
              <div className="absolute left-0 top-0 flex items-center gap-[23px]">
                <div className="w-[45px] h-[45px] rounded-[25.5px] border border-[#CFC7F1] flex items-center justify-center">
                  <div className="w-[30px] h-[30px] rounded-full bg-white" />
                </div>
                <span className="ds-body-1 text-[#957CFF]">
                  Search for your subjects
                </span>
              </div>
              <div className="absolute left-0 top-[122.25px] flex items-center gap-[23px]">
                <div className="w-[45px] h-[45px] rounded-[25.5px] border border-[#CFC7F1] flex items-center justify-center">
                  <div className="w-[27px] h-[27px] rounded-full bg-white" />
                </div>
                <span className="ds-body-1 text-[#957CFF]">
                  Connect with expert tutors
                </span>
              </div>
              <div className="absolute left-0 top-[244.5px] flex items-center gap-[23px]">
                <div className="w-[45px] h-[45px] rounded-[25.5px] border border-[#CFC7F1] flex items-center justify-center">
                  <div className="w-[20.25px] h-[20.25px] rounded-full bg-white" />
                </div>
                <span className="ds-body-1 text-[#957CFF]">
                  Learn anytime anywhere
                </span>
              </div>
            </div>
            <div className="absolute right-0 top-0 w-[289.5px] h-[401.25px] rounded-[90px_90px_11.46px_11.46px] overflow-hidden">
              <Image
                src="/assets/how-left.png"
                alt="Student"
                width={290}
                height={401}
                className="object-cover"
              />
            </div>
          </div>

          {/* right (teachers) */}
          <div className="relative w-[604.5px] h-[401.25px] rounded-[15px] bg-white shadow-[0_0_0_1px_#C1C1C1]">
            <div className="absolute right-0 top-0 w-[289.5px] h-[401.25px] bg-[#FFDA8C] rounded-[90px_90px_11.25px_11.25px] overflow-hidden">
              <Image
                src="/assets/how-right.png"
                alt="Teacher"
                width={290}
                height={401}
                className="object-cover"
              />
            </div>
            <div className="absolute left-[324px] top-[42px] w-[240px] h-[311.75px]">
              <div className="absolute left-0 top-0 flex items-center gap-[23px]">
                <div className="w-[45px] h-[45px] rounded-[25.5px] border border-[#CFC7F1] flex items-center justify-center">
                  <div className="w-[33.75px] h-[33.75px] rounded-full bg-white" />
                </div>
                <span className="ds-body-1 text-[#957CFF]">
                  register yourself to teach.
                </span>
              </div>
              <div className="absolute left-0 top-[123.75px] flex items-center gap-[23px]">
                <div className="w-[45px] h-[45px] rounded-[25.5px] border border-[#CFC7F1] flex items-center justify-center">
                  <div className="w-[27px] h-[27px] rounded-full bg-white" />
                </div>
                <span className="ds-body-1 text-[#957CFF]">
                  Connect with interested students.
                </span>
              </div>
              <div className="absolute left-0 top-[258.75px] flex items-center gap-[23px]">
                <div className="w-[45px] h-[45px] rounded-[25.5px] border border-[#CFC7F1] flex items-center justify-center">
                  <div className="w-[23.28px] h-[23.28px] rounded-full bg-white" />
                </div>
                <span className="ds-body-1 text-[#957CFF]">
                  earn through classes.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* dashboard */}
      <section
        id="dashboard"
        className="w-[1440px] max-w-full mx-auto"
        style={{ height: 595 }}
      >
        <h2 className="font-display text-[40px] leading-[1.2] text-center pt-[60px]">
          Stay Organized, Stay Wondering
        </h2>
        <div className="mt-[92px] flex items-center gap-[110px] px-[136px]">
          <div className="flex flex-col gap-16 w-[519px]">
            <div className="flex flex-col gap-6">
              <h3 className="font-sans font-bold text-[32px] leading-[1.2]">
                Explore Subjects, tutors & colleges
              </h3>
              <button className="h-[70px] px-[30px] rounded-[11.66px] backdrop-blur-[18.66px] border-[4px] border-[#F1C76F] uppercase ds-btn-2 w-fit">
                student dashboard
              </button>
            </div>
            <div className="flex flex-col gap-6">
              <h3 className="font-sans font-bold text-[32px] leading-[1.2]">
                Manage classes, students & earnings
              </h3>
              <button className="h-[70px] px-[30px] rounded-[11.66px] backdrop-blur-[4.66px] border-[4px] border-[#503CCD] uppercase ds-btn-2 w-fit">
                teacher dashboard
              </button>
            </div>
          </div>
          <div className="relative w-[340.77px] h-[388px]">
            <div className="absolute left-[15.18px] top-[39.64px] w-[309.56px] h-[309.56px] rounded-[156.04px_156.04px_156.04px_42px] overflow-hidden will-change-transform">
              <Image
                src="/assets/dashboard-girl.png"
                alt="dashboard"
                width={310}
                height={310}
                className="object-cover"
              />
            </div>
            {/* floating bubbles */}
            <div
              className="absolute left-[42px] top-[416px] w-[126.79px] h-[126.79px] rounded-full shadow-[0px_7.35px_23.9px_rgba(0,0,0,0.08)]"
              style={{ background: "#F48383" }}
            />
            <div
              className="absolute left-[221px] top-[-4px] w-[141.37px] h-[141.97px] rounded-full shadow-[0px_8.31px_27.01px_rgba(0,0,0,0.08)]"
              style={{ background: "#F1C76F" }}
            />
            <div className="absolute left-[1312px] top-[84px] hidden" />
          </div>
        </div>
      </section>

      {/* top tutors */}
      <section
        id="tutors"
        className="w-[1440px] max-w-full mx-auto"
        style={{ height: 670 }}
      >
        <h2 className="font-display text-[40px] leading-[1.2] text-center pt-[60px]">
          Our Best Teachers, Your Best Mentors
        </h2>
        <div className="mt-[140px] flex gap-[110px] px-[136px]">
          {[
            {
              name: "Ashish Chanchalani",
              area: "South Delhi",
              mode: "Hybrid",
              price: "₹ 20/min",
            },
            {
              name: "Priya Sharma",
              area: "Mumbai",
              mode: "Online",
              price: "₹ 25/min",
            },
            {
              name: "Rahul Verma",
              area: "Bangalore",
              mode: "Offline",
              price: "₹ 30/min",
            },
          ].map((tutor) => (
            <div
              key={tutor.name}
              className="w-[316px] h-[384px] rounded-[60px_60px_12px_12px] shadow-[2px_2px_4px_rgba(0,0,0,0.25)] bg-[#FFF3FA] relative"
            >
              <div className="absolute left-[47px] -top-[28px] w-[221px] h-[196px] rounded-[60px] overflow-hidden bg-white">
                <Image
                  src="/assets/tutor-card-bg.png"
                  alt="tutor"
                  width={221}
                  height={196}
                  className="object-cover"
                />
              </div>
              <div className="absolute left-[64px] top-[183px] ds-body-2 font-bold">
                {tutor.name}
              </div>
              <div className="absolute left-[36px] top-[223px] flex items-center gap-5">
                <div className="flex items-center gap-1">
                  <div className="w-[10.34px] h-[9.86px] bg-[#644BFC]" />
                  <span className="text-[10.87px]">4.5</span>
                </div>
                <div className="w-px h-[19.53px] bg-black/70" />
                <div className="flex items-center gap-1">
                  <div className="w-[13.22px] h-[8.5px] bg-[#644BFC]" />
                  <span className="text-[10.87px]">{tutor.mode}</span>
                </div>
                <div className="w-px h-[19.53px] bg-black/70" />
                <div className="flex items-center gap-1">
                  <div className="w-[13.05px] h-[13.05px] bg-[#644BFC]" />
                  <span className="text-[10.87px]">{tutor.area}</span>
                </div>
              </div>
              <div className="absolute left-[36px] top-[273px] flex items-center gap-[11.3px]">
                <div className="flex flex-col gap-[5.65px]">
                  <span className="text-[14.36px]">Sub: Physics & Maths</span>
                  <span className="text-[14.36px]">Classes: 1st-12th</span>
                </div>
                <div className="w-px h-[29.28px] bg-[#C1C1C1]" />
                <div className="flex flex-col gap-[5.65px]">
                  <span className="text-[14.36px]">Exp: 7 Years</span>
                  <span className="text-[13.55px] text-[#51BD3B] font-semibold">
                    {tutor.price}
                  </span>
                </div>
              </div>
              <div className="absolute left-[36px] top-[345px] flex gap-3">
                <button className="w-[109px] h-[30px] rounded bg-white border border-[#FC4BC7] text-[#FF5CDC] text-[16px]">
                  Chat
                </button>
                <button className="w-[109px] h-[30px] rounded bg-[#FF95D3] border border-[#E049AE] text-white text-[16px]">
                  View
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* magazine */}
      <section
        id="magazine"
        className="w-[1440px] max-w-full mx-auto"
        style={{ height: 822 }}
      >
        <h2 className="font-display text-[40px] leading-[1.2] text-center pt-[52px]">
          Meritifi magazine
        </h2>
        <div className="relative mt-[161px] px-[79.5px]">
          {/* feature card left */}
          <div className="absolute left-[0px] top-[0px] w-[411.33px] h-[588.01px] rounded-[22.85px] shadow-[0px_22.85px_57.13px_rgba(18,17,39,0.08)] bg-white">
            <Image
              src="/assets/mag-left.png"
              alt="feature"
              width={411}
              height={303}
              className="rounded-t-[22.85px] object-cover"
            />
            <div className="px-[18.28px] pt-[10px]">
              <div className="text-[18.28px] text-[#464646]">ARTICLE</div>
              <h3 className="mt-[42px] text-[22.85px] font-bold text-[#1A1A1A] leading-[1.4]">
                Placerat sed pharetra interdum odio et tincidunt
              </h3>
              <p className="mt-[31px] text-[18.28px] leading-[1.8] text-[#464646]">
                In purus at morbi magna in in maecenas. Nunc nulla magna elit,
                varius phasellus blandit convallis.
              </p>
            </div>
          </div>

          {/* center card */}
          <div className="absolute left-[868.67px] top-[2.76px] w-[294.46px] h-[299.07px] rounded-[18.4px] bg-black/20 overflow-hidden">
            <Image
              src="/assets/mag-right.png"
              alt="right"
              width={294}
              height={299}
              className="object-cover"
            />
          </div>

          {/* right column with about card */}
          <div className="absolute left-[79.5px] top-[161px] w-[1280px] h-[590.77px]">
            <div className="absolute left-[434.33px] top-[316.55px] w-[403.05px] h-[274.22px] rounded-[18.4px] bg-[#E9F6FA]">
              <div className="flex items-center justify-between px-[17.48px] pt-[27.61px]">
                <span className="text-[18.4px]">Explore our blogs</span>
                <div className="w-[34.97px] h-[34.97px] bg-white rounded-full" />
              </div>
              <h3 className="px-[22.08px] mt-[55px] text-[22.08px] font-bold">
                Offline or Online: What Works Best for Today’s Learners?
              </h3>
              <div className="px-[22.08px] mt-[50px] flex items-center gap-2 text-[#382E53]">
                <span className="text-[11.38px]">Read more</span>
                <div className="w-[17.07px] h-[17.07px]" />
              </div>
            </div>
            <div className="absolute left-0 top-[316.55px] w-[412.25px] h-[274.22px] rounded-[18.4px] bg-[#F3E2C1]">
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

      {/* success stories */}
      <section
        id="success"
        className="w-[1440px] max-w-full mx-auto"
        style={{ height: 670 }}
      >
        <h2 className="font-display text-[40px] leading-[1.2] text-center pt-[60px]">
          When you Make Merit Yours
        </h2>
        <div className="mt-[60px] px-[80px] grid grid-cols-3 gap-6">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="bg-[#F5F2ED]/40 rounded-[10.8px] p-6">
              <div className="flex items-center gap-2 mb-4">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <div key={idx} className="w-5 h-5 bg-[#F1C76F] rounded-sm" />
                ))}
              </div>
              <p className="ds-body-2 text-[#413D45] mb-4">
                &quot;Headspace gives me a slice of the day that&apos;s just for
                me.&quot;
              </p>
              <div className="text-sm">
                <p className="ds-body-3 font-semibold text-[#1B1819]">
                  Nadien, New Mexico
                </p>
                <p className="ds-body-3 text-[#413D45]">
                  on prioritizing self-care
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* college search */}
      <section id="college" className="w-[1440px] max-w-full mx-auto" style={{ height: 703 }}>
        <h2 className="font-display text-[40px] leading-[1.2] text-center pt-[35px]">Find Your Perfect College</h2>
        <div className="mt-[92px] flex gap-[44px] px-[148px]">
          {/* left filters */}
          <div className="w-[529px] flex flex-col gap-10">
            {/* selects row */}
            <div className="flex flex-col gap-6">
              <div className="w-[434px] h-[80px] rounded-[26px] border border-[#C1C1C1] px-[27.4px] py-[22.86px] flex items-center justify-between">
                <span className="text-[22px]">college/university</span>
                <div className="w-8 h-8" />
              </div>
              <div className="w-[434px] h-[80px] rounded-[26px] border border-[#C1C1C1] px-[27.4px] py-[22.86px] flex items-center justify-between">
                <span className="text-[22px]">course type</span>
                <div className="w-8 h-8" />
              </div>
              <div className="w-[434px] h-[80px] rounded-[26px] border border-[#C1C1C1] px-[27.4px] py-[22.86px] flex items-center justify-between">
                <span className="text-[22px]">stream</span>
                <div className="w-8 h-8" />
              </div>
            </div>
            <button className="w-[220px] h-[60px] rounded-[10px] uppercase ds-btn-3 border-[2px]" style={{ borderColor: 'rgba(241,199,111,1)' }}>search now</button>
          </div>
          {/* right visuals */}
          <div className="relative w-[363.93px] h-[504px]">
            <div className="absolute left-0 bottom-0 w-full h-[179.57px] rounded-[20.25px] bg-[#E9F6FA] px-[22.75px] pt-[71.83px] text-center">
              <p className="text-[19.15px] leading-[1.2]">
                Keep Your Learning Streak Strong! Search, compare and choose colleges best-suited for You.
              </p>
            </div>
            <div className="absolute left-[21.55px] top-0 w-[321.05px] h-[371.12px] rounded-[130.27px_130.27px_21.54px_21.63px] overflow-hidden bg-[#921818]">
              <Image src="/assets/college-right.png" alt="college" width={321} height={371} className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* footer */}
      <footer id="footer" className="w-[1440px] max-w-full mx-auto text-white" style={{ backgroundImage: 'url(/assets/footer-bg.png)', backgroundSize: 'cover' }}>
        <div className="w-full px-10 pt-10">
          <div className="mx-10 rounded-[16px] bg-white/60 p-8 flex flex-col gap-24">
            <div className="flex gap-16">
              <div className="w-[347px] flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <Image src="/assets/logo.png" width={72} height={75} alt="logo" />
                  <span className="font-display text-white text-[40px]">meritfi</span>
                </div>
              </div>
              <div className="w-[660px] flex gap-24">
                <div className="flex flex-col gap-6">
                  <span className="font-display uppercase tracking-[4%] opacity-60">Information</span>
                  <div className="flex gap-6">
                    <a>Home</a>
                    <a>about us</a>
                    <a>teacher dashboard</a>
                    <a>student dashboard</a>
                    <a>magazine</a>
                    <a>college hunt</a>
                  </div>
                </div>
                <div className="flex flex-col gap-6">
                  <span className="font-display uppercase tracking-[4%] opacity-60">follow us</span>
                  <div className="flex gap-5">
                    <div className="w-[42.71px] h-[31.06px] bg-white" />
                    <div className="w-[31.06px] h-[31.06px] bg-white" />
                    <div className="w-[33px] h-[33px] bg-white" />
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-end gap-2">
                <div className="flex items-center gap-2 px-[22px] py-[8px] border-2 rounded">
                  <span>Contact Us</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[#1B1819]">+1 (999) 999-99-99</span>
                  <span className="text-[#1B1819]">info@logoipsum.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-[1215px] py-6">
          <span className="text-white/90">Privacy policy | terms of use | refund policy</span>
          <span>© 2023 — Copyright</span>
        </div>
      </footer>

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
