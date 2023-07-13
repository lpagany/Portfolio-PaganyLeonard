import React, { useState } from "react";
import Témoignages from "./Témoignages";
import "../styles/ParentComponent.css";

export default function ParentComponent() {
  const [temoignages, setTemoignages] = useState([]);

  const updateTemoignages = (updatedTemoignages) => {
    setTemoignages(updatedTemoignages);
  };

  return (
    <div>
      <Témoignages temoignages={temoignages} setTemoignages={updateTemoignages} />
    </div>
  );
}







