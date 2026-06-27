'use client'

import { motion, type Variants } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function Hero(): React.JSX.Element {
  return (
    <section
      className="relative bg-[#0a0a0a]"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: '80px',
        paddingBottom: '80px',
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-80"
        style={{
          backgroundImage:
            'radial-gradient(circle, #1a1a1a 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute right-[-200px] bottom-[-200px] z-0 h-[500px] w-[500px] rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(0,212,255,0.06) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div
        className="relative z-10 mx-auto w-full max-w-5xl"
        style={{
          paddingLeft: 'clamp(24px, 5vw, 80px)',
          paddingRight: 'clamp(24px, 5vw, 80px)',
        }}
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <motion.div
            variants={itemVariants}
            className="mb-8 flex items-center gap-2"
          >
            <div
              className="h-2 w-2 shrink-0 rounded-full bg-[#00d4ff]"
              style={{ boxShadow: '0 0 8px rgba(0,212,255,0.6)' }}
            />
            <span
              className="text-[#a1a1aa] uppercase"
              style={{
                fontSize: '11px',
                letterSpacing: '3px',
              }}
            >
              AI Automation for Business
            </span>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-6">
            <h1
              className="m-0 font-bold text-[#ffffff]"
              style={{
                fontSize: 'clamp(2.2rem, 4vw, 3.6rem)',
                lineHeight: 1.08,
                letterSpacing: '-0.03em',
              }}
            >
              AI systems that run
            </h1>
            <h1
              className="m-0 font-bold text-[#ffffff]"
              style={{
                fontSize: 'clamp(2.2rem, 4vw, 3.6rem)',
                lineHeight: 1.08,
                letterSpacing: '-0.03em',
              }}
            >
              your business.
            </h1>
            <h1
              className="m-0 font-bold text-[#a1a1aa]"
              style={{
                fontSize: 'clamp(2.2rem, 4vw, 3.6rem)',
                lineHeight: 1.08,
                letterSpacing: '-0.03em',
              }}
            >
              On autopilot.
            </h1>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="mb-10 max-w-[460px] text-[#a1a1aa]"
            style={{ fontSize: '18px', maxWidth: '420px', lineHeight: 1.6 }}
          >
            We build the sales, operations, and support systems that run while
            you focus on growth. No fluff — just working AI.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mb-14 flex flex-row flex-wrap gap-4"
          >
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-lg border-none bg-[#00d4ff] px-6 py-3 font-semibold text-[#0a0a0a] transition-all duration-200 hover:bg-[#ffffff] hover:shadow-[0_0_20px_rgba(0,212,255,0.25)]"
            >
              Book a call
              <ArrowRight size={16} aria-hidden="true" />
            </button>
            <button
              type="button"
              className="rounded-lg border border-[#2a2a2a] bg-transparent px-6 py-3 font-medium text-[#ffffff] transition-all duration-200 hover:border-[#555555]"
            >
              See how it works
            </button>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-[#555555]"
            style={{ fontSize: '13px', letterSpacing: '0.5px' }}
          >
            Marketing Agencies · Recruitment · Real Estate · Logistics · Travel
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
