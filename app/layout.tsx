import './globals.css'
import localFont from 'next/font/local'
import FloatingIcons from './components/FloatingIcons'

const inter = localFont({
  src: '../public/fonts/customfont.ttf',
  variable: '--font-custom'
})

export const metadata = {
  title: 'Plots in Dholera Smart City | LNC Developers - Turning Land into Legacy',
  description: 'Invest in Dholera Smart City with LNC Developers. Transparent pricing, verified plots, and future-ready developments. Book your site visit today!',
  keywords: 'Dholera Smart City, plots in Dholera, LNC Developers, real estate investment, Dholera SIR, land in Dholera, Dholera plots, smart city investment, Dholera property, Aashirwad Enclave, Gujarat real estate',
  icons: {
    icon: "/favicon.ico",   
  },
  openGraph: {
    title: 'Plots in Dholera Smart City | LNC Developers',
    description: 'Invest in Dholera Smart City with LNC Developers. Transparent pricing, verified plots, and future-ready developments. Book your site visit today!',
    siteName: 'LNC Developers',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Plots in Dholera Smart City | LNC Developers',
    description: 'Invest in Dholera Smart City with LNC Developers. Transparent pricing, verified plots, and future-ready developments.',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: 'LNC Developers',
    description: 'LNC Developers is a trusted land and construction company specializing in plots and developments in Dholera Smart City, Gujarat.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'B4-518/519, Spaze ITECH Park',
      addressLocality: 'Gurugram',
      addressRegion: 'Haryana',
      postalCode: '122018',
      addressCountry: 'IN'
    },
    url: 'https://lncdevelopers.com',
    telephone: '+91-9998068887',
    email: 'lncdholera@gmail.com',
    sameAs: [
      'https://www.facebook.com/lncdevelopers',
      'https://www.instagram.com/lncdevelopers',
      'https://www.linkedin.com/company/lncdevelopers'
    ],
    areaServed: {
      '@type': 'Place',
      name: 'Dholera Smart City, Gujarat, India'
    }
  }

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        {children}
        <FloatingIcons />
      </body>
    </html>
  )
}
