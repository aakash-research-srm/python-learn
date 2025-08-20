import { ModuleContent, ContentSection, CodeExample, Highlight } from "@/components/module-content"
import { Quiz } from "@/components/quiz"
import { quizData } from "@/lib/quiz-data"

const IntroductionToPythonPage = () => {
  return (
    <div className="container mx-auto  max-w-4xl lg:px-8">
      <ModuleContent title="Introduction to Python">
        <ContentSection title="What is Python?">
          <p>
            <Highlight>Python</Highlight> is a{" "}
            <Highlight variant="accent">high-level, interpreted programming language</Highlight> known for its
            simplicity and readability. Created by Guido van Rossum and first released in 1991, Python emphasizes{" "}
            <Highlight variant="success">code readability</Highlight> and allows programmers to express concepts in
            fewer lines of code.
          </p>
          <p>
            Python is widely used in <Highlight>web development</Highlight>, <Highlight>data science</Highlight>,{" "}
            <Highlight>artificial intelligence</Highlight>, <Highlight>automation</Highlight>, and many other fields due
            to its versatility and extensive library ecosystem.
          </p>
        </ContentSection>

        <ContentSection title="Key Features of Python">
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>
                <Highlight variant="success">Easy to Learn:</Highlight>
              </strong>{" "}
              Simple syntax that resembles natural language
            </li>
            <li>
              <strong>
                <Highlight variant="success">Interpreted:</Highlight>
              </strong>{" "}
              No need to compile code before running
            </li>
            <li>
              <strong>
                <Highlight variant="success">Cross-platform:</Highlight>
              </strong>{" "}
              Runs on Windows, macOS, Linux, and more
            </li>
            <li>
              <strong>
                <Highlight variant="success">Extensive Libraries:</Highlight>
              </strong>{" "}
              Rich ecosystem of third-party packages
            </li>
            <li>
              <strong>
                <Highlight variant="success">Community Support:</Highlight>
              </strong>{" "}
              Large, active community of developers
            </li>
          </ul>
        </ContentSection>

        <CodeExample
          title="Your First Python Program"
          description="The traditional 'Hello, World!' program in Python"
          code={`# This is a comment in Python
print("Hello, World!")
print("Welcome to Python programming!")`}
        />

        <CodeExample
          title="Basic Python Syntax"
          description="Examples of Python's clean and readable syntax"
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
        />

        <ContentSection title="Python Applications">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-2">
                <Highlight>Web Development</Highlight>
              </h4>
              <p className="text-sm text-muted-foreground">Django, Flask, FastAPI</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">
                <Highlight>Data Science</Highlight>
              </h4>
              <p className="text-sm text-muted-foreground">NumPy, Pandas, Matplotlib</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">
                <Highlight>Machine Learning</Highlight>
              </h4>
              <p className="text-sm text-muted-foreground">TensorFlow, PyTorch, Scikit-learn</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">
                <Highlight>Automation</Highlight>
              </h4>
              <p className="text-sm text-muted-foreground">Scripting, Testing, DevOps</p>
            </div>
          </div>
        </ContentSection>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
            Test Your Knowledge
          </h2>
          <Quiz moduleId="introduction-to-python" questions={quizData["introduction-to-python"]} />
        </div>
      </ModuleContent>
    </div>
  )
}

export default IntroductionToPythonPage
