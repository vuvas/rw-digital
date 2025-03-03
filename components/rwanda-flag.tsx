"use client"

export default function RwandaFlag() {
  return (
    <div className="relative w-12 h-8 shadow-sm rounded-sm overflow-hidden">
      {/* Blue stripe */}
      <div className="absolute inset-0 h-1/3 bg-[#00A0D8]"></div>
      {/* Yellow stripe */}
      <div className="absolute inset-0 top-1/3 h-1/3 bg-[#FAB316]"></div>
      {/* Green stripe */}
      <div className="absolute inset-0 top-2/3 h-1/3 bg-[#00A950]"></div>
      {/* Sun symbol */}
      <div className="absolute top-0 right-3 w-4 h-4 mt-0.5">
        <div className="absolute inset-0 bg-[#FAB316] rounded-full"></div>
        {/* Sun rays */}
        {[...Array(24)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-2 bg-[#FAB316] origin-bottom"
            style={{
              left: "50%",
              bottom: "50%",
              transform: `rotate(${i * 15}deg) translateX(-50%)`,
            }}
          ></div>
        ))}
      </div>
    </div>
  )
}

