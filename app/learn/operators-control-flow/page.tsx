import { ModuleContent } from "@/components/module-content"
import { CodeExample } from "@/components/code-example"
import { Quiz } from "@/components/quiz"
import { quizData } from "@/lib/quiz-data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const OperatorsControlFlowPage = () => {
  return (
    <ModuleContent
      title="Operators & Control Flow"
    >
        <div className="space-y-8">
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="text-xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Python Operators
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Operators are special symbols that perform operations on variables and values. Python provides several
                types of operators for different purposes.
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <h4 className="font-semibold text-primary">Arithmetic Operators</h4>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <Badge variant="outline">+</Badge> Addition
                    </li>
                    <li>
                      <Badge variant="outline">-</Badge> Subtraction
                    </li>
                    <li>
                      <Badge variant="outline">*</Badge> Multiplication
                    </li>
                    <li>
                      <Badge variant="outline">/</Badge> Division
                    </li>
                    <li>
                      <Badge variant="outline">//</Badge> Floor Division
                    </li>
                    <li>
                      <Badge variant="outline">%</Badge> Modulus
                    </li>
                    <li>
                      <Badge variant="outline">**</Badge> Exponentiation
                    </li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-primary">Comparison Operators</h4>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <Badge variant="outline">==</Badge> Equal to
                    </li>
                    <li>
                      <Badge variant="outline">!=</Badge> Not equal to
                    </li>
                    <li>
                      <Badge variant="outline">&gt;</Badge> Greater than
                    </li>
                    <li>
                      <Badge variant="outline">&lt;</Badge> Less than
                    </li>
                    <li>
                      <Badge variant="outline">&gt;=</Badge> Greater than or equal
                    </li>
                    <li>
                      <Badge variant="outline">&lt;=</Badge> Less than or equal
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <CodeExample
            title="Arithmetic Operations"
            code={`# Basic arithmetic operations
a = 10
b = 3

print(f"Addition: {a} + {b} = {a + b}")
print(f"Subtraction: {a} - {b} = {a - b}")
print(f"Multiplication: {a} * {b} = {a * b}")
print(f"Division: {a} / {b} = {a / b}")
print(f"Floor Division: {a} // {b} = {a // b}")
print(f"Modulus: {a} % {b} = {a % b}")
print(f"Exponentiation: {a} ** {b} = {a ** b}")`}
            language="python"
          />

          <Card className="border-secondary/20">
            <CardHeader>
              <CardTitle className="text-xl bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                Conditional Statements
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Control flow statements allow your program to make decisions and execute different code blocks based on
                conditions.
              </p>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-secondary mb-2">if-elif-else Structure</h4>
                  <p className="text-sm text-muted-foreground">
                    Use <span className="bg-muted px-2 py-1 rounded font-mono">if</span> to test a condition,
                    <span className="bg-muted px-2 py-1 rounded font-mono">elif</span> for additional conditions, and{" "}
                    <span className="bg-muted px-2 py-1 rounded font-mono">else</span> as a fallback.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <CodeExample
            title="Conditional Logic"
            code={`# Grade calculator with conditional logic
score = 85

if score >= 90:
    grade = "A"
    message = "Excellent work!"
elif score >= 80:
    grade = "B"
    message = "Good job!"
elif score >= 70:
    grade = "C"
    message = "Keep improving!"
elif score >= 60:
    grade = "D"
    message = "Need more practice"
else:
    grade = "F"
    message = "Please study harder"

print(f"Score: {score}")
print(f"Grade: {grade}")
print(f"Message: {message}")

# Logical operators
age = 25
has_license = True

if age >= 18 and has_license:
    print("Can drive legally")
elif age >= 18 and not has_license:
    print("Need to get a license")
else:
    print("Too young to drive")`}
            language="python"
          />

          <Card className="border-accent/20">
            <CardHeader>
              <CardTitle className="text-xl bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                Logical Operators
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <Badge className="mb-2">and</Badge>
                  <p className="text-sm">Both conditions must be True</p>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <Badge className="mb-2">or</Badge>
                  <p className="text-sm">At least one condition must be True</p>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <Badge className="mb-2">not</Badge>
                  <p className="text-sm">Reverses the boolean value</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Quiz moduleId="operators-control-flow" questions={quizData["operators-control-flow"]} />
      </div>
    </ModuleContent>
  )
}

export default OperatorsControlFlowPage
