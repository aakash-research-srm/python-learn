"use client"
import { useState, useEffect, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface PythonPlaygroundProps {
  title?: string
  initialCode?: string
  description?: string
}

// Declare global pyodide
declare global {
  interface Window {
    loadPyodide: any;
  }
}

export function PythonPlayground({ title = "Python Playground", initialCode = "print('Hello, World!')", description }: PythonPlaygroundProps) {
  const [code, setCode] = useState(initialCode)
  const [output, setOutput] = useState("")
  const [loading, setLoading] = useState(false)
  const [pyodideReady, setPyodideReady] = useState(false)
  const pyodideRef = useRef<any>(null)

  useEffect(() => {
    // Load Pyodide
    const loadPyodide = async () => {
      try {
        // Load Pyodide script
        if (!window.loadPyodide) {
          const script = document.createElement('script')
          script.src = 'https://cdn.jsdelivr.net/pyodide/v0.24.1/full/pyodide.js'
          script.onload = async () => {
            pyodideRef.current = await window.loadPyodide()
            // Redirect stdout to capture print statements
            pyodideRef.current.runPython(`
import sys
from io import StringIO
sys.stdout = StringIO()
`)
            setPyodideReady(true)
          }
          document.head.appendChild(script)
        } else {
          pyodideRef.current = await window.loadPyodide()
          pyodideRef.current.runPython(`
import sys
from io import StringIO
sys.stdout = StringIO()
`)
          setPyodideReady(true)
        }
      } catch (error) {
        console.error('Failed to load Pyodide:', error)
        setOutput('Error: Failed to load Python interpreter')
      }
    }

    loadPyodide()
  }, [])

  async function runCode() {
    if (!pyodideReady || !pyodideRef.current) {
      setOutput('Error: Python interpreter not ready')
      return
    }

    setLoading(true)
    setOutput("")
    
    try {
      // Reset stdout
      pyodideRef.current.runPython(`
import sys
from io import StringIO
sys.stdout = StringIO()
`)
      
      // Run user code
      pyodideRef.current.runPython(code)
      
      // Get the output
      const stdout = pyodideRef.current.runPython('sys.stdout.getvalue()')
      
      setOutput(stdout || "Code executed successfully (no output)")
    } catch (error: any) {
      setOutput(`Error: ${error.message || 'Unknown error occurred'}`)
    }
    
    setLoading(false)
  }

  return (
    <Card className="border-border/50">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">{title}</CardTitle>
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="font-mono text-xs">python</Badge>
            {pyodideReady && <Badge variant="outline" className="text-xs bg-green-100 text-green-800">Ready</Badge>}
          </div>
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
        <Button onClick={runCode} disabled={loading || !pyodideReady} className="mb-3">
          {!pyodideReady ? "Loading Python..." : loading ? "Running..." : "▶ Run Python Code"}
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
