import React from 'react'
import { Link } from 'react-router-dom'

const CTASection = ({
  title = "Ready to Secure Your Startup?",
  description = "Join hundreds of startups who trust Osto.one for their cybersecurity needs",
  primaryCTA = "Start Free Trial",
  secondaryCTA = "Schedule Demo",
  primaryLink = "/demo",
  secondaryLink = "/demo",
  background = "gradient",
  className = ""
}) => {
  const backgroundClasses = {
    gradient: "bg-gradient-to-r from-primary-600 to-secondary-600",
    dark: "bg-neutral-900",
    light: "bg-neutral-100",
    primary: "bg-primary-600"
  }

  const textClasses = {
    gradient: "text-white",
    dark: "text-white",
    light: "text-neutral-900",
    primary: "text-white"
  }

  return (
    <section className={`section-padding ${backgroundClasses[background]} ${className}`}>
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`section-title ${textClasses[background]} mb-6`}>
            {title}
          </h2>
          <p className={`text-lg md:text-xl ${background === 'light' ? 'text-neutral-600' : background === 'gradient' ? 'text-blue-100' : 'text-neutral-300'} mb-8 max-w-2xl mx-auto`}>
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to={primaryLink} className="btn-primary">
              {primaryCTA}
            </Link>
            <Link
              to={secondaryLink}
              className={`btn ${background === 'light' ? 'btn-outline' : 'bg-white/10 text-white border-white/20 hover:bg-white/20'}`}
            >
              {secondaryCTA}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection