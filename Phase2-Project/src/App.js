import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar';
import image from './Pictures/space.jpeg'
import PlanetContainer from './components/PlanetContainer';


function App() {
  return (
    <div className="App">
      <Navbar />
      <PlanetContainer />
    </div>
  );
}

export default App;
