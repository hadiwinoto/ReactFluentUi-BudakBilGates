import * as React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, PrimaryButton, Stack, MessageBar, MessageBarType } from '@fluentui/react';
import authClient from '../../service/autClient';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Cek token di localStorage saat komponen pertama kali dirender
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      // Jika token ditemukan, redirect ke halaman home
      navigate('/home');
    }
  }, [navigate]);

  const onSubmit = async (event) => {
    event.preventDefault();

    if (!email || !password) {
      setErrorMessage('Email and password are required');
      return;
    }

    setErrorMessage('');
    setLoading(true);

    try {
      const response = await authClient.post('/login', {
        email,
        password,
      });

      const { token, user } = response.data;

      // Simpan token dan data user ke localStorage
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));

      alert(`Login successful! Welcome, ${user.full_name}`);

      // Redirect ke halaman home setelah login sukses
      navigate('/home');
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage('Login failed. Please try again.');
      }
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
      <form onSubmit={onSubmit} style={{ maxWidth: 360, width: '100%', height: 360 }}>
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
          <label style={{ textAlign: 'center',fontSize:"20px" }}><b>Login</b></label>
          {errorMessage && (
            <MessageBar messageBarType={MessageBarType.error}>{errorMessage}</MessageBar>
          )}
          <TextField
            label="Email"
            value={email}
            onChange={(e, newValue) => setEmail(newValue || '')}
            required
            styles={{
              fieldGroup: {
                borderWidth: 1,
                borderColor: '#c8c6c4',
                borderRadius: 1,
                height: 33,
                fontSize: 16,
              },
              field: {
                fontSize: 14,
                height: 30,
                padding: '0 10px',
              },
            }}
          />
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={(e, newValue) => setPassword(newValue || '')}
            required
            styles={{
              fieldGroup: {
                borderWidth: 1,
                borderColor: '#c8c6c4',
                borderRadius: 1,
                height: 33,
                fontSize: 14,
              },
              field: {
                fontSize: 14,
                height: 30,
                padding: '0 10px',
              },
            }}
          />
          <PrimaryButton
            type="submit"
            text={loading ? 'Logging in...' : 'Login'}
            disabled={loading}
          />
        </Stack>
      </form>
    </div>
  );
};

export default LoginForm;
