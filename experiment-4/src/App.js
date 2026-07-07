import React from "react";
import LifecycleDemo from "./components/LifecycleDemo";
import "./App.css";

function App() {
  const headerStyle = {
    background: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",
    color: "white",
    padding: "20px",
    textAlign: "center",
    marginBottom: "20px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
  };

  return (
    <div>
      <header style={headerStyle}>
        <h1 style={{ margin: 0, fontSize: "24px" }}>AWT Experiment 4: Lifecycle Methods Demo</h1>
      </header>
      <main style={{ padding: "20px" }}>
        <LifecycleDemo />
      </main>
    </div>
  );
}

export default App;
