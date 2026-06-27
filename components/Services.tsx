'use client'

import { motion, type Variants } from 'framer-motion'
import {
  BarChart2,
  Bot,
  Calendar,
  Database,
  Magnet,
  MessageSquare,
  Phone,
  Workflow,
  Wrench,
  type LucideIcon,
} from 'lucide-react'

interface Service {
  icon: LucideIcon
  name: string
  description: string
}

const services: Service[] = [
  {
    icon: Bot,
    name: 'AI Sales Agents',
    description: 'Qualify and follow up with leads automatically, 24/7',
  },
  {
    icon: Phone,
    name: 'AI Calling Agents',
    description: 'Outbound voice AI that sounds human and converts',
  },
  {
    icon: Magnet,
    name: 'Lead Generation',
    description: 'Fill your pipeline with verified leads on autopilot',
  },
  {
    icon: Database,
    name: 'CRM Implementation',
    description: 'Your CRM set up, automated, and actually adopted',
  },
  {
    icon: Calendar,
    name: 'Appointment Booking',
    description: 'Prospects book themselves. No back-and-forth.',
  },
  {
    icon: MessageSquare,
    name: 'Customer Support AI',
    description: 'Instant, accurate responses across every channel',
  },
  {
    icon: Workflow,
    name: 'Workflow Automation',
    description: 'Eliminate the manual work slowing your operations down',
  },
  {
    icon: BarChart2,
    name: 'Analytics Dashboards',
    description: "Clear data on what's working. No guesswork.",
  },
  {
    icon: Wrench,
    name: 'Custom Internal Tools',
    description: 'Built for how your business actually runs',
  },
]

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.07,
    },
  },
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function Services(): React.JSX.Element {
  return (
    <section
      id="services"
      className="w-full bg-[#0a0a0a]"
      style={{ padding: '120px 0' }}
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
              marginBottom: '16px',
            }}
          >
            Services
          </p>
          <h2
            className="font-bold text-[#ffffff]"
            style={{
              fontSize: 'clamp(2rem, 3.5vw, 3rem)',
              letterSpacing: '-0.02em',
            }}
          >
            What we build for you
          </h2>
        </div>

        <motion.div
          className="grid grid-cols-1 gap-px bg-[#1a1a1a] md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((service) => {
            const Icon = service.icon

            return (
              <motion.div
                key={service.name}
                variants={cardVariants}
                className="group bg-[#0f0f0f] transition-all duration-200 ease-in-out hover:bg-[#141414]"
                style={{ padding: '32px 28px' }}
              >
                <Icon
                  size={22}
                  className="mb-5 text-[#00d4ff] transition-all duration-200 ease-in-out group-hover:drop-shadow-[0_0_12px_rgba(0,212,255,0.4)]"
                  aria-hidden="true"
                />
                <h3
                  className="font-semibold text-[#ffffff]"
                  style={{ fontSize: '15px', marginBottom: '8px' }}
                >
                  {service.name}
                </h3>
                <p
                  className="text-[#a1a1aa]"
                  style={{ fontSize: '13px', lineHeight: 1.6 }}
                >
                  {service.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
