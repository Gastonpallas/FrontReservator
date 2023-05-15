import React from 'react';
import Accueil from "./components/Accueil";
import NavBar from "./components/NavBar";
import DetailReservation from "./components/DetailReservation";
import {BrowserRouter, Route, Routes} from "react-router-dom";


function App() {
    let estConnecte = true;
    let salleID = 1;
    return(
      <div>
          <NavBar connecte={estConnecte} />
          <BrowserRouter>
              <Routes>
                  <Route path="/accueil" element={<Accueil />}>
                  </Route>
                  {/*Ajouter page Antoine TODO*/}
                  <Route path="/salles" element={<Accueil />}>
                  </Route>
              </Routes>
          </BrowserRouter>

      </div>
      )



}

export default App;
