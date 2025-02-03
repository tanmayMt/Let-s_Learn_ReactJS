import './App.css'; // Importing CSS file for styling
import Card from './components/Card/index.js'; // Importing the Card component

function App() {
  return (
    <div>        
      {/* Header section with inline styles */}
      <h1 style={{ backgroundColor: 'purple', textAlign: 'center', padding: '10px', color: 'white' }}>
        Todo App
      </h1>

      {/* Rendering the Card component twice */}
      <Card />
      <Card />
    </div>
  );
}

export default App; // Exporting the App component