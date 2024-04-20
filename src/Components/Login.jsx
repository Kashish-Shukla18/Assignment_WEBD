import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-3xl font-semibold mb-4">Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="border border-gray-300 rounded-md px-3 py-2 mb-4"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border border-gray-300 rounded-md px-3 py-2 mb-4"
      />
      <button
        onClick={handleLogin}
        className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600"
      >
        Login
      </button>
      <p className="mt-4">
        Don't have an account? <Link to="/signup"><span className='text-blue-600'>Sign up</span></Link>
      </p>
    </div>
  );
};

export default Login;
