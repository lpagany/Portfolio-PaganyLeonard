import React from "react";
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
import TemoignagesListe from "./pages/TemoignagesListe";
import TemoignagesModification from "./pages/TemoignagesModification";
import { TemoignagesProvider } from "../src/pages/store";


function App() {
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
          <Route exact path="/Témoignages" component={Témoignages} />
          <Route exact path="/Liste-des-temoignages" component={TemoignagesListe} />
          <Route exact path="/Modification" component={TemoignagesModification} />
          <Route exact path="/" component={Accueil} />
        </Switch>
        </TemoignagesProvider>
      </Router>
    </>
  );
}

export default App;

