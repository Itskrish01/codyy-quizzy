const JavaScriptQuestions = [
  {
    question: "What is JavaScript?",
    options: [
      { id: 2, text: "A programming language for building websites" },
      { id: 3, text: "A virtual reality platform" },
      { id: 1, text: "A markup language for creating web pages" },
      { id: 4, text: "A type of coffee" },
    ],
    correct_option: 2,
  },
  {
    question: "Which keyword is used to declare a variable in JavaScript?",
    options: [
      { id: 6, text: "let" },
      { id: 5, text: "print" },
      { id: 7, text: "var" },
      { id: 8, text: "const" },
    ],
    correct_option: 6,
  },
  {
    question: "What is the result of 2 + '2' in JavaScript?",
    options: [
      { id: 10, text: "4" },
      { id: 11, text: "22" },
      { id: 12, text: "TypeError" },
      { id: 9, text: "NaN" },
    ],
    correct_option: 11,
  },
  {
    question: "How do you comment a single line in JavaScript?",
    options: [
      { id: 13, text: "// This is a comment" },
      { id: 16, text: "/* This is a comment */" },
      { id: 14, text: "<!-- This is a comment -->" },
      { id: 15, text: "rem( This is a comment )" },
    ],
    correct_option: 13,
  },
  {
    question: "What is a callback function in JavaScript?",
    options: [
      { id: 18, text: "A function that calls other functions" },
      { id: 19, text: "A function passed as an argument to another function" },
      { id: 17, text: "A function that repeats itself" },
      { id: 20, text: "A function that logs messages to the console" },
    ],
    correct_option: 19,
  },
  {
    question: "Which data type represents true or false values in JavaScript?",
    options: [
      { id: 22, text: "String" },
      { id: 21, text: "Boolean" },
      { id: 23, text: "Number" },
      { id: 24, text: "Array" },
    ],
    correct_option: 21,
  },
  {
    question: "What does the 'NaN' acronym stand for in JavaScript?",
    options: [
      { id: 26, text: "Not a Number" },
      { id: 27, text: "New and Numeric" },
      { id: 28, text: "Never-Ending Null" },
      { id: 25, text: "No Arguments Needed" },
    ],
    correct_option: 26,
  },
  {
    question: "How do you check the length of an array in JavaScript?",
    options: [
      { id: 29, text: "array.length" },
      { id: 30, text: "array.size" },
      { id: 31, text: "array.count" },
      { id: 32, text: "array.dimension" },
    ],
    correct_option: 29,
  },
  {
    question: "What is a closure in JavaScript?",
    options: [
      { id: 34, text: "A secret password" },
      { id: 35, text: "A way to lock a variable" },
      {
        id: 33,
        text: "A function that has access to its own scope, and the outer function's scope",
      },
      { id: 36, text: "A way to delete a variable" },
    ],
    correct_option: 33,
  },
  {
    question: "What is the purpose of the 'setTimeout' function in JavaScript?",
    options: [
      { id: 38, text: "To set the system clock" },
      { id: 39, text: "To create an infinite loop" },
      {
        id: 37,
        text: "To delay the execution of a function for a specified number of milliseconds",
      },
      { id: 40, text: "To print a message to the console" },
    ],
    correct_option: 37,
  },
  {
    question: "What is a closure and how is it useful in JavaScript?",
    options: [
      { id: 126, text: "A closure is a block of code that only runs once." },
      {
        id: 5125,
        text: "Closures are used for securing sensitive data in JavaScript.",
      },
      {
        id: 157,
        text: "A closure is a function that remembers its lexical scope, even when the function is executed outside that scope. It's useful for encapsulating private data and creating factory functions.",
      },
      {
        id: 158,
        text: "Closures are used to prevent memory leaks in JavaScript.",
      },
    ],
    correct_option: 157,
  },
  {
    question:
      "What is the difference between 'null' and 'undefined' in JavaScript?",
    options: [
      {
        id: 1242,
        text: "'null' represents an intentional absence of any object value, while 'undefined' is used for uninitialized variables.",
      },
      {
        id: 3342,
        text: "'null' is a type in JavaScript, while 'undefined' is a value.",
      },
      {
        id: 4361,
        text: "There is no difference; 'null' and 'undefined' are interchangeable.",
      },
      {
        id: 4346,
        text: "'null' is a reserved keyword, and 'undefined' is not.",
      },
    ],
    correct_option: 1242,
  },
];

export default JavaScriptQuestions;
