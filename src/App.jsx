import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, matchPath } from 'react-router-dom';

//layout
import Navbar from './components/Navbar';
import NotFoundPage from './pages/errors/NotFoundPage404';
import ForbiddenPage from './pages/errors/ForbiddenPage403';
import Error500Page from './pages/errors/Error500Page';

//pages
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import LeaveRequest from './pages/leaveManagement/LeaveRequest';
import FormRequest from './pages/leaveManagement/FormRequest';
import LoginForm from './pages/auth/Login';

const validRoutes = [
  '/home',
  '/dashboard',
  '/leave-request',
  '/leave-request-form',
  '/leave-request/:id'
];

function isValidPath(pathname) {
  return validRoutes.some((pattern) => matchPath({ path: pattern, end: true }, pathname));
}

function Layout() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <main
        style={{
          flex: 1,
          padding: '5px',
          backgroundColor: '#F3F2F1',
          minWidth: '100vw',
          maxWidth: '100vw',
          boxSizing: 'border-box',
          overflowX: 'auto',
          overflowY: 'auto'
        }}
      >
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/leave-request" element={<LeaveRequest />} />
          <Route path="/leave-request-form" element={<FormRequest />} />
          <Route path="/leave-request/:id" element={<LeaveRequest />} />
        </Routes>
      </main>
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

  const pathname = location.pathname;


  if (pathname === '/' || pathname === '/login') {
    return <LoginForm />;
  }

  if (isValidPath(pathname)) {
    return <Layout collapsed={collapsed} setCollapsed={setCollapsed} />;
  }
  return <NotFoundPage />;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<AppWrapper />} />
      </Routes>
    </Router>
  );
}

export default App;
