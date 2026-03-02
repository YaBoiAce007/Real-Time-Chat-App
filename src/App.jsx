import { useEffect } from 'react';
import { useAuthContext } from './Contexts/AuthContext';
import { Route, Routes, Navigate } from 'react-router-dom';
import Register from './Register';
import AppContent from './Components/AppContent';
import ProtectedRoute from './ProtectedRoute';
import Login from './Login';
import { useAppContext } from './Contexts/AppContext';
import Api from './Api';
import { decodeToken } from './Contexts/AuthContext';

function App() {

  const { setActiveComponent, setSelectedChat, setIsMobile, isLoading, setIsLoading } = useAppContext();
  const { isAuthenticated, setIsAuthenticated, setUser } = useAuthContext();

  useEffect(() => {

    const validateToken = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        setIsAuthenticated(false);
        setIsLoading(false);
        return;
      }
      try {
        const decoded = decodeToken(token);
        if (!decoded) {
          throw new Error('Token is malformed!');
        }
        const response = await Api.get('/validate', { _isValidation: true });
        setUser(
          { username: decoded.sub }
        );
        console.log(response.data);
        setIsAuthenticated(true);
      }
      catch (error) {
        if (error.response?.status === 401) {
          setIsAuthenticated(false);
          console.error("Token has expired");
          localStorage.removeItem('token');
        }
        else if (!error.response) {
          // This catches plain JS errors like our "Token is malformed!" throw,
          // as well as network errors where the server was unreachable entirely.
          // These have no error.response — just a message property.
          setIsAuthenticated(false);
          localStorage.removeItem('token');
          console.error(error.message); // shows "Token is malformed!" to the user
        }
        else {
          setIsAuthenticated(false);
          console.error("Validation failed due to network/server error");
          localStorage.removeItem('token');
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
          setSelectedChat(null);
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