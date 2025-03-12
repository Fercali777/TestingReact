import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import BtnShowContent from "./components/btn-load-content";
import CharacterList from "./components/CharacterList";

function App() {
  const [showCharacters, setShowCharacters] = useState(false);

  const handleClick = () => {
    if (!showCharacters) {
      setShowCharacters(true); 
    }
  };

  return (
    <div className="container">
      <Header />
      <button onClick={handleClick}>Mostrar Personajes</button>
      {showCharacters && <CharacterList />}{" "}
      
      
      {/* <BtnShowContent /> */}
      {/* <CharacterList /> */}
      <Footer />

    </div>
  );
}

export default App;

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>

//     <Header />

//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>

//       <Footer />
//     </>
//   )
// }

// export default App
