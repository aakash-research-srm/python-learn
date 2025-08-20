"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

interface ModuleProgress {
  id: string
  name: string
  completed: boolean
  quizPassed: boolean
  quizScore?: number
  quizAttempts: number
  timeSpent: number // in minutes
  lastAccessed?: Date
  completedAt?: Date
}

interface ProgressStats {
  totalModules: number
  completedModules: number
  totalQuizzes: number
  passedQuizzes: number
  averageScore: number
  totalTimeSpent: number
  streak: number
  lastStudyDate?: Date
}

interface ProgressContextType {
  modules: ModuleProgress[]
  stats: ProgressStats
  completeModule: (moduleId: string) => void
  completeQuiz: (moduleId: string, score?: number, totalQuestions?: number) => void
  updateTimeSpent: (moduleId: string, minutes: number) => void
  resetProgress: () => void
  getModuleProgress: (moduleId: string) => ModuleProgress | undefined
  getOverallProgress: () => number
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined)

const defaultModules: ModuleProgress[] = [
  {
    id: "introduction-to-python",
    name: "Introduction to Python",
    completed: false,
    quizPassed: false,
    quizAttempts: 0,
    timeSpent: 0,
  },
  {
    id: "syntax-variables-data-types",
    name: "Syntax, Variables & Data Types",
    completed: false,
    quizPassed: false,
    quizAttempts: 0,
    timeSpent: 0,
  },
  {
    id: "operators-control-flow",
    name: "Operators & Control Flow",
    completed: false,
    quizPassed: false,
    quizAttempts: 0,
    timeSpent: 0,
  },
  { id: "loops-strings", name: "Loops & Strings", completed: false, quizPassed: false, quizAttempts: 0, timeSpent: 0 },
  {
    id: "data-structures",
    name: "Data Structures",
    completed: false,
    quizPassed: false,
    quizAttempts: 0,
    timeSpent: 0,
  },
  { id: "numpy-pandas", name: "NumPy & Pandas", completed: false, quizPassed: false, quizAttempts: 0, timeSpent: 0 },
]

export function ProgressProvider({ children }: { children: React.ReactNode }) {
  const [modules, setModules] = useState<ModuleProgress[]>(defaultModules)
  const [stats, setStats] = useState<ProgressStats>({
    totalModules: defaultModules.length,
    completedModules: 0,
    totalQuizzes: defaultModules.length,
    passedQuizzes: 0,
    averageScore: 0,
    totalTimeSpent: 0,
    streak: 0,
  })

  // Load progress from localStorage on mount
  useEffect(() => {
    const savedProgress = localStorage.getItem("python-learning-progress")
    if (savedProgress) {
      try {
        const parsed = JSON.parse(savedProgress)
        setModules(parsed.modules || defaultModules)
        setStats(parsed.stats || stats)
      } catch (error) {
        console.error("Failed to load progress:", error)
      }
    }
  }, [])

  // Save progress to localStorage whenever it changes
  useEffect(() => {
    const progressData = { modules, stats }
    localStorage.setItem("python-learning-progress", JSON.stringify(progressData))
  }, [modules, stats])

  // Recalculate stats whenever modules change
  useEffect(() => {
    const completedModules = modules.filter((m) => m.completed).length
    const passedQuizzes = modules.filter((m) => m.quizPassed).length
    const totalTimeSpent = modules.reduce((total, m) => total + m.timeSpent, 0)

    const quizScores = modules.filter((m) => m.quizScore !== undefined).map((m) => m.quizScore!)
    const averageScore =
      quizScores.length > 0 ? Math.round(quizScores.reduce((sum, score) => sum + score, 0) / quizScores.length) : 0

    // Calculate streak (consecutive days of study)
    const studyDates = modules
      .filter((m) => m.lastAccessed)
      .map((m) => m.lastAccessed!)
      .sort((a, b) => b.getTime() - a.getTime())

    let streak = 0
    if (studyDates.length > 0) {
      const today = new Date()
      const lastStudy = studyDates[0]
      const daysDiff = Math.floor((today.getTime() - lastStudy.getTime()) / (1000 * 60 * 60 * 24))

      if (daysDiff <= 1) {
        streak = 1
        // Calculate consecutive days
        for (let i = 1; i < studyDates.length; i++) {
          const prevDate = studyDates[i - 1]
          const currDate = studyDates[i]
          const diff = Math.floor((prevDate.getTime() - currDate.getTime()) / (1000 * 60 * 60 * 24))
          if (diff === 1) {
            streak++
          } else {
            break
          }
        }
      }
    }

    setStats({
      totalModules: modules.length,
      completedModules,
      totalQuizzes: modules.length,
      passedQuizzes,
      averageScore,
      totalTimeSpent,
      streak,
      lastStudyDate: studyDates[0],
    })
  }, [modules])

  const completeModule = (moduleId: string) => {
    setModules((prev) =>
      prev.map((module) =>
        module.id === moduleId
          ? {
              ...module,
              completed: true,
              completedAt: new Date(),
              lastAccessed: new Date(),
            }
          : module,
      ),
    )
  }

  const completeQuiz = (moduleId: string, score?: number, totalQuestions?: number) => {
    setModules((prev) =>
      prev.map((module) =>
        module.id === moduleId
          ? {
              ...module,
              quizPassed: true,
              quizScore: score && totalQuestions ? Math.round((score / totalQuestions) * 100) : undefined,
              quizAttempts: module.quizAttempts + 1,
              lastAccessed: new Date(),
            }
          : module,
      ),
    )
  }

  const updateTimeSpent = (moduleId: string, minutes: number) => {
    setModules((prev) =>
      prev.map((module) =>
        module.id === moduleId
          ? {
              ...module,
              timeSpent: module.timeSpent + minutes,
              lastAccessed: new Date(),
            }
          : module,
      ),
    )
  }

  const resetProgress = () => {
    setModules(defaultModules)
    localStorage.removeItem("python-learning-progress")
  }

  const getModuleProgress = (moduleId: string) => {
    return modules.find((m) => m.id === moduleId)
  }

  const getOverallProgress = () => {
    return Math.round((stats.completedModules / stats.totalModules) * 100)
  }

  return (
    <ProgressContext.Provider
      value={{
        modules,
        stats,
        completeModule,
        completeQuiz,
        updateTimeSpent,
        resetProgress,
        getModuleProgress,
        getOverallProgress,
      }}
    >
      {children}
    </ProgressContext.Provider>
  )
}

export function useProgress() {
  const context = useContext(ProgressContext)
  if (context === undefined) {
    throw new Error("useProgress must be used within a ProgressProvider")
  }
  return context
}
