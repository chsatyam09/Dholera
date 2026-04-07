export interface Project {
  slug: string
  title: string
  status: 'Now Selling' | 'Upcoming' | 'Coming Soon'
  tagline: string
  description: string
  longDescription: string[]
  image: string
  galleryImages: string[]
  features: string[]
  highlights: { icon: string; label: string; value: string }[]
  amenities: { icon: string; title: string }[]
  location: {
    area: string
    nearbyLandmarks: string[]
  }
  pricing?: {
    startingFrom?: string
    plotSizes?: string
    paymentPlan?: string
  }
  ctaPhone: string
  ctaWhatsApp: string
}

export const projectsData: Project[] = [
  {
    slug: 'aashirwad-enclave',
    title: 'Aashirwad Enclave',
    status: 'Now Selling',
    tagline: 'Premium Plotted Development in Dholera Smart City',
    description: 'Premium residential plots in the heart of Dholera Smart City. Fully developed with roads, drainage, and utilities. RERA approved and ready for possession.',
    longDescription: [
      'Aashirwad Enclave is LNC Developers\' flagship project, strategically located in the heart of Dholera Smart City — India\'s first greenfield smart city and one of the most ambitious urban infrastructure projects in the world. This premium plotted development offers investors and homeowners a rare opportunity to own land in a city that is being built from the ground up with world-class planning and infrastructure.',
      'Every plot in Aashirwad Enclave comes with complete development — wide internal roads, underground drainage, electricity connections, water supply, and fiber optic readiness. The project is RERA approved, ensuring full legal compliance and transparency for every buyer.',
      'Situated near the upcoming Dholera International Airport, Ahmedabad-Dholera Expressway, and the Delhi-Mumbai Industrial Corridor (DMIC), Aashirwad Enclave is positioned in one of the highest appreciation zones within the Dholera Special Investment Region. Early investors have already witnessed significant value growth as infrastructure development accelerates rapidly.',
      'Whether you\'re looking for a long-term investment asset, a plot to build your dream home, or a strategic addition to your real estate portfolio — Aashirwad Enclave delivers unmatched value with clear titles, genuine pricing, and dedicated post-sale support from the LNC Developers team.',
    ],
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80',
      'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&q=80',
    ],
    features: ['RERA Approved', 'Developed Plots', 'Clear Title'],
    highlights: [
      { icon: '📐', label: 'Plot Sizes', value: '100 - 500 Sq. Yards' },
      { icon: '📍', label: 'Location', value: 'Dholera SIR, Gujarat' },
      { icon: '🏗️', label: 'Status', value: 'Ready for Possession' },
      { icon: '📜', label: 'Approvals', value: 'RERA Approved' },
      { icon: '🛣️', label: 'Connectivity', value: 'Near Expressway' },
      { icon: '✈️', label: 'Airport', value: '15 km from Airport Site' },
    ],
    amenities: [
      { icon: '🛣️', title: 'Wide Internal Roads' },
      { icon: '💧', title: 'Underground Drainage' },
      { icon: '⚡', title: 'Electricity Supply' },
      { icon: '🚰', title: 'Water Connection' },
      { icon: '🌳', title: 'Green Landscaping' },
      { icon: '🔒', title: '24/7 Gated Security' },
      { icon: '💡', title: 'Smart Street Lighting' },
      { icon: '📡', title: 'Fiber Optic Ready' },
      { icon: '🏞️', title: 'Rainwater Harvesting' },
      { icon: '🅿️', title: 'Community Parking' },
      { icon: '🏋️', title: 'Open Gym Area' },
      { icon: '👶', title: 'Children\'s Play Zone' },
    ],
    location: {
      area: 'Dholera Special Investment Region (SIR), Gujarat',
      nearbyLandmarks: [
        'Dholera International Airport — 15 km',
        'Ahmedabad-Dholera Expressway — 5 km',
        'DMIC Industrial Zone — 10 km',
        'Dholera SIR Activation Area — 3 km',
        'Gujarat Solar Park — 20 km',
        'Proposed Metro Station — 8 km',
      ],
    },
    pricing: {
      startingFrom: 'Contact for Best Price',
      plotSizes: '100 - 500 Sq. Yards',
      paymentPlan: 'Flexible EMI & Installment Options Available',
    },
    ctaPhone: '+919998068887',
    ctaWhatsApp: 'https://wa.me/919998068887?text=Hi%2C%20I%20am%20interested%20in%20Aashirwad%20Enclave%20plots%20in%20Dholera%20Smart%20City',
  },
  {
    slug: 'soilscape',
    title: 'Soilscape',
    status: 'Upcoming',
    tagline: 'Smart Investment in Dholera\'s Growth Corridor',
    description: 'Agricultural and residential plots designed for investors looking for long-term growth. Strategic location near the upcoming Dholera expressway.',
    longDescription: [
      'Soilscape is LNC Developers\' upcoming project designed specifically for forward-thinking investors who want to capitalize on the explosive growth potential of Dholera Smart City. This unique development combines agricultural and residential plot options, offering versatile investment opportunities that cater to different investor profiles and goals.',
      'Strategically positioned along the Dholera growth corridor, Soilscape benefits from direct proximity to the Ahmedabad-Dholera Expressway — one of the most important infrastructure projects connecting Gujarat\'s commercial capital to the smart city. This location advantage translates to excellent connectivity, rapid appreciation, and early-mover benefits for investors.',
      'The project features large plot sizes ideal for both agricultural use and future residential development. As Dholera SIR\'s infrastructure matures — with the international airport, metro rail, and industrial zones coming online — land values in this corridor are projected to see multi-fold appreciation over the next decade.',
      'Soilscape represents a rare window of opportunity to invest in India\'s smartest city at pre-development prices. With LNC Developers\' commitment to clear titles, legal verification, and transparent pricing, every plot comes with complete documentation and hassle-free ownership transfer.',
    ],
    image: 'https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?w=800&q=80',
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80',
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80',
      'https://images.unsplash.com/photo-1436491865332-7a61a109db05?w=800&q=80',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80',
    ],
    features: ['Near Expressway', 'Investment Friendly', 'Large Plots'],
    highlights: [
      { icon: '📐', label: 'Plot Sizes', value: '200 - 1000 Sq. Yards' },
      { icon: '📍', label: 'Location', value: 'Dholera Growth Corridor' },
      { icon: '🏗️', label: 'Status', value: 'Launching Soon' },
      { icon: '📈', label: 'ROI Potential', value: 'High Appreciation Zone' },
      { icon: '🛣️', label: 'Expressway', value: 'Direct Access' },
      { icon: '🌾', label: 'Land Type', value: 'Agri + Residential' },
    ],
    amenities: [
      { icon: '🛣️', title: 'Approach Road' },
      { icon: '⚡', title: 'Electricity Provision' },
      { icon: '🚰', title: 'Water Facility' },
      { icon: '🌳', title: 'Green Buffer Zones' },
      { icon: '🔒', title: 'Boundary Fencing' },
      { icon: '📍', title: 'Plot Demarcation' },
      { icon: '🏞️', title: 'Natural Surroundings' },
      { icon: '🚗', title: 'Easy Road Access' },
    ],
    location: {
      area: 'Dholera Growth Corridor, Gujarat',
      nearbyLandmarks: [
        'Ahmedabad-Dholera Expressway — 2 km',
        'Dholera International Airport — 20 km',
        'DMIC Industrial Hub — 15 km',
        'Dholera SIR Boundary — 5 km',
        'Proposed Railway Station — 12 km',
      ],
    },
    pricing: {
      startingFrom: 'Pre-launch Pricing Available',
      plotSizes: '200 - 1000 Sq. Yards',
      paymentPlan: 'Early Bird Discounts & Easy Payment Plans',
    },
    ctaPhone: '+919998068887',
    ctaWhatsApp: 'https://wa.me/919998068887?text=Hi%2C%20I%20am%20interested%20in%20Soilscape%20plots%20in%20Dholera',
  },
  {
    slug: 'upcoming-project',
    title: 'Upcoming Project',
    status: 'Coming Soon',
    tagline: 'The Next Chapter in Smart City Living',
    description: 'A new premium development is in planning. Register your interest to be the first to know when bookings open.',
    longDescription: [
      'LNC Developers is working on an exciting new project that will redefine premium living in Dholera Smart City. While details are being finalized, this development promises to combine the best of modern urban planning with the investment potential that Dholera SIR is renowned for.',
      'This upcoming project is being designed with insights gathered from our successful Aashirwad Enclave development and feedback from our growing community of 500+ investors. Every aspect — from plot sizes and amenities to location selection and infrastructure planning — is being optimized to deliver maximum value.',
      'By registering your interest now, you gain exclusive access to pre-launch pricing, priority plot selection, and early bird discounts that won\'t be available once the project officially launches. Our early investors have consistently benefited from significant appreciation, and this project aims to continue that legacy.',
      'Stay connected with LNC Developers for regular updates on this project. Our team is available to answer any questions and help you understand why early investment in Dholera Smart City is one of the smartest financial decisions you can make today.',
    ],
    image: 'https://images.unsplash.com/photo-1486718448742-163732cd1544?w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1486718448742-163732cd1544?w=800&q=80',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
      'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&q=80',
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80',
    ],
    features: ['Pre-launch Pricing', 'Priority Booking', 'Exclusive Access'],
    highlights: [
      { icon: '📐', label: 'Plot Sizes', value: 'To Be Announced' },
      { icon: '📍', label: 'Location', value: 'Dholera SIR, Gujarat' },
      { icon: '🏗️', label: 'Status', value: 'Under Planning' },
      { icon: '🎯', label: 'Launch', value: 'Coming Soon' },
      { icon: '💰', label: 'Pricing', value: 'Pre-launch Rates' },
      { icon: '⭐', label: 'Access', value: 'Priority Booking' },
    ],
    amenities: [
      { icon: '🏙️', title: 'Modern Planning' },
      { icon: '🛣️', title: 'Wide Roads' },
      { icon: '🌳', title: 'Green Spaces' },
      { icon: '⚡', title: 'Smart Infrastructure' },
      { icon: '🔒', title: 'Gated Community' },
      { icon: '🏋️', title: 'Lifestyle Amenities' },
    ],
    location: {
      area: 'Dholera Special Investment Region, Gujarat',
      nearbyLandmarks: [
        'Dholera International Airport — TBA',
        'Ahmedabad-Dholera Expressway — TBA',
        'DMIC Corridor — TBA',
      ],
    },
    ctaPhone: '+919998068887',
    ctaWhatsApp: 'https://wa.me/919998068887?text=Hi%2C%20I%20am%20interested%20in%20the%20upcoming%20LNC%20project%20in%20Dholera',
  },
]

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projectsData.find((p) => p.slug === slug)
}
