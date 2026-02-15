import { useEffect } from 'react';
import { useAuthContext } from './Contexts/AuthContext';
import { Route, Routes, Navigate } from 'react-router-dom';
import Register from './Register';
import AppContent from './Components/AppContent';
import ProtectedRoute from './ProtectedRoute';
import Login from './Login';
import { useAppContext } from './Contexts/AppContext';

function App() {

  const {setIsMobile} = useAppContext();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 770);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [])

  const AuthRedirect = () => {
    const { isAuthenticated } = useAuthContext();

    return isAuthenticated ? <Navigate to="/" replace /> : <Navigate to="/login" replace />;
  };

  return (
    <Routes>
      {/* Public routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Protected routes */}
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <AppContent />
          </ProtectedRoute>
        }
      />

      {/* Catch all - redirect based on auth status */}
      <Route path="*" element={<AuthRedirect />} />
    </Routes>
  )
}

export default App;