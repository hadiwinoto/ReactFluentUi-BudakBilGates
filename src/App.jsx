import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import SidebarMenu from './components/SideMenu';
import Footer from './components/Footer';

import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import LeaveRequest from './pages/leaveManagement/LeaveRequest';
import Login from './pages/auth/Login';


function App() {
  const [collapsed, setCollapsed] = useState(() => {
    const saved = localStorage.getItem('sidebarCollapsed');
    return saved === 'true';
  });
  const sidebarWidth = collapsed ? 60 : 200;

  useEffect(() => {
    localStorage.setItem('sidebarCollapsed', collapsed);
  }, [collapsed]);
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <SidebarMenu collapsed={collapsed} setCollapsed={setCollapsed} />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            width: '100%',
            marginLeft: `${sidebarWidth}px`,
            transition: 'margin-left 0.3s',
          }}
        >
          <Navbar />
          <div style={{ flex: 1, padding: '20px', backgroundColor: "#F3F2F1" }}>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/leave-request" element={<LeaveRequest />} />
            </Routes>
          </div>
          {/* <Footer /> */}
        </div>
      </div>
    </Router>
  );
}

export default App;
