'use client'

import { useEffect, useState } from 'react'

const LINKS = [
  { id: 'hero', label: 'home' },
  { id: 'how-it-works', label: 'about us' },
  { id: 'dashboard', label: 'teacher dashboard' },
  { id: 'dashboard', label: 'student dashboard' },
  { id: 'magazine', label: 'magazine' },
  { id: 'college', label: 'college hunt' },
]

export function LandingNav() {
  const [active, setActive] = useState<string>('hero')

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
    <nav className="flex items-center gap-4 p-1">
      {LINKS.map((l, idx) => (
        <a
          key={`${l.label}-${idx}`}
          href={`#${l.id}`}
          className={`ds-body-2 transition-colors ${
            active === l.id ? 'text-black font-semibold' : 'text-[#555] hover:text-black'
          }`}
        >
          {l.label}
        </a>
      ))}
    </nav>
  )
}


