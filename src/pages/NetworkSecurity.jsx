import React from 'react'
import { motion } from 'framer-motion'
import CTASection from '../components/UI/CTASection'

const NetworkSecurity = () => {
  const features = [
    {
      name: "Zero Trust Network Access (ZTNA)",
      description: "Secure remote access with identity verification",
      capabilities: ["Identity-based access", "Micro-segmentation", "Conditional access"],
      icon: "🔐"
    },
    {
      name: "Advanced Web Filtering",
      description: "Intelligent content filtering and URL reputation",
      capabilities: ["Category-based blocking", "Real-time analysis", "Custom policies"],
      icon: "🌐"
    },
    {
      name: "Traffic Analysis Engine",
      description: "Deep packet inspection and behavior analysis",
      capabilities: ["Anomaly detection", "Bandwidth monitoring", "Threat correlation"],
      icon: "📊"
    }
  ]

  const benefits = [
    {
      icon: "🔒",
      title: "Zero-Trust Architecture",
      description: "Never trust, always verify approach"
    },
    {
      icon: "⚡",
      title: "Real-Time Protection",
      description: "Instant threat detection and blocking"
    },
    {
      icon: "📊",
      title: "Comprehensive Visibility",
      description: "Complete network traffic insights"
    },
    {
      icon: "🎯",
      title: "Precision Filtering",
      description: "Advanced web content control"
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-20"
    >
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-secondary-50 to-primary-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="hero-title mb-6">
                Zero-Trust Network Security
              </h1>
              <p className="hero-subtitle mb-8">
                Advanced network protection with real-time threat intelligence and identity-based access control
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn-primary">Start Free Trial</button>
                <button className="btn-secondary">Schedule Demo</button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* Network Topology Visualization */}
              <div className="bg-white rounded-xl shadow-large p-6">
                <h3 className="text-lg font-semibold mb-6">Network Security Overview</h3>

                {/* Network diagram mockup */}
                <div className="relative">
                  {/* Central hub */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center border-4 border-primary-500">
                    <span className="text-primary-600 font-bold text-xs">ZTNA</span>
                  </div>

                  {/* Connected devices */}
                  <div className="relative h-64 w-full">
                    {/* Laptop */}
                    <div className="absolute top-4 left-8 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v8a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm1 2v6h12V6H4z" clipRule="evenodd" />
                      </svg>
                    </div>

                    {/* Mobile */}
                    <div className="absolute top-4 right-8 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                      </svg>
                    </div>

                    {/* Server */}
                    <div className="absolute bottom-4 left-8 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clipRule="evenodd" />
                      </svg>
                    </div>

                    {/* Cloud */}
                    <div className="absolute bottom-4 right-8 w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-cyan-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z" />
                      </svg>
                    </div>

                    {/* Connection lines */}
                    <svg className="absolute inset-0 w-full h-full">
                      <line x1="20%" y1="25%" x2="45%" y2="45%" stroke="#3b82f6" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse" />
                      <line x1="80%" y1="25%" x2="55%" y2="45%" stroke="#3b82f6" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse" />
                      <line x1="20%" y1="75%" x2="45%" y2="55%" stroke="#3b82f6" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse" />
                      <line x1="80%" y1="75%" x2="55%" y2="55%" stroke="#3b82f6" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse" />
                    </svg>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="bg-green-50 rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-green-600">4</div>
                    <div className="text-xs text-neutral-600">Protected Devices</div>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-blue-600">100%</div>
                    <div className="text-xs text-neutral-600">Secure Connections</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Deep Dive */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Network Protection Features</h2>
            <p className="section-subtitle">
              Comprehensive network security that adapts to modern threats and remote work
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
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-2xl lg:text-3xl font-bold mb-4">{feature.name}</h3>
                  <p className="text-lg text-neutral-600 mb-6">{feature.description}</p>

                  <div className="space-y-3">
                    {feature.capabilities.map((capability, i) => (
                      <div key={i} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-secondary-500 rounded-full"></div>
                        <span className="text-neutral-700">{capability}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="bg-gradient-to-br from-secondary-50 to-primary-50 rounded-xl p-8">
                    <div className="bg-white rounded-lg shadow-medium p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="font-semibold">{feature.name}</h4>
                        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                      </div>

                      {/* Mock interface based on feature type */}
                      {index === 0 && (
                        <div className="space-y-3">
                          <div className="flex items-center justify-between p-3 bg-green-50 rounded">
                            <span className="text-sm">john@startup.com</span>
                            <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Verified</span>
                          </div>
                          <div className="flex items-center justify-between p-3 bg-yellow-50 rounded">
                            <span className="text-sm">unknown@external.com</span>
                            <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">Pending</span>
                          </div>
                          <div className="flex items-center justify-between p-3 bg-red-50 rounded">
                            <span className="text-sm">threat@malicious.com</span>
                            <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded-full">Blocked</span>
                          </div>
                        </div>
                      )}

                      {index === 1 && (
                        <div className="space-y-3">
                          <div className="flex items-center justify-between p-3 bg-neutral-50 rounded">
                            <span className="text-sm">google.com</span>
                            <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Allowed</span>
                          </div>
                          <div className="flex items-center justify-between p-3 bg-red-50 rounded">
                            <span className="text-sm">malicious-site.com</span>
                            <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded-full">Blocked</span>
                          </div>
                          <div className="flex items-center justify-between p-3 bg-yellow-50 rounded">
                            <span className="text-sm">social-media.com</span>
                            <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">Limited</span>
                          </div>
                        </div>
                      )}

                      {index === 2 && (
                        <div className="space-y-3">
                          <div className="grid grid-cols-2 gap-3">
                            <div className="bg-blue-50 rounded p-2 text-center">
                              <div className="text-lg font-bold text-blue-600">1.2GB</div>
                              <div className="text-xs text-neutral-600">Traffic Today</div>
                            </div>
                            <div className="bg-green-50 rounded p-2 text-center">
                              <div className="text-lg font-bold text-green-600">15</div>
                              <div className="text-xs text-neutral-600">Threats Blocked</div>
                            </div>
                          </div>
                          <div className="flex items-center justify-between p-2 bg-orange-50 rounded">
                            <span className="text-sm">Unusual traffic detected</span>
                            <span className="text-xs text-orange-600 font-medium">ALERT</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Network Map */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Interactive Network Map</h2>
            <p className="section-subtitle">
              Visualize your network topology and security posture in real-time
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="card max-w-4xl mx-auto"
          >
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Network Security Dashboard</h3>
              <p className="text-neutral-600">Real-time threat overlay and connection monitoring</p>
            </div>

            <div className="bg-neutral-900 rounded-lg p-8 text-white">
              <div className="grid grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400 mb-1">99.8%</div>
                  <div className="text-neutral-400 text-sm">Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400 mb-1">24</div>
                  <div className="text-neutral-400 text-sm">Active Connections</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-400 mb-1">3</div>
                  <div className="text-neutral-400 text-sm">Threats Blocked</div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium text-neutral-200">Network Features:</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-sm text-neutral-300">Real-time threat overlay</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-sm text-neutral-300">Asset discovery</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-sm text-neutral-300">Connection mapping</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Network Security Benefits */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Network Security Benefits</h2>
            <p className="section-subtitle">
              Comprehensive protection that scales with your growing business
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card text-center hover:shadow-large transform hover:-translate-y-2"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-neutral-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Secure Your Network?"
        description="Implement zero-trust network security that grows with your startup"
      />
    </motion.div>
  )
}

export default NetworkSecurity