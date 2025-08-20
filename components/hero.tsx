"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { ArrowRight, Code, Trophy, Clock, BarChart3 } from "lucide-react"
import Link from "next/link"
import { useProgress } from "./progress-provider"

export function Hero() {
  const { getOverallProgress, stats } = useProgress()
  const progress = getOverallProgress()

  return (
    <div className="space-y-12 lg:space-y-16">
      <section className="text-center space-y-6 lg:space-y-8 py-8 lg:py-16">
        <div className="space-y-4">
          <Badge variant="outline" className="text-sm px-4 py-2">
            Interactive Python Course
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            Master Python
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-400">
              Step by Step
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Learn Python programming through interactive lessons, hands-on coding exercises, and real-time feedback.
            Perfect for beginners and those looking to strengthen their foundation.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/learn/introduction-to-python">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 text-lg">
              {progress > 0 ? "Continue Learning" : "Start Learning"}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Link href="/dashboard">
            <Button variant="outline" size="lg" className="px-8 py-3 text-lg bg-transparent">
              <BarChart3 className="mr-2 h-5 w-5" />
              View Progress
            </Button>
          </Link>
        </div>

        {progress > 0 && (
          <Card className="max-w-md mx-auto">
            <CardContent className="p-6">
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Your Progress</span>
                  <span className="font-medium">{progress}%</span>
                </div>
                <Progress value={progress} className="h-2" />
                <p className="text-sm text-muted-foreground">
                  {stats.completedModules} of {stats.totalModules} modules completed
                </p>
              </div>
            </CardContent>
          </Card>
        )}
      </section>

      <section className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl lg:text-4xl font-bold">Why Choose Our Course?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the most effective way to learn Python with our interactive approach
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-6 space-y-4">
              <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <Code className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold">Interactive Playground</h3>
              <p className="text-muted-foreground">
                Write and run Python code directly in your browser with our integrated Python environment powered by
                Pyodide.
              </p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-6 space-y-4">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <Trophy className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold">Smart Quizzes</h3>
              <p className="text-muted-foreground">
                Test your knowledge with interactive quizzes and coding challenges that adapt to your learning pace.
              </p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-6 space-y-4">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <Clock className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold">Progress Tracking</h3>
              <p className="text-muted-foreground">
                Monitor your learning journey with detailed analytics, achievements, and personalized recommendations.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl lg:text-4xl font-bold">Course Curriculum</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Structured learning path from basics to advanced Python concepts
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
          {[
            {
              title: "Introduction to Python",
              description: "Get started with Python basics and setup",
              duration: "30 min",
            },
            {
              title: "Syntax, Variables & Data Types",
              description: "Learn Python syntax and fundamental data types",
              duration: "45 min",
            },
            {
              title: "Operators & Control Flow",
              description: "Master conditional statements and logical operators",
              duration: "40 min",
            },
            {
              title: "Loops & Strings",
              description: "Understand iteration and string manipulation",
              duration: "50 min",
            },
            { title: "Data Structures", description: "Work with lists, dictionaries, and tuples", duration: "60 min" },
            { title: "NumPy & Pandas", description: "Introduction to data science libraries", duration: "75 min" },
          ].map((module, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardContent className="p-4 lg:p-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center text-sm font-medium text-emerald-600 flex-shrink-0">
                    {index + 1}
                  </div>
                  <div className="space-y-2 flex-1">
                    <h3 className="font-semibold text-lg">{module.title}</h3>
                    <p className="text-muted-foreground text-sm">{module.description}</p>
                    <Badge variant="outline" className="text-xs">
                      <Clock className="w-3 h-3 mr-1" />
                      {module.duration}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
