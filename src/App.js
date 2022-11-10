import "./App.css";
import React from "react";
import First_section from "./components/First_section";
import Footer from "./components/Footer";
const App = () => {
  return (
    <div className="App">
      <First_section />
      <section className="second_section"></section>
      <section className="third_section"></section>
      <section className="fourth_section"></section>
      <section className="prefooter"></section>
      <Footer />
    </div>
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
