import React from 'react';
import Accueil from "./components/Accueil";
import NavBar from "./components/NavBar";


function App() {
    let estConnecte = true;
    return(
      <div>
          <NavBar connecte={estConnecte} />
        <Accueil/>
      </div>
      )



}

export default App;
