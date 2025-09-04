"use client";

import { useState } from "react";

const LINKS = [
  { id: "hero", label: "Home" },
  { id: "how-it-works", label: "About Us" },
  { id: "dashboard", label: "Teacher Dashboard" },
  { id: "dashboard", label: "Student Dashboard" },
  { id: "magazine", label: "Magazine" },
  { id: "college", label: "College Hunt" },
];

export function LandingNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex items-center">
      <button
        className="sm:hidden inline-flex items-center justify-center w-9 h-9 rounded border border-black/20 mr-2"
        aria-label="Toggle navigation"
        onClick={() => setOpen((v) => !v)}
      >
        <span className="block w-5 h-[2px] bg-current" />
      </button>
      <nav
        className={`p-1 whitespace-nowrap ${
          open ? "flex flex-col gap-2" : "hidden"
        } sm:flex sm:flex-row sm:items-center sm:gap-4`}
      >
        {LINKS.map((l, idx) => (
          <a
            key={`${l.label}-${idx}`}
            href={`#${l.id}`}
            onClick={() => setOpen(false)}
            className="ds-body-2 transition-all no-underline text-[#555] px-3 py-1.5 rounded-md hover:text-[#6B55FC] hover:bg-[#6B55FC]/10"
          >
            {l.label}
          </a>
        ))}
      </nav>
    </div>
  );
}
