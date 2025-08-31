'use client'

import { useEffect, useState } from 'react'

const LINKS = [
  { id: 'hero', label: 'Home' },
  { id: 'how-it-works', label: 'About Us' },
  { id: 'dashboard', label: 'Teacher Dashboard' },
  { id: 'dashboard', label: 'Student Dashboard' },
  { id: 'magazine', label: 'Magazine' },
  { id: 'college', label: 'College Hunt' },
]

export function LandingNav() {
  const [active, setActive] = useState<string>('hero')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      { rootMargin: '-50% 0px -50% 0px', threshold: 0 }
    )

    LINKS.forEach((l) => {
      const el = document.getElementById(l.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="flex items-center">
      <button
        className="sm:hidden inline-flex items-center justify-center w-9 h-9 rounded border border-black/20 mr-2"
        aria-label="Toggle navigation"
        onClick={() => setOpen((v) => !v)}
      >
        <span className="block w-5 h-[2px] bg-current" />
      </button>
      <nav className={`p-1 ${open ? 'flex flex-col gap-2' : 'hidden'} sm:flex sm:flex-row sm:items-center sm:gap-4`}>
        {LINKS.map((l, idx) => (
          <a
            key={`${l.label}-${idx}`}
            href={`#${l.id}`}
            onClick={() => setOpen(false)}
            className={`ds-body-2 nav-underline transition-colors ${
              active === l.id ? 'text-black font-semibold active' : 'text-[#555] hover:text-black'
            }`}
          >
            {l.label}
          </a>
        ))}
      </nav>
    </div>
  )
}


