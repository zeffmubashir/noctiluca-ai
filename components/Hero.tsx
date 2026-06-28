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

const cardStyle = {
  background: 'rgba(255,255,255,0.03)',
  border: '1px solid rgba(255,255,255,0.08)',
  borderRadius: '12px',
  padding: '20px 24px',
  backdropFilter: 'blur(12px)',
} as const

const cardTransition = {
  duration: 0.6,
  ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
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
        <div className="flex flex-col md:flex-row md:items-center md:gap-12">
          <div className="w-full md:w-1/2">
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
                  AI Infrastructure · Not Just Automation
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
                  Autonomous systems for
                </h1>
                <h1
                  className="m-0 font-bold text-[#ffffff]"
                  style={{
                    fontSize: 'clamp(2.2rem, 4vw, 3.6rem)',
                    lineHeight: 1.08,
                    letterSpacing: '-0.03em',
                  }}
                >
                  businesses that scale.
                </h1>
                <h1
                  className="m-0 font-bold text-[#a1a1aa]"
                  style={{
                    fontSize: 'clamp(2.2rem, 4vw, 3.6rem)',
                    lineHeight: 1.08,
                    letterSpacing: '-0.03em',
                  }}
                >
                  Built to run without you.
                </h1>
              </motion.div>

              <motion.p
                variants={itemVariants}
                className="mb-10 max-w-[460px] text-[#a1a1aa]"
                style={{ fontSize: '18px', maxWidth: '420px', lineHeight: 1.6 }}
              >
                We engineer the AI infrastructure behind your sales, ops, and
                support — so your team stops doing work that machines should handle.
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
                94% reduction in manual work · 3x faster lead response · 4,200+ hours reclaimed annually
              </motion.p>
            </motion.div>
          </div>

          <div
            className="relative hidden w-1/2 flex-col justify-center gap-4 pl-12 md:flex"
          >
            <motion.div
              style={cardStyle}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ ...cardTransition, delay: 0.2 }}
            >
              <p
                className="uppercase text-[#a1a1aa]"
                style={{
                  fontSize: '10px',
                  letterSpacing: '2px',
                  marginBottom: '8px',
                }}
              >
                LEADS PROCESSED TODAY
              </p>
              <p
                className="font-bold text-[#ffffff]"
                style={{ fontSize: '32px' }}
              >
                1,247
              </p>
              <div className="mt-2 flex gap-1">
                <div className="h-1.5 w-1.5 rounded-full bg-[#22c55e]" />
                <div className="h-1.5 w-1.5 rounded-full bg-[#22c55e]" />
                <div className="h-1.5 w-1.5 rounded-full bg-[#22c55e]" />
                <div className="h-1.5 w-1.5 rounded-full bg-[#eab308]" />
                <div className="h-1.5 w-1.5 rounded-full bg-[#00d4ff]" />
              </div>
            </motion.div>

            <motion.div
              style={cardStyle}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ ...cardTransition, delay: 0.35 }}
            >
              <p
                className="uppercase text-[#a1a1aa]"
                style={{
                  fontSize: '10px',
                  letterSpacing: '2px',
                  marginBottom: '8px',
                }}
              >
                RESPONSE TIME
              </p>
              <p
                className="font-bold text-[#00d4ff]"
                style={{ fontSize: '28px' }}
              >
                &lt; 2 min
              </p>
              <p className="text-[#555555]" style={{ fontSize: '11px' }}>
                avg across all channels
              </p>
            </motion.div>

            <motion.div
              style={cardStyle}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ ...cardTransition, delay: 0.5 }}
            >
              <p
                className="uppercase text-[#a1a1aa]"
                style={{
                  fontSize: '10px',
                  letterSpacing: '2px',
                  marginBottom: '8px',
                }}
              >
                HOURS SAVED THIS MONTH
              </p>
              <p
                className="font-bold text-[#ffffff]"
                style={{ fontSize: '28px' }}
              >
                342h
              </p>
              <div
                className="mt-2 h-[3px] w-full rounded-full bg-[#1a1a1a]"
              >
                <div
                  className="h-full w-[78%] rounded-full"
                  style={{
                    background: 'linear-gradient(to right, #00d4ff, #0088aa)',
                  }}
                />
              </div>
            </motion.div>

            <motion.div
              style={cardStyle}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ ...cardTransition, delay: 0.65 }}
            >
              <div className="flex items-center justify-between">
                <span className="text-[#a1a1aa]" style={{ fontSize: '12px' }}>
                  System status
                </span>
                <div className="flex items-center gap-1.5">
                  <div className="h-1.5 w-1.5 rounded-full bg-[#22c55e] animate-glow-pulse" />
                  <span className="text-[#22c55e]" style={{ fontSize: '12px' }}>
                    All systems live
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
