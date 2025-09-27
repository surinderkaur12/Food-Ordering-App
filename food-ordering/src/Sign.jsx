import { useState } from "react";
import './sign.css';

export default function Sign() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async(e) => {
    e.preventDefault(); 

    try {
      const response = await fetch(`http://localhost:5000/api/v1/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();
      console.log(data);

      if (!response.ok) {
        alert(data.message || 'Login failed');
        return;
      }

      alert('✅ Login successful!');
      setUsername('');
      setPassword('');

    } catch (error) {
      console.error('Login error:', error);
      alert('❌ An error occurred. Please try again.');
    }
  };

  return (
    <>
      <div className="login-background"></div>

      <div className="login">
        <div className="welcome">
          <h3><b>WELCOME <br/> BACK</b></h3>
          <br />
          <div className="sign-text">
            Welcome back! We're happy to see you again. Please log in to access your account and continue where you left off.
          </div>
          <div className="sign-icon">
            {/* Social Links (unchanged) */}
          </div>
        </div>

        <div className="sign">
          <div className="heading">SIGN IN</div>
          <br />
          <i className="fa-solid fa-user fa-xl" style={{ color: "white" }}></i>
          <label htmlFor="username"><b>USERNAME</b></label>
          <br />
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <i className="fa-solid fa-lock fa-xl" style={{ color: "white" }}></i>
          <label htmlFor="password"><b>PASSWORD</b></label>
          <br />
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <input type="checkbox" id="checkbox" />
          <label htmlFor="checkbox">Remember me</label>
          <br /><br /><br />
          <button className="signin-btn" onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </>
  );
}
