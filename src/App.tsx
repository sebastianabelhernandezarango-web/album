import "./css/App.css";
import Chromo from "../src/components/cromo";
import { chromos } from "../src/data/cromos";

function App() {
  return (
    <div className="app">
      <h1>Álbum de Chromos</h1>
      <p>Colección de personajes de distintas franquicias</p>

      <div className="album-grid">
        {chromos.map((chromo) => (
          <Chromo key={chromo.id} chromo={chromo} />
        ))}
      </div>
    </div>
  );
}

export default App;
