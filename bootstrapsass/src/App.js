import React from 'react';
import logo from './logo.svg';
//import './App.css';

import Navbar from './components/Navbar.js';
import MainPage from "./components/MainPage.js";
import SecondMainPage from "./components/SecondMainPage.js";

//this project after pedro
//https://www.youtube.com/watch?v=kpcjSaRngg8
//React and Sass Tutorial - Intro to SASS

//after costica without installing any extensions // item project home page like:
//https://github.com/esmeraldagabriela83/mihaelaProject/blob/main/src/homeComponents/gridHome/homeGrid.js
//comanda in terminal:
//npm install -D sass

//initial code


// function App() {
//   return (
//     <div className="App">
//
//     </div>
//   );
// }
//
// export default App;







function App() {
  return (<>


<Navbar />
<section className="container">
<MainPage />
<SecondMainPage />
</section>

  </>);
}

export default App;
