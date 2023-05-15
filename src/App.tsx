import React from 'react';
import Accueil from "./components/Accueil";
import NavBar from "./components/NavBar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Menu from "./components/Menu";
import DetailReservation from "./components/DetailReservation";

function App() {
    let estConnecte = true;
    return(
      <div>
          <NavBar connecte={estConnecte} />
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Accueil />}>
                  </Route>

                  <Route path="/salles" element={<Menu />}>
                  </Route>

                  <Route path="/salles/:id" element={<DetailReservation/>}>
                  </Route>

              </Routes>
          </BrowserRouter>

      </div>
      )



}

export default App;
