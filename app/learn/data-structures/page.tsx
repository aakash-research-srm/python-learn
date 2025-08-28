import { ModuleContent, PythonPlayground } from "@/components/module-content";
import { CodeExample } from "@/components/code-example";
import { Quiz } from "@/components/quiz";
import { quizData } from "@/lib/quiz-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const DataStructuresPage = () => {
  return (
    <ModuleContent title="Data Structures">
      <div className="space-y-8">
        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle className="text-xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Python Lists
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              Lists are ordered, mutable collections that can store multiple
              items of different data types. They are one of the most versatile
              data structures in Python.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <h4 className="font-semibold text-primary">
                  List Characteristics
                </h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    ✅ <strong>Ordered:</strong> Items have a defined order
                  </li>
                  <li>
                    ✅ <strong>Mutable:</strong> Can be changed after creation
                  </li>
                  <li>
                    ✅ <strong>Allow duplicates:</strong> Same value can appear
                    multiple times
                  </li>
                  <li>
                    ✅ <strong>Indexed:</strong> Access items by position
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-primary">Common Methods</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Badge variant="outline">.append()</Badge> Add item to end
                  </li>
                  <li>
                    <Badge variant="outline">.insert()</Badge> Add item at
                    position
                  </li>
                  <li>
                    <Badge variant="outline">.remove()</Badge> Remove first
                    occurrence
                  </li>
                  <li>
                    <Badge variant="outline">.pop()</Badge> Remove and return
                    item
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* List - Live code (CodeExample) */}
        <CodeExample
          title="List"
          code={`fruits = ["apple", "banana", "mango"]\nprint(fruits[1])`}
          codeOutput={`Banana`}
          language="python"
        />
        {/* List - Student code (PythonPlayground) */}
        <Card className="border-primary/30">
          <CardHeader>
            <CardTitle>List</CardTitle>
          </CardHeader>
          <CardContent>
            <PythonPlayground
              initialCode={`numbers = [10, 20, 30]\nprint(numbers[0])`}
              description="👉 Output: 10"
            />
          </CardContent>
        </Card>

        <Card className="border-secondary/20">
          <CardHeader>
            <CardTitle className="text-xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Tuples & Dictionaries
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-semibold text-primary/40">Tuples</h4>
                <p className="text-sm text-muted-foreground">
                  Ordered, immutable collections. Perfect for storing related
                  data that shouldn't change.
                </p>
                <ul className="space-y-1 text-sm">
                  <li>• Immutable (cannot be changed)</li>
                  <li>• Ordered and indexed</li>
                  <li>• Allow duplicates</li>
                  <li>• Faster than lists</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-primary/40">Dictionaries</h4>
                <p className="text-sm text-muted-foreground">
                  Unordered collections of key-value pairs. Excellent for
                  storing related information.
                </p>
                <ul className="space-y-1 text-sm">
                  <li>• Key-value pairs</li>
                  <li>• Mutable</li>
                  <li>• No duplicate keys</li>
                  <li>• Fast lookups</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tuple - Live code (CodeExample) */}
        <CodeExample
          title="Tuple"
          code={`colors = ("red", "green", "blue")\nprint(colors[2])`}
          codeOutput={`Blue`}
          language="python"
        />
        {/* Tuple - Student code (PythonPlayground) */}
        <Card className="border-secondary/30">
          <CardHeader>
            <CardTitle>Tuple</CardTitle>
          </CardHeader>
          <CardContent>
            <PythonPlayground
              initialCode={`days = ("Mon", "Tue", "Wed")\nprint(days[0])`}
              description="👉 Output: Mon"
            />
          </CardContent>
        </Card>

        {/* Student Practice: Sets */}
        <Card className="border-accent/20">
          <CardHeader>
            <CardTitle className="text-xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Sets
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-2 text-muted-foreground">
              <strong>Tips:</strong>
              <ul className="list-disc ml-6">
                <li>Sets = unordered collections of unique items.</li>
                <li>Use curly brackets {}.</li>
                <li>Cannot access items by index.</li>
                <li>Duplicates are removed automatically.</li>
              </ul>
            </div>
            <PythonPlayground
              initialCode={`# 1. Create a set of 3 items and print the set\nitems = {"_____", "_____", "___"}\nprint(items)\n\n# 2. Create a set of numbers with duplicates and print the set\nnums = {_____, _____, _____, _____}\nprint(nums)`}
            />
          </CardContent>
        </Card>

        {/* Set - Live code (CodeExample) */}
        <CodeExample
          title="Set"
          code={`items = {"pen", "pencil", "eraser"}\nprint(items)`}
          codeOutput={`{'eraser', 'pen', 'pencil'}`}
          language="python"
        />
        {/* Set - Student code (PythonPlayground) */}
        <Card className="border-accent/30">
          <CardHeader>
            <CardTitle>Set</CardTitle>
          </CardHeader>
          <CardContent>
            <PythonPlayground
              initialCode={`nums = {1, 2, 3, 2}\nprint(nums)`}
              description="👉 Output: {1, 2, 3}"
            />
          </CardContent>
        </Card>

        {/* Student Practice: Dictionaries */}
        <Card className="border-accent/20">
          <CardHeader>
            <CardTitle className="text-xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Dictionaries
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-2 text-muted-foreground">
              <strong>Tips:</strong>
              <ul className="list-disc ml-6">
                <li>Dictionaries = key-value pairs.</li>
                <li>Use curly brackets {} and colons :.</li>
                <li>Access values by key.</li>
                <li>Keys must be unique.</li>
              </ul>
            </div>
            <PythonPlayground
              initialCode={`# 1. Create a dictionary for a student and print the name\nstudent = {"name": "___", "age": ___}\nprint(student["name"])\n\n# 2. Create a dictionary for marks and print Science marks\nmarks = {"Math": ___, "Science": ___}\nprint(marks["Science"])`}
            />
          </CardContent>
        </Card>

        {/* Dictionary - Live code (CodeExample) */}
        <CodeExample
          title="Dictionary"
          code={`student = {"name": "Asha", "age": 20}\nprint(student["name"])`}
          codeOutput={`Asha`}
          language="python"
        />
        {/* Dictionary - Student code (PythonPlayground) */}
        <Card className="border-border/30">
          <CardHeader>
            <CardTitle>Dictionary</CardTitle>
          </CardHeader>
          <CardContent>
            <PythonPlayground
              initialCode={`marks = {"Math": 90, "Science": 85}\nprint(marks["Science"])`}
              description="👉 Output: 85"
            />
          </CardContent>
        </Card>

        <Quiz
          moduleId="data-structures"
          questions={quizData["data-structures"]}
        />
      </div>
    </ModuleContent>
  );
};

export default DataStructuresPage;
