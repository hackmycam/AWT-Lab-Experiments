import React from "react";
import ValidateForm from "./components/ValidateForm";
import "./App.css";

function App() {
  const headerStyle = {
    background: "linear-gradient(135deg, #6c5ce7 0%, #a29bfe 100%)",
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
        <h1 style={{ margin: 0, fontSize: "24px" }}>AWT Experiment 6: React Form Validation</h1>
      </header>
      <main style={{ padding: "20px" }}>
        <ValidateForm />
      </main>
    </div>
  );
}

export default App;
