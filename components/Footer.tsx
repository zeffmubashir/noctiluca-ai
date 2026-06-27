'use client'

interface NavLink {
  label: string
  sectionId: string
}

const navLinks: NavLink[] = [
  { label: 'Services', sectionId: 'services' },
  { label: 'Industries', sectionId: 'industries' },
  { label: 'How It Works', sectionId: 'how-it-works' },
  { label: 'Contact', sectionId: 'contact' },
]

function handleNavClick(sectionId: string): void {
  const target = document.getElementById(sectionId)
  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

export default function Footer(): React.JSX.Element {
  return (
    <footer className="border-t border-[#1a1a1a] bg-[#080808]" style={{ padding: '48px 0' }}>
      <div
        className="mx-auto max-w-6xl"
        style={{
          paddingLeft: 'clamp(24px, 5vw, 80px)',
          paddingRight: 'clamp(24px, 5vw, 80px)',
        }}
      >
        <div className="mb-10 flex flex-wrap items-center justify-between gap-8">
          <div
            className="font-bold tracking-[-0.02em]"
            style={{ fontSize: '18px' }}
          >
            <span className="text-[#ffffff]">noctiluca</span>
            <span className="text-[#00d4ff]">.ai</span>
          </div>

          <nav className="flex flex-row flex-wrap gap-8">
            {navLinks.map((link) => (
              <button
                key={link.sectionId}
                type="button"
                onClick={() => handleNavClick(link.sectionId)}
                className="cursor-pointer border-none bg-transparent text-[#a1a1aa] no-underline transition-colors duration-200 hover:text-[#ffffff]"
                style={{ fontSize: '13px' }}
              >
                {link.label}
              </button>
            ))}
          </nav>

          <button
            type="button"
            className="cursor-pointer rounded-md border border-[#2a2a2a] bg-transparent px-5 py-2.5 font-medium text-[#ffffff] transition-all duration-200 hover:border-[#00d4ff] hover:text-[#00d4ff]"
            style={{ fontSize: '13px' }}
          >
            Book a call
          </button>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[#1a1a1a] pt-7">
          <p className="text-[#555555]" style={{ fontSize: '12px' }}>
            © 2026 noctiluca.ai — All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <button
              type="button"
              className="cursor-pointer border-none bg-transparent text-[#555555] transition-colors duration-200 hover:text-[#a1a1aa]"
              style={{ fontSize: '12px' }}
            >
              Privacy
            </button>
            <span className="text-[#555555]" style={{ fontSize: '12px' }}>
              ·
            </span>
            <button
              type="button"
              className="cursor-pointer border-none bg-transparent text-[#555555] transition-colors duration-200 hover:text-[#a1a1aa]"
              style={{ fontSize: '12px' }}
            >
              Terms
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
