const ReactQuestions = [
  {
    question: "What is React?",
    options: [
      { id: 2, text: "A CSS preprocessor" },
      { id: 3, text: "A Python web framework" },
      { id: 1, text: "A JavaScript library for building user interfaces" },
      { id: 4, text: "A database management system" },
    ],
    correct_option: 1,
  },
  {
    question: "Which function is used to render JSX in a React component?",
    options: [
      { id: 6, text: "componentDidMount()" },
      { id: 5, text: "render()" },
      { id: 7, text: "setState()" },
      { id: 8, text: "constructor()" },
    ],
    correct_option: 5,
  },
  {
    question: "What is a state in React?",
    options: [
      { id: 10, text: "A fixed value that cannot be modified" },
      { id: 11, text: "A built-in JavaScript object" },
      { id: 12, text: "A function to update the DOM" },
      { id: 9, text: "A variable that can be changed over time" },
    ],
    correct_option: 9,
  },
  {
    question:
      "Which of the following is a valid way to create a React component?",
    options: [
      { id: 13, text: "class MyComponent extends React.Component" },
      { id: 16, text: "All of the above" },
      { id: 14, text: "function MyComponent() {}" },
      { id: 15, text: "const MyComponent = () => {}" },
    ],
    correct_option: 16,
  },
  {
    question: "What is JSX in React?",
    options: [
      { id: 18, text: "Java XML" },
      { id: 19, text: "JavaScript Syntax Extension" },
      { id: 17, text: "JavaScript XML" },
      { id: 20, text: "JavaScript and XML" },
    ],
    correct_option: 17,
  },
  {
    question: "What is the purpose of the React Router library?",
    options: [
      { id: 22, text: "To manage state in React components" },
      { id: 21, text: "To handle routing in a React application" },
      { id: 23, text: "To create animations in React" },
      { id: 24, text: "To handle HTTP requests in React" },
    ],
    correct_option: 21,
  },
  {
    question:
      "Which lifecycle method is used for performing side effects in a React component?",
    options: [
      { id: 26, text: "render()" },
      { id: 27, text: "componentWillUpdate()" },
      { id: 28, text: "constructor()" },
      { id: 25, text: "componentDidMount()" },
    ],
    correct_option: 25,
  },
  {
    question: "What is React Native?",
    options: [
      {
        id: 29,
        text: "A framework for building mobile applications using React",
      },
      { id: 30, text: "A desktop application development framework" },
      { id: 31, text: "A database management system" },
      { id: 32, text: "A CSS preprocessor" },
    ],
    correct_option: 29,
  },
  {
    question: "What is the purpose of the 'props' object in React?",
    options: [
      { id: 34, text: "To manage state within a component" },
      { id: 35, text: "To define the structure of a React component" },
      {
        id: 33,
        text: "To pass data from a parent component to a child component",
      },
      { id: 36, text: "To handle HTTP requests" },
    ],
    correct_option: 33,
  },
  {
    question: "What is the key benefit of using React hooks?",
    options: [
      { id: 38, text: "They make class components obsolete" },
      { id: 39, text: "They enable two-way data binding in React" },
      {
        id: 37,
        text: "They allow you to use state and other React features in functional components",
      },
      { id: 40, text: "They provide a way to style React components" },
    ],
    correct_option: 37,
  },
  {
    question: "What is Redux in the context of React?",
    options: [
      { id: 41, text: "A state management library for React applications" },
      { id: 42, text: "A React component for routing" },
      {
        id: 43,
        text: "A built-in React feature for handling asynchronous operations",
      },
      { id: 44, text: "A CSS framework for styling React components" },
    ],
    correct_option: 41,
  },
  {
    question: "What is the purpose of the 'useState' hook in React?",
    options: [
      { id: 45, text: "To add routing to a React application" },
      { id: 46, text: "To manage and update state in a functional component" },
      { id: 47, text: "To define the initial state of a class component" },
      { id: 48, text: "To create a new React component" },
    ],
    correct_option: 46,
  },
  {
    question: "What is the virtual DOM in React?",
    options: [
      { id: 49, text: "A component in React that simulates a physical DOM" },
      { id: 50, text: "A lightweight version of the browser's DOM" },
      {
        id: 51,
        text: "A data structure that represents the actual DOM in memory",
      },
      { id: 52, text: "A component used for rendering images in React" },
    ],
    correct_option: 50,
  },
  {
    question: "In React, what is JSX used for?",
    options: [
      { id: 53, text: "To define the styles of a component" },
      { id: 54, text: "To create reusable functions" },
      {
        id: 55,
        text: "To describe the structure of UI elements using a syntax similar to HTML",
      },
      { id: 56, text: "To handle HTTP requests" },
    ],
    correct_option: 55,
  },
  {
    question:
      "What is the purpose of the 'componentDidMount' lifecycle method in React?",
    options: [
      { id: 57, text: "To update the state of a component" },
      { id: 59, text: "To render the component for the first time" },
      {
        id: 58,
        text: "To perform setup tasks and fetch data after the component is mounted",
      },
      { id: 60, text: "To unmount a component from the DOM" },
    ],
    correct_option: 58,
  },
  {
    question:
      "What is the role of the 'key' prop when rendering lists of elements in React?",
    options: [
      { id: 61, text: "It specifies the order in which elements are rendered" },
      {
        id: 62,
        text: "It provides a unique identifier for each element in the list",
      },
      { id: 63, text: "It determines the style of each list item" },
      { id: 64, text: "It is used to define the structure of a list item" },
    ],
    correct_option: 62,
  },
];

export default ReactQuestions;
