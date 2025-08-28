import { ModuleContent, PythonPlayground } from "@/components/module-content";
import { CodeExample } from "@/components/code-example";
import { Quiz } from "@/components/quiz";
import { quizData } from "@/lib/quiz-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const IntroductionToPythonPage = () => {
  return (
    <ModuleContent title="Introduction to Python">
      <div className="space-y-8">
        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle className="text-xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              What is Python?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              Python is a{" "}
              <span className="bg-muted px-2 py-1 rounded font-mono">
                high-level, interpreted programming language
              </span>{" "}
              known for its simplicity and readability. Created by Guido van
              Rossum and first released in 1991, Python emphasizes{" "}
              <span className="bg-muted px-2 py-1 rounded font-mono">
                code readability
              </span>{" "}
              and allows programmers to express concepts in fewer lines of code.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Python is widely used in{" "}
              <span className="bg-muted px-2 py-1 rounded font-mono">
                web development
              </span>
              ,{" "}
              <span className="bg-muted px-2 py-1 rounded font-mono">
                data science
              </span>
              ,{" "}
              <span className="bg-muted px-2 py-1 rounded font-mono">
                artificial intelligence
              </span>
              ,{" "}
              <span className="bg-muted px-2 py-1 rounded font-mono">
                automation
              </span>
              , and many other fields due to its versatility and extensive
              library ecosystem.
            </p>
          </CardContent>
        </Card>

        <Card className="border-secondary/20">
          <CardHeader>
            <CardTitle className="text-xl bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Key Features of Python
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <h4 className="font-semibold text-primary/40">
                  Language Features
                </h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Badge variant="outline">Easy to Learn</Badge> Simple syntax
                    that resembles natural language
                  </li>
                  <li>
                    <Badge variant="outline">Interpreted</Badge> No need to
                    compile code before running
                  </li>
                  <li>
                    <Badge variant="outline">Cross-platform</Badge> Runs on
                    Windows, macOS, Linux, and more
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-primary/40">Ecosystem</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Badge variant="outline">Extensive Libraries</Badge> Rich
                    ecosystem of third-party packages
                  </li>
                  <li>
                    <Badge variant="outline">Community Support</Badge> Large,
                    active community of developers
                  </li>
                  <li>
                    <Badge variant="outline">Open Source</Badge> Free to use and
                    modify
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
          codeOutput={`Hello, World!
Welcome to Python programming!`}
        />

        <Card className="border-accent/20">
          <PythonPlayground
            title="Basic Python Syntax"
            description="Experiment with Python code and see the output instantly!"
            initialCode={`# Variables and basic operations
name = "Alice"
age = 25
height = 5.6

# String formatting
message = f"Hello, {name}! You are {age} years old."
print(message)

# Simple calculation
area = 3.14 * (5 ** 2)  # π * r²
print(f"Area of circle: {area}")`}
          />
        </Card>

        <Card className="border-accent/20">
          <CardHeader>
            <CardTitle className="text-xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Try it Yourself!
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-2 text-muted-foreground">
              Use the{" "}
              <span className="font-mono bg-muted px-1 rounded">print</span>{" "}
              function to display a message. Change the code below to print your
              own custom greeting!
            </p>
            <PythonPlayground
              initialCode={`# Use print to show a message!\nprint("Welcome to Python!")`}
            />
          </CardContent>
        </Card>

        <Card className="border-accent/20">
          <CardHeader>
            <CardTitle className="text-xl bg-gradient-to-r from-primary to-secondary via-accent bg-clip-text text-transparent">
              Python Applications
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <h4 className="font-semibold text-primary/40">
                  Web Development
                </h4>
                <p className="text-sm text-muted-foreground">
                  Django, Flask, FastAPI
                </p>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-primary/40">Data Science</h4>
                <p className="text-sm text-muted-foreground">
                  NumPy, Pandas, Matplotlib
                </p>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-primary/40">
                  Machine Learning
                </h4>
                <p className="text-sm text-muted-foreground">
                  TensorFlow, PyTorch, Scikit-learn
                </p>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-primary/40">Automation</h4>
                <p className="text-sm text-muted-foreground">
                  Scripting, Testing, DevOps
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Quiz
          moduleId="introduction-to-python"
          questions={quizData["introduction-to-python"]}
        />
      </div>
    </ModuleContent>
  );
};

export default IntroductionToPythonPage;
