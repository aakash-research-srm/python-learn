import { ModuleContent, PythonPlayground } from "@/components/module-content";
import { CodeExample } from "@/components/code-example";
import { Quiz } from "@/components/quiz";
import { quizData } from "@/lib/quiz-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const LoopsStringsPage = () => {
  return (
    <ModuleContent title="Loops & Strings">
      <div className="space-y-8">
        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle className="text-xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Python Loops
            </CardTitle>
          </CardHeader>
        </Card>
        {/* Playground: Practice While Loop */}
        <Card className="border-accent/20">
          <CardHeader>
            <CardTitle className="text-lg">
              Try it Yourself! (While Loop)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-2 text-muted-foreground">
              Change the starting value and see the countdown.
            </p>
            <PythonPlayground
              initialCode={`j = 5
  while j > 0:
      print(j)
      j -= 1`}
            />
          </CardContent>
        </Card>

        {/* Concept 1: Strings - Guided Format */}
        <CodeExample
          title="Strings"
          code={`# Example 1: Creating a string\ntext = "Hello Python"\nprint(text)\n\n# Example 2: Indexing (positions start from 0)\nprint(text[0])   # First character\nprint(text[6])   # 7th character\n\n# Example 3: Slicing\nprint(text[0:5])  # characters 0 to 4\nprint(text[6:])   # from 6 to end\n\n# Example 4: String methods\nprint(text.upper())   # HELLO PYTHON\nprint(text.lower())   # hello python\nprint(text.replace("Python", "World"))  # Hello World\n\n# Example 5: String formatting\nname = "Arun"\nage = 16\nprint(f"My name is {name}, I am {age} years old")\n\n# Example 6: Multiline string\nmsg = """This is\na multiline\nstring"""\nprint(msg)`}
          language="python"
          codeOutput={`Hello Python\nH\nP\nHello\nPython\nHELLO PYTHON\nhello python\nHello World\nMy name is Arun, I am 16 years old\nThis is\na multiline\nstring`}
        />
        <Card className="border-accent/20">
          <CardHeader>
            <CardTitle className="text-xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Teaching Tips: Strings
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc ml-6 text-muted-foreground">
              <li>Indexing → starts at 0.</li>
              <li>Slicing → start:end (end not included).</li>
              <li>Common methods → .upper(), .lower(), .replace().</li>
              <li>{'f"{ }" → formatting values inside string.'}</li>
            </ul>
          </CardContent>
        </Card>
        <Card className="border-accent/20">
          <CardHeader>
            <CardTitle className="text-xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Strings
            </CardTitle>
          </CardHeader>
          <CardContent>
            <PythonPlayground
              initialCode={`# 1. Create a string with your name\nname = "_____"\nprint(name)\n\n# 2. Print the first and last letter of your name\nprint(name[_____])   # first\nprint(name[_____])   # last\n\n# 3. Slice the first 3 letters\nprint(name[0:_____])\n\n# 4. Convert to uppercase and lowercase\nprint(name._____)   # uppercase\nprint(name._____)   # lowercase\n\n# 5. Replace one word in string\ntext = "I love Maths"\nprint(text.replace("Maths", "_____"))\n\n# 6. Use f-string for printing\nage = _____\nprint(f"My name is {name}, I am {_____} years old")`}
            />
          </CardContent>
        </Card>
        <CodeExample
          title="Break in For Loop"
          code={`for i in range(5):
    if i == 3:
        break
    print(i)`}
          language="python"
          codeOutput={`0
1
2`}
        />
        {/* Playground: Practice Continue in For Loop */}
        <Card className="border-accent/20">
          <CardHeader>
            <CardTitle className="text-lg">
              Try it Yourself! (Continue in For Loop)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-2 text-muted-foreground">
              Change the value to skip and see the output.
            </p>
            <PythonPlayground
              initialCode={`for i in range(5):
    if i == 2:
        continue
    print(i)`}
            />
          </CardContent>
        </Card>

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
          codeOutput={`While loop counting:
Count: 1
Count: 2
Count: 3
Count: 4
Count: 5

# (User input validation output depends on user input, typically:)
Enter password (Attempt 1/3): 
Incorrect password. Try again.
Enter password (Attempt 2/3): 
Incorrect password. Try again.
Enter password (Attempt 3/3): 
Too many failed attempts. Access denied.

Numbers 1-10, skipping 5:
1
2
3
4
6
7`}
        />

        <Card className="border-secondary/20">
          <CardHeader>
            <CardTitle className="text-xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              String Manipulation
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              Strings are sequences of characters used to store and manipulate
              text data. Python provides many built-in methods for string
              operations.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <h4 className="font-semibold text-primary/40">
                  Common String Methods
                </h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Badge variant="outline">.upper()</Badge> Convert to
                    uppercase
                  </li>
                  <li>
                    <Badge variant="outline">.lower()</Badge> Convert to
                    lowercase
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
                <h4 className="font-semibold text-primary/40">
                  String Formatting
                </h4>
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
          codeOutput={`Original: 'Python Programming'
Length: 18
Uppercase: PYTHON PROGRAMMING
Lowercase: python programming

Original: '  Hello, World!  '
Stripped: 'Hello, World!'
Replaced: '  Hello, Python!  '

Words: ['Python', 'is', 'awesome', 'and', 'powerful']
Joined with '-': Python-is-awesome-and-powerful

Student: Alice
Age: 25
Score: 95.7%

String: Python
First 3 chars: Pyt
Last 3 chars: hon
Every 2nd char: Pto
Reversed: nohtyP`}
        />

        {/* Playground: Practice String Slicing */}
        <Card className="border-accent/20">
          <CardHeader>
            <CardTitle className="text-lg">
              Try it Yourself! (String Slicing)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-2 text-muted-foreground">
              Change the string and slice range.
            </p>
            <PythonPlayground
              initialCode={`word = "HelloWorld"
print(word[0:5])`}
            />
          </CardContent>
        </Card>

        <Quiz moduleId="loops-strings" questions={quizData["loops-strings"]} />
      </div>
    </ModuleContent>
  );
};

export default LoopsStringsPage;
