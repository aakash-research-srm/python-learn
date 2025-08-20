import { ModuleContent } from "@/components/module-content"
import { CodeExample } from "@/components/code-example"
import { Quiz } from "@/components/quiz"
import { quizData } from "@/lib/quiz-data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const DataStructuresPage = () => {
  return (
    <ModuleContent
      title="Data Structures"
    >
      <div className="space-y-8">
        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle className="text-xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Python Lists
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              Lists are ordered, mutable collections that can store multiple items of different data types. They are one
              of the most versatile data structures in Python.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <h4 className="font-semibold text-primary">List Characteristics</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    ✅ <strong>Ordered:</strong> Items have a defined order
                  </li>
                  <li>
                    ✅ <strong>Mutable:</strong> Can be changed after creation
                  </li>
                  <li>
                    ✅ <strong>Allow duplicates:</strong> Same value can appear multiple times
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
                    <Badge variant="outline">.insert()</Badge> Add item at position
                  </li>
                  <li>
                    <Badge variant="outline">.remove()</Badge> Remove first occurrence
                  </li>
                  <li>
                    <Badge variant="outline">.pop()</Badge> Remove and return item
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <CodeExample
          title="Working with Lists"
          code={`# Creating and manipulating lists
fruits = ["apple", "banana", "orange"]
numbers = [1, 2, 3, 4, 5]
mixed = ["hello", 42, 3.14, True]

print("Original fruits:", fruits)

# Adding items
fruits.append("grape")
fruits.insert(1, "mango")
print("After adding:", fruits)

# Removing items
fruits.remove("banana")
last_fruit = fruits.pop()
print(f"After removing: {fruits}")
print(f"Removed fruit: {last_fruit}")

# List operations
numbers = [1, 2, 3, 4, 5]
print(f"\\nNumbers: {numbers}")
print(f"Length: {len(numbers)}")
print(f"Sum: {sum(numbers)}")
print(f"Max: {max(numbers)}")
print(f"Min: {min(numbers)}")

# List slicing
print(f"First 3: {numbers[:3]}")
print(f"Last 2: {numbers[-2:]}")
print(f"Every 2nd: {numbers[::2]}")

# List comprehension
squares = [x**2 for x in range(1, 6)]
print(f"Squares: {squares}")

even_numbers = [x for x in range(1, 11) if x % 2 == 0]
print(f"Even numbers: {even_numbers}")`}
          language="python"
        />

        <Card className="border-secondary/20">
          <CardHeader>
            <CardTitle className="text-xl bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              Tuples & Dictionaries
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-semibold text-secondary">Tuples</h4>
                <p className="text-sm text-muted-foreground">
                  Ordered, immutable collections. Perfect for storing related data that shouldn't change.
                </p>
                <ul className="space-y-1 text-sm">
                  <li>• Immutable (cannot be changed)</li>
                  <li>• Ordered and indexed</li>
                  <li>• Allow duplicates</li>
                  <li>• Faster than lists</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-secondary">Dictionaries</h4>
                <p className="text-sm text-muted-foreground">
                  Unordered collections of key-value pairs. Excellent for storing related information.
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

        <CodeExample
          title="Tuples and Dictionaries"
          code={`# Working with tuples
coordinates = (10, 20)
person = ("Alice", 25, "Engineer")

print("Coordinates:", coordinates)
print("Person info:", person)

# Tuple unpacking
x, y = coordinates
name, age, job = person
print(f"X: {x}, Y: {y}")
print(f"Name: {name}, Age: {age}, Job: {job}")

# Working with dictionaries
student = {
    "name": "Bob",
    "age": 20,
    "grade": "A",
    "subjects": ["Math", "Physics", "Chemistry"]
}

print("\\nStudent info:", student)
print(f"Name: {student['name']}")
print(f"Grade: {student.get('grade', 'Not found')}")

# Adding and modifying
student["email"] = "bob@email.com"
student["age"] = 21
print("Updated student:", student)

# Dictionary methods
print("\\nKeys:", list(student.keys()))
print("Values:", list(student.values()))
print("Items:", list(student.items()))

# Iterating through dictionary
print("\\nStudent details:")
for key, value in student.items():
    print(f"{key}: {value}")

# Dictionary comprehension
squares_dict = {x: x**2 for x in range(1, 6)}
print(f"\\nSquares dictionary: {squares_dict}")`}
          language="python"
        />

        <Card className="border-accent/20">
          <CardHeader>
            <CardTitle className="text-xl bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              Sets
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              Sets are unordered collections of unique items. They're perfect for removing duplicates and performing
              mathematical set operations.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <h4 className="font-semibold text-accent">Set Operations</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Badge variant="outline">union</Badge> Combine sets
                  </li>
                  <li>
                    <Badge variant="outline">intersection</Badge> Common elements
                  </li>
                  <li>
                    <Badge variant="outline">difference</Badge> Elements in first set only
                  </li>
                  <li>
                    <Badge variant="outline">symmetric_difference</Badge> Elements in either set, but not both
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-accent">Use Cases</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Remove duplicates from lists</li>
                  <li>• Check membership quickly</li>
                  <li>• Mathematical set operations</li>
                  <li>• Find unique elements</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <CodeExample
          title="Working with Sets"
          code={`# Creating sets
fruits = {"apple", "banana", "orange", "apple"}  # Duplicates removed
numbers = set([1, 2, 3, 4, 5, 1, 2])  # From list

print("Fruits set:", fruits)
print("Numbers set:", numbers)

# Set operations
set1 = {1, 2, 3, 4, 5}
set2 = {4, 5, 6, 7, 8}

print(f"\\nSet 1: {set1}")
print(f"Set 2: {set2}")

# Mathematical operations
print(f"Union: {set1.union(set2)}")
print(f"Intersection: {set1.intersection(set2)}")
print(f"Difference: {set1.difference(set2)}")
print(f"Symmetric difference: {set1.symmetric_difference(set2)}")

# Adding and removing elements
colors = {"red", "green", "blue"}
colors.add("yellow")
colors.remove("green")
print(f"\\nColors: {colors}")

# Checking membership
print(f"Is 'red' in colors? {'red' in colors}")
print(f"Is 'purple' in colors? {'purple' in colors}")

# Removing duplicates from a list
numbers_with_duplicates = [1, 2, 2, 3, 3, 3, 4, 4, 5]
unique_numbers = list(set(numbers_with_duplicates))
print(f"\\nOriginal: {numbers_with_duplicates}")
print(f"Unique: {unique_numbers}")`}
          language="python"
        />

        <Quiz moduleId="data-structures" questions={quizData["data-structures"]} />
      </div>
    </ModuleContent>
  )
}

export default DataStructuresPage
