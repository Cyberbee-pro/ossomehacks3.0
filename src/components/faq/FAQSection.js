// components/FAQSection.jsx
'use client'

import { useEffect, useState } from 'react'
import FAQCategories from './FAQCategories'
import FAQAccordion from './FAQAccordian'

export default function FAQSection() {
  const [faqs, setFaqs] = useState([])
  const [category, setCategory] = useState('General')

  useEffect(() => {
    fetch('https://debojyoti-projects.free.beeceptor.com/faq-gcsrm-os3.0')
      .then(res => res.json())
      .then(setFaqs)
  }, [])

  const categories = [...new Set(faqs.map(f => f.category))]
  const filtered = faqs.filter(f => f.category === category)

  return (
    <section className="w-full px-4 py-8 flex justify-center">
      <div className="w-full max-w-3xl rounded-xl p-6">
        <h2 className="text-center text-yellow text-5xl font-semibold mb-4">
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
