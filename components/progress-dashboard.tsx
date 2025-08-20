"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BookOpen, Trophy, Clock, Target, Flame, RotateCcw, CheckCircle, XCircle } from "lucide-react"
import { useProgress } from "./progress-provider"

export function ProgressDashboard() {
  const { modules, stats, resetProgress, getOverallProgress } = useProgress()

  const formatTime = (minutes: number) => {
    if (minutes < 60) return `${minutes}m`
    const hours = Math.floor(minutes / 60)
    const mins = minutes % 60
    return `${hours}h ${mins}m`
  }

  const getStreakColor = (streak: number) => {
    if (streak >= 7) return "text-orange-500"
    if (streak >= 3) return "text-yellow-500"
    return "text-muted-foreground"
  }

  return (
    <div className="space-y-6">
      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Overall Progress</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{getOverallProgress()}%</div>
            <Progress value={getOverallProgress()} className="mt-2" />
            <p className="text-xs text-muted-foreground mt-2">
              {stats.completedModules} of {stats.totalModules} modules completed
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Quiz Performance</CardTitle>
            <Trophy className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.averageScore}%</div>
            <p className="text-xs text-muted-foreground">
              {stats.passedQuizzes} of {stats.totalQuizzes} quizzes passed
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Time Spent</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatTime(stats.totalTimeSpent)}</div>
            <p className="text-xs text-muted-foreground">Total learning time</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Study Streak</CardTitle>
            <Flame className={`h-4 w-4 ${getStreakColor(stats.streak)}`} />
          </CardHeader>
          <CardContent>
            <div className={`text-2xl font-bold ${getStreakColor(stats.streak)}`}>{stats.streak}</div>
            <p className="text-xs text-muted-foreground">{stats.streak === 1 ? "day" : "days"} in a row</p>
          </CardContent>
        </Card>
      </div>

      {/* Module Progress */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="h-5 w-5" />
            Module Progress
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {modules.map((module, index) => {
              const progress = module.completed ? 100 : module.quizPassed ? 75 : 0
              return (
                <div key={module.id} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-muted text-sm font-medium">
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="font-medium">{module.name}</h4>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          {module.timeSpent > 0 && (
                            <span className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {formatTime(module.timeSpent)}
                            </span>
                          )}
                          {module.quizAttempts > 0 && (
                            <span>
                              {module.quizAttempts} quiz attempt{module.quizAttempts !== 1 ? "s" : ""}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {module.quizScore && (
                        <Badge variant="outline" className="text-xs">
                          {module.quizScore}%
                        </Badge>
                      )}
                      {module.completed ? (
                        <CheckCircle className="h-5 w-5 text-emerald-500" />
                      ) : module.quizPassed ? (
                        <Badge variant="secondary" className="text-xs">
                          Quiz Passed
                        </Badge>
                      ) : (
                        <XCircle className="h-5 w-5 text-muted-foreground" />
                      )}
                    </div>
                  </div>
                  <Progress value={progress} className="h-2" />
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>

      {/* Achievements */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Trophy className="h-5 w-5" />
            Achievements
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div
              className={`p-4 rounded-lg border ${stats.completedModules >= 1 ? "bg-emerald-50 border-emerald-200 dark:bg-emerald-950 dark:border-emerald-800" : "bg-muted"}`}
            >
              <div className="flex items-center gap-2 mb-2">
                <BookOpen
                  className={`h-4 w-4 ${stats.completedModules >= 1 ? "text-emerald-600" : "text-muted-foreground"}`}
                />
                <span className="font-medium text-sm">First Steps</span>
              </div>
              <p className="text-xs text-muted-foreground">Complete your first module</p>
            </div>

            <div
              className={`p-4 rounded-lg border ${stats.passedQuizzes >= 3 ? "bg-blue-50 border-blue-200 dark:bg-blue-950 dark:border-blue-800" : "bg-muted"}`}
            >
              <div className="flex items-center gap-2 mb-2">
                <Target className={`h-4 w-4 ${stats.passedQuizzes >= 3 ? "text-blue-600" : "text-muted-foreground"}`} />
                <span className="font-medium text-sm">Quiz Master</span>
              </div>
              <p className="text-xs text-muted-foreground">Pass 3 quizzes</p>
            </div>

            <div
              className={`p-4 rounded-lg border ${stats.streak >= 7 ? "bg-orange-50 border-orange-200 dark:bg-orange-950 dark:border-orange-800" : "bg-muted"}`}
            >
              <div className="flex items-center gap-2 mb-2">
                <Flame className={`h-4 w-4 ${stats.streak >= 7 ? "text-orange-600" : "text-muted-foreground"}`} />
                <span className="font-medium text-sm">Week Warrior</span>
              </div>
              <p className="text-xs text-muted-foreground">Study for 7 days in a row</p>
            </div>

            <div
              className={`p-4 rounded-lg border ${stats.averageScore >= 90 ? "bg-purple-50 border-purple-200 dark:bg-purple-950 dark:border-purple-800" : "bg-muted"}`}
            >
              <div className="flex items-center gap-2 mb-2">
                <Trophy
                  className={`h-4 w-4 ${stats.averageScore >= 90 ? "text-purple-600" : "text-muted-foreground"}`}
                />
                <span className="font-medium text-sm">Excellence</span>
              </div>
              <p className="text-xs text-muted-foreground">Maintain 90%+ average</p>
            </div>

            <div
              className={`p-4 rounded-lg border ${stats.totalTimeSpent >= 300 ? "bg-yellow-50 border-yellow-200 dark:bg-yellow-950 dark:border-yellow-800" : "bg-muted"}`}
            >
              <div className="flex items-center gap-2 mb-2">
                <Clock
                  className={`h-4 w-4 ${stats.totalTimeSpent >= 300 ? "text-yellow-600" : "text-muted-foreground"}`}
                />
                <span className="font-medium text-sm">Dedicated Learner</span>
              </div>
              <p className="text-xs text-muted-foreground">Study for 5+ hours total</p>
            </div>

            <div
              className={`p-4 rounded-lg border ${stats.completedModules === stats.totalModules ? "bg-emerald-50 border-emerald-200 dark:bg-emerald-950 dark:border-emerald-800" : "bg-muted"}`}
            >
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle
                  className={`h-4 w-4 ${stats.completedModules === stats.totalModules ? "text-emerald-600" : "text-muted-foreground"}`}
                />
                <span className="font-medium text-sm">Course Complete</span>
              </div>
              <p className="text-xs text-muted-foreground">Finish all modules</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Reset Progress */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-destructive">
            <RotateCcw className="h-5 w-5" />
            Reset Progress
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">
            This will permanently delete all your progress data. This action cannot be undone.
          </p>
          <Button variant="destructive" onClick={resetProgress} className="w-full md:w-auto">
            Reset All Progress
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
