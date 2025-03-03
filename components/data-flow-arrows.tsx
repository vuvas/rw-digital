"use client"

import { motion } from "framer-motion"

interface DataFlowArrowsProps {
  color?: string
}

export default function DataFlowArrows({ color = "#00A950" }: DataFlowArrowsProps) {
  return (
    <div className="relative h-16 mb-8">
      {" "}
      {/* Increased height from h-8 to h-16 */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Upward flowing arrow */}
        <motion.div
          className="absolute h-8 w-8 text-2xl" /* Increased from h-4 w-4 to h-8 w-8 and added text-2xl */
          style={{ color }}
          initial={{ y: 40, opacity: 0 }} /* Adjusted y value for larger movement range */
          animate={{ y: -40, opacity: [0, 1, 0] }}
          transition={{
            duration: 2.5 /* Slightly increased duration */,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        >
          ↑
        </motion.div>

        {/* Downward flowing arrow */}
        <motion.div
          className="absolute h-8 w-8 text-2xl" /* Increased from h-4 w-4 to h-8 w-8 and added text-2xl */
          style={{ color }}
          initial={{ y: -40, opacity: 0 }} /* Adjusted y value for larger movement range */
          animate={{ y: 40, opacity: [0, 1, 0] }}
          transition={{
            duration: 2.5 /* Slightly increased duration */,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
            delay: 1.25 /* Adjusted delay for smoother alternation */,
          }}
        >
          ↓
        </motion.div>
      </div>
    </div>
  )
}

