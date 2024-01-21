import styles from "./App.module.css";
import { Homepage } from "./Pages/Homepage";
import{
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import About from './components/About/About'
import { Contact } from "./components/Contact/Contact";



function App() {
  return (
    <div className={styles.App} >
      <Navbar />
      <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Homepage/>}></Route>
        <Route path="/" element={<Homepage/>}></Route>
        <Route path="/about" element = {<About/>} ></Route>
      </Routes>
      </BrowserRouter>
      <Contact/>
    </div>
  )
}

export default App
