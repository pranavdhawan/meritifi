'use client'

import Image from 'next/image'
import { LandingNav } from '../Nav'

export function Header() {
  return (
    <section className="w-[1440px] max-w-full mx-auto">
      <header className="w-full h-[100px] flex items-center">
        <div className="w-full flex items-center justify-between px-[140px] max-sm:px-6">
          <div className="flex items-center gap-[40px]">
            <Image src="/assets/logo.png" alt="Meritifi" width={72} height={75} priority />
            <span className="font-display text-[40px] leading-[1.2]">meritfi</span>
          </div>
          <LandingNav />
          <button
            className="px-6 py-2 border-2 border-transparent rounded-sm uppercase tracking-wide ds-btn-3 transition-shadow duration-200 hover:shadow-[0_0_18px_rgba(86,64,215,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5640D7] max-sm:hidden"
            style={{
              background:
                'linear-gradient(white,white) padding-box, linear-gradient(270deg,#2FBFCF 0%,#5640D7 53%,#F1C76F 100%) border-box',
            }}
          >
            Log In
          </button>
        </div>
      </header>
    </section>
  )
}


