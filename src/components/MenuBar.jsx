import * as React from 'react';
import { CommandBar } from '@fluentui/react';
import {
  FluentProvider,
  webLightTheme,
  Toolbar,
  ToolbarButton,
  ToolbarGroup,
  Button,
  Menu,
  MenuTrigger,
  MenuList,
  MenuItem,
  MenuPopover,
} from '@fluentui/react-components';
import {
  CalendarRegular,
  SettingsRegular,
  AppsRegular
} from '@fluentui/react-icons';


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
          padding: '0 16px',
          height: 38,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '1px solid #e0e0e0',
        }}
      >
        <ToolbarGroup>
        


          

            <ToolbarButton aria-label="Calendar" title="Calendar" appearance="subtle" icon={<AppsRegular />}>
              Dashboard
            </ToolbarButton>


          <Menu positioning={{ autoSize: true }}>
            <MenuTrigger disableButtonEnhancement>
               <ToolbarButton aria-label="Calendar" title="Calendar" appearance="subtle" icon={<CalendarRegular />}>
              Employee Self Service
            </ToolbarButton>
            </MenuTrigger>

            <MenuPopover>
              <MenuList>
                <MenuItem>Time Off Request</MenuItem>
                <MenuItem>Overtime Request</MenuItem>
              </MenuList>
            </MenuPopover>
          </Menu>
          
            
        
            <ToolbarButton aria-label="Settings" title="Settings" appearance="subtle" icon={<SettingsRegular />}>
              Settings
            </ToolbarButton>
        </ToolbarGroup>

      </Toolbar>
    </FluentProvider>
  );
};

export default MenuBar;