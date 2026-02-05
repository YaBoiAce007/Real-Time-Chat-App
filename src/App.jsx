import Navbar from "./Components/Navbar";
import { AppContextProvider } from "./Contexts/AppContext";
import { useState, useEffect } from 'react';
import MobileView from "./Components/MobileView";
import DesktopView from "./Components/DesktopView";

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 770);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 770);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [])

  return (

    <AppContextProvider>
      <section className={`flex-row fullscreen-display bg-font-color`}>
        <Navbar/>
        {
          isMobile ? (<MobileView/>):(<DesktopView/>)
        }
      </section>
    </AppContextProvider>
  )
}

export default App;