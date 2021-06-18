import './App.css';
import PlanetData from './db.json'

import Navbar from './components/Navbar';
import PlanetContainer from './components/PlanetContainer';


function App() {
  return (
    <div className="App">
      <Navbar />
      <PlanetContainer data={PlanetData} />
    </div>
  );
}

export default App;
