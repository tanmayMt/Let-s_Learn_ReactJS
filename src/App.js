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


import './App.css'; // Importing CSS file for styling
import PropsDestructuringFunctional from './components/PropsDestructuringFunctional/PropsDestructuringFunctional/PropsDestructuringFunctional';

function App() {
  return (
    <div>        
      {/* Header section with inline styles */}
      <h1 style={{ backgroundColor: 'purple', textAlign: 'center', padding: '10px', color: 'white' }}>
        Todo App
      </h1>

      {/* Rendering the Card component twice */}
      <PropsDestructuringFunctional cardTitle="Call Father" cardDesc="You neither an anchor to hold us back nor a sail to take us forward, but a guiding light whose love shows the way."/>
      <PropsDestructuringFunctional cardTitle="Call Mother" cardDesc="You are the heart of a home, the first teacher, and the purest form of love."/>
      <PropsDestructuringFunctional cardTitle="Call Wife" cardDesc="You are not just a partner but a best friend, a supporter, and a reason to smile every day"/>
    </div>
  );
}

export default App; // Exporting the App component