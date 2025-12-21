// components/FAQAccordion.jsx
import FAQItem from './FAQItem'

export default function FAQAccordion({ items }) {
  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <FAQItem key={i} {...item} />
      ))}
    </div>
  )
}
