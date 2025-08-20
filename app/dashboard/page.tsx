import { ProgressDashboard } from "@/components/progress-dashboard"

export default function DashboardPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Learning Dashboard</h1>
        <p className="text-muted-foreground">
          Track your progress through the Python course and see your achievements.
        </p>
      </div>

      <ProgressDashboard />
    </div>
  )
}
