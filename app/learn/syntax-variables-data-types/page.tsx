import { ModuleContent } from "@/components/module-content"
import { CodeExample } from "@/components/code-example"
import { PythonPlayground } from "@/components/python-playground"
import { Quiz } from "@/components/quiz"
import { quizData } from "@/lib/quiz-data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const SyntaxVariablesDataTypesPage = () => {
  return (
    <ModuleContent
      title="Syntax, Variables & Data Types"
    >
      <div className="space-y-8">
        {/* <Card className="border-accent/20">
          <CardHeader>
            <CardTitle className="text-xl bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              Try Python Yourself!
            </CardTitle>
          </CardHeader>
          <CardContent>
            <PythonPlayground description="Experiment with Python code and see the output instantly!" />
          </CardContent>
        </Card> */}

        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle className="text-xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Python Syntax Basics
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              Python syntax is designed to be <span className="bg-muted px-2 py-1 rounded font-mono">readable and intuitive</span>. Unlike many programming
              languages, Python uses <span className="bg-muted px-2 py-1 rounded font-mono">indentation</span> to define code blocks instead of
              curly braces.
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <h4 className="font-semibold text-primary">Syntax Rules</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Badge variant="outline">Indentation</Badge> Use 4 spaces (or 1 tab) for each level
                  </li>
                  <li>
                    <Badge variant="outline">Case Sensitive</Badge> Variable and variable are different
                  </li>
                  <li>
                    <Badge variant="outline">Comments</Badge> Use # for single-line comments
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-primary">Code Structure</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Badge variant="outline">Line Continuation</Badge> Use \ to continue long lines
                  </li>
                  <li>
                    <Badge variant="outline">No Semicolons</Badge> Line breaks separate statements
                  </li>
                  <li>
                    <Badge variant="outline">Colon</Badge> Starts code blocks
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <CodeExample
          title="Python Indentation Example"
          code={`# Correct indentation
if 5 > 3:
    print("Five is greater than three")
    if 10 > 5:
        print("Ten is greater than five")
    print("This is still inside the first if")

print("This is outside the if block")`}
          language="python"
          codeOutput={`Five is greater than three
Ten is greater than five
This is still inside the first if
This is outside the if block`}
        />

        <Card className="border-secondary/20">
          <CardHeader>
            <CardTitle className="text-xl bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              Variables in Python
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              Variables in Python are <span className="bg-muted px-2 py-1 rounded font-mono">containers for storing data values</span>. Python has no command for
              declaring a variable - you create one the moment you first assign a value to it.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <h4 className="font-semibold text-secondary">Variable Rules</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Must start with a letter or underscore</li>
                  <li>• Can contain letters, numbers, and underscores</li>
                  <li>• Case-sensitive (age, Age, AGE are different)</li>
                  <li>• Cannot use Python keywords</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-secondary">Naming Conventions</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Use snake_case for variables</li>
                  <li>• Use descriptive names</li>
                  <li>• Avoid single letters (except for loops)</li>
                  <li>• Constants in UPPER_CASE</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-accent/20">
          <CardHeader>
            <CardTitle className="text-xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Try it Yourself! (Variables)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-2 text-muted-foreground">
              Change the values of <span className="font-mono bg-muted px-1 rounded">country</span> and <span className="font-mono bg-muted px-1 rounded">capital</span> and print them using <span className="font-mono bg-muted px-1 rounded">print</span>.
            </p>
            <PythonPlayground
              initialCode={`country = "India"\ncapital = "New Delhi"\nprint("Country:", country)\nprint("Capital:", capital)`}
            />
          </CardContent>
        </Card>

        <CodeExample
          title="Variable Examples"
          code={`# Valid variable names
name = "Alice"
age = 25
is_student = True
user_score = 95.5
_private_var = "hidden"

# Invalid variable names (these will cause errors)
# 2name = "Bob"        # Cannot start with number
# user-score = 85      # Cannot use hyphens
# class = "Python"     # Cannot use keywords

# Variable assignment and reassignment
x = 10
print(f"x = {x}")
x = "Now I'm a string!"
print(f"x = {x}")

# Multiple assignment
a, b, c = 1, 2, 3
print(f"a={a}, b={b}, c={c}")

# Same value to multiple variables
x = y = z = 0
print(f"x={x}, y={y}, z={z}")`}
          language="python"
          codeOutput={`x = 10
x = Now I'm a string!
a=1, b=2, c=3
x=0, y=0, z=0`}
        />

        <Card className="border-accent/20">
          <CardHeader>
            <CardTitle className="text-xl bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              Python Data Types
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              Python has several built-in data types to store different kinds of information. The type of a variable is
              determined automatically when you assign a value.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <h4 className="font-semibold text-accent">Numeric Types</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Badge variant="outline">int</Badge> Whole numbers: 42, -10, 0
                  </li>
                  <li>
                    <Badge variant="outline">float</Badge> Decimal numbers: 3.14, -2.5
                  </li>
                  <li>
                    <Badge variant="outline">complex</Badge> Complex numbers: 3+4j
                  </li>
                </ul>

                <h4 className="font-semibold text-accent mt-4">Text Type</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Badge variant="outline">str</Badge> Text strings: "Hello", 'Python'
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-accent">Boolean Type</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Badge variant="outline">bool</Badge> True or False values
                  </li>
                </ul>

                <h4 className="font-semibold text-accent mt-4">Sequence Types</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Badge variant="outline">list</Badge> Ordered, mutable: [1, 2, 3]
                  </li>
                  <li>
                    <Badge variant="outline">tuple</Badge> Ordered, immutable: (1, 2, 3)
                  </li>
                  <li>
                    <Badge variant="outline">dict</Badge> Key-value pairs: {`{"a": 1}`}
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <CodeExample
          title="Data Types Examples"
          code={`# Numeric types
integer_num = 42
float_num = 3.14159
complex_num = 3 + 4j

print(f"Integer: {integer_num}, type: {type(integer_num)}")
print(f"Float: {float_num}, type: {type(float_num)}")
print(f"Complex: {complex_num}, type: {type(complex_num)}")

# String type
text = "Hello, Python!"
multiline = """This is a
multiline string"""

print(f"String: {text}, type: {type(text)}")

# Boolean type
is_python_fun = True
is_difficult = False

print(f"Boolean: {is_python_fun}, type: {type(is_python_fun)}")

# Sequence types
my_list = [1, 2, 3, "mixed", True]
my_tuple = (1, 2, 3)
my_dict = {"name": "Alice", "age": 25}

print(f"List: {my_list}, type: {type(my_list)}")
print(f"Tuple: {my_tuple}, type: {type(my_tuple)}")
print(f"Dictionary: {my_dict}, type: {type(my_dict)}")

# Checking types
print(f"\nType checking:")
print(f"Is integer_num an int? {isinstance(integer_num, int)}")
print(f"Is text a string? {isinstance(text, str)}")
print(f"Is my_list a list? {isinstance(my_list, list)}")`}
          language="python"
          codeOutput={`Integer: 42, type: <class 'int'>
Float: 3.14159, type: <class 'float'>
Complex: (3+4j), type: <class 'complex'>
String: Hello, Python!, type: <class 'str'>
Boolean: True, type: <class 'bool'>
List: [1, 2, 3, 'mixed', True], type: <class 'list'>
Tuple: (1, 2, 3), type: <class 'tuple'>
Dictionary: {'name': 'Alice', 'age': 25}, type: <class 'dict'>

Type checking:
Is integer_num an int? True
Is text a string? True
Is my_list a list? True`}
        />

        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle className="text-xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Type Conversion
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              Sometimes you need to convert one data type to another. This process is called{" "}
              <span className="bg-muted px-2 py-1 rounded font-mono">type conversion</span> or <span className="bg-muted px-2 py-1 rounded font-mono">type casting</span>.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <h4 className="font-semibold text-primary">Common Conversions</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Badge variant="outline">int()</Badge> Convert to integer
                  </li>
                  <li>
                    <Badge variant="outline">float()</Badge> Convert to float
                  </li>
                  <li>
                    <Badge variant="outline">str()</Badge> Convert to string
                  </li>
                  <li>
                    <Badge variant="outline">bool()</Badge> Convert to boolean
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-primary">Important Notes</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Not all conversions are possible</li>
                  <li>• May lose precision (float to int)</li>
                  <li>• Empty values become False</li>
                  <li>• Non-empty values become True</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-accent/20">
          <CardHeader>
            <CardTitle className="text-xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Try it Yourself! (Type Conversion)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-2 text-muted-foreground">
              Practice converting between types! Change the values and see how <span className="font-mono bg-muted px-1 rounded">int()</span>, <span className="font-mono bg-muted px-1 rounded">float()</span>, <span className="font-mono bg-muted px-1 rounded">str()</span>, and <span className="font-mono bg-muted px-1 rounded">bool()</span> work.
            </p>
            <PythonPlayground
              initialCode={`age_str = "25"\nage_int = int(age_str)\nprint("String to int:", age_int)\nprice_str = "19.99"\nprice_float = float(price_str)\nprint("String to float:", price_float)\nnumber = 42\nnumber_str = str(number)\nprint("Number to string:", number_str)\nprint("Boolean conversions:")\nprint(bool(1))\nprint(bool(0))\nprint(bool("hello"))\nprint(bool(""))`}
            />
          </CardContent>
        </Card>

        <Card className="border-accent/20">
          <CardHeader>
            <CardTitle className="text-xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Try it Yourself! (Data Types)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-2 text-muted-foreground">
              Assign values to each variable and print them. Try changing the values and types!
            </p>
            <PythonPlayground
              initialCode={`y = 25  # Integer\nmarks = 88.5  # Float\nfruit = "Mango"  # String\nstatus = False  # Boolean\nnum = 5 + 7j  # Complex\n\nprint("Another Integer:", y)\nprint("Float Marks:", marks)\nprint("Favorite Fruit:", fruit)\nprint("Status:", status)\nprint("Another Complex:", num)`}
            />
          </CardContent>
        </Card>

        <Quiz moduleId="syntax-variables-data-types" questions={quizData["syntax-variables-data-types"]} />
      </div>
    </ModuleContent>
  )
}

export default SyntaxVariablesDataTypesPage
