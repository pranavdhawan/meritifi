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
    <section id="tutors" className="w-full max-w-[1440px] mx-auto py-20 px-6">
      <div className="flex justify-center mb-16">
        <div className="relative">
          <div className="bg-[#f6ffb9] px-8 py-4 rounded-[20px] shadow-lg">
            <h2 className="text-[#f48383] text-4xl md:text-5xl font-bold font-['Balsamiq_Sans'] capitalize leading-tight text-center">
              Our Best Teachers, Your Best Mentors
            </h2>
          </div>
        </div>
      </div>
      <div className="pt-40 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto">
        {tutors.map((tutor) => (
                      <div
              key={tutor.name}
              className="w-full rounded-[60px_60px_20px_20px] shadow-[0_8px_32px_rgba(0,0,0,0.12)] bg-[#FFF3FA] flex flex-col pt-20 hover:shadow-[0_12px_40px_rgba(0,0,0,0.18)] transition-all duration-300 hover:-translate-y-1 relative"
            >
              <div className="flex justify-center -mt-20 absolute top-0 left-1/2 transform -translate-x-1/2 z-10">
                <div className="w-[220px] h-[200px] rounded-[60px_60px_20px_20px] overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.15)]">
                <Image
                  src="/assets/tutor-card-bg.png"
                  alt="tutor"
                  width={220}
                  height={200}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <div className="mt-12 text-center">
              <h3 className="text-[34px] font-bold text-gray-800 mb-2">{tutor.name}</h3>
            </div>
            <div className="mt-4 px-6 flex items-center justify-center gap-4 text-xs">
              <div className="flex items-center gap-1">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 11 10"
                  fill="#644BFC"
                >
                  <path d="M5.17 0l1.6 3.24 3.57.52-2.58 2.52.61 3.55L5.17 8.3 1.97 9.83l.61-3.55L0 3.76l3.57-.52L5.17 0z" />
                </svg>
                <span className="text-xs font-medium text-gray-600">4.5</span>
              </div>
              <div className="w-px h-4 bg-gray-300" />
              <div className="flex items-center gap-1">
                <div className="w-3 h-2 bg-[#644BFC] rounded-sm" />
                <span className="text-xs font-medium text-gray-600">
                  {tutor.mode}
                </span>
              </div>
              <div className="w-px h-4 bg-gray-300" />
              <div className="flex items-center gap-1">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 14 14"
                  fill="#644BFC"
                >
                  <path d="M7 0C4.1 0 1.75 2.35 1.75 5.25C1.75 9.1875 7 14 7 14C7 14 12.25 9.1875 12.25 5.25C12.25 2.35 9.9 0 7 0ZM7 7C6.0375 7 5.25 6.2125 5.25 5.25C5.25 4.2875 6.0375 3.5 7 3.5C7.9625 3.5 8.75 4.2875 8.75 5.25C8.75 6.2125 7.9625 7 7 7Z" />
                </svg>
                <span className="text-xs font-medium text-gray-600">
                  {tutor.area}
                </span>
              </div>
            </div>
            <div className="mt-6 px-6 grid grid-cols-2 gap-4 text-base">
              <div className="flex flex-col gap-2">
                <span className="text-gray-600 font-medium">Sub: Physics & Maths</span>
                <span className="text-gray-600 font-medium">Classes: 1st-12th</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-gray-600 font-medium">Exp: 7 Years</span>
                <span className="text-base text-[#51BD3B] font-bold">
                  {tutor.price}
                </span>
              </div>
            </div>
            <div className="mt-8 px-6 pb-8 flex gap-3">
              <button className="flex-1 h-10 rounded-lg bg-white border-2 border-[#FC4BC7] text-[#FF5CDC] font-semibold text-base transition-all duration-200 hover:bg-[#FFE5F3] hover:border-[#FF5CDC] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FC4BC7]">
                Chat
              </button>
              <button className="flex-1 h-10 rounded-lg bg-gradient-to-r from-[#FF95D3] to-[#E049AE] text-white font-semibold text-base transition-all duration-200 hover:from-[#FFA5E0] hover:to-[#E55BB8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E049AE] shadow-lg">
                View
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
