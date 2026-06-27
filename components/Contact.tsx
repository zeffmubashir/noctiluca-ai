'use client'

import { useState, type FormEvent, type ChangeEvent } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, Send } from 'lucide-react'

interface FormState {
  name: string
  email: string
  company: string
  message: string
}

const trustPoints: string[] = [
  'No sales pitch — just a straight conversation',
  'Response within 24 hours',
  'Free audit of your current operations',
]

const inputClassName =
  'w-full rounded-md border border-[#1f1f1f] bg-[#0f0f0f] px-4 py-3.5 text-sm text-[#ffffff] outline-none transition-all duration-200 placeholder:text-[#555555] focus:border-[#00d4ff] focus:shadow-[0_0_0_2px_rgba(0,212,255,0.08)]'

export default function Contact(): React.JSX.Element {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    company: '',
    message: '',
  })
  const [submitting, setSubmitting] = useState<boolean>(false)
  const [submitted, setSubmitted] = useState<boolean>(false)
  const [error, setError] = useState<string>('')

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault()
    setError('')

    const { name, email, company, message } = form

    if (
      !name.trim() ||
      !email.trim() ||
      !company.trim() ||
      !message.trim() ||
      !email.includes('@')
    ) {
      setError('Please fill in all fields with a valid email.')
      return
    }

    setSubmitting(true)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, company, message }),
      })

      if (res.ok) {
        setSubmitted(true)
      } else {
        setError('Something went wrong. Please try again.')
        setSubmitting(false)
      }
    } catch {
      setError('Something went wrong. Please try again.')
      setSubmitting(false)
    }
  }

  return (
    <section
      id="contact"
      className="w-full bg-[#080808]"
      style={{ padding: '100px 0' }}
    >
      <div
        className="mx-auto grid max-w-6xl grid-cols-1 gap-10 md:grid-cols-12 md:gap-20"
        style={{
          paddingLeft: 'clamp(24px, 5vw, 80px)',
          paddingRight: 'clamp(24px, 5vw, 80px)',
        }}
      >
        <motion.div
          className="md:col-span-5"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          <p
            className="uppercase text-[#00d4ff]"
            style={{
              fontSize: '11px',
              letterSpacing: '3px',
              marginBottom: '14px',
            }}
          >
            Contact
          </p>
          <h2
            className="font-bold text-[#ffffff]"
            style={{
              fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
              letterSpacing: '-0.02em',
              marginBottom: '20px',
            }}
          >
            Ready to automate your operations?
          </h2>
          <p
            className="max-w-[340px] text-[#a1a1aa]"
            style={{ fontSize: '15px', lineHeight: 1.7 }}
          >
            Tell us what you&apos;re working on. We&apos;ll come back within 24
            hours with a clear plan.
          </p>

          <div style={{ marginTop: '40px' }}>
            {trustPoints.map((point) => (
              <div
                key={point}
                className="mb-3 flex items-start gap-2.5 last:mb-0"
              >
                <CheckCircle
                  size={14}
                  className="mt-0.5 shrink-0 text-[#00d4ff]"
                  aria-hidden="true"
                />
                <span className="text-[#a1a1aa]" style={{ fontSize: '13px' }}>
                  {point}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="md:col-span-6"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.1,
          }}
          viewport={{ once: true }}
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={form.name}
              onChange={handleChange}
              className={inputClassName}
              disabled={submitting || submitted}
            />
            <input
              type="email"
              name="email"
              placeholder="Work email"
              value={form.email}
              onChange={handleChange}
              className={inputClassName}
              disabled={submitting || submitted}
            />
            <input
              type="text"
              name="company"
              placeholder="Company name"
              value={form.company}
              onChange={handleChange}
              className={inputClassName}
              disabled={submitting || submitted}
            />
            <textarea
              name="message"
              rows={4}
              placeholder="What are you working on?"
              value={form.message}
              onChange={handleChange}
              className={`${inputClassName} resize-none`}
              disabled={submitting || submitted}
            />

            {error && (
              <p className="text-[#ef4444]" style={{ fontSize: '13px' }}>
                {error}
              </p>
            )}

            {submitted ? (
              <p className="text-[#22c55e]" style={{ fontSize: '14px' }}>
                Message sent — we&apos;ll be in touch.
              </p>
            ) : (
              <button
                type="submit"
                disabled={submitting}
                className="flex w-full items-center justify-center gap-2 rounded-md border border-[#00d4ff] bg-[#0f0f0f] py-3.5 font-semibold text-[#00d4ff] transition-all duration-200 hover:bg-[#00d4ff] hover:text-[#0a0a0a] disabled:cursor-not-allowed disabled:opacity-70"
                style={{ fontSize: '15px' }}
              >
                {submitting ? (
                  'Sending...'
                ) : (
                  <>
                    Send message
                    <Send size={16} aria-hidden="true" />
                  </>
                )}
              </button>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  )
}
