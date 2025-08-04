import * as React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, PrimaryButton, Stack, MessageBar, MessageBarType } from '@fluentui/react';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const onSubmit = (event) => {
    event.preventDefault();
    if (!username || !password) {
      setErrorMessage('Username is required');
    } else {
      setErrorMessage('');
      alert(`Login successful! Username: ${username}`);
      // redirect ke home setelah login berhasil
      navigate('/home');
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f3f2f1',
        padding: 20,
      }}
    >
      <form onSubmit={onSubmit} style={{ maxWidth: 360, width: '100%', height: 360 }}>
        <Stack
          tokens={{ childrenGap: 25 }}
          styles={{
            root: {
              padding: 20,
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              borderRadius: 1,
              backgroundColor: 'white',
            },
          }}
        >
          <h2 style={{ textAlign: 'center' }}>Login</h2>
          {errorMessage && (
            <MessageBar messageBarType={MessageBarType.error}>{errorMessage}</MessageBar>
          )}
          <TextField
            label="Username"
            value={username}
            onChange={(e, newValue) => setUsername(newValue || '')}
            required
          />
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={(e, newValue) => setPassword(newValue || '')}
            required
          />
          <PrimaryButton type="submit" text="Login" />
        </Stack>
      </form>
    </div>
  );
};

export default LoginForm;
