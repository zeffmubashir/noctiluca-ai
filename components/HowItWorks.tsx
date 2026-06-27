'use client'

import { motion, type Variants } from 'framer-motion'
import {
  CheckCircle,
  Hammer,
  PenLine,
  Search,
  type LucideIcon,
} from 'lucide-react'

interface Step {
  number: string
  icon: LucideIcon
  title: string
  description: string
}

const steps: Step[] = [
  {
    number: '01',
    icon: Search,
    title: 'Audit',
    description:
      'We map your operations and find exactly where AI creates the most leverage.',
  },
  {
    number: '02',
    icon: PenLine,
    title: 'Design',
    description:
      'We spec the full system — tools, integrations, automations, and handoffs.',
  },
  {
    number: '03',
    icon: Hammer,
    title: 'Build',
    description:
      'We build, test, and refine until everything runs cleanly without manual input.',
  },
  {
    number: '04',
    icon: CheckCircle,
    title: 'Hand Over',
    description:
      'You get a running system and the knowledge to use it from day one.',
  },
]

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const stepVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function HowItWorks(): React.JSX.Element {
  return (
    <section
      id="how-it-works"
      className="w-full bg-[#0a0a0a]"
      style={{ padding: '100px 0' }}
    >
      <div
        className="mx-auto max-w-6xl"
        style={{
          paddingLeft: 'clamp(24px, 5vw, 80px)',
          paddingRight: 'clamp(24px, 5vw, 80px)',
        }}
      >
        <div style={{ marginBottom: '40px' }}>
          <p
            className="uppercase text-[#00d4ff]"
            style={{
              fontSize: '11px',
              letterSpacing: '3px',
              marginBottom: '14px',
            }}
          >
            Process
          </p>
          <h2
            className="font-bold text-[#ffffff]"
            style={{
              fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
              letterSpacing: '-0.02em',
            }}
          >
            From brief to running system in weeks
          </h2>
        </div>

        <motion.div
          className="grid grid-cols-1 gap-px bg-[#1a1a1a] md:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {steps.map((step) => {
            const Icon = step.icon

            return (
              <motion.div
                key={step.number}
                variants={stepVariants}
                className="bg-[#0a0a0a]"
                style={{ padding: '36px 28px' }}
              >
                <p
                  className="font-semibold text-[#00d4ff]"
                  style={{
                    fontSize: '11px',
                    letterSpacing: '3px',
                    marginBottom: '20px',
                  }}
                >
                  {step.number}
                </p>
                <Icon
                  size={22}
                  className="mb-4 text-[#ffffff]"
                  aria-hidden="true"
                />
                <h3
                  className="font-semibold text-[#ffffff]"
                  style={{ fontSize: '16px', marginBottom: '10px' }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-[#a1a1aa]"
                  style={{ fontSize: '13px', lineHeight: 1.7 }}
                >
                  {step.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
