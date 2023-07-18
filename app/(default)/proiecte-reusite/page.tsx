export const metadata = {
  title: 'Proiecte Reusite',
  description: 'Page description',
}

import PricingTables from '@/components/pricing-tables'
import FeaturesTable from '@/components/features-table'
import TestimonialsCarousel from '@/components/testimonials-carousel'
import Faqs from '@/components/faqs'
import Cta from '@/components/cta'

export default function Pricing() {
  return (
    <>
      {/* <PricingTables />
      <FeaturesTable /> */}
      <TestimonialsCarousel />
      {/* <Faqs />
      <Cta /> */}
    </>
  )
}
