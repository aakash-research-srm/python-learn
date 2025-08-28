import type { QuizQuestion } from "@/components/quiz"

export const quizData: Record<string, QuizQuestion[]> = {
  "introduction-to-python": [
    {
      id: "intro-1",
      type: "multiple-choice",
      question: "What is Python?",
      options: [
        "A compiled programming language",
        "An interpreted, high-level programming language",
        "A database management system",
        "A web browser",
      ],
      correctAnswer: 1,
      explanation:
        "Python is an interpreted, high-level programming language known for its simplicity and readability.",
    },
    {
      id: "intro-2",
      type: "multiple-choice",
      question: "Which of the following is a key feature of Python?",
      options: [
        "Complex syntax",
        "Manual memory management",
        "Readable and simple syntax",
        "Requires compilation before execution",
      ],
      correctAnswer: 2,
      explanation: "Python is known for its readable and simple syntax, making it beginner-friendly.",
    },
  ],
  "syntax-variables-data-types": [
    {
      id: "syntax-1",
      type: "multiple-choice",
      question: "Which of the following is the correct way to create a variable in Python?",
      options: ["int x = 5", "var x = 5", "x = 5", "declare x = 5"],
      correctAnswer: 2,
      explanation: "In Python, you create variables by simply assigning a value: x = 5",
    },
    {
      id: "syntax-3",
      type: "multiple-choice",
      question: "What data type is the value 3.14 in Python?",
      options: ["int", "float", "string", "boolean"],
      correctAnswer: 1,
      explanation: "3.14 is a floating-point number, so its data type is float.",
    },
  ],
  "operators-control-flow": [
    {
      id: "operators-1",
      type: "multiple-choice",
      question: "What is the result of 10 // 3 in Python?",
      options: ["3.33", "3", "4", "3.0"],
      correctAnswer: 1,
      explanation: "The // operator performs floor division, returning the integer part of the division.",
    },
    {
      id: "operators-3",
      type: "multiple-choice",
      question: "Which operator is used for equality comparison in Python?",
      options: ["=", "==", "===", "eq"],
      correctAnswer: 1,
      explanation: "The == operator is used for equality comparison in Python.",
    },
  ],
  "loops-strings": [
    {
      id: "loops-1",
      type: "multiple-choice",
      question: "How do you get the length of a string in Python?",
      options: ["string.length()", "len(string)", "string.size()", "length(string)"],
      correctAnswer: 1,
      explanation: "The len() function returns the length of a string in Python.",
    },
  ],
  "data-structures": [
    {
      id: "data-1",
      type: "multiple-choice",
      question: "Which of the following is a mutable data type in Python?",
      options: ["tuple", "string", "list", "int"],
      correctAnswer: 2,
      explanation: "Lists are mutable in Python, meaning you can change their contents after creation.",
    },
    {
      id: "data-3",
      type: "multiple-choice",
      question: "How do you access a value in a dictionary?",
      options: ["dict[key]", "dict.get(key)", "Both A and B", "dict->key"],
      correctAnswer: 2,
      explanation: "Both dict[key] and dict.get(key) can be used to access dictionary values.",
    },
  ],
  "numpy-pandas": [
    {
      id: "numpy-1",
      type: "multiple-choice",
      question: "What is NumPy primarily used for?",
      options: ["Web development", "Numerical computing and arrays", "Database management", "GUI development"],
      correctAnswer: 1,
      explanation: "NumPy is primarily used for numerical computing and working with arrays.",
    },
    {
      id: "numpy-2",
      type: "multiple-choice",
      question: "What is Pandas primarily used for?",
      options: ["Image processing", "Data manipulation and analysis", "Machine learning", "Web scraping"],
      correctAnswer: 1,
      explanation: "Pandas is primarily used for data manipulation and analysis.",
    },
  ],
}
