import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './styles.css';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  
  const navigate = useNavigate();  

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username || !password) {
      setMessage("Please fill in both fields.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Login successful! Redirecting...");
        setTimeout(() => {
          // Using useNavigate to redirect to /orders with username passed in state
          navigate('/orders', { state: { username: username } });
        }, 1500);
      } else {
        setMessage(data.message || "Login failed.");
      }
    } catch (error) {
      console.error(error);
      setMessage("An error occurred. Please try again.");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.loginContainer}>
        <h2 style={styles.heading}>Login</h2>
        <form onSubmit={handleSubmit}>
          <div style={styles.formGroup}>
            <div className="group">
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder=" "
                required
                className="input"
              />
              <label htmlFor="username" style={styles.label}>Username</label>
              <div className="bar"></div>
            </div>
          </div>
          <div style={styles.formGroup}>
            <div className="group">
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder=" "
                required
                className="input"
              />
              <label htmlFor="password" style={styles.label}>Password</label>
              <div className="bar"></div>
            </div>
          </div>
          <button type="submit" style={styles.button}>Login</button>
        </form>
        {message && <p style={styles.message}>{message}</p>}
      </div>
    </div>
  );
};

const styles = {
  container: { display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" },
  loginContainer: { padding: "30px", background: "#fff", borderRadius: "8px", boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)" },
  heading: { textAlign: "center", marginBottom: "20px", color: "black", fontSize: "30px" },
  formGroup: { marginBottom: "15px" },
  label: { marginBottom: "5px", display: "block", color: "black" },
  button: { width: "100%", padding: "15px", backgroundColor: "#000", color: "#fff", border: "none", borderRadius: "4px", cursor: "pointer" },
  message: { marginTop: "15px", color: "red" },
};

export default Login;
