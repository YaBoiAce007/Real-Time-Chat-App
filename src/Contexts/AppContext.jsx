import { createContext, useContext, useState } from 'react';

const appContext = createContext();

export function AppContextProvider({ children }) {
    const [activeComponent, setActiveComponent] = useState('Banner');
    const [selectedChat, setSelectedChat] = useState(null);
    const [showSettings, setShowSettings] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 770);

    return (
        <appContext.Provider value={
            {
                activeComponent,
                setActiveComponent,
                selectedChat,
                setSelectedChat,
                showSettings,
                setShowSettings,
                isMobile,
                setIsMobile
            }
        }
        >
        {children}
        </appContext.Provider>
    )
}

export function useAppContext() {
    const context = useContext(appContext);
    if(!context){
        throw new Error('useAppContext must be used within an AppContextProvider');
    }
    return context;
}