import Footer from "./components/Footer";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import './CSS/header.css';
function App() {

  return (
    <>
     <Header/>
      <Outlet/>
     <Footer/>
    </>
  )
}

export default App;
