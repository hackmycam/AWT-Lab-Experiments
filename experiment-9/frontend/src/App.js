import React, { useState } from "react";
function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const login = async () => {
    const response = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username,
        password
      })
    });
    const data = await response.json();
    if (data.success) {
      setMessage("Login Success");
    } else {
      setMessage("Login Failed");
    }
  };
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Login Form</h2>
      <input
        type="text"
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <br /><br />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <br /><br />
      <button onClick={login}>Login</button>
      <h3>{message}</h3>
    </div>
  );
}
export default App;
