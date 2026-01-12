export default function FAQCategories({ categories, active, onChange }) {
  return (
    <div className="flex flex-wrap gap-2 justify-center mb-6">
      {categories.map(cat => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={`px-2 min-w-25 shrink-0 py-3 rounded-xl text-sm font-medium
            ${active === cat
              ? 'bg-navy text-text font-semibold py-1'
              : 'bg-text text-black-custom font-semibold py-1'
            }`}
          aria-pressed={active === cat}
        >
          {cat}
        </button>
      ))}
    </div>
  )
}
