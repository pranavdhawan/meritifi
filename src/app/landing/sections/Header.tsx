"use client";

import Image from "next/image";
import { LandingNav } from "../Nav";
import { useEffect, useState } from "react";

export function Header() {
  const [isFloating, setIsFloating] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById("hero");
      if (!hero) return;
      const { bottom } = hero.getBoundingClientRect();
      setIsFloating(bottom <= 0);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="w-[1440px] max-w-full mx-auto">
      <header
        className={`h-[100px] flex items-center z-50 transition-all duration-300 whitespace-nowrap backdrop-blur-md ${
          isFloating
            ? "fixed inset-x-0 top-8 w-full rounded-xl border border-white/30 bg-white/60 shadow-lg transform scale-x-[0.985]"
            : "fixed inset-x-0 top-0 w-full bg-transparent"
        }`}
      >
        <div className="w-full flex items-center justify-between px-[140px] max-sm:px-6">
          <div className="flex items-center">
            <Image
              src="/assets/logo.png"
              alt="Meritifi"
              width={72}
              height={75}
              priority
            />
            {/* <span className="font-display text-[40px] leading-[1.2]">meritifi</span> */}
            <div className="relative text-[40px] capitalize font-balsamiq-sans text-center text-[#644bfc]">
              <span>me</span>
              <span className="text-[#f1c76f]">ri</span>
              <span>tfi</span>
            </div>
          </div>
          <LandingNav />
          <button
            className="px-6 py-2 border-2 border-transparent rounded-sm uppercase tracking-wide ds-btn-3 transition-shadow duration-200 hover:shadow-[0_0_18px_rgba(86,64,215,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5640D7] max-sm:hidden"
            style={{
              background:
                "linear-gradient(white,white) padding-box, linear-gradient(270deg,#2FBFCF 0%,#5640D7 53%,#F1C76F 100%) border-box",
            }}
          >
            Log In
          </button>
        </div>
      </header>
    </section>
  );
}
