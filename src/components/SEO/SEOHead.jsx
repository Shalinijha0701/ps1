import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const SEOHead = () => {
  const location = useLocation()

  useEffect(() => {
    const pageMetadata = {
      '/': {
        title: 'Osto.one - Enterprise-Grade Cybersecurity for Startups',
        description: 'Complete endpoint, network, and cloud protection deployed in 9 minutes vs traditional weeks. Enterprise security made simple for startups.',
        keywords: 'cybersecurity for startups, endpoint security, network security, cloud security, enterprise protection'
      },
      '/endpoint-security': {
        title: 'Endpoint Security | Osto.one - Cybersecurity for Startups',
        description: 'Advanced endpoint protection with next-gen antimalware, device control, application control, and DLP for startups.',
        keywords: 'endpoint security, antimalware, device control, application control, DLP, endpoint protection'
      },
      '/network-security': {
        title: 'Network Security | Osto.one - Cybersecurity for Startups',
        description: 'Zero-trust network access, advanced web filtering, and traffic analysis for comprehensive network protection.',
        keywords: 'network security, zero trust, ZTNA, web filtering, traffic analysis, network protection'
      },
      '/cloud-security': {
        title: 'Cloud Security | Osto.one - Cybersecurity for Startups',
        description: 'Three-layer cloud protection with app security, vulnerability scanners, and posture management.',
        keywords: 'cloud security, app protection, vulnerability scanning, security posture management, cloud protection'
      },
      '/compliance-vapt': {
        title: 'Compliance & VAPT | Osto.one - Cybersecurity for Startups',
        description: 'Automated compliance management, security questionnaires, and professional penetration testing services.',
        keywords: 'compliance, VAPT, penetration testing, security assessment, SOC 2, ISO 27001, GDPR'
      },
      '/about': {
        title: 'About Us | Osto.one - Cybersecurity for Startups',
        description: 'Learn about Osto.one\'s mission to democratize enterprise-grade cybersecurity for startups and growing businesses.',
        keywords: 'about osto.one, cybersecurity company, startup security, team, mission, vision'
      },
      '/demo': {
        title: 'Demo & Free Trial | Osto.one - Cybersecurity for Startups',
        description: 'Experience Osto.one security with a personalized demo or start your 14-day free trial today.',
        keywords: 'demo, free trial, cybersecurity demo, security assessment, schedule demo'
      }
    }

    const metadata = pageMetadata[location.pathname] || pageMetadata['/']

    // Update document title
    document.title = metadata.title

    // Update meta description
    const descriptionMeta = document.querySelector('meta[name="description"]')
    if (descriptionMeta) {
      descriptionMeta.setAttribute('content', metadata.description)
    }

    // Update meta keywords
    const keywordsMeta = document.querySelector('meta[name="keywords"]')
    if (keywordsMeta) {
      keywordsMeta.setAttribute('content', metadata.keywords)
    }

    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) {
      ogTitle.setAttribute('content', metadata.title)
    }

    const ogDescription = document.querySelector('meta[property="og:description"]')
    if (ogDescription) {
      ogDescription.setAttribute('content', metadata.description)
    }

    // Update Twitter Card tags
    const twitterTitle = document.querySelector('meta[name="twitter:title"]')
    if (twitterTitle) {
      twitterTitle.setAttribute('content', metadata.title)
    }

    const twitterDescription = document.querySelector('meta[name="twitter:description"]')
    if (twitterDescription) {
      twitterDescription.setAttribute('content', metadata.description)
    }
  }, [location])

  return null
}

export default SEOHead