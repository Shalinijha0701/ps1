import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import TrustBadges from '../components/UI/TrustBadges'
import CTASection from '../components/UI/CTASection'
import AnimatedCounter from '../components/Animations/AnimatedCounter'
import FAQAccordion from '../components/UI/FAQAccordion'
import usePerformanceMonitor from '../hooks/usePerformanceMonitor'

const LandingPage = () => {
  usePerformanceMonitor()
  const valuePropositions = [
    {
      icon: "⚡",
      title: "Lightning Fast Deployment",
      description: "Get fully protected in 9 minutes, not weeks"
    },
    {
      icon: "🛡",
      title: "Complete Protection Suite",
      description: "Endpoint, network, cloud, and compliance in one platform"
    },
    {
      icon: "🤖",
      title: "AI-Powered Security",
      description: "Automated threat detection and response"
    },
    {
      icon: "💰",
      title: "Startup-Friendly Pricing",
      description: "Enterprise security without enterprise costs"
    }
  ]

  const testimonials = [
    {
      quote: "Osto.one gave us enterprise-level security from day one. Setup was incredibly simple.",
      author: "Sarah Chen",
      role: "CTO at TechStart",
      company_logo: "placeholder"
    },
    {
      quote: "Finally, cybersecurity that doesn't require a dedicated team to manage.",
      author: "Mike Rodriguez",
      role: "CEO at InnovateCorp",
      company_logo: "placeholder"
    }
  ]

  const stats = [
    { number: "500+", label: "Startups Protected" },
    { number: "99.9%", label: "Threat Detection Rate" },
    { number: "9 min", label: "Average Setup Time" }
  ]

  const featureCards = [
    {
      title: "Endpoint Security",
      description: "Next-gen antimalware, device control, and data protection",
      link: "/endpoint-security",
      icon: "💻"
    },
    {
      title: "Network Security",
      description: "Zero-trust access and advanced web filtering",
      link: "/network-security",
      icon: "🌐"
    },
    {
      title: "Cloud Security",
      description: "App protection, scanners, and posture management",
      link: "/cloud-security",
      icon: "☁"
    },
    {
      title: "Compliance & VAPT",
      description: "Automated compliance and penetration testing",
      link: "/compliance-vapt",
      icon: "📋"
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
    >
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-700 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent transform skew-y-12"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-radial from-white/10 to-transparent rounded-full"></div>
        </div>

        <div className="relative container-custom section-padding pt-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="hero-title text-white mb-6">
                Enterprise-Grade Cybersecurity for
                <span className="text-gradient bg-gradient-to-r from-cyan-400 to-blue-300 bg-clip-text text-transparent"> Startups</span>
              </h1>
              <p className="hero-subtitle text-blue-100 mb-8">
                Complete endpoint, network, and cloud protection that used to take weeks, now deployed in minutes
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link to="/demo" className="btn-primary bg-white text-primary-600 hover:bg-neutral-100">
                  Get Protected Now
                </Link>
                <Link to="/demo" className="btn bg-white/10 text-white border-white/20 hover:bg-white/20">
                  Schedule Demo
                </Link>
              </div>

              <TrustBadges className="justify-start" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* Hero Visual - Security Dashboard Mockup */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <div className="bg-white rounded-xl p-6 shadow-large">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-neutral-900">Security Dashboard</h3>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-sm text-neutral-600">Live Protection</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-green-50 rounded-lg p-4">
                      <div className="text-2xl font-bold text-green-600">99.9%</div>
                      <div className="text-sm text-neutral-600">Threats Blocked</div>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-4">
                      <div className="text-2xl font-bold text-blue-600">24/7</div>
                      <div className="text-sm text-neutral-600">Monitoring</div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-neutral-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span className="text-sm text-neutral-700">Endpoint Protection</span>
                      </div>
                      <span className="text-xs text-green-600 font-medium">Active</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-neutral-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span className="text-sm text-neutral-700">Network Security</span>
                      </div>
                      <span className="text-xs text-green-600 font-medium">Active</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-neutral-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span className="text-sm text-neutral-700">Cloud Protection</span>
                      </div>
                      <span className="text-xs text-green-600 font-medium">Active</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Why Startups Choose Osto.one</h2>
            <p className="section-subtitle">
              Comprehensive cybersecurity designed specifically for growing businesses
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valuePropositions.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card text-center hover:shadow-large transform hover:-translate-y-2"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-neutral-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Trusted by Growing Startups</h2>
          </motion.div>

          {/* Statistics */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <AnimatedCounter
                  end={parseInt(stat.number.replace(/[^0-9]/g, '')) || 0}
                  suffix={stat.number.replace(/[0-9]/g, '')}
                  className="text-4xl lg:text-5xl font-bold text-primary-600 mb-2"
                  duration={2}
                />
                <div className="text-neutral-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Testimonials */}
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="card"
              >
                <div className="flex items-start mb-4">
                  <div className="flex text-yellow-400 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <blockquote className="text-lg text-neutral-700 mb-4">
                  "{testimonial.quote}"
                </blockquote>
                <div>
                  <div className="font-semibold text-neutral-900">{testimonial.author}</div>
                  <div className="text-neutral-600">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Preview Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Comprehensive Security Suite</h2>
            <p className="section-subtitle">
              Everything you need to protect your startup, all in one platform
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featureCards.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link
                  to={feature.link}
                  className="card group hover:shadow-large transform hover:-translate-y-2 transition-all duration-300 block"
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary-600 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-neutral-600 mb-4">{feature.description}</p>
                  <div className="flex items-center text-primary-600 font-medium group-hover:text-primary-700">
                    Learn more
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Get answers to common questions about our cybersecurity solutions
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <FAQAccordion />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </motion.div>
  )
}

export default LandingPage