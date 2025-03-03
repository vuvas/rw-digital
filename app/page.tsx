import HealthSystemComparison from "@/components/health-system-comparison"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-8 lg:p-12">
      <div className="w-full max-w-7xl">
    
        <HealthSystemComparison />
      </div>
    </main>
  )
}

