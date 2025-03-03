"use client"

import { Check, ArrowDownUp, Database, Network } from "lucide-react"

export default function KeyTransformation() {
  return (
    <div className="mt-8 p-6 bg-gradient-to-br from-gray-50 to-blue-50 rounded-lg border border-[#00A0D8]">
      <h3 className="font-bold text-lg mb-4 text-[#00A0D8] flex items-center gap-2">
        <Check className="h-5 w-5" />
        Transformation Impact
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* System Integration */}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-blue-200 rounded-lg opacity-20"></div>
          <div className="bg-white/90 p-4 rounded-lg border border-[#00A0D8] shadow-sm relative">
            <div className="flex items-center gap-2 text-[#00A0D8] mb-2">
              <Network className="h-5 w-5" />
              <h4 className="font-semibold">System Integration</h4>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-gray-500">Fragmented</span>
              <ArrowDownUp className="h-4 w-4 text-[#00A0D8]" />
              <span className="text-[#00A0D8] font-medium">Unified</span>
            </div>
          </div>
        </div>

        {/* Data Flow */}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-blue-200 rounded-lg opacity-20"></div>
          <div className="bg-white/90 p-4 rounded-lg border border-[#00A0D8] shadow-sm relative">
            <div className="flex items-center gap-2 text-[#00A0D8] mb-2">
              <ArrowDownUp className="h-5 w-5" />
              <h4 className="font-semibold">Data Exchange</h4>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-gray-500">Manual</span>
              <ArrowDownUp className="h-4 w-4 text-[#00A0D8]" />
              <span className="text-[#00A0D8] font-medium">Automated</span>
            </div>
          </div>
        </div>

        {/* Data Management */}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-blue-200 rounded-lg opacity-20"></div>
          <div className="bg-white/90 p-4 rounded-lg border border-[#00A0D8] shadow-sm relative">
            <div className="flex items-center gap-2 text-[#00A0D8] mb-2">
              <Database className="h-5 w-5" />
              <h4 className="font-semibold">Data Management</h4>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-gray-500">Siloed</span>
              <ArrowDownUp className="h-4 w-4 text-[#00A0D8]" />
              <span className="text-[#00A0D8] font-medium">Centralized</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

