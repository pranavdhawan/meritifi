import Image from "next/image";

export function Footer() {
  return (
    <footer
      id="footer"
      className="w-full max-w-full mx-auto text-white"
      style={{
        backgroundImage: "url(/assets/footer-bg.png)",
        backgroundSize: "cover",
        backgroundPosition: "center top",
      }}
    >
      <div className="w-full px-10 pt-10 max-sm:px-6">
        <div className="mx-10 rounded-[16px] bg-white/60 p-8 max-sm:mx-0">
          <div className="grid grid-cols-1 gap-6 xl:grid-cols-[347px_660px_1fr] xl:gap-16">
            {/* Left: Brand */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <Image
                  src="/assets/logo.png"
                  width={72}
                  height={75}
                  alt="logo"
                />
                <span className="font-display text-[40px] text-[#010101]">
                  meritfi
                </span>
              </div>
            </div>

            {/* Middle: Information + Follow us (stacked) */}
            <div className="flex flex-col gap-11 max-w-[660px]">
              <div className="flex flex-col gap-6">
                <span className="font-display uppercase tracking-[0.04em] opacity-60 text-[#010101]">
                  Information
                </span>
                <nav className="flex flex-wrap items-center gap-6 text-[#010101]">
                  <a href="#" aria-label="Home">
                    Home
                  </a>
                  <a href="#" aria-label="About us">
                    about us
                  </a>
                  <a href="#" aria-label="Teacher dashboard">
                    teacher dashboard
                  </a>
                  <a href="#" aria-label="Student dashboard">
                    student dashboard
                  </a>
                  <a href="#" aria-label="Magazine">
                    magazine
                  </a>
                  <a href="#" aria-label="College hunt">
                    college hunt
                  </a>
                </nav>
              </div>

              <div className="flex flex-col gap-6">
                <span className="font-display uppercase tracking-[0.04em] opacity-60 text-[#010101]">
                  follow us
                </span>
                <div className="flex items-center gap-[22px]">
                  <Image
                    src="/assets/youtube.svg"
                    alt="YouTube"
                    width={43}
                    height={32}
                  />
                  <Image
                    src="/assets/instagram.svg"
                    alt="Instagram"
                    width={31}
                    height={31}
                  />
                  <Image src="/assets/x.svg" alt="X" width={33} height={33} />
                </div>
              </div>
            </div>

            {/* Right: Contact */}
            <div className="flex flex-col items-start gap-2 xl:items-end">
              <div className="rounded bg-gradient-to-r from-[#F1C76F] via-[#83DFEA] to-[#644BFC] p-[2px]">
                <button className="px-[22px] py-[8px] rounded bg-transparent text-[#010101]">
                  Contact Us
                </button>
              </div>
              <div className="flex flex-col">
                <span className="text-[#1B1819]">+1 (999) 999-99-99</span>
                <span className="text-[#1B1819]">info@logoipsum.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="w-full py-6">
        <div className="mx-auto w-[1349px] max-w-full px-10 max-sm:px-6">
          <div className="flex flex-col items-center justify-between gap-2 md:flex-row">
            <span className="text-white/90 max-sm:text-xs">
              Privacy policy | terms of use | refund policy
            </span>
            <span className="max-sm:text-xs">© 2023 — Copyright</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
