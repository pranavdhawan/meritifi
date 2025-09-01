import Image from "next/image";

export function Tutors() {
  const tutors = [
    {
      name: "Ashish Chanchalani",
      area: "South Delhi",
      mode: "Hybrid",
      price: "₹ 20/min",
    },
    { name: "Priya Sharma", area: "Mumbai", mode: "Online", price: "₹ 25/min" },
    {
      name: "Rahul Verma",
      area: "Bangalore",
      mode: "Offline",
      price: "₹ 30/min",
    },
  ];
  return (
    <section id="tutors" className="w-[1440px] max-w-full mx-auto my-12">
      <h2 className="ds-heading-2 text-center">
        Our Best Teachers, Your Best Mentors
      </h2>
      <div className="mt-[80px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-[110px] px-6 lg:px-[136px]">
        {tutors.map((tutor) => (
          <div
            key={tutor.name}
            className="w-full rounded-[60px_60px_12px_12px] shadow-[2px_2px_4px_rgba(0,0,0,0.25)] bg-[#FFF3FA] flex flex-col pt-14"
          >
            <div className="flex justify-center -mt-12">
              <div className="w-[221px] h-[196px] rounded-[60px] overflow-hidden">
                <Image
                  src="/assets/tutor-card-bg.png"
                  alt="tutor"
                  width={221}
                  height={196}
                  className="object-cover w-full h-full rounded-[60px_60px_12px_12px]"
                />
              </div>
            </div>
            <div className="mt-6 text-center ds-subheading font-bold">
              {tutor.name}
            </div>
            <div className="mt-4 px-9 flex items-center gap-5">
              <div className="flex items-center gap-1">
                <svg
                  width="10.34"
                  height="9.86"
                  viewBox="0 0 11 10"
                  fill="#644BFC"
                >
                  <path d="M5.17 0l1.6 3.24 3.57.52-2.58 2.52.61 3.55L5.17 8.3 1.97 9.83l.61-3.55L0 3.76l3.57-.52L5.17 0z" />
                </svg>
                <span className="text-[10.87px] tracking-[-0.01em]">4.5</span>
              </div>
              <div className="w-px h-[19.53px] bg-black/70" />
              <div className="flex items-center gap-1">
                <div className="w-[13.22px] h-[8.5px] bg-[#644BFC]" />
                <span className="text-[10.87px] tracking-[-0.01em]">
                  {tutor.mode}
                </span>
              </div>
              <div className="w-px h-[19.53px] bg-black/70" />
              <div className="flex items-center gap-1">
                <svg
                  width="13.05"
                  height="13.05"
                  viewBox="0 0 14 14"
                  fill="#644BFC"
                >
                  <path d="M7 0C4.1 0 1.75 2.35 1.75 5.25C1.75 9.1875 7 14 7 14C7 14 12.25 9.1875 12.25 5.25C12.25 2.35 9.9 0 7 0ZM7 7C6.0375 7 5.25 6.2125 5.25 5.25C5.25 4.2875 6.0375 3.5 7 3.5C7.9625 3.5 8.75 4.2875 8.75 5.25C8.75 6.2125 7.9625 7 7 7Z" />
                </svg>
                <span className="text-[10.87px] tracking-[-0.01em]">
                  {tutor.area}
                </span>
              </div>
            </div>
            <div className="mt-5 px-9 grid grid-cols-[1fr_auto_1fr] items-start gap-[11.3px]">
              <div className="flex flex-col gap-[5.65px]">
                <span className="text-[14.36px]">Sub: Physics & Maths</span>
                <span className="text-[14.36px]">Classes: 1st-12th</span>
              </div>
              <div className="w-px h-[29.28px] bg-black/70" />
              <div className="flex flex-col gap-[5.65px]">
                <span className="text-[14.36px]">Exp: 7 Years</span>
                <span className="text-[13.55px] text-[#51BD3B] font-semibold">
                  {tutor.price}
                </span>
              </div>
            </div>
            <div className="mt-6 px-9 pb-6 flex gap-3">
              <button className="w-[109px] h-[30px] rounded bg-white border border-[#FC4BC7] text-[#FF5CDC] text-[16px] transition-colors duration-200 hover:bg-[#FFE5F3] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FC4BC7]">
                Chat
              </button>
              <button className="w-[109px] h-[30px] rounded bg-[#FF95D3] border border-[#E049AE] text-white text-[16px] transition duration-200 hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E049AE]">
                View
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
