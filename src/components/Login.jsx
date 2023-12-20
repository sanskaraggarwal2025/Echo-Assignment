import React, { useState } from 'react';
import './style.css'
const LoginForm = () => {
  const users = [
    { name: 'John Doe', age: 25 },
    { name: 'Alexander', age: 17 },
    { name: 'Nelson Mandela', age: 78 },
    { name: 'Mahatma Gandhi', age: 56 },
    { name: 'Nikol Tesla', age: 39 }
  ]


  const handleSort = () => {
    users.sort((a, b) => a.age - b.age);
    const sortedNames = users.map(user => user.name);
    window.alert(sortedNames.join('\n'));
  }

  

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const userExists = users.some((user) => user.name === username);

    if (userExists) {
      // console.log({ username, password });

      setStatus(true);
      setUsername('');
      setPassword('');
    } else {
      window.alert('User not found. Please check your username.');
      setUsername('');
      setPassword('');
    }
  };

  const handleContinueWithMobile = () => {
    const userName = users.find((user) => user.name === username)?.name || 'Your Name';
    alert(`Thank you for choosing mobile, ${userName}!`);
  };

  return (
    <div>
      {status ?
        <p>Welcome!</p>
        : (
          <>
            <div className="login-container">
              <h2>Login Form</h2>
              <form>
                <label>
                  Username:
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </label>
                <br />
                <label>
                  Password:
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </label>
                <br />
                <button type="submit" onClick={handleSubmit} className='btn-1'>
                  Login
                </button>
                <br />
                <br />
                <button onClick={handleSort}>Continue with Email</button>
                <br />
                <br />
                <button onClick={handleContinueWithMobile}>Continue with Mobile</button>
              </form>
            </div>
          </>
        )}
    </div>
  );
};

export default LoginForm;
