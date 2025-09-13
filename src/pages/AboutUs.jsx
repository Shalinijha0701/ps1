import React from 'react'
import { motion } from 'framer-motion'
import CTASection from '../components/UI/CTASection'

const AboutUs = () => {
  const teamMembers = [
    {
      name: "Alex Thompson",
      role: "CEO & Co-Founder",
      bio: "Former CISO at two unicorn startups, 15+ years in cybersecurity",
      expertise: ["Startup security", "Compliance", "Risk management"],
      linkedin: "#",
      image: "placeholder"
    },
    {
      name: "Sarah Kim",
      role: "CTO & Co-Founder",
      bio: "Ex-Google security engineer, AI/ML security expert",
      expertise: ["AI security", "Cloud architecture", "Threat detection"],
      linkedin: "#",
      image: "placeholder"
    },
    {
      name: "David Chen",
      role: "VP of Product",
      bio: "Product leader with deep cybersecurity domain knowledge",
      expertise: ["Product strategy", "UX design", "Customer development"],
      linkedin: "#",
      image: "placeholder"
    }
  ]

  const companyStats = [
    { number: "500+", label: "Startups Protected", description: "Growing companies trust us daily" },
    { number: "10M+", label: "Threats Blocked", description: "Advanced threats stopped in their tracks" },
    { number: "99.9%", label: "Uptime SLA", description: "Reliable protection you can count on" },
    { number: "9 min", label: "Average Setup", description: "From signup to full protection" },
    { number: "24/7", label: "Support Available", description: "Expert security team always ready" },
    { number: "$2M+", label: "Funding Raised", description: "Backed by top-tier investors" }
  ]

  const values = [
    {
      name: "Simplicity",
      description: "Complex security made simple for everyone",
      icon: "⚡"
    },
    {
      name: "Innovation",
      description: "Cutting-edge technology for modern threats",
      icon: "🚀"
    },
    {
      name: "Accessibility",
      description: "Enterprise security at startup-friendly prices",
      icon: "💰"
    },
    {
      name: "Partnership",
      description: "Your security team, not just a vendor",
      icon: "🤝"
    }
  ]

  const offices = [
    { location: "New York", email: "ny@osto.one" },
    { location: "Austin", email: "austin@osto.one" },
    { location: "London", email: "london@osto.one" }
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
      <section className="section-padding bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="hero-title mb-6">
              Empowering Startups with Enterprise-Grade Security
            </h1>
            <p className="hero-subtitle mb-8 max-w-4xl mx-auto">
              Founded by cybersecurity experts who understand the unique challenges startups face in building secure, compliant, and scalable businesses
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative max-w-4xl mx-auto"
          >
            {/* Team photo placeholder */}
            <div className="bg-white rounded-xl shadow-large p-8">
              <div className="bg-gradient-to-br from-primary-100 to-secondary-100 rounded-lg h-64 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">👥</div>
                  <p className="text-neutral-600">Our Security-First Team</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-neutral-600 mb-8">
                To democratize enterprise-grade cybersecurity for startups, making advanced protection accessible and affordable for every growing business.
              </p>

              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-lg text-neutral-600">
                A world where cybersecurity never holds back innovation or growth for startups.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-8">Our Values</h2>
              <div className="space-y-6">
                {values.map((value, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="text-2xl">{value.icon}</div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{value.name}</h3>
                      <p className="text-neutral-600">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Leadership Team</h2>
            <p className="section-subtitle">
              Security experts with deep startup experience and a passion for democratizing cybersecurity
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card text-center"
              >
                {/* Profile image placeholder */}
                <div className="w-24 h-24 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl">{member.name.split(' ').map(n => n[0]).join('')}</span>
                </div>

                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-primary-600 font-medium mb-4">{member.role}</p>
                <p className="text-neutral-600 mb-4">{member.bio}</p>

                <div className="mb-4">
                  <h4 className="font-medium text-neutral-900 mb-2">Expertise:</h4>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.expertise.map((skill, i) => (
                      <span key={i} className="text-xs bg-primary-100 text-primary-700 px-2 py-1 rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={member.linkedin}
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 transition-colors duration-200"
                >
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                  </svg>
                  LinkedIn
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Osto.one by the Numbers</h2>
            <p className="section-subtitle">
              The impact we're making in the cybersecurity space
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companyStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card text-center hover:shadow-large transform hover:-translate-y-2"
              >
                <div className="text-4xl lg:text-5xl font-bold text-primary-600 mb-2">
                  {stat.number}
                </div>
                <div className="font-semibold text-neutral-900 mb-2">{stat.label}</div>
                <div className="text-sm text-neutral-600">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Get in Touch</h2>
            <p className="section-subtitle">
              Ready to discuss your cybersecurity needs? We're here to help
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Headquarters */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="card"
            >
              <h3 className="text-xl font-semibold mb-6">Headquarters</h3>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-primary-600 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="font-medium">123 Security Street</p>
                    <p className="text-neutral-600">San Francisco, CA 94102</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span>+1 (555) 123-4567</span>
                </div>

                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span>hello@osto.one</span>
                </div>
              </div>
            </motion.div>

            {/* Regional Offices */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="card"
            >
              <h3 className="text-xl font-semibold mb-6">Regional Offices</h3>

              <div className="space-y-4">
                {offices.map((office, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-neutral-50 rounded-lg">
                    <span className="font-medium">{office.location}</span>
                    <a
                      href={`mailto:${office.email}`}
                      className="text-primary-600 hover:text-primary-700 transition-colors duration-200"
                    >
                      {office.email}
                    </a>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-primary-50 rounded-lg">
                <p className="text-sm text-primary-700">
                  <strong>Global Support:</strong> Our team provides 24/7 support across all time zones to ensure your security never sleeps.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Partner with Us?"
        description="Join the hundreds of startups who trust Osto.one for their cybersecurity needs"
      />
    </motion.div>
  )
}

export default AboutUs