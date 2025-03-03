"use client"

import { motion } from "framer-motion"

interface DataFlowProps {
  startX: number
  startY: number
  endX: number
  endY: number
  color: string
  animate?: boolean
  label?: string
}

export default function DataFlow({ startX, startY, endX, endY, color, animate = false, label }: DataFlowProps) {
  const getColor = () => {
    switch (color) {
      case "blue":
        return "#3b82f6"
      case "green":
        return "#22c55e"
      case "purple":
        return "#9333ea"
      case "orange":
        return "#ea580c"
      default:
        return "#9ca3af"
    }
  }

  // Calculate control points for a curved path
  const midX = (startX + endX) / 2
  const midY = (startY + endY) / 2
  const curvature = Math.abs(endY - startY) / 2

  // Create path string for a curved line
  const path = `M ${startX},${startY} Q ${midX},${midY + curvature} ${endX},${endY}`

  return (
    <svg className="absolute inset-0 w-full h-full overflow-visible pointer-events-none">
      {/* Base path */}
      <path d={path} fill="none" stroke={getColor()} strokeWidth="2" strokeLinecap="round" opacity="0.6" />

      {/* Data flow label */}
      {label && (
        <text
          x={midX}
          y={midY + curvature - 10}
          textAnchor="middle"
          className="text-xs fill-current"
          style={{ fill: getColor() }}
        >
          {label}
        </text>
      )}

      {animate && (
        <>
          {/* Animated dots with improved spacing */}
          <motion.circle
            cx="0"
            cy="0"
            r="4"
            fill={getColor()}
            animate={{
              offsetDistance: ["0%", "100%"],
            }}
            transition={{
              duration: 3,
              ease: "linear",
              repeat: Number.POSITIVE_INFINITY,
            }}
            style={{
              offsetPath: `path("${path}")`,
            }}
          />

          <motion.circle
            cx="0"
            cy="0"
            r="4"
            fill={getColor()}
            animate={{
              offsetDistance: ["25%", "125%"],
            }}
            transition={{
              duration: 3,
              ease: "linear",
              repeat: Number.POSITIVE_INFINITY,
            }}
            style={{
              offsetPath: `path("${path}")`,
            }}
          />

          <motion.circle
            cx="0"
            cy="0"
            r="4"
            fill={getColor()}
            animate={{
              offsetDistance: ["50%", "150%"],
            }}
            transition={{
              duration: 3,
              ease: "linear",
              repeat: Number.POSITIVE_INFINITY,
            }}
            style={{
              offsetPath: `path("${path}")`,
            }}
          />

          <motion.circle
            cx="0"
            cy="0"
            r="4"
            fill={getColor()}
            animate={{
              offsetDistance: ["75%", "175%"],
            }}
            transition={{
              duration: 3,
              ease: "linear",
              repeat: Number.POSITIVE_INFINITY,
            }}
            style={{
              offsetPath: `path("${path}")`,
            }}
          />
        </>
      )}
    </svg>
  )
}

