import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { notification } from "antd";
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";

const Login = () => {
  const [err, setErr] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      notification.success({
        message: "Login Successful",
        description: "You have successfully logged in.",
        duration: 1,
      });
      navigate("/")
    } catch (err) {
      setErr(true);
    }
  };

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  useEffect(() => {
    document.title = "B chat | Login"; 
  }, []);

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">B Chat</span>
        <span className="title">Login</span>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="email" />
          <div className="password-input">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="password"
            />
            <span onClick={handleTogglePassword}>
              {showPassword ? <EyeInvisibleOutlined /> : <EyeOutlined />}
            </span>
          </div>
          <button>Sign in</button>
          {err && <span>Something went wrong</span>}
        </form>
        <p>You don't have an account? <Link to="/register">Register</Link></p>
      </div>
    </div>
  );
};

export default Login;
