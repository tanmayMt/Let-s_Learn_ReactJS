import './App.css'; // Importing CSS file for styling
import UseMemo1 from './components/Hooks/useMemo/UseMemo1';


function App() {
  return (
    <>
    < UseMemo1/>
    </>
  );
}

export default App; // Exporting the App component




//In React, components are reusable, independent building blocks that define the UI of an application.


// Components can be functional (stateless) or class-based (stateful), and they help in maintaining a modular and scalable code structure by managing 
// UI logic efficiently.

// Why Use Components?
// ✅ Reusability – Write once, use multiple times.
// ✅ Maintainability – Easier to manage and update.
// ✅ Code Organization – Breaks UI into smaller, manageable parts.

// Types of Components in React
// Functional Components (Recommended) and Class Components (Older Approach)

// Functional Components
// Written as JavaScript functions.
// Uses React Hooks for state and lifecycle management.
// Simple and easy to read.

// function Greeting() {
//     return <h1>Hello, Welcome to React!</h1>;
// }
// export default Greeting;

// Class Components
// Uses ES6 class syntax.
// Manages state using this.state.
// Requires render() method.
// import React, { Component } from "react";

// class Greeting extends Component {
//     render() {
//         return <h1>Hello, Welcome to React!</h1>;
//     }
// }
// export default Greeting;


