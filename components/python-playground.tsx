"use client"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface PythonPlaygroundProps {
  title?: string
  initialCode?: string
  description?: string
}

export function PythonPlayground({ title = "Python Playground", initialCode = "print('Hello, World!')", description }: PythonPlaygroundProps) {
  const [code, setCode] = useState(initialCode)
  const [output, setOutput] = useState("")
  const [loading, setLoading] = useState(false)

  async function runCode() {
    setLoading(true)
    setOutput("")
    
    try {
      const response = await fetch("/api/python", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code }),
      })
      
      const data = await response.json()
      
      if (data.error) {
        setOutput(`Error: ${data.error}`)
      } else {
        setOutput(data.output || "Code executed successfully (no output)")
      }
    } catch (error) {
      setOutput(`Network Error: ${error instanceof Error ? error.message : "Failed to execute code"}`)
    }
    
    setLoading(false)
  }

  return (
    <Card className="border-border/50">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">{title}</CardTitle>
          <Badge variant="outline" className="font-mono text-xs">python</Badge>
        </div>
        {description && <p className="text-sm text-muted-foreground">{description}</p>}
      </CardHeader>
      <CardContent>
        <textarea
          className="w-full h-32 p-3 font-mono text-sm border rounded-lg mb-3 bg-slate-950 text-slate-100 border-slate-800 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={code}
          onChange={e => setCode(e.target.value)}
          placeholder="Enter your Python code here..."
        />
        <Button onClick={runCode} disabled={loading} className="mb-3">
          {loading ? "Running..." : "▶ Run Python Code"}
        </Button>
        {output && (
          <div className="border border-slate-800 rounded-lg overflow-hidden">
            <div className="bg-slate-900 px-3 py-2 border-b border-slate-800">
              <span className="text-sm font-medium text-slate-300">Output:</span>
            </div>
            <pre className="bg-slate-950 text-slate-100 p-4 overflow-x-auto text-sm font-mono max-h-64 overflow-y-auto">
              <code>{output}</code>
            </pre>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
