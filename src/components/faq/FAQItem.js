'use client'

import { useState } from 'react'
import { FiChevronDown } from 'react-icons/fi'
import { motion, AnimatePresence } from 'framer-motion'
import { useWebHaptics } from "web-haptics/react"

export default function FAQItem({ question, answer }) {
  const { trigger } = useWebHaptics()
  const [open, setOpen] = useState(false)

  return (
    <div className="rounded-lg overflow-hidden">
      <button
        onClick={() => {
          trigger("soft");
          setOpen(v => !v);
        }}
        className="w-full text-left px-4 py-3 bg-yellow text-black-custom font-semibold flex justify-between items-center"
        aria-expanded={open}
      >
        {question}
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="ml-2 block"
        >
          <FiChevronDown />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-4 py-3 bg-green-custom text-black-custom font-semibold text-sm">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
