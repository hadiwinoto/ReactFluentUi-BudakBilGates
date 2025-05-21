import {
  FluentProvider,
  webLightTheme,
  MenuItem,
  Button,
  Text,
  tokens,
} from '@fluentui/react-components';

import {
  PeopleRegular,
  SearchRegular,
  ClipboardTextLtrRegular,
  BriefcaseRegular,
  CalendarRegular,
  HeartPulseRegular,
  NavigationRegular,
  AppsListDetailRegular,
  GridRegular
} from '@fluentui/react-icons';

import { useNavigate, useLocation } from 'react-router-dom';

import { useState } from 'react';

const SidebarMenu = ({ collapsed, setCollapsed }) => {
  const [jobOpen, setJobOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;
  const sidebarWidth = collapsed ? '60px' : '200px';
  const toggleSidebar = () => setCollapsed(!collapsed);
  

  const menuStyle = {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '13px',
  };

  const menuItemStyle = {
    backgroundColor: 'transparent',
    borderRadius: '6px',
    cursor: 'pointer',
    padding: '8px',
  };

  const sectionLabelStyle = {
    fontWeight: 'bold',
    fontSize: '12px',
    padding: '8px 0 4px',
    marginTop: '8px',
    color: tokens.colorNeutralForeground3,
  };

  return (
    <FluentProvider theme={webLightTheme}>
      <aside
       style={{
          width: sidebarWidth,
          height: '100vh',
          backgroundColor: '#f3f2f1',
          padding: '16px 8px',
          boxShadow: '2px 0 5px rgba(0,0,0,0.1)',
          position: 'fixed',
          top: 0,
          left: 0,
          transition: 'width 0.3s',
          display: 'flex',
          flexDirection: 'column',
          alignItems: collapsed ? 'center' : 'flex-start',
          zIndex: 1000,
        }}
      >
        {/* Header */}
        <Button
            icon={<NavigationRegular />}
            appearance="subtle"
            onClick={toggleSidebar}
            style={{
                backgroundColor:"#F3F2F1",
                marginBottom: '2px',
                alignSelf: collapsed ? 'center' : 'flex-start',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontWeight: 'bold',
            }}
            aria-label="Toggle menu"
            >
            {!collapsed && 
                <span style={{fontWeight:"bold", fontSize:"20px"}}>Gunanusa</span>
            }
        </Button>

        {/* Menu List */}
        <div style={menuStyle}>
          <MenuItem onClick={() => navigate('/')} icon={<GridRegular />} style={menuItemStyle}>
            {!collapsed && 'Home'}
          </MenuItem>
          <MenuItem onClick={() => navigate('/dashboard')} icon={<AppsListDetailRegular />} style={menuItemStyle}>
            {!collapsed && 'Dashboard'}
          </MenuItem>
          <MenuItem icon={<PeopleRegular />} style={menuItemStyle}>
            {!collapsed && 'Employee Spotlight'}
          </MenuItem>
          <MenuItem icon={<SearchRegular />} style={menuItemStyle}>
            {!collapsed && 'Profile Search'}
          </MenuItem>
          <MenuItem icon={<ClipboardTextLtrRegular />} style={menuItemStyle}>
            {!collapsed && 'Performance Reviews'}
          </MenuItem>

          {!collapsed && <div style={sectionLabelStyle}>Employee Management</div>}

          <MenuItem
            icon={<BriefcaseRegular />}
            style={menuItemStyle}
            onClick={() => setJobOpen(!jobOpen)}
          >
            {!collapsed && 'Job Postings'}
          </MenuItem>
          {jobOpen && !collapsed && (
            <div style={{ marginLeft: '20px', marginTop: '4px' }}>
              <Text size={200} style={{ display: 'block', marginBottom: 4 }}>• Developer</Text>
              <Text size={200} style={{ display: 'block' }}>• Designer</Text>
            </div>
          )}

          <MenuItem icon={<CalendarRegular />} style={menuItemStyle}>
            {!collapsed && 'Interviews'}
          </MenuItem>

          {!collapsed && <div style={sectionLabelStyle}>Benefits</div>}
          <MenuItem icon={<HeartPulseRegular />} style={menuItemStyle}>
            {!collapsed && 'Health Plans'}
          </MenuItem>
        </div>
      </aside>
    </FluentProvider>
  );
};

export default SidebarMenu;
