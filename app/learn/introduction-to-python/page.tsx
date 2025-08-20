import { ModuleContent } from "@/components/module-content"
import { CodeExample } from "@/components/code-example"
import { Quiz } from "@/components/quiz"
import { quizData } from "@/lib/quiz-data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const IntroductionToPythonPage = () => {
  return (
    <ModuleContent
      title="Introduction to Python"
    >
      <div className="space-y-8">
        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle className="text-xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              What is Python?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              Python is a <span className="bg-muted px-2 py-1 rounded font-mono">high-level, interpreted programming language</span> known for its
              simplicity and readability. Created by Guido van Rossum and first released in 1991, Python emphasizes{" "}
              <span className="bg-muted px-2 py-1 rounded font-mono">code readability</span> and allows programmers to express concepts in
              fewer lines of code.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Python is widely used in <span className="bg-muted px-2 py-1 rounded font-mono">web development</span>, <span className="bg-muted px-2 py-1 rounded font-mono">data science</span>,{" "}
              <span className="bg-muted px-2 py-1 rounded font-mono">artificial intelligence</span>, <span className="bg-muted px-2 py-1 rounded font-mono">automation</span>, and many other fields due
              to its versatility and extensive library ecosystem.
            </p>
          </CardContent>
        </Card>

        <Card className="border-secondary/20">
          <CardHeader>
            <CardTitle className="text-xl bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              Key Features of Python
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <h4 className="font-semibold text-secondary">Language Features</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Badge variant="outline">Easy to Learn</Badge> Simple syntax that resembles natural language
                  </li>
                  <li>
                    <Badge variant="outline">Interpreted</Badge> No need to compile code before running
                  </li>
                  <li>
                    <Badge variant="outline">Cross-platform</Badge> Runs on Windows, macOS, Linux, and more
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-secondary">Ecosystem</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Badge variant="outline">Extensive Libraries</Badge> Rich ecosystem of third-party packages
                  </li>
                  <li>
                    <Badge variant="outline">Community Support</Badge> Large, active community of developers
                  </li>
                  <li>
                    <Badge variant="outline">Open Source</Badge> Free to use and modify
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <CodeExample
          title="Your First Python Program"
          code={`# This is a comment in Python
print("Hello, World!")
print("Welcome to Python programming!")`}
          language="python"
        />

        <CodeExample
          title="Basic Python Syntax"
          code={`# Variables and basic operations
name = "Alice"
age = 25
height = 5.6

# String formatting
message = f"Hello, {name}! You are {age} years old."
print(message)

# Simple calculation
area = 3.14 * (5 ** 2)  # π * r²
print(f"Area of circle: {area}")`}
          language="python"
        />

        <Card className="border-accent/20">
          <CardHeader>
            <CardTitle className="text-xl bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              Python Applications
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <h4 className="font-semibold text-accent">Web Development</h4>
                <p className="text-sm text-muted-foreground">Django, Flask, FastAPI</p>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-accent">Data Science</h4>
                <p className="text-sm text-muted-foreground">NumPy, Pandas, Matplotlib</p>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-accent">Machine Learning</h4>
                <p className="text-sm text-muted-foreground">TensorFlow, PyTorch, Scikit-learn</p>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-accent">Automation</h4>
                <p className="text-sm text-muted-foreground">Scripting, Testing, DevOps</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Quiz moduleId="introduction-to-python" questions={quizData["introduction-to-python"]} />
      </div>
    </ModuleContent>
  )
}

export default IntroductionToPythonPage
