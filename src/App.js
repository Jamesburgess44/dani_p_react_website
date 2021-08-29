import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavMenu from './Components/Navbar/navMenu';
import "./App.css";


function App() {
  return (
    <div style={{
      backgroundImage: "url(/daniPBackground.jpg)",
      position: "fixed",
      minWidth: "100%",
      minHeight: "100%",
      backgroundSize: "cover",
      backgroundPosition: "center",
       }}>
    <NavMenu />
    </div>
  );
}

export default App;
