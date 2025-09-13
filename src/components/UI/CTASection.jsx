import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const CTASection = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600">
      <div className="container-custom">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title text-white mb-6">
              Ready to Secure Your Business?
            </h2>
            <p className="section-subtitle text-blue-100 mb-8">
              Join hundreds of startups that trust Osto for their cybersecurity needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/demo"
                className="btn btn-primary bg-white text-primary-600 hover:bg-neutral-100"
              >
                Start Free Trial
              </Link>
              <Link
                to="/contact"
                className="btn btn-outline bg-transparent text-white border-white hover:bg-white/10"
              >
                Talk to Expert
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CTASection