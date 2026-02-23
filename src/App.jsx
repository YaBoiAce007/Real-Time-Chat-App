import { useEffect } from 'react';
import { useAuthContext } from './Contexts/AuthContext';
import { Route, Routes, Navigate, useNavigate, replace } from 'react-router-dom';
import Register from './Register';
import AppContent from './Components/AppContent';
import ProtectedRoute from './ProtectedRoute';
import Login from './Login';
import { useAppContext } from './Contexts/AppContext';
import Api from './Api';

function App() {

  const { setActiveComponent, setIsMobile, isLoading, setIsLoading } = useAppContext();
  const { isAuthenticated, setIsAuthenticated } = useAuthContext();

  useEffect(() => {

    const validateToken = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        setIsAuthenticated(false);
        setIsLoading(false);
        return;
      }
      try {
        const response = await Api.get('/validate', { _isValidation: true });
        console.log(response.data);
        setIsAuthenticated(true);
      }
      catch (error) {
        if (error.response?.status === 401) {
          setIsAuthenticated(false);
          console.log("Token has expired");
          localStorage.removeItem('token');
        }
        else {
          setIsAuthenticated(false);
          console.log("Validation failed due to network/server error");
        }
      }
      finally {
        setIsLoading(false);
      }
    };

    const interceptor = Api.interceptors.response.use(
      (config) => config,
      (error) => {
        if (error.response?.status === 401 && !error.config?._isValidation && !error.config?._isLogin) {
          localStorage.removeItem("token");
          setIsAuthenticated(false);
          setActiveComponent('Banner');
          window.alert("Your session has expired, please log in again.");
        }
        return Promise.reject(error);
      }
    );

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 770);
    };

    validateToken();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      Api.interceptors.response.eject(interceptor);
    }
  }, [])

  const AuthRedirect = () => {
    return isAuthenticated ? <Navigate to="/" replace /> : <Navigate to="/login" replace />;
  };

  if (isLoading) {
    return;
  }

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