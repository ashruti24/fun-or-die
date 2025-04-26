import { useState } from 'react';
import './App.css';

function App() {
  const [disco, setDisco] = useState(false);

  const toggleDisco = () => {
    setDisco(true);
    setTimeout(() => setDisco(false), 3000); // 4 seconds
  };
  

  return (
    <div className="App">
      {/* 👇 new layer behind everything */}
      {disco && <div className="disco-background" />}
      
      <div className="folder-wrapper">
        <div className="folder-title" onClick={toggleDisco}>✨FUN OR DIE✨</div>
        <div className="folder-box">

          <a className="app-icon" href="https://codenames.game" target="_blank" rel="noopener noreferrer">
            <img src="/images/codenames.jpg" alt="Codenames" />
            <span>Codenames</span>
          </a>

          <a className="app-icon" href="https://skribbl.io/" target="_blank" rel="noopener noreferrer">
          <img src="/images/skribbl.png" alt="Dobble" />
            <span>Skribbl</span>
          </a>

          <a className="app-icon" href="https://spyfall.tannerkrewson.com/" target="_blank" rel="noopener noreferrer">
          <img src="/images/sky.png" alt="Dobble" />
            <span>Spyfall</span>
          </a>

          <a className="app-icon" href="https://www.geoguessr.com/" target="_blank" rel="noopener noreferrer">
          <img src="/images/geo.png" alt="Dobble" />
            <span>GeoGuessr</span>
          </a>

          <a className="app-icon" href="https://boardgamearena.com/gamepanel?game=dobble" target="_blank" rel="noopener noreferrer">
            <img src="/images/dobble.png" alt="Dobble" />
            <span>Dobble</span>
          </a>

          <a className="app-icon" href="https://play.cplegacy.com/" target="_blank" rel="noopener noreferrer">
          <img src="/images/peng.png" alt="Dobble" />
            <span>Club Penguin</span>
          </a>

          <div className="app-icon">
            <div className="icon-placeholder" />
            <span></span>
          </div>

          <div className="app-icon">
            <div className="icon-placeholder" />
            <span></span>
          </div>

          <div className="app-icon">
            <div className="icon-placeholder" />
            <span></span>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
