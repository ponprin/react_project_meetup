import "./App.css";
import React, { useState } from "react";
import Main from "./components/First_section/First_section";
import Footer from "./components/Footer/Footer";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Signup from "./components/Signup/Signup";
import Ccomponent from "./components/Api/Ccomponent";
const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="*" element={<Main />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/drinks" element={<Ccomponent />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}; //asdfsd
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
