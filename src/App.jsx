import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import SidebarMenu from './components/SideMenu';
import Footer from './components/Footer';

import Home from './pages/Home';
import Dashboard from './pages/Dashboard';


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
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />





            </Routes>
          </div>
          {/* <Footer /> */}
        </div>
      </div>
    </Router>
  );
}

export default App;
