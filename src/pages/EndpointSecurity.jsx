import React from 'react'
import { motion } from 'framer-motion'
import CTASection from '../components/UI/CTASection'

const EndpointSecurity = () => {
  const features = [
    {
      name: "Next-Gen Antimalware Engine",
      description: "AI-powered threat detection that stops zero-day attacks",
      benefits: ["Real-time scanning", "Behavioral analysis", "Cloud intelligence"],
      visual: "threat-detection"
    },
    {
      name: "Device Control",
      description: "Granular control over USB devices and external connections",
      benefits: ["USB blocking", "Device whitelisting", "Activity logging"],
      visual: "device-control"
    },
    {
      name: "Application Control",
      description: "Intelligent application management and execution control",
      benefits: ["App whitelisting", "Execution policies", "Risk assessment"],
      visual: "app-control"
    },
    {
      name: "Data Leakage Prevention (DLP)",
      description: "Prevent sensitive data from leaving your organization",
      benefits: ["PII detection", "Content inspection", "Policy enforcement"],
      visual: "dlp-dashboard"
    }
  ]

  const useCases = [
    {
      scenario: "Malicious File Upload",
      description: "Employee accidentally downloads infected file",
      ostoResponse: "Automatic quarantine and threat neutralization",
      outcome: "Zero impact on business operations"
    },
    {
      scenario: "USB Device Insertion",
      description: "Unknown USB device connected to workstation",
      ostoResponse: "Immediate blocking and security team notification",
      outcome: "Prevented potential data breach"
    },
    {
      scenario: "PII Data Transfer",
      description: "Employee attempts to email customer data",
      ostoResponse: "DLP engine blocks transfer and logs incident",
      outcome: "Compliance violation prevented"
    }
  ]

  const benefits = [
    { metric: "99.9%", description: "Malware detection rate" },
    { metric: "< 1 min", description: "Threat response time" },
    { metric: "Zero", description: "False positives with AI engine" },
    { metric: "24/7", description: "Continuous monitoring" }
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-20 bg-black"
    >
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-black via-gray-900 to-slate-800">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="hero-title mb-6 text-white">
                Advanced Endpoint Security
              </h1>
              <p className="hero-subtitle mb-8 text-gray-300">
                Protect every device with next-generation antimalware and intelligent controls that adapt to modern threats
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">Start Free Trial</button>
                <button className="bg-transparent text-white border-2 border-white hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition-colors duration-200">Schedule Demo</button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* Endpoint Protection Dashboard Mockup */}
              <div className="bg-gray-900 border border-gray-800 rounded-xl shadow-large p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-white">Endpoint Protection Dashboard</h3>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm text-gray-300">Protected</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-green-900/30 border border-green-800 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-green-400 mb-1">156</div>
                    <div className="text-sm text-gray-300">Devices Protected</div>
                  </div>
                  <div className="bg-red-900/30 border border-red-800 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-red-400 mb-1">23</div>
                    <div className="text-sm text-gray-300">Threats Blocked Today</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-900 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h12a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-sm font-medium text-white">Antimalware Engine</span>
                    </div>
                    <span className="text-xs bg-green-900 text-green-300 px-2 py-1 rounded-full">Active</span>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-purple-900 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-sm font-medium text-white">Device Control</span>
                    </div>
                    <span className="text-xs bg-green-900 text-green-300 px-2 py-1 rounded-full">Active</span>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-orange-900 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-sm font-medium text-white">DLP Protection</span>
                    </div>
                    <span className="text-xs bg-green-900 text-green-300 px-2 py-1 rounded-full">Active</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Deep Dive */}
      <section className="section-padding bg-gray-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title text-white">Complete Endpoint Protection</h2>
            <p className="section-subtitle text-gray-300">
              Advanced security features that work together to protect your devices and data
            </p>
          </motion.div>

          <div className="space-y-16">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-white">{feature.name}</h3>
                  <p className="text-lg text-gray-300 mb-6">{feature.description}</p>

                  <div className="space-y-3">
                    {feature.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                        <span className="text-gray-300">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  {/* Feature visualization mockup */}
                  <div className="bg-gray-800 border border-gray-700 rounded-xl shadow-large p-6">
                    <div className="bg-gradient-to-br from-gray-700 to-gray-600 rounded-lg h-64 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-4xl mb-4">{feature.visual === 'threat-detection' ? '🛡️' : feature.visual === 'device-control' ? '🔌' : feature.visual === 'app-control' ? '📱' : '🔒'}</div>
                        <p className="text-gray-300">{feature.name} Interface</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section-padding bg-black">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title text-white">Real-World Protection Scenarios</h2>
            <p className="section-subtitle text-gray-300">
              See how Osto endpoint security responds to actual threats
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900 border border-gray-800 rounded-xl shadow-large hover:shadow-xl hover:border-cyan-500 transform hover:-translate-y-2 transition-all duration-300 p-6"
              >
                <h3 className="text-xl font-semibold mb-4 text-cyan-400">{useCase.scenario}</h3>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-white mb-2">Threat:</h4>
                    <p className="text-gray-300 text-sm">{useCase.description}</p>
                  </div>

                  <div>
                    <h4 className="font-medium text-white mb-2">Osto Response:</h4>
                    <p className="text-gray-300 text-sm">{useCase.ostoResponse}</p>
                  </div>

                  <div>
                    <h4 className="font-medium text-white mb-2">Outcome:</h4>
                    <p className="text-green-400 text-sm font-medium">{useCase.outcome}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-gray-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title text-white">Business Impact</h2>
            <p className="section-subtitle text-gray-300">
              Measurable security improvements for your startup
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl lg:text-5xl font-bold text-cyan-400 mb-4">
                  {benefit.metric}
                </div>
                <div className="text-gray-300 font-medium">{benefit.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Protect Your Endpoints?"
        description="Get enterprise-grade endpoint security deployed in minutes, not weeks"
      />
    </motion.div>
  )
}

export default EndpointSecurity