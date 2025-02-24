import { useState } from "react";
import Counter from "./app/src/components/Counter";
import ParentComponent from "./app/src/components/ParentComponent";
import "./index.css";

export default function App() {
  const [showCounter, setShowCounter] = useState(false);
  const [showPureComponent, setShowPureComponent] = useState(false);

  return (
    <div className="App">
      <h1>React Counter</h1>
      <h4>Template for testing React component lifecycle methods</h4>
      <h5>Use console to see the render status</h5>
      <button onClick={() => setShowCounter((prev) => !prev)}>
        {showCounter ? "Unmount" : "Mount"} Counter Component
      </button>
      {showCounter && <Counter />}

      <hr />

      <h1>React Pure Component</h1>
      <h4>Template for testing React Pure Component</h4>
      <h5>Use console to see the render status</h5>
      <button onClick={() => setShowPureComponent((prev) => !prev)}>
        {showPureComponent ? "Unmount" : "Mount"} Pure Component Demo
      </button>
      {showPureComponent && <ParentComponent />}
    </div>
  );
}
