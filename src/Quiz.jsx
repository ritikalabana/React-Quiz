import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';

const questions = [
 
  {
    id: 1,
    text: "What is the main purpose of React.js?",
    options: [
      { id: 1, text: "To manage databases" },
      { id: 2, text: "To build user interfaces" },
      { id: 3, text: "To handle server-side logic" },
      { id: 4, text: "To perform data analysis" }
    ],
    correctAnswerId: 2,
    explanation: "React is primarily a JavaScript library for building interactive user interfaces."
  },
  {
    id: 2,
    text: "Which React hook is used to manage side effects in functional components?",
    options: [
      { id: 1, text: "useState" },
      { id: 2, text: "useEffect" },
      { id: 3, text: "useContext" },
      { id: 4, text: "useReducer" }
    ],
    correctAnswerId: 2,
    explanation: "useEffect allows you to perform side effects (data fetching, subscriptions, etc.) in functional components."
  },
  {
    id: 3,
    text: "What does JSX stand for?",
    options: [
      { id: 1, text: "JavaScript XML" },
      { id: 2, text: "JavaScript Extension" },
      { id: 3, text: "JavaScript Syntax" },
      { id: 4, text: "JavaScript XHR" }
    ],
    correctAnswerId: 1,
    explanation: "JSX stands for JavaScript XML - it's a syntax extension that allows HTML-like code in JavaScript."
  },
  {
    id: 4,
    text: "Which method is called after a component is rendered for the first time?",
    options: [
      { id: 1, text: "componentWillMount" },
      { id: 2, text: "componentDidMount" },
      { id: 3, text: "componentDidUpdate" },
      { id: 4, text: "componentWillUpdate" }
    ],
    correctAnswerId: 2,
    explanation: "componentDidMount is a lifecycle method that runs after the component output has been rendered to the DOM."
  },
  {
    id: 5,
    text: "What is the correct syntax to render a React component?",
    options: [
      { id: 1, text: "<MyComponent />" },
      { id: 2, text: "{MyComponent}" },
      { id: 3, text: "render MyComponent" },
      { id: 4, text: "React.render(MyComponent)" }
    ],
    correctAnswerId: 1,
    explanation: "React components can be rendered using JSX syntax with angle brackets, similar to HTML."
  },
  
  // Questions 6-10
  {
    id: 6,
    text: "What is the purpose of the virtual DOM in React?",
    options: [
      { id: 1, text: "To directly manipulate the browser's DOM" },
      { id: 2, text: "To create a lightweight copy of the real DOM for efficient updates" },
      { id: 3, text: "To store component state" },
      { id: 4, text: "To handle routing in single-page applications" }
    ],
    correctAnswerId: 2,
    explanation: "The virtual DOM is a lightweight representation of the real DOM that allows React to compute minimal updates for better performance."
  },
  {
    id: 7,
    text: "Which React feature helps prevent unnecessary re-renders?",
    options: [
      { id: 1, text: "React.memo" },
      { id: 2, text: "React.component" },
      { id: 3, text: "React.router" },
      { id: 4, text: "React.fragment" }
    ],
    correctAnswerId: 1,
    explanation: "React.memo is a higher-order component that memoizes the result to prevent unnecessary re-renders when props haven't changed."
  },
  {
    id: 8,
    text: "How do you pass data from parent to child components?",
    options: [
      { id: 1, text: "Using state" },
      { id: 2, text: "Using props" },
      { id: 3, text: "Using refs" },
      { id: 4, text: "Using context" }
    ],
    correctAnswerId: 2,
    explanation: "Props (short for properties) are how data flows from parent to child components in React."
  },
  {
    id: 9,
    text: "What is the correct way to update state in a functional component?",
    options: [
      { id: 1, text: "this.setState()" },
      { id: 2, text: "useState() setter function" },
      { id: 3, text: "setState()" },
      { id: 4, text: "updateState()" }
    ],
    correctAnswerId: 2,
    explanation: "In functional components, you call the setter function returned by useState() to update state."
  },
  {
    id: 10,
    text: "What does the 'key' prop help React with?",
    options: [
      { id: 1, text: "Styling components" },
      { id: 2, text: "Identifying elements uniquely in lists" },
      { id: 3, text: "Managing component lifecycle" },
      { id: 4, text: "Handling form input" }
    ],
    correctAnswerId: 2,
    explanation: "The key prop helps React identify which items in a list have changed, been added, or been removed."
  },

  // Questions 11-15
  {
    id: 11,
    text: "Which lifecycle method is used for cleanup in class components?",
    options: [
      { id: 1, text: "componentWillUnmount" },
      { id: 2, text: "componentDidMount" },
      { id: 3, text: "shouldComponentUpdate" },
      { id: 4, text: "componentDidUpdate" }
    ],
    correctAnswerId: 1,
    explanation: "componentWillUnmount is called right before a component is unmounted/destroyed - perfect for cleanup."
  },
  {
    id: 12,
    text: "What is the purpose of PropTypes?",
    options: [
      { id: 1, text: "To define component styles" },
      { id: 2, text: "To validate the types of props passed to components" },
      { id: 3, text: "To handle routing" },
      { id: 4, text: "To manage app state" }
    ],
    correctAnswerId: 2,
    explanation: "PropTypes is a type-checking library for validating the types of props passed to components."
  },
  {
    id: 13,
    text: "Which hook replaces componentDidMount in functional components?",
    options: [
      { id: 1, text: "useState" },
      { id: 2, text: "useEffect with empty dependency array" },
      { id: 3, text: "useContext" },
      { id: 4, text: "useCallback" }
    ],
    correctAnswerId: 2,
    explanation: "useEffect with an empty dependency array runs once after initial render, similar to componentDidMount."
  },
  {
    id: 14,
    text: "What does the useCallback hook do?",
    options: [
      { id: 1, text: "Manages side effects" },
      { id: 2, text: "Memoizes callback functions" },
      { id: 3, text: "Handles component state" },
      { id: 4, text: "Creates context providers" }
    ],
    correctAnswerId: 2,
    explanation: "useCallback returns a memoized callback function that only changes if its dependencies change."
  },
  {
    id: 15,
    text: "How can you share state between components without prop drilling?",
    options: [
      { id: 1, text: "Using useState" },
      { id: 2, text: "Using refs" },
      { id: 3, text: "Using the Context API" },
      { id: 4, text: "Using Redux" }
    ],
    correctAnswerId: 3,
    explanation: "The Context API allows sharing values between components without explicitly passing props at every level."
  },

  // Questions 16-20
  {
    id: 16,
    text: "What is the main benefit of using controlled components in forms?",
    options: [
      { id: 1, text: "Better performance" },
      { id: 2, text: "Easier styling" },
      { id: 3, text: "More predictable state management" },
      { id: 4, text: "Simpler syntax" }
    ],
    correctAnswerId: 3,
    explanation: "Controlled components keep form data in React state, making it more predictable and easier to validate."
  },
  {
    id: 17,
    text: "Which package is commonly used for routing in React applications?",
    options: [
      { id: 1, text: "react-navigation" },
      { id: 2, text: "react-router" },
      { id: 3, text: "react-route" },
      { id: 4, text: "react-links" }
    ],
    correctAnswerId: 2,
    explanation: "React Router is the most popular routing library for React applications."
  },
  {
    id: 18,
    text: "What is the purpose of the useRef hook?",
    options: [
      { id: 1, text: "To manage state" },
      { id: 2, text: "To create mutable references that persist across renders" },
      { id: 3, text: "To handle side effects" },
      { id: 4, text: "To create context" }
    ],
    correctAnswerId: 2,
    explanation: "useRef creates a mutable ref object whose .current property is initialized to the passed argument."
  },
  {
    id: 19,
    text: "Which method is used to handle errors in child components?",
    options: [
      { id: 1, text: "componentDidCatch" },
      { id: 2, text: "shouldComponentUpdate" },
      { id: 3, text: "getDerivedStateFromError" },
      { id: 4, text: "Both 1 and 3" }
    ],
    correctAnswerId: 4,
    explanation: "Both componentDidCatch (for side effects) and getDerivedStateFromError (for rendering fallback UI) are error boundary methods."
  },
  {
    id: 20,
    text: "What does the React.Fragment component allow you to do?",
    options: [
      { id: 1, text: "Group multiple elements without adding extra nodes to the DOM" },
      { id: 2, text: "Create reusable UI components" },
      { id: 3, text: "Handle routing between pages" },
      { id: 4, text: "Manage component state" }
    ],
    correctAnswerId: 1,
    explanation: "Fragments let you group a list of children without adding extra nodes to the DOM."
  },

  // Questions 21-25
  {
    id: 21,
    text: "What is the difference between React.PureComponent and React.Component?",
    options: [
      { id: 1, text: "PureComponent implements shouldComponentUpdate with a shallow prop/state comparison" },
      { id: 2, text: "PureComponent can't use lifecycle methods" },
      { id: 3, text: "PureComponent is only for functional components" },
      { id: 4, text: "PureComponent automatically implements all lifecycle methods" }
    ],
    correctAnswerId: 1,
    explanation: "PureComponent implements shouldComponentUpdate() with a shallow prop and state comparison to prevent unnecessary re-renders."
  },
  {
    id: 22,
    text: "What is the primary purpose of the useReducer hook?",
    options: [
      { id: 1, text: "To handle form submissions" },
      { id: 2, text: "To manage complex state logic" },
      { id: 3, text: "To create memoized values" },
      { id: 4, text: "To replace useEffect" }
    ],
    correctAnswerId: 2,
    explanation: "useReducer is usually preferable to useState when you have complex state logic involving multiple sub-values."
  },
  {
    id: 23,
    text: "What is code splitting in React?",
    options: [
      { id: 1, text: "Splitting code into different files" },
      { id: 2, text: "Dynamically loading parts of the application to improve performance" },
      { id: 3, text: "Using different languages in a React app" },
      { id: 4, text: "Separating UI from business logic" }
    ],
    correctAnswerId: 2,
    explanation: "Code splitting lets you split your app into smaller bundles which can then be loaded on demand."
  },
  {
    id: 24,
    text: "Which method is used for performance optimization in class components?",
    options: [
      { id: 1, text: "shouldComponentUpdate" },
      { id: 2, text: "componentDidUpdate" },
      { id: 3, text: "componentWillReceiveProps" },
      { id: 4, text: "componentDidMount" }
    ],
    correctAnswerId: 1,
    explanation: "shouldComponentUpdate lets you control whether a component should re-render for performance optimization."
  },
  {
    id: 25,
    text: "What is the children prop in React?",
    options: [
      { id: 1, text: "A special prop that contains JSX between a component's opening and closing tags" },
      { id: 2, text: "A prop for displaying child components" },
      { id: 3, text: "A way to define component hierarchy" },
      { id: 4, text: "A method to access child components" }
    ],
    correctAnswerId: 1,
    explanation: "The children prop contains the content between the opening and closing tags of a component."
  },

  // Questions 26-30
  {
    id: 26,
    text: "What is React.lazy() used for?",
    options: [
      { id: 1, text: "Optimizing performance by memoizing components" },
      { id: 2, text: "Lazy loading components" },
      { id: 3, text: "Creating asynchronous components" },
      { id: 4, text: "Delaying component rendering" }
    ],
    correctAnswerId: 2,
    explanation: "React.lazy() lets you render a dynamic import as a regular component, enabling code splitting via lazy loading."
  },
  {
    id: 27,
    text: "Which of these is NOT a valid way to create a React component?",
    options: [
      { id: 1, text: "As a class extending React.Component" },
      { id: 2, text: "As a function returning JSX" },
      { id: 3, text: "As an object with render method" },
      { id: 4, text: "As an arrow function returning JSX" }
    ],
    correctAnswerId: 3,
    explanation: "React components must be either functions or classes - plain objects with render methods are not valid components."
  },
  {
    id: 28,
    text: "What is the purpose of the useMemo hook?",
    options: [
      { id: 1, text: "To remember function components between renders" },
      { id: 2, text: "To memoize expensive calculations" },
      { id: 3, text: "To manage side effects" },
      { id: 4, text: "To create mutable references" }
    ],
    correctAnswerId: 2,
    explanation: "useMemo returns a memoized value, recomputing only when its dependencies change - useful for expensive calculations."
  },
  {
    id: 28,
    text: "What's the purpose of portals in React?",
    options: [
      { id: 1, text: "To route between pages" },
      { id: 2, text: "To render children into a DOM node outside parent hierarchy" },
      { id: 3, text: "To transfer data between components" },
      { id: 4, text: "To create modals and tooltips" }
    ],
    correctAnswerId: 2,
    explanation: "Portals provide a way to render children into DOM nodes that exist outside the DOM hierarchy of the parent component."
  },
  {
    id: 29,
    text: "Which of these is NOT a React Hook?",
    options: [
      { id: 1, text: "useReducer" },
      { id: 2, text: "useContext" },
      { id: 3, text: "useRender" },
      { id: 4, text: "useCallback" }
    ],
    correctAnswerId: 3,
    explanation: "useRender is not a valid React Hook - the others are all built-in React Hooks."
  },
  {
    id: 30,
    text: "What is the purpose of the key prop when rendering lists?",
    options: [
      { id: 1, text: "It helps React identify which items have changed" },
      { id: 2, text: "It is required for list styling" },
      { id: 3, text: "It defines the order of list items" },
      { id: 4, text: "It makes list items clickable" }
    ],
    correctAnswerId: 1,
    explanation: "Keys help React identify which items have changed, are added, or are removed, leading to more efficient updates."
  },

  // Questions 31-35
  {
    id: 31,
    text: "What is the correct way to update state based on previous state?",
    options: [
      { id: 1, text: "setCount(count + 1)" },
      { id: 2, text: "setCount(prevCount => prevCount + 1)" },
      { id: 3, text: "setCount(function(prev) { return prev + 1 })" },
      { id: 4, text: "Both 2 and 3" }
    ],
    correctAnswerId: 4,
    explanation: "Using a function with the previous state as argument ensures you're working with the latest state."
  },
  {
    id: 32,
    text: "What is Suspense used for in React?",
    options: [
      { id: 1, text: "Handling loading states" },
      { id: 2, text: "Managing component errors" },
      { id: 3, text: "Optimizing performance" },
      { id: 4, text: "Handling asynchronous data fetching" }
    ],
    correctAnswerId: 1,
    explanation: "Suspense lets components 'wait' for something before rendering, typically used for lazy loading or data fetching."
  },
  {
    id: 33,
    text: "What is the difference between Element and Component in React?",
    options: [
      { id: 1, text: "Elements are instances of Components" },
      { id: 2, text: "Components return Elements" },
      { id: 3, text: "Elements are plain objects, Components are functions/classes" },
      { id: 4, text: "All of the above" }
    ],
    correctAnswerId: 4,
    explanation: "All statements correctly describe the relationship between Elements and Components in React."
  },
  {
    id: 34,
    text: "What happens if you call useState multiple times?",
    options: [
      { id: 1, text: "It throws an error" },
      { id: 2, text: "It creates multiple independent state variables" },
      { id: 3, text: "It updates the same state variable" },
      { id: 4, text: "It merges all state into one object" }
    ],
    correctAnswerId: 2,
    explanation: "Each useState() call creates a separate state variable with its own updater function."
  },
  {
    id: 35,
    text: "What is the second argument to useEffect used for?",
    options: [
      { id: 1, text: "The cleanup function" },
      { id: 2, text: "The dependency array" },
      { id: 3, text: "The effect function" },
      { id: 4, text: "The initial state" }
    ],
    correctAnswerId: 2,
    explanation: "The dependency array controls when the effect runs - when empty it runs only once after mount."
  },

  // Questions 36-40
  {
    id: 36,
    text: "What is a custom hook in React?",
    options: [
      { id: 1, text: "A hook provided by third-party libraries" },
      { id: 2, text: "A JavaScript function that uses other hooks" },
      { id: 3, text: "A special hook for class components" },
      { id: 4, text: "A hook that can modify React internals" }
    ],
    correctAnswerId: 2,
    explanation: "A custom hook is a JavaScript function whose name starts with 'use' and may call other hooks."
  },
  {
    id: 37,
    text: "Why would you use useLayoutEffect instead of useEffect?",
    options: [
      { id: 1, text: "For effects that must run synchronously after DOM mutations" },
      { id: 2, text: "For better performance" },
      { id: 3, text: "For handling animations" },
      { id: 4, text: "All of the above" }
    ],
    correctAnswerId: 1,
    explanation: "useLayoutEffect fires synchronously after DOM mutations, before browser paint - useful for measuring layout."
  },
  {
    id: 38,
    text: "What is the difference between createElement and cloneElement?",
    options: [
      { id: 1, text: "createElement creates new elements, cloneElement clones existing ones" },
      { id: 2, text: "cloneElement is for functional components, createElement for class components" },
      { id: 3, text: "createElement is deprecated in favor of cloneElement" },
      { id: 4, text: "There is no difference" }
    ],
    correctAnswerId: 1,
    explanation: "createElement creates new React elements, while cloneElement clones existing ones (with new props/children if desired)."
  },
  {
    id: 39,
    text: "Which of these is NOT a valid React event handler?",
    options: [
      { id: 1, text: "onClick" },
      { id: 2, text: "onChange" },
      { id: 3, text: "onHover" },
      { id: 4, text: "onSubmit" }
    ],
    correctAnswerId: 3,
    explanation: "onHover is not a standard React event - the mouse equivalent is onMouseOver/onMouseEnter."
  },
  {
    id: 40,
    text: "What is the purpose of the StrictMode wrapper?",
    options: [
      { id: 1, text: "To make components render faster" },
      { id: 2, text: "To highlight potential problems in the application" },
      { id: 3, text: "To enforce prop types validation" },
      { id: 4, text: "To disable React warnings" }
    ],
    correctAnswerId: 2,
    explanation: "StrictMode is a tool for highlighting potential problems like unsafe lifecycles or legacy API usage."
  },

  // Questions 41-45
  {
    id: 41,
    text: "What does the useImperativeHandle hook allow you to do?",
    options: [
      { id: 1, text: "Access DOM nodes directly" },
      { id: 2, text: "Customize the instance value exposed to parent components when using ref" },
      { id: 3, text: "Create imperative animations" },
      { id: 4, text: "Bypass React's rendering mechanism" }
    ],
    correctAnswerId: 2,
    explanation: "useImperativeHandle customizes the instance value that is exposed to parent components when using ref."
  },
  {
    id: 42,
    text: "What is the preferred way to add styles in React?",
    options: [
      { id: 1, text: "Inline styles using the style prop" },
      { id: 2, text: "CSS classes with className" },
      { id: 3, text: "CSS-in-JS solutions" },
      { id: 4, text: "All of the above depending on use case" }
    ],
    correctAnswerId: 4,
    explanation: "React supports various styling approaches - the best one depends on your specific needs and preferences."
  },
  {
    id: 43,
    text: "What is the difference between server-side rendering and static site generation?",
    options: [
      { id: 1, text: "SSR renders pages on each request, SSG at build time" },
      { id: 2, text: "SSG is faster but less flexible" },
      { id: 3, text: "SSR allows dynamic content, SSG is for static content" },
      { id: 4, text: "All of the above" }
    ],
    correctAnswerId: 4,
    explanation: "All statements accurately describe differences between Server-Side Rendering and Static Site Generation."
  },
  {
    id: 44,
    text: "What is the purpose of the forwardRef function?",
    options: [
      { id: 1, text: "To forward refs to DOM elements in child components" },
      { id: 2, text: "To redirect component rendering" },
      { id: 3, text: "To create reference links between components" },
      { id: 4, text: "To optimize performance" }
    ],
    correctAnswerId: 1,
    explanation: "forwardRef creates a React component that forwards the ref attribute it receives to another component."
  },
  {
    id: 45,
    text: "What is hydration in React?",
    options: [
      { id: 1, text: "The process of attaching event listeners to server-rendered markup" },
      { id: 2, text: "A performance optimization technique" },
      { id: 3, text: "A way to load components asynchronously" },
      { id: 4, text: "A method for component composition" }
    ],
    correctAnswerId: 1,
    explanation: "Hydration is the process where React 'attaches' to existing HTML rendered on the server."
  },

  // Questions 46-50
  {
    id: 46,
    text: "Which hook can be used to optimize performance when passing callbacks to child components?",
    options: [
      { id: 1, text: "useMemo" },
      { id: 2, text: "useCallback" },
      { id: 3, text: "useReducer" },
      { id: 4, text: "useRef" }
    ],
    correctAnswerId: 2,
    explanation: "useCallback is specifically designed to memoize callback functions to prevent unnecessary re-renders."
  },
  {
    id: 47,
    text: "What is the primary benefit of using Redux with React?",
    options: [
      { id: 1, text: "Better form handling" },
      { id: 2, text: "Centralized state management" },
      { id: 3, text: "Improved server-side rendering" },
      { id: 4, text: "Built-in routing capabilities" }
    ],
    correctAnswerId: 2,
    explanation: "Redux provides a centralized store for application state that can be accessed from any component."
  },
  {
    id: 48,
    text: "Which of these is NOT a common React architectural pattern?",
    options: [
      { id: 1, text: "Container/Presentational components" },
      { id: 2, text: "Higher-Order Components" },
      { id: 3, text: "Render Props" },
      { id: 4, text: "Mixin components" }
    ],
    correctAnswerId: 4,
    explanation: "Mixins were an early pattern but are not recommended in modern React development."
  },
  {
    id: 49,
    text: "What is the main advantage of React hooks over class components?",
    options: [
      { id: 1, text: "Better performance" },
      { id: 2, text: "Simpler code organization and reusability" },
      { id: 3, text: "Built-in routing" },
      { id: 4, text: "Automatic state management" }
    ],
    correctAnswerId: 2,
    explanation: "Hooks allow you to organize logic into reusable functions and avoid the complexity of classes."
  },
  {
    id: 50,
    text: "Which tool can analyze component render performance in React?",
    options: [
      { id: 1, text: "React.memo" },
      { id: 2, text: "React Profiler" },
      { id: 3, text: "React.lazy" },
      { id: 4, text: "React.StrictMode" }
    ],
    correctAnswerId: 2,
    explanation: "React Profiler is built into React DevTools and helps measure how often components render and why."
  }
];
const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [timer, setTimer] = useState(0);
  const [isRunningTimer, setIsRunningTimer] = useState(true);

  useEffect(() => {
    let interval;
    if (isRunningTimer) {
      interval = setInterval(() => {
        setTimer(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunningTimer]);

  const currentQuestion = questions[currentQuestionIndex];
  const totalQuestions = questions.length;

  const handleOptionSelect = (optionId) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestion.id]: optionId
    });
    setShowFeedback(true);
  };

  const handleNext = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setShowFeedback(false);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setShowFeedback(false);
    }
  };

  const handleSubmit = () => {
    setIsRunningTimer(false);
    setQuizCompleted(true);
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setQuizCompleted(false);
    setShowFeedback(false);
    setTimer(0);
    setIsRunningTimer(true);
  };

  const calculateScore = () => {
    let score = 0;
    questions.forEach(question => {
      if (selectedAnswers[question.id] === question.correctAnswerId) {
        score++;
      }
    });
    return score;
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  if (quizCompleted) {
    const score = calculateScore();
    const percentage = Math.round((score / totalQuestions) * 100);
    
    let feedbackMessage = "";
    if (percentage >= 80) {
      feedbackMessage = "Excellent! You really know your React.";
    } else if (percentage >= 60) {
      feedbackMessage = "Good job! You have a solid understanding.";
    } else {
      feedbackMessage = "Keep practicing! Review the concepts and try again.";
    }

    return (
      <motion.div 
        className="quiz-container results-view"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="quiz-header">
          <h1>Quiz Results</h1>
          <div className="score-display">
            <div className="score-circle">
              <span>{score}</span>
              <small>/{totalQuestions}</small>
            </div>
            <div className="time-taken">Time: {formatTime(timer)}</div>
          </div>
        </div>
        
        <div className="results-content">
          <div className="performance-chart">
            <svg viewBox="0 0 36 36" className="circular-chart">
              <path
                className="circle-bg"
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                className="circle-fill"
                strokeDasharray={`${percentage}, 100`}
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <text x="18" y="20.5" className="percentage">{percentage}%</text>
            </svg>
          </div>
          
          <div className="feedback-message">
            <p>{feedbackMessage}</p>
          </div>
          
          <div className="breakdown-section">
            <h3>Question Breakdown</h3>
            <div className="breakdown-grid">
              {questions.map((q, index) => (
                <div 
                  key={q.id}
                  className={`breakdown-item ${
                    selectedAnswers[q.id] === q.correctAnswerId ? 'correct' : 'incorrect'
                  }`}
                  title={`Q${index + 1}: ${q.text}`}
                >
                  {index + 1}
                </div>
              ))}
            </div>
          </div>
          
          <motion.button
            className="restart-btn"
            onClick={handleRestart}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Take Quiz Again
          </motion.button>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div 
      className="quiz-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="quiz-header">
        <h1>React Knowledge Quiz</h1>
        <div className="progress-info">
          <span>Question {currentQuestionIndex + 1} of {totalQuestions}</span>
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${((currentQuestionIndex + 1) / totalQuestions) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>
      
      <div className="quiz-body">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestionIndex}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -50, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="question-container"
          >
            <h2 className="question-text">{currentQuestion.text}</h2>
            
            <div className="options-grid">
              {currentQuestion.options.map((option) => (
                <motion.button
                  key={option.id}
                  className={`option-btn${
                    selectedAnswers[currentQuestion.id] === option.id ? 'selected' : ''
                  } ${
                    showFeedback && option.id === currentQuestion.correctAnswerId ? 'correct-answer' : ''
                  } ${
                    showFeedback && 
                    selectedAnswers[currentQuestion.id] === option.id && 
                    option.id !== currentQuestion.correctAnswerId ? 'incorrect-answer' : ''
                  }`}
                  onClick={() => handleOptionSelect(option.id)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={showFeedback}
                >
                  <span className="option-letter">
                    {String.fromCharCode(65 + currentQuestion.options.indexOf(option))}
                  </span>
                  <span className="option-text">{option.text}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {showFeedback && (
          <motion.div 
            className="feedback-container"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="feedback-content">
              <div className={`feedback-icon ${
                selectedAnswers[currentQuestion.id] === currentQuestion.correctAnswerId ? 'correct' : 'incorrect'
              }`}>
                {selectedAnswers[currentQuestion.id] === currentQuestion.correctAnswerId ? (
                  <svg viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24">
                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                  </svg>
                )}
              </div>
              <div className="feedback-text">
                <p>{currentQuestion.explanation}</p>
              </div>
            </div>
          </motion.div>
        )}

        <div className="navigation-controls">
          <div className="question-dots">
            {questions.map((_, index) => (
              <button
                key={index}
                className={`dot ${currentQuestionIndex === index ? 'active' : ''} ${
                  selectedAnswers[questions[index].id] ? 'answered' : ''
                }`}
                onClick={() => {
                  setCurrentQuestionIndex(index);
                  setShowFeedback(false);
                }}
              />
            ))}
          </div>
          
          <div className="nav-buttons">
            <motion.button
              className="nav-btn"
              onClick={handlePrevious}
              disabled={currentQuestionIndex === 0}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Previous
            </motion.button>
            
            {currentQuestionIndex === totalQuestions - 1 ? (
              <motion.button
                className="nav-btn submit-btn"
                onClick={handleSubmit}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Submit Quiz
              </motion.button>
            ) : (
              <motion.button
                className="nav-btn"
                onClick={handleNext}
                disabled={!selectedAnswers[currentQuestion.id]}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Next
              </motion.button>
            )}
          </div>
        </div>
        
        <div className="quiz-footer">
          <div className="timer-display">
            <svg viewBox="0 0 24 24">
              <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
              <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
            </svg>
            <span>{formatTime(timer)}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Quiz;

          