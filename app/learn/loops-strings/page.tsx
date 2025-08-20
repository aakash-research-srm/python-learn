import { ModuleContent } from "@/components/module-content"
import { CodeExample } from "@/components/code-example"
import { Quiz } from "@/components/quiz"
import { quizData } from "@/lib/quiz-data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const LoopsStringsPage = () => {
  return (
    <ModuleContent
      title="Loops & Strings"
      description="Learn to repeat code efficiently with loops and manipulate text data with Python strings."
    >
      <div className="space-y-8">
        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle className="text-xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Python Loops
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              Loops allow you to execute a block of code repeatedly. Python provides two main types of loops:
              <span className="bg-muted px-2 py-1 rounded font-mono">for</span> loops and
              <span className="bg-muted px-2 py-1 rounded font-mono">while</span> loops.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <h4 className="font-semibold text-primary">For Loops</h4>
                <p className="text-sm text-muted-foreground">
                  Used when you know how many times you want to repeat something or when iterating over a sequence.
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-primary">While Loops</h4>
                <p className="text-sm text-muted-foreground">
                  Used when you want to repeat something until a condition becomes false.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <CodeExample
          title="For Loop Examples"
          code={`# Basic for loop with range
print("Counting from 1 to 5:")
for i in range(1, 6):
    print(f"Count: {i}")

# Iterating over a list
fruits = ["apple", "banana", "orange", "grape"]
print("\\nFruits in the basket:")
for fruit in fruits:
    print(f"- {fruit}")

# Using enumerate to get index and value
print("\\nFruits with index:")
for index, fruit in enumerate(fruits):
    print(f"{index + 1}. {fruit}")

# Nested loops - multiplication table
print("\\n3x3 Multiplication Table:")
for i in range(1, 4):
    for j in range(1, 4):
        print(f"{i} x {j} = {i * j}")
    print()  # Empty line after each row`}
          language="python"
        />

        <CodeExample
          title="While Loop Examples"
          code={`# Basic while loop
count = 1
print("While loop counting:")
while count <= 5:
    print(f"Count: {count}")
    count += 1

# User input validation
password = ""
attempts = 0
max_attempts = 3

while password != "python123" and attempts < max_attempts:
    password = input(f"Enter password (Attempt {attempts + 1}/{max_attempts}): ")
    attempts += 1
    
    if password == "python123":
        print("Access granted!")
    elif attempts < max_attempts:
        print("Incorrect password. Try again.")
    else:
        print("Too many failed attempts. Access denied.")

# Break and continue
print("\\nNumbers 1-10, skipping 5:")
for num in range(1, 11):
    if num == 5:
        continue  # Skip 5
    if num == 8:
        break     # Stop at 8
    print(num)`}
          language="python"
        />

        <Card className="border-secondary/20">
          <CardHeader>
            <CardTitle className="text-xl bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              String Manipulation
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              Strings are sequences of characters used to store and manipulate text data. Python provides many built-in
              methods for string operations.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <h4 className="font-semibold text-secondary">Common String Methods</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Badge variant="outline">.upper()</Badge> Convert to uppercase
                  </li>
                  <li>
                    <Badge variant="outline">.lower()</Badge> Convert to lowercase
                  </li>
                  <li>
                    <Badge variant="outline">.strip()</Badge> Remove whitespace
                  </li>
                  <li>
                    <Badge variant="outline">.replace()</Badge> Replace text
                  </li>
                  <li>
                    <Badge variant="outline">.split()</Badge> Split into list
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-secondary">String Formatting</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Badge variant="outline">f-strings</Badge> Modern formatting
                  </li>
                  <li>
                    <Badge variant="outline">.format()</Badge> Method formatting
                  </li>
                  <li>
                    <Badge variant="outline">%</Badge> Old-style formatting
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <CodeExample
          title="String Operations"
          code={`# String creation and basic operations
name = "Python Programming"
print(f"Original: '{name}'")
print(f"Length: {len(name)}")
print(f"Uppercase: {name.upper()}")
print(f"Lowercase: {name.lower()}")

# String methods
text = "  Hello, World!  "
print(f"\\nOriginal: '{text}'")
print(f"Stripped: '{text.strip()}'")
print(f"Replaced: '{text.replace('World', 'Python')}'")

# String splitting and joining
sentence = "Python is awesome and powerful"
words = sentence.split()
print(f"\\nWords: {words}")
print(f"Joined with '-': {'-'.join(words)}")

# String formatting
name = "Alice"
age = 25
score = 95.7

# f-string formatting (recommended)
print(f"\\nStudent: {name}")
print(f"Age: {age}")
print(f"Score: {score:.1f}%")

# String slicing
text = "Python"
print(f"\\nString: {text}")
print(f"First 3 chars: {text[:3]}")
print(f"Last 3 chars: {text[-3:]}")
print(f"Every 2nd char: {text[::2]}")
print(f"Reversed: {text[::-1]}")`}
          language="python"
        />

        <Quiz moduleId="loops-strings" questions={quizData["loops-strings"]} />
      </div>
    </ModuleContent>
  )
}

export default LoopsStringsPage
