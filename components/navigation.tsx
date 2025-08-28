"use client"

import { useState, useEffect } from "react"
import { useProgress } from "./progress-provider"
import { usePathname } from "next/navigation"
import { CheckCircle, Menu, Home, BarChart3, BookOpen, Sun, Moon } from "lucide-react"
import Link from "next/link"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"

export function Navigation() {
  const { getModuleProgress, getOverallProgress } = useProgress()
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  

  useEffect(() => {
    setMounted(true)
  }, [])

  const modules = [
    { id: "introduction-to-python", name: "Introduction to Python", href: "/learn/introduction-to-python" },
    {
      id: "syntax-variables-data-types",
      name: "Syntax, Variables & Data Types",
      href: "/learn/syntax-variables-data-types",
    },
    { id: "operators-control-flow", name: "Operators & Control Flow", href: "/learn/operators-control-flow" },
    { id: "loops-strings", name: "Loops & Strings", href: "/learn/loops-strings" },
    { id: "data-structures", name: "Data Structures", href: "/learn/data-structures" },
    { id: "numpy-pandas", name: "NumPy & Pandas", href: "/learn/numpy-pandas" },
  ]

  const NavigationContent = () => (
    <>
      <div className="px-6 py-4 border-b border-border">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">Py</span>
          </div>
          <div>
            <h1 className="font-bold text-lg group-hover:text-emerald-600 transition-colors">Python Learn</h1>
            <p className="text-xs text-muted-foreground">Interactive Course</p>
          </div>
        </Link>
      </div>

      <div className="px-4 py-3 border-b border-border">
        <div className="grid grid-cols-2 gap-2">
          <Link
            href="/"
            className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-all hover:bg-accent hover:text-accent-foreground ${
              pathname === "/" ? "bg-accent text-accent-foreground" : "text-muted-foreground"
            }`}
          >
            <Home className="h-4 w-4" />
            <span>Home</span>
          </Link>
          <Link
            href="/dashboard"
            className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-all hover:bg-accent hover:text-accent-foreground ${
              pathname === "/dashboard" ? "bg-accent text-accent-foreground" : "text-muted-foreground"
            }`}
          >
            <BarChart3 className="h-4 w-4" />
            <span>Dashboard</span>
          </Link>
        </div>
      </div>

      <div className="px-4 py-3 border-b border-border">
        <div className="flex items-center justify-between text-sm mb-3">
          <span className="text-muted-foreground font-medium">Course Progress</span>
          <Badge variant="outline" className="text-xs">
            {getOverallProgress()}%
          </Badge>
        </div>
        <Progress value={getOverallProgress()} className="h-2" />
        <p className="text-xs text-muted-foreground mt-2">Keep going! You're doing great.</p>
      </div>

      <nav className="flex-1 px-4 py-4 space-y-1 overflow-y-auto">
        <div className="flex items-center gap-2 px-3 py-2 mb-3">
          <BookOpen className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm font-medium text-muted-foreground">Course Modules</span>
        </div>
        {modules.map((module, index) => {
          const progress = getModuleProgress(module.id)
          const isCompleted = progress?.completed || false
          const isQuizPassed = progress?.quizPassed || false
          const isActive = pathname === module.href

          return (
            <Link
              key={module.id}
              href={module.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`flex items-center gap-3 px-3 py-3 rounded-lg text-sm transition-all hover:bg-accent hover:text-accent-foreground group ${
                isActive ? "bg-accent text-accent-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <div
                className={`flex items-center justify-center w-7 h-7 rounded-full text-xs font-medium transition-all ${
                  isCompleted
                    ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300"
                    : isActive
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted group-hover:bg-accent-foreground/10"
                }`}
              >
                {isCompleted ? <CheckCircle className="h-4 w-4" /> : index + 1}
              </div>
              <div className="flex-1 min-w-0">
                <span className="block truncate font-medium">{module.name}</span>
                {progress?.timeSpent && progress.timeSpent > 0 && (
                  <span className="text-xs text-muted-foreground">{Math.round(progress.timeSpent)}min studied</span>
                )}
              </div>
              <div className="flex items-center gap-1">
                {isQuizPassed && (
                  <Badge variant="secondary" className="text-xs">
                    ✓
                  </Badge>
                )}
                {progress?.quizScore && (
                  <Badge variant="outline" className="text-xs">
                    {progress.quizScore}%
                  </Badge>
                )}
              </div>
            </Link>
          )
        })}
      </nav>

      <div className="px-4 py-4 border-t border-border">
        <p className="text-xs text-muted-foreground mt-3 text-center">Python Learn - Interactive Learning Platform</p>
      </div>
    </>
  )

  return (
    <>
      <header className="lg:hidden fixed top-0 left-0 right-0 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="flex items-center justify-between px-4 py-3">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-7 h-7 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xs">Py</span>
            </div>
            <span className="font-bold text-lg">Python Learn</span>
          </Link>

          <div className="flex items-center gap-2">
            <Badge variant="outline" className="text-xs">
              {getOverallProgress()}%
            </Badge>
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="p-2">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="p-0 w-80">
                <SheetTitle className="hidden">Menu</SheetTitle>
                <div className="flex flex-col h-full">
                  <NavigationContent />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <aside className="hidden lg:flex fixed inset-y-0 left-0 z-50 w-80 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-r border-border">
        <div className="flex flex-col h-full w-full">
          <NavigationContent />
        </div>
      </aside>
    </>
  )
}
