import Navbar from "./Components/Navbar";
import ChatRoomsContainer from "./Components/ChatRoomsContainer";
import ChatRoomContainer from "./Components/ChatRoomContainer";
import styles from './App.module.css';

function App() {
  return (
    <section className={styles.app}>
      <Navbar />
      <ChatRoomsContainer />
      <ChatRoomContainer />
    </section>
  )
}

export default App;