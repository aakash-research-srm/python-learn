"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, XCircle, RotateCcw } from "lucide-react"
import { Textarea } from "@/components/ui/textarea"
import { useProgress } from "./progress-provider"
import { CodingQuiz } from "./coding-quiz"

export interface QuizQuestion {
  id: string
  type: "multiple-choice" | "coding"
  question: string
  options?: string[]
  correctAnswer?: string | number
  explanation?: string
  starterCode?: string
  expectedOutput?: string
  testCases?: Array<{
    input?: string
    expectedOutput: string
    description?: string
  }>
  hint?: string
}

interface QuizProps {
  moduleId: string
  questions: QuizQuestion[]
}

export function Quiz({ moduleId, questions }: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<string, any>>({})
  const [showResults, setShowResults] = useState(false)
  const [score, setScore] = useState(0)
  const { completeQuiz } = useProgress()

  const question = questions[currentQuestion]
  const isLastQuestion = currentQuestion === questions.length - 1
  const hasAnswered = question.type === "coding" 
    ? answers[question.id]?.passed === true 
    : answers[question.id] !== undefined

  const handleMultipleChoiceAnswer = (answerIndex: number) => {
    setAnswers((prev) => ({
      ...prev,
      [question.id]: answerIndex,
    }))
  }

  const handleCodingAnswer = (code: string, passed?: boolean) => {
    setAnswers((prev) => ({
      ...prev,
      [question.id]: { code, passed: passed || false },
    }))
  }

  const checkCodingAnswer = (userCode: string, expectedCode: string) => {
    // Simple code comparison - can be enhanced with more sophisticated checking
    return userCode.trim().toLowerCase().includes(expectedCode.trim().toLowerCase())
  }

  const calculateScore = () => {
    let correct = 0
    questions.forEach((q) => {
      const userAnswer = answers[q.id]
      if (q.type === "multiple-choice") {
        if (userAnswer === q.correctAnswer) correct++
      } else if (q.type === "coding") {
        if (userAnswer && userAnswer.passed) {
          correct++
        }
      }
    })
    return correct
  }

  const nextQuestion = () => {
    if (isLastQuestion) {
      const finalScore = calculateScore()
      setScore(finalScore)
      setShowResults(true)

      // Mark quiz as completed if score is >= 70%
      const percentage = (finalScore / questions.length) * 100
      if (percentage >= 70) {
        completeQuiz(moduleId)
      }
    } else {
      setCurrentQuestion((prev) => prev + 1)
    }
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setAnswers({})
    setShowResults(false)
    setScore(0)
  }

  const getQuestionResult = (questionId: string, question: QuizQuestion) => {
    const userAnswer = answers[questionId]
    if (question.type === "multiple-choice") {
      return userAnswer === question.correctAnswer
    } else if (question.type === "coding") {
      return userAnswer && userAnswer.passed
    }
    return false
  }

  if (showResults) {
    const percentage = Math.round((score / questions.length) * 100)
    const passed = percentage >= 70

    return (
      <Card className="border-border/50">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              {passed ? (
                <CheckCircle className="h-6 w-6 text-green-500" />
              ) : (
                <XCircle className="h-6 w-6 text-red-500" />
              )}
              Quiz Results
            </CardTitle>
            <Badge variant={passed ? "default" : "destructive"} className="text-lg px-3 py-1">
              {percentage}%
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center">
            <p className="text-lg">
              You scored <strong>{score}</strong> out of <strong>{questions.length}</strong> questions correctly.
            </p>
            <p className="text-muted-foreground mt-2">
              {passed ? "Congratulations! You passed the quiz." : "You need 70% or higher to pass. Try again!"}
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="font-semibold">Question Review:</h3>
            {questions.map((q, index) => {
              const isCorrect = getQuestionResult(q.id, q)
              return (
                <div key={q.id} className="flex items-center gap-3 p-3 rounded-lg border bg-muted/20">
                  {isCorrect ? (
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  ) : (
                    <XCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
                  )}
                  <div className="flex-1">
                    <p className="font-medium">Question {index + 1}</p>
                    <p className="text-sm text-muted-foreground">{q.question}</p>
                    {q.explanation && !isCorrect && (
                      <p className="text-sm text-blue-600 dark:text-blue-400 mt-1">{q.explanation}</p>
                    )}
                  </div>
                </div>
              )
            })}
          </div>

          <Button onClick={resetQuiz} variant="outline" className="w-full bg-transparent">
            <RotateCcw className="h-4 w-4 mr-2" />
            Retake Quiz
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="border-border/50">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>
            Quiz - Question {currentQuestion + 1} of {questions.length}
          </CardTitle>
          <Badge variant="outline">{Math.round((currentQuestion / questions.length) * 100)}% Complete</Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-4">{question.question}</h3>

          {question.type === "multiple-choice" && question.options && (
            <div className="space-y-2">
              {question.options.map((option, index) => (
                <Button
                  key={index}
                  variant={answers[question.id] === index ? "default" : "outline"}
                  className="w-full justify-start text-left h-auto p-4"
                  onClick={() => handleMultipleChoiceAnswer(index)}
                >
                  <span className="font-mono text-sm mr-3">{String.fromCharCode(65 + index)}.</span>
                  {option}
                </Button>
              ))}
            </div>
          )}

          {question.type === "coding" && question.testCases && (
            <CodingQuiz
              question="Complete the code challenge:"
              starterCode={question.starterCode}
              testCases={question.testCases}
              hint={question.hint}
              onSubmit={(code, passed) => handleCodingAnswer(code, passed)}
            />
          )}
        </div>

        <div className="flex justify-between">
          <Button
            variant="outline"
            onClick={() => setCurrentQuestion((prev) => Math.max(0, prev - 1))}
            disabled={currentQuestion === 0}
          >
            Previous
          </Button>

          <Button onClick={nextQuestion} disabled={!hasAnswered} className="bg-emerald-600 hover:bg-emerald-700">
            {isLastQuestion ? "Finish Quiz" : "Next Question"}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
