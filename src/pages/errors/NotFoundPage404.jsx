import * as React from 'react';
import { Stack, Text, PrimaryButton } from '@fluentui/react';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
  const navigate = useNavigate();

  const goBackHome = () => {
    navigate('/home');
  };

  return (
    <Stack
      verticalAlign="center"
      horizontalAlign="center"
      styles={{
        root: {
          height: '100vh',
          backgroundColor: '#f3f2f1',
          padding: 20,
          textAlign: 'center',
        },
      }}
      tokens={{ childrenGap: 20 }}
    >
      <Text variant="xxLarge" styles={{ root: { color: '#0078d4', fontWeight: 'bold' } }}>
        404
      </Text>
      <Text variant="large" styles={{ root: { color: '#605e5c' } }}>
        Page Not Found - The page you are looking for does not exist.
      </Text>
      <PrimaryButton text="Go to Home" onClick={goBackHome} />
    </Stack>
  );
};

export default NotFoundPage;
