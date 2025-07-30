import React, { useState } from 'react';
import API from '../services/api';

function Register() {
  const [form, setForm] = useState({ username: '', password: '' });
  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await API.post("/register", form);
      alert("Registered successfully!");
    } catch (err) {
      alert("Registration failed");
    }
  };

  return (
    <div className="container mt-5">
      <h3>Register</h3>
      <form onSubmit={handleSubmit}>
        <input name="username" className="form-control my-2" onChange={handleChange} required />
        <input name="password" type="password" className="form-control my-2" onChange={handleChange} required />
        <button className="btn btn-primary">Register</button>
      </form>
    </div>
  );
}

export default Register;
