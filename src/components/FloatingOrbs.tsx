"use client";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

type OrbAsset = {
  src: string;
  width: number;
  height: number;
};

type OrbPosition = {
  left: string;
  top: string;
  delayMs: number;
  durationMs: number;
};

type FloatingOrbsProps = {
  /** Container className; ensure the parent is relative */
  className?: string;
  /** Optional override of orb assets (4 expected) */
  assets?: OrbAsset[];
};

const DEFAULT_ASSETS: OrbAsset[] = [
  { src: "/assets/college-ball-top-right.png", width: 142, height: 142 },
  { src: "/assets/college-ball-right-mid.png", width: 138, height: 138 },
  { src: "/assets/college-ball-left-mid.png", width: 124, height: 124 },
  { src: "/assets/college-ball-left-bottom.png", width: 127, height: 127 },
];

function generatePositions(seed: number): OrbPosition[] {
  // Simple seeded PRNG
  const rand = (() => {
    let t = seed + 0x6d2b79f5;
    return () => {
      t += 0x6d2b79f5;
      let r = Math.imul(t ^ (t >>> 15), 1 | t);
      r ^= r + Math.imul(r ^ (r >>> 7), 61 | r);
      return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
    };
  })();

  // Divide the viewport into 4 quadrants and place one orb in each
  const quadrants = [
    { xRange: [5, 30], yRange: [5, 35] },
    { xRange: [70, 95], yRange: [5, 35] },
    { xRange: [10, 40], yRange: [60, 85] },
    { xRange: [60, 90], yRange: [60, 85] },
  ];

  return quadrants.map((q, i) => {
    const leftPct = q.xRange[0] + rand() * (q.xRange[1] - q.xRange[0]);
    const topPct = q.yRange[0] + rand() * (q.yRange[1] - q.yRange[0]);
    const delayMs = Math.floor(100 + rand() * 700);
    const durationMs = Math.floor(3500 + rand() * 2500);
    return {
      left: `${leftPct}%`,
      top: `${topPct}%`,
      delayMs,
      durationMs,
    };
  });
}

export default function FloatingOrbs({
  className,
  assets = DEFAULT_ASSETS,
}: FloatingOrbsProps) {
  const [seed, setSeed] = useState<number>(0);

  useEffect(() => {
    // Different layout each mount; use high-res time as seed
    setSeed(Math.floor(performance.now()));
  }, []);

  const positions = useMemo(() => generatePositions(seed || 1), [seed]);

  return (
    <div className={`${className} -z-[1]`} aria-hidden>
      {assets.slice(0, 4).map((orb, idx) => {
        const pos = positions[idx] ?? positions[0];
        return (
          <div
            key={idx}
            className="pointer-events-none absolute animate-float"
            style={{
              left: pos.left,
              top: pos.top,
              animationDelay: `${pos.delayMs}ms`,
              animationDuration: `${pos.durationMs}ms`,
            }}
          >
            <Image
              src={orb.src}
              alt=""
              width={orb.width}
              height={orb.height}
              className="drop-shadow-md"
            />
          </div>
        );
      })}
    </div>
  );
}
