import Image from 'next/image'

export function Footer() {
  return (
    <footer id="footer" className="w-[1440px] max-w-full mx-auto text-white" style={{ backgroundImage: 'url(/assets/footer-bg.png)', backgroundSize: 'cover', backgroundPosition: 'center top' }}>
      <div className="w-full px-10 pt-10 max-sm:px-6">
        <div className="mx-10 rounded-[16px] bg-white/60 p-8 flex flex-col gap-24 max-sm:mx-0">
          <div className="flex gap-16 max-sm:flex-col max-sm:gap-6">
            <div className="w-[347px] flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <Image src="/assets/logo.png" width={72} height={75} alt="logo" />
                <span className="font-display text-white text-[40px]">meritfi</span>
              </div>
            </div>
            <div className="w-[660px] flex gap-24 max-sm:w-full max-sm:gap-8">
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
            <div className="flex-1 flex flex-col items-end gap-2 max-sm:items-start">
              <div className="flex items-center gap-2 px-[22px] py-[8px] border-2 rounded transition-colors hover:bg-white/20">
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
      <div className="flex items-center justify-center gap-[1215px] py-6 max-sm:justify-between max-sm:px-6">
        <span className="text-white/90 max-sm:text-xs">Privacy policy | terms of use | refund policy</span>
        <span className="max-sm:text-xs">© 2023 — Copyright</span>
      </div>
    </footer>
  )
}


