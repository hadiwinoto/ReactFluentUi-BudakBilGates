import React, { useState } from 'react';
import {
  FluentProvider,
  webLightTheme,
  Toolbar,
  ToolbarButton,
  Text,
} from '@fluentui/react-components';
import { MailRegular, CalendarRegular, SettingsRegular } from '@fluentui/react-icons';

const IconButton = ({ Icon }) => {
  const [hover, setHover] = useState(false);

  return (
    <ToolbarButton
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      icon={<Icon style={{ color: hover ? '#1a73e8' : 'white' }} />}
    />
  );
};

const Navbar = () => {
  return (
    <FluentProvider theme={webLightTheme}>
      <Toolbar
        style={{
          backgroundColor: '#0F6CBD',
          color: 'white',
          padding: '0 16px',
          height: 48,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Text weight="semibold" style={{ color: 'white' }}></Text>
        <div style={{ display: 'flex', gap: '12px' }}>
          <IconButton Icon={MailRegular} />
          <IconButton Icon={CalendarRegular} />
          <IconButton Icon={SettingsRegular} />
        </div>
      </Toolbar>
    </FluentProvider>
  );
};

export default Navbar;
