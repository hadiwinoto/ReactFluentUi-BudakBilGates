import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar';
import SidebarMenu from './components/SideMenu';
// import Footer from './components/Footer';

import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import LeaveRequest from './pages/leaveManagement/LeaveRequest';
import LoginForm from './pages/auth/Login';

function Layout({ collapsed, setCollapsed }) {
  const sidebarWidth = collapsed ? 60 : 200;

  return (
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
            <Route path="/home" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/leave-request" element={<LeaveRequest />} />
          </Routes>
        </div>
        {/* <Footer /> */}
      </div>
    </div>
  );
}

function AppWrapper() {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(() => {
    const saved = localStorage.getItem('sidebarCollapsed');
    return saved === 'true';
  });

  useEffect(() => {
    localStorage.setItem('sidebarCollapsed', collapsed);
  }, [collapsed]);

  // Cek apakah path sekarang adalah "/login"
  const isLoginPage = location.pathname === '/';

  // Jika di halaman login, render LoginForm tanpa layout
  if (isLoginPage) {
    return <LoginForm />;
  }

  // Jika bukan login, render layout utama
  return <Layout collapsed={collapsed} setCollapsed={setCollapsed} />;
}

function App() {
  return (
    <Router>
      <Routes>
        {/* Route login langsung di sini supaya dapat dikenali oleh AppWrapper */}
        <Route path="/" element={<AppWrapper />} />
        {/* Route lain didelegasikan ke AppWrapper yang akan render layout utama */}
        <Route path="/*" element={<AppWrapper />} />
      </Routes>
    </Router>
  );
}

export default App;
