"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Hospital, Building2, Settings, Info } from "lucide-react"
import DataFlow from "@/components/data-flow"

// Define the system data structure
interface SystemNode {
  id: string
  name: string
  description: string
  container: string
  icon: "facility" | "agency" | "system"
  position: { x: number; y: number }
  currentState: boolean
  futureState: boolean
}

// Define the connection data structure
interface Connection {
  id: string
  source: string
  target: string
  currentState: boolean
  futureState: boolean
}

export default function HealthSystemVisualization() {
  const [showFutureState, setShowFutureState] = useState(false)
  const [expandedSystem, setExpandedSystem] = useState<string | null>(null)

  // Define system nodes
  const systems: SystemNode[] = [
    // Health Facility Container
    {
      id: "openMRS",
      name: "Operational EMR (OpenMRS)",
      description: "Electronic Medical Record system for patient data management",
      container: "healthFacility",
      icon: "system",
      position: { x: 150, y: 100 },
      currentState: true,
      futureState: true,
    },
    {
      id: "dhis2NCD",
      name: "DHIS2 Tracker for NCD",
      description: "Disease tracking system for Non-Communicable Diseases",
      container: "healthFacility",
      icon: "system",
      position: { x: 150, y: 180 },
      currentState: true,
      futureState: true,
    },
    {
      id: "dhis2Immunization",
      name: "DHIS2 Tracker for Immunization",
      description: "Immunization tracking and management system",
      container: "healthFacility",
      icon: "system",
      position: { x: 150, y: 260 },
      currentState: true,
      futureState: true,
    },
    {
      id: "eLMIS",
      name: "eLMIS",
      description: "Electronic Logistics Management Information System for facility-level inventory",
      container: "healthFacility",
      icon: "system",
      position: { x: 150, y: 340 },
      currentState: true,
      futureState: true,
    },

    // Country Medical Supply Agency Container
    {
      id: "sageERP",
      name: "SAGE ERP",
      description: "Enterprise Resource Planning system for medical supply management",
      container: "medicalSupplyAgency",
      icon: "system",
      position: { x: 550, y: 140 },
      currentState: true,
      futureState: true,
    },
    {
      id: "openLMIS",
      name: "OpenLMIS",
      description: "Open source Logistics Management Information System for national level",
      container: "medicalSupplyAgency",
      icon: "system",
      position: { x: 550, y: 220 },
      currentState: true,
      futureState: true,
    },

    // Future Systems
    {
      id: "npc",
      name: "National Product Catalog (NPC)",
      description: "Centralized catalog of all medical products and supplies",
      container: "future",
      icon: "system",
      position: { x: 350, y: 50 },
      currentState: false,
      futureState: true,
    },
    {
      id: "facilityReg",
      name: "Facility Registration System",
      description: "System for registering and managing health facilities",
      container: "future",
      icon: "system",
      position: { x: 350, y: 130 },
      currentState: false,
      futureState: true,
    },
    {
      id: "hhr",
      name: "Health Human Resources (HHR)",
      description: "System for managing healthcare workforce",
      container: "future",
      icon: "system",
      position: { x: 350, y: 210 },
      currentState: false,
      futureState: true,
    },
    {
      id: "nid",
      name: "National ID (NID)",
      description: "National identification system",
      container: "future",
      icon: "system",
      position: { x: 350, y: 290 },
      currentState: false,
      futureState: true,
    },
    {
      id: "eHealth",
      name: "eHealth Platform",
      description: "Integrated digital health platform",
      container: "future",
      icon: "system",
      position: { x: 350, y: 370 },
      currentState: false,
      futureState: true,
    },
  ]

  // Define connections between systems
  const connections: Connection[] = [
    // Current state connections
    {
      id: "conn1",
      source: "eLMIS",
      target: "openLMIS",
      currentState: true,
      futureState: true,
    },
    {
      id: "conn2",
      source: "openMRS",
      target: "dhis2NCD",
      currentState: true,
      futureState: true,
    },
    {
      id: "conn3",
      source: "openMRS",
      target: "dhis2Immunization",
      currentState: true,
      futureState: true,
    },

    // Future state connections
    {
      id: "conn4",
      source: "npc",
      target: "sageERP",
      currentState: false,
      futureState: true,
    },
    {
      id: "conn5",
      source: "npc",
      target: "eHealth",
      currentState: false,
      futureState: true,
    },
    {
      id: "conn6",
      source: "facilityReg",
      target: "sageERP",
      currentState: false,
      futureState: true,
    },
    {
      id: "conn7",
      source: "facilityReg",
      target: "eHealth",
      currentState: false,
      futureState: true,
    },
    {
      id: "conn8",
      source: "hhr",
      target: "nid",
      currentState: false,
      futureState: true,
    },
    {
      id: "conn9",
      source: "openLMIS",
      target: "sageERP",
      currentState: true,
      futureState: true,
    },
  ]

  // Filter systems and connections based on current/future state
  const visibleSystems = systems.filter((system) => (showFutureState ? system.futureState : system.currentState))

  const visibleConnections = connections.filter((connection) =>
    showFutureState ? connection.futureState : connection.currentState,
  )

  // Handle system click to expand/collapse details
  const handleSystemClick = (systemId: string) => {
    if (expandedSystem === systemId) {
      setExpandedSystem(null)
    } else {
      setExpandedSystem(systemId)
    }
  }

  // Get icon component based on type
  const getIconComponent = (iconType: string, className: string) => {
    switch (iconType) {
      case "facility":
        return <Hospital className={className} />
      case "agency":
        return <Building2 className={className} />
      case "system":
        return <Settings className={className} />
      default:
        return <Settings className={className} />
    }
  }

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-2">
          <Switch id="future-state" checked={showFutureState} onCheckedChange={setShowFutureState} />
          <Label htmlFor="future-state">{showFutureState ? "Future Optimized System" : "Current System"}</Label>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <Hospital className="h-4 w-4" />
            <span className="text-xs">Health Facility</span>
          </div>
          <div className="flex items-center gap-1">
            <Building2 className="h-4 w-4" />
            <span className="text-xs">Agency</span>
          </div>
          <div className="flex items-center gap-1">
            <Settings className="h-4 w-4" />
            <span className="text-xs">System</span>
          </div>
        </div>
      </div>

      <div className="relative border rounded-lg overflow-hidden" style={{ height: "600px" }}>
        <TooltipProvider>
          {/* Health Facility Container */}
          <motion.div
            className={`absolute left-4 top-4 p-4 rounded-lg border-2 ${showFutureState ? "border-blue-500 bg-blue-50" : "border-gray-400 bg-gray-100"}`}
            style={{ width: "280px", height: "400px" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Hospital className={`h-5 w-5 ${showFutureState ? "text-blue-600" : "text-gray-600"}`} />
              <h3 className={`font-bold ${showFutureState ? "text-blue-600" : "text-gray-600"}`}>Health Facility</h3>
            </div>

            {visibleSystems
              .filter((system) => system.container === "healthFacility")
              .map((system) => (
                <Tooltip key={system.id}>
                  <TooltipTrigger asChild>
                    <motion.div
                      className={`p-2 mb-2 rounded cursor-pointer flex items-center gap-2 ${
                        showFutureState
                          ? "bg-white border border-blue-200 hover:border-blue-400"
                          : "bg-gray-200 border border-gray-300 hover:border-gray-500"
                      } ${expandedSystem === system.id ? "ring-2 ring-primary" : ""}`}
                      onClick={() => handleSystemClick(system.id)}
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      {getIconComponent(system.icon, `h-4 w-4 ${showFutureState ? "text-blue-500" : "text-gray-500"}`)}
                      <span className={`text-sm ${showFutureState ? "text-blue-800" : "text-gray-800"}`}>
                        {system.name}
                      </span>
                    </motion.div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{system.description}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
          </motion.div>

          {/* Country Medical Supply Agency Container */}
          <motion.div
            className={`absolute right-4 top-4 p-4 rounded-lg border-2 ${showFutureState ? "border-green-500 bg-green-50" : "border-gray-400 bg-gray-100"}`}
            style={{ width: "280px", height: "280px" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Building2 className={`h-5 w-5 ${showFutureState ? "text-green-600" : "text-gray-600"}`} />
              <h3 className={`font-bold ${showFutureState ? "text-green-600" : "text-gray-600"}`}>
                Country Medical Supply Agency
              </h3>
            </div>

            {visibleSystems
              .filter((system) => system.container === "medicalSupplyAgency")
              .map((system) => (
                <Tooltip key={system.id}>
                  <TooltipTrigger asChild>
                    <motion.div
                      className={`p-2 mb-2 rounded cursor-pointer flex items-center gap-2 ${
                        showFutureState
                          ? "bg-white border border-green-200 hover:border-green-400"
                          : "bg-gray-200 border border-gray-300 hover:border-gray-500"
                      } ${expandedSystem === system.id ? "ring-2 ring-primary" : ""}`}
                      onClick={() => handleSystemClick(system.id)}
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      {getIconComponent(system.icon, `h-4 w-4 ${showFutureState ? "text-green-500" : "text-gray-500"}`)}
                      <span className={`text-sm ${showFutureState ? "text-green-800" : "text-gray-800"}`}>
                        {system.name}
                      </span>
                    </motion.div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{system.description}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
          </motion.div>

          {/* Future Systems Container - Only visible in future state */}
          <AnimatePresence>
            {showFutureState && (
              <motion.div
                className="absolute left-1/2 top-4 p-4 rounded-lg border-2 border-purple-500 bg-purple-50"
                style={{ width: "280px", height: "450px", transform: "translateX(-50%)" }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <Info className="h-5 w-5 text-purple-600" />
                  <h3 className="font-bold text-purple-600">Integration Systems</h3>
                </div>

                {visibleSystems
                  .filter((system) => system.container === "future")
                  .map((system) => (
                    <Tooltip key={system.id}>
                      <TooltipTrigger asChild>
                        <motion.div
                          className={`p-2 mb-2 rounded cursor-pointer flex items-center gap-2 bg-white border border-purple-200 hover:border-purple-400 ${expandedSystem === system.id ? "ring-2 ring-primary" : ""}`}
                          onClick={() => handleSystemClick(system.id)}
                          whileHover={{ scale: 1.02 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                          {getIconComponent(system.icon, "h-4 w-4 text-purple-500")}
                          <span className="text-sm text-purple-800">{system.name}</span>
                        </motion.div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{system.description}</p>
                      </TooltipContent>
                    </Tooltip>
                  ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Data Flow Connections */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {visibleConnections.map((connection) => {
              const sourceSystem = systems.find((s) => s.id === connection.source)
              const targetSystem = systems.find((s) => s.id === connection.target)

              if (!sourceSystem || !targetSystem) return null

              // Calculate connection points based on container positions
              let sourceX, sourceY, targetX, targetY

              if (sourceSystem.container === "healthFacility") {
                sourceX = 284 // Right edge of health facility container
                sourceY = 100 + (systems.findIndex((s) => s.id === connection.source) % 4) * 80 + 24
              } else if (sourceSystem.container === "medicalSupplyAgency") {
                sourceX = 550 // Left edge of medical supply agency container
                sourceY = 140 + (systems.findIndex((s) => s.id === connection.source) % 2) * 80 + 24
              } else {
                sourceX = 350 + 140 // Right edge of future systems container
                sourceY = 50 + (systems.findIndex((s) => s.id === connection.source) % 5) * 80 + 24
              }

              if (targetSystem.container === "healthFacility") {
                targetX = 284 // Right edge of health facility container
                targetY = 100 + (systems.findIndex((s) => s.id === connection.target) % 4) * 80 + 24
              } else if (targetSystem.container === "medicalSupplyAgency") {
                targetX = 550 // Left edge of medical supply agency container
                targetY = 140 + (systems.findIndex((s) => s.id === connection.target) % 2) * 80 + 24
              } else {
                targetX = 350 + 140 // Right edge of future systems container
                targetY = 50 + (systems.findIndex((s) => s.id === connection.target) % 5) * 80 + 24
              }

              return (
                <DataFlow
                  key={connection.id}
                  sourceX={sourceX}
                  sourceY={sourceY}
                  targetX={targetX}
                  targetY={targetY}
                  color={showFutureState ? (connection.currentState ? "blue" : "purple") : "gray"}
                />
              )
            })}
          </svg>

          {/* System Details Panel - Shows when a system is expanded */}
          <AnimatePresence>
            {expandedSystem && (
              <motion.div
                className={`absolute bottom-4 left-4 right-4 p-4 rounded-lg border-2 ${showFutureState ? "border-primary bg-white" : "border-gray-400 bg-gray-100"}`}
                style={{ maxHeight: "150px" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
              >
                {(() => {
                  const system = systems.find((s) => s.id === expandedSystem)
                  if (!system) return null

                  return (
                    <>
                      <div className="flex justify-between items-start">
                        <div className="flex items-center gap-2">
                          {getIconComponent(
                            system.icon,
                            `h-5 w-5 ${showFutureState ? "text-primary" : "text-gray-600"}`,
                          )}
                          <h3 className={`font-bold ${showFutureState ? "text-primary" : "text-gray-600"}`}>
                            {system.name}
                          </h3>
                        </div>
                      </div>
                      <p className="mt-2 text-sm text-muted-foreground">{system.description}</p>
                      <div className="mt-2">
                        <span className="text-xs font-medium">Connections:</span>
                        <div className="flex flex-wrap gap-2 mt-1">
                          {connections
                            .filter((conn) => conn.source === system.id || conn.target === system.id)
                            .filter((conn) => (showFutureState ? conn.futureState : conn.currentState))
                            .map((conn) => {
                              const connectedSystemId = conn.source === system.id ? conn.target : conn.source
                              const connectedSystem = systems.find((s) => s.id === connectedSystemId)
                              return (
                                <span
                                  key={conn.id}
                                  className={`text-xs px-2 py-1 rounded-full ${
                                    showFutureState
                                      ? conn.currentState
                                        ? "bg-blue-100 text-blue-800"
                                        : "bg-purple-100 text-purple-800"
                                      : "bg-gray-200 text-gray-800"
                                  }`}
                                >
                                  {connectedSystem?.name}
                                </span>
                              )
                            })}
                        </div>
                      </div>
                    </>
                  )
                })()}
              </motion.div>
            )}
          </AnimatePresence>
        </TooltipProvider>
      </div>
    </div>
  )
}

