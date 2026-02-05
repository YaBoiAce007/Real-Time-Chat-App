import { createContext, useContext, useState } from 'react';

const appContext = createContext();

export function AppContextProvider({ children }) {
    const [activeComponent, setActiveComponent] = useState('Banner');
    const [selectedChat, setSelectedChat] = useState(null);

    return (
        <appContext.Provider value={
            {
                activeComponent,
                setActiveComponent,
                selectedChat,
                setSelectedChat
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