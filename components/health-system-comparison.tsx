"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Hospital,
  Building2,
  Database,
  Layers,
  FileSpreadsheet,
  Network,
  Syringe,
  PillIcon as Pills,
  TestTube,
  Boxes,
  BarChart4,
  Wallet,
  Truck,
  ClipboardList,
} from "lucide-react"
import DataFlowArrows from "./data-flow-arrows"
import KeyTransformation from "./key-transformation"
import RwandaFlag from "./rwanda-flag"

interface DataIntegrationItem {
  color: string
  text: string
}

interface Module {
  name: string
  icon: React.ReactNode
  color: string
  description: string
}

function getModulesBySystem(system: string): Module[] {
  switch (system) {
    case "SAGE SAP":
      return [
        {
          name: "Supply Chain Management",
          icon: <Truck className="w-4 h-4" />,
          color: "text-orange-600",
          description: "End-to-end supply chain visibility and control",
        },
        {
          name: "Logistics Management",
          icon: <Boxes className="w-4 h-4" />,
          color: "text-purple-600",
          description: "Inventory distribution and logistics tracking",
        },
        {
          name: "Inventory Management",
          icon: <ClipboardList className="w-4 h-4" />,
          color: "text-emerald-600",
          description: "Stock level monitoring and management",
        },
        {
          name: "Financial Management",
          icon: <Wallet className="w-4 h-4" />,
          color: "text-blue-600",
          description: "Budget and financial resource tracking",
        },
      ]
    case "eBuzima":
      return [
        {
          name: "Clinical Module",
          icon: <Database className="w-4 h-4" />,
          color: "text-blue-600",
          description: "Comprehensive patient health records and clinical documentation management",
        },
        {
          name: "Immunization Module",
          icon: <Syringe className="w-4 h-4" />,
          color: "text-green-600",
          description: "Complete vaccination tracking, scheduling, and coverage monitoring",
        },
        {
          name: "Pharmacy Module",
          icon: <Pills className="w-4 h-4" />,
          color: "text-purple-600",
          description: "End-to-end medication management, prescriptions, and inventory",
        },
        {
          name: "Laboratory Module",
          icon: <TestTube className="w-4 h-4" />,
          color: "text-amber-600",
          description: "Comprehensive lab test ordering, processing, and results management",
        },
        {
          name: "Inventory Module",
          icon: <Boxes className="w-4 h-4" />,
          color: "text-emerald-600",
          description: "Real-time facility-level medical supply and stock management",
        },
        {
          name: "Reporting Module",
          icon: <BarChart4 className="w-4 h-4" />,
          color: "text-rose-600",
          description: "Advanced analytics, KPI tracking, and customizable reports",
        },
      ]
    default:
      return []
  }
}

export default function HealthSystemComparison() {
  // const [activeTab, setActiveTab] = useState("side-by-side")

  return (
    <div className="w-full mx-auto max-w-7xl">
      <div className="mb-8 text-center">
        <div className="flex items-center justify-center gap-3 mb-2">
          <RwandaFlag />
          <h1 className="text-3xl font-bold text-[#00A0D8]">Rwanda Health System Architecture</h1>
        </div>
        <p className="text-muted-foreground">Rwanda Digital Health Current and Future State</p>
      </div>

      <div className="space-y-4">
        {/* RMS Row */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Current RMS */}
          <div className="p-4 border-2 border-gray-300 rounded-lg bg-gray-50/50">
            <div className="flex items-center gap-2 mb-4">
              <Building2 className="w-5 h-5 text-gray-600" />
              <h3 className="font-bold text-gray-600">Rwanda Medical Supply (RMS)</h3>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <SystemBox
                name="SAGE ERP"
                description="Enterprise Resource Planning"
                icon={<Database className="w-4 h-4" />}
                color="gray"
              />

              <SystemBox
                name="eLMIS / OpenLMIS"
                description="Logistics Management at RMS"
                icon={<Layers className="w-4 h-4" />}
                color="gray"
              />
            </div>
          </div>

          {/* Future RMS */}
          <div className="border-2 border-[#00A0D8] rounded-lg p-4 bg-blue-50/50">
            <div className="flex items-center gap-2 mb-4">
              <Building2 className="h-5 w-5 text-[#00A0D8]" />
              <h3 className="font-bold text-[#00A0D8]">Rwanda Medical Supply (RMS)</h3>
            </div>

            <div className="grid grid-cols-1 gap-3">
              <SystemBox
                name="SAGE SAP"
                description="Consolidated enterprise system"
                icon={<Database className="w-4 h-4" />}
                color="blue"
                modules={getModulesBySystem("SAGE SAP")}
                defaultExpanded={true}
              />
            </div>
          </div>
        </div>

        {/* Data Flow States */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="hidden md:block" /> {/* Empty div for grid alignment */}
          {/* Future State Flow */}
          <div className="relative">
            <DataFlowArrows color="#00A0D8" />
          </div>
        </div>

        {/* Health Facility Row */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Current Health Facility */}
          <div className="p-4 border-2 border-gray-300 rounded-lg bg-gray-50/50">
            <div className="flex items-center gap-2 mb-4">
              <Hospital className="w-5 h-5 text-gray-600" />
              <h3 className="font-bold text-gray-600">Health Facility</h3>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <SystemBox
                name="EMR (OpenMRS)"
                description="Electronic Medical Record system"
                icon={<Database className="w-4 h-4" />}
                color="gray"
              />

              <SystemBox
                name="DHIS2 Immunization Tracker"
                description="Disease tracking for immunization"
                icon={<FileSpreadsheet className="w-4 h-4" />}
                color="gray"
              />

              <SystemBox
                name="DHIS2 NCD Tracker"
                description="Disease tracking for Non-Communicable Diseases"
                icon={<FileSpreadsheet className="w-4 h-4" />}
                color="gray"
              />

              <SystemBox
                name="DHIS2 Report"
                description="Aggregate reporting system"
                icon={<FileSpreadsheet className="w-4 h-4" />}
                color="gray"
              />

              <SystemBox
                name="OpenMRS"
                description="Pharmacy management"
                icon={<Database className="w-4 h-4" />}
                color="gray"
              />

              <SystemBox
                name="eLMIS"
                description="Electronic Logistics Management"
                icon={<Layers className="w-4 h-4" />}
                color="gray"
              />
            </div>
          </div>

          {/* Future Health Facility */}
          <div className="border-2 border-[#00A0D8] rounded-lg p-4 bg-blue-50/50">
            <div className="flex items-center gap-2 mb-4">
              <Hospital className="h-5 w-5 text-[#00A0D8]" />
              <h3 className="font-bold text-[#00A0D8]">Health Facility</h3>
            </div>

            <div className="grid grid-cols-1 gap-3">
              <SystemBox
                name="eBuzima"
                description="Integrated health information platform with 15+ specialized modules for comprehensive healthcare management"
                icon={<Network className="w-4 h-4" />}
                color="blue"
                modules={getModulesBySystem("eBuzima")}
                defaultExpanded={true}
              />
            </div>
          </div>
        </div>
      </div>

      <KeyTransformation />
    </div>
  )
}

interface SystemBoxProps {
  name: string
  description: string
  icon: React.ReactNode
  color: string
  modules?: Module[]
  integrations?: DataIntegrationItem[]
  defaultExpanded?: boolean
}

function SystemBox({ name, description, icon, color, modules, integrations, defaultExpanded = false }: SystemBoxProps) {
  const [expanded, setExpanded] = useState(defaultExpanded)
  console.log("integrations", integrations)

  const getColorClasses = () => {
    switch (color) {
      case "blue":
        return "bg-blue-100 border-blue-300 hover:border-blue-400"
      case "green":
        return "bg-green-100 border-green-300 hover:border-green-400"
      case "purple":
        return "bg-purple-100 border-purple-300 hover:border-purple-400"
      case "orange":
        return "bg-orange-100 border-orange-300 hover:border-orange-400"
      case "gray":
        return "bg-gray-100 border-gray-300 hover:border-gray-400"
      default:
        return "bg-gray-100 border-gray-300 hover:border-gray-400"
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
        {icon}
        <span className="font-medium">{name}</span>
      </div>
      <div className="mt-1 text-xs text-muted-foreground">{description}</div>

      {modules && (
        <motion.div
          className="mt-2 overflow-hidden"
          initial={{ height: 0 }}
          animate={{ height: expanded ? "auto" : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="mt-1 mb-2 text-xs font-medium">Modules:</div>
          <div className="grid grid-cols-2 gap-2">
            {modules.map((module, index) => (
              <div
                key={index}
                className="flex items-start gap-2 p-2 transition-colors rounded-md bg-white/50 hover:bg-white"
              >
                <div className={`mt-0.5 ${module.color}`}>{module.icon}</div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-medium truncate">{module.name}</div>
                  <div className="text-[10px] text-muted-foreground truncate">{module.description}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {modules && (
        <div className="flex justify-end mt-2 text-xs text-blue-600">
          {expanded ? "Click to collapse" : "Click to expand modules"}
        </div>
      )}
    </motion.div>
  )
}

