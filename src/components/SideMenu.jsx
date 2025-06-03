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
  CalendarRegular,
  NavigationRegular,
  AppsListDetailRegular,
  PersonArrowLeftRegular,
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
          icon={<NavigationRegular style={{ color: collapsed ? "#0078D4" : "inherit" }} />} // Warna aktif saat hover/collapsed
          appearance="subtle"
          onClick={toggleSidebar}
          style={{
            marginBottom: "8px",
            alignSelf: collapsed ? "center" : "flex-start",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            fontWeight: "bold",
            overflow: "hidden",
            paddingLeft: collapsed ? "20px" : "8px",
            paddingRight: collapsed ? "8px" : "12px",
            transition: "all 0.3s ease",
            maxWidth: collapsed ? "40px" : "100%",
            backgroundColor: collapsed ? "transparent" : undefined,
            cursor: "pointer",
          }}
          aria-label="Toggle menu"
          onMouseEnter={(e) => {
            if (collapsed) {
              e.currentTarget.style.backgroundColor = "#f3f2f1";
            }
          }}
          onMouseLeave={(e) => {
            if (collapsed) {
              e.currentTarget.style.backgroundColor = "transparent";
            }
          }}
        >
          <span
            style={{
              opacity: collapsed ? 0 : 1,
              maxWidth: collapsed ? 0 : "200px",
              whiteSpace: "nowrap",
              overflow: "hidden",
              transition: "all 0.3s ease",
              pointerEvents: collapsed ? "none" : "auto",
            }}
          >
            Gunanusa
          </span>
        </Button>


        {/* Menu List */}
        <div style={menuStyle}>
          {/* <MenuItem onClick={() => navigate('/')} icon={<GridRegular />} style={menuItemStyle}>
            {!collapsed && 'Home'}
          </MenuItem> */}
          <MenuItem onClick={() => navigate('/dashboard')} icon={<AppsListDetailRegular />} style={menuItemStyle}>
            {!collapsed && 'Dashboard'}
          </MenuItem>
          <MenuItem icon={<PeopleRegular />} style={menuItemStyle}>
            {!collapsed && 'Employee Spotlight'}
          </MenuItem>
          {/* <MenuItem icon={<SearchRegular />} style={menuItemStyle}>
            {!collapsed && 'Profile Search'}
          </MenuItem> */}
          {/* <MenuItem icon={<ClipboardTextLtrRegular />} style={menuItemStyle}>
            {!collapsed && 'Performance Reviews'}
          </MenuItem> */}

          {!collapsed && <div style={sectionLabelStyle}>Leave Management</div>}

          {/* <MenuItem
            icon={<BriefcaseRegular />}
            style={menuItemStyle}
            onClick={() => setJobOpen(!jobOpen)}
          >
            {!collapsed && 'Job Postings'}
          </MenuItem> */}
          {/* {jobOpen && !collapsed && (
            <div style={{ marginLeft: '20px', marginTop: '4px' }}>
              <Text size={200} style={{ display: 'block', marginBottom: 4 }}>• Developer</Text>
              <Text size={200} style={{ display: 'block' }}>• Designer</Text>
            </div>
          )} */}

          <MenuItem onClick={() => navigate('/leave-request')} icon={<PersonArrowLeftRegular />} style={menuItemStyle}>
            {!collapsed && 'Leave Request'}
          </MenuItem>

          <MenuItem icon={<CalendarRegular />} style={menuItemStyle}>
            {!collapsed && 'Overtime Request'}
          </MenuItem>

          <MenuItem icon={<CalendarRegular />} style={menuItemStyle}>
            {!collapsed && 'Reimbursement'}
          </MenuItem>

          {/* {!collapsed && <div style={sectionLabelStyle}>Benefits</div>}
          <MenuItem icon={<HeartPulseRegular />} style={menuItemStyle}>
            {!collapsed && 'Health Plans'}
          </MenuItem> */}
        </div>
      </aside>
    </FluentProvider>
  );
};

export default SidebarMenu;
