'use client'

import { useState } from 'react'
import FAQCategories from './FAQCategories'
import FAQAccordion from './FAQAccordian'
import { faq_data } from '@/data/faq'

export default function FAQSection() {
  const [faqs] = useState(faq_data)
  const [category, setCategory] = useState('General')

  const categories = [...new Set(faqs.map(f => f.category))]
  const filtered = faqs.filter(f => f.category === category)

  return (
    <section className="w-full px-4 py-8 flex justify-center">
      <div className="w-full max-w-3xl rounded-xl p-6">
        <h2 className="text-center font-poppins font-bold text-yellow text-5xl sm:text-7xl xl:text-8xl mb-12">
          FAQs
        </h2>

        <FAQCategories
          categories={categories}
          active={category}
          onChange={setCategory}
        />

        <FAQAccordion items={filtered} />
      </div>
    </section>
  )
}
