'use client'

import { motion, type Variants } from 'framer-motion'
import {
  Building2,
  Megaphone,
  Plane,
  Truck,
  Users,
  type LucideIcon,
} from 'lucide-react'

interface Industry {
  icon: LucideIcon
  name: string
  value: string
}

const industries: Industry[] = [
  {
    icon: Megaphone,
    name: 'Marketing Agencies',
    value: 'More leads, less manual outreach',
  },
  {
    icon: Users,
    name: 'Recruitment',
    value: 'Source, screen, and place faster',
  },
  {
    icon: Building2,
    name: 'Real Estate',
    value: 'Automate follow-up, never lose a lead',
  },
  {
    icon: Truck,
    name: 'Logistics',
    value: 'Ops that run without constant oversight',
  },
  {
    icon: Plane,
    name: 'Travel',
    value: 'Bookings and support on autopilot',
  },
]

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const tileVariants: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function Industries(): React.JSX.Element {
  return (
    <section
      id="industries"
      className="w-full bg-[#080808]"
      style={{ padding: '100px 0' }}
    >
      <div
        className="mx-auto max-w-6xl"
        style={{
          paddingLeft: 'clamp(24px, 5vw, 80px)',
          paddingRight: 'clamp(24px, 5vw, 80px)',
        }}
      >
        <div style={{ marginBottom: '56px' }}>
          <p
            className="uppercase text-[#00d4ff]"
            style={{
              fontSize: '11px',
              letterSpacing: '3px',
              marginBottom: '14px',
            }}
          >
            Industries
          </p>
          <h2
            className="font-bold text-[#ffffff]"
            style={{
              fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
              letterSpacing: '-0.02em',
            }}
          >
            Built for businesses that move fast
          </h2>
        </div>

        <motion.div
          className="flex flex-wrap gap-px"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          {industries.map((industry) => {
            const Icon = industry.icon

            return (
              <motion.div
                key={industry.name}
                variants={tileVariants}
                className="group min-w-[200px] flex-1 bg-[#0f0f0f] transition-all duration-200 ease-in-out hover:bg-[#141414]"
                style={{ padding: '36px 28px' }}
              >
                <Icon
                  size={20}
                  className="mb-4 text-[#00d4ff] transition-all duration-200 ease-in-out group-hover:drop-shadow-[0_0_8px_rgba(0,212,255,0.35)]"
                  aria-hidden="true"
                />
                <h3
                  className="font-semibold text-[#ffffff]"
                  style={{ fontSize: '15px', marginBottom: '6px' }}
                >
                  {industry.name}
                </h3>
                <p className="text-[#a1a1aa]" style={{ fontSize: '13px' }}>
                  {industry.value}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
