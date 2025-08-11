import React, { useState } from 'react';
import { CalendarRegular, AppsRegular } from '@fluentui/react-icons';
import {
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
} from "@fluentui/react-components";
import { useNavigate, useLocation } from 'react-router-dom';
import client from '../service/authClient';

const IconButton = ({ Icon }) => {
    const [hover, setHover] = useState(false);
    return (
        <ToolbarButton
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            icon={<Icon style={{ color: hover ? '#166cb3ff' : 'white' }} />}
        />
    );
};


const softActiveBg = '#e8f2ff';          // warna latar lembut
const softActiveText = '#50a3e7ff';


const MenuBar = () => {

    const navigate = useNavigate();
    const { pathname } = useLocation();
    const handleNavigation = (path) => {
        navigate(path);
    };
    const isActive = (path) => pathname === path;
    return (
        <FluentProvider theme={webLightTheme}>
            <Toolbar
                style={{
                    backgroundColor: "#ffffff",
                    padding: "0 16px",
                    height: 38,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    borderBottom: "1px solid #e0e0e0",
                }}
            >
                <ToolbarGroup>
                    {/* Dashboard */}
                    <ToolbarButton
                        aria-label="Dashboard"
                        title="Dashboard"
                        // gunakan style untuk warna custom
                        style={{
                            backgroundColor: isActive("/") ? softActiveBg : "transparent",
                            color: isActive("/") ? softActiveText : "inherit",
                        }}
                        onClick={() => handleNavigation("/")}
                    >
                        <AppsRegular /> Dashboard
                    </ToolbarButton>

                    {/* Employee Self Service dengan submenu */}
                    <Menu positioning={{ autoSize: true }}>
                        <MenuTrigger disableButtonEnhancement>
                            <ToolbarButton
                                aria-label="Employee"
                                title="Employee Self Service"
                                style={{
                                    backgroundColor:
                                        isActive("/leave-request") || isActive("/overtime-request")
                                            ? softActiveBg
                                            : "transparent",
                                    color:
                                        isActive("/leave-request") || isActive("/overtime-request")
                                            ? softActiveText
                                            : "inherit",
                                }}
                                icon={<CalendarRegular />}
                            >
                                Employee Self Service
                            </ToolbarButton>
                        </MenuTrigger>

                        <MenuPopover>
                            <MenuList>
                                <MenuItem
                                    onClick={() => handleNavigation("/leave-request")}
                                    // style aktif pada item submenu
                                    style={{
                                        backgroundColor: isActive("/leave-request") ? softActiveBg : "transparent",
                                        color: isActive("/leave-request") ? softActiveText : "inherit",
                                    }}
                                >
                                    Time Off Request
                                </MenuItem>
                                <MenuItem
                                    onClick={() => handleNavigation("/overtime-request")}
                                    style={{
                                        backgroundColor: isActive("/overtime-request") ? softActiveBg : "transparent",
                                        color: isActive("/overtime-request") ? softActiveText : "inherit",
                                    }}
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