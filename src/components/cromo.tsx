import { useState } from "react";
import type { ChromoData } from "../data/cromos";

import "../css/App.css";


interface Props {
  chromo: ChromoData;
}

const Chromo = ({ chromo }: Props) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleClick = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="chromo-card" onClick={handleClick}>
      <img src={chromo.image} alt={chromo.name} />
      <h3>{chromo.name}</h3>

      {showDetails && (
        <div className="chromo-details">
          <p>{chromo.description}</p>
        </div>
      )}
    </div>
  );
};

export default Chromo;
