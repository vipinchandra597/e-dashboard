import React, { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom"

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate= useNavigate();

  useEffect(()=>{
    const auth=localStorage.getItem('user')
    if(auth)
    navigate('/')
  },[])

  const handleLogin = async () => {
    let result = await fetch("http://localhost:5000/login", {
      method: "post",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    if(result.name){
      localStorage.setItem("user",JSON.stringify(result))
      navigate("/")
    }
    else{
      alert("Please enter correct details ")
    }
  };
  return (
    <div className="login">
      <input
        className="inputBox"
        type="text"
        placeholder="Enter email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        className="inputBox"
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button className="button" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default Login;
