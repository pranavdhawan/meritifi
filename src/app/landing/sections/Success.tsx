"use client";

import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export function Success() {
  const items = [
    {
      quote:
        "Headspace provides me with ... a connection to myself, and a disconnection from negative thoughts, feelings, and sensations.",
      author: "Keri, UK",
      context: "on finding her happy place",
    },
    {
      quote: "Changing my thoughts has allowed me to change my life.",
      author: "Davide, London",
      context: "on using meditation to turn his life around",
    },
    {
      quote: "A happy workplace leads to a happier environment.",
      author: "Jaime, Spain",
      context: "on the benefits of mindfulness at work",
    },
    {
      quote:
        "I came to learn that the storyline in my head … was holding me back.",
      author: "Peter, Belgium",
      context: "on what he learned when sitting with himself",
    },
    {
      quote: "Merit helped me build a kinder relationship with myself.",
      author: "Nadien, New Mexico",
      context: "on prioritizing self-care",
    },
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center" },
    [Autoplay({ delay: 3500, stopOnInteraction: true, stopOnMouseEnter: true })]
  );
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <section id="success" className="w-[1440px] max-w-full mx-auto my-24">
      <h2 className="ds-heading-2 text-center">When you Make Merit Yours</h2>

      <div className="mt-[40px] flex flex-col gap-6">
        <div
          className="px-6 md:px-[80px] overflow-hidden"
          style={{
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
            maskImage:
              "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          }}
        >
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex gap-6 select-none cursor-grab active:cursor-grabbing">
              {items.map((it, i) => (
                <div
                  key={i}
                  className="flex-[0_0_auto] w-[300px] md:w-[360px] lg:w-[420px] h-[384px] bg-[#F5F2ED]/40 rounded-[10.8px] p-6 md:p-7 flex flex-col transition-[transform,opacity] duration-300 ease-out"
                  style={{
                    transform: `scale(${i === selected ? 1 : 0.92})`,
                    opacity: i === selected ? 1 : 0.5,
                  }}
                >
                  <div className="text-[#F1C76F]">
                    <img
                      src="/assets/quote-figure.svg"
                      alt="quote"
                      className="w-[52px] h-[36px]"
                    />
                  </div>
                  <div className="mt-6 flex-1">
                    <p className="ds-body-2 text-[#413D45] tracking-[-0.02em]">
                      {it.quote}
                    </p>
                  </div>
                  <div className="pt-4">
                    <p className="ds-notes font-medium text-[#67646A]">
                      {it.author}
                    </p>
                    <p className="ds-footer text-[#413D45]">{it.context}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
