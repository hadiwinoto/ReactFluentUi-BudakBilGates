import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

//layout
import Navbar from './components/Navbar';
// import Footer from './components/Footer';


//pages
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import LeaveRequest from './pages/leaveManagement/LeaveRequest';
import FormRequest from './pages/leaveManagement/FormRequest';
import LoginForm from './pages/auth/Login';

function Layout() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <main
        style={{
          flex: 1,
          padding: '5px',
          backgroundColor: '#F3F2F1',
          minWidth: '100vw', // ganti dari '100vh' yang salah jadi '100vw'
          maxWidth: '100vw', // supaya tidak melebihi viewport width
          boxSizing: 'border-box',
          overflowX: 'auto', // agar horizontal scroll muncul jika isi melebihi lebar viewport
          overflowY: 'auto'  // agar jika panjang konten tinggi lebih dari viewport, bisa scroll vertikal juga
        }}
      >
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/leave-request" element={<LeaveRequest />} />
          <Route path="/leave-request-form" element={<FormRequest />} />
        </Routes>
      </main>
      {/* <Footer /> */}
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
  const isLoginPage = location.pathname === '/' || location.pathname === '/login';

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
