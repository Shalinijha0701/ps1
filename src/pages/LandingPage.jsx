import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import TrustBadges from '../components/UI/TrustBadges'
import CTASection from '../components/UI/CTASection'
import AnimatedCounter from '../components/Animations/AnimatedCounter'
import FAQAccordion from '../components/UI/FAQAccordion'
import usePerformanceMonitor from '../hooks/usePerformanceMonitor'
import { Button } from '../components/UI/Button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Badge } from '../components/ui/badge'

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
      quote: "Osto gave us enterprise-level security from day one. Setup was incredibly simple.",
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

  // Professional feature highlight cards for enterprise positioning
  const featureHighlights = [
    {
      title: "Rapid Deployment",
      subtitle: "Enterprise-grade cybersecurity deployed in 9 minutes. No complex setup, no lengthy onboarding.",
      color: "red",
      link: "/demo"
    },
    {
      title: "Complete Protection",
      subtitle: "Unified endpoint, network, and cloud security platform designed for modern business demands.",
      color: "red",
      link: "/features"
    },
    {
      title: "24/7 Security Operations",
      subtitle: "Round-the-clock monitoring and threat response by certified cybersecurity professionals.",
      color: "red",
      link: "/monitoring"
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
      {/* Hero Section with Professional Cyberpunk Design */}
      <section className="relative bg-black text-white overflow-hidden min-h-screen flex items-center">
        {/* Professional Background Layer */}
        <div className="absolute inset-0">
          {/* Clean gradient foundation */}
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-slate-900"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-red-950/20 via-transparent to-cyan-950/20"></div>

          {/* Subtle grid pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `
                linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '80px 80px'
            }}></div>
          </div>

          {/* Minimal ambient lighting */}
          <div className="absolute top-0 right-0 w-full h-full overflow-hidden">
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/3 left-1/5 w-64 h-64 bg-red-500/8 rounded-full blur-3xl"></div>
          </div>
        </div>

        {/* Professional Cyberpunk Heroes Integration */}
        <div className="absolute right-0 top-0 w-3/5 h-full overflow-hidden">
          <div className="absolute right-0 top-0 w-full h-full">
            {/* Professional Heroes Image with Enterprise-grade Blending */}
            <div
              className="w-full h-full bg-no-repeat bg-cover bg-center-right opacity-95 transition-all duration-500 ease-out"
              style={{
                backgroundImage: 'url(/images/cyberpunk-heroes.png)',
                backgroundBlendMode: 'multiply',
                maskImage: 'linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0.95) 40%, rgba(0,0,0,0.7) 70%, rgba(0,0,0,0) 100%)',
                WebkitMaskImage: 'linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0.95) 40%, rgba(0,0,0,0.7) 70%, rgba(0,0,0,0) 100%)',
                filter: 'contrast(1.1) saturate(1.05) brightness(1.1)'
              }}
            ></div>

            {/* Professional gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-l from-black/20 via-black/30 to-black/70 pointer-events-none"></div>
          </div>
        </div>

        <div className="relative container-custom w-full z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left"
            >
              {/* Professional Brand Name */}
              <motion.h1
                className="text-7xl md:text-8xl lg:text-9xl font-bold leading-tight mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="text-white tracking-tight">Osto</span>
              </motion.h1>

              {/* Enterprise-grade Main Headline */}
              <motion.div
                className="mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight max-w-4xl">
                  Enterprise Cybersecurity for Modern Startups
                </h2>
              </motion.div>

              {/* Professional Description */}
              <motion.div
                className="mb-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl font-light">
                  Complete endpoint, network, and cloud protection. Enterprise-grade security that deploys in 9 minutes, not weeks.
                </p>
              </motion.div>

              {/* Professional CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <Button asChild size="xl" className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 text-lg rounded-lg transition-all duration-200">
                  <Link to="/demo">
                    Start Free Trial →
                  </Link>
                </Button>
                <Button asChild variant="outline" size="xl" className="bg-transparent text-white border-2 border-gray-600 hover:bg-gray-800 hover:border-white px-8 py-4 text-lg rounded-lg font-semibold transition-all duration-200">
                  <Link to="/demo">
                    Explore Solutions
                  </Link>
                </Button>
              </motion.div>

              {/* Enterprise Trust indicators */}
              <motion.div
                className="flex flex-col sm:flex-row gap-8 items-start text-gray-400"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span className="text-base font-medium">SOC 2 Compliant</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
                  <span className="text-base font-medium">24/7 Monitoring</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                  <span className="text-base font-medium">9-Minute Deployment</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Professional Feature Highlights Section */}
      <section className="bg-black py-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-6">
            {featureHighlights.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-900/80 border-gray-800 hover:border-red-500/50 transition-all duration-300 group cursor-pointer h-full backdrop-blur-sm">
                  <CardHeader className="p-6">
                    <div className="text-red-500 text-sm font-semibold mb-3 uppercase tracking-wider">
                      {feature.title}
                    </div>
                    <CardDescription className="text-white text-lg leading-relaxed font-medium group-hover:text-gray-100 transition-colors">
                      {feature.subtitle}
                    </CardDescription>
                    <div className="mt-4 flex items-center text-red-500 group-hover:text-red-400 transition-colors">
                      <span className="text-sm font-medium">Learn more</span>
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="section-padding bg-gray-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title text-white">Why Startups Choose Osto</h2>
            <p className="section-subtitle text-gray-300">
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
                <Card className="bg-gray-800 border-gray-700 text-center hover:shadow-large hover:border-cyan-500 transform hover:-translate-y-2 transition-all duration-300">
                  <CardHeader>
                    <div className="text-4xl mb-4">{item.icon}</div>
                    <CardTitle className="text-xl text-white">{item.title}</CardTitle>
                    <CardDescription className="text-gray-300">{item.description}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="section-padding bg-black">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title text-white">Trusted by Growing Startups</h2>
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
                  className="text-4xl lg:text-5xl font-bold text-cyan-400 mb-2"
                  duration={2}
                />
                <div className="text-gray-300 font-medium">{stat.label}</div>
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
                <Card className="bg-gray-800 border-gray-700">
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
                    <blockquote className="text-lg text-gray-200 mb-4">
                      "{testimonial.quote}"
                    </blockquote>
                  </CardHeader>
                  <CardContent>
                    <div className="font-semibold text-white">{testimonial.author}</div>
                    <div className="text-gray-400">{testimonial.role}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Preview Section */}
      <section className="section-padding bg-gray-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title text-white">Comprehensive Security Suite</h2>
            <p className="section-subtitle text-gray-300">
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
                  <Card className="bg-gray-800 border-gray-700 group hover:shadow-large hover:border-cyan-500 transform hover:-translate-y-2 transition-all duration-300 cursor-pointer">
                    <CardHeader>
                      <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                        {feature.icon}
                      </div>
                      <CardTitle className="text-xl text-white group-hover:text-cyan-400 transition-colors duration-300">
                        {feature.title}
                      </CardTitle>
                      <CardDescription className="text-gray-300 mb-4">
                        {feature.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <span className="text-cyan-400 font-medium group-hover:text-cyan-300">Learn more</span>
                        <svg className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      <section className="section-padding bg-black">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title text-white">Frequently Asked Questions</h2>
            <p className="section-subtitle text-gray-300">
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