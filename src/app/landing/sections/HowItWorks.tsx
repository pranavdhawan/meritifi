import Image from 'next/image'

export function HowItWorks() {
  return (
    <section id="how-it-works" className="w-[1440px] max-w-full mx-auto">
      <div className="w-[1440px] h-[875px] relative bg-white overflow-hidden">

        <div className="flex justify-center pt-12">
          <div className="relative">
            <div className="bg-orange-300 px-8 py-3 rounded-[20px]">
              <h2 className="text-indigo-700 text-5xl font-bold font-['Balsamiq_Sans'] capitalize leading-none">
                how it works
              </h2>
            </div>
          </div>
        </div>
        
        <div className="left-[80px] top-[177px] absolute inline-flex justify-start items-center gap-52">
          <div className="w-72 h-[642px] relative bg-gradient-to-b from-orange-300/40 to-white/40 rounded-tl-[120px] rounded-tr-[120px] overflow-hidden">
            <div className="w-48 h-64 left-[42px] top-[42px] absolute rounded-tl-[90px] rounded-tr-[90px] rounded-bl-xl rounded-br-xl overflow-hidden">
              <Image className="w-full h-full object-cover" src="/assets/howitworks-girl.jpg" alt="Student" width={192} height={256} />
            </div>
            <div className="left-[43px] top-[331px] absolute justify-start text-black text-2xl font-normal font-['Balsamiq_Sans'] capitalize">Schedule Classes</div>
            <div className="w-7 h-0 left-[74px] top-[433px] absolute origin-top-left rotate-90 outline outline-1 outline-offset-[-0.54px] outline-zinc-500"></div>
            <div className="w-7 h-0 left-[74px] top-[499px] absolute origin-top-left rotate-90 outline outline-1 outline-offset-[-0.54px] outline-zinc-500"></div>
            <div className="w-24 left-[107.20px] top-[460px] absolute justify-center"><span className="text-violet-400 text-lg font-normal font-['Lato'] capitalize leading-snug">Choose</span><span className="text-zinc-500 text-xs font-normal font-['Lato'] capitalize leading-none"> from expert educators.</span></div>
            <div className="w-8 h-8 left-[58px] top-[463.24px] absolute bg-white rounded-2xl border-[0.54px] border-indigo-200 flex items-center justify-center">
              <svg className="w-4 h-4 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="w-24 left-[107.20px] top-[528px] absolute justify-center"><span className="text-violet-400 text-lg font-normal font-['Lato'] capitalize leading-snug">Schedule</span><span className="text-zinc-500 text-xs font-normal font-['Lato'] capitalize leading-none"> for later.</span></div>
            <div className="w-8 h-8 left-[58px] top-[531.24px] absolute bg-white rounded-2xl border-[0.54px] border-indigo-200 flex items-center justify-center">
              <svg className="w-4 h-4 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="w-32 h-11 left-[107px] top-[385px] absolute justify-center"><span className="text-violet-400 text-lg font-normal font-['Lato'] capitalize leading-snug">search</span><span className="text-zinc-500 text-xs font-normal font-['Lato'] capitalize leading-none"> your subjects.</span></div>
            <div className="w-8 h-8 left-[58px] top-[398.82px] absolute bg-white rounded-2xl border-[0.54px] border-indigo-200 flex items-center justify-center">
              <svg className="w-4 h-4 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          <div className="w-72 h-[642px] relative bg-gradient-to-b from-white/40 to-cyan-300/40 rounded-bl-[120px] rounded-br-[120px] overflow-hidden">
            <div className="w-48 h-64 left-[43px] top-[42px] absolute rounded-tl-[90px] rounded-tr-[90px] rounded-bl-xl rounded-br-xl overflow-hidden">
              <Image className="w-full h-full object-cover" src="/assets/howitworks-girl.jpg" alt="Student" width={192} height={256} />
            </div>
            <div className="left-[97px] top-[332px] absolute justify-start text-black text-2xl font-normal font-['Balsamiq_Sans'] capitalize">Chat Live</div>
            <div className="w-11 h-0 left-[73.68px] top-[422.47px] absolute origin-top-left rotate-90 outline outline-1 outline-offset-[-0.54px] outline-zinc-500"></div>
            <div className="w-12 h-0 left-[73px] top-[482px] absolute origin-top-left rotate-[89.34deg] outline outline-1 outline-offset-[-0.54px] outline-zinc-500"></div>
            <div className="w-24 left-[107px] top-[518px] absolute justify-center"><span className="text-violet-400 text-lg font-normal font-['Lato'] leading-snug">Solve</span><span className="text-zinc-500 text-xs font-normal font-['Lato'] leading-none"> Doubts, Round the Clock!<br/></span></div>
            <div className="w-8 h-8 left-[58px] top-[524.49px] absolute bg-white rounded-2xl border-[0.54px] border-indigo-200 flex items-center justify-center">
              <svg className="w-4 h-4 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="w-28 left-[107px] top-[445px] absolute justify-center"><span className="text-violet-400 text-lg font-normal font-['Lato'] leading-snug">Recharge </span><span className="text-zinc-500 text-xs font-normal font-['Lato'] leading-none">as Needed<br/></span></div>
            <div className="w-8 h-8 left-[58px] top-[449.82px] absolute bg-white rounded-2xl border-[0.54px] border-indigo-200 flex items-center justify-center">
              <svg className="w-4 h-4 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4zM18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" />
              </svg>
            </div>
            <div className="w-32 left-[107px] top-[389px] absolute justify-center"><span className="text-violet-400 text-lg font-normal font-['Lato'] leading-snug">Start </span><span className="text-zinc-500 text-xs font-normal font-['Lato'] leading-none">a Live Chat<br/></span></div>
            <div className="w-8 h-8 left-[58px] top-[385.16px] absolute bg-white rounded-2xl border-[0.54px] border-indigo-200 flex items-center justify-center">
              <svg className="w-4 h-4 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          <div className="w-72 h-[642px] relative bg-gradient-to-b from-fuchsia-400/40 to-white/40 rounded-tl-[120px] rounded-tr-[120px] overflow-hidden">
            <div className="w-44 h-64 left-[48px] top-[42px] absolute bg-gradient-to-l from-stone-300 to-white rounded-tl-[90px] rounded-tr-[90px] rounded-bl-xl rounded-br-xl overflow-hidden">
              <Image className="w-full h-full object-cover" src="/assets/howitworks-girl.jpg" alt="Student" width={176} height={256} />
            </div>
            <div className="left-[31px] top-[336px] absolute justify-start text-black text-2xl font-normal font-['Balsamiq_Sans'] capitalize">If You Are a Teacher<br/></div>
            <div className="w-11 h-0 left-[73.68px] top-[422.47px] absolute origin-top-left rotate-90 outline outline-1 outline-offset-[-0.54px] outline-zinc-500"></div>
            <div className="w-12 h-0 left-[74px] top-[471px] absolute origin-top-left rotate-[89.34deg] outline outline-1 outline-offset-[-0.54px] outline-zinc-500"></div>
            <div className="w-24 left-[107.20px] top-[510px] absolute justify-center"><span className="text-violet-400 text-lg font-normal font-['Lato'] leading-snug">Teach </span><span className="text-zinc-500 text-xs font-normal font-['Lato'] leading-none">Students and Start Earning</span></div>
            <div className="w-8 h-8 left-[58px] top-[513.24px] absolute bg-white rounded-2xl border-[0.54px] border-indigo-200 flex items-center justify-center">
              <svg className="w-4 h-4 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
              </svg>
            </div>
            <div className="w-36 left-[107.44px] top-[449.18px] absolute justify-center"><span className="text-violet-400 text-lg font-normal font-['Lato'] leading-snug">Select </span><span className="text-zinc-500 text-xs font-normal font-['Lato'] leading-none">Preferences<br/></span></div>
            <div className="w-8 h-8 left-[58px] top-[443px] absolute bg-white rounded-2xl border-[0.54px] border-indigo-200 flex items-center justify-center">
              <svg className="w-4 h-4 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="w-32 left-[107px] top-[387px] absolute justify-center"><span className="text-violet-400 text-lg font-normal font-['Lato'] leading-snug">Get</span><span className="text-zinc-500 text-xs font-normal font-['Lato'] leading-none"> Verified<br/></span></div>
            <div className="w-8 h-8 left-[58px] top-[385.16px] absolute bg-white rounded-2xl border-[0.54px] border-indigo-200 flex items-center justify-center">
              <svg className="w-4 h-4 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}





