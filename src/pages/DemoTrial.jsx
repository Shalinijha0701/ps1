import React, { useState } from 'react'
import { motion } from 'framer-motion'

const DemoTrial = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    companySize: '',
    role: '',
    securityNeeds: [],
    currentSolution: '',
    timeline: ''
  })

  const demoOptions = [
    {
      type: "Live Demo",
      title: "Schedule a Personalized Demo",
      description: "30-minute session with our security experts",
      features: ["Personalized walkthrough", "Q&A session", "Custom use case discussion"],
      cta: "Schedule Demo",
      duration: "30 minutes",
      icon: "🎯"
    },
    {
      type: "Free Trial",
      title: "14-Day Free Trial",
      description: "Full access to all security features",
      features: ["Complete feature access", "Real protection for up to 10 devices", "Email support"],
      cta: "Start Free Trial",
      duration: "14 days",
      icon: "🚀"
    },
    {
      type: "Security Assessment",
      title: "Free Security Assessment",
      description: "Understand your current security posture",
      features: ["Risk assessment", "Gap analysis", "Recommendation report"],
      cta: "Get Assessment",
      duration: "24 hours",
      icon: "📊"
    }
  ]

  const demoTypes = [
    { duration: "15 min", type: "Quick Overview" },
    { duration: "30 min", type: "Standard Demo" },
    { duration: "45 min", type: "Deep Dive + Q&A" }
  ]

  const handleInputChange = (field, value) => {
    if (field === 'securityNeeds') {
      const needs = [...formData.securityNeeds]
      if (needs.includes(value)) {
        setFormData({
          ...formData,
          securityNeeds: needs.filter(need => need !== value)
        })
      } else {
        setFormData({
          ...formData,
          securityNeeds: [...needs, value]
        })
      }
    } else {
      setFormData({
        ...formData,
        [field]: value
      })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Handle form submission
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-20"
    >
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="hero-title mb-6">
              Experience Osto.one Security
            </h1>
            <p className="hero-subtitle mb-8">
              See how enterprise-grade security can be deployed in minutes, not weeks
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative max-w-4xl mx-auto"
          >
            {/* Demo preview */}
            <div className="bg-white rounded-xl shadow-large p-8">
              <div className="bg-gradient-to-br from-primary-100 to-secondary-100 rounded-lg h-64 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🖥️</div>
                  <p className="text-neutral-600 text-lg">Interactive Demo Preview</p>
                  <p className="text-neutral-500 text-sm mt-2">Experience our security platform firsthand</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Demo Options */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Choose Your Experience</h2>
            <p className="section-subtitle">
              Multiple ways to explore Osto.one security solutions
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {demoOptions.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card hover:shadow-large transform hover:-translate-y-2"
              >
                <div className="text-4xl mb-4">{option.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{option.title}</h3>
                <p className="text-neutral-600 mb-4">{option.description}</p>

                <div className="space-y-2 mb-6">
                  {option.features.map((feature, i) => (
                    <div key={i} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-sm text-neutral-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm text-neutral-500">Duration:</span>
                  <span className="font-medium text-blue-600">{option.duration}</span>
                </div>

                <button className="btn-primary w-full">
                  {option.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Generation Form */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Get Started Today</h2>
              <p className="text-lg text-neutral-600 mb-8">
                Tell us about your security needs and we'll provide personalized recommendations and access to our platform.
              </p>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">Instant Setup</h3>
                    <p className="text-neutral-600 text-sm">Get protected in 9 minutes</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">Enterprise Grade</h3>
                    <p className="text-neutral-600 text-sm">SOC 2 compliant security</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                      <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">Expert Support</h3>
                    <p className="text-neutral-600 text-sm">24/7 security team assistance</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="card"
            >
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => handleInputChange('fullName', e.target.value)}
                      className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => handleInputChange('company', e.target.value)}
                    className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1">
                      Company Size *
                    </label>
                    <select
                      required
                      value={formData.companySize}
                      onChange={(e) => handleInputChange('companySize', e.target.value)}
                      className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select size</option>
                      <option value="1-10">1-10</option>
                      <option value="11-50">11-50</option>
                      <option value="51-200">51-200</option>
                      <option value="200+">200+</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1">
                      Your Role *
                    </label>
                    <select
                      required
                      value={formData.role}
                      onChange={(e) => handleInputChange('role', e.target.value)}
                      className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select role</option>
                      <option value="CEO/Founder">CEO/Founder</option>
                      <option value="CTO">CTO</option>
                      <option value="IT Manager">IT Manager</option>
                      <option value="Security Manager">Security Manager</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Security Needs
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {['Endpoint Protection', 'Network Security', 'Cloud Security', 'Compliance', 'VAPT'].map((need) => (
                      <label key={need} className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          checked={formData.securityNeeds.includes(need)}
                          onChange={() => handleInputChange('securityNeeds', need)}
                          className="w-4 h-4 text-blue-600 border-neutral-300 rounded focus:ring-blue-500"
                        />
                        <span className="text-sm text-neutral-700">{need}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">
                    Current Security Solution
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., Norton, McAfee, or None"
                    value={formData.currentSolution}
                    onChange={(e) => handleInputChange('currentSolution', e.target.value)}
                    className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">
                    Implementation Timeline
                  </label>
                  <select
                    value={formData.timeline}
                    onChange={(e) => handleInputChange('timeline', e.target.value)}
                    className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select timeline</option>
                    <option value="Immediate">Immediate</option>
                    <option value="Within 1 month">Within 1 month</option>
                    <option value="1-3 months">1-3 months</option>
                    <option value="3+ months">3+ months</option>
                  </select>
                </div>

                <button type="submit" className="btn-primary w-full">
                  Get My Security Assessment
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Calendar Integration */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Schedule Your Demo</h2>
            <p className="section-subtitle">
              Choose a convenient time for your personalized security demonstration
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="card"
              >
                <h3 className="text-xl font-semibold mb-6">Demo Types</h3>

                <div className="space-y-4">
                  {demoTypes.map((demo, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border border-neutral-200 rounded-lg hover:border-blue-300 transition-colors duration-200">
                      <div>
                        <h4 className="font-medium">{demo.type}</h4>
                        <p className="text-sm text-neutral-600">Duration: {demo.duration}</p>
                      </div>
                      <button className="btn-outline text-sm px-4 py-2">
                        Select
                      </button>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-700">
                    <strong>Note:</strong> All demos are conducted by our security experts and can be customized to your specific use cases and requirements.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="card"
              >
                <h3 className="text-xl font-semibold mb-6">Calendar Integration</h3>

                {/* Calendar placeholder */}
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg h-64 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-4">📅</div>
                    <p className="text-neutral-600">Calendly Integration</p>
                    <p className="text-neutral-500 text-sm mt-2">Book your demo slot</p>
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="font-medium mb-3">What to Expect:</h4>
                  <ul className="space-y-2 text-sm text-neutral-600">
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                      <span>Live product demonstration</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                      <span>Discussion of your security needs</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                      <span>Custom implementation plan</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                      <span>Q&A with security experts</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Instant Demo */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Interactive Product Tour</h2>
            <p className="section-subtitle">
              Explore our platform with this self-guided tour
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="card max-w-4xl mx-auto"
          >
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-6">Tour Features</h3>

                <div className="space-y-4">
                  {[
                    "Dashboard walkthrough",
                    "Threat detection simulation",
                    "Policy configuration demo",
                    "Reporting capabilities"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                        <span className="text-blue-600 font-bold text-sm">{index + 1}</span>
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <button className="btn-primary mt-6">
                  Start Interactive Tour
                </button>
              </div>

              <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-lg h-64 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl mb-4">🎮</div>
                  <p className="text-neutral-600">Interactive Demo</p>
                  <p className="text-neutral-500 text-sm mt-2">Self-guided product tour</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}

export default DemoTrial