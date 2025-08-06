import * as React from 'react';
import { Stack, Text, PrimaryButton } from '@fluentui/react';
import { useNavigate } from 'react-router-dom';

const ForbiddenPage = () => {
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
      <Text variant="xxLarge" styles={{ root: { color: '#d13438', fontWeight: 'bold' } }}>
        403
      </Text>
      <Text variant="large" styles={{ root: { color: '#605e5c' } }}>
        Forbidden - You do not have permission to access this page.
      </Text>
      <PrimaryButton text="Go to Home" onClick={goBackHome} />
    </Stack>
  );
};

export default ForbiddenPage;
