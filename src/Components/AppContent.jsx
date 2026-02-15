import Navbar from "./Navbar";
import MobileView from "./MobileView";
import DesktopView from "./DesktopView";
import { useAppContext } from "../Contexts/AppContext";

function AppContent() {

    const {isMobile} = useAppContext();

    return (
        <section className={`flex-row fullscreen-display bg-font-color`}>
            <Navbar />
            {
                isMobile ? (<MobileView />) : (<DesktopView />)
            }
        </section>
    )
}

export default AppContent;