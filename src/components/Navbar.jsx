import React, { useState } from 'react';
import { MailRegular } from '@fluentui/react-icons';
import userImage from "../assets/user.png";
import logoGunanusa from "../assets/logo.png";
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
  Menu,
  Image,
} from "@fluentui/react-components";
import { useNavigate } from 'react-router-dom';
import client from '../service/authClient';

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

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await client.post('/api/logout');

      if (response.status === 200) {
        localStorage.removeItem('token');
        navigate('/');
      } else {
        console.error('Logout failed');
      }
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <FluentProvider theme={webLightTheme}>
      <Toolbar
        style={{
          backgroundColor: '#ffffff',
          color: 'white',
          padding: '0 16px',
          height: 57,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '1px solid #e0e0e0',
        }}
      >
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <Image
            alt="Test Logo"
            shape="circular"
            src={logoGunanusa}
            height={48}
            width={215}
          />
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
          <IconButton Icon={MailRegular} />
          <Menu positioning={{ autoSize: true }}>
            <MenuTrigger disableButtonEnhancement>
              <Image
                alt="User"
                shape="circular"
                src={userImage}
                height={35}
                width={35}
              />
            </MenuTrigger>
            <MenuPopover>
              <MenuList>
                <MenuItem>Profile</MenuItem>
                <MenuItem>Settings</MenuItem>
                <MenuItem>Help</MenuItem>
                <div style={{ borderTop: '1px solid #e0e0e0', margin: '4px 0' }}></div>
                <MenuItem onClick={handleLogout}>
                  <span className='text-danger' style={{ color: 'red' }}>Logout</span>
                </MenuItem>
              </MenuList>
            </MenuPopover>
          </Menu>
        </div>
      </Toolbar>
    </FluentProvider>
  );
};

export default Navbar;