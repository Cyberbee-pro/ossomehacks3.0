// components/FAQCategories.jsx
export default function FAQCategories({ categories, active, onChange }) {
  return (
    <div className="flex flex-wrap gap-2 justify-center mb-6">
      {categories.map(cat => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={`px-4 py-1 rounded text-sm font-medium
            ${active === cat
              ? 'bg-navy text-text font-semibold py-1'
              : 'bg-foreground text-black-custom font-semibold py-1'
            }`}
          aria-pressed={active === cat}
        >
          {cat}
        </button>
      ))}
    </div>
  )
}
