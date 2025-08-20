"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, XCircle, Play } from "lucide-react"
import { Textarea } from "@/components/ui/textarea"

interface CodingQuizProps {
  question: string
  starterCode?: string
  testCases: Array<{
    input?: string
    expectedOutput: string
    description?: string
  }>
  onSubmit: (code: string, passed: boolean) => void
  hint?: string
}

export function CodingQuiz({ question, starterCode = "", testCases, onSubmit, hint }: CodingQuizProps) {
  const [code, setCode] = useState(starterCode)
  const [output, setOutput] = useState("")
  const [loading, setLoading] = useState(false)
  const [testResults, setTestResults] = useState<Array<{ passed: boolean; actual: string; expected: string; description?: string }>>([])
  const [showResults, setShowResults] = useState(false)

  async function runCode() {
    setLoading(true)
    setOutput("")
    setTestResults([])
    
    try {
      const response = await fetch("/api/python", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code }),
      })
      
      const data = await response.json()
      
      if (data.error) {
        setOutput(`Error: ${data.error}`)
        setTestResults([])
      } else {
        setOutput(data.output || "Code executed successfully (no output)")
        // Don't run test cases automatically on run, just show output
      }
    } catch (error) {
      setOutput(`Network Error: ${error instanceof Error ? error.message : "Failed to execute code"}`)
    }
    
    setLoading(false)
  }

  async function runTests() {
    setLoading(true)
    const results: Array<{ passed: boolean; actual: string; expected: string; description?: string }> = []
    
    for (const testCase of testCases) {
      try {
        let testCode = code
        
        // If there's input, modify the code to use it
        if (testCase.input) {
          testCode = `# Test input: ${testCase.input}\n${code}`
        }
        
        const response = await fetch("/api/python", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ code: testCode }),
        })
        
        const data = await response.json()
        
        if (data.error) {
          results.push({
            passed: false,
            actual: `Error: ${data.error}`,
            expected: testCase.expectedOutput,
            description: testCase.description
          })
        } else {
          const actualOutput = (data.output || "").trim()
          const expectedOutput = testCase.expectedOutput.trim()
          const passed = actualOutput === expectedOutput
          
          results.push({
            passed,
            actual: actualOutput || "(no output)",
            expected: expectedOutput,
            description: testCase.description
          })
        }
      } catch (error) {
        results.push({
          passed: false,
          actual: `Network Error: ${error instanceof Error ? error.message : "Failed to execute"}`,
          expected: testCase.expectedOutput,
          description: testCase.description
        })
      }
    }
    
    setTestResults(results)
    setShowResults(true)
    setLoading(false)
    
    // Check if all tests passed
    const allPassed = results.every(result => result.passed)
    onSubmit(code, allPassed)
  }

  const allTestsPassed = testResults.length > 0 && testResults.every(result => result.passed)

  return (
    <Card className="border-border/50">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg">{question}</CardTitle>
        {hint && (
          <div className="text-sm text-muted-foreground bg-blue-50 dark:bg-blue-950/20 p-3 rounded-lg border border-blue-200 dark:border-blue-800">
            <strong>💡 Hint:</strong> {hint}
          </div>
        )}
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Code Editor */}
        <div>
          <label className="text-sm font-medium mb-2 block">Write your Python code:</label>
          <Textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="font-mono text-sm min-h-[150px] bg-slate-950 text-slate-100 border-slate-800 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="# Write your Python code here..."
          />
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <Button onClick={runCode} disabled={loading} variant="outline" className="flex-1">
            <Play className="w-4 h-4 mr-2" />
            {loading ? "Running..." : "Run Code"}
          </Button>
          <Button onClick={runTests} disabled={loading} className="flex-1">
            {loading ? "Testing..." : "Run Tests & Submit"}
          </Button>
        </div>

        {/* Output Display */}
        {output && (
          <div className="border border-slate-800 rounded-lg overflow-hidden">
            <div className="bg-slate-900 px-3 py-2 border-b border-slate-800">
              <span className="text-sm font-medium text-slate-300">Output:</span>
            </div>
            <pre className="bg-slate-950 text-slate-100 p-4 overflow-x-auto text-sm font-mono max-h-32 overflow-y-auto">
              <code>{output}</code>
            </pre>
          </div>
        )}

        {/* Test Results */}
        {showResults && testResults.length > 0 && (
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <h4 className="font-medium">Test Results:</h4>
              {allTestsPassed ? (
                <Badge className="bg-green-500 hover:bg-green-600">
                  <CheckCircle className="w-3 h-3 mr-1" />
                  All Tests Passed!
                </Badge>
              ) : (
                <Badge variant="destructive">
                  <XCircle className="w-3 h-3 mr-1" />
                  Some Tests Failed
                </Badge>
              )}
            </div>
            
            <div className="space-y-2">
              {testResults.map((result, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg border ${
                    result.passed 
                      ? "bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800" 
                      : "bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-800"
                  }`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    {result.passed ? (
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    ) : (
                      <XCircle className="w-4 h-4 text-red-600" />
                    )}
                    <span className="font-medium text-sm">
                      Test {index + 1}: {result.description || `Test case ${index + 1}`}
                    </span>
                  </div>
                  
                  <div className="text-xs space-y-1">
                    <div>
                      <span className="font-medium">Expected:</span>
                      <code className="ml-2 bg-slate-100 dark:bg-slate-800 px-1 rounded">{result.expected}</code>
                    </div>
                    <div>
                      <span className="font-medium">Actual:</span>
                      <code className="ml-2 bg-slate-100 dark:bg-slate-800 px-1 rounded">{result.actual}</code>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
