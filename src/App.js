import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import NavMenu from "./components/NavMenu";
import Projets from "./pages/Projets";
import Contact from "./pages/Contact";
import Accueil from "./pages/Accueil";
import Projet1 from "./pages/Projet1";
import Projet2 from "./pages/Projet2";
import Projet3 from "./pages/Projet3";
import Témoignages from "./pages/Témoignages";
import AddTemoignage from "./pages/AddTemoignage";

import { TemoignagesProvider } from "../src/pages/store";


function App() {


  const [temoignages, setTemoignages] = useState([]);

  const handleAddTemoignage = (temoignage) => {

    setTemoignages([...temoignages, temoignage]);

  };
  return (
    <>
      <Router>
        <NavMenu />
        <TemoignagesProvider>
          <Switch>
            <Route exact path="/Projets" component={Projets} />
            <Route exact path="/projet-1" component={Projet1} />
            <Route exact path="/projet-2" component={Projet2} />
            <Route exact path="/projet-3" component={Projet3} />
            <Route exact path="/Contact" component={Contact} />
            <Route
              exact
              path="/Témoignages"
              component={() => <Témoignages temoignages={temoignages} />}
            />

            <Route
              exact
              path="/AddTemoignage"
              component={() => <AddTemoignage handleAddTemoignage={handleAddTemoignage} />}
            />


            <Route exact path="/" component={Accueil} />
          </Switch>
        </TemoignagesProvider>
      </Router>
    </>
  );
}

export default App;

