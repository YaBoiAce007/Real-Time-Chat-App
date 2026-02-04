import Navbar from "./Components/Navbar";
import styles from './App.module.css';
import {useState, useEffect} from 'react';
import MobileView from "./Components/MobileView";
import DesktopView from "./Components/DesktopView";

function App() {

  const [activeComponent, setActiveComponent] = useState('Banner');
  const [selectedChat, setSelectedChat] = useState(null);
  const [isMobile, setIsMobile] =  useState(window.innerWidth <=770);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 770);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [])

  return (
    <section className={styles.app}>
      <Navbar 
        setActiveComponent={setActiveComponent}
        setSelectedChat={setSelectedChat}
      />
      {
      isMobile ? (
        <MobileView
          activeComponent={activeComponent}
          setActiveComponent={setActiveComponent}
          selectedChat={selectedChat}
          setSelectedChat={setSelectedChat}
        />
      )
      :
      (
        <DesktopView
          activeComponent={activeComponent}
          setActiveComponent={setActiveComponent}
          selectedChat={selectedChat}
          setSelectedChat={setSelectedChat}
        />
      )
    }
    </section>
  )
}

export default App;