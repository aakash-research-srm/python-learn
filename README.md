# Python Learn

An interactive Python learning platform built with Next.js, featuring hands-on coding exercises, quizzes, and real-time feedback.

## Features

- **Interactive Python Playground**: Write and execute Python code directly in the browser
- **Progressive Learning Modules**: Structured lessons from basics to advanced topics
- **Coding Quizzes**: Test your knowledge with interactive coding challenges
- **Real-time Feedback**: Instant validation of your code with test cases
- **Progress Tracking**: Monitor your learning journey and achievements
- **Dark/Light Mode**: Comfortable learning in any environment
- **Responsive Design**: Learn on desktop, tablet, or mobile

## Learning Modules

1. **Introduction to Python** - Get started with Python basics
2. **Syntax, Variables & Data Types** - Master Python fundamentals
3. **Operators & Control Flow** - Learn decision making and loops
4. **Loops & Strings** - Work with iterations and text processing
5. **Data Structures** - Explore lists, dictionaries, and more
6. **NumPy & Pandas** - Dive into data science libraries

## Getting Started

### Prerequisites

- Node.js 18.0 or later
- Python 3.8 or later (for code execution)
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/python-learn.git
   cd python-learn
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm start
```

## API Endpoints

- `POST /api/python` - Execute Python code securely with timeout protection

## Tech Stack

- **Frontend**: Next.js 15, React 18, TypeScript
- **Styling**: Tailwind CSS, shadcn/ui components
- **Code Execution**: Node.js child processes with Python
- **State Management**: React Context API
- **Icons**: Lucide React

## Security Features

- Code execution timeout (10 seconds)
- Temporary file isolation
- Automatic cleanup of executed files
- Error handling and validation

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

If you encounter any issues or have questions, please open an issue on GitHub.

---

**Python Learn** - Making Python accessible to everyone, one lesson at a time.
