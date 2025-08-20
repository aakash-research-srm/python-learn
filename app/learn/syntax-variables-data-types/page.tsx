import { ModuleContent, ContentSection, CodeExample, Highlight, PythonPlayground } from "@/components/module-content"
import { Quiz } from "@/components/quiz"
import { quizData } from "@/lib/quiz-data"

const SyntaxVariablesDataTypesPage = () => {
  return (
    <div className="container mx-auto max-w-4xl lg:px-8">
      <ModuleContent title="Syntax, Variables & Data Types">
        <ContentSection title="Try Python Yourself!">
          <PythonPlayground description="Experiment with Python code and see the output instantly!" />
        </ContentSection>
        <ContentSection title="Python Syntax Basics">
          <p>
            Python syntax is designed to be <Highlight>readable and intuitive</Highlight>. Unlike many programming
            languages, Python uses <Highlight variant="accent">indentation</Highlight> to define code blocks instead of
            curly braces.
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>
              <strong>Indentation:</strong> Use 4 spaces (or 1 tab) for each level
            </li>
            <li>
              <strong>Case Sensitive:</strong> <code>Variable</code> and <code>variable</code> are different
            </li>
            <li>
              <strong>Comments:</strong> Use <code>#</code> for single-line comments
            </li>
            <li>
              <strong>Line Continuation:</strong> Use <code>\</code> to continue long lines
            </li>
          </ul>
        </ContentSection>

        <CodeExample
          title="Python Indentation Example"
          description="How Python uses indentation to structure code"
          code={`# Correct indentation
if 5 > 3:
    print("Five is greater than three")
    if 10 > 5:
        print("Ten is greater than five")
    print("This is still inside the first if")

print("This is outside the if block")`}
        />

        <ContentSection title="Variables in Python">
          <p>
            Variables in Python are <Highlight>containers for storing data values</Highlight>. Python has no command for
            declaring a variable - you create one the moment you first assign a value to it.
          </p>
          <div className="bg-muted p-4 rounded-lg mt-4">
            <h4 className="font-semibold mb-2">Variable Naming Rules:</h4>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li>Must start with a letter or underscore</li>
              <li>Cannot start with a number</li>
              <li>Can only contain alphanumeric characters and underscores</li>
              <li>
                Cannot be Python keywords (like <code>if</code>, <code>for</code>, <code>while</code>)
              </li>
            </ul>
          </div>
        </ContentSection>

        <CodeExample
          title="Variable Assignment"
          description="Different ways to create and assign variables"
          code={`# Simple variable assignment
name = "Alice"
age = 25
height = 5.6
is_student = True

# Multiple assignment
x, y, z = 1, 2, 3

# Same value to multiple variables
a = b = c = 10

# Variable reassignment
score = 85
score = 92  # score is now 92

print(f"Name: {name}, Age: {age}, Height: {height}")`}
        />

        <ContentSection title="Python Data Types">
          <p>
            Python has several built-in data types. The type of a variable is determined automatically when you assign a
            value to it.
          </p>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="bg-card p-4 rounded-lg border">
              <h4 className="font-semibold mb-2">
                <Highlight>Numeric Types</Highlight>
              </h4>
              <ul className="text-sm space-y-1">
                <li>
                  <code>int</code> - Integers (42, -17, 0)
                </li>
                <li>
                  <code>float</code> - Decimals (3.14, -2.5)
                </li>
                <li>
                  <code>complex</code> - Complex numbers (3+4j)
                </li>
              </ul>
            </div>
            <div className="bg-card p-4 rounded-lg border">
              <h4 className="font-semibold mb-2">
                <Highlight>Text Type</Highlight>
              </h4>
              <ul className="text-sm space-y-1">
                <li>
                  <code>str</code> - Strings ("Hello", 'World')
                </li>
              </ul>
            </div>
            <div className="bg-card p-4 rounded-lg border">
              <h4 className="font-semibold mb-2">
                <Highlight>Boolean Type</Highlight>
              </h4>
              <ul className="text-sm space-y-1">
                <li>
                  <code>bool</code> - True or False
                </li>
              </ul>
            </div>
            <div className="bg-card p-4 rounded-lg border">
              <h4 className="font-semibold mb-2">
                <Highlight>Sequence Types</Highlight>
              </h4>
              <ul className="text-sm space-y-1">
                <li>
                  <code>list</code> - Ordered, mutable
                </li>
                <li>
                  <code>tuple</code> - Ordered, immutable
                </li>
                <li>
                  <code>range</code> - Sequence of numbers
                </li>
              </ul>
            </div>
          </div>
        </ContentSection>

        <CodeExample
          title="Data Types Examples"
          description="Examples of different Python data types"
          code={`# Numeric types
integer_num = 42
float_num = 3.14159
complex_num = 3 + 4j

# String type
text = "Hello, Python!"
multiline = """This is a
multiline string"""

# Boolean type
is_python_fun = True
is_difficult = False

# Sequence types
my_list = [1, 2, 3, "four", 5.0]
my_tuple = (1, 2, 3)
my_range = range(5)  # 0, 1, 2, 3, 4

# Check data types
print(type(integer_num))  # <class 'int'>
print(type(text))         # <class 'str'>
print(type(my_list))      # <class 'list'>`}
        />

        <ContentSection title="Type Conversion">
          <p>
            Sometimes you need to convert between different data types. Python provides built-in functions for{" "}
            <Highlight variant="success">type conversion</Highlight>.
          </p>
        </ContentSection>

        <CodeExample
          title="Type Conversion Examples"
          description="Converting between different data types"
          code={`# String to number conversion
age_str = "25"
age_int = int(age_str)
print(f"Age as integer: {age_int}")

# Number to string conversion
score = 95.5
score_str = str(score)
print(f"Score as string: '{score_str}'")

# Float to integer (truncates decimal)
pi = 3.14159
pi_int = int(pi)  # Result: 3

# Boolean conversions
print(bool(1))      # True
print(bool(0))      # False
print(bool(""))     # False (empty string)
print(bool("Hi"))   # True (non-empty string)

# List to tuple and vice versa
my_list = [1, 2, 3]
my_tuple = tuple(my_list)
back_to_list = list(my_tuple)`}
        />

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
            Test Your Knowledge
          </h2>
          <Quiz moduleId="syntax-variables-data-types" questions={quizData["syntax-variables-data-types"]} />
        </div>
      </ModuleContent>
    </div>
  )
}

export default SyntaxVariablesDataTypesPage
