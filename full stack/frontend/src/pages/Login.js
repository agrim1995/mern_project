import React, { useState } from 'react';
import API from '../services/api';

function Login() {
  const [form, setForm] = useState({ username: '', password: '' });
  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await API.post("/login", form);
      alert(res.data); // Later add auth context / token handling
    } catch (err) {
      alert("Login failed");
    }
  };

  return (
    <div className="container mt-5">
      <h3>Login</h3>
      <form onSubmit={handleSubmit}>
        <input name="username" className="form-control my-2" onChange={handleChange} required />
        <input name="password" type="password" className="form-control my-2" onChange={handleChange} required />
        <button className="btn btn-success">Login</button>
      </form>
    </div>
  );
}

export default Login;
