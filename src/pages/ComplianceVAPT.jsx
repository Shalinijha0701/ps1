import React, { useState } from 'react'
import { motion } from 'framer-motion'
import CTASection from '../components/UI/CTASection'

const ComplianceVAPT = () => {
  const [assessmentData, setAssessmentData] = useState({
    companySize: '',
    industry: '',
    currentTools: [],
    complianceRequirements: ''
  })

  const services = [
    {
      name: "Security Questionnaire Automation",
      description: "AI-powered questionnaire responses for vendor assessments",
      features: ["Automated response generation", "Compliance mapping", "Version control"],
      icon: "📝"
    },
    {
      name: "VAPT Services",
      description: "Professional vulnerability assessment and penetration testing",
      features: ["Network penetration testing", "Web application testing", "Social engineering assessment"],
      icon: "🔍"
    },
    {
      name: "Regulatory Compliance",
      description: "Support for major compliance frameworks",
      features: ["SOC 2 Type II", "ISO 27001", "GDPR compliance", "HIPAA alignment"],
      icon: "📋"
    }
  ]

  const frameworks = [
    {
      name: "SOC 2 Type II",
      description: "Security, availability, processing integrity, confidentiality, and privacy",
      supportLevel: "Full automation and reporting"
    },
    {
      name: "ISO 27001",
      description: "International standard for information security management",
      supportLevel: "Gap analysis and implementation guidance"
    },
    {
      name: "GDPR",
      description: "European Union data protection regulation",
      supportLevel: "Privacy controls and documentation"
    },
    {
      name: "HIPAA",
      description: "Healthcare information privacy and security",
      supportLevel: "Healthcare-specific security controls"
    }
  ]

  const vaptPhases = [
    { phase: "Planning", description: "Scope definition and methodology agreement" },
    { phase: "Discovery", description: "Asset identification and reconnaissance" },
    { phase: "Vulnerability Assessment", description: "Automated and manual vulnerability scanning" },
    { phase: "Penetration Testing", description: "Exploitation and impact assessment" },
    { phase: "Reporting", description: "Detailed findings and remediation recommendations" },
    { phase: "Retesting", description: "Validation of remediation efforts" }
  ]

  const handleAssessmentChange = (field, value) => {
    if (field === 'currentTools') {
      const tools = [...assessmentData.currentTools]
      if (tools.includes(value)) {
        setAssessmentData({
          ...assessmentData,
          currentTools: tools.filter(tool => tool !== value)
        })
      } else {
        setAssessmentData({
          ...assessmentData,
          currentTools: [...tools, value]
        })
      }
    } else {
      setAssessmentData({
        ...assessmentData,
        [field]: value
      })
    }
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
      <section className="section-padding bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="hero-title mb-6">
                Compliance & VAPT Services
              </h1>
              <p className="hero-subtitle mb-8">
                Automated compliance management and professional penetration testing to meet regulatory requirements
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn-primary">Start Assessment</button>
                <button className="btn-secondary">Schedule Consultation</button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* Compliance Dashboard Mockup */}
              <div className="bg-white rounded-xl shadow-large p-6">
                <h3 className="text-lg font-semibold mb-6">Compliance Dashboard</h3>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                    <div>
                      <div className="font-medium text-green-900">SOC 2 Type II</div>
                      <div className="text-sm text-green-700">Status: Compliant</div>
                    </div>
                    <div className="text-2xl font-bold text-green-600">98%</div>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                    <div>
                      <div className="font-medium text-blue-900">ISO 27001</div>
                      <div className="text-sm text-blue-700">Status: In Progress</div>
                    </div>
                    <div className="text-2xl font-bold text-blue-600">75%</div>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
                    <div>
                      <div className="font-medium text-yellow-900">GDPR</div>
                      <div className="text-sm text-yellow-700">Status: Review Needed</div>
                    </div>
                    <div className="text-2xl font-bold text-yellow-600">85%</div>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="bg-purple-50 rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-purple-600">12</div>
                    <div className="text-xs text-neutral-600">Active Audits</div>
                  </div>
                  <div className="bg-indigo-50 rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-indigo-600">99.2%</div>
                    <div className="text-xs text-neutral-600">Compliance Score</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Compliance & Assessment Services</h2>
            <p className="section-subtitle">
              Comprehensive solutions to meet regulatory requirements and security standards
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card hover:shadow-large transform hover:-translate-y-2"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.name}</h3>
                <p className="text-neutral-600 mb-4">{service.description}</p>

                <div className="space-y-2">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-sm text-neutral-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Assessment Tool */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Security Assessment Tool</h2>
            <p className="section-subtitle">
              Take our quick assessment to understand your security posture and compliance needs
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="card max-w-2xl mx-auto"
          >
            <h3 className="text-xl font-semibold mb-6">Security Posture Assessment</h3>

            <div className="space-y-6">
              {/* Company Size */}
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">Company Size</label>
                <select
                  value={assessmentData.companySize}
                  onChange={(e) => handleAssessmentChange('companySize', e.target.value)}
                  className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="">Select company size</option>
                  <option value="1-10">1-10 employees</option>
                  <option value="11-50">11-50 employees</option>
                  <option value="51-200">51-200 employees</option>
                  <option value="200+">200+ employees</option>
                </select>
              </div>

              {/* Industry */}
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">Industry</label>
                <select
                  value={assessmentData.industry}
                  onChange={(e) => handleAssessmentChange('industry', e.target.value)}
                  className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="">Select industry</option>
                  <option value="Technology">Technology</option>
                  <option value="Healthcare">Healthcare</option>
                  <option value="Financial">Financial Services</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Current Security Tools */}
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">Current Security Tools</label>
                <div className="grid grid-cols-2 gap-3">
                  {['Antivirus', 'Firewall', 'VPN', 'None'].map((tool) => (
                    <label key={tool} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={assessmentData.currentTools.includes(tool)}
                        onChange={() => handleAssessmentChange('currentTools', tool)}
                        className="w-4 h-4 text-purple-600 border-neutral-300 rounded focus:ring-purple-500"
                      />
                      <span className="text-sm text-neutral-700">{tool}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Compliance Requirements */}
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">Compliance Requirements</label>
                <select
                  value={assessmentData.complianceRequirements}
                  onChange={(e) => handleAssessmentChange('complianceRequirements', e.target.value)}
                  className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="">Select compliance needs</option>
                  <option value="SOC 2">SOC 2</option>
                  <option value="ISO 27001">ISO 27001</option>
                  <option value="HIPAA">HIPAA</option>
                  <option value="GDPR">GDPR</option>
                  <option value="None">None currently</option>
                </select>
              </div>

              <button className="btn-primary w-full">
                Get Personalized Recommendations
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Compliance Frameworks */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Supported Compliance Frameworks</h2>
            <p className="section-subtitle">
              Comprehensive support for major regulatory and security standards
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {frameworks.map((framework, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card"
              >
                <h3 className="text-xl font-semibold mb-3 text-purple-600">{framework.name}</h3>
                <p className="text-neutral-600 mb-4">{framework.description}</p>
                <div className="text-sm font-medium text-neutral-900">
                  Support Level: <span className="text-green-600">{framework.supportLevel}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VAPT Methodology */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">VAPT Methodology</h2>
            <p className="section-subtitle">
              Professional penetration testing process that delivers actionable insights
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vaptPhases.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card text-center"
              >
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-purple-600 font-bold">{index + 1}</span>
                </div>
                <h3 className="text-lg font-semibold mb-3">{phase.phase}</h3>
                <p className="text-neutral-600 text-sm">{phase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Achieve Compliance?"
        description="Get automated compliance management and professional security assessments"
      />
    </motion.div>
  )
}

export default ComplianceVAPT