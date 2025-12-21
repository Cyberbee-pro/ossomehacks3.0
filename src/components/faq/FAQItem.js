'use client'

import { useState } from 'react'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'

export default function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="rounded-lg overflow-hidden">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full text-left px-4 py-3 bg-yellow text-black-custom font-semibold flex justify-between items-center"
        aria-expanded={open}
      >
        {question}
        <span className="ml-2">
          {open ? <FiChevronUp /> : <FiChevronDown />}
        </span>
      </button>

      {open && (
        <div className="px-4 py-3 bg-green-custom text-black-custom font-semibold text-sm">
          {answer}
        </div>
      )}
    </div>
  )
}
