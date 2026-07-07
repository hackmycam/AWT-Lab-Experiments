import React from "react";
import Orders from "./components/Orders";
import "./App.css";

function App() {
  const headerStyle = {
    background: "linear-gradient(135deg, #1f4068 0%, #162447 100%)",
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
        <h1 style={{ margin: 0, fontSize: "24px" }}>AWT Experiment 5: Orders Detail & Delivery</h1>
      </header>
      <main style={{ padding: "20px" }}>
        <Orders />
      </main>
    </div>
  );
}

export default App;
