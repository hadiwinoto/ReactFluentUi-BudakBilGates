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
import { useNavigate, useLocation } from 'react-router-dom';
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
    const { pathname } = useLocation();W
    const handleNavigation = (path) => {
        navigate(path);
    };
    const isActive = (path) => pathname === path;
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
                    {/* Dashboard (selalu aktif pada root “/”) */}
                    <ToolbarButton
                        aria-label="Dashboard"
                        title="Dashboard"
                        appearance={isActive('/') ? 'primary' : 'subtle'}
                        onClick={() => handleNavigation('/')}
                    >
                        <AppsRegular /> Dashboard
                    </ToolbarButton>

                    {/* Employee Self Service dengan submenu */}
                    <Menu positioning={{ autoSize: true }}>
                        <MenuTrigger disableButtonEnhancement>
                            <ToolbarButton
                                aria-label="Employee"
                                title="Employee Self Service"
                                appearance={isActive('/leave-request') || isActive('/overtime-request')
                                    ? 'primary'
                                    : 'subtle'}
                                icon={<CalendarRegular />}
                            >
                                Employee Self Service
                            </ToolbarButton>
                        </MenuTrigger>

                        <MenuPopover>
                            <MenuList>
                                <MenuItem
                                    onClick={() => handleNavigation('/leave-request')}
                                    selected={isActive('/leave-request')}
                                >
                                    Time Off Request
                                </MenuItem>
                                <MenuItem
                                    onClick={() => handleNavigation('/overtime-request')}
                                    selected={isActive('/overtime-request')}
                                >
                                    Overtime Request
                                </MenuItem>
                            </MenuList>
                        </MenuPopover>
                    </Menu>
                </ToolbarGroup>
            </Toolbar>
        </FluentProvider>
    );
};

export default MenuBar;