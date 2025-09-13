import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "How quickly can we get protected?",
      answer: "Our average deployment time is just 9 minutes. Once you sign up, our automated onboarding will guide you through the setup process, and you'll have complete protection running within minutes."
    },
    {
      question: "Do you support small startups?",
      answer: "Absolutely! We specifically designed our platform for startups and growing businesses. Our pricing is startup-friendly, and we offer dedicated support to help small teams get enterprise-level security."
    },
    {
      question: "What makes Osto.one different?",
      answer: "We provide enterprise-grade cybersecurity that's specifically designed for startups. Unlike complex enterprise solutions, we focus on rapid deployment, affordability, and ease of use without compromising security."
    },
    {
      question: "Is there a free trial available?",
      answer: "Yes! We offer a 30-day free trial so you can experience our complete security suite. No credit card required, and you can cancel anytime during the trial period."
    },
    {
      question: "What support do you provide?",
      answer: "We provide 24/7 technical support, dedicated onboarding assistance, regular security updates, and access to our cybersecurity experts. Our team is here to ensure your security is always optimized."
    }
  ]

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div key={index} className="border border-neutral-200 rounded-lg overflow-hidden">
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full px-6 py-4 text-left flex items-center justify-between bg-white hover:bg-neutral-50 transition-colors duration-200"
          >
            <h3 className="font-semibold text-neutral-900">{faq.question}</h3>
            <motion.svg
              animate={{ rotate: openIndex === index ? 180 : 0 }}
              transition={{ duration: 0.2 }}
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
                  <p className="text-neutral-700">{faq.answer}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
}

export default FAQAccordion