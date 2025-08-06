import React, { useState } from 'react';
import { MailRegular, CalendarRegular, AppsRegular } from '@fluentui/react-icons';
import {
  Button,
  MenuTrigger,
  MenuList,
  MenuItem,
  MenuPopover,
  FluentProvider,
  webLightTheme,
  Toolbar,
  ToolbarButton,
  ToolbarGroup,
  Menu,
  Image,
  Text,
} from "@fluentui/react-components";
import { useNavigate } from 'react-router-dom';
import client from '../service/autClient';

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

const MenuBar = () => {

  const navigate = useNavigate();
  const handleNavigation = (path) => {
    navigate(path);
  };
  return (
    <FluentProvider theme={webLightTheme}>
      {/* menu bar */}
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
                <MenuItem onClick={() => handleNavigation('/leave-request')}>Time Off Request</MenuItem>
                <MenuItem>Overtime Request</MenuItem>
              </MenuList>
            </MenuPopover>
          </Menu>
        </ToolbarGroup>

      </Toolbar>
    </FluentProvider>
  );
};

export default MenuBar;