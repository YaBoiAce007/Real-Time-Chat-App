import Navbar from "./Components/Navbar";
import { useState, useEffect } from 'react';
import MobileView from "./Components/MobileView";
import DesktopView from "./Components/DesktopView";
import { useAppContext } from "./Contexts/AppContext";
import AuthPage from "./AuthPage";

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 770);

  const {isAuthenticated} = useAppContext();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 770);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [])

  if(!isAuthenticated){
    return <AuthPage/>
  }

  return (
    <section className={`flex-row fullscreen-display bg-font-color`}>
      <Navbar />
      {
        isMobile ? (<MobileView />) : (<DesktopView />)
      }
    </section>
  )
}

export default App;