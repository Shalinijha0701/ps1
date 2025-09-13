import React from 'react'
import { motion } from 'framer-motion'
import CTASection from '../components/UI/CTASection'

const CloudSecurity = () => {
  const modules = [
    {
      name: "App Layer Protection",
      description: "Web application and API security",
      components: ["Web App Protection", "API Security Gateway"],
      icon: "🛡"
    },
    {
      name: "Security Scanners",
      description: "Comprehensive vulnerability scanning suite",
      components: ["Web Scanner", "API Scanner", "Mobile App Scanner"],
      icon: "🔍"
    },
    {
      name: "Posture Management",
      description: "Continuous security posture monitoring",
      components: ["Cloud Security Posture Management", "AI Security Posture Management"],
      icon: "📊"
    }
  ]

  const useCases = [
    {
      scenario: "Web Application Attack",
      protection: "WAF blocks malicious requests automatically",
      outcome: "Application remains secure and available"
    },
    {
      scenario: "API Vulnerability",
      protection: "Scanner identifies and reports security gaps",
      outcome: "Proactive remediation before exploitation"
    },
    {
      scenario: "Cloud Misconfiguration",
      protection: "Posture management alerts on security risks",
      outcome: "Rapid configuration correction"
    }
  ]

  const reportTypes = [
    { name: "Vulnerability Reports", description: "Detailed security assessment findings" },
    { name: "Compliance Reports", description: "Regulatory framework alignment status" },
    { name: "Posture Reports", description: "Overall security posture metrics" },
    { name: "Trend Analysis", description: "Security posture improvement tracking" }
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
      <section className="section-padding bg-gradient-to-br from-cyan-50 to-blue-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="hero-title mb-6">
                Comprehensive Cloud Security
              </h1>
              <p className="hero-subtitle mb-8">
                Three-layer protection for modern cloud infrastructure with advanced scanning and posture management
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
              {/* Cloud Security Architecture */}
              <div className="bg-white rounded-xl shadow-large p-6">
                <h3 className="text-lg font-semibold mb-6">Cloud Security Architecture</h3>

                <div className="space-y-4">
                  {/* Application Layer */}
                  <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-blue-900">Application Layer</span>
                      <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">Protected</span>
                    </div>
                    <div className="text-sm text-blue-700 mt-1">WAF • API Gateway • DDoS Protection</div>
                  </div>

                  {/* Security Scanning */}
                  <div className="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-500">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-purple-900">Security Scanning</span>
                      <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full">Active</span>
                    </div>
                    <div className="text-sm text-purple-700 mt-1">Web • API • Mobile App Scanners</div>
                  </div>

                  {/* Posture Management */}
                  <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-green-900">Posture Management</span>
                      <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Monitoring</span>
                    </div>
                    <div className="text-sm text-green-700 mt-1">CSPM • AI Security • Compliance</div>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-3 gap-3">
                  <div className="bg-blue-50 rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-blue-600">24/7</div>
                    <div className="text-xs text-neutral-600">Protection</div>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-purple-600">Auto</div>
                    <div className="text-xs text-neutral-600">Scanning</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-green-600">Real-time</div>
                    <div className="text-xs text-neutral-600">Monitoring</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cloud Security Modules */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Cloud Security Modules</h2>
            <p className="section-subtitle">
              Integrated security layers that work together to protect your cloud infrastructure
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {modules.map((module, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card hover:shadow-large transform hover:-translate-y-2"
              >
                <div className="text-4xl mb-4">{module.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{module.name}</h3>
                <p className="text-neutral-600 mb-4">{module.description}</p>

                <div className="space-y-2">
                  {module.components.map((component, i) => (
                    <div key={i} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                      <span className="text-sm text-neutral-700">{component}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Cloud Security Use Cases</h2>
            <p className="section-subtitle">
              Real-world scenarios where our cloud security makes the difference
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
                className="card"
              >
                <h3 className="text-xl font-semibold mb-4 text-cyan-600">{useCase.scenario}</h3>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-neutral-900 mb-2">Protection:</h4>
                    <p className="text-neutral-600 text-sm">{useCase.protection}</p>
                  </div>

                  <div>
                    <h4 className="font-medium text-neutral-900 mb-2">Outcome:</h4>
                    <p className="text-green-600 text-sm font-medium">{useCase.outcome}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Reporting */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Security Reporting</h2>
            <p className="section-subtitle">
              Comprehensive reports that keep you informed about your security posture
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {reportTypes.map((report, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card"
              >
                <h3 className="text-lg font-semibold mb-3">{report.name}</h3>
                <p className="text-neutral-600">{report.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Secure Your Cloud?"
        description="Get comprehensive cloud protection that scales with your business growth"
      />
    </motion.div>
  )
}

export default CloudSecurity