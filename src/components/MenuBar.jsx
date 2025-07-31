import * as React from 'react';
import { CommandBar } from '@fluentui/react';
import {
  FluentProvider,
  webLightTheme,
  Toolbar,
  ToolbarButton,
  Text,
} from '@fluentui/react-components';

const MenuBar = () => {
  const items = [
    {
      key: 'home',
      text: 'Home',
      href: '#home',
      iconProps: { iconName: 'Home' },
    },
    {
      key: 'about',
      text: 'About',
      href: '#about',
      iconProps: { iconName: 'Info' },
    },
    {
      key: 'services',
      text: 'Services',
      href: '#services',
      iconProps: { iconName: 'Settings' },
    },
    {
      key: 'contact',
      text: 'Contact',
      href: '#contact',
      iconProps: { iconName: 'Mail' },
    },
  ];

  return (
    <FluentProvider theme={webLightTheme}>
          <Toolbar
            style={{
              backgroundColor: '#ffffff',
              // color: 'white',
              padding: '0 16px',
              height: 48,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderBottom: '1px solid #e0e0e0',
            }}
          >
            <Text weight="semibold" style={{ color: 'white' }}></Text>
            <div style={{ display: 'flex', gap: '12px' }}>
              {/* <IconButton Icon={MailRegular} />
              <IconButton Icon={CalendarRegular} />
              <IconButton Icon={SettingsRegular} /> */}
            </div>
          </Toolbar>
        </FluentProvider>
  );
};

export default MenuBar;