import * as React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, PrimaryButton, Stack, MessageBar, MessageBarType } from '@fluentui/react';
import authClient, { getCsrfToken } from '../../service/authClient';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) navigate('/home');
  }, [navigate]);

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setErrorMessage('Email and password are required');
      return;
    }

    setErrorMessage('');
    setLoading(true);

    try {
      // 1️⃣ Dapatkan cookie CSRF
      const csrf = await getCsrfToken(); 

      console.log(csrf)

      const response = await authClient.post(
        '/api/login',
        { email, password },
        { headers: { 'X-XSRF-TOKEN': csrf } }
      );

      const { token, user } = response.data;
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));

      alert(`Login successful! Welcome, ${user.full_name}`);
      navigate('/home');
    } catch (err) {
      const msg = err.response?.data?.message ?? 'Login failed. Please try again.';
      setErrorMessage(msg);
    } finally {
      setLoading(false);
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
      <form onSubmit={onSubmit} style={{ maxWidth: 360, width: '100%' }}>
        <Stack
          tokens={{ childrenGap: 25 }}
          styles={{
            root: {
              padding: 20,
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              borderRadius: 4,
              backgroundColor: 'white',
            },
          }}
        >
          <label style={{ textAlign: 'center', fontSize: '20px' }}>
            <b>Login</b>
          </label>
          {errorMessage && (
            <MessageBar messageBarType={MessageBarType.error}>{errorMessage}</MessageBar>
          )}
          <TextField
            label="Email"
            value={email}
            onChange={(e, v) => setEmail(v || '')}
            required
          />
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={(e, v) => setPassword(v || '')}
            required
          />
          <PrimaryButton type="submit" text={loading ? 'Logging in...' : 'Login'} disabled={loading} />
        </Stack>
      </form>
    </div>
  );
};

export default LoginForm;
