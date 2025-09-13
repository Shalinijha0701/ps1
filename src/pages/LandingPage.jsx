import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import TrustBadges from '../components/UI/TrustBadges'
import CTASection from '../components/UI/CTASection'
import AnimatedCounter from '../components/Animations/AnimatedCounter'
import FAQAccordion from '../components/UI/FAQAccordion'
import usePerformanceMonitor from '../hooks/usePerformanceMonitor'
import { Button } from '../components/UI/Button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/UI/card'
import { Badge } from '../components/UI/badge'

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
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-slate-800 text-white overflow-hidden min-h-screen flex items-center">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          {/* Hexagonal Network Pattern */}
          <div className="absolute inset-0 hex-pattern opacity-30"></div>
          {/* Glowing Network Lines */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-conic from-cyan-400/20 via-transparent to-cyan-600/20 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-radial from-blue-400/10 to-transparent rounded-full animate-pulse"></div>
        </div>

        <div className="relative container-custom w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                ENTERPRISE-GRADE
                <br />
                <span className="text-white">CYBERSECURITY</span>
                <br />
                <span className="text-white">FOR STARTUPS</span>
                <br />
                <span className="text-cyan-400 text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide">
                  LIVE IN 9 MINUTES
                </span>
              </motion.h1>

              <motion.p
                className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Complete endpoint, network, and cloud protection that used to take weeks, now deployed in minutes.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 mb-12 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Button asChild variant="cyber" size="xl">
                  <Link to="/demo">
                    Get Protected Now
                  </Link>
                </Button>
                <Button asChild variant="outline" size="xl" className="bg-transparent text-white border-2 border-cyan-400 hover:bg-cyan-400/10">
                  <Link to="/demo">
                    Schedule Demo
                  </Link>
                </Button>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                className="flex flex-wrap gap-6 justify-center lg:justify-start text-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-green-400 rounded-full flex items-center justify-center">
                    <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-blue-100 font-medium">SOC 2 Compliant</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-green-400 rounded-full flex items-center justify-center">
                    <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-blue-100 font-medium">24/7 Monitoring</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Central Shield and Device Mockups */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative flex items-center justify-center"
            >
              {/* Central Glowing Shield */}
              <div className="relative">
                {/* Outer Glow */}
                <div className="absolute inset-0 bg-cyan-400/30 rounded-full blur-3xl scale-150 animate-pulse"></div>

                {/* Shield Container */}
                <div className="relative w-80 h-80 flex items-center justify-center">
                  {/* Circuit Pattern Background */}
                  <div className="absolute inset-0 opacity-30">
                    <svg viewBox="0 0 200 200" className="w-full h-full">
                      <defs>
                        <pattern id="circuit" patternUnits="userSpaceOnUse" width="20" height="20">
                          <path d="M 10,0 L 10,10 M 0,10 L 20,10" stroke="#06b6d4" strokeWidth="0.5" fill="none" opacity="0.6" />
                          <circle cx="10" cy="10" r="1" fill="#06b6d4" opacity="0.8" />
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#circuit)" />
                    </svg>
                  </div>

                  {/* Shield Icon */}
                  <div className="relative z-10">
                    <svg className="w-48 h-48 text-cyan-400 drop-shadow-2xl" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L3 6.5V12c0 6.5 4.5 11 9 11s9-4.5 9-11V6.5L12 2z" stroke="currentColor" strokeWidth="0.5" fill="currentColor" opacity="0.9" />
                      {/* Inner circuit lines */}
                      <path d="M12 6v6m-3-3h6m-6 6l6-6" stroke="#1e293b" strokeWidth="0.5" opacity="0.7" />
                    </svg>
                  </div>

                  {/* Animated Ring */}
                  <div className="absolute inset-8 border-2 border-cyan-400/50 rounded-full animate-spin" style={{ animationDuration: '10s' }}></div>
                  <div className="absolute inset-16 border border-cyan-300/30 rounded-full animate-ping"></div>
                </div>
              </div>

              {/* Desktop Monitor Mockup */}
              <motion.div
                className="absolute -left-16 -bottom-8 transform scale-75"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
              >
                <div className="relative">
                  {/* Monitor Stand */}
                  <div className="w-32 h-6 bg-gradient-to-r from-gray-300 to-gray-400 rounded-lg mx-auto mb-2"></div>
                  <div className="w-16 h-8 bg-gradient-to-r from-gray-400 to-gray-500 rounded mx-auto"></div>

                  {/* Monitor Screen */}
                  <div className="w-64 h-40 bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg border-4 border-gray-300 relative overflow-hidden">
                    {/* Screen Content */}
                    <div className="p-4 h-full">
                      <div className="flex items-center justify-between mb-3">
                        <div className="text-white text-xs font-semibold">Osto.one</div>
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="h-2 bg-cyan-400/30 rounded"></div>
                        <div className="h-2 bg-cyan-400/20 rounded w-3/4"></div>
                        <div className="h-2 bg-cyan-400/10 rounded w-1/2"></div>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="h-8 bg-cyan-400/20 rounded flex items-center justify-center">
                          <div className="w-4 h-4 bg-cyan-400 rounded opacity-80"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Mobile Phone Mockup */}
              <motion.div
                className="absolute -right-12 bottom-0 transform scale-90"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 1 }}
              >
                <div className="w-24 h-48 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border-2 border-gray-600 relative overflow-hidden">
                  {/* Screen */}
                  <div className="w-full h-full bg-slate-900 rounded-lg p-2">
                    <div className="text-center">
                      <div className="text-white text-xs font-semibold mb-2">Osto.one</div>
                      <div className="w-8 h-8 bg-cyan-400/30 rounded-full mx-auto mb-2 flex items-center justify-center">
                        <div className="w-4 h-4 bg-cyan-400 rounded opacity-80"></div>
                      </div>
                      <div className="text-xs text-cyan-400 font-bold">ENTERPRISE</div>
                      <div className="text-xs text-cyan-400 font-bold">GRADE</div>
                      <div className="text-xs text-white">CYBERSECURITY</div>
                      <div className="text-xs text-cyan-400 mt-1">FOR STARTUPS</div>
                      <div className="w-8 h-2 bg-cyan-400/30 rounded mx-auto mt-2"></div>
                    </div>
                  </div>

                  {/* Home Indicator */}
                  <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-gray-400 rounded-full"></div>
                </div>
              </motion.div>
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
              >
                <Card className="text-center hover:shadow-large transform hover:-translate-y-2 transition-all duration-300">
                  <CardHeader>
                    <div className="text-4xl mb-4">{item.icon}</div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                    <CardDescription className="text-neutral-600">{item.description}</CardDescription>
                  </CardHeader>
                </Card>
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
              >
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex text-yellow-400 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <Badge variant="secure">Verified Customer</Badge>
                    </div>
                    <blockquote className="text-lg text-neutral-700 mb-4">
                      "{testimonial.quote}"
                    </blockquote>
                  </CardHeader>
                  <CardContent>
                    <div className="font-semibold text-neutral-900">{testimonial.author}</div>
                    <div className="text-neutral-600">{testimonial.role}</div>
                  </CardContent>
                </Card>
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
                <Link to={feature.link}>
                  <Card className="group hover:shadow-large transform hover:-translate-y-2 transition-all duration-300 cursor-pointer">
                    <CardHeader>
                      <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                        {feature.icon}
                      </div>
                      <CardTitle className="text-xl group-hover:text-primary-600 transition-colors duration-300">
                        {feature.title}
                      </CardTitle>
                      <CardDescription className="text-neutral-600 mb-4">
                        {feature.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <span className="text-primary-600 font-medium group-hover:text-primary-700">Learn more</span>
                        <svg className="w-4 h-4 text-primary-600 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </CardContent>
                  </Card>
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
    </motion.div >
  )
}

export default LandingPage