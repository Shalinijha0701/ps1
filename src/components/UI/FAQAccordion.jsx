import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const FAQAccordion = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  if (!faqs || faqs.length === 0) {
    // Default FAQs for cybersecurity
    faqs = [
      {
        question: "How quickly can I get protected with Osto.one?",
        answer: "Our platform is designed for rapid deployment. Most startups are fully protected within 9 minutes of signing up, compared to traditional solutions that can take weeks to implement."
      },
      {
        question: "What makes Osto.one different from other cybersecurity solutions?",
        answer: "We're specifically built for startups with enterprise-grade security that's affordable and easy to manage. Our AI-powered platform requires no dedicated security team and scales with your growth."
      },
      {
        question: "Do I need technical expertise to use Osto.one?",
        answer: "No technical expertise required. Our platform is designed to be managed by anyone, with intuitive interfaces and automated security policies that work out of the box."
      },
      {
        question: "How does pricing work for growing startups?",
        answer: "We offer transparent, startup-friendly pricing that scales with your team size. Start with our free trial and only pay for what you use as you grow."
      },
      {
        question: "What compliance frameworks do you support?",
        answer: "We support major compliance frameworks including SOC 2 Type II, ISO 27001, GDPR, and HIPAA. Our automated compliance tools help you maintain certification with minimal effort."
      },
      {
        question: "Is my data secure with Osto.one?",
        answer: "Absolutely. We follow industry best practices with end-to-end encryption, zero-trust architecture, and regular security audits. Your data is protected with the same standards we use for our own operations."
      }
    ]
  }

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="border border-neutral-200 rounded-lg overflow-hidden"
        >
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full px-6 py-4 text-left bg-white hover:bg-neutral-50 transition-colors duration-200 flex items-center justify-between"
          >
            <span className="font-medium text-neutral-900">{faq.question}</span>
            <motion.svg
              animate={{ rotate: openIndex === index ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="w-5 h-5 text-neutral-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </motion.svg>
          </button>

          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 py-4 bg-neutral-50 border-t border-neutral-200">
                  <p className="text-neutral-600">{faq.answer}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  )
}

export default FAQAccordion