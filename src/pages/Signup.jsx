import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Signup = ({ addUser }) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [interests, setInterests] = useState([]);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && password) {
      addUser({ name, password, interests });
      navigate('/login');
    } else {
      setError('Please fill in all fields');
    }
  };

  const handleInterestChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setInterests([...interests, value]);
    } else {
      setInterests(interests.filter((interest) => interest !== value));
    }
  };

  const availableInterests = ['technology', 'sports', 'science', 'business', 'entertainment', 'general', 'health'];

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-white shadow-lg rounded-md">
        <h2 className="text-2xl font-bold text-center">Sign Up</h2>
        {error && <p className="text-red-500">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div>
            <p className="block text-sm font-medium text-gray-700">Interests</p>
            <div className="flex flex-wrap -m-1">
              {availableInterests.map((interest) => (
                <label key={interest} className="flex items-center m-1">
                  <input
                    type="checkbox"
                    value={interest}
                    checked={interests.includes(interest)}
                    onChange={handleInterestChange}
                    className="form-checkbox text-blue-600"
                  />
                  <span className="ml-2 text-sm text-gray-700">{interest.charAt(0).toUpperCase() + interest.slice(1)}</span>
                </label>
              ))}
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 text-white bg-blue-600 hover:bg-blue-700 rounded-md focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Sign Up
            </button>
          </div>
        </form>
        <p className="text-center text-sm text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-600 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
