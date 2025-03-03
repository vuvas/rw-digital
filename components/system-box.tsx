"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"

interface Module {
  name: string
  icon: React.ReactNode
  color: string
  description: string
}

type DataIntegrationItem = {}

interface SystemBoxProps {
  name: string
  description: string
  icon: React.ReactNode
  color: string
  modules?: Module[]
  integrations?: DataIntegrationItem[]
  defaultExpanded?: boolean
  hasMoreModules?: boolean
}

function SystemBox({
  name,
  description,
  icon,
  color,
  modules,
  integrations,
  defaultExpanded = false,
  hasMoreModules = false,
}: SystemBoxProps) {
  const [expanded, setExpanded] = useState(defaultExpanded)

  const getColorClasses = () => {
    switch (color) {
      case "blue":
        return "bg-blue-50 border-blue-200 hover:border-blue-300"
      case "gray":
        return "bg-gray-50 border-gray-200 hover:border-gray-300"
      default:
        return "bg-gray-50 border-gray-200 hover:border-gray-300"
    }
  }

  const getIconColor = () => {
    switch (color) {
      case "blue":
        return "text-[#00A0D8]"
      case "gray":
        return "text-gray-500"
      default:
        return "text-gray-500"
    }
  }

  return (
    <motion.div
      className={`p-3 rounded-md border ${getColorClasses()} cursor-pointer`}
      onClick={() => modules && setExpanded(!expanded)}
      whileHover={{ scale: modules ? 1.02 : 1 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <div className="flex items-center gap-2">
        <div className={getIconColor()}>{icon}</div>
        <span className={`font-medium ${color === "blue" ? "text-[#00A0D8]" : "text-gray-600"}`}>{name}</span>
      </div>
      <div className="text-xs mt-1 text-muted-foreground">{description}</div>

      {modules && (
        <motion.div
          className="mt-2 overflow-hidden"
          initial={{ height: 0 }}
          animate={{ height: expanded ? "auto" : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="text-xs font-medium mt-1 mb-2">Key Modules:</div>
          <div className="grid grid-cols-1 gap-2">
            {modules.map((module, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-3 rounded-md bg-white hover:bg-white/90 transition-colors shadow-sm"
              >
                <div className={`mt-1 ${module.color}`}>{module.icon}</div>
                <div className="flex-1 min-w-0">
                  <div className={`text-sm font-medium mb-1 ${color === "blue" ? "text-[#00A0D8]" : "text-gray-600"}`}>
                    {module.name}
                  </div>
                  <div className="text-sm text-gray-600 leading-snug">{module.description}</div>
                </div>
              </div>
            ))}
            {hasMoreModules && (
              <div className="text-center py-2 mt-1 text-sm text-[#00A0D8]">
                + Additional specialized modules available
              </div>
            )}
          </div>
        </motion.div>
      )}

      {modules && (
        <div className={`text-xs mt-3 flex justify-end ${color === "blue" ? "text-[#00A0D8]" : "text-gray-500"}`}>
          {expanded ? "Click to collapse" : "Click to expand modules"}
        </div>
      )}
    </motion.div>
  )
}

export default SystemBox

