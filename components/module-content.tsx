import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CodeExample } from "./code-example"
import { PythonPlayground } from "./python-playground"

interface ModuleContentProps {
  title: string
  children: React.ReactNode
}

export function ModuleContent({ title, children }: ModuleContentProps) {
  return (
    <div className="space-y-10 mx-auto px-8 py-12">
      <div className="border-b border-border/50 pb-6">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
          {title}
        </h1>
      </div>
      {children}
    </div>
  )
}

interface ContentSectionProps {
  title: string
  children: React.ReactNode
}

export function ContentSection({ title, children }: ContentSectionProps) {
  return (
    <Card className="border-border/50">
      <CardHeader className="pb-4">
        <CardTitle className="text-xl relative">
          <span className="relative z-10">{title}</span>
          <div className="absolute inset-0 bg-primary/10 rounded-md -m-2 p-2"></div>
        </CardTitle>
      </CardHeader>
      <CardContent className="prose prose-slate dark:prose-invert max-w-none pt-0 pb-6">{children}</CardContent>
    </Card>
  )
}

interface HighlightProps {
  children: React.ReactNode
  variant?: "primary" | "accent" | "success"
}

export function Highlight({ children, variant = "primary" }: HighlightProps) {
  const variants = {
    primary: "bg-cyan-500/15 text-cyan-700 dark:text-cyan-300 border-cyan-500/25",
    accent: "bg-orange-500/15 text-orange-700 dark:text-orange-300 border-orange-500/25",
    success: "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border-emerald-500/25",
  }

  return <span className={`px-2 py-1 rounded-md border ${variants[variant]} font-medium`}>{children}</span>
}

export { CodeExample, PythonPlayground }
